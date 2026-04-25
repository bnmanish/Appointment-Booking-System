import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const adminName = localStorage.getItem("adminName") || "Admin";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };

  return (
    <div style={styles.wrapper}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>Appointment</h2>

        <ul style={styles.menu}>
          <li style={styles.menuItemActive}>🏠 Dashboard</li>
          <li style={styles.menuItem}>📅 Appointments</li>
          <li style={styles.menuItem}>👨‍⚕️ Doctors</li>
          <li style={styles.menuItem}>👥 Patients</li>
        </ul>
      </aside>

      {/* Main */}
      <div style={styles.main}>
        {/* Header */}
        <header style={styles.header}>
          <h3>Dashboard</h3>

          <div style={styles.adminBox}>
            <div
              style={styles.adminName}
              onClick={() => setOpen(!open)}
            >
              {adminName} ⬇
            </div>

            {open && (
              <div style={styles.dropdown}>
                <div onClick={handleLogout} style={styles.dropdownItem}>
                  Logout
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <div style={styles.content}>
          <h2 style={styles.welcome}>
            Welcome back, {adminName} 👋
          </h2>

          {/* Cards */}
          <div style={styles.cards}>
            <div style={styles.card}>
              <p>Appointments</p>
              <h2 style={styles.value}>120</h2>
            </div>

            <div style={styles.card}>
              <p>Patients</p>
              <h2 style={styles.value}>85</h2>
            </div>

            <div style={styles.card}>
              <p>Doctors</p>
              <h2 style={styles.value}>12</h2>
            </div>

            <div style={styles.card}>
              <p>Revenue</p>
              <h2 style={styles.value}>₹45,000</h2>
            </div>
          </div>

          {/* Section */}
          <div style={styles.section}>
            <h3>Recent Activity</h3>
            <p>No recent activity available.</p>
          </div>
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          © {new Date().getFullYear()} All rights reserved. Created by{" "}
          <a
            href="https://github.com/bnmanish"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            B N Manish
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    background: "#f0f9ff", // soft blue background
    fontFamily: "sans-serif",
  },

  sidebar: {
    width: "230px",
    background: "linear-gradient(180deg, #14b8a6, #3b82f6)", // same as login
    color: "#fff",
    padding: "20px",
  },

  logo: {
    marginBottom: "30px",
  },

  menu: {
    listStyle: "none",
    padding: 0,
  },

  menuItem: {
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "10px",
  },

  menuItemActive: {
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "10px",
    background: "rgba(255,255,255,0.2)",
  },

  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  header: {
    height: "60px",
    background: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  },

  adminBox: {
    position: "relative",
  },

  adminName: {
    cursor: "pointer",
    fontWeight: "bold",
    color: "#0f172a",
  },

  dropdown: {
    position: "absolute",
    top: "35px",
    right: 0,
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "6px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },

  dropdownItem: {
    padding: "10px 15px",
    cursor: "pointer",
  },

  content: {
    padding: "20px",
    flex: 1,
  },

  welcome: {
    marginBottom: "20px",
    color: "#0f172a",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "20px",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    borderLeft: "5px solid #3b82f6", // theme accent
  },

  value: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#14b8a6",
  },

  section: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
  },

  footer: {
    textAlign: "center",
    padding: "10px",
    background: "#ffffff",
    borderTop: "1px solid #eee",
    fontSize: "12px",
  },

  link: {
    color: "#3b82f6",
    textDecoration: "none",
    fontWeight: "bold",
  },
};