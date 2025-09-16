import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import FetchPost from "./components/FetchPost";
import AxiosPost from "./components/AxiosPost";
import PostManager from "./components/PostManager";
import PostLoader from "./components/PostLoader";
import PostViewer from "./components/PostViewer";

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
        <Link to="/posts">Gerenciar posts</Link>
      </div>
      <div>
        <Link to="/post/1">Carregar post 1</Link>
      </div>
      <div>
        <Link to="/post/999">Carregar post 999</Link>
      </div>
      <div>
        <Link to="/post/view/2">Carregar post 2</Link>
      </div>
      <Routes>
        <Route path="/fetchpost" element={<FetchPost />} />
        <Route path="/axiospost" element={<AxiosPost />} />
        <Route path="/posts" element={<PostManager />} />
        <Route path="/post/:postId" element={<PostLoader />} />
        <Route path="/post/view/:postId" element={<PostViewer />} />
      </Routes>
    </>
  );
}

export default App;
