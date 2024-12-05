package com.mphoti.ecommercefoodorder.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mphoti.ecommercefoodorder.model.Customer;
import com.mphoti.ecommercefoodorder.model.Food;
import com.mphoti.ecommercefoodorder.model.Orderr;
import com.mphoti.ecommercefoodorder.model.Payment;
import com.mphoti.ecommercefoodorder.repository.CustomerRepository;
import com.mphoti.ecommercefoodorder.repository.OrderRepository;
import com.mphoti.ecommercefoodorder.repository.PaymentRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final PaymentRepository paymentRepository;
    private final CustomerRepository customerRepository;

    public OrderService(OrderRepository orderRepository, PaymentRepository ppaymentRepository,
            CustomerRepository customerRepository) {
        this.orderRepository = orderRepository;
        this.paymentRepository = ppaymentRepository;
        this.customerRepository = customerRepository;
    }

    public Orderr placeOrder(Customer customer, Food fooditem) {
        Orderr order = new Orderr();
        order.setCustomer(customer);
        order.setFoodItem(fooditem);
        order.setPaidAmount(0.0);
        order.setTotalAmount(order.getTotalAmount() + fooditem.getPrice());
        order.setStatus("pending");

        return orderRepository.save(order);
    }

    public Payment makePayment(Orderr order) {
        Double amountToBePaid = order.getTotalAmount() * 0.5; // fix this here such that when you might have multiple
                                                              // orders it gets the right total price

        Payment payment = new Payment();
        payment.setAmountPaid(amountToBePaid); // This should prompt third party service to make payment
        payment.setOrder(order);

        // update ordering status.
        order.setStatus("inProgress");
        orderRepository.save(order);

        return paymentRepository.save(payment);
    }

    public List<Orderr> getCustomerOrders(Long customerId) {
        // Fetch customer by customerId
        Optional<Customer> customerOpt = customerRepository.findById(customerId);

        // Check if customer exists, if not, return an empty list or throw an exception
        if (customerOpt.isPresent()) {
            Customer customer = customerOpt.get();
            // Retrieve all orders for the given customer
            return orderRepository.findAllByCustomer(customer);
        } else {
            // Handle customer not found, can throw an exception if necessary
            throw new EntityNotFoundException("Customer with id " + customerId + " not found.");
        }
    }

    public Orderr getOrderById(Long orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("Order not found with ID: " + orderId));
    }
}
