import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Section from "./pages/Section";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

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
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section" element={<Section />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
