import axios from 'axios';

const api = axios.create({

    baseURL: 'http://localhost:3000/', //para USB

});

export default api;