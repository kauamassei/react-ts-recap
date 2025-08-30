import type { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="container">
        <h2>Testando</h2>
        <div>{children}</div>
        <p>Terminou</p>
      </div>
    </>
  );
};

export default Container;
