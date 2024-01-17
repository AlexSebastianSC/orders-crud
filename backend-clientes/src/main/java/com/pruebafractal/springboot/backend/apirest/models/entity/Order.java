package com.pruebafractal.springboot.backend.apirest.models.entity;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="orders")
public class Order implements Serializable {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long numOrder;
	private String charAt;
	private int numProducts;
	private float finalPrice;

	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<ItemOrder> itemOrders;
	
	
	public Long getNumOrder() {
		return numOrder;
	}



	public void setNumOrder(Long numOrder) {
		this.numOrder = numOrder;
	}



	public String getCharAt() {
		return charAt;
	}



	public void setCharAt(String charAt) {
		this.charAt = charAt;
	}



	public int getNumProducts() {
		return numProducts;
	}



	public void setNumProducts(int numProducts) {
		this.numProducts = numProducts;
	}



	public float getFinalPrice() {
		return finalPrice;
	}



	public void setFinalPrice(float finalPrice) {
		this.finalPrice = finalPrice;
	}



	public List<ItemOrder> getItemOrders() {
		return itemOrders;
	}



	public void setItemOrders(List<ItemOrder> itemOrders) {
		this.itemOrders = itemOrders;
	}



	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
}
