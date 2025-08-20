
interface Props{
    name: string;
    idade: number;
}

const PropsComponent = ({name, idade}: Props) => {
  return (
    <>
    <p>Sua idade é: {idade} e seu nome é {name}</p>
    </>
  )
}

export default PropsComponent