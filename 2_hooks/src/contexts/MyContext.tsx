import { useState } from "react";
import type { ReactNode } from "react";
import { MeuContexto } from "./MeuContexto";
import type { ContextoType } from "./MeuContexto";

export const MeuContextoProvider = ({ children }: { children: ReactNode }) => {
  const [mensagem, setMensagem] = useState("Mensagem inicial");

  const valorDoContexto: ContextoType = {
    mensagem,
    setMensagem,
  };

  return (
    <MeuContexto.Provider value={valorDoContexto}>
      {children}
    </MeuContexto.Provider>
  );
};
