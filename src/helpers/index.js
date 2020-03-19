import axios from 'axios';

const httpClient = params => {
    return axios.request({
        ...params,
        baseURL: 'https://reqres.in/api'
    });
}


export { httpClient };