package com.mphoti.ecommercefoodorder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mphoti.ecommercefoodorder.dto.LoginRequest;
import com.mphoti.ecommercefoodorder.dto.LoginResponse;
import com.mphoti.ecommercefoodorder.model.Customer;
import com.mphoti.ecommercefoodorder.repository.CustomerRepository;
import com.mphoti.ecommercefoodorder.service.JwtService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Customer customer = customerRepository.findByEmail(loginRequest.getEmail());
        if (customer == null) {
            throw new RuntimeException("User not found");
        }

        if (!passwordEncoder.matches(loginRequest.getPassword(), customer.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtService.generateToken(loginRequest.getEmail());
               
        return ResponseEntity.ok(new LoginResponse(token));
    }
    
}
