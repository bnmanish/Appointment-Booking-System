import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";


function Header() {
  return (
  <header className="front-header">
    <div className="front-logo">
      <Link to="/"><img className="front-logo-img" src={logo} alt="BookMyAppointment" /></Link>
    </div>

    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
    </nav>
  </header>
  );
}

export default Header;