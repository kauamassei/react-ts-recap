interface TaskType {
  id: number;
  text: string;
  done: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (taskId: number) => void;
}
const Task = ({ task, onDeleteTask }: TaskProps) => {
  return (
    <>
      <li>
        <span>{task.text}</span>
        <button onClick={() => onDeleteTask(task.id)}>Remover</button>
      </li>
    </>
  );
};

export default Task;
