/**
 * Database Initialization Script
 * Run this to create all necessary tables in Supabase
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

async function initDatabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing Supabase credentials in .env.local');
    console.log('Please add:');
    console.log('  NEXT_PUBLIC_SUPABASE_URL=your_supabase_url');
    console.log('  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key');
    process.exit(1);
  }

  console.log('🔄 Connecting to Supabase...');
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Read SQL schema
  const schemaPath = path.join(__dirname, '..', 'lib', 'db', 'schema.sql');
  const schema = fs.readFileSync(schemaPath, 'utf8');

  console.log('📝 SQL Schema loaded');
  console.log('\n⚠️  IMPORTANT: You need to run this SQL in your Supabase SQL Editor:');
  console.log('   1. Go to your Supabase Dashboard');
  console.log('   2. Navigate to SQL Editor');
  console.log('   3. Copy and paste the SQL from lib/db/schema.sql');
  console.log('   4. Click "Run" to execute\n');

  // Test connection
  try {
    const { data, error } = await supabase.from('consultations').select('count').limit(1);
    
    if (error) {
      if (error.message.includes('relation') && error.message.includes('does not exist')) {
        console.log('❌ Tables not created yet. Please run the SQL schema in Supabase SQL Editor.');
        console.log('\n📋 Schema file location: lib/db/schema.sql\n');
      } else {
        console.error('❌ Database error:', error.message);
      }
    } else {
      console.log('✅ Database connection successful!');
      console.log('✅ Tables are ready to use!');
    }
  } catch (err) {
    console.error('❌ Connection error:', err.message);
  }
}

initDatabase();
