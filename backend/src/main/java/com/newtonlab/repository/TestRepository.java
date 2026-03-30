package com.newtonlab.repository;

import com.newtonlab.model.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestRepository extends JpaRepository<Test, Long> {
    List<Test> findByStatus(String status);
    List<Test> findByNameContainingIgnoreCase(String name);
}
