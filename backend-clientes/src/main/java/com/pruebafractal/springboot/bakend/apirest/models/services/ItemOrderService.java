package com.pruebafractal.springboot.bakend.apirest.models.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pruebafractal.springboot.backend.apirest.models.entity.ItemOrder;
import com.pruebafractal.springboot.backend.apirest.repositories.ItemOrderRepository;

@Service
public class ItemOrderService {
	@Autowired
	ItemOrderRepository itemOrderRepository;
	
	public ArrayList<ItemOrder> getItemsOrder(){
		return (ArrayList<ItemOrder>) itemOrderRepository.findAll()
;	}
	
	public ItemOrder saveItemOrder(ItemOrder itemOrder) {
		return itemOrderRepository.save(itemOrder);
	}
}
