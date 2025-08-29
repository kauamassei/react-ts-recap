
import './App.css'
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
      </MeuContextoProvider>
    </>
  )
}

export default App
