//Завдання 2

function counter(num) {
    console.log(num)

    if (num > 0) {
        counter(num - 1)
    }
}

counter(9)