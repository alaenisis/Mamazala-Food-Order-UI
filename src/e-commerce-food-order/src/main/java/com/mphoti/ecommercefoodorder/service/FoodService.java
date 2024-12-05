package com.mphoti.ecommercefoodorder.service;

import org.springframework.stereotype.Service;
import com.mphoti.ecommercefoodorder.model.Food;
import java.util.List;
import com.mphoti.ecommercefoodorder.repository.FoodRepository;

@Service
public class FoodService {
    public final FoodRepository foodRepository;

    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    public List<Food> getAvailableFoodItems() {
        return foodRepository.findByAvailableTrue();
    }

    public FoodRepository getFoodRepository() {
        return this.foodRepository;
    }

}
