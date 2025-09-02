interface TaskType {
  id: number;
  text: string;
  done: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (taskId: number) => void;
  onToggleTaskDone: (taskId: number) => void;
}

const Task = ({ task, onDeleteTask, onToggleTaskDone }: TaskProps) => {
  return (
    <>
      <li>
        <span
          onClick={() => onToggleTaskDone(task.id)}
          style={{ textDecoration: task.done ? "line-through" : "none" }}
        >
          {task.text}
        </span>
        <button onClick={() => onDeleteTask(task.id)}>Remover</button>
      </li>
    </>
  );
};

export default Task;
