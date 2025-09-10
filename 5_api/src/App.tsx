import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import FetchPost from "./components/FetchPost";
import AxiosPost from "./components/AxiosPost";
import PostManager from "./components/PostManager";

function App() {
  return (
    <>
      <h1>GET com Axios e Fetch</h1>
      <div>
        <Link to="/fetchpost">Fetch Posts</Link>
        <Link to="/axiospost">Axios Posts</Link>
      </div>
      {/*req POST e UPDATE*/}
      <div>
        <Link to='/posts'>Gerenciar posts</Link>
      </div>
      <Routes>
        <Route path="/fetchpost" element={<FetchPost />} />
        <Route path="/axiospost" element={<AxiosPost />} />
        <Route path="/posts" element={<PostManager />} />
      </Routes>
    </>
  );
}

export default App;
