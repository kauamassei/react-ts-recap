
import './App.css'
import ComponenteFilho from './components/ChildComponent'
import ValorDoContexto from './components/ContextValue'
import ExampleUseEffect from './components/ExampleUseEffect'
import Timer from './components/Timer'
import { MeuContextoProvider } from './contexts/MyContext'

function App() {

  return (
    <>
      <ExampleUseEffect />
      <Timer />
      <MeuContextoProvider>
        <ValorDoContexto />
        <ComponenteFilho />
      </MeuContextoProvider>
    </>
  )
}

export default App
