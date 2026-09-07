import Book from "./Book.js"

class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year)
        this.format = format
    }

    get format() {
        return this._format
    }

    set format(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Format should be not empty string")
        }

        this._format = value
    }

    printInfo() {
        console.log(
            `Here is a detective story called "${this.name}" by ${this.author}, published in ${this.year}. File format: ${this.format}.`
        )
    }

    static createEBook(book, format) {
        return new EBook(
            book.name,
            book.author,
            book.year,
            format
        )
    }
}

export default EBook