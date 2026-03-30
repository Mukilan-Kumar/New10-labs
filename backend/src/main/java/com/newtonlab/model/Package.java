package com.newtonlab.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "packages")
public class Package {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column(nullable = false)
    private BigDecimal price;
    
    @Column(nullable = false)
    private BigDecimal mrp;
    
    @Column(name = "test_count")
    private Integer testCount;
    
    private String category;
    
    @Column(columnDefinition = "TEXT")
    private String includes;
    
    private String status = "active";
    
    // Constructors
    public Package() {}
    
    public Package(Long id, String name, String description, BigDecimal price, BigDecimal mrp, 
                   Integer testCount, String category, String includes, String status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.mrp = mrp;
        this.testCount = testCount;
        this.category = category;
        this.includes = includes;
        this.status = status;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public BigDecimal getPrice() {
        return price;
    }
    
    public void setPrice(BigDecimal price) {
        this.price = price;
    }
    
    public BigDecimal getMrp() {
        return mrp;
    }
    
    public void setMrp(BigDecimal mrp) {
        this.mrp = mrp;
    }
    
    public Integer getTestCount() {
        return testCount;
    }
    
    public void setTestCount(Integer testCount) {
        this.testCount = testCount;
    }
    
    public String getCategory() {
        return category;
    }
    
    public void setCategory(String category) {
        this.category = category;
    }
    
    public String getIncludes() {
        return includes;
    }
    
    public void setIncludes(String includes) {
        this.includes = includes;
    }
    
    public String getStatus() {
        return status;
    }
    
    public void setStatus(String status) {
        this.status = status;
    }
}
