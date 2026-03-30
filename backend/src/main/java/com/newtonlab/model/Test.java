package com.newtonlab.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "tests")
public class Test {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private BigDecimal price;
    
    @Column(nullable = false)
    private BigDecimal mrp;
    
    @Column(name = "sample_type")
    private String sampleType;
    
    private String tat;
    
    private String department;
    
    private String category;
    
    @Column(name = "fasting_required")
    private Boolean fastingRequired = false;
    
    private String status = "active";
    
    // Constructors
    public Test() {}
    
    public Test(Long id, String name, BigDecimal price, BigDecimal mrp, String sampleType, 
                String tat, String department, String category, Boolean fastingRequired, String status) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.mrp = mrp;
        this.sampleType = sampleType;
        this.tat = tat;
        this.department = department;
        this.category = category;
        this.fastingRequired = fastingRequired;
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
    
    public String getSampleType() {
        return sampleType;
    }
    
    public void setSampleType(String sampleType) {
        this.sampleType = sampleType;
    }
    
    public String getTat() {
        return tat;
    }
    
    public void setTat(String tat) {
        this.tat = tat;
    }
    
    public String getDepartment() {
        return department;
    }
    
    public void setDepartment(String department) {
        this.department = department;
    }
    
    public String getCategory() {
        return category;
    }
    
    public void setCategory(String category) {
        this.category = category;
    }
    
    public Boolean getFastingRequired() {
        return fastingRequired;
    }
    
    public void setFastingRequired(Boolean fastingRequired) {
        this.fastingRequired = fastingRequired;
    }
    
    public String getStatus() {
        return status;
    }
    
    public void setStatus(String status) {
        this.status = status;
    }
}
