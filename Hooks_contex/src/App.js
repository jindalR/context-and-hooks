import ThemeToggle from "./components/themeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import BookProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";

const { default: Booklist } = require("./components/booklist");
const { default: NavBar } = require("./components/navBar");


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
      <NavBar />
      <BookProvider><Booklist /></BookProvider>
      
      <ThemeToggle />
      </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
