import Request from "../helper/request"

const request = new Request()

/**
 * It sends a POST request to the server with the username and password, and if the server responds
 * with an apiToken, it saves it to localStorage
 * @param username - The username of the user you want to log in.
 * @param password - The password of the user.
 * @returns The response object is being returned.
 */
const getApiToken = async (username, password) => {

    const response = await request.postRequest('/api-token/', {
        username,
        password
    })

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

    const response = await request.postRequest('/admin/auth/login/', {
        email,
        password
    })

    return response
}

const authService = {
    getApiToken,
    login
}

export default authService