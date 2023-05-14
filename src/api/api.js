import axios from 'axios'

const Backend_URL = 'http:/localhost:8080/api/v1'

const api = axios.create({
  baseURL: Backend_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  params: { _format: 'json' }
})

// Add request interceptor to set authorization header
api.interceptors.request.use(
  async (config) => {
    const token = sessionStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default api