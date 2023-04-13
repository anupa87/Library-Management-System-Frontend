import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />
}

export default ProtectedRoute