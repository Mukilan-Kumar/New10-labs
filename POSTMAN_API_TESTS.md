# Postman API Testing Guide

Base URL: `http://localhost:3000`

## 1. Test Consultation Booking

**Endpoint:** `POST /api/booking/consultation`

**Request Body (JSON):**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "message": "I need a consultation for diabetes management"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Consultation booked successfully. Confirmation emails sent.",
  "data": {
    "consultationId": "CONS1234567890",
    "name": "John Doe",
    "phone": "9876543210",
    "email": "john@example.com",
    "message": "I need a consultation for diabetes management",
    "status": "pending",
    "bookedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

---

## 2. Test Home Visit Booking

**Endpoint:** `POST /api/booking/home-visit`

**Request Body (JSON):**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "9876543210",
  "address": "123 Main Street, Apartment 4B",
  "pincode": "560001",
  "date": "2024-01-20",
  "time": "10:00 AM",
  "tests": [
    {
      "id": "TEST001",
      "name": "Complete Blood Count",
      "price": 500
    }
  ],
  "totalAmount": 500
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Home visit booked successfully",
  "data": {
    "bookingId": "HV1234567890",
    "name": "Jane Smith",
    "phone": "9876543210",
    "email": "jane@example.com",
    "address": "123 Main Street, Apartment 4B",
    "pincode": "560001",
    "date": "2024-01-20",
    "time": "10:00 AM",
    "status": "confirmed",
    "estimatedArrival": "30-60 minutes",
    "bookedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

---

## 3. Test Add to Cart

**Endpoint:** `POST /api/cart/add`

**Request Body (JSON):**
```json
{
  "id": "TEST001",
  "name": "Complete Blood Count",
  "price": 500,
  "type": "test",
  "sessionId": "session_123456"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Item added to cart successfully",
  "data": {
    "id": "uuid-here",
    "itemId": "TEST001",
    "name": "Complete Blood Count",
    "price": 500,
    "type": "test",
    "sessionId": "session_123456",
    "addedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

---

## 4. Test Create Booking

**Endpoint:** `POST /api/bookings/create`

**Request Body (JSON):**
```json
{
  "user": {
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "phone": "9876543210",
    "age": 30,
    "designation": "Software Engineer",
    "patientId": "PAT001"
  },
  "items": [
    {
      "id": "TEST001",
      "name": "Complete Blood Count",
      "price": 450,
      "originalPrice": 500,
      "discount": 50,
      "type": "test",
      "category": "Blood Test",
      "parameters": 25,
      "reportTime": "24 Hours"
    },
    {
      "id": "TEST002",
      "name": "Lipid Profile",
      "price": 800,
      "originalPrice": 1000,
      "discount": 200,
      "type": "test",
      "category": "Blood Test",
      "parameters": 8,
      "reportTime": "24 Hours"
    }
  ],
  "address": "456 Park Avenue, Bangalore",
  "phone": "9876543210"
}
```

**Expected Response:**
```json
{
  "success": true,
  "booking": {
    "id": "BK-xxxxx-xxxx",
    "booking_id": "BK-xxxxx-xxxx",
    "user_name": "Alice Johnson",
    "user_email": "alice@example.com",
    "user_phone": "9876543210",
    "items": [...],
    "total_amount": 1250,
    "status": "confirmed",
    "created_at": "2024-01-15T10:30:00.000Z"
  }
}
```

---

## 5. Test Support Callback

**Endpoint:** `POST /api/support/callback`

**Request Body (JSON):**
```json
{
  "name": "Bob Wilson",
  "phone": "9876543210",
  "message": "I need help with my test results"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Callback request received",
  "data": {
    "ticketId": "CB1234567890",
    "phone": "9876543210",
    "name": "Bob Wilson",
    "status": "pending",
    "estimatedCallTime": "15-30 minutes",
    "queuePosition": 3,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

---

## 6. Get Tests (GET Request)

**Endpoint:** `GET /api/tests?limit=10&sortBy=price-low`

**No Body Required**

**Expected Response:**
```json
{
  "tests": [
    {
      "id": "TEST001",
      "name": "Complete Blood Count",
      "price": 500,
      "category": "Blood Test",
      ...
    }
  ],
  "total": 502
}
```

---

## 7. Get Packages (GET Request)

**Endpoint:** `GET /api/packages`

**No Body Required**

**Expected Response:**
```json
{
  "packages": [
    {
      "id": "PKG001",
      "name": "Basic Health Checkup",
      "price": 1500,
      ...
    }
  ]
}
```

---

## 8. Search Tests (GET Request)

**Endpoint:** `GET /api/search?q=blood`

**No Body Required**

**Expected Response:**
```json
{
  "results": [
    {
      "id": "TEST001",
      "name": "Complete Blood Count",
      "type": "test",
      ...
    }
  ]
}
```

---

## How to Test in Postman:

1. **Open Postman**
2. **Create a new request**
3. **Set the method** (POST or GET)
4. **Enter the URL** (e.g., `http://localhost:3000/api/booking/consultation`)
5. **For POST requests:**
   - Go to "Body" tab
   - Select "raw"
   - Select "JSON" from dropdown
   - Paste the JSON request body
6. **Click "Send"**
7. **Check the response** in the bottom panel
8. **Verify in Supabase** - Go to your Supabase dashboard and check the table to see the saved data

---

## Quick Test Order:

1. ✅ Test Support Callback (simplest)
2. ✅ Test Add to Cart
3. ✅ Test Consultation Booking
4. ✅ Test Home Visit Booking
5. ✅ Test Create Booking (most complex)
6. ✅ Test GET endpoints (no body needed)

---

## Troubleshooting:

- **500 Error**: Check server logs in terminal
- **400 Error**: Check if all required fields are provided
- **Connection Error**: Make sure server is running on port 3000
- **Database Error**: Check Supabase connection in `.env.local`

---

## View Saved Data:

After each successful POST request, go to:
https://app.supabase.com/project/kfxqazgjxkwfndjvwpmg/editor

Select the appropriate table to see your data!
