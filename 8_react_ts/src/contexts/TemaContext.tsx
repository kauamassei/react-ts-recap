import { createContext, useState, type ReactNode } from "react";

type Tema = "claro" | "escuro";

interface TemaContexto {
  tema: Tema;
  alternarTema: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TemaContext = createContext<TemaContexto | null>(null);

interface TemaProviderProps {
  // sempre tipar o children separado dos outros
  children: ReactNode;
}

export const TemaProvider = ({ children }: TemaProviderProps) => {
  const [tema, setTema] = useState<Tema>("claro");

  const alternarTema = () => {
    setTema((temaAtual) => (temaAtual === "claro" ? "escuro" : "claro"));
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
};
