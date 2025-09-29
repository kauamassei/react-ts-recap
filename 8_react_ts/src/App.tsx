import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import TextInput from "./components/TextInput";

function App() {
  return (
    <>
      <h1>React com TS</h1>
      <Greeting name="Kauã" />
      <Counter />
      <TextInput />
    </>
  );
}

export default App;
