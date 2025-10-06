import axios from "axios";
import React, { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const apiURL = "https://jsonplaceholder.typicode.com/posts";

const PostFetch = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(apiURL);

        setPosts(response.data.slice(0, 5));

        if (response.status === 200) {
          console.log("A requisicao foi um sucesso!");
        } else {
          console.log("Falha na requisicao.");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  return (
    <>
      <h2>Lista de posts</h2>
      <div>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default PostFetch;
