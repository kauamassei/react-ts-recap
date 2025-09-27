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

console.log(user);

// tuplas

let rgb: [number, number, number] = [255, 0, 0];

console.log(rgb);
