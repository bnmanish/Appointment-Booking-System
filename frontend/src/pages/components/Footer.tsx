function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      © {currentYear} Developed by {" "} 
      <a
        href={import.meta.env.VITE_LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        B N Manish
      </a>
      {" | "} 
      Version {import.meta.env.VITE_APP_VERSION}
    </footer>
  );
}

export default Footer;