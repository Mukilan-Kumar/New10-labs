package com.newtonlab.controller;

import com.newtonlab.model.Consultation;
import com.newtonlab.service.ConsultationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/consultations")
@CrossOrigin(origins = "*")
public class ConsultationController {
    
    @Autowired
    private ConsultationService consultationService;
    
    @PostMapping
    public ResponseEntity<Map<String, Object>> createConsultation(@Valid @RequestBody Consultation consultation) {
        try {
            Consultation saved = consultationService.createConsultation(consultation);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Consultation booked successfully");
            response.put("data", saved);
            
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", "Failed to create consultation: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }
    
    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllConsultations() {
        List<Consultation> consultations = consultationService.getAllConsultations();
        
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("consultations", consultations);
        
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Consultation>> getConsultationsByStatus(@PathVariable String status) {
        return ResponseEntity.ok(consultationService.getConsultationsByStatus(status));
    }
    
    @PutMapping("/{consultationId}/status")
    public ResponseEntity<Map<String, Object>> updateStatus(
            @PathVariable String consultationId,
            @RequestBody Map<String, String> request) {
        try {
            String status = request.get("status");
            Consultation updated = consultationService.updateConsultationStatus(consultationId, status);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Status updated successfully");
            response.put("data", updated);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }
}
