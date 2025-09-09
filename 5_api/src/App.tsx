import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import FetchPost from "./components/FetchPost";
import AxiosPost from "./components/AxiosPost";

function App() {
  return (
    <>
      <h1>GET com Axios e Fetch</h1>
      <div>
        <Link to="/fetchpost">Fetch Posts</Link>
        <Link to="/axiospost">Axios Posts</Link>
      </div>
      <Routes>
        <Route path="/fetchpost" element={<FetchPost />} />
        <Route path="/axiospost" element={<AxiosPost />} />
      </Routes>
    </>
  );
}

export default App;
