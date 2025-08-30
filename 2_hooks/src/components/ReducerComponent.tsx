import { useReducer } from "react";

interface Estado {
    contador: number,
}

type Acao =
    {tipo: 'Incrementar'} | {tipo: 'Decrementar'} | {tipo: 'Resetar'};


const estadoInicial = { contador: 0 };

const reducer = (estado: Estado, acao: Acao): Estado => {
  switch (acao.tipo) {
    case "Incrementar":
      return { contador: estado.contador + 1 };
    case "Decrementar":
      return { contador: estado.contador - 1 };
    case "Resetar":
      return { contador: 0 };
    default:
      throw new Error("Acao nao suportada");
  }
};

const ReducerComponent = () => {
  const [estado, dispatch] = useReducer(reducer, estadoInicial);
  return (
    <>
      <div>
        <p>Contagem: {estado.contador}</p>
        <button onClick={() => dispatch({ tipo: "Incrementar" })}>
          Incrementar
        </button>
        <button onClick={() => dispatch({ tipo: "Decrementar" })}>
          Decrementar
        </button>
        <button onClick={() => dispatch({ tipo: "Resetar" })}>Resetar</button>
      </div>
    </>
  );
};

export default ReducerComponent;
