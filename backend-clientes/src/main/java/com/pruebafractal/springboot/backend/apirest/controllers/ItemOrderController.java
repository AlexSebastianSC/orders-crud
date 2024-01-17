package com.pruebafractal.springboot.backend.apirest.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pruebafractal.springboot.backend.apirest.repositories.ItemOrderRepository;
import com.pruebafractal.springboot.bakend.apirest.models.services.ItemOrderService;

@RestController
@RequestMapping("/api/item-orders")
public class ItemOrderController<ItemOrder> {

	@Autowired
    private ItemOrderService itemOrderService;

    @GetMapping
    public ArrayList<ItemOrder> getAllItemOrders() {
        return (ArrayList<ItemOrder>) itemOrderService.getItemsOrder();
    }
    
    public ItemOrder saveItemOrder(@RequestBody ItemOrder itemOrder) {
    	return this.itemOrderService.saveItemOrder(itemOrder);
    }

}
