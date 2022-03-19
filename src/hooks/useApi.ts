import axios from 'axios';

const api = axios.create ({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken : async (token: string) => {
        return {
            user: {id: 3, name: 'Cristofer', email: 'cristofer@email.com'}
        };
        const response = await api.post('/validate', { token });
        return response.data; 
    }, 

    signin: async(email: string, password: string) => {
        //redireciona manualmente por conta de usar uma api que não existe, e que consequentemente não irá responder nada.
        return {
            user: {id: 3, name: 'Cristofer', email: 'cristofer@email.com'},
            token:'12345'
        };
        //caso tenha uma api que valide realmente os dados, usa-se dessa forma.
        const response = await api.post('/signin', { email, password });
        return response.data;
    },

    logout: async() => {
        return { status: true };
        const response = await api.post('/logout');
        return response.data; 
    }
});