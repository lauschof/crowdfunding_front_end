import { useState } from "react"; // Add this import for state management
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import './NavBar.css';

function NavBar() {
  const { auth, setAuth } = useAuth(); // Fix the missing parentheses here
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle between open and closed states
  };

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setAuth({ token: null });
    setMenuOpen(false); // Close menu after logout
  };

  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <h1>Neighbourhood Fund</h1>
        <button className="hamburger" onClick={toggleMenu}>
        &#9776;
        </button>
        <div className={`nav-links ${menuOpen ? "mobile open" : ""}`}>
          <Link to="/">Home</Link>
          {auth?.token ? (
            <>
              <Link to="/createproject" onClick={() => setMenuOpen(false)}>Create Project</Link>
              <Link to="/" onClick={handleLogout}>Log Out</Link>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;