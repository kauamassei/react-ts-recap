import React, { useState } from "react";

interface AddTask {
  onAddTask: (task: string) => void;
}

const TaskInput = ({ onAddTask }: AddTask) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim()) {
      onAddTask(input);
      setInput("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit">Adicionar tarefa</button>
      </form>
    </>
  );
};

export default TaskInput;
