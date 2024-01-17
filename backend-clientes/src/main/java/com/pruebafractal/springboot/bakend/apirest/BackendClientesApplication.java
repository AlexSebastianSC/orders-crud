package com.pruebafractal.springboot.bakend.apirest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@ComponentScan(basePackages = {"com.pruebafractal.springboot.backend.apirest.controllers", "com.pruebafractal.springboot.backend.apirest.repositories"})
@EntityScan(basePackages = "com.pruebafractal.springboot.backend.apirest.models.entity")
@EnableJpaRepositories(basePackages = "com.pruebafractal.springboot.backend.apirest.repositories")
public class BackendClientesApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendClientesApplication.class, args);
	}

}
