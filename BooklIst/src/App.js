
import AddBookForm from './Components/booksAddFrom';
import BookListData from './Components/BooksList';
import Navbar from './Components/navBar';
import  BookListProvider  from './context/booksContext';

function App() {
  return (
    <div className="App">
      <BookListProvider>
        <Navbar />
      <BookListData />
      <AddBookForm /></BookListProvider>
    </div>
  );
}

export default App;
