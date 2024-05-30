import { useEffect, useState, useContext } from "react"
import { AuthContext } from "./authContext"
import { readBooks, deleteBook } from "./apis"

const BookList = () => {
    const { auth } = useContext(AuthContext)
    const [books, setBooks] = useState([])

    useEffect(() => {
        readBooks({ auth })
            .then(data => setBooks(data))
            .catch(error => console.log("Error reading books: ", error))
    }, [auth])

    const handleDelete = (bookId) => {
        deleteBook({ auth, id: bookId })
            .then(() => {
                setBooks(books.filter(book => book.id !== bookId))
            })
        .catch(error => console.log("Error deleting book: ", error))
    }

    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.title}
                        <button onClick={() => handleDelete(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList