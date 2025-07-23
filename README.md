# 🏆 Tournament Management Platform

<div align="center">

![Tournament Platform](https://img.shields.io/badge/Tournament-Platform-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Firebase](https://img.shields.io/badge/Firebase-ffcb2b?style=for-the-badge&logo=firebase)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

*A modern, feature-rich tournament management web application built with cutting-edge technologies*

[🚀 Live Demo](#) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://github.com/your-username/tournament-webapp/issues) • [💡 Request Feature](https://github.com/your-username/tournament-webapp/issues)

</div>

---

## ✨ Features

### 🎮 Core Features
- **🏆 Tournament Management** - Create, manage, and track tournaments with ease
- **👥 User System** - Secure authentication with role-based access control
- **💰 Digital Wallet** - Integrated payment and balance management system (starts with 0 balance)
- **🎯 Game Integration** - Multi-game support with custom rule sets
- **📊 Live Leaderboards** - Real-time rankings and statistics
- **🏅 Bracket System** - Dynamic tournament brackets with live updates

### 🛡️ Admin Features
- **📱 Admin Dashboard** - Comprehensive management interface
- **👨‍💼 User Management** - Complete user administration tools
- **🎨 Content Management** - Banner and media management with auto-resize
- **💳 Financial Controls** - Withdrawal and payment oversight
- **📈 Analytics** - Detailed platform analytics and reporting
- **🖼️ Smart Image Upload** - Auto-resize and compression for optimal storage

### 🎨 User Experience
- **📱 Fully Responsive** - Perfect on desktop, tablet, and mobile
- **🌙 Modern UI/UX** - Clean, intuitive interface with unique loading animations
- **⚡ Real-time Updates** - Live notifications and data synchronization
- **🔒 Secure Authentication** - Password visibility toggle and secure login
- **🚀 Fast Performance** - Optimized for speed and reliability

## 🛠️ Tech Stack

<table>
<tr>
<td align="center"><strong>Frontend</strong></td>
<td align="center"><strong>Backend & Database</strong></td>
<td align="center"><strong>UI & Design</strong></td>
<td align="center"><strong>DevOps & Tools</strong></td>
</tr>
<tr>
<td>

- **Next.js 15** - React Framework
- **React 18** - UI Library
- **TypeScript** - Type Safety
- **React Hook Form** - Form Management

</td>
<td>

- **Firebase Auth** - Authentication
- **Firestore** - NoSQL Database
- **Firebase Storage** - File Storage
- **Serverless Functions** - API Routes

</td>
<td>

- **Tailwind CSS** - Utility-first CSS
- **Radix UI** - Accessible Components
- **Framer Motion** - Animations
- **Lucide React** - Icon Library

</td>
<td>

- **Vercel** - Deployment Platform
- **ESLint** - Code Linting
- **Prettier** - Code Formatting
- **Zod** - Schema Validation

</td>
</tr>
</table>

## 📋 Prerequisites

Before getting started, ensure you have:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Firebase Project** - [Create one here](https://console.firebase.google.com/)
- **Git** - [Install Git](https://git-scm.com/downloads)
- **Package Manager** - npm (comes with Node.js) or yarn

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/tournament-webapp.git
cd tournament-webapp
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Optional: Analytics
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application running!

## 🔧 Firebase Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Follow the setup wizard
4. Enable Authentication, Firestore, and Storage

### 2. Configure Authentication
```bash
# Enable Email/Password authentication
# Optionally enable Google sign-in
# Set authorized domains for production
```

### 3. Setup Firestore Database
```javascript
// Security Rules Example
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      allow read: if request.auth != null;
    }
    
    // Tournaments are public read, admin write
    match /tournaments/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
    }
  }
}
```

### 4. Configure Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /uploads/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        request.resource.size < 5 * 1024 * 1024; // 5MB limit
    }
  }
}
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/tournament-webapp)

```bash
# Install Vercel CLI
npm install -g vercel

# Login and deploy
vercel login
vercel --prod
```

### Option 2: Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

### Option 3: Netlify
```bash
# Build the application
npm run build

# Deploy via Netlify CLI or drag-and-drop
```

