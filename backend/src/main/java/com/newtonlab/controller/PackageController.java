package com.newtonlab.controller;

import com.newtonlab.model.Package;
import com.newtonlab.repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/packages")
@CrossOrigin(origins = "*")
public class PackageController {
    
    @Autowired
    private PackageRepository repository;
    
    @GetMapping
    public List<Package> getAllPackages() {
        return repository.findByStatus("active");
    }
    
    @GetMapping("/{id}")
    public Package getPackageById(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }
}
