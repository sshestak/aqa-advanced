const car1 = {
brand: "Toyota",
model: "RAV4",
year: 2019,
}

const car2 = {
brand: "Toyota",
model: "Camry",
owner: "Svitlana",
}

const car3 = {
...car1,
...car2
} 

console.log(car3)