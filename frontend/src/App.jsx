import { Routes, Route } from 'react-router-dom'
import AuthTest from './components/AuthTest'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoute from './utils/PrivateRoute'
import { useAuth } from './context/authContext'

function App() {

  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="dashboard" element={
          <PrivateRoute user={user}>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
