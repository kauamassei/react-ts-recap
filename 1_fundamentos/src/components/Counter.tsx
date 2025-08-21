import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique em mim</button>
    </>
  );
};

export default Counter;
