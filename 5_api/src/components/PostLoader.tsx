import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Post {
  id: number;
  body: string;
}
const PostLoader = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError("");
      setSuccessMessage("");

      try {
        if (postId > 500) {
          setPost(null);
          throw new Error("Não existe!");
        }

        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );

        setPost(response.data);
        setSuccessMessage("Post carregado com sucesso");
      } catch (error) {
        setError("Falha ao carregar post: " + error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  return (
    <>
      <h1>Post: {postId}</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {post && (
        <div>
          <h2>{post.id}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
};

export default PostLoader;
