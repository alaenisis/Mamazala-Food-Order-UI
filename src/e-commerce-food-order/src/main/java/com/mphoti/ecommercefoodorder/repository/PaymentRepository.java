package com.mphoti.ecommercefoodorder.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mphoti.ecommercefoodorder.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment,Long> {

}
