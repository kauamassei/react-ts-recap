
import './App.css'
import Father from './components/Father'
import PropsComponent from './components/Props'
import Welcome from './components/Welcome'

function App() {


  return (
    <>
      <Welcome />
      <Father />
      <PropsComponent name='Kauã' idade={18} />
    </>
  )
}

export default App
