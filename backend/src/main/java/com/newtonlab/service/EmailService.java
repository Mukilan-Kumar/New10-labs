package com.newtonlab.service;

import org.springframework.stereotype.Service;

@Service
public class EmailService {
    
    public void sendConsultationEmail(String to, String name, String consultationId) {
        System.out.println("=== EMAIL NOTIFICATION ===");
        System.out.println("To: " + to);
        System.out.println("Subject: Consultation Request Received");
        System.out.println("Consultation ID: " + consultationId);
        System.out.println("Patient: " + name);
        System.out.println("Email sent successfully!");
    }
    
    public void sendBookingConfirmation(String to, String name, String bookingId) {
        System.out.println("=== BOOKING CONFIRMATION EMAIL ===");
        System.out.println("To: " + to);
        System.out.println("Booking ID: " + bookingId);
        System.out.println("Patient: " + name);
        System.out.println("Email sent successfully!");
    }
}
