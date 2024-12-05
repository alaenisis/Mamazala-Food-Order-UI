package com.mphoti.ecommercefoodorder.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double amountPaid;
    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Orderr order;


    public Payment() {
    }

    public Payment(Long id, Double amountPaid, Orderr order) {
        this.amountPaid = amountPaid;
        this.order = order;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getAmountPaid() {
        return this.amountPaid;
    }

    public void setAmountPaid(Double amountPaid) {
        this.amountPaid = amountPaid;
    }

    public Orderr getOrder() {
        return this.order;
    }

    public void setOrder(Orderr order) {
        this.order = order;
    }



}
