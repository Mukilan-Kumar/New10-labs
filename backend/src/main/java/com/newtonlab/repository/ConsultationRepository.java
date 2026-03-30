package com.newtonlab.repository;

import com.newtonlab.model.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ConsultationRepository extends JpaRepository<Consultation, UUID> {
    
    Optional<Consultation> findByConsultationId(String consultationId);
    
    List<Consultation> findByStatus(String status);
    
    List<Consultation> findByEmailOrderByCreatedAtDesc(String email);
    
    List<Consultation> findAllByOrderByCreatedAtDesc();
}
