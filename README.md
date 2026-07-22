# Appointment-Booking-System

## Author

**B N Manish**

- GitHub: [bnmanish](https://github.com/bnmanish)
- LinkedIn: [B N Manish](https://www.linkedin.com/in/bnmanish/)

---

A full-stack appointment booking system built with Laravel (API) and React (Frontend).

## Tech Stack

### Backend (API)
- **Framework**: Laravel 13.0
- **PHP**: 8.3
- **Authentication**: Laravel Sanctum 4.3
- **Testing**: Pest 4.5
- **Tinker**: 3.0

### Frontend
- **Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.4
- **Routing**: React Router DOM 7.14.2
- **HTTP Client**: Axios 1.15.2
- **Language**: TypeScript 6.0.2

## Installation

### Prerequisites
- PHP 8.3+
- Node.js 18+
- Composer
- Laravel Sanctum

### Backend Setup

```bash
cd api
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Features

### Authentication & User Management
- User registration with email OTP verification
- Secure login with Laravel Sanctum token-based authentication
- OTP email verification with 6-digit code input
- Resend OTP functionality with countdown timer
- Protected admin routes with automatic redirect

### Meeting Channel Management
- Configure multiple meeting platforms per user
- Supported platforms:
  - Google Meet
  - Zoom
  - Microsoft Teams
  - WhatsApp Video
  - Mobile Call
- Update and retrieve meeting channel configurations

### Event Management
- Create events with title, description, and duration
- Select meeting platform from configured channels
- Set start and end dates for events
- Configure weekly availability with time slots
  - Enable/disable days of the week
  - Add multiple time slots per day
  - Set start and end times for each slot

### Dashboard & Admin Panel
- Admin dashboard with sidebar navigation
- Meeting Channel configuration page
- Events listing page
- Event creation page with availability scheduler
- Meetings page (placeholder)

### Public Pages
- Home page with hero section, features, and CTA
- About page
- Contact page
- Login page with form validation
- Signup page with form validation
- OTP verification page

### Security Features
- Client-side data encryption utility (CryptoJS AES)
- Token-based API authentication
- Protected admin routes
- Form validation on both client and server

## Database Schema

### Users Table
- id, name, email, password, otp, is_email_verified, timestamps

### Meeting Channels Table
- id, user_id, google_meet, zoom, microsoft_teams, whatsapp_video, other_video, mobile_call, timestamps

### Events Table
- id, user_id, meeting_channel_id, title, description, start_date, end_date, duration, timezone, status, timestamps

### Event Availabilities Table
- id, event_id, day (Monday-Sunday), timestamps

### Event Time Slots Table
- id, event_availability_id, start_time, end_time, timestamps

## API Endpoints

### Public Routes
- `POST /api/v1/login` - User login
- `POST /api/v1/signup` - User registration

### Protected Routes (Auth Required)
- `POST /api/v1/verify-otp` - Verify email OTP
- `POST /api/v1/update-meeting-channel` - Update meeting channels
- `POST /api/v1/get-meeting-channel-by-email` - Get meeting channels by email
- `POST /api/v1/get-user-meeting-channel-list` - Get user meeting channel list
- `POST /api/v1/create-event` - Create a new event
