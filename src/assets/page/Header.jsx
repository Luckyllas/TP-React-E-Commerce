import "../css/Header.css";
import DesktopNavbar from "../components/Desktop-Navbar";
import BurgerNavbar from "../components/Burger-Navbar";
import "../css/Desktop-Navbar.css";
import "../css/Burger-Navbar.css";

const Header = () => {
  return (
    <div>
      <div className="desktop-navbar">
        <DesktopNavbar />
      </div>
      <div className="burger-navbar">
        <BurgerNavbar />
      </div>
    </div>
  );
};

export default Header;
