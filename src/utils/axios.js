import axios from 'axios'
import Router from '../router/index'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
/* Axios instance */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Si la respuesta tiene un error 401 (No autorizado)
    if (error.response && error.response.status === 401) {
      // Redirigir al login
      Router.push('/')
    }

    // Si hay otro tipo de error, lo re-lanzamos para que pueda ser manejado en otros lugares
    return Promise.reject(error)
  },
)

export { api }
