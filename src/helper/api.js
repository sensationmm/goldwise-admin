import axios from 'axios/index'

export const getHeaders = () => {
    const headers = {
        "Content-Type": "application/json",
    };

    return { ...headers }
}

export const getAuthHeader = () => {

    const apiToken = localStorage.getItem('apiToken')
    if (apiToken) {
        return {
            "apiToken": apiToken
        }
    }

    return {}
}

const api = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    withCredentials: false,
    headers: getHeaders()
})

api.defaults.headers.common = getAuthHeader()

export default api