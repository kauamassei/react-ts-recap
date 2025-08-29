import { createContext } from "react";

export interface ContextoType {
  mensagem: string;
  setMensagem: React.Dispatch<React.SetStateAction<string>>;
}

export const MeuContexto = createContext<ContextoType | null>(null);
