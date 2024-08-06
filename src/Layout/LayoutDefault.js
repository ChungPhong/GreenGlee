import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import uc2 from "../components/img/uc2.png";
import logo3 from "../../src/components/img/logo3.png";
import "./LayoutDefault.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function LayoutDefault() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHiddenOnce, setIsHiddenOnce] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Cuộn xuống
        setShowNavbar(false);
        setIsHiddenOnce(true);
      } else {
        // Cuộn lên
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Dọn dẹp khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo(0, 0); // Scroll to top on the homepage
    }
  };
  const newActive = (e) => {
    return e.isActive ? "menu__link menu__link--active" : "menu__link";
  };
  return (
    <>
      <header className={`header ${showNavbar ? "visible" : "hidden"}`}>
        <div className="header-main content">
          <a onClick={handleLogoClick}>
            <img alt="logo" src={logo3} />
          </a>

          <ul className="header-list">
            <NavLink className={newActive} to="/">
              Trang trủ
            </NavLink>
            <NavLink className={newActive} to="/about">
              Về chúng tôi
            </NavLink>
            <NavLink className={newActive} to="/Sustainability">
              Phát triển bền vững
            </NavLink>
            <NavLink className={newActive} to="/products">
              Sản phẩm
            </NavLink>
          </ul>
          <div className="header-social">
            <Link>
              <FaSearch />
            </Link>
            <Link title="Khách vip">
              <FaUser />
            </Link>
            <Link>
              <FaShoppingCart />
            </Link>
          </div>
          <div className="header-flag">
            <img
              src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fcdn.eraweb.dev%2Fflags%2Fvi.png&w=1920&q=75"
              alt="flag"
            />
            <img src={uc2} alt="flag" />
          </div>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer__title ">
          Copyright © 2024 Green Glee. All Rights Reserved. Built with Eraweb.
        </div>
      </footer>
    </>
  );
}
export default LayoutDefault;
