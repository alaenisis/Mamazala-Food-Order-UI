package com.mphoti.ecommercefoodorder.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mphoti.ecommercefoodorder.model.Customer;
import com.mphoti.ecommercefoodorder.model.Food;
import com.mphoti.ecommercefoodorder.model.Orderr;
import com.mphoti.ecommercefoodorder.model.Payment;
import com.mphoti.ecommercefoodorder.repository.CustomerRepository;
import com.mphoti.ecommercefoodorder.service.OrderService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;
    private final CustomerRepository customerRepository;

    public OrderController(OrderService orderService, CustomerRepository customerRepository) {
        this.orderService = orderService;
        this.customerRepository = customerRepository;
    }

    @PostMapping("/place")
    public ResponseEntity<Orderr> placeOrder(Principal principal, @RequestParam Food fooditem,
            @RequestParam Double totalAmount) {
        Customer customer = customerRepository.findByEmail(principal.getName()); // do an exception where it is gonna
                                                                                 // throw
                                                                                
        Orderr order = orderService.placeOrder(customer, fooditem);
        return ResponseEntity.ok(order);
    }

    @PostMapping("/pay")
    public ResponseEntity<Payment> makePayment(@RequestParam Long orderId) {
        Orderr order = orderService.getOrderById(orderId);
        Payment payment = orderService.makePayment(order);
        return ResponseEntity.ok(payment);
    }

    @GetMapping("/my-orders")
    public ResponseEntity<List<Orderr>> getMyOrders(Principal principal) {
        Customer customer = customerRepository.findByEmail(principal.getName());
        List<Orderr> orders = orderService.getCustomerOrders(customer.getId());

        return ResponseEntity.ok(orders);

    }
}
