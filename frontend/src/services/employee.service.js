import axios from 'axios';

const baseUrl = 'http://localhost:3333';

axios.create({
    baseURL: baseUrl
});

const list = async () => {
    try {
        return await axios.get(`${baseUrl}/employees`).then(resp => {
            return resp;
        });

    } catch( erro ) {
        return erro;
    }
}


export { list };