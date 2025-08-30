import "./App.css";
import ComponenteFilho from "./components/ChildComponent";
import ValorDoContexto from "./components/ContextValue";
import DisplayWindowsSize from "./components/DisplayWindowsSize";
import ExampleUseEffect from "./components/ExampleUseEffect";
import ReducerComponent from "./components/ReducerComponent";
import Timer from "./components/Timer";
import { MeuContextoProvider } from "./contexts/MyContext";

function App() {
  return (
    <>
      <ExampleUseEffect />
      <Timer />
      <MeuContextoProvider>
        <ValorDoContexto />
        <ComponenteFilho />
      </MeuContextoProvider>
      <ReducerComponent />
      <DisplayWindowsSize />
    </>
  );
}

export default App;
