-- Newton's Lab Database Schema for Supabase

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Consultations Table
CREATE TABLE IF NOT EXISTS consultations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  consultation_id VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Home Visit Bookings Table
CREATE TABLE IF NOT EXISTS home_visit_bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_id VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address TEXT NOT NULL,
  pincode VARCHAR(10) NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time VARCHAR(50) NOT NULL,
  tests JSONB NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'confirmed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Cart Items Table
CREATE TABLE IF NOT EXISTS cart_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID,
  session_id VARCHAR(255) NOT NULL,
  item_id VARCHAR(50) NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  item_type VARCHAR(50) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  quantity INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Test Bookings Table
CREATE TABLE IF NOT EXISTS test_bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  booking_id VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  test_ids TEXT[] NOT NULL,
  test_names TEXT[] NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  booking_type VARCHAR(50) NOT NULL,
  address TEXT,
  pincode VARCHAR(10),
  preferred_date DATE,
  preferred_time VARCHAR(50),
  status VARCHAR(50) DEFAULT 'confirmed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Support Callbacks Table
CREATE TABLE IF NOT EXISTS support_callbacks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Prescription Uploads Table
CREATE TABLE IF NOT EXISTS prescription_uploads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  upload_id VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  file_url TEXT NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_consultations_email ON consultations(email);
CREATE INDEX IF NOT EXISTS idx_consultations_status ON consultations(status);
CREATE INDEX IF NOT EXISTS idx_consultations_created_at ON consultations(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_home_visit_bookings_email ON home_visit_bookings(email);
CREATE INDEX IF NOT EXISTS idx_home_visit_bookings_status ON home_visit_bookings(status);
CREATE INDEX IF NOT EXISTS idx_home_visit_bookings_created_at ON home_visit_bookings(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_cart_items_session_id ON cart_items(session_id);
CREATE INDEX IF NOT EXISTS idx_cart_items_user_id ON cart_items(user_id);

CREATE INDEX IF NOT EXISTS idx_test_bookings_email ON test_bookings(email);
CREATE INDEX IF NOT EXISTS idx_test_bookings_status ON test_bookings(status);
CREATE INDEX IF NOT EXISTS idx_test_bookings_created_at ON test_bookings(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_support_callbacks_status ON support_callbacks(status);
CREATE INDEX IF NOT EXISTS idx_support_callbacks_created_at ON support_callbacks(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_prescription_uploads_email ON prescription_uploads(email);
CREATE INDEX IF NOT EXISTS idx_prescription_uploads_status ON prescription_uploads(status);
CREATE INDEX IF NOT EXISTS idx_prescription_uploads_created_at ON prescription_uploads(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE home_visit_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_callbacks ENABLE ROW LEVEL SECURITY;
ALTER TABLE prescription_uploads ENABLE ROW LEVEL SECURITY;

-- Create policies (allow all for now, you can restrict later)
CREATE POLICY "Allow all operations on consultations" ON consultations FOR ALL USING (true);
CREATE POLICY "Allow all operations on home_visit_bookings" ON home_visit_bookings FOR ALL USING (true);
CREATE POLICY "Allow all operations on cart_items" ON cart_items FOR ALL USING (true);
CREATE POLICY "Allow all operations on test_bookings" ON test_bookings FOR ALL USING (true);
CREATE POLICY "Allow all operations on support_callbacks" ON support_callbacks FOR ALL USING (true);
CREATE POLICY "Allow all operations on prescription_uploads" ON prescription_uploads FOR ALL USING (true);
