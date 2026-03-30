package com.newtonlab.service;

import com.newtonlab.model.Consultation;
import com.newtonlab.repository.ConsultationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ConsultationService {
    
    @Autowired
    private ConsultationRepository consultationRepository;
    
    @Transactional
    public Consultation createConsultation(Consultation consultation) {
        System.out.println("=================================");
        System.out.println("📋 NEW CONSULTATION REQUEST");
        System.out.println("=================================");
        System.out.println("Patient Name: " + consultation.getName());
        System.out.println("Email: " + consultation.getEmail());
        System.out.println("Phone: " + consultation.getPhone());
        System.out.println("Status: PENDING");
        
        Consultation saved = consultationRepository.save(consultation);
        
        System.out.println("✅ CONSULTATION SAVED TO DATABASE");
        System.out.println("Consultation ID: " + saved.getConsultationId());
        System.out.println("Database ID: " + saved.getId());
        System.out.println("=================================");
        
        return saved;
    }
    
    public List<Consultation> getAllConsultations() {
        return consultationRepository.findAllByOrderByCreatedAtDesc();
    }
    
    public List<Consultation> getConsultationsByStatus(String status) {
        return consultationRepository.findByStatus(status);
    }
    
    @Transactional
    public Consultation updateConsultationStatus(String consultationId, String status) {
        System.out.println("=================================");
        System.out.println("🔄 CONSULTATION STATUS UPDATE");
        System.out.println("=================================");
        System.out.println("Consultation ID: " + consultationId);
        System.out.println("New Status: " + status.toUpperCase());
        
        Consultation consultation = consultationRepository.findByConsultationId(consultationId)
                .orElseThrow(() -> new RuntimeException("Consultation not found"));
        
        consultation.setStatus(status);
        Consultation updated = consultationRepository.save(consultation);
        
        System.out.println("✅ STATUS UPDATED SUCCESSFULLY");
        System.out.println("Patient Name: " + updated.getName());
        System.out.println("Current Status: " + updated.getStatus().toUpperCase());
        System.out.println("=================================");
        
        return updated;
    }
}
