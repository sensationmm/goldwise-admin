import api from './api'
import {setApiToken} from "../reducers/tokenSlice.reducer";
import {useDispatch} from "react-redux";
export default class Request {
  path = null
  method = null
  parameters = {}

  getRequest(path) {
    this.method = 'get'
    this.path = path

    return new Promise((resolve, reject) => {
      api.get(path).then(
        (response) => {
          resolve(response)
        },
        (error) => {
          console.log(error,'error')
          this.errorHandler(path, error, resolve, reject);
        },
      );
    });
  }

  postRequest(path, parameters) {

    this.method = 'post'
    this.path = path
    this.parameters = parameters;

    return new Promise((resolve, reject) => {
      api.post(path, parameters).then(
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
