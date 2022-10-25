import axios from "axios/index";

export default class Request {
    path = null
    method = null
    parameters = {}

    getRequest(path) {
        this.method = 'get'
        this.path = path

        const apiToken = localStorage.getItem('apiToken')
        const adminToken = localStorage.getItem('adminToken')

        let options = {
            headers: {
                apiToken: apiToken ?? '',
                "Content-Type": 'application/json'
            },
            data: {},
        }
        if (adminToken) {
            options.headers.adminToken = adminToken;
        }

        return new Promise((resolve, reject) => {
            axios.get(path, options).then(
                (response) => {
                    resolve(response)
                },
                (error) => {
                    console.log(error, 'error')
                    this.errorHandler(path, error, resolve, reject);
                },
            );
        });
    }

    postRequest(path, parameters) {
        this.method = 'post'
        this.path = path
        this.parameters = parameters;

        const apiToken = localStorage.getItem('apiToken')
        const adminToken = localStorage.getItem('adminToken')

        let options = {
            headers: {
                apiToken: apiToken ?? '',
                "Content-Type": 'application/json'
            },
            withCredentials: false
        }
        if (adminToken) {
            options.headers.adminToken = adminToken;
        }

        return new Promise((resolve, reject) => {
            axios.post(path, parameters, options).then(
                (response) => {
                    resolve(response.data.response)
                },
                (error) => {
                    this.errorHandler(path, error, resolve, reject);
                },
            );
        });
    }

    errorHandler(path, error, resolve, reject) {
        if (error.response !== undefined && error.response.status === 500) {
            error.response.data.internalCode = 'internal_error';
        }
        if (error.response !== undefined && error.response.status === 401) {
            window.location.replace('/')
        }
        reject(error);
    }
}
