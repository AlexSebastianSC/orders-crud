package com.pruebafractal.springboot.backend.apirest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pruebafractal.springboot.backend.apirest.repositories.OrderRepository;

@RestController
@RequestMapping("/api/orders")
public class OrderController<Order> {

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping
    public List<Order> getAllOrders() {
        return (List<Order>) orderRepository.findAll();
    }

	
}