### Option 4: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🛡️ Admin Setup

### Create First Admin User
1. Register a user through the app
2. Go to Firebase Console > Firestore
3. Find the user document in `users` collection
4. Change `role` field from "Player" to "Admin"

## 📊 Project Structure

```
tournament-webapp/
├── 📁 src/
│   ├── 📁 app/                 # Next.js App Router
│   │   ├── 📁 admin/          # Admin panel pages
│   │   ├── 📁 tournaments/    # Tournament pages
│   │   ├── 📁 profile/        # User profile
│   │   └── 📁 auth/           # Authentication pages
│   ├── 📁 components/         # Reusable components
│   │   ├── 📁 ui/             # Base UI components
│   │   ├── 📁 admin/          # Admin-specific components
│   │   └── 📁 layout/         # Layout components
│   ├── 📁 lib/                # Utility functions
│   │   ├── firebase.ts        # Firebase configuration
│   │   ├── auth-service.ts    # Authentication logic
│   │   └── storage-service.ts # File upload logic
│   ├── 📁 hooks/              # Custom React hooks
│   ├── 📁 types/              # TypeScript type definitions
│   └── 📁 context/            # React context providers
├── 📁 public/                 # Static assets
├── 📄 package.json            # Dependencies
├── 📄 tailwind.config.ts      # Tailwind configuration
├── 📄 next.config.ts          # Next.js configuration
└── 📄 firestore.rules         # Firestore security rules
```

## 🎯 Key Features Implemented

### ✅ Recent Updates
- **Fixed Wallet System**: New users now start with 0 balance instead of automatic 100tk
- **Enhanced Image Upload**: Auto-resize and compression for Firebase storage optimization
- **Password Visibility**: Added show/hide toggle for password fields in login/register
- **Unique Loading Animation**: Custom tournament-themed loading spinner with trophy icon
- **Improved Error Handling**: Better user feedback for upload failures and validation errors

### 🎮 User Features
- **Tournament Registration**: Join tournaments with real-time updates
- **Bracket Visualization**: Interactive tournament brackets
- **Profile Management**: Customizable user profiles with avatar upload
- **Wallet Management**: Secure balance tracking and transactions
- **Game History**: Complete match and tournament history

### 🛡️ Admin Features
- **Dashboard Analytics**: Real-time platform statistics
- **User Management**: Complete user administration tools
- **Tournament Control**: Create and manage all tournament aspects
- **Content Management**: Upload and manage banners, game assets
- **Financial Oversight**: Monitor and approve withdrawal requests

## 🔍 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checker
npm run format       # Format code with Prettier

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## 🐛 Troubleshooting

### Common Issues

<details>
<summary><strong>🔥 Firebase Configuration Errors</strong></summary>

- Ensure all environment variables are correctly set
- Verify Firebase project settings and API keys
- Check that services (Auth, Firestore, Storage) are enabled
- Confirm authorized domains in Firebase Console

</details>

<details>
<summary><strong>🔒 Authentication Issues</strong></summary>

- Check Firebase Auth configuration
- Verify email/password provider is enabled
- Ensure domain is whitelisted in Firebase Console
- Check redirect URLs for production deployment

</details>

<details>
<summary><strong>📁 Image Upload Problems</strong></summary>

- Verify Firebase Storage rules
- Check file size limits (max 5MB)
- Ensure CORS is properly configured
- Confirm storage bucket permissions

</details>

<details>
<summary><strong>⚡ Build/Performance Issues</strong></summary>

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run type-check

# Analyze bundle size
npm run build && npm run analyze
```

</details>

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Firebase Team](https://firebase.google.com/) for the backend infrastructure
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Lucide](https://lucide.dev/) for the beautiful icon library

## 📞 Support

Need help? We're here for you:

- 📧 **Email**: support@tournamentplatform.com
- 💬 **Discord**: [Join our community](https://discord.gg/tournament-platform)
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-username/tournament-webapp/issues)
- 📖 **Docs**: [Full Documentation](https://docs.tournamentplatform.com)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by [Your Name](https://github.com/your-username)

</div>
# Tour
