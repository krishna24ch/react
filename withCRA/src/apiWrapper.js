import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const get = (uri) => {
    return axios.get(`${baseUrl}${uri}`);
}

const post = (uri, data) => {
    return axios.post(`${baseUrl}${uri}`, data);
}

export default {
    get,
    post,
}