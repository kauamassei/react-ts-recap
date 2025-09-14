import { useEffect, useState } from "react";
import axios from "axios";
import type { Posts } from "./PostManager";

const URL = "https://jsonplaceholder.typicode.com/posts";

interface AddPost {
  post?: Posts | null;
  onSuccess: (post: Posts, operation: "add" | "edit" | "update") => void;
}

const PostForm = ({ onSuccess, post }: AddPost) => {
  const [title, setTitle] = useState(post?.title || "");
  const [body, setBody] = useState(post?.body || "");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost = { title, body, userId: 1 };

    try {
      if (post) {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${post.id}`,
          newPost
        );

        onSuccess(response.data, "update");
      } else {
        const response = await axios.post(URL, newPost);

        onSuccess(response.data, "add");
      }

      setTitle("");
      setBody("");
    } catch (error) {
      console.log("Erro ao enviar postagem: ", error);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Digite o conteúdo..."
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default PostForm;
