// funcao generica que retorna array com qualquer tipo
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
let stringArray = getArray<string>(["Hello", "World"]);

console.log(numberArray);
console.log(stringArray);

//utilizando restricoes em tipos genericos
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

const result = merge({ name: "John" }, { age: 30 });
console.log(result);

//usuarios de tipo
type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

//function para atualizar tarefas
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

// tarefa somente leitura
const todo: Readonly<Todo> = {
  title: "Aprender Typescript",
  description: "O que são Generics?",
  completed: false,
};

// atualizar tarefa 'Todo' usando a funcao 'updateTodo'
const updatedTodo = updateTodo(todo, {
  description: "Ecplorando tipos avancados",
  completed: true,
});

console.log(updatedTodo);
