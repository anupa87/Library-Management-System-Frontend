import api from '../../../api/api'
import jwtDecode from 'jwt-decode'

const AuthService = {
  async signup(user) {
    try {
      const response = await api.post('/signup', user)
      console.log(response.data)
      return response.data
    } catch (error) {
      throw new Error(error.response.data.error)
    }
  },

  async login(credentials) {
    try {
      const response = await api.post('/login', credentials)
      localStorage.setItem('token', response.data.token)
      return response
    } catch (error) {
      throw new Error(error.response.data.error)
    }
  },

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('error')
    localStorage.clear()
  },

  isAuthenticated() {
    const token = localStorage.getItem('token')
    return token !== null
  },

  async getCurrentUser() {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        throw new Error('Token not found in local storage')
      }

      const decodedToken = jwtDecode(token)
      return {
        userId: decodedToken.user_id,
        email: decodedToken.email,
        role: decodedToken.role,
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName
      }
    } catch (error) {
      console.error('Failed to retrieve current user:', error)
      throw new Error('Failed to retrieve current user')
    }
  }
}

export default AuthService
