import React from 'react'; // Importamos React ya que estamos creando un componente de React
import { Link, useNavigate } from 'react-router-dom'; // Importamos Link y useNavigate de react-router-dom
import { useAuth } from '../context/authContext'; // Importamos el contexto de autenticación

// Definimos el componente Navbar
const Navbar = ({ user }) => {

    // Usamos el hook useAuth para obtener la función de logoutUser
    const { logoutUser } = useAuth();
    // Usamos el hook useNavigate para la navegación programática
    const navigate = useNavigate();

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        logoutUser(() => { navigate("/dashboard") }); // Llamamos a logoutUser y redirigimos al usuario a /dashboard después del cierre de sesión
    };

    return (
        <>
            {/* Barra de navegación */}
            <nav className='bg-slate-800 text-white p-2'>
                <div className="container flex justify-between mx-auto">
                    {/* Enlace al inicio */}
                    <Link to="/">Logo</Link>
                    {/* Lista de enlaces */}
                    <ul className='flex gap-4'>
                        {/* Enlace a la página de inicio */}
                        <Link to="/">Inicio</Link>
                        {/* Condicionalmente mostrar el enlace al dashboard si el usuario está autenticado */}
                        {user && <Link to="/dashboard">Dashboard</Link>}
                        {/* Condicionalmente mostrar el botón de cerrar sesión si el usuario está autenticado */}
                        {user && <button onClick={handleLogout}>Cerrar sesión</button>}
                        {/* Condicionalmente mostrar enlaces de inicio de sesión y registro si el usuario no está autenticado */}
                        {!user && <>
                            <Link to="/login">Iniciar sesión</Link>
                            <Link to="/register">Crear cuenta</Link>
                        </>}
                    </ul>
                </div>
            </nav>
        </>
    );
}

// Exportamos el componente Navbar
export default Navbar;
