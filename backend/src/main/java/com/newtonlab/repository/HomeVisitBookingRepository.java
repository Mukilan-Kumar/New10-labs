package com.newtonlab.repository;

import com.newtonlab.model.HomeVisitBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface HomeVisitBookingRepository extends JpaRepository<HomeVisitBooking, UUID> {
    
    Optional<HomeVisitBooking> findByBookingId(String bookingId);
    
    List<HomeVisitBooking> findByStatus(String status);
    
    List<HomeVisitBooking> findByEmailOrderByCreatedAtDesc(String email);
    
    List<HomeVisitBooking> findAllByOrderByCreatedAtDesc();
}
