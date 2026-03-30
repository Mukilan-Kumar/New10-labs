/**
 * Test Database Connection
 * This script tests if data can be saved and retrieved from Supabase
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

async function testDatabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  console.log('🔄 Testing Supabase connection...\n');
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Test 1: Insert a test consultation
  console.log('📝 Test 1: Creating a test consultation...');
  const testConsultation = {
    consultation_id: `TEST_CONS_${Date.now()}`,
    name: 'Test Patient',
    email: 'test@example.com',
    phone: '9876543210',
    message: 'This is a test consultation',
    status: 'pending',
  };

  const { data: consultation, error: insertError } = await supabase
    .from('consultations')
    .insert(testConsultation)
    .select()
    .single();

  if (insertError) {
    console.error('❌ Failed to insert:', insertError.message);
    return;
  }

  console.log('✅ Consultation created:', consultation.consultation_id);

  // Test 2: Retrieve the consultation
  console.log('\n📖 Test 2: Retrieving consultations...');
  const { data: consultations, error: selectError } = await supabase
    .from('consultations')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5);

  if (selectError) {
    console.error('❌ Failed to retrieve:', selectError.message);
    return;
  }

  console.log(`✅ Found ${consultations.length} consultation(s):`);
  consultations.forEach((c, i) => {
    console.log(`   ${i + 1}. ${c.name} - ${c.email} - ${c.status}`);
  });

  // Test 3: Check all tables
  console.log('\n📊 Test 3: Checking all tables...');
  const tables = [
    'consultations',
    'home_visit_bookings',
    'cart_items',
    'test_bookings',
    'support_callbacks',
    'prescription_uploads',
  ];

  for (const table of tables) {
    const { count, error } = await supabase
      .from(table)
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.log(`   ❌ ${table}: Error - ${error.message}`);
    } else {
      console.log(`   ✅ ${table}: ${count || 0} records`);
    }
  }

  console.log('\n🎉 Database is working perfectly!');
  console.log('\n📍 You can view your data at:');
  console.log(`   ${supabaseUrl.replace('//', '//app.')}/project/_/editor`);
}

testDatabase().catch(console.error);
