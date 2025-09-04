import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: string) => {
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);

  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskDone = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <>
      <div className="todocard">
        <h1>Lista de tarefas</h1>
        <TaskInput onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleTaskDone={toggleTaskDone}
        />
      </div>
    </>
  );
}

export default App;
