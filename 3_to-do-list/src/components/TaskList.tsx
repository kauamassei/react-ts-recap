import Task from "./Task";

interface TaskType {
  id: number;
  text: string;
  done: boolean;
}

interface TaskProps {
  tasks: TaskType[];
}
const TaskList = ({ tasks }: TaskProps) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
