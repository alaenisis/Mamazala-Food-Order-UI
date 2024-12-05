package com.mphoti.ecommercefoodorder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mphoti.ecommercefoodorder.model.Customer;
import com.mphoti.ecommercefoodorder.service.CustomerService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping("/signup")
    @CrossOrigin(origins = { "http://127.0.0.1:5500", "http://localhost:3000" })
    public ResponseEntity<Customer> register(@RequestBody Customer customer) {
        return ResponseEntity.ok(customerService.registerCustomer(customer));
    }

    @PostMapping("/login")
    @CrossOrigin(origins = { "http://127.0.0.1:5500", "http://localhost:3000" })
    public ResponseEntity<Customer> login(@RequestParam String email, @RequestParam String password) {
        Customer customer = customerService.login(email, password);

        if (customer != null) {
            return ResponseEntity.ok(customer);
        }

        return ResponseEntity.status(401).body(null);
    }

}
