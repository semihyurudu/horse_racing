import axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'

const domain = '/'

const axiosInstance = axios.create({
  baseURL: domain,
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token') //for the future
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

export { axiosInstance, domain }
