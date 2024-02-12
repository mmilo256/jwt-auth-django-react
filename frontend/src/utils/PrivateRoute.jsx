import React from 'react'; // Importamos React ya que estamos creando un componente de React
import { Navigate } from 'react-router-dom'; // Importamos Navigate de react-router-dom

// Definimos el componente PrivateRoute
const PrivateRoute = ({ user, children }) => {
    // Verificamos si el usuario no está autenticado
    if (!user) {
        // Si no está autenticado, redirigimos al usuario a la página de inicio de sesión y reemplazamos la entrada en el historial
        return <Navigate to="/login" replace />;
    }

    // Si el usuario está autenticado, mostramos el contenido de children
    return children;
};

// Exportamos el componente PrivateRoute
export default PrivateRoute;
