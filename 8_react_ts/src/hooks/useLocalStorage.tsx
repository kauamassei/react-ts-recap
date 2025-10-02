import { useEffect, useState } from "react";

// Hook customizado que sincroniza estado do React com localStorage
export function useLocalStorage<T>(
  key: string, // chave usada no localStorage
  initialValue: T // valor inicial caso não haja nada no localStorage
): [T, (value: T) => void] {
  // retorna [valor, função para atualizar]

  // Estado interno que começa lendo do localStorage (lazy initializer)
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key); // tenta buscar o valor salvo
      return item ? JSON.parse(item) : initialValue; // se existir, faz parse, senão usa o valor inicial
    } catch (error) {
      console.log(error); // loga erro se der problema no parse ou acesso
      return initialValue; // fallback seguro
    }
  });

  // Função para atualizar tanto o estado do React quanto o localStorage
  const setValue = (value: T) => {
    try {
      setStoredValue(value); // atualiza o estado
      localStorage.setItem(key, JSON.stringify(value)); // salva no localStorage
    } catch (error) {
      console.log(error); // loga erro se não conseguir salvar
    }
  };

  // Efeito que roda apenas na montagem do componente
  useEffect(() => {
    setValue(storedValue); // garante que o estado inicial também vá para o localStorage
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // [] -> executa só uma vez, no mount

  // Retorna o valor atual e a função de atualização
  return [storedValue, setValue];
}
