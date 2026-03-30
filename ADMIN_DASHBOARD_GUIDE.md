# Admin Dashboard - Consultation Management

## Access the Admin Dashboard

**URL:** http://localhost:3000/admin/consultations

---

## Features

### 1. View All Consultations
- See all consultation requests in one place
- Sorted by newest first
- Shows patient details, health concerns, and current status

### 2. Filter by Status
Click on filter buttons to view:
- **All** - All consultations
- **Pending** - New requests waiting for action
- **Contacted** - Patients you've already contacted
- **Scheduled** - Consultations that are scheduled
- **Completed** - Finished consultations

### 3. Update Status
For each consultation, you can:
- ✅ **Mark as Contacted** - After you call/email the patient
- 📅 **Mark as Scheduled** - After scheduling the consultation
- ✓ **Mark as Completed** - After consultation is done
- ❌ **Cancel** - If patient cancels or doesn't respond

### 4. Quick Actions
- 💬 **WhatsApp Button** - Opens WhatsApp chat with the patient
- 📧 **Email Link** - Click email to send email
- 📞 **Phone Link** - Click phone to call

---

## How to Manage Consultations

### Step 1: Access Dashboard
```
http://localhost:3000/admin/consultations
```

### Step 2: View Pending Consultations
1. Click "Pending" filter button
2. See all new consultation requests
3. Review patient details and health concerns

### Step 3: Contact Patient
1. Click the **WhatsApp** button to message the patient
2. Or click the phone number to call
3. Or click the email to send an email

### Step 4: Update Status
After contacting the patient:
1. Click **"Mark as Contacted"** button
2. The status will change from "pending" to "contacted"
3. The consultation moves to the "Contacted" filter

### Step 5: Schedule Consultation
After scheduling a time:
1. Click **"Mark as Scheduled"** button
2. Status changes to "scheduled"
3. Patient knows consultation is confirmed

### Step 6: Complete Consultation
After the consultation is done:
1. Click **"Mark as Completed"** button
2. Status changes to "completed"
3. Consultation is archived

---

## Status Workflow

```
Pending → Contacted → Scheduled → Completed
   ↓
Cancelled (if needed)
```

### Status Meanings:

**Pending** (Yellow)
- New consultation request
- Needs immediate attention
- Patient waiting for response

**Contacted** (Blue)
- You've reached out to the patient
- Waiting to schedule consultation
- Patient is aware you received their request

**Scheduled** (Purple)
- Consultation date/time confirmed
- Patient knows when to expect consultation
- Reminder can be sent

**Completed** (Green)
- Consultation finished
- Patient has been helped
- Can be archived

**Cancelled** (Red)
- Patient cancelled
- Patient didn't respond
- Consultation won't happen

---

## Information Displayed

For each consultation, you can see:
- **Consultation ID** - Unique identifier (e.g., CONS1234567890)
- **Patient Name** - Full name
- **Email** - Clickable email address
- **Phone** - Clickable phone number
- **Date & Time** - When request was submitted
- **Health Concern** - Patient's message/reason for consultation
- **Current Status** - Pending, Contacted, etc.

---

## Quick Tips

### 1. Check Pending Daily
- Visit the dashboard daily
- Click "Pending" filter
- Respond to new requests within 24 hours

### 2. Use WhatsApp for Quick Response
- Click WhatsApp button
- Message is pre-filled with consultation ID
- Quick and convenient for patients

### 3. Update Status Immediately
- After each action, update the status
- Keeps track of progress
- Prevents duplicate work

### 4. Use Filters Efficiently
- "Pending" - What needs attention now
- "Contacted" - What needs scheduling
- "Scheduled" - Upcoming consultations
- "Completed" - For records

---

## API Endpoints

### Get All Consultations
```
GET /api/admin/consultations
```

**Response:**
```json
{
  "success": true,
  "consultations": [
    {
      "id": "uuid",
      "consultation_id": "CONS1234567890",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "9876543210",
      "message": "Need consultation for diabetes",
      "status": "pending",
      "created_at": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### Update Consultation Status
```
POST /api/admin/consultations/update
```

**Request Body:**
```json
{
  "consultationId": "CONS1234567890",
  "status": "contacted"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Consultation status updated successfully",
  "data": { ... }
}
```

---

## Database Query (Direct Access)

If you want to query directly in Supabase:

### View All Pending Consultations
```sql
SELECT * FROM consultations 
WHERE status = 'pending' 
ORDER BY created_at DESC;
```

### Update Status Manually
```sql
UPDATE consultations 
SET status = 'contacted', updated_at = NOW() 
WHERE consultation_id = 'CONS1234567890';
```

### Count by Status
```sql
SELECT status, COUNT(*) as count 
FROM consultations 
GROUP BY status;
```

---

## Notifications

When a new consultation is submitted:
1. ✅ Saved to database
2. ✅ Email sent to you (mukilan021@gmail.com)
3. ✅ Patient redirected to WhatsApp
4. ✅ Appears in admin dashboard as "Pending"

---

## Mobile Access

The admin dashboard is mobile-friendly:
- Access from your phone
- Update statuses on the go
- Click WhatsApp/Call buttons directly

---

## Security Note

Currently, the admin dashboard is open (no authentication).

For production, you should add:
- Login/password protection
- Admin user authentication
- Role-based access control

---

## Summary

✅ **Access:** http://localhost:3000/admin/consultations  
✅ **View:** All consultation requests  
✅ **Filter:** By status (Pending, Contacted, etc.)  
✅ **Update:** Change status with one click  
✅ **Contact:** WhatsApp, Email, Phone links  
✅ **Track:** Complete workflow from pending to completed  

You now have full control over all consultation requests! 🎉
