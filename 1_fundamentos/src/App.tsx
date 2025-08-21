
import './App.css'
import Counter from './components/Counter'
import Father from './components/Father'
import PropsComponent from './components/Props'
import Welcome from './components/Welcome'

function App() {


  return (
    <>
      <Welcome />
      <Father />
      <PropsComponent name='Kauã' idade={18} />
      <Counter />
    </>
  )
}

export default App
