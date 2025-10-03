import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1>Exercício 3</h1>
      <p>{count}</p>
      <button onClick={handleIncrease}>Incrementar</button>
      <button onClick={handleDecrease}>Decrementar</button>
    </>
  );
};

export default Counter;
