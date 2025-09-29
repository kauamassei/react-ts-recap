import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import TextInput from "./components/TextInput";
import Cart from "./exercises/Cart";
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
    </>
  );
}

export default App;
