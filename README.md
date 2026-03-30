# Newton Labs - React + Spring Boot

A modern diagnostic laboratory platform built with React (Vite) frontend and Spring Boot backend.

🌐 **Live Demo**: Coming soon  
📱 **Original Next.js Version**: [new10-labs.vercel.app](https://new10-labs.vercel.app)

## 🏗️ Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS for styling
- Framer Motion for animations
- Axios for API calls
- React Router for navigation

### Backend
- Spring Boot 3.2
- PostgreSQL with JPA/Hibernate
- RESTful API architecture
- Supabase for database hosting

## 📁 Project Structure

```
New10-labs-react/
├── frontend/              # React Vite application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API service layer
│   │   └── App.jsx       # Main app component
│   ├── .env.example      # Environment variables template
│   └── package.json
│
├── backend/              # Spring Boot application
│   ├── src/main/java/com/newtonlab/
│   │   ├── config/       # Configuration classes
│   │   ├── controller/   # REST API controllers
│   │   ├── model/        # JPA entities
│   │   ├── repository/   # Data repositories
│   │   └── service/      # Business logic
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
│
├── insert_data.sql       # Database seed data (50+ tests, 8 packages)
├── DEPLOYMENT_GUIDE.md   # Detailed deployment instructions
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Java 17+
- Maven 3.8+
- PostgreSQL database (or Supabase account)

### 1. Clone the Repository

```bash
git clone https://github.com/Mukilan-Kumar/New10-labs-react.git
cd New10-labs-react
```

### 2. Setup Backend

```bash
cd backend

# Update database credentials in src/main/resources/application.properties
# Then run:
mvn spring-boot:run
```

Backend will start on `http://localhost:8080`

### 3. Setup Frontend

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your backend URL
# VITE_API_URL=http://localhost:8080/api

# Run development server
npm run dev
```

Frontend will start on `http://localhost:3000`

## 🌐 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

### Quick Deployment Summary:

**Backend → Railway**
- Root Directory: `backend`
- Build Command: `mvn clean package -DskipTests`
- Start Command: `java -jar target/diagnostic-lab-backend-1.0.0.jar`

**Frontend → Vercel**
- Root Directory: `frontend`
- Framework: Vite
- Environment Variable: `VITE_API_URL=https://your-backend-url.railway.app/api`

## 📊 Features

✅ **Diagnostic Tests Catalog**
- 50+ medical tests with search functionality
- Sorted by price (lowest first)
- Detailed test information (sample type, TAT, department)

✅ **Health Packages**
- 8 comprehensive health checkup packages
- New 69, New 79, New 89, New 99 (Male/Female)
- Specialized packages (Thyroid, Diabetes, Cardiac)

✅ **Online Consultation Booking**
- WhatsApp integration
- Consultation ID generation
- Admin dashboard for management

✅ **Home Sample Collection**
- Book home visits for sample collection
- Address and time slot selection

✅ **Responsive Design**
- Mobile-first approach
- Matches original website design
- Smooth animations with Framer Motion

## 🔌 API Endpoints

### Tests
- `GET /api/tests` - Get all tests
- `GET /api/tests/search?query={term}` - Search tests

### Packages
- `GET /api/packages` - Get all packages

### Consultations
- `POST /api/consultations` - Book consultation
- `GET /api/admin/consultations` - Get all consultations
- `PUT /api/admin/consultations/update` - Update status

### Home Visits
- `POST /api/home-visits` - Book home visit

### Support
- `POST /api/support/callback` - Request callback

## 📱 Contact Information

- **Phone**: +91 9360264347
- **Email**: mukilan021@gmail.com
- **Location**: Chennai, 600102

## 🔐 Environment Variables

### Frontend (.env)
```env
VITE_API_URL=http://localhost:8080/api
```

### Backend (application.properties)
```properties
spring.datasource.url=jdbc:postgresql://YOUR_HOST:6543/postgres
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

## 📝 Database Schema

The application uses 6 main tables:
- `tests` - Diagnostic test catalog
- `packages` - Health checkup packages
- `consultations` - Online consultation bookings
- `home_visit_bookings` - Home sample collection bookings
- `support_callbacks` - Customer support requests
- `cart_items` - Shopping cart (optional)

### Loading Sample Data

The backend includes a `DataLoader` component that automatically loads:
- 50+ diagnostic tests (₹40 to ₹1500)
- 8 health packages (₹899 to ₹2999)

Alternatively, run `insert_data.sql` in your database.

## 🛠️ Development

### Backend Development
```bash
cd backend
mvn spring-boot:run
```

### Frontend Development
```bash
cd frontend
npm run dev
```

### Build for Production

**Frontend:**
```bash
cd frontend
npm run build
```

**Backend:**
```bash
cd backend
mvn clean package
```

## 🔄 Migration from Next.js

This project is a complete rewrite of the original Next.js application. Benefits:

- ✅ Better separation of concerns (frontend/backend)
- ✅ Scalable backend with Spring Boot
- ✅ Type-safe API with Java
- ✅ Easier team collaboration
- ✅ More deployment flexibility
- ✅ Better performance for large datasets

## 📄 License

Private project for Newton Labs

## 🤝 Contributing

This is a private project. For any questions or issues, contact:
- Email: mukilan021@gmail.com
- Phone: +91 9360264347

## 🙏 Acknowledgments

- Original design: [new10-labs.vercel.app](https://new10-labs.vercel.app)
- Built with ❤️ for Newton Labs
- Database: Supabase PostgreSQL
- Deployment: Vercel + Railway

---

**Note**: This is the React + Spring Boot version. For the original Next.js version, visit [New10-labs](https://github.com/Mukilan-Kumar/New10-labs).
