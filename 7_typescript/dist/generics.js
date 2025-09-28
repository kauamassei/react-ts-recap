// funcao generica que retorna array com qualquer tipo
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(["Hello", "World"]);
console.log(numberArray);
console.log(stringArray);
//utilizando restricoes em tipos genericos
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const result = merge({ name: "John" }, { age: 30 });
console.log(result);
//function para atualizar tarefas
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
// tarefa somente leitura
const todo = {
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
