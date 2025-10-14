import { useEffect, useState } from "react";
import FotoAmpliada from "./components/FotoAmpliada";
import FotoList from "./components/FotoList";
import SearchBar from "./components/SearchBar";
import axios from "axios";


function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: apiKey,
      },
    });

    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <SearchBar />
        <FotoList />
        <FotoAmpliada />
      </div>
    </>
  );
}

export default App;
