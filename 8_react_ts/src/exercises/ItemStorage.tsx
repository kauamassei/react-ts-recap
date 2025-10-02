import { useLocalStorage } from "../hooks/useLocalStorage";

const ItemStorage = () => {
  const [name, setName] = useLocalStorage("nome", "");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>O nome armazenado é: {name}</p>
    </>
  );
};

export default ItemStorage;
