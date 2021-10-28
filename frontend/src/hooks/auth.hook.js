import React, { createContext, useContext, useState } from 'react';
import { signIn } from '../services/auth.service';

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [signed, setSigned] = useState(false);
    const [user, setUser] = useState({});

    const userSignIn = async ({ socialId, password }) => {
        try {
            const response = await signIn({ socialId, password });
            console.log(response);
            setSigned(true);

        } catch(e) {
            setSigned(false);
        }
    }

    return (
        <AuthContext.Provider value={{signed, user, userSignIn: userSignIn}}>
            {children}
        </AuthContext.Provider>
    )
}


const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
  };

export { AuthProvider, useAuth };