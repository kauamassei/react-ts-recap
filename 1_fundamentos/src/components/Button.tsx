
const Button = () => {
    const handleClick = () => {
        console.log('Clicou aqui')
    }
  return (
    <>
    <button onClick={handleClick}>Clique</button>
    </>
  )
}

export default Button
