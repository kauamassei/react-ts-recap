
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import Father from './components/Father'
import PropsComponent from './components/Props'
import UseInfoForm from './components/UseInfoForm'
import Welcome from './components/Welcome'

function App() {


  return (
    <>
      <Welcome />
      <Father />
      <PropsComponent name='Kauã' idade={18} />
      <Counter />
      <UseInfoForm />
      <Button />
    </>
  )
}

export default App
