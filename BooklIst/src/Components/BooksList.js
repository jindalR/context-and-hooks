import React, { useContext } from "react";
import { BookContextData } from "../context/booksContext";
import BookDetails from './BookDetails'
const BookListData = (props) => {
  const { Books } = useContext(BookContextData);
  return Books.length ? (
    <div className="book-list">
      <ul>
        {Books.map((books) => {
          return (
              <BookDetails book={books} key= {books.id} />
            // <li>
            //   {books.title}
            //   <button onClick={() => removeBooks(books.id)}>Remove</button>
            // </li>
          );
        })}
      </ul>
      {/* <button onClick={() => addBooks}>Add</button> */}
    </div>
  ): <div className="empty">No Books to read</div>
};

export default BookListData;
