interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => {
  return (
    <>
      <div>{name ? <p>Olá {name}</p> : <p>Olá, usuário anônimo</p>}</div>
    </>
  );
};

export default Greeting;
