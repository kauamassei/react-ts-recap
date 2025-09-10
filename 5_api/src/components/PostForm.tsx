import { useState } from "react";
import axios from "axios";
import type { Posts } from "./PostManager";

const URL = "https://jsonplaceholder.typicode.com/posts";

interface AddPost {
  onSuccess: (post: Posts, operation:  "add" | "edit") => void;
}

const PostForm = ({ onSuccess }: AddPost) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost = { title, body, userId: 1 };

    try {
      const response = await axios.post(URL, newPost);

      onSuccess(response.data, "add");
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
