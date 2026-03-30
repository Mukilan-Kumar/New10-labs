import { createClient } from '@supabase/supabase-js';

// Server-side client with service role (for API routes)
export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  
  return createClient(supabaseUrl, supabaseKey);
}

// Database types
export interface Consultation {
  id: string;
  consultation_id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  created_at: string;
}

export interface HomeVisitBooking {
  id: string;
  booking_id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  pincode: string;
  preferred_date: string;
  preferred_time: string;
  tests: any;
  total_amount: number;
  status: string;
  created_at: string;
}

export interface CartItem {
  id: string;
  user_id?: string;
  session_id: string;
  item_id: string;
  item_name: string;
  item_type: string;
  price: number;
  quantity: number;
  created_at: string;
}

export interface TestBooking {
  id: string;
  booking_id: string;
  name: string;
  email: string;
  phone: string;
  test_ids: string[];
  test_names: string[];
  total_amount: number;
  booking_type: string;
  address?: string;
  pincode?: string;
  preferred_date?: string;
  preferred_time?: string;
  status: string;
  created_at: string;
}

export interface SupportCallback {
  id: string;
  name: string;
  phone: string;
  message?: string;
  status: string;
  created_at: string;
}

export interface PrescriptionUpload {
  id: string;
  upload_id: string;
  name: string;
  email: string;
  phone: string;
  file_url: string;
  file_name: string;
  status: string;
  created_at: string;
}
