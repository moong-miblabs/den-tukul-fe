import axios from 'axios'
import { SERVER_URL } from '@/env.js'
import { useStore } from '@/store'
const $store = useStore()
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 4)

const $axios = axios.create({
    baseURL: SERVER_URL,
    timeout: 5000
});

$axios.interceptors.request.use(function (config) {
    config.headers = { Authorization : $store.getToken }
    if(config.params) {
        config.params = Object.assign(config.params, { random: nanoid() })
    } else {
        config.params = { random: nanoid() }
    }
    return config;
});

$axios.interceptors.response.use(function (response) {
    if(response.data.error_code == 401) {
        window.location.href = '/logout'
        return
    } 
    return response;
})

export default $axios