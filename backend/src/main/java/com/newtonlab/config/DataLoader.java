package com.newtonlab.config;

import com.newtonlab.model.Test;
import com.newtonlab.model.Package;
import com.newtonlab.repository.TestRepository;
import com.newtonlab.repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class DataLoader implements CommandLineRunner {
    
    @Autowired
    private TestRepository testRepository;
    
    @Autowired
    private PackageRepository packageRepository;
    
    @Override
    public void run(String... args) throws Exception {
        System.out.println("=================================");
        System.out.println("📊 LOADING TEST DATA");
        System.out.println("=================================");
        
        // Clear existing data
        testRepository.deleteAll();
        packageRepository.deleteAll();
        System.out.println("🗑️  Cleared existing data");
        
        // Load sample tests (lowest prices first)
        loadTests();
        loadPackages();
        
        System.out.println("=================================");
        System.out.println("✅ DATA LOADED SUCCESSFULLY!");
        System.out.println("Tests: " + testRepository.count());
        System.out.println("Packages: " + packageRepository.count());
        System.out.println("=================================");
    }
    
    private void loadTests() {
        // Add 50+ sample tests with lowest prices first
        testRepository.save(createTest("Glucose - Postprandial", 40, 40, "Plasma Naf", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Glucose - Random", 40, 40, "Naf Plasma", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Glucose - Fasting", 50, 50, "Naf Plasma", "1 Day", "CLINICAL BIOCHEMISTRY", true));
        testRepository.save(createTest("Cholesterol - Total", 50, 50, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Uric Acid - Serum", 50, 50, "Serum", "8 hr", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Creatinine - 24 Hr Urine", 50, 50, "Urine", "1 Day", "CLINICAL PATHOLOGY", false));
        testRepository.save(createTest("Calcium - 24 Hr Urine", 80, 80, "Urine", "6 hr", "CLINICAL PATHOLOGY", false));
        testRepository.save(createTest("Triglycerides (TGL)", 100, 100, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Urea", 100, 100, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Albumin", 100, 100, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Creatinine - Serum", 100, 100, "Serum", "6 hr", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Thyroid Stimulating Hormone (TSH)", 100, 100, "Serum", "8 hr", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Bilirubin - Total", 100, 100, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Bilirubin - Direct", 100, 100, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Calcium - Serum", 100, 100, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Phosphorus", 100, 100, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Protein - Total", 150, 150, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Alkaline Phosphatase (ALP)", 150, 150, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("SGOT (AST)", 150, 150, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("SGPT (ALT)", 150, 150, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Iron", 200, 200, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Magnesium", 200, 200, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Sodium", 200, 200, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Potassium", 200, 200, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Chloride", 200, 200, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Cholesterol - HDL", 250, 250, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Cholesterol - LDL", 250, 250, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Complete Blood Count (CBC)", 300, 300, "WB EDTA", "6 hr", "HAEMATOLOGY", false));
        testRepository.save(createTest("ESR", 300, 300, "WB EDTA", "6 hr", "HAEMATOLOGY", false));
        testRepository.save(createTest("Hemoglobin", 300, 300, "WB EDTA", "6 hr", "HAEMATOLOGY", false));
        testRepository.save(createTest("Platelet Count", 300, 300, "WB EDTA", "6 hr", "HAEMATOLOGY", false));
        testRepository.save(createTest("WBC Count", 300, 300, "WB EDTA", "6 hr", "HAEMATOLOGY", false));
        testRepository.save(createTest("RBC Count", 300, 300, "WB EDTA", "6 hr", "HAEMATOLOGY", false));
        testRepository.save(createTest("Urine Routine", 350, 350, "Urine", "6 hr", "CLINICAL PATHOLOGY", false));
        testRepository.save(createTest("Stool Routine", 350, 350, "Stool", "1 Day", "CLINICAL PATHOLOGY", false));
        testRepository.save(createTest("Blood Group & Rh Type", 400, 400, "WB EDTA", "6 hr", "HAEMATOLOGY", false));
        testRepository.save(createTest("Kidney Function Test", 400, 400, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Liver Function Test", 480, 480, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Lipid Profile", 650, 650, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Thyroid Profile (T3, T4, TSH)", 500, 500, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("HbA1c (Glycosylated Hemoglobin)", 550, 550, "WB EDTA", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Vitamin B12", 600, 600, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Folate (Folic Acid)", 600, 600, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Ferritin", 700, 700, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("TIBC (Total Iron Binding Capacity)", 750, 750, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Vitamin D (25-OH)", 900, 900, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("PSA (Prostate Specific Antigen)", 800, 800, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("CA 125 (Ovarian Cancer Marker)", 850, 850, "Serum", "2 Days", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Testosterone - Total", 1000, 1000, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("Prolactin", 1000, 1000, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
        testRepository.save(createTest("LH (Luteinizing Hormone)", 1000, 1000, "Serum", "1 Day", "CLINICAL BIOCHEMISTRY", false));
    }
    
    private void loadPackages() {
        packageRepository.save(createPackage("New 69", "Comprehensive health screening package with essential tests", 
            899, 899, 9, "Health Checkup", 
            "Fasting Blood Sugar, Lipid Profile, Liver Function Profile, IRON PROFILE, Complete Urine Analysis (CUE), Glycosylated Hemoglobin (GHb/HBA1c), Calcium & Phosphorus, Thyroid Profile-II, Complete Blood Count + ESR, Kidney Basic screen"));
        
        packageRepository.save(createPackage("New 79", "Extended health package with vitamin and mineral screening", 
            1199, 1199, 12, "Health Checkup", 
            "Fasting Blood Sugar, Lipid Profile, Liver Function Profile, IRON PROFILE, Complete Urine Analysis (CUE), Glycosylated Hemoglobin (GHb/HBA1c), Calcium & Phosphorus, Folate, Vitamin - B12 & 25-Hydroxy Vitamin D Total (D2 & D3), Thyroid Profile-II, Complete Blood Count + ESR, Kidney Basic screen"));
        
        packageRepository.save(createPackage("New 89", "Advanced health checkup with cardiac markers", 
            1599, 1599, 15, "Health Checkup", 
            "Fasting Blood Sugar, Lipid Profile, Liver Function Profile, IRON PROFILE, Complete Urine Analysis (CUE), Glycosylated Hemoglobin (GHb/HBA1c), Calcium & Phosphorus, Folate, Vitamin - B12 & 25-Hydroxy Vitamin D Total (D2 & D3), hsCRP, Homocysteine, Thyroid Profile-II, Complete Blood Count + ESR, Kidney Basic screen, ECG"));
        
        packageRepository.save(createPackage("New 99 Male", "Comprehensive male health package with prostate screening", 
            2999, 2999, 27, "Health Checkup", 
            "Lipid Profile, Liver Function Profile, IRON PROFILE, Prostate Specific Antigen (PSA) Total, Complete Urine Analysis (CUE), Urine Albumin(Microalbumin)/Creatinine Ratio, Glucose - Fasting, Fasting Urine Glucose, Glucose - Postprandial, Post Prandial Urine Glucose, Glycosylated Hemoglobin (GHb/HBA1c), Homocysteine, Vitamin - B12 & 25-Hydroxy Vitamin D Total (D2 & D3), Calcium, Phosphorus, Amylase, Lipase, LDH, hsCRP, Ferritin, Zinc, CK, Testosterone, APO-A1, APO-B, Thyroid Profile-I, Complete Blood Count (CBC), Kidney Basic screen"));
        
        packageRepository.save(createPackage("New 99 Female", "Comprehensive female health package with cancer marker screening", 
            2999, 2999, 27, "Health Checkup", 
            "Lipid Profile, Liver Function Profile, IRON PROFILE, CA 125 Ovarian Cancer marker, Complete Urine Analysis (CUE), Urine Albumin(Microalbumin)/Creatinine Ratio, Glucose - Fasting, Fasting Urine Glucose, Glucose - Postprandial, Post Prandial Urine Glucose, Glycosylated Hemoglobin (GHb/HBA1c), Homocysteine, Vitamin - B12 & 25-Hydroxy Vitamin D Total (D2 & D3), Calcium, Phosphorus, Amylase, Lipase, LDH, hsCRP, Ferritin, Zinc, CK, Testosterone, APO-A1, APO-B, Thyroid Profile-I, Complete Blood Count (CBC), Kidney Basic screen"));
        
        packageRepository.save(createPackage("Thyroid Screening", "Comprehensive thyroid function and antibody screening", 
            1999, 1999, 9, "Specialized", 
            "Anti Microsomal/Thryroperoxidase Antibody (Anti TPO), Anti Thyroglobulin Antibody (ATG), Calcitonin Serum, Thyroglobulin, Triiodothyronine Total (TT3), Thyroxine - Total (TT4), Triiodothyronine Free (FT3), Thyroxine - Free (FT4), Thyroid Stimulating Hormone (TSH)"));
        
        packageRepository.save(createPackage("Diabetes Screening", "Complete diabetes monitoring package", 
            1299, 1299, 8, "Specialized", 
            "Glucose - Fasting, Glucose - Postprandial, HbA1c, Insulin - Fasting, C-Peptide, Lipid Profile, Kidney Function Test, Urine Routine"));
        
        packageRepository.save(createPackage("Cardiac Risk Assessment", "Heart health evaluation package", 
            2499, 2499, 12, "Specialized", 
            "Lipid Profile, hsCRP, Homocysteine, Troponin I, CPK-MB, LDH, Apolipoprotein A1, Apolipoprotein B, Lipoprotein(a), ECG, Complete Blood Count, Kidney Function Test"));
    }
    
    private Test createTest(String name, double price, double mrp, String sampleType, String tat, String department, boolean fastingRequired) {
        Test test = new Test();
        test.setName(name);
        test.setPrice(new BigDecimal(price));
        test.setMrp(new BigDecimal(mrp));
        test.setSampleType(sampleType);
        test.setTat(tat);
        test.setDepartment(department);
        test.setCategory(department);
        test.setFastingRequired(fastingRequired);
        test.setStatus("active");
        return test;
    }
    
    private Package createPackage(String name, String description, double price, double mrp, int testCount, String category, String includes) {
        Package pkg = new Package();
        pkg.setName(name);
        pkg.setDescription(description);
        pkg.setPrice(new BigDecimal(price));
        pkg.setMrp(new BigDecimal(mrp));
        pkg.setTestCount(testCount);
        pkg.setCategory(category);
        pkg.setIncludes(includes);
        pkg.setStatus("active");
        return pkg;
    }
}
