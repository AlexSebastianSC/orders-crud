package com.pruebafractal.springboot.backend.apirest.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.pruebafractal.springboot.backend.apirest.models.entity.Product;

public interface ProductRepository extends CrudRepository<Product, Long>{
	
	public Product findByProductId(Long productId);

}
