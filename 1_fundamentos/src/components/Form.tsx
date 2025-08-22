import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("formulário enviado ", value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Preencha o campo"
        />
        <button>Enviar form</button>
      </form>
    </>
  );
};

export default Form;
