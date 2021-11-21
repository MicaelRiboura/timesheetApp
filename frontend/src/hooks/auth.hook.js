import React, { createContext, useContext, useEffect, useState } from 'react';
import { setServiceToken } from '../services';
import { signIn as signInService } from '../services/auth.service';

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [signed, setSigned] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const storagedUser = localStorage.getItem('TM:user');
        const storagedToken = localStorage.getItem('TM:token');
        if(storagedUser && storagedToken) {
            console.log('storagedToken: ', storagedToken);
            setUser(JSON.parse(storagedUser));
            setToken(storagedToken);
            setServiceToken(storagedToken);
            setSigned(true);
        }
    }, []);

    const signIn = async ({ socialId, password }) => {
        try {
            const response = await signInService({ socialId, password });
            if(response.data.user && response.data.token) {
                console.log('logado');
                console.log('signed: ', true);
                console.log('signIn data: ', response.data);
                setUser(response.data.user);
                setToken(response.data.token);
                localStorage.setItem('TM:user', JSON.stringify(response.data.user));
                localStorage.setItem('TM:token', response.data.token);
                setServiceToken(response.data.token);
                setSigned(true);
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
        <AuthContext.Provider value={{signed, setSigned, user, token, signIn, signOut, error}}>
            {children}
        </AuthContext.Provider>
    )
}


const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
  };

export { AuthProvider, useAuth };