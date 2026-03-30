package com.newtonlab.controller;

import com.newtonlab.model.HomeVisitBooking;
import com.newtonlab.repository.HomeVisitBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/home-visit")
@CrossOrigin(origins = "*")
public class HomeVisitController {
    
    @Autowired
    private HomeVisitBookingRepository repository;
    
    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody HomeVisitBooking booking) {
        System.out.println("=== NEW HOME VISIT BOOKING ===");
        System.out.println("Name: " + booking.getName());
        System.out.println("Phone: " + booking.getPhone());
        System.out.println("Address: " + booking.getAddress());
        
        HomeVisitBooking saved = repository.save(booking);
        System.out.println("Booking ID: " + saved.getBookingId());
        return ResponseEntity.ok(saved);
    }
    
    @GetMapping
    public List<HomeVisitBooking> getAll() {
        return repository.findAll();
    }
}
