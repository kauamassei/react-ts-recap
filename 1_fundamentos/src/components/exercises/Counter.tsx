import { useState } from "react";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Clique para aumentar</button>
      <div>Você clicou {count} vezes!</div>
    </>
  );
};

export default ButtonCounter;
