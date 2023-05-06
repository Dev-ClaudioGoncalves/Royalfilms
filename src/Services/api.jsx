// API_KEY :  c2936ecde0cd9fcaa3d1fdf14e054925
// BASE_URL:  https://api.themoviedb.org/3/


import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    
})

export default api;