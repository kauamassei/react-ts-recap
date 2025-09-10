import React, { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "./PostForm";

interface Posts {
  id: number;
  title: string;
  body: string;
}

const URL = "https://jsonplaceholder.typicode.com/posts";

const PostManager = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(URL);
      setPosts(response.data.slice(0, 5)); // Limitando a 5 posts
    } catch (error) {
      console.error("Erro ao buscar postagens:", error);
    }
  };

  return (
    <>
    <h1>Gerenciar posts</h1>
    <PostForm />
      <h2>Postagens</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={}>Editar</button>
        </div>
      ))}
    </>
  );
};

export default PostManager;
