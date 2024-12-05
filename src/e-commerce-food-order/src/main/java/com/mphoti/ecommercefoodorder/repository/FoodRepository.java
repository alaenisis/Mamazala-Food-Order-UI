package com.mphoti.ecommercefoodorder.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mphoti.ecommercefoodorder.model.Food;
import java.util.List;

public interface FoodRepository extends JpaRepository<Food, Long> {
    List<Food> findByAvailableTrue();
}
