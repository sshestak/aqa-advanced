//Завдання 3: Генерація таблиці множення
// через for
const number = 9;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

console.log(''); //пустий рядок для розділення виведених результатів 

//через while 
let i = 1;

while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}
