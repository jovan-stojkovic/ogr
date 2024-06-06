import "./Styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Pocetna from "./Pages/Pocetna";
import ONama from "./Pages/ONama";
import Kontakt from "./Pages/Kontakt";
import Proizvodi from "./Pages/Proizvodi";
import LanguageContext from "./Helpers/LanguageContext";
import ThemeContext from "./Helpers/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [langCont, setLangCont] = useState("");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLanguageClick = () => {
    setLangCont(langCont === "" ? "show" : "");
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <main>
          <div className="navbar-background"></div>
          <Navbar
            handleLanguageClick={handleLanguageClick}
            langCont={langCont}
          />
          <Routes>
            <Route element={<Pocetna />} path="/" />
            <Route element={<Proizvodi />} path="/proizvodi" />
            <Route element={<ONama />} path="/onama" />
            <Route element={<Kontakt />} path="/kontakt" />
          </Routes>
          <Footer />
        </main>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
