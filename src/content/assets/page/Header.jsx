import "../css/Header.css";
import "../css/Desktop-Navbar.css";
import "../css/Burger-Navbar.css";
import BurgerNavbar from "../components/Burger-Navbar";
import DesktopNavbar from "../components/Desktop-Navbar";

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
