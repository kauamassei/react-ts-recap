import { useState, useEffect } from "react";
import axios from "axios";
interface Agents {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  fullPortrait: string;
}

const apiURL = "https://valorant-api.com/v1/agents";

const AxiosPost = () => {
  const [posts, setPost] = useState<Agents[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(apiURL);

        setPost(response.data.data);
      } catch (error) {
        setError(String(error));
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <h1>Axios</h1>
      <div>
        {error ? (
          <p>Houve um error {error}</p>
        ) : (
          posts.map((agent) => (
            <div key={agent.uuid}>
              <h2>{agent.displayName}</h2>
              <p>{agent.description}</p>

              <img
                src={agent.displayIcon}
                alt={agent.displayName}
                width={150}
                height={150}
              />
              <img
                src={agent.fullPortrait}
                alt={agent.displayName}
                width={300}
                height={300}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AxiosPost;
