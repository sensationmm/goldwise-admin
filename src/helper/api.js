import axios from 'axios/index'
import { store } from '../store'

export const getHeaders = () => {
    const headers = {
        'Content-Type': 'application/json',
    };

    return { ...headers }
}

export const getAuthHeader = () => {
    const state = store.getState()
    if (state) {
        return {
            'apiToken': state.token.apiToken
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