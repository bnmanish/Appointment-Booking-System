import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="front-footer">
      © {new Date().getFullYear()}  <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank">B N Manish</a>.  All Rights Reserved.
    </footer>
  );
}

export default Footer;