import { NextResponse } from 'next/server';
import { HARDCODED_PACKAGES } from '@/lib/data/hardcoded-packages';

export async function GET() {
  try {
    // Transform data to match frontend expectations
    const packages = HARDCODED_PACKAGES.map((pkg) => ({
      id: pkg.id,
      name: pkg.name,
      description: pkg.description,
      price: pkg.price,
      originalPrice: pkg.mrp,
      discount: Math.round(((pkg.mrp - pkg.price) / pkg.mrp) * 100),
      testsIncluded: pkg.tests_included,
      features: pkg.tests, // Use tests array as features
      popular: pkg.popular,
      category: pkg.category
    }));
    
    return NextResponse.json({ packages });
  } catch (error) {
    console.error('Error in packages API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
