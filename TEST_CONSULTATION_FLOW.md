# Online Consultation Flow - Complete Guide

## How It Works Now

When a user submits the online consultation form:

### Step 1: Form Submission
User fills in:
- Name
- Email
- Phone
- Health Concern/Message

### Step 2: Save to Database
- Data is sent to `/api/booking/consultation` API
- Saved to Supabase `consultations` table
- Generates unique Consultation ID (e.g., CONS1234567890)
- Status set to "pending"

### Step 3: Redirect to WhatsApp
- Opens WhatsApp with pre-filled message
- Message includes:
  - User details (name, email, phone)
  - Health concern
  - Consultation ID (from database)
- User can send message to confirm

### Step 4: Success Message
- Shows success confirmation
- Redirects to homepage after 2 seconds

---

## Database Storage

All consultation data is saved in Supabase:

**Table:** `consultations`

**Fields:**
- `id` - UUID (auto-generated)
- `consultation_id` - Unique ID (e.g., CONS1774847890123)
- `name` - Patient name
- `email` - Patient email
- `phone` - Patient phone
- `message` - Health concern/message
- `status` - "pending" (default)
- `created_at` - Timestamp
- `updated_at` - Timestamp

---

## Test the Flow

### Test 1: Submit Consultation Form

1. **Go to consultation page:**
   ```
   http://localhost:3000/consultation
   ```

2. **Fill the form:**
   - Name: Test Patient
   - Email: test@example.com
   - Phone: 9876543210
   - Message: Need consultation for diabetes

3. **Click Submit**

4. **Expected Result:**
   - ✅ Data saved to database
   - ✅ WhatsApp opens with pre-filled message
   - ✅ Message includes Consultation ID
   - ✅ Success message shows
   - ✅ Redirects to homepage

### Test 2: Verify in Database

1. **Go to Supabase Dashboard:**
   ```
   https://app.supabase.com/project/kfxqazgjxkwfndjvwpmg/editor
   ```

2. **Select `consultations` table**

3. **Check for your record:**
   - Should see the test consultation
   - Status should be "pending"
   - All fields should be filled

### Test 3: Check WhatsApp Message

The WhatsApp message should look like:

```
Hi, I would like to book an Online Consultation from New10Lab.

*My Details:*
*Name:* Test Patient
*Email:* test@example.com
*Phone:* 9876543210

*Health Concern:*
Need consultation for diabetes

*Consultation ID:* CONS1774847890123

Please contact me to schedule a consultation.
```

---

## API Endpoint

**URL:** `POST /api/booking/consultation`

**Request Body:**
```json
{
  "name": "Test Patient",
  "email": "test@example.com",
  "phone": "9876543210",
  "message": "Need consultation for diabetes"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Consultation booked successfully. Confirmation emails sent.",
  "data": {
    "consultationId": "CONS1774847890123",
    "name": "Test Patient",
    "phone": "9876543210",
    "email": "test@example.com",
    "message": "Need consultation for diabetes",
    "status": "pending",
    "bookedAt": "2026-03-30T10:30:00.000Z"
  }
}
```

---

## Error Handling

If database save fails:
- User still gets redirected to WhatsApp
- Alert message shows: "Could not save to database, but you can still book via WhatsApp"
- WhatsApp message won't include Consultation ID
- User can still complete booking via WhatsApp

---

## Admin Notifications

When a consultation is submitted:
1. ✅ Data saved to database
2. ✅ Email sent to user (confirmation)
3. ✅ Email sent to admin (mukilan021@gmail.com)
4. ✅ User redirected to WhatsApp

Admin email includes:
- Patient details
- Health concern
- Consultation ID
- Timestamp

---

## View All Consultations

### In Supabase Dashboard:
1. Go to Table Editor
2. Select `consultations` table
3. See all consultation requests
4. Filter by status, date, email, etc.

### Query Example:
```sql
SELECT * FROM consultations 
WHERE status = 'pending' 
ORDER BY created_at DESC;
```

---

## Update Consultation Status

After contacting the patient, update status:

```sql
UPDATE consultations 
SET status = 'contacted', updated_at = NOW() 
WHERE consultation_id = 'CONS1234567890';
```

**Status Options:**
- `pending` - New consultation request
- `contacted` - Patient has been contacted
- `scheduled` - Consultation scheduled
- `completed` - Consultation completed
- `cancelled` - Consultation cancelled

---

## Benefits of This Flow

✅ **Data Backup** - All consultations saved in database  
✅ **WhatsApp Integration** - Easy communication with patients  
✅ **Consultation ID** - Track each consultation uniquely  
✅ **Email Notifications** - Both user and admin notified  
✅ **Error Handling** - Works even if database fails  
✅ **User Experience** - Smooth flow from form to WhatsApp  

---

## Summary

**YES, the data IS saved to the database!**

The flow is:
1. User submits form
2. **Data saved to Supabase** ✅
3. Consultation ID generated
4. WhatsApp opens with pre-filled message (includes ID)
5. User confirms via WhatsApp
6. Admin receives email notification

You get both database records AND WhatsApp messages for every consultation!
