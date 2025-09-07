import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Section from "./pages/Section";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import TaskDetails from "./pages/TaskDetails";

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
          >
            Contact
          </NavLink>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <div>
          <Link to="/tasks/1">Tarefa 1</Link>
          <Link to="/tasks/2">Tarefa 2</Link>
          <Link to="/tasks/3">Tarefa 3</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section" element={<Section />} />
        <Route path="/contact" element={<Contact />} />
        {/*Rotas aninhadas*/}
        <Route path="/login" element={<Login />} />
        {/*Rotas dinâmicas*/}
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        {/*Rotas aninhadas*/}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
