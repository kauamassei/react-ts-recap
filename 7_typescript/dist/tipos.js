//tipos
let isActive = true;
console.log(isActive);
isActive = false;
console.log(isActive);
let total = 10;
let myName = "Kauã";
console.log(typeof isActive, typeof total, typeof myName);
//inferencia de tipos
let isComplete = false;
let amount = 200;
let username = "John";
console.log(typeof isComplete, typeof amount, typeof username);
let money;
console.log(money);
money = 200;
console.log(money);
//arrays e objetos
let numbers = [1, 2, 3];
console.log(typeof numbers);
let user = {
    name: "Kauã",
    age: 18,
};
console.log(typeof user);
console.log(user);
// tuplas
let rgb = [255, 0, 0];
console.log(typeof rgb);
console.log(rgb);
// funcoes
const nome = (name) => {
    return `Olá ${name}!`;
};
console.log(nome("Kauã"));
// enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
    Direction[Direction["Diagonal"] = 4] = "Diagonal";
})(Direction || (Direction = {}));
const getDirectionMessage = (direction) => {
    switch (direction) {
        case Direction.Up:
            return "Movendo para cima";
        case Direction.Down:
            return "Movendo para baixo";
        case Direction.Left:
            return "Movendo para esquerda";
        case Direction.Right:
            return "Movendo para direita";
        default:
            return "Ficou parado";
    }
};
console.log(getDirectionMessage(Direction.Up));
console.log(getDirectionMessage(Direction.Down));
console.log(getDirectionMessage(Direction.Left));
console.log(getDirectionMessage(Direction.Right));
console.log(getDirectionMessage(Direction.Diagonal));
