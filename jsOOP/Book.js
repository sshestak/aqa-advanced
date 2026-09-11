class Book {
    constructor(name, author, year) {
        this.name = name
        this.author = author
        this.year = year
    }

    get name() {
        return this._name
    }

    set name(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Name should be not empty string")
        }

        this._name = value
    }

    get author() {
        return this._author
    }

    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Author should be not empty string")
        }

        this._author = value
    }

    get year() {
        return this._year
    }

    set year(value) {
        if (typeof value !== "number" || value < 0) {
            throw new Error("Year should be positive number")
        }

        this._year = value
    }

    printInfo() {
        console.log(
            `Here is a detective story called ${this.name} by ${this.author}, published in ${this.year}`
        )
    }

    static getOldestBook(books) {
        if (books.length === 0) {
            return null
        }

        let oldestBook = books[0]

        for (const book of books) {
            if (book.year < oldestBook.year) {
                oldestBook = book
            }
        }

        return oldestBook
    }
}

export default Book