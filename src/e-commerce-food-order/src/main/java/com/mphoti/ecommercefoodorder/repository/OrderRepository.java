package com.mphoti.ecommercefoodorder.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.mphoti.ecommercefoodorder.model.Customer;
import com.mphoti.ecommercefoodorder.model.Orderr;
import java.util.List;

public interface OrderRepository extends JpaRepository<Orderr, Long> {

    List<Orderr> findAllByCustomer(Customer customer);
}
