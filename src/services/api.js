import axios from 'axios';

const api = axios.create({
    baseURL: 'https://44.203.134.103',
});

// Interceptor para añadir el token a las solicitudes
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;