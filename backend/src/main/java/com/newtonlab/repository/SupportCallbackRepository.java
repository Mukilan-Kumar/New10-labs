package com.newtonlab.repository;

import com.newtonlab.model.SupportCallback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface SupportCallbackRepository extends JpaRepository<SupportCallback, UUID> {
    
    List<SupportCallback> findByStatus(String status);
    
    List<SupportCallback> findAllByOrderByCreatedAtDesc();
}
