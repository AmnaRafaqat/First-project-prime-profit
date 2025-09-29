# Earning App - Full Stack Integration

A full-stack investment platform with React frontend and Node.js backend.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Installation

1. **Install all dependencies:**
```bash
npm run install:all
```

2. **Start both frontend and backend in development mode:**
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:6000`
- Frontend development server on `http://localhost:8080`

### Individual Commands

**Backend only:**
```bash
npm run dev:backend
```

**Frontend only:**
```bash
npm run dev:frontend
```

**Production build:**
```bash
npm run build
npm start
```

## 📁 Project Structure

```
earningapp-main/
├── backend/                 # Node.js/Express API
│   ├── src/
│   │   ├── controllers/    # API controllers
│   │   ├── routes/         # API routes
│   │   ├── models/         # Database models
│   │   └── index.ts        # Server entry point
│   └── package.json
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── lib/           # Utilities and API client
│   │   └── main.tsx       # App entry point
│   └── package.json
└── package.json           # Root package.json for scripts
```

## 🔧 API Integration

The frontend is fully integrated with the backend API:

### Authentication
- **Register:** `POST /api/auth/register`
- **Login:** `POST /api/auth/login`
- **Logout:** `POST /api/auth/logout`

### Dashboard
- **Get Dashboard Data:** `GET /api/dashboard`

### Plans
- **Get All Plans:** `GET /api/plans`
- **Get Default Plan:** `GET /api/plan`

### Transactions
- **Get All Transactions:** `GET /api/transactions`

### Active Plans
- **Get Active Plans:** `GET /api/active`
- **Withdraw from Active Plan:** `POST /api/active/withdraw`

## 🎨 Features

### Frontend
- ✅ Modern React with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Shadcn/ui components
- ✅ Authentication system
- ✅ Dashboard with real-time data
- ✅ Investment plans display
- ✅ Transaction history
- ✅ Responsive design

### Backend
- ✅ Express.js API
- ✅ TypeScript support
- ✅ MongoDB integration
- ✅ Authentication endpoints
- ✅ CORS configuration
- ✅ Static file serving for production

## 🔒 Authentication

The app uses a simple token-based authentication system:
- Tokens are stored in localStorage/sessionStorage
- Frontend automatically checks authentication status
- Protected routes redirect to login if not authenticated

## 🌐 Environment Configuration

### Backend
Create a `.env` file in the backend directory:
```
MONGODB_URI=mongodb://localhost:27017/earningapp
PORT=6000
CORS_ORIGIN=http://localhost:8080
```

### Frontend
The frontend uses Vite's proxy configuration for development:
- API calls are proxied to `http://localhost:6000`
- Production builds use the full API URL

## 📱 Usage

1. **Register/Login:** Use the authentication dialog on the homepage
2. **Dashboard:** View your account overview and recent transactions
3. **Investment Plans:** Browse available investment options
4. **Transactions:** Track your deposit and withdrawal history

## 🛠️ Development

### Adding New API Endpoints

1. Create controller in `backend/src/controllers/`
2. Add route in `backend/src/routes/`
3. Import and use in `backend/src/index.ts`
4. Add API function in `frontend/src/lib/api.ts`
5. Use in React components

### Styling

The app uses Tailwind CSS with a custom design system:
- Primary colors: Green theme
- Dark mode support
- Responsive breakpoints
- Custom animations

## 🚀 Deployment

### Backend Deployment
1. Build the backend: `npm run build:backend`
2. Set environment variables
3. Deploy to your hosting service

### Frontend Deployment
1. Build the frontend: `npm run build:frontend`
2. The backend serves the built frontend in production
3. Or deploy separately to a CDN

## 📞 Support

For issues or questions, please check the console logs and ensure:
- MongoDB is running
- All dependencies are installed
- Ports 6000 and 8080 are available
- Environment variables are set correctly

---

**Happy Investing! 💰**
