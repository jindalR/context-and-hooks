import React, { useContext, useState } from 'react';
import { BookContextData } from '../context/booksContext';

const AddBookForm = (props) => {
    const [title, setTitle] = useState("")
    const {addBooks} = useContext(BookContextData)
    const handleadd = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }
   const  handleSubmit = (e) => {
       e.preventDefault();
      addBooks(title);
        setTitle("");
    }
    return ( <form onSubmit={handleSubmit}>
        <label>Add New Book</label>
        <input type="text" placeholder="Books Title" value={title} onChange={handleadd}></input>
        <input type="submit" value="Add" />    </form> );
}
 
export default AddBookForm;