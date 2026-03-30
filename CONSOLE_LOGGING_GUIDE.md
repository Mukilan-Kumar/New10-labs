# Console Logging - Consultation Status Tracking

All consultation status changes are now logged to the console for easy tracking.

---

## What Gets Logged

### 1. New Consultation Submission

When a patient submits a consultation request, you'll see:

```
=================================
📋 NEW CONSULTATION REQUEST (POST)
=================================
Consultation ID: CONS1774850123456
Patient Name: John Doe
Email: john@example.com
Phone: 9876543210
Status: PENDING
✅ SAVED TO DATABASE
Database ID: uuid-here
=================================
```

### 2. Status Updates

When you update a consultation status in the admin dashboard:

```
=================================
🔄 CONSULTATION STATUS UPDATE
=================================
Consultation ID: CONS1774850123456
Old Status: (fetching...)
New Status: CONTACTED
Updated By: Admin
Timestamp: 2024-01-15T10:30:00.000Z
✅ STATUS UPDATED SUCCESSFULLY
Patient Name: John Doe
Patient Email: john@example.com
Patient Phone: 9876543210
Current Status: CONTACTED
=================================
```

---

## How to View Console Logs

### Option 1: Terminal/Command Prompt
The logs appear in the terminal where you ran `npm run dev`

### Option 2: Browser DevTools
1. Open your browser
2. Press F12 (or right-click → Inspect)
3. Go to "Console" tab
4. You'll see logs from API calls

### Option 3: VS Code Terminal
If you're running the server in VS Code terminal, logs appear there

---

## Status Flow Tracking

You can track the complete journey of each consultation:

```
1. PENDING (New submission)
   📋 NEW CONSULTATION REQUEST
   Status: PENDING
   
2. CONTACTED (Admin contacted patient)
   🔄 CONSULTATION STATUS UPDATE
   New Status: CONTACTED
   
3. SCHEDULED (Appointment set)
   🔄 CONSULTATION STATUS UPDATE
   New Status: SCHEDULED
   
4. COMPLETED (Consultation done)
   🔄 CONSULTATION STATUS UPDATE
   New Status: COMPLETED
```

---

## Example Console Output

### Complete Flow Example:

```bash
# Patient submits consultation
=================================
📋 NEW CONSULTATION REQUEST (POST)
=================================
Consultation ID: CONS1774850123456
Patient Name: John Doe
Email: john@example.com
Phone: 9876543210
Status: PENDING
✅ SAVED TO DATABASE
Database ID: abc-123-def-456
=================================

# Admin marks as contacted
=================================
🔄 CONSULTATION STATUS UPDATE
=================================
Consultation ID: CONS1774850123456
Old Status: (fetching...)
New Status: CONTACTED
Updated By: Admin
Timestamp: 2024-01-15T11:00:00.000Z
✅ STATUS UPDATED SUCCESSFULLY
Patient Name: John Doe
Patient Email: john@example.com
Patient Phone: 9876543210
Current Status: CONTACTED
=================================

# Admin marks as scheduled
=================================
🔄 CONSULTATION STATUS UPDATE
=================================
Consultation ID: CONS1774850123456
Old Status: (fetching...)
New Status: SCHEDULED
Updated By: Admin
Timestamp: 2024-01-15T14:00:00.000Z
✅ STATUS UPDATED SUCCESSFULLY
Patient Name: John Doe
Patient Email: john@example.com
Patient Phone: 9876543210
Current Status: SCHEDULED
=================================

# Admin marks as completed
=================================
🔄 CONSULTATION STATUS UPDATE
=================================
Consultation ID: CONS1774850123456
Old Status: (fetching...)
New Status: COMPLETED
Updated By: Admin
Timestamp: 2024-01-15T16:00:00.000Z
✅ STATUS UPDATED SUCCESSFULLY
Patient Name: John Doe
Patient Email: john@example.com
Patient Phone: 9876543210
Current Status: COMPLETED
=================================
```

---

## Error Logging

If something goes wrong, you'll see:

```
❌ DATABASE ERROR: [error details]
=================================
```

This helps you quickly identify and fix issues.

---

## Benefits

✅ **Real-time Tracking** - See status changes as they happen  
✅ **Audit Trail** - Complete history of all changes  
✅ **Debugging** - Easy to spot errors  
✅ **Monitoring** - Track consultation workflow  
✅ **Timestamps** - Know exactly when changes occurred  

---

## Where to Check Logs

1. **During Development:**
   - Terminal where `npm run dev` is running
   - Browser console (F12)

2. **In Production:**
   - Server logs
   - Application monitoring tools
   - Log aggregation services (if configured)

---

## Quick Tips

1. **Keep Terminal Open** - Don't close the terminal running the dev server
2. **Check Regularly** - Monitor logs to ensure everything works
3. **Look for Errors** - Red ❌ symbols indicate problems
4. **Track IDs** - Use Consultation IDs to follow specific requests

---

## Summary

Every consultation action is now logged:
- ✅ New submissions
- ✅ Status updates
- ✅ Patient details
- ✅ Timestamps
- ✅ Success/Error indicators

You have complete visibility into the consultation workflow! 🎉
