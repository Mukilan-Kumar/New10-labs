# Newton's Lab - React + Spring Boot Setup Guide

## 🎯 Project Structure Created

```
newtons-lab-react-springboot/
├── backend/                          # Spring Boot Backend
│   ├── src/main/java/com/newtonlab/
│   │   ├── NewtonLabApplication.java
│   │   ├── config/
│   │   │   └── CorsConfig.java
│   │   ├── model/
│   │   │   ├── Consultation.java
│   │   │   ├── HomeVisitBooking.java
│   │   │   └── SupportCallback.java
│   │   ├── repository/
│   │   │   ├── ConsultationRepository.java
│   │   │   ├── HomeVisitBookingRepository.java
│   │   │   └── SupportCallbackRepository.java
│   │   ├── service/
│   │   │   └── ConsultationService.java
│   │   └── controller/
│   │       └── ConsultationController.java
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
│
└── frontend/                         # React Frontend
    ├── src/
    │   ├── services/
    │   │   └── api.js
    │   └── App.jsx
    ├── package.json
    ├── vite.config.js
    └── tailwind.config.js
```

## ✅ What's Already Configured

### Backend (Spring Boot)
- ✅ PostgreSQL database connection (Supabase)
- ✅ JPA entities for Consultation, HomeVisitBooking, SupportCallback
- ✅ Repository interfaces with custom queries
- ✅ Service layer with console logging
- ✅ REST controllers with CRUD operations
- ✅ CORS configuration for React frontend
- ✅ Maven dependencies (Web, JPA, PostgreSQL, Lombok)

### Frontend (React)
- ✅ Vite build tool configuration
- ✅ React Router setup
- ✅ Tailwind CSS configuration
- ✅ Axios API service layer
- ✅ Dark mode support
- ✅ Responsive design foundation

## 🚀 Setup Instructions

### Prerequisites
- Java 17+ (JDK)
- Maven 3.8+
- Node.js 18+
- PostgreSQL (Supabase account)

### Step 1: Backend Setup

```bash
cd backend

# Install dependencies
mvn clean install

# Run the application
mvn spring-boot:run
```

Backend will start on: **http://localhost:8080**

### Step 2: Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will start on: **http://localhost:3000**

## 📊 Database Configuration

The backend is already configured to connect to your Supabase PostgreSQL database.

**File:** `backend/src/main/resources/application.properties`

```properties
spring.datasource.url=jdbc:postgresql://aws-1-ap-south-1.pooler.supabase.com:6543/postgres
spring.datasource.username=postgres.kfxqazgjxkwfndjvwpmg
spring.datasource.password=18Lx7NzMTsfdAKeq
```

## 🔌 API Endpoints

### Consultations
- `POST /api/consultations` - Create consultation
- `GET /api/consultations` - Get all consultations
- `GET /api/consultations/status/{status}` - Get by status
- `PUT /api/consultations/{id}/status` - Update status

### Example API Call
```javascript
// Create consultation
const response = await fetch('http://localhost:8080/api/consultations', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    message: 'Need consultation'
  })
});
```

## 📝 What You Need to Implement

### Backend (Java/Spring Boot)
1. ✅ Consultation API - DONE
2. ⏳ Home Visit Booking API - TODO
3. ⏳ Support Callback API - TODO
4. ⏳ Test/Package APIs - TODO
5. ⏳ Email service integration - TODO
6. ⏳ WhatsApp integration - TODO

### Frontend (React)
1. ⏳ Header component - TODO
2. ⏳ Footer component - TODO
3. ⏳ HomePage - TODO
4. ⏳ ConsultationPage - TODO
5. ⏳ TestsPage - TODO
6. ⏳ AdminDashboard - TODO
7. ⏳ All UI components - TODO
8. ⏳ Responsive design - TODO

## 🎨 Frontend Component Structure

Create these components in `frontend/src/components/`:

```
components/
├── Header.jsx
├── Footer.jsx
├── Hero.jsx
├── TestCard.jsx
├── PackageCard.jsx
├── BookingModal.jsx
└── AdminConsultationList.jsx
```

## 📱 Responsive Design

Use Tailwind CSS classes:
- Mobile: `sm:` prefix
- Tablet: `md:` prefix
- Desktop: `lg:` prefix

Example:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Cards */}
</div>
```

## 🔐 Environment Variables

### Backend (.env or application.properties)
```properties
spring.datasource.url=your_database_url
spring.datasource.username=your_username
spring.datasource.password=your_password
admin.email=mukilan021@gmail.com
admin.phone=9360264347
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:8080/api
```

## 🧪 Testing

### Test Backend API
```bash
# Using curl
curl -X POST http://localhost:8080/api/consultations \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "9876543210",
    "message": "Test consultation"
  }'
```

### Test Frontend
1. Start both backend and frontend
2. Open http://localhost:3000
3. Navigate to consultation page
4. Submit form
5. Check backend console for logs

## 📦 Deployment

### Backend (Spring Boot)
- **Heroku**: `git push heroku main`
- **AWS**: Use Elastic Beanstalk
- **Railway**: Connect GitHub repo

### Frontend (React)
- **Vercel**: `vercel deploy`
- **Netlify**: Connect GitHub repo
- **AWS S3**: Build and upload

## 🎯 Next Steps

1. **Implement remaining backend APIs**
   - HomeVisitBookingController
   - SupportCallbackController
   - TestController
   - PackageController

2. **Create React components**
   - Header, Footer
   - HomePage with Hero
   - ConsultationPage with form
   - TestsPage with cards
   - AdminDashboard

3. **Add features**
   - Email notifications
   - WhatsApp integration
   - Search functionality
   - Filters and sorting

4. **Testing**
   - Unit tests (JUnit for backend)
   - Integration tests
   - E2E tests (Cypress for frontend)

5. **Deploy**
   - Backend to Heroku/Railway
   - Frontend to Vercel/Netlify
   - Configure environment variables

## 📚 Resources

- Spring Boot Docs: https://spring.io/projects/spring-boot
- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev

## ⏱️ Estimated Timeline

- **Backend APIs**: 1-2 weeks
- **Frontend Components**: 1-2 weeks
- **Integration & Testing**: 1 week
- **Deployment**: 2-3 days

**Total: 3-4 weeks of full-time development**

## 🆘 Support

For issues or questions:
- Check console logs (backend and frontend)
- Review API responses
- Test endpoints with Postman
- Check database connections

---

**Status: Foundation Complete ✅**
**Next: Implement remaining features ⏳**
