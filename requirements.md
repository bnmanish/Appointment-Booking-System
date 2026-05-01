# Appointment Booking System - Software Requirements (SRS)

## 📌 Overview
This system allows users to create events and share a link so others can book appointments based on available time slots.

---

## 🛠️ Technology Stack
- Backend: Laravel (API)
- Frontend: React.js
- Database: MySQL

---

## 👤 User Types

### 1. Event Creator (Host)
- Can sign up and log in
- Can create and manage events
- Can view all bookings in dashboard

### 2. Booking User (Guest)
- Can open shared link
- Can select date and time slot
- Can book appointment without login

---

## 🔐 Authentication
- User can sign up using email and password
- User can log in and log out

---

## 📅 Event Creation
User can create an event with:
- Event name
- Description (optional)
- Slot duration (e.g., 30 mins)

### Event Type:
- Event with start and end date  
- Event with no expiry (never ending)

---

## ⏰ Availability Setup

User can define availability in two ways:

### Option 1: Same timing for all days
Example:
- 10:00 AM – 5:00 PM (every day)

### Option 2: Day-wise timing
Example:
- Monday → 10 AM – 2 PM  
- Tuesday → 12 PM – 6 PM  
- Sunday → Not available  

---

## 🔗 Event Sharing
- System generates a unique link for each event  
- Example: `/event/meeting-raj`  
- User can share this link with others  

---

## 📆 Booking System

### Step 1: Select Date
- Show calendar
- Disable:
  - Past dates
  - Dates outside event range
  - Dates where all slots are booked

### Step 2: Select Time Slot
- Show available slots
- Disable already booked slots

### Step 3: Book Appointment
Guest enters:
- Name
- Email

---

## 🚫 Booking Rules
- One slot can be booked only once  
- Cannot book outside event date range  
- Cannot select disabled slots  
- Cannot select dates with no available slots  

---

## 📊 Dashboard (Host)
- List of all events  
- View all bookings  
- Booking details:
  - Name
  - Email
  - Date
  - Time  

---

## ⚙️ Slot Logic
- Slots generated based on:
  - Availability time
  - Slot duration  

Example:
10:00 – 10:30  
10:30 – 11:00  

- Booked slots become disabled

---

## 🗂️ Event Behavior

### Date-based Event:
- Booking allowed only between start and end date  

### No-expiry Event:
- Booking allowed for all future dates  

---

## 🔒 Basic Rules
- Prevent double booking  
- Validate user input  
- Store all booking data properly