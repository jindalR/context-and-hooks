import React, { Component, useContext } from "react";
import { AuthContextVal } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

// class NavBar extends Component {
//   // static contextType = ThemeContext;
//   render() {
//     // console.log("@@", this.context);
//     // const {isLightTheme, light, dark} = this.context;
//     // const theme = isLightTheme === true ? light : dark;
//     return (
//       <AuthContextVal.Consumer>
//         {(authContext) => {
//           return (
//             <ThemeContext.Consumer>
//               {(context) => {
//                 const { isAuthenticate, toggleAuth } = authContext;
//                 const { isLightTheme, light, dark } = context;
//                 const theme = isLightTheme === true ? light : dark;
//                 return (
//                   <nav style={{ background: theme.ui, color: theme.syntax }}>
//                     <h1>Context App</h1>
//                     <div onClick={toggleAuth}>{isAuthenticate ? "logged in" : "logged out"}</div>
//                     <ul>
//                       <li>Home</li>
//                       <li>About</li>
//                       <li>Context</li>
//                     </ul>
//                   </nav>
//                 );
//               }}
//             </ThemeContext.Consumer>
//           );
//         }}
//       </AuthContextVal.Consumer>
//       // ThemeContex.Consumer is another method to consuk context, here we have function with context param. firt method static contextType

//       // <nav style={{background: theme.ui, color: theme.syntax}}><h1>
//       //     Context App</h1>
//       //     <ul>
//       //         <li>Home</li>
//       //         <li>About</li>
//       //         <li>Context</li>
//       //     </ul>
//       //     </nav> );
//     );
//   }
// }

// convert clas based copmonent to functional and useContext hooks for easy way to use multiple context
const NavBar = () => {
  const { isLightTheme, light, dark } =  useContext(ThemeContext);
  const { isAuthenticate, toggleAuth } = useContext(AuthContextVal)
  const theme = isLightTheme === true ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>{isAuthenticate ? "logged in" : "logged out"}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Context</li>
      </ul>
    </nav>
  );}
 
// export default ;
export default NavBar;
