import axios from 'axios';

const baseUrl = 'http://localhost:3333';

axios.create({
    baseURL: baseUrl
});

const signIn = async ({ socialId, password }) => {
    try {
        return await axios.post(`${baseUrl}/signin`, {
            socialId,
            password
        }).then(resp => {
            return resp;
        });

    } catch( erro ) {
        return erro;
    }
}


export { signIn };