# API Testing with URL Parameters (GET Requests)

You can now test all APIs directly in your browser or Postman using simple URLs!

## Base URL
```
http://localhost:3000
```

---

## 1. Support Callback

**URL:**
```
http://localhost:3000/api/support/callback?phone=9876543210&name=John%20Doe&message=Need%20help
```

**Parameters:**
- `phone` (required): Phone number
- `name` (optional): Customer name
- `message` (optional): Message

**Example:**
```
http://localhost:3000/api/support/callback?phone=9876543210&name=Test%20User&message=Testing%20from%20browser
```

**Just paste this URL in your browser or Postman (GET request) and press Enter!**

---

## 2. Consultation Booking

**URL:**
```
http://localhost:3000/api/booking/consultation?name=John%20Doe&email=john@example.com&phone=9876543210&message=Need%20consultation
```

**Parameters:**
- `name` (required): Patient name
- `email` (required): Email address
- `phone` (required): Phone number
- `message` (required): Health concern

**Example:**
```
http://localhost:3000/api/booking/consultation?name=Jane%20Smith&email=jane@example.com&phone=9876543210&message=Diabetes%20consultation
```

---

## 3. Add to Cart

**URL:**
```
http://localhost:3000/api/cart/add?id=TEST001&name=Complete%20Blood%20Count&price=500&type=test
```

**Parameters:**
- `id` (required): Test/Package ID
- `name` (required): Test/Package name
- `price` (required): Price
- `type` (required): Type (test or package)
- `sessionId` (optional): Session ID

**Example:**
```
http://localhost:3000/api/cart/add?id=TEST001&name=Blood%20Test&price=500&type=test&sessionId=session123
```

---

## Quick Test URLs (Copy & Paste in Browser)

### Test 1: Support Callback
```
http://localhost:3000/api/support/callback?phone=9876543210&name=Browser%20Test&message=Testing%20from%20URL
```

### Test 2: Consultation
```
http://localhost:3000/api/booking/consultation?name=John%20Doe&email=john@test.com&phone=9876543210&message=Need%20diabetes%20consultation
```

### Test 3: Add to Cart
```
http://localhost:3000/api/cart/add?id=TEST001&name=Blood%20Test&price=500&type=test
```

---

## Important Notes:

1. **Spaces in URLs**: Replace spaces with `%20`
   - Example: "John Doe" becomes "John%20Doe"

2. **Special Characters**: Encode special characters
   - `@` becomes `%40`
   - `&` in text becomes `%26`
   - Space becomes `%20`

3. **In Postman**: 
   - Select `GET` method
   - Paste the URL
   - Click Send
   - No need for Headers or Body!

4. **In Browser**:
   - Just paste the URL in address bar
   - Press Enter
   - You'll see the JSON response

---

## Verify Data in Supabase

After each request, check your Supabase dashboard:
https://app.supabase.com/project/kfxqazgjxkwfndjvwpmg/editor

Tables:
- `support_callbacks` - For callback requests
- `consultations` - For consultation bookings
- `cart_items` - For cart items

---

## Example Response:

```json
{
  "success": true,
  "message": "Callback request received",
  "data": {
    "ticketId": "CB1234567890",
    "phone": "9876543210",
    "name": "Browser Test",
    "status": "pending",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

---

## Both Methods Work!

You can use either:
1. ✅ **GET with URL parameters** (simple, just paste URL)
2. ✅ **POST with JSON body** (more secure, better for complex data)

Choose whichever is easier for you!
