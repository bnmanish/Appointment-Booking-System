# Appointment-Booking-System

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
- Admin login and dashboard
- User appointment booking
- RESTful API with authentication

## Author

**B N Manish**
- LinkedIn: https://www.linkedin.com/in/b-n-manish-a14780135/
- Email: bnmanish006@gmail.com