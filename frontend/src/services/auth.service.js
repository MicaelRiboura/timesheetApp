import axios from 'axios';

const baseUrl = 'http://localhost:3333';

axios.create({
    baseURL: baseUrl
});

const signIn = async ({ socialId, password }) => {
    return await axios.post(`${baseUrl}/signin`).then(resp => {
        return resp;
    });
}


export { signIn };