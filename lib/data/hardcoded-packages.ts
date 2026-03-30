export interface Package {
  id: string;
  name: string;
  price: number;
  mrp: number;
  tests_included: number;
  tests: string[];
  popular?: boolean;
  category: string;
  description: string;
}

export const HARDCODED_PACKAGES: Package[] = [
  {
    id: '1',
    name: 'New 69',
    price: 899,
    mrp: 899,
    tests_included: 9,
    tests: [
      'Fasting Blood Sugar',
      'Lipid Profile',
      'Liver Function Profile',
      'IRON PROFILE',
      'Complete Urine Analysis (CUE)',
      'Glycosylated Hemoglobin (GHb/HBA1c)',
      'Calcium & Phosphorus',
      'Thyroid Profile-II',
      'Complete Blood Count + ESR',
      'Kidney Basic screen'
    ],
    popular: true,
    category: 'Health Checkup',
    description: 'Comprehensive health screening package with essential tests'
  },
  {
    id: '2',
    name: 'New 79',
    price: 1199,
    mrp: 1199,
    tests_included: 12,
    tests: [
      'Fasting Blood Sugar',
      'Lipid Profile',
      'Liver Function Profile',
      'IRON PROFILE',
      'Complete Urine Analysis (CUE)',
      'Glycosylated Hemoglobin (GHb/HBA1c)',
      'Calcium & Phosphorus',
      'Folate',
      'Vitamin - B12 & 25-Hydroxy Vitamin D Total (D2 & D3)',
      'Thyroid Profile-II',
      'Complete Blood Count + ESR',
      'Kidney Basic screen'
    ],
    popular: true,
    category: 'Health Checkup',
    description: 'Extended health package with vitamin and mineral screening'
  },
  {
    id: '3',
    name: 'New 89',
    price: 2199,
    mrp: 2199,
    tests_included: 20,
    tests: [
      'Fasting Blood Sugar',
      'Lipid Profile',
      'Liver Function Profile',
      'IRON PROFILE',
      'Thyroid Profile-II',
      'Complete Urine Analysis (CUE)',
      'Glycosylated Hemoglobin (GHb/HBA1c)',
      'Creatinine - 24 Hr Urine',
      'Urine Albumin(Microalbumin)/Creatinine Ratio',
      'Vitamin - B12 & 25-Hydroxy Vitamin D Total (D2 & D3)',
      'Calcium',
      'Phosphorus',
      'Amylase',
      'Lipase',
      'LDH',
      'hsCRP',
      'Ferritin',
      'Complete Blood Count + ESR',
      'Homocysteine',
      'Kidney Basic screen'
    ],
    popular: false,
    category: 'Health Checkup',
    description: 'Advanced health screening with cardiac and metabolic markers'
  },
  {
    id: '4',
    name: 'New 99 Male',
    price: 2999,
    mrp: 2999,
    tests_included: 27,
    tests: [
      'Lipid Profile',
      'Liver Function Profile',
      'IRON PROFILE',
      'Prostate Specific Antigen (PSA) Total',
      'Complete Urine Analysis (CUE)',
      'Urine Albumin(Microalbumin)/Creatinine Ratio',
      'Glucose - Fasting',
      'Fasting Urine Glucose',
      'Glucose - Postprandial',
      'Post Prandial Urine Glucose',
      'Glycosylated Hemoglobin (GHb/HBA1c)',
      'Homocysteine',
      'Vitamin - B12 & 25-Hydroxy Vitamin D Total (D2 & D3)',
      'Calcium',
      'Phosphorus',
      'Amylase',
      'Lipase',
      'LDH',
      'hsCRP',
      'Ferritin',
      'Zinc',
      'CK',
      'Testosterone',
      'APO-A1',
      'APO-B',
      'Thyroid Profile-I',
      'Complete Blood Count (CBC)',
      'Kidney Basic screen'
    ],
    popular: true,
    category: 'Health Checkup',
    description: 'Comprehensive male health package with prostate screening'
  },
  {
    id: '5',
    name: 'New 99 Female',
    price: 2999,
    mrp: 2999,
    tests_included: 27,
    tests: [
      'Lipid Profile',
      'Liver Function Profile',
      'IRON PROFILE',
      'CA 125 Ovarian Cancer marker',
      'Complete Urine Analysis (CUE)',
      'Urine Albumin(Microalbumin)/Creatinine Ratio',
      'Glucose - Fasting',
      'Fasting Urine Glucose',
      'Glucose - Postprandial',
      'Post Prandial Urine Glucose',
      'Glycosylated Hemoglobin (GHb/HBA1c)',
      'Homocysteine',
      'Vitamin - B12 & 25-Hydroxy Vitamin D Total (D2 & D3)',
      'Calcium',
      'Phosphorus',
      'Amylase',
      'Lipase',
      'LDH',
      'hsCRP',
      'Ferritin',
      'Zinc',
      'CK',
      'Testosterone',
      'APO-A1',
      'APO-B',
      'Thyroid Profile-I',
      'Complete Blood Count (CBC)',
      'Kidney Basic screen'
    ],
    popular: true,
    category: 'Health Checkup',
    description: 'Comprehensive female health package with cancer marker screening'
  },
  {
    id: '6',
    name: 'Anaemia Basic Screen',
    price: 1000,
    mrp: 1000,
    tests_included: 7,
    tests: [
      'Iron',
      'Ferritin',
      'Iron Binding Capacity - Total (TIBC)',
      'Transferrin',
      'Vitamin - B12',
      'Transferrin %',
      'Complete Blood Count (CBC)'
    ],
    popular: false,
    category: 'Specialized',
    description: 'Complete anemia screening with iron studies'
  },
  {
    id: '7',
    name: 'Thyroid Screening',
    price: 1999,
    mrp: 1999,
    tests_included: 9,
    tests: [
      'Anti Microsomal/Thryroperoxidase Antibody (Anti TPO)',
      'Anti Thyroglobulin Antibody (ATG)',
      'Calcitonin Serum',
      'Thyroglobulin',
      'Triiodothyronine Total (TT3)',
      'Thyroxine - Total (TT4)',
      'Triiodothyronine Free (FT3)',
      'Thyroxine - Free (FT4)',
      'Thyroid Stimulating Hormone (TSH)'
    ],
    popular: true,
    category: 'Specialized',
    description: 'Comprehensive thyroid function and antibody screening'
  },
  {
    id: '8',
    name: 'Fever Basic Screen',
    price: 899,
    mrp: 899,
    tests_included: 5,
    tests: [
      'Erythrocyte Sedimentation Rate (ESR)',
      'Malarial Parasite Identification',
      'Widal Test (Slide Test)',
      'C-Reactive Protein (CRP)',
      'Complete Blood Count (CBC)'
    ],
    popular: false,
    category: 'Specialized',
    description: 'Essential fever investigation package'
  }
];