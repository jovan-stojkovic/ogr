import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <img src="/fence.svg" alt="logo" />
        </Link>
        <div className="rest">
          <div className="navlinks">
            <NavLink className="navlink" to="/">
              Početna
            </NavLink>
            <NavLink className="navlink" to="/proizvodi">
              Proizvodi
            </NavLink>
            <NavLink className="navlink" to="/onama">
              O Nama
            </NavLink>
            <NavLink className="navlink" to="/kontakt">
              Kontakt
            </NavLink>
          </div>
          <div className="horizontal-separator"></div>

          <div className="nav-links">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="nav-link"
            ></Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              className="nav-link"
            ></Link>
            <Link
              to="https://www.youtube.com/"
              target="_blank"
              className="nav-link"
            ></Link>
            <div className="horizontal-separator"></div>
            <button className="nav-button theme"></button>
            <button className="nav-button language"></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
