import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import {BookContext} from '../contexts/BookContext'

// class Booklist extends Component {
//     static contextType = ThemeContext; 
//     // for multiple context contextType is not working and also in functional component its not working
//     render() { 
//         const {isLightTheme, light, dark} = this.context;
//         const theme = isLightTheme === true ? light : dark;
//                 return ( <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
//             <ul>
//                 <li style={{background: theme.ui}}>Who wil cry when you die</li>
//                 <li style={{background: theme.ui}}>Naga Series</li>
//                 <li style={{background: theme.ui}}>Monk, who sold his ferrari</li>
//             </ul>

//         </div> );
//     }
// }
const Booklist  = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const{books} = useContext(BookContext)
    const theme = isLightTheme === true ? light : dark;
    return (<div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
                <ul>
                    {books.map((book) => {
                        return(<li style={{background: theme.ui}} key={book.id}>{book.title}</li>)
                    })}
                 </ul>
    
             </div>  );
}
 
// export default ;
 
export default Booklist;