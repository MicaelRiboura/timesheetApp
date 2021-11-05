import React, { createContext, useContext, useEffect, useState } from 'react';
import { signIn as signInService } from '../services/auth.service';

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [signed, setSigned] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storagedUser = localStorage.getItem('TM:user');
        const storagedToken = localStorage.getItem('TM:token');
        if(storagedUser && storagedToken) {
            setUser(JSON.parse(storagedUser));
            setToken(storagedToken);
            setSigned(true);
        }
    }, []);

    const signIn = async ({ socialId, password }) => {
        try {
            const response = await signInService({ socialId, password });
            if(response.data.user) {
                setUser(response.data.user);
                setSigned(true);
                localStorage.setItem('TM:user', JSON.stringify(response.data.user));
                localStorage.setItem('TM:token', JSON.stringify(response.data.token));
                setError(null);
            } else {
                setError('Email/senha inválidos');
            }

        } catch(e) {
            setSigned(false);
        }
    }

    const signOut = () => {
        setUser(null);
        localStorage.clear();
        setSigned(false);
    }

    return (
        <AuthContext.Provider value={{signed, user, token, signIn, signOut, error}}>
            {children}
        </AuthContext.Provider>
    )
}


const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
  };

export { AuthProvider, useAuth };