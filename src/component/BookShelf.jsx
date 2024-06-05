import '../index.css'
import React from "react";

const BookShelf = () => {
    const [books, setBooks] = React.useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = React.useState({
        title: '',
        author: ''
    }
    )


    function handleInputChange(e) {
        const newCurrentBook = structuredClone(newBook)
        if (e.target.placeholder === 'Book Title') {
            newCurrentBook.title = e.target.value
            setNewBook(newCurrentBook)
        } else {
            newCurrentBook.author = e.target.value
            setNewBook(newCurrentBook)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newBooksList = structuredClone(books)
        newBooksList.push(newBook)
        setBooks(newBooksList)
        setNewBook({
            title: '',
            author: '',
        })
    }

    function clearBookList() {
        setBooks([])
    }

    function deleteBook(e) {

        const currentBookList = structuredClone(books)
       
       
        const filteredBooks = currentBookList.filter((book) => {
            if (book.title !== e.target.value) {
                return book
            } 
        })
      
        setBooks(filteredBooks)


    }


    return <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Book Title'
                    type='text'
                    value={newBook.title}
                    onChange={handleInputChange}>

                </input>
                <input
                    placeholder='Book Author'
                    type='text'
                    value={newBook.author}
                    onChange={handleInputChange}>
                </input>
                <button type='submit'>Add Book</button>
            </form>
        </div>
        <button onClick={clearBookList}>Clear Book List</button>
        <div className="bookCardsDiv">{books.map((book, idx) => {
            return <div className="bookCard" key={idx}>title: {book.title} author: {book.author} <button onClick={deleteBook} value={book.title}>Delete Book</button></div>
        })}</div>
    </div>

}


export default BookShelf