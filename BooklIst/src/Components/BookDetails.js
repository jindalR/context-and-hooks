import React, { useContext } from 'react';
import { BookContextData } from '../context/booksContext';

const BookDetails = ({book}) => {
    const {removeBooks} = useContext(BookContextData);
    return (  <li>
        <div className="title">{book.title}<button style={{margin: "10px"}} onClick={() => removeBooks(book.id)}>Remove</button></div>
        
    </li>);
}
 
export default BookDetails ;