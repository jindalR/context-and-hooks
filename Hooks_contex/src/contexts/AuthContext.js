import React, { Component, createContext } from 'react';

export const AuthContextVal = createContext();

class AuthContextProvider extends Component {
    state = { 
        isAuthenticate: true
     }

     authToggle = () => {
         this.setState({
             isAuthenticate: !this.state.isAuthenticate
         })
     }
    render() { 
        return (  
            <AuthContextVal.Provider value={{...this.state, toggleAuth: this.authToggle}}>
{this.props.children}
            </AuthContextVal.Provider>
        );
    }
}
 
export default AuthContextProvider;