import axios from 'axios'
// FIXME: get the token from state instead localStorage

export const getAuthHeader = () => {
    // TODO: Get the value from global state
    const apiToken = localStorage.getItem('apiToken')
    const adminToken = localStorage.getItem('adminToken')

    let headers = {
        apiToken: apiToken ?? '',
        'Content-Type': 'application/json'
    }
    if (adminToken) {
        headers.adminToken = adminToken;
    }

    return headers;
}

const api = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    withCredentials: false,
    headers: getAuthHeader()
})

export default api
