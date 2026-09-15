async function getTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const todo = await response.json()
    return todo
}

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const user = await response.json()
    return user
}

// Promise.all and Promise.race
const allResults = Promise.all([
    getTodos(),
    getUsers()
])

allResults
    .then(results => {
        console.log("Promise.all:", results)
    })
    .catch(error => {
        console.log(error)
    })

const firstResult = Promise.race([
    getTodos(),
    getUsers()
])

firstResult
    .then(result => {
        console.log("Promise.race:", result)
    })
    .catch(error => {
        console.log(error)
    })
