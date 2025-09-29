import { useState } from "react";

//define o tipo
type Item = {
  id: number;
  name: string;
};

const Cart = () => {
  const [itens, setItens] = useState<Item[]>([]);
  //cria a lista de itens

  const [newItem, setNewItem] = useState("");
  //controla estado dos itens

  const addProduct = () => { //funcao que vira o botao de add
    const item: Item = { //criando item
      id: itens.length + 1,
      name: newItem,
    };

    setItens([...itens, item]); // trazos outros itens com spread operator e add o novo

    setNewItem(""); // limpa o input após envio
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setNewItem(e.target.value); // captura o valor do input
  };

  return (
    <div>
      <input type="text" value={newItem} onChange={handleChange} />
      <button onClick={addProduct}>Adicionar</button>
      <div>
        {itens.map((item) => (
          <p key={item.id}>
            {item.id} - {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Cart;
