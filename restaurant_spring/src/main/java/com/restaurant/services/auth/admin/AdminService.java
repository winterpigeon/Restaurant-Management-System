package com.restaurant.services.auth.admin;

import com.restaurant.dtos.CategoryDto;

import java.io.IOException;

public interface AdminService {
    CategoryDto postCategory(CategoryDto categoryDto) throws IOException;
}
