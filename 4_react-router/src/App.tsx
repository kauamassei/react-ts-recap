import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Section from "./pages/Section";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/section">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/contact"
          >Contact</NavLink>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section" element={<Section />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
