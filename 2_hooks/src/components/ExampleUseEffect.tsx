import {useState, useEffect} from 'react'

const ExampleUseEffect = () => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        document.title = `Você clicou ${contador} vezes!`
    })

  return (
   <>
   <p>Você clicou {contador} vezes!</p>
   <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
   </>
  )
}

export default ExampleUseEffect