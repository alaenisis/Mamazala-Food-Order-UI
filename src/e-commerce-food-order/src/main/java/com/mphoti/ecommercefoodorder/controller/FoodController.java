package com.mphoti.ecommercefoodorder.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.mphoti.ecommercefoodorder.model.Food;
import java.util.List;
import com.mphoti.ecommercefoodorder.service.FoodService;

@RestController
@RequestMapping("/api/food")
public class FoodController {
    private final FoodService foodService;


    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @GetMapping("/menu")
    public ResponseEntity<List<Food>> getMenu(){
        List<Food> foodItems=  foodService.getAvailableFoodItems();
        return ResponseEntity.ok(foodItems);
    }

}
