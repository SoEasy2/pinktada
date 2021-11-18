import axios from 'axios'

const API_URL = 'http://localhost:5000'

const $api = axios.create({
    withCredentials:true,
    baseURL:API_URL
})


$api.interceptors.request.use(async config=>{
    config.headers={
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        'Accept':'application/json'
    }
    return config
})

export default $api;