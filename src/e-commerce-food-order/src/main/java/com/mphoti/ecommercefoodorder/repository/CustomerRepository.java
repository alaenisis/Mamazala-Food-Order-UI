package com.mphoti.ecommercefoodorder.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mphoti.ecommercefoodorder.model.Customer;



public interface CustomerRepository extends JpaRepository<Customer,Long> {

    Optional<Customer> findById(Long id);  // if you're searching by ID

    Customer findByEmail(String email);

}
