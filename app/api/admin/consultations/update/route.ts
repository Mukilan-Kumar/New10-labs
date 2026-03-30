import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/db/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { consultationId, status } = body;

    if (!consultationId || !status) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate status
    const validStatuses = ['pending', 'contacted', 'scheduled', 'completed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: 'Invalid status' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();
    
    console.log('=================================');
    console.log('🔄 CONSULTATION STATUS UPDATE');
    console.log('=================================');
    console.log('Consultation ID:', consultationId);
    console.log('Old Status: (fetching...)');
    console.log('New Status:', status.toUpperCase());
    console.log('Updated By: Admin');
    console.log('Timestamp:', new Date().toISOString());
    
    const { data, error } = await supabase
      .from('consultations')
      .update({ 
        status,
        updated_at: new Date().toISOString()
      })
      .eq('consultation_id', consultationId)
      .select()
      .single();

    if (error) {
      console.error('❌ DATABASE ERROR:', error);
      console.log('=================================\n');
      return NextResponse.json(
        { success: false, message: 'Failed to update consultation' },
        { status: 500 }
      );
    }

    console.log('✅ STATUS UPDATED SUCCESSFULLY');
    console.log('Patient Name:', data.name);
    console.log('Patient Email:', data.email);
    console.log('Patient Phone:', data.phone);
    console.log('Current Status:', data.status.toUpperCase());
    console.log('=================================\n');

    return NextResponse.json({
      success: true,
      message: 'Consultation status updated successfully',
      data,
    });
  } catch (error) {
    console.error('Error updating consultation:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
