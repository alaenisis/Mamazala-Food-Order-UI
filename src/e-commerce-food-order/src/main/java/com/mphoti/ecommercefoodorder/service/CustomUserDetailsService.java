package com.mphoti.ecommercefoodorder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mphoti.ecommercefoodorder.model.Customer;
import com.mphoti.ecommercefoodorder.repository.CustomerRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Customer customer = customerRepository.findByEmail(email);
            if(customer == null) {
                throw new UsernameNotFoundException("User not found");
            }

        return User.builder()
            .username(customer.getEmail())
            .password(customer.getPassword())
            .roles("USER") // Ama Roles
            .build();    
    }

   

}
