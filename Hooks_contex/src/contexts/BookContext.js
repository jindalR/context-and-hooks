import React, { createContext, useState } from 'react';

export const BookContext = createContext();
const BookProvider = (props) => {
    const[books, setBooks] = useState([{title:"Monk who sold his ferrari", id:1},{title:"Who will cry when you die", id:2},{title:"Nagas", id:3}]);
    return (  
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookProvider;