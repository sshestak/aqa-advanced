const person = {
firstName: "Petro",
lastName: "Shevchenko",
age: 37
}

// Додаємо нову властивість email
person.email = "petroshvchnk37@example.com"

// Видаляємо властивість age
delete person.age

console.log(person)