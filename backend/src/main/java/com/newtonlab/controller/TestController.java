package com.newtonlab.controller;

import com.newtonlab.model.Test;
import com.newtonlab.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tests")
@CrossOrigin(origins = "*")
public class TestController {
    
    @Autowired
    private TestRepository repository;
    
    @GetMapping
    public List<Test> getAllTests(@RequestParam(required = false) String search) {
        if (search != null && !search.isEmpty()) {
            return repository.findByNameContainingIgnoreCase(search);
        }
        return repository.findByStatus("active");
    }
}
