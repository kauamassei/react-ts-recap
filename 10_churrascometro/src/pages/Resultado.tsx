import ResultadoChurrasco from "../components/ResultadoChurrasco";
import bgImage from "../assets/bg-2.jpg";
const Resultado = () => {
  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1>Resultado</h1>Resultado
      <ResultadoChurrasco />
    </div>
  );
};

export default Resultado;
