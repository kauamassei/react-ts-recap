import { useMemo } from "react";

interface Calculator {
  num: number;
}

interface UseMemoFibonnaciProps {
  functionNumber: number;
}

const fibonnaci = ({ num }: Calculator): number => {
  if (num <= 1) return num;
  return fibonnaci({ num: num - 1 }) + fibonnaci({ num: num - 2 });
};

const UseMemoFibonnaci = ({ functionNumber }: UseMemoFibonnaciProps) => {
  const fibResult = useMemo(() => fibonnaci({ num: functionNumber }), [functionNumber]);

  return (
    <div>
      <p>
        Fibonacci de {functionNumber} é {fibResult}
      </p>
    </div>
  );
};

export default UseMemoFibonnaci;


