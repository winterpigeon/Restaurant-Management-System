package com.restaurant.services.auth.admin;

import com.restaurant.dtos.CategoryDto;
import com.restaurant.entities.Category;
import com.restaurant.repositories.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class AdminServiceImp implements AdminService{
    private final CategoryRepository categoryRepository;

    @Override

    public CategoryDto postCategory(CategoryDto categoryDto) throws IOException {
        Category category = new Category();
        category.setName(category.getName());
        category.setDescription(category.getDescription());
        category.setImg(categoryDto.getImg().getBytes());
        Category createdCategory = categoryRepository.save(category);
        CategoryDto createdCategoryDto = new CategoryDto();
        createdCategoryDto.setId(createdCategory.getId());
        return createdCategoryDto;
    }
}
