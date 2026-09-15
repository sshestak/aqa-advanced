// Part 1
function getTodos() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .catch(error => {
            console.log(error)
        })
}

getTodos()
    .then(todo => {
        console.log(todo)
    })
    .catch(error => {
        console.log(error)
    })

// Part 2
function getUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .catch(error => {
            console.log(error)
        })
}

getUsers()
    .then(users => {
        console.log(users)
    })
    .catch(error => {
        console.log(error)
    })

// Using Promise.all and Promise.race
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



