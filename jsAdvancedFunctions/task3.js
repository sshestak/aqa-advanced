//Завдання 3

function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Один з аргументів не є числом")
    }

    if (denominator === 0) {
        throw new Error("Ділитии на 0 не можна")
    }

    return numerator / denominator
}


try {
    console.log(divide(21, 2))
} catch (error) {
    console.log(error.message)
} 

// denominator дорівнює 0
try {
    console.log(divide(10, 0))
} catch (error) {
    console.log(error.message)
} 

// один з аргументів не є числом
try {
    console.log(divide("15", 2))
} catch (error) {
    console.log(error.message)
} 