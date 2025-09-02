import Task from "./Task";

interface TaskType {
  id: number;
  text: string;
  done: boolean;
}

interface TaskProps {
  tasks: TaskType[];
  onDeleteTask: (taskId: number) => void;
  onToggleTaskDone: (taskId: number) => void;
}


const TaskList = ({ tasks, onDeleteTask, onToggleTaskDone }: TaskProps) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={() => onDeleteTask(task.id)}
            onToggleTaskDone={() => onToggleTaskDone(task.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
