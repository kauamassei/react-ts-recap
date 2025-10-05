import { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";

const Contador = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrementar
      </button>
    </>
  );
};

export default Contador;
