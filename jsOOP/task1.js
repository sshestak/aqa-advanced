import Book from "./Book.js"
import EBook from "./EBook.js"

const Book1 = new Book(
    "Murder on the Orient Express",
    "Agatha Christie",
    1934
)

const Book2 = new Book(
    "The Hound of the Baskervilles",
    "Arthur Conan Doyle",
    1902
)

const EBook1 = new EBook(
    "The Murder of Roger Ackroyd",
    "Agatha Christie",
    1926,
    "EPUB"
)

console.log(Book1.name)
console.log(Book1.author)
console.log(Book1.year)

console.log(EBook1.name)
console.log(EBook1.author)
console.log(EBook1.year)
console.log(EBook1.format)

Book1.name = "The ABC Murders"
Book1.year = 1936

EBook1.format = "PDF"

Book1.printInfo()
Book2.printInfo()
EBook1.printInfo()

const books = [
    Book1,
    Book2,
    EBook1
]

const oldestBook = Book.getOldestBook(books)

console.log("The oldest book:")

oldestBook.printInfo()

const EBook2 = EBook.createEBook(Book2, "MOBI")

EBook2.printInfo()