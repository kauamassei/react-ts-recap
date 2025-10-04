import { useState } from "react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

const ToDoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task: Task = {
      id: Date.now(),
      text: newTask,
      done: false,
    };
    console.log("Task adicionada");
    setTasks([...tasks, task]);

    setNewTask("");
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <>
      <div>
        <h1>To-Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Digite uma tarefa"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Adicionar</button>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.text}
                <button onClick={() => removeTask(task.id)}>Remover</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
