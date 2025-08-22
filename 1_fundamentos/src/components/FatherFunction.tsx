import ChildFunction from "./ChildFunction"

const FatherFunction = () => {
    const handleCHildClick = () => {
        console.log('você clicou aqui denovo porra')
    }
  return (
    <ChildFunction onChildClick={handleCHildClick} />
  )
}

export default FatherFunction