// Exercício 1
const describeVehicle = (vehicle) => {
    console.log(`O veículo é da marca: ${vehicle.make}, modelo: ${vehicle.model} e foi fabricado em ${vehicle.year} `);
};
const Vehicle = {
    make: "BMW",
    model: "X5",
    year: 2018,
};
describeVehicle(Vehicle);
// Exercício 2
function firstElement(arr) {
    return arr[0];
}
const newNumbers = [1, 2, 3];
console.log(firstElement(newNumbers));
const fruits = ["Morango", "Banana", "Uva"];
console.log(firstElement(fruits));
const freezeProduct = (product) => {
    return product;
};
const updateProductPrice = (product, newPrice) => {
    return Object.assign(Object.assign({}, product), { price: newPrice });
};
const bread = { id: 1, name: 'Pão', price: 2.99 };
const frozenBread = freezeProduct(bread);
const updateBread = updateProductPrice(bread, 3.49);
console.log(updateBread);
