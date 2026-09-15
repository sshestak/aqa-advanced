class TodoList {
    async getTodos() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const todo = await response.json()
        return todo
    }
}

class UsersList {
    async getUsers() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const user = await response.json()
        return user
    }
}


const todoList = new TodoList()
const usersList = new UsersList()

todoList.getTodos()
    .then(todo => {
        console.log("Todo:", todo)
    })

usersList.getUsers()
    .then(user => {
        console.log("User:", user)
    })

Promise.all([
    todoList.getTodos(),
    usersList.getUsers()
])

Promise.race([
    todoList.getTodos(),
    usersList.getUsers()
])
