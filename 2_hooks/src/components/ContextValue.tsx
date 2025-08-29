import { useContext } from "react";
import { MeuContexto } from "../contexts/MeuContexto";

const ValorDoContexto = () => {
  const contexto = useContext(MeuContexto);

  if (!contexto) {
    return <div>Contexto não disponível</div>;
  }

  const { mensagem } = contexto;
  return <div>O valor do contexto é {mensagem}</div>;
};

export default ValorDoContexto;
