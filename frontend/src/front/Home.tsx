import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Book Appointments Easily & Efficiently</h1>
          <p>
            Schedule meetings, doctor visits, consultations, interviews, and
            more with our smart appointment booking system.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="btn-primary">
              Book Appointment
            </Link>

            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>📅 Easy Scheduling</h3>
            <p>
              Book appointments in seconds with a simple and intuitive process.
            </p>
          </div>

          <div className="feature-card">
            <h3>⏰ Time Saving</h3>
            <p>
              Reduce waiting time and manage appointments efficiently.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔔 Instant Notifications</h3>
            <p>
              Get reminders and updates for all your upcoming appointments.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔒 Secure Platform</h3>
            <p>
              Your appointment data is protected with modern security measures.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="steps-section">
        <h2>How It Works</h2>

        <div className="steps-grid">
          <div className="step-card">
            <span>1</span>
            <h3>Create Account</h3>
            <p>Register and access your appointment dashboard.</p>
          </div>

          <div className="step-card">
            <span>2</span>
            <h3>Select Service</h3>
            <p>Choose the appointment type you need.</p>
          </div>

          <div className="step-card">
            <span>3</span>
            <h3>Pick Date & Time</h3>
            <p>Select your preferred available slot.</p>
          </div>

          <div className="step-card">
            <span>4</span>
            <h3>Confirm Booking</h3>
            <p>Receive confirmation and reminders instantly.</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="stat-box">
          <h2>10K+</h2>
          <p>Appointments Booked</p>
        </div>

        <div className="stat-box">
          <h2>500+</h2>
          <p>Organizations</p>
        </div>

        <div className="stat-box">
          <h2>99%</h2>
          <p>Customer Satisfaction</p>
        </div>

        <div className="stat-box">
          <h2>24/7</h2>
          <p>Availability</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Schedule Your Appointment?</h2>
        <p>
          Join thousands of users who trust our platform for hassle-free
          appointment management.
        </p>

        <Link to="/login" className="btn-primary">
          Get Started Today
        </Link>
      </section>
    </div>
  );
}

export default Home;