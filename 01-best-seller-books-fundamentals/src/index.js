import { React, useState } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books as initialBooks } from './books'
import Book from './Book'

const App = () => {
  return (
    <>
      <PageTitle />
      <BookList />
    </>
  )
}

const PageTitle = () => {
  return (
    <section className='pageTitle'>
      <div>Amazon best sellers in books</div>
    </section>
  )
}

const BookList = () => {
  const [books, setBooks] = useState(initialBooks)
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }
  return (
    <section className='booklist'>
      {books.map((book, index) => (
        <Book
          key={book.id}
          index={index + 1}
          deleteBook={deleteBook}
          {...book}
        />
      ))}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
