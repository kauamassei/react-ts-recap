import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`O contador está com o valor de: ${count}`)
  }, [count])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Incrementar
      </button>
    </>
  );
};

export default Counter;
