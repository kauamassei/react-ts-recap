interface GreetingProps {
    name: string
}

const Greeting = ({name}: GreetingProps) => {
  return (
    <>
    <p>Olá {name}!</p>
    </>
  )
}

export default Greeting