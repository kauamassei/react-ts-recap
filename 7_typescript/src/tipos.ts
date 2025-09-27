//tipos

let isActive: boolean = true;
console.log(isActive);

isActive = false;
console.log(isActive);

let total: number = 10;

let myName: string = "Kauã";

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

let numbers: number[] = [1, 2, 3];

console.log(typeof numbers);

let user: { name: string; age: number } = {
  name: "Kauã",
  age: 18,
};

console.log(typeof user);
console.log(user);

// tuplas

let rgb: [number, number, number] = [255, 0, 0];

console.log(typeof rgb);
console.log(rgb);

// funcoes
const nome = (name: string) => {
  return `Olá ${name}!`;
};

console.log(nome("Kauã"));

// enum

enum Direction {
  Up,
  Down,
  Left,
  Right,
  Diagonal,
}

const getDirectionMessage = (direction: Direction) => {
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
