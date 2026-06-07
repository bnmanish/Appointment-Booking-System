import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="header">
      <h2>Appointment Booking System</h2>

      <div className="user-section">
        <div
          className="user-icon"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          👤
        </div>

        {showDropdown && (
          <div className="dropdown">
            <div
              className="dropdown-item"
              onClick={() => navigate("/admin/profile")}
            >
              Profile
            </div>

            <div
              className="dropdown-item"
              onClick={logout}
            >
              Logout
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;