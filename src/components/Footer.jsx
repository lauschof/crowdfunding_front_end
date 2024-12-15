import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Neighbourhood Fund</p>
      <p>Building trust, one community at a time.</p>
    </footer>
  );
}

export default Footer;