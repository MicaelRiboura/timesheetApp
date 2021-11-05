import axios from 'axios';

const baseUrl = 'http://localhost:3333';

axios.create({
    baseURL: baseUrl
});

const list = async () => {
    try {
        return await axios.get(`${baseUrl}/employees`, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('TM:token').replaceAll('"', '')
            }
          }).then(resp => {
            return resp.data;
        });

    } catch( erro ) {
        return erro;
    }
}


export { list };