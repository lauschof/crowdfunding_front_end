import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="layout">
      <NavBar />
      <main>
        <Outlet /> {/* Render the current route's content */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;