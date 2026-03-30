import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/db/supabase';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const phone = searchParams.get('phone');
    const name = searchParams.get('name');
    const message = searchParams.get('message');

    if (!phone) {
      return NextResponse.json(
        { success: false, message: 'Phone number is required' },
        { status: 400 }
      );
    }

    const ticketId = `CB${Date.now()}`;
    
    // Save to Supabase database
    const supabase = getSupabaseClient();
    const { data: callback, error: dbError } = await supabase
      .from('support_callbacks')
      .insert({
        name: name || 'Customer',
        phone,
        message: message || '',
        status: 'pending',
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { success: false, message: 'Failed to save callback request' },
        { status: 500 }
      );
    }

    console.log('Callback request saved:', callback);

    return NextResponse.json({
      success: true,
      message: 'Callback request received',
      data: {
        ticketId,
        phone,
        name: name || 'Customer',
        status: 'pending',
        estimatedCallTime: '15-30 minutes',
        queuePosition: Math.floor(Math.random() * 5) + 1,
        createdAt: callback.created_at,
      },
    });
  } catch (error) {
    console.error('Callback request error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create callback request' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phone, name, message } = body;

    if (!phone) {
      return NextResponse.json(
        { success: false, message: 'Phone number is required' },
        { status: 400 }
      );
    }

    const ticketId = `CB${Date.now()}`;
    
    // Save to Supabase database
    const supabase = getSupabaseClient();
    const { data: callback, error: dbError } = await supabase
      .from('support_callbacks')
      .insert({
        name: name || 'Customer',
        phone,
        message: message || '',
        status: 'pending',
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { success: false, message: 'Failed to save callback request' },
        { status: 500 }
      );
    }

    console.log('Callback request saved:', callback);

    return NextResponse.json({
      success: true,
      message: 'Callback request received',
      data: {
        ticketId,
        phone,
        name: name || 'Customer',
        status: 'pending',
        estimatedCallTime: '15-30 minutes',
        queuePosition: Math.floor(Math.random() * 5) + 1,
        createdAt: callback.created_at,
      },
    });
  } catch (error) {
    console.error('Callback request error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create callback request' },
      { status: 500 }
    );
  }
}
