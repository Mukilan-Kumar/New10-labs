package com.newtonlab;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NewtonLabApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(NewtonLabApplication.class, args);
        System.out.println("=================================");
        System.out.println("Newton's Lab Backend Started!");
        System.out.println("Server running on: http://localhost:8080");
        System.out.println("=================================");
    }
}
