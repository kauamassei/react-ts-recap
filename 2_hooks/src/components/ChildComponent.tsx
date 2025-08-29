import { useContext } from "react";
import { MeuContexto } from "../contexts/MeuContexto";

const ComponenteFilho = () => {
  const contexto = useContext(MeuContexto);

  if (!contexto) {
    return <div>Contexto não disponível</div>;
  }

  const { mensagem, setMensagem } = contexto;

  return (
    <>
      <p>{mensagem}</p>
      <button onClick={() => setMensagem("Nova mensagem!")}>
        Alterar mensagem
      </button>
    </>
  );
};

export default ComponenteFilho;
