import { Link, NavLink } from "react-router-dom";
import ThemeContext from "../Helpers/ThemeContext";
import { useContext, useState } from "react";

const Navbar = ({ handleLanguageClick, langCont }) => {
  const srpski = { flag: "flags/srb.png", alt: "srb", name: "Srpski" };
  const english = { flag: "flags/eng.png", alt: "eng", name: "English" };
  const ruski = { flag: "flags/rus.png", alt: "rus", name: "Ruski" };

  const [language, setLanguage] = useState("srb");
  const [activeLanguage, setActiveLanguage] = useState(srpski);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={theme}>
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
            <button className={theme} onClick={toggleTheme}></button>
            <div
              className={`language ${langCont}`}
              onClick={handleLanguageClick}
            >
              <div className="language-cont">
                <div className="selected">
                  <img src={activeLanguage.flag} alt={activeLanguage.alt} />
                  <p>{activeLanguage.name}</p>
                </div>

                <div className="option" onClick={() => setActiveLanguage(srpski)}>
                  <img src="flags/srb.png" alt="srb" />
                  <p>Srpski</p>
                </div>
                <div className="option" onClick={() => setActiveLanguage(english)}>
                  <img src="flags/eng.png" alt="eng" />
                  <p>English</p>
                </div>
                <div className="option" onClick={() => setActiveLanguage(ruski)}>
                  <img src="flags/rus.png" alt="rus" />
                  <p>Russian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
