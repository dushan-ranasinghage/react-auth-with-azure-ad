import { config, webApiConfig } from './config'
import AuthContext from 'adal-angular';
import axios from "axios";
import { 
    API_URL,
 } from "./types";

window.AuthenticationContext = AuthContext;

export function authentication() {
  window.authContext.handleWindowCallback();
  if (!window.authContext.isCallback(window.location.hash)) {
    if (!window.authContext.getCachedToken(config.clientId) || !window.authContext.getCachedUser()) {
      window.authContext.login();
      return true;
    } else {
        axios.defaults.baseURL = API_URL;
        axios.interceptors.response.use(undefined, err => {
            if (((err.response.status === 401) || (err.response.status === 500)) && err.response.config && !err.response.config.__isRetryRequest) {
                err.response.config.__isRetryRequest = true;
                return new Promise((resolve, reject) => {
                    window.authContext.acquireToken(webApiConfig.resourceId, (message, token, msg) => {
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                        err.config.headers.Authorization = `Bearer ${token}`;
                        axios(err.config).then(resolve, reject);
                    });
                });
            }
            throw err;
        });
    }
  }
}
