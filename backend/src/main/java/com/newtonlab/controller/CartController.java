package com.newtonlab.controller;

import com.newtonlab.model.CartItem;
import com.newtonlab.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "*")
public class CartController {
    
    @Autowired
    private CartItemRepository repository;
    
    @GetMapping("/{sessionId}")
    public List<CartItem> getCart(@PathVariable String sessionId) {
        return repository.findBySessionId(sessionId);
    }
    
    @PostMapping
    public ResponseEntity<?> addToCart(@RequestBody CartItem item) {
        System.out.println("=== ADD TO CART ===");
        System.out.println("Item: " + item.getItemName());
        System.out.println("Price: " + item.getPrice());
        
        CartItem saved = repository.save(item);
        return ResponseEntity.ok(saved);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeFromCart(@PathVariable UUID id) {
        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
    @DeleteMapping("/clear/{sessionId}")
    @Transactional
    public ResponseEntity<?> clearCart(@PathVariable String sessionId) {
        repository.deleteBySessionId(sessionId);
        return ResponseEntity.ok().build();
    }
}
