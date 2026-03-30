import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/db/supabase';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const name = searchParams.get('name');
    const price = searchParams.get('price');
    const type = searchParams.get('type');
    const sessionId = searchParams.get('sessionId');

    // Validate input
    if (!id || !name || !price || !type) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields (id, name, price, type)' },
        { status: 400 }
      );
    }

    const session = sessionId || `session_${Date.now()}`;
    
    // Save to Supabase database
    const supabase = getSupabaseClient();
    const { data: cartItem, error: dbError } = await supabase
      .from('cart_items')
      .insert({
        session_id: session,
        item_id: id,
        item_name: name,
        item_type: type,
        price: parseFloat(price),
        quantity: 1,
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { success: false, message: 'Failed to add item to cart' },
        { status: 500 }
      );
    }

    console.log('Added to cart:', cartItem);

    return NextResponse.json({
      success: true,
      message: 'Item added to cart successfully',
      data: {
        id: cartItem.id,
        itemId: id,
        name,
        price: parseFloat(price),
        type,
        sessionId: session,
        addedAt: cartItem.created_at,
      },
    });
  } catch (error) {
    console.error('Cart add error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to add item to cart' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, name, price, type, sessionId } = body;

    // Validate input
    if (!id || !name || !price || !type) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const session = sessionId || `session_${Date.now()}`;
    
    // Save to Supabase database
    const supabase = getSupabaseClient();
    const { data: cartItem, error: dbError } = await supabase
      .from('cart_items')
      .insert({
        session_id: session,
        item_id: id,
        item_name: name,
        item_type: type,
        price: price,
        quantity: 1,
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { success: false, message: 'Failed to add item to cart' },
        { status: 500 }
      );
    }

    console.log('Added to cart:', cartItem);

    return NextResponse.json({
      success: true,
      message: 'Item added to cart successfully',
      data: {
        id: cartItem.id,
        itemId: id,
        name,
        price,
        type,
        sessionId: session,
        addedAt: cartItem.created_at,
      },
    });
  } catch (error) {
    console.error('Cart add error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to add item to cart' },
      { status: 500 }
    );
  }
}
