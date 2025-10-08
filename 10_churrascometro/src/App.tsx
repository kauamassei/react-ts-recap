import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calculadora from "./pages/Calculadora";
import Resultado from "./pages/Resultado";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Calculadora />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </>
  );
}

export default App;
