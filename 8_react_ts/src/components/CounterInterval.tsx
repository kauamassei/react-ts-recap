import { useState } from "react";
import useInterval from "../hooks/useInterval";

const CounterInterval = () => {
  const [counter, setCounter] = useState(0);

  useInterval(() => {
    setCounter(counter + 1);
  }, 5000);

  return (
    <>
      <h1>{counter}</h1>
    </>
  );
};

export default CounterInterval;
