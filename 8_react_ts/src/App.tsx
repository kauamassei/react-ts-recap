import "./App.css";
import Counter from "./components/Counter";
import CounterInterval from "./components/CounterInterval";
import Greeting from "./components/Greeting";
import TextInput from "./components/TextInput";
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
      <CounterInterval />
      <ItemStorage />
    </>
  );
}

export default App;
