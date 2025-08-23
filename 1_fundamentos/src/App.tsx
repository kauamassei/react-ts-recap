
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import Father from './components/Father'
import FatherFunction from './components/FatherFunction'
import Form from './components/Form'
import PropsComponent from './components/Props'
import RenderConditional from './components/RenderConditional'
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
      <FatherFunction />
      <Form />
      <RenderConditional user='Kaua' />
    </>
  )
}

export default App
