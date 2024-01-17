package com.pruebafractal.springboot.backend.apirest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pruebafractal.springboot.backend.apirest.repositories.ProductRepository;

@RestController
@RequestMapping("/api/products")
public class ProductController<Product> {

	@Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts() {
        return (List<Product>) productRepository.findAll();
    }
}
