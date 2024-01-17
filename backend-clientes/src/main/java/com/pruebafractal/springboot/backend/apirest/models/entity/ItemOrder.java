package com.pruebafractal.springboot.backend.apirest.models.entity;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="items_order")
public class ItemOrder implements Serializable{

	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idItem;
	private Long productIdentifier;
	private String productName;
	private float uniPrice;
	private int quantity;
	private float totalPrice;
	
	@ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
	
    
    
	public Order getOrder() {
		return order;
	}



	public void setOrder(Order order) {
		this.order = order;
	}



	public Product getProduct() {
		return product;
	}



	public void setProduct(Product product) {
		this.product = product;
	}



	public Long getId() {
		return idItem;
	}



	public void setId(Long id) {
		this.idItem = id;
	}



	public Long getProductId() {
		return productIdentifier;
	}



	public void setProductId(Long productId) {
		this.productIdentifier = productId;
	}



	public String getProductName() {
		return productName;
	}



	public void setProductName(String productName) {
		this.productName = productName;
	}



	public float getUniPrice() {
		return uniPrice;
	}



	public void setUniPrice(float uniPrice) {
		this.uniPrice = uniPrice;
	}



	public int getQuantity() {
		return quantity;
	}



	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}



	public float getTotalPrice() {
		return totalPrice;
	}



	public void setTotalPrice(float totalPrice) {
		this.totalPrice = totalPrice;
	}



	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
}
