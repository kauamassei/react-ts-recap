
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import ButtonCounter from './components/exercises/Counter'
import Greeting from './components/exercises/Greeting'
import TaskList from './components/exercises/TaskList'
import Father from './components/Father'
import FatherFunction from './components/FatherFunction'
import Form from './components/Form'
import LoginButton from './components/LoginButton'
import NumberList from './components/NumberList'
import PropsComponent from './components/Props'
import RenderConditional from './components/RenderConditional'
import UseInfoForm from './components/UseInfoForm'
import Warning from './components/Warning'
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
      <LoginButton  isLoggedIn={true}/>
      <LoginButton isLoggedIn={false} />
      <Warning warning='aviso' />
      <NumberList numbers={[1, 2, 3, 4, 5]} />
      <Greeting name='Kauã' />
      <ButtonCounter />
      <TaskList item={[{id: 1, text: 'terminar o curso'}]} />
    </>
  )
}

export default App
