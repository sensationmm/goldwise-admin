import axios from 'axios/index'
// FIXME: get the token from state instead localStorage
// import { store } from '../store'

export const getHeaders = () => {
    const headers = {
        'Content-Type': 'application/json',
    };

    return { ...headers }
}

export const getAuthHeader = () => {
    // TODO: Get the value from global state
    const apiToken = localStorage.getItem('apiToken')
    const adminToken = localStorage.getItem('adminToken')

    let headers = {'apiToken': apiToken ?? ''}
    if (adminToken) {
        headers.push({'adminToken': adminToken})
    }

    return headers;
}

const api = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    withCredentials: false,
    headers: getHeaders()
})

api.defaults.headers.common = getAuthHeader()

export default api