// Завдання 2: Копіювання з мутацією

const numbers = [1, 2, 3, 4, 5]

const resultValue = numbers.map((number, index) => {
  return number * index
})

console.log(resultValue)