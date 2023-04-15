import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout'
import Login from './components/login/Login'
import Dashboard from './pages/Dashboard'
import Homepage from './pages/Homepage'
import Books from './pages/Books'
import Users from './pages/Users'
import User from './components/admin/UpdateUser'
import Setting from './pages/Setting'
import Help from './pages/Help'
import ErrorPage from './pages/ErrorPage'
import AddUser from './components/forms/AddUserForm'
import UpdateUser from './components/admin/UpdateUser'
import AddBook from './components/forms/AddBookForm'
import UpdateBook from './components/admin/UpdateBook'
import IssueBook from './components/admin/IssuedBooks'
import ProtectedRoute from './components/routes/ProtectedRoute'
import AdminRoute from './components/routes/AdminRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/help" element={<Help />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/users" element={<Users />} />
          <Route path="/books" element={<Books />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/adduser" element={<AddUser />} />
            <Route path="/dashboard/updateuser" element={<UpdateUser />} />
            <Route path="/dashboard/addbook" element={<AddBook />} />
            <Route path="/dashboard/updatebook" element={<UpdateBook />} />
            <Route path="/dashboard/issuebook" element={<IssueBook />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
