import axios from 'axios';

const api = axios.create({
    baseURL: 'http://consumerback-env.eba-hsgq5jnk.us-east-2.elasticbeanstalk.com',
})

export default api;