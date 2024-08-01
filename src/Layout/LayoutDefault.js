import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo1 from "../../src/components/img/logo1.png";
import "./LayoutDefault.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function LayoutDefault() {
  const location = useLocation();
  const navigate = useNavigate();
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
    return e.isActive ? "menu__link--active" : "menu__link";
  };
  return (
    <>
      <header className="header">
        <div className="header-main">
          <a onClick={handleLogoClick}>
            <img alt="logo" src={logo1} />
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
            <Link>
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
            <img
              src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fcdn.eraweb.dev%2Fflags%2Fen.png&w=1920&q=75"
              alt="flag"
            />
          </div>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        Copyright © 2024 Green Glee. All Rights Reserved. Built with Eraweb.
      </footer>
    </>
  );
}
export default LayoutDefault;
