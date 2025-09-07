import { useParams } from "react-router-dom"

const TaskDetails = () => {
    const {taskId} = useParams()
  return (
    <>
    <h2>Detalhes da tarefa</h2>
    <p>Visualizando a tarefa: {taskId}</p>
    </>
  )
}

export default TaskDetails