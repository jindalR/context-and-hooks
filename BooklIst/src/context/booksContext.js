import React, { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';

export const BookContextData = createContext();

const BookListProvider = (props) => {
    const [Books, setBooks] = useState([{title: "The Kite Runner", id: 1},{title: "Who will cry when you die", id: 2}]);
    const addBooks = (title) => {
        setBooks([...Books, {title: title, id: uuid()}])
    }
    const removeBooks = (id) => {
        setBooks(Books.filter(d => d.id != id))
    }
    return ( <BookContextData.Provider value={{Books, addBooks, removeBooks}}>
        {props.children}
    </BookContextData.Provider>);
}
 
export default BookListProvider;