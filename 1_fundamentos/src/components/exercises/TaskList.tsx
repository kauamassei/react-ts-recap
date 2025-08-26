interface TaskProps {
  id: number;
  text: string;
}

interface TaskItemList {
  item: TaskProps[];
}

const TaskList = ({ item }: TaskItemList) => {
  return (
    <div>
      {item ? (
        <div>
          {item.map((items, id) => (
            <li key={id}>{items.id}* - {items.text}</li>
          ))}
        </div>
      ) : (
        <p>Você não tem nenhuma tarefa</p>
      )}
    </div>
  );
};

export default TaskList;
