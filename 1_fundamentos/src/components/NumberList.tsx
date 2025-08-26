interface NumberListProps {
    numbers: number[] ,
}

const NumberList = ({numbers}: NumberListProps) => {
  return (
    <>
    <div>{numbers.map((number, index) => (
        <li key={index}>{number}</li>
    ))}</div>
    </>
  )
}

export default NumberList