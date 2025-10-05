import "./App.css";
import Contador from "./components/Contador";
import Counter from "./components/Counter";
// import CounterInterval from "./components/CounterInterval";
import Greeting from "./components/Greeting";
import TextInput from "./components/TextInput";
import Theme from "./components/Theme";
import { TemaProvider } from "./contexts/TemaContext";
import Cart from "./exercises/Cart";
import ItemStorage from "./exercises/ItemStorage";
import LoginForm from "./exercises/LoginForm";

function App() {
  return (
    <>
      <h1>React com TS</h1>
      <Greeting name="Kauã" />
      <Counter />
      <TextInput />
      <Cart />
      <LoginForm />
      {/* <CounterInterval />  */}
      <ItemStorage />
      <Contador />
      <TemaProvider>
        <Theme />
      </TemaProvider>
    </>
  );
}

export default App;
