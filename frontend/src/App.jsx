import React from 'react'; // Importamos React ya que estamos creando un componente de React
import { Routes, Route } from 'react-router-dom'; // Importamos Routes y Route de react-router-dom
import { useAuth } from './context/authContext'; // Importamos el contexto de autenticación
import Navbar from './components/Navbar'; // Importamos el componente Navbar
import Landing from './pages/Landing'; // Importamos la página de aterrizaje
import Dashboard from './pages/Dashboard'; // Importamos la página del dashboard
import Login from './pages/Login'; // Importamos la página de inicio de sesión
import Register from './pages/Register'; // Importamos la página de registro
import PrivateRoute from './utils/PrivateRoute'; // Importamos el componente PrivateRoute

// Definimos el componente App
function App() {

  // Obtenemos el estado del usuario desde el contexto de autenticación
  const { user } = useAuth();

  return (
    <div className="bg-gray-200 h-screen">
      {/* Renderizamos el componente Navbar y pasamos el estado del usuario como prop */}
      <Navbar user={user} />
      {/* Definimos las rutas */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route index element={<Landing />} />
        {/* Ruta para la página del dashboard */}
        <Route path="dashboard" element={
          <PrivateRoute user={user}>
            <Dashboard />
          </PrivateRoute>
        } />
        {/* Ruta para la página de inicio de sesión */}
        <Route path="login" element={<Login />} />
        {/* Ruta para la página de registro */}
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

// Exportamos el componente App
export default App;