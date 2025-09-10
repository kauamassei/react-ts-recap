import { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      </form>
      </div>
      <div>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Digite o conteúdo..."></textarea>
      </div>
      <button type="submit">Enviar</button>
    </>
  );
};

export default PostForm;
