// Завдання 6: Сортування масивів

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]

const copiedNumberList = [...numbersList]

for (let i = 0; i < copiedNumberList.length - 1; i++) {
    for (let b = 0; b < copiedNumberList.length - 1 - i; b++) {
        if (copiedNumberList[b] > copiedNumberList[b + 1]) {
            let tempValue = copiedNumberList[b]
            copiedNumberList[b] = copiedNumberList[b + 1]
            copiedNumberList[b + 1] = tempValue
        }
    }
}

console.log(numbersList)
console.log(copiedNumberList)

