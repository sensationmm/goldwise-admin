import Request from "../helper/request"
import {clearAdmin} from "../reducers/userSlice.reducer";

const request = new Request()

/**
 * It sends a POST request to the server with the username and password, and if the server responds
 * with an apiToken, it saves it to localStorage
 * @param username - The username of the user you want to log in.
 * @param password - The password of the user.
 * @returns The response object is being returned.
 */
const getApiToken = async (username, password) => {
    const path = process.env.REACT_APP_API_ENDPOINT + '/api-token/'
    const response = await request.postRequest(path, {
        username,
        password
    })

    // FIXME: remove once the value is loaded from state
    if (response.apiToken) {
        localStorage.setItem('apiToken', response.apiToken)
    }

    return response
}


/**
 * It makes a post request to the server with the username and password, and if the response contains
 * adminDetails, it saves it to localStorage
 * @param email - The username of the admin
 * @param password - The password of the user.
 * @returns The response object is being returned.
 */
const login = async (email, password) => {
    localStorage.removeItem('adminToken')
    const path = process.env.REACT_APP_API_ENDPOINT + '/admin/auth/login/'
    const response = await request.postRequest(path, {
        email,
        password
    })

    // FIXME: remove once the value is loaded from state
    if (response?.adminToken) {
        localStorage.setItem('adminToken', response.adminToken)
    }

    return response
}

/**
 * It makes a POST request to the logout endpoint
 * @returns the result of the request.postRequest function.
 */
const logout = async () => {
    localStorage.removeItem('adminToken')
    const path = process.env.REACT_APP_API_ENDPOINT + '/admin/auth/logout/'

    return await request.postRequest(path, {})
}

const authService = {
    getApiToken,
    login,
    logout
}

export default authService
