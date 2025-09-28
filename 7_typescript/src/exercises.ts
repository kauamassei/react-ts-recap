// Exercício 1

interface VehicleProps {
  make: string;
  model: string;
  year: number;
}

const describeVehicle = (vehicle: VehicleProps): void => {
  console.log(
    `O veículo é da marca: ${vehicle.make}, modelo: ${vehicle.model} e foi fabricado em ${vehicle.year} `
  );
};

const Vehicle: VehicleProps = {
  make: "BMW",
  model: "X5",
  year: 2018,
};

describeVehicle(Vehicle);

// Exercício 2

function firstElement<E>(arr: E[]): E {
  return arr[0];
}

const newNumbers = [1, 2, 3];

console.log(firstElement(newNumbers));

const fruits = ["Morango", "Banana", "Uva"];

console.log(firstElement(fruits));

// Exercício 3

interface Product {
  id: number;
  name: string;
  price: number;
}

const freezeProduct = (product: Product): Readonly<Product> => {
  return product;
};

const updateProductPrice = (product: Product, newPrice: number): Product => {
    return {...product, price: newPrice};
}

const bread: Product = {id: 1, name: 'Pão', price: 2.99};
const frozenBread = freezeProduct(bread);

const updateBread = updateProductPrice(bread, 3.49);
console.log(updateBread)
