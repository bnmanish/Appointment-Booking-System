function Contact() {
  return (
    <div className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions or need assistance? We'd love to hear from you.
        </p>
      </section>

      {/* Main Section */}
      <section className="contact-container">

        {/* Contact Form */}
        <div className="contact-form-card">
          <h2>Send Us a Message</h2>

          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Enter subject" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows={5}
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info-card">

          <h2>Get In Touch</h2>

          {/* <div className="info-item">
            <h3>📍 Address</h3>
            <p>Ghaziabad, Uttar Pradesh, India</p>
          </div>

          <div className="info-item">
            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>
          </div> */}

          <div className="info-item">
            <h3>✉️ Email</h3>
            <p>support@bookmyappointment.com</p>
          </div>

          <div className="info-item">
            <h3>🕒 Working Hours</h3>
            <p>Monday - Saturday</p>
            <p>09:00 AM - 06:00 PM</p>
          </div>

        </div>

      </section>

      {/* Support Cards */}
      <section className="support-section">

        <h2>How Can We Help?</h2>

        <div className="support-grid">

          <div className="support-card">
            <h3>📅 Appointment Issues</h3>
            <p>
              Need help managing or booking appointments?
            </p>
          </div>

          <div className="support-card">
            <h3>🔐 Account Support</h3>
            <p>
              Assistance with login or account-related issues.
            </p>
          </div>

          <div className="support-card">
            <h3>💼 Business Enquiries</h3>
            <p>
              Looking to integrate our platform into your organization?
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;