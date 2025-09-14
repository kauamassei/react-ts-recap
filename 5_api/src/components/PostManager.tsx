import { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "./PostForm";

export interface Posts {
  id: number;
  title: string;
  body: string;
}

const URL = "https://jsonplaceholder.typicode.com/posts";

const PostManager = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [selectedPost, setSelectedPost] = useState<Posts | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSuccess = (post: Posts, operation: "add" | "edit" | 'update') => {
    if (operation === "add") {
      setPosts((currentPosts) => [post, ...currentPosts]);
    } else if (operation === 'update') {
      setPosts((currentPosts) =>
        currentPosts.map((p) => (p.id === post.id ? post : p))
      );
      setIsEditing(false);
      
    }
  };

  const handleEdit = (post: Posts) => {
    setSelectedPost(post);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setSelectedPost(null);
    setIsEditing(false);
  };

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
      <PostForm post={isEditing ? selectedPost : null} onSuccess={handleSuccess} />
      {isEditing && <button onClick={handleCancelEdit}>Cancelar edicao</button>}
      <h2>Postagens</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => handleEdit(post)}>Editar</button>
        </div>
      ))}
    </>
  );
};

export default PostManager;
