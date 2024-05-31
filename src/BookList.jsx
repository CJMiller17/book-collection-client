import { useEffect, useState, useContext } from "react"
import { AuthContext } from "./authContext"
import { readBooks, deleteBook } from "./apis"
import "./App.css"

const BookList = () => {
    const { auth } = useContext(AuthContext)
    const [books, setBooks] = useState([])

    useEffect(() => {
        readBooks({ auth })
            .then(data => {
                console.log("Data: ", data)
                setBooks(data)
            })
            .catch(error => console.log("Error reading books: ", error))
    }, [auth])

    const handleDelete = (bookId) => {
        deleteBook({ auth, id: bookId })
            .then(() => {
                setBooks(books.filter(book => book.id !== bookId))
            })
            .catch(error => console.log("Error deleting book: ", error))
    }
    console.log(books)

    if (books.length <= 0) {
        return <>Loading</>
    } else {
        return (
            <div className="bookList">
                <h1>Book List</h1>
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            "{book.title}" by {book.author}
                            <button className="button" onClick={() => handleDelete(book.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default BookList