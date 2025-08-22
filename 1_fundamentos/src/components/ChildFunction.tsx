
interface PropsChild {
    onChildClick: () => void,
}

const ChildFunction = ({onChildClick}: PropsChild) => {

  return (
    <button onClick={onChildClick}>Botao filho</button>
  )
}

export default ChildFunction