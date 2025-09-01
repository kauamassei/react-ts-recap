import "./App.css";
import ComponenteFilho from "./components/ChildComponent";
import Container from "./components/Container";
import ValorDoContexto from "./components/ContextValue";
import DisplayWindowsSize from "./components/DisplayWindowsSize";
// import ExampleUseEffect from "./components/ExampleUseEffect";
import ReducerComponent from "./components/ReducerComponent";
import Timer from "./components/Timer";
import UserProfile from "./components/UserProfile";
import { MeuContextoProvider } from "./contexts/MyContext";
import UseEffectUser from "./exercises/UseEffectUser";
import UserStaus from "./exercises/UserStaus";

function App() {
  return (
    <>
      {/* <ExampleUseEffect /> */}
      <Timer />
      <MeuContextoProvider>
        <ValorDoContexto />
        <ComponenteFilho />
      </MeuContextoProvider>
      <ReducerComponent />
      <DisplayWindowsSize />
      <Container>
        <h1>Este é o título da secao</h1>
        <p>Este é o meu subtítulo</p>
      </Container>
      <UserProfile userId={1} />
      <UseEffectUser name="Kauã" jobTitle="Desenvolvedor"/>
      <UserStaus />
    </>
  );
}

export default App;
