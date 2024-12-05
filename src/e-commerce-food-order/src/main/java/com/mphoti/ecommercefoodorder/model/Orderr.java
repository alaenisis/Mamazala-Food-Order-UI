package com.mphoti.ecommercefoodorder.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "orderr")
public class Orderr {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "food_id")
    private Food food;
    private Double paidAmount;
    private Double totalAmount;
    private String status; // "pending","Completed","In Prepared"

    public Orderr() {
        this.totalAmount = 0.0;
    }

    public Orderr(Customer customer, Food food, Double paidAmount, Double totalAmount, String status) {

        this.customer = customer;
        this.food = food;
        this.paidAmount = paidAmount;
        this.totalAmount = totalAmount;
        this.status = status;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return this.customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Food getFoodItem() {
        return this.food;
    }

    public void setFoodItem(Food foodItem) {
        this.food = foodItem;
    }

    public Double getPaidAmount() {
        return this.paidAmount;
    }

    public Double getTotalAmount() {
        return this.totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public void setPaidAmount(Double paidAmount) {
        this.paidAmount = paidAmount;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
