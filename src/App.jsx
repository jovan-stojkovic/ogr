import "./Styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Pocetna from "./Pages/Pocetna";
import ONama from "./Pages/ONama";
import Kontakt from "./Pages/Kontakt";
import Proizvodi from "./Pages/Proizvodi";

const App = () => {
  return (
    <Router>
      <div className="navbar-background"></div>
      <Navbar />
      <Routes>
        <Route element={<Pocetna />} path="/" />
        <Route element={<Proizvodi />} path="/proizvodi" />
        <Route element={<ONama />} path="/onama" />
        <Route element={<Kontakt />} path="/kontakt" />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
