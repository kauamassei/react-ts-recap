import "./App.css";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import ShoppingList from "./components/ShoppingList";
import ToDoList from "./components/ToDoList";
import UserCard from "./components/UserCard";


function App() {
  const products = [
    { id: 1, name: "Ryzen 5500", price: 499.0 },
    { id: 2, name: "RX 6600", price: 1.499 },
    { id: 3, name: "1000 VBucks", price: 30.0 },
  ];
  return (
    <>
      <UserCard name="Kauã" age={18} isAdmin={false} />
      <ShoppingList products={products} />
      <Counter />
      <LoginForm />
      <ToDoList />
    </>
  );
}

export default App;
