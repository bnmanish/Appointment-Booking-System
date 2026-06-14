function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About BookMyAppointment</h1>
        <p>
          Simplifying appointment scheduling for individuals, businesses,
          healthcare providers, and service organizations.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            BookMyAppointment is a modern appointment management platform
            designed to eliminate the hassle of manual scheduling. Our system
            helps users book appointments quickly while enabling organizations
            to manage schedules efficiently.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide a simple, reliable, and secure solution
            that connects service providers with their customers through a
            seamless booking experience.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Offer</h2>
          <ul>
            <li>Easy online appointment booking</li>
            <li>Real-time schedule management</li>
            <li>Automated reminders and notifications</li>
            <li>Secure user and appointment data</li>
            <li>Dashboard for managing bookings</li>
            <li>Fast and user-friendly interface</li>
          </ul>
        </div>
      </section>

      <section className="about-stats">
        <div className="stat-card">
          <h2>10K+</h2>
          <p>Appointments Scheduled</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Organizations Served</p>
        </div>

        <div className="stat-card">
          <h2>99%</h2>
          <p>Customer Satisfaction</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>System Availability</p>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Get Started?</h2>
        <p>
          Join thousands of users who trust BookMyAppointment for efficient
          appointment scheduling and management.
        </p>
      </section>
    </div>
  );
}

export default About;