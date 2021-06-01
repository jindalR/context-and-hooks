import React, { useContext } from 'react';
import { BookContextData } from '../context/booksContext';

const Navbar = () => {
  const {Books}=  useContext(BookContextData)
return ( <div className="navbar"><h1>Rohit Reading List</h1><p>{Books && Books.length}</p></div> );
}
 
export default Navbar;
