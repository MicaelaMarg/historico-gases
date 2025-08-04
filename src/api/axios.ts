import axios from 'axios';

const api = axios.create(
    {
        baseURL: "http://172.17.2.23:8080/api/api_remoto",
        timeout: 10000,
        headers: {
            "Content-Type": "application/json"
        }
    }
);

export default api;