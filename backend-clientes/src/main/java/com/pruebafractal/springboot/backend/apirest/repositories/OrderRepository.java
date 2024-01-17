package com.pruebafractal.springboot.backend.apirest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.pruebafractal.springboot.backend.apirest.models.entity.Order;

public interface OrderRepository extends CrudRepository<Order,Long> {

	public Order findByOrdernumber(Long ordernumber);
}
