package com.pruebafractal.springboot.backend.apirest.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pruebafractal.springboot.backend.apirest.models.entity.ItemOrder;

@Repository
public interface ItemOrderRepository extends CrudRepository<ItemOrder, Long> {

	public ItemOrder findByItemOrderId(Long itemOrderId);
}
