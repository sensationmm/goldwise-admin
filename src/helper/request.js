import axios from 'axios/index'

export default class Request {
  path = null
  method = null
  parameters = {}

  constructor() {
    axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT
    const admin = JSON.parse(localStorage.getItem('admin'))
    if (admin && admin.ApiToken) {
      axios.defaults.headers.common['apiToken'] = admin.ApiToken
    }
  }

  setToken(token) {
    axios.defaults.headers.common['apiToken'] = token
  }

  getRequest(path) {
    this.method = 'get'
    this.path = path

    return new Promise((resolve, reject) => {
      axios.get(path).then(
        (response) => {
          resolve(response)
        },
        (error) => {
          this.errorHandler(path, error, resolve, reject);
        },
      );
    });
  }

  postRequest(path, parameters, headers) {
    this.method = 'post'
    this.path = path
    this.parameters = parameters;

    return new Promise((resolve, reject) => {
      axios.post(path, parameters, { headers: headers || {} }).then(
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
    reject(error);
  }
}
