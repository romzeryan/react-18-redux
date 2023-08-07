const Book = ({ id, index, img, title, author, deleteBook }) => {
  return (
    <article className='book'>
      <div className='bookIndex'>{'# ' + index}</div>
      <Image img={img} alt={title} />
      <Title title={title} />
      <Author author={author} />
      <button type='button' onClick={() => deleteBook(id)}>
        delete this book
      </button>
    </article>
  )
}

const Image = ({ img, alt }) => <img src={img} alt={alt} />
const Title = ({ title }) => <div className='title'>{title}</div>
const Author = ({ author }) => <div className='author'>{author}</div>

export default Book
