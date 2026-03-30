# Database Setup Guide

## Supabase Configuration

### Step 1: Get Your Supabase Credentials

1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your project
3. Go to **Settings** → **API**
4. Copy the following:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

### Step 2: Update Environment Variables

Open `.env.local` and update these values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://kfxqazgjxkwfndjvwpmg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### Step 3: Create Database Tables

1. Go to your Supabase Dashboard
2. Navigate to **SQL Editor** (left sidebar)
3. Click **New Query**
4. Copy the entire content from `lib/db/schema.sql`
5. Paste it into the SQL Editor
6. Click **Run** to execute

This will create the following tables:
- `consultations` - Doctor consultation bookings
- `home_visit_bookings` - Home sample collection bookings
- `cart_items` - Shopping cart items
- `test_bookings` - Lab test bookings
- `support_callbacks` - Customer support callback requests
- `prescription_uploads` - Prescription file uploads

### Step 4: Verify Setup

Run the initialization script:

```bash
npm install dotenv
node scripts/init-database.js
```

If successful, you should see:
```
✅ Database connection successful!
✅ Tables are ready to use!
```

### Step 5: Restart Development Server

Stop the current server (Ctrl+C) and restart:

```bash
npm run dev
```

## Database Schema Overview

### Consultations Table
Stores online doctor consultation requests.

### Home Visit Bookings Table
Stores home sample collection appointments.

### Cart Items Table
Stores user shopping cart items (tests/packages).

### Test Bookings Table
Stores confirmed lab test bookings.

### Support Callbacks Table
Stores customer support callback requests.

### Prescription Uploads Table
Stores prescription file upload records.

## API Routes Updated

All the following API routes now save data to Supabase:

- ✅ `/api/booking/consultation` - Consultation bookings
- ✅ `/api/booking/home-visit` - Home visit bookings
- ✅ `/api/bookings/create` - Test bookings
- ✅ `/api/cart/add` - Cart items
- ✅ `/api/support/callback` - Support callbacks

## Viewing Your Data

You can view all stored data in your Supabase Dashboard:

1. Go to **Table Editor** (left sidebar)
2. Select any table to view records
3. You can also run SQL queries in the SQL Editor

## Security Notes

- Row Level Security (RLS) is enabled on all tables
- Current policies allow all operations (for development)
- For production, update policies to restrict access based on user authentication

## Troubleshooting

### "relation does not exist" error
- Make sure you ran the SQL schema in Supabase SQL Editor
- Check that all tables were created successfully

### Connection errors
- Verify your Supabase URL and API key in `.env.local`
- Make sure your Supabase project is active
- Check your internet connection

### Data not saving
- Check the browser console for errors
- Check the server logs (terminal where `npm run dev` is running)
- Verify the table structure matches the schema
