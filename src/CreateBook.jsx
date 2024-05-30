import { useState, useContext } from "react"
import { AuthContext } from "./authContext"
import { createBook } from "./apis"

const CreateBook = () => {
    const { auth } = useContext(AuthContext)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [favorite, setFavorite] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = () => {
        const book = { title, author, genre, favorite, rating }
        createBook({ auth, ...book })
            .then(() => {
                setTitle("")
                setAuthor("")
                setGenre("")
                setFavorite(false)
                setRating(0)
            })
            .catch(error => console.log("Error Creating Book: ", error))
    }

    return (
      <div>
        <h1>Create Book</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <label>
            Favorite:
            <input
                type="checkbox"
                checked={favorite}
                onChange={e => setFavorite(e.target.checked)}          
            />           
        </label>
        <input
            type="number"
            placeholder="Rating"
            value={rating}
            onChange={e => setRating(Number(e.target.value))}
        />  
        <button onClick={handleSubmit}>Submit</button>    
      </div>
    );
}

export default CreateBook