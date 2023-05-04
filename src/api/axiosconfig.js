import axios from 'axios';

export default axios.create({
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    baseURL: 'http://localhost:8080'
});