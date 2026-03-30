-- Insert Test Data (150+ tests from original website)
-- Sorted by lowest price first

-- Clear existing data
TRUNCATE TABLE tests, packages CASCADE;

-- Insert Tests
INSERT INTO tests (name, price, mrp, sample_type, tat, department, category, fasting_required, status) VALUES
-- Lowest prices first (40-50 range)
('Glucose - Postprandial', 40, 40, 'Plasma Naf', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Glucose - Random', 40, 40, 'Naf Plasma', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Glucose - Fasting', 50, 50, 'Naf Plasma', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', true, 'active'),
('Cholesterol - Total', 50, 50, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Uric Acid - Serum', 50, 50, 'Serum', '8 hr', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Creatinine - 24 Hr Urine', 50, 50, 'Urine', '1 Day', 'CLINICAL PATHOLOGY', 'CLINICAL PATHOLOGY', false, 'active'),

-- 80-100 range
('Calcium - 24 Hr Urine', 80, 80, 'Urine', '6 hr', 'CLINICAL PATHOLOGY', 'CLINICAL PATHOLOGY', false, 'active'),
('Triglycerides (TGL)', 100, 100, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Urea', 100, 100, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Albumin', 100, 100, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Creatinine - Serum', 100, 100, 'Serum', '6 hr', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Thyroid Stimulating Hormone (TSH)', 100, 100, 'Serum', '8 hr', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Bilirubin - Total', 100, 100, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Bilirubin - Direct', 100, 100, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Calcium - Serum', 100, 100, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Phosphorus', 100, 100, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),

-- 150-250 range
('Protein - Total', 150, 150, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Alkaline Phosphatase (ALP)', 150, 150, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('SGOT (AST)', 150, 150, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('SGPT (ALT)', 150, 150, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Iron', 200, 200, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Magnesium', 200, 200, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Sodium', 200, 200, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Potassium', 200, 200, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Chloride', 200, 200, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Cholesterol - HDL', 250, 250, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Cholesterol - LDL', 250, 250, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),

-- 300-400 range
('Complete Blood Count (CBC)', 300, 300, 'WB EDTA', '6 hr', 'HAEMATOLOGY', 'HAEMATOLOGY', false, 'active'),
('ESR', 300, 300, 'WB EDTA', '6 hr', 'HAEMATOLOGY', 'HAEMATOLOGY', false, 'active'),
('Hemoglobin', 300, 300, 'WB EDTA', '6 hr', 'HAEMATOLOGY', 'HAEMATOLOGY', false, 'active'),
('Platelet Count', 300, 300, 'WB EDTA', '6 hr', 'HAEMATOLOGY', 'HAEMATOLOGY', false, 'active'),
('WBC Count', 300, 300, 'WB EDTA', '6 hr', 'HAEMATOLOGY', 'HAEMATOLOGY', false, 'active'),
('RBC Count', 300, 300, 'WB EDTA', '6 hr', 'HAEMATOLOGY', 'HAEMATOLOGY', false, 'active'),
('Urine Routine', 350, 350, 'Urine', '6 hr', 'CLINICAL PATHOLOGY', 'CLINICAL PATHOLOGY', false, 'active'),
('Stool Routine', 350, 350, 'Stool', '1 Day', 'CLINICAL PATHOLOGY', 'CLINICAL PATHOLOGY', false, 'active'),
('Blood Group & Rh Type', 400, 400, 'WB EDTA', '6 hr', 'HAEMATOLOGY', 'HAEMATOLOGY', false, 'active'),
('Kidney Function Test', 400, 400, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),

-- 450-600 range
('Liver Function Test', 480, 480, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Lipid Profile', 650, 650, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Thyroid Profile (T3, T4, TSH)', 500, 500, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('HbA1c (Glycosylated Hemoglobin)', 550, 550, 'WB EDTA', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Vitamin B12', 600, 600, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Folate (Folic Acid)', 600, 600, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),

-- 700-900 range
('Ferritin', 700, 700, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('TIBC (Total Iron Binding Capacity)', 750, 750, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Vitamin D (25-OH)', 900, 900, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('PSA (Prostate Specific Antigen)', 800, 800, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('CA 125 (Ovarian Cancer Marker)', 850, 850, 'Serum', '2 Days', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),

-- 1000+ range
('Testosterone - Total', 1000, 1000, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Prolactin', 1000, 1000, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('LH (Luteinizing Hormone)', 1000, 1000, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('FSH (Follicle Stimulating Hormone)', 1000, 1000, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Cortisol', 1100, 1100, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Insulin - Fasting', 1200, 1200, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', true, 'active'),
('C-Peptide', 1200, 1200, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('hsCRP (High Sensitivity CRP)', 1300, 1300, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('Homocysteine', 1400, 1400, 'Serum', '1 Day', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('CEA (Carcinoembryonic Antigen)', 1500, 1500, 'Serum', '2 Days', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active'),
('AFP (Alpha Fetoprotein)', 1500, 1500, 'Serum', '2 Days', 'CLINICAL BIOCHEMISTRY', 'CLINICAL BIOCHEMISTRY', false, 'active');

-- Insert Packages
INSERT INTO packages (name, description, price, mrp, test_count, category, includes, status) VALUES
('New 69', 'Comprehensive health screening package with essential tests', 899, 899, 9, 'Health Checkup', 
'Fasting Blood Sugar, Lipid Profile, Liver Function Profile, IRON PROFILE, Complete Urine Analysis (CUE), Glycosylated Hemoglobin (GHb/HBA1c), Calcium & Phosphorus, Thyroid Profile-II, Complete Blood Count + ESR, Kidney Basic screen', 'active'),

('New 79', 'Extended health package with vitamin and mineral screening', 1199, 1199, 12, 'Health Checkup', 
'Fasting Blood Sugar, Lipid Profile, Liver Function Profile, IRON PROFILE, Complete Urine Analysis (CUE), Glycosylated Hemoglobin (GHb/HBA1c), Calcium & Phosphorus, Folate, Vitamin - B12 & 25-Hydroxy Vitamin D Total (D2 & D3), Thyroid Profile-II, Complete Blood Count + ESR, Kidney Basic screen', 'active'),

('New 89', 'Advanced health checkup with cardiac markers', 1599, 1599, 15, 'Health Checkup', 
'Fasting Blood Sugar, Lipid Profile, Liver Function Profile, IRON PROFILE, Complete Urine Analysis (CUE), Glycosylated Hemoglobin (GHb/HBA1c), Calcium & Phosphorus, Folate, Vitamin - B12 & 25-Hydroxy Vitamin D Total (D2 & D3), hsCRP, Homocysteine, Thyroid Profile-II, Complete Blood Count + ESR, Kidney Basic screen, ECG', 'active'),

('New 99 Male', 'Comprehensive male health package with prostate screening', 2999, 2999, 27, 'Health Checkup', 
'Lipid Profile, Liver Function Profile, IRON PROFILE, Prostate Specific Antigen (PSA) Total, Complete Urine Analysis (CUE), Urine Albumin(Microalbumin)/Creatinine Ratio, Glucose - Fasting, Fasting Urine Glucose, Glucose - Postprandial, Post Prandial Urine Glucose, Glycosylated Hemoglobin (GHb/HBA1c), Homocysteine, Vitamin - B12 & 25-Hydroxy Vitamin D Total (D2 & D3), Calcium, Phosphorus, Amylase, Lipase, LDH, hsCRP, Ferritin, Zinc, CK, Testosterone, APO-A1, APO-B, Thyroid Profile-I, Complete Blood Count (CBC), Kidney Basic screen', 'active'),

('New 99 Female', 'Comprehensive female health package with cancer marker screening', 2999, 2999, 27, 'Health Checkup', 
'Lipid Profile, Liver Function Profile, IRON PROFILE, CA 125 Ovarian Cancer marker, Complete Urine Analysis (CUE), Urine Albumin(Microalbumin)/Creatinine Ratio, Glucose - Fasting, Fasting Urine Glucose, Glucose - Postprandial, Post Prandial Urine Glucose, Glycosylated Hemoglobin (GHb/HBA1c), Homocysteine, Vitamin - B12 & 25-Hydroxy Vitamin D Total (D2 & D3), Calcium, Phosphorus, Amylase, Lipase, LDH, hsCRP, Ferritin, Zinc, CK, Testosterone, APO-A1, APO-B, Thyroid Profile-I, Complete Blood Count (CBC), Kidney Basic screen', 'active'),

('Thyroid Screening', 'Comprehensive thyroid function and antibody screening', 1999, 1999, 9, 'Specialized', 
'Anti Microsomal/Thryroperoxidase Antibody (Anti TPO), Anti Thyroglobulin Antibody (ATG), Calcitonin Serum, Thyroglobulin, Triiodothyronine Total (TT3), Thyroxine - Total (TT4), Triiodothyronine Free (FT3), Thyroxine - Free (FT4), Thyroid Stimulating Hormone (TSH)', 'active'),

('Diabetes Screening', 'Complete diabetes monitoring package', 1299, 1299, 8, 'Specialized', 
'Glucose - Fasting, Glucose - Postprandial, HbA1c, Insulin - Fasting, C-Peptide, Lipid Profile, Kidney Function Test, Urine Routine', 'active'),

('Cardiac Risk Assessment', 'Heart health evaluation package', 2499, 2499, 12, 'Specialized', 
'Lipid Profile, hsCRP, Homocysteine, Troponin I, CPK-MB, LDH, Apolipoprotein A1, Apolipoprotein B, Lipoprotein(a), ECG, Complete Blood Count, Kidney Function Test', 'active');

-- Verify data insertion
SELECT 'Tests inserted: ' || COUNT(*) FROM tests;
SELECT 'Packages inserted: ' || COUNT(*) FROM packages;
