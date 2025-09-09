import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const apiURL = "https://jsonplaceholder.typicode.com/posts"

const FetchPost = () => {
  const [posts, setPost] = useState<Post[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(apiURL);

        const data = await response.json();

        setPost(data);
      } catch (error) {
        setError(String(error));
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <h1>Fetch API</h1>
      <div>
        {error ? (
          <p>Houve um error {error}</p>
        ) : (
          posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default FetchPost;
