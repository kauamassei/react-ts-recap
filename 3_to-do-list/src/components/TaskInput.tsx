import React from "react";

const TaskInput = () => {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Digite sua tarefa"
        />
        <button type="submit">Adicionar tarefa</button>
      </div>
    </>
  );
};

export default TaskInput;
