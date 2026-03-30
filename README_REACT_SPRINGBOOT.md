# Newton Labs - React + Spring Boot Version

A comprehensive diagnostic laboratory platform built with React (Vite) frontend and Spring Boot backend.

## 🏗️ Architecture

- **Frontend**: React 18 + Vite + Tailwind CSS + Framer Motion
- **Backend**: Spring Boot 3.2 + PostgreSQL + JPA/Hibernate
- **Database**: Supabase PostgreSQL
- **Deployment**: Frontend (Vercel/Netlify), Backend (Railway/Render)

## 📁 Project Structure

```
newtons-labs/
├── frontend/              # React Vite application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API service layer
│   │   └── App.jsx       # Main app component
│   └── package.json
│
├── backend/              # Spring Boot application
│   ├── src/main/java/com/newtonlab/
│   │   ├── config/       # Configuration classes
│   │   ├── controller/   # REST API controllers
│   │   ├── model/        # JPA entities
│   │   ├── repository/   # Data repositories
│   │   └── service/      # Business logic
│   └── pom.xml
│
└── insert_data.sql       # Database seed data
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Java 17+
- Maven 3.8+
- PostgreSQL (or Supabase account)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Update database credentials in `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://YOUR_HOST:6543/postgres
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

3. Run the backend:
```bash
mvn spring-boot:run
```

Backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
VITE_API_URL=http://localhost:8080
```

4. Run the frontend:
```bash
npm run dev
```

Frontend will start on `http://localhost:3000`

## 📊 Database Schema

The application uses 6 main tables:

- `tests` - Diagnostic test catalog
- `packages` - Health checkup packages
- `consultations` - Online consultation bookings
- `home_visit_bookings` - Home sample collection bookings
- `support_callbacks` - Customer support requests
- `cart_items` - Shopping cart (optional)

### Loading Sample Data

The backend includes a `DataLoader` component that automatically loads 50+ tests and 8 packages on startup.

Alternatively, run the SQL script directly in Supabase:
```bash
# Copy contents of insert_data.sql and run in Supabase SQL Editor
```

## 🔌 API Endpoints

### Tests
- `GET /api/tests` - Get all tests
- `GET /api/tests/search?query={term}` - Search tests

### Packages
- `GET /api/packages` - Get all packages

### Consultations
- `POST /api/consultations` - Book online consultation
- `GET /api/admin/consultations` - Get all consultations (admin)
- `PUT /api/admin/consultations/update` - Update consultation status

### Home Visits
- `POST /api/home-visits` - Book home sample collection

### Support
- `POST /api/support/callback` - Request callback

## 🎨 Features

- ✅ Responsive design matching new10-labs.vercel.app
- ✅ Diagnostic test catalog with search
- ✅ Health package browsing
- ✅ Online consultation booking
- ✅ Home sample collection booking
- ✅ WhatsApp integration for bookings
- ✅ Admin dashboard for consultation management
- ✅ Framer Motion animations
- ✅ Dark/Light theme support

## 📱 WhatsApp Integration

All bookings redirect to WhatsApp with pre-filled messages:
- Phone: +919360264347
- Format includes booking details and customer information

## 🔐 Security Notes

⚠️ **IMPORTANT**: Before deploying to production:

1. Remove database credentials from `application.properties`
2. Use environment variables for sensitive data
3. Enable Row Level Security (RLS) in Supabase
4. Add authentication/authorization
5. Enable HTTPS
6. Add rate limiting

## 🚢 Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Import project in Vercel
3. Set root directory to `frontend`
4. Add environment variable: `VITE_API_URL=https://your-backend-url.com`
5. Deploy

### Backend (Railway)

1. Push code to GitHub
2. Create new project in Railway
3. Connect GitHub repository
4. Set root directory to `backend`
5. Add environment variables for database
6. Deploy

## 📞 Contact

- Phone: 9360264347
- Email: mukilan021@gmail.com
- Location: Chennai, 600102

## 📝 License

Private project for Newton Labs

## 🔄 Migration from Next.js

This project is a migration from the original Next.js version at new10-labs.vercel.app. The React + Spring Boot architecture provides:

- Better separation of concerns
- Scalable backend with Spring Boot
- Type-safe API with Java
- Easier team collaboration (frontend/backend teams)
- More deployment flexibility
