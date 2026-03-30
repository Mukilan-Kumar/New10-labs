package com.newtonlab.controller;

import com.newtonlab.model.SupportCallback;
import com.newtonlab.repository.SupportCallbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/support")
@CrossOrigin(origins = "*")
public class SupportController {
    
    @Autowired
    private SupportCallbackRepository repository;
    
    @PostMapping("/callback")
    public ResponseEntity<?> createCallback(@RequestBody SupportCallback callback) {
        System.out.println("=== SUPPORT CALLBACK REQUEST ===");
        System.out.println("Name: " + callback.getName());
        System.out.println("Phone: " + callback.getPhone());
        
        SupportCallback saved = repository.save(callback);
        return ResponseEntity.ok(saved);
    }
    
    @GetMapping
    public List<SupportCallback> getAll() {
        return repository.findAll();
    }
}
