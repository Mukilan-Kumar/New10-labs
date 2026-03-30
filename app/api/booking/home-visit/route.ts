import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/db/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, address, pincode, date, time, tests, totalAmount } = body;

    // Validate input
    if (!name || !phone || !email || !address || !pincode) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate phone number (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, '').slice(-10))) {
      return NextResponse.json(
        { success: false, message: 'Invalid phone number' },
        { status: 400 }
      );
    }

    const bookingId = `HV${Date.now()}`;
    
    // Save to Supabase database
    const supabase = getSupabaseClient();
    const { data: booking, error: dbError } = await supabase
      .from('home_visit_bookings')
      .insert({
        booking_id: bookingId,
        name,
        email,
        phone,
        address,
        pincode,
        preferred_date: date || new Date().toISOString().split('T')[0],
        preferred_time: time || '09:00 AM',
        tests: tests || [],
        total_amount: totalAmount || 0,
        status: 'confirmed',
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { success: false, message: 'Failed to save booking to database' },
        { status: 500 }
      );
    }

    console.log('Home visit booking saved:', booking);

    // Simulate sending SMS
    console.log(`SMS sent to ${phone}: Your home visit is scheduled for ${date || 'soon'}`);

    return NextResponse.json({
      success: true,
      message: 'Home visit booked successfully',
      data: {
        bookingId,
        name,
        phone,
        email,
        address,
        pincode,
        date: date || 'Will be confirmed',
        time: time || 'Will be confirmed',
        status: 'confirmed',
        estimatedArrival: '30-60 minutes',
        bookedAt: booking.created_at,
      },
    });
  } catch (error) {
    console.error('Home visit booking error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to book home visit' },
      { status: 500 }
    );
  }
}
