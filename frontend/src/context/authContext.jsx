import { createContext, useContext, useEffect, useState } from "react";  // Importa las funciones necesarias de React
import { jwtDecode } from 'jwt-decode';  // Importa la función jwtDecode de la librería jwt-decode

// Crea un contexto de autenticación
const AuthContext = createContext();

// Proveedor de autenticación que contiene la lógica de autenticación y los estados relacionados
export const AuthProvider = ({ children }) => {

    // Define el estado para almacenar los tokens de autenticación y el usuario autenticado
    const [authTokens, setAuthTokens] = useState(() => {
        return localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null;
    });

    const [user, setUser] = useState(() => {
        return localStorage.getItem("authTokens")
            ? jwtDecode(localStorage.getItem("authTokens"))
            : null;
    });

    // Define un estado para controlar si la autenticación está en proceso
    const [loading, setLoading] = useState(true);

    // Efecto secundario para actualizar el usuario autenticado cuando cambian los tokens de autenticación
    useEffect(() => {
        if (authTokens) {
            setUser(jwtDecode(authTokens.access));
        }
        setLoading(false);
    }, [authTokens, loading]);

    // Función para iniciar sesión de usuario
    const loginUser = async (email, password, redirect) => {
        // Realiza una solicitud HTTP POST para obtener los tokens de autenticación
        const response = await fetch('http://localhost:8000/api/token/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            }),
        });

        // Obtiene los datos de la respuesta HTTP
        const data = await response.json();

        if (response.status === 200) {
            // Si la solicitud es exitosa, actualiza los tokens de autenticación y el usuario autenticado
            setAuthTokens(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            redirect();
        } else {
            // Si la solicitud falla, muestra un mensaje de error
            alert("No se pudo iniciar sesión:", response.status);
        }

    }

    // Función para registrar un nuevo usuario
    const registerUser = async (email, username, password, password2, redirect) => {
        // Realiza una solicitud HTTP POST para registrar un nuevo usuario
        const response = await fetch('http://localhost:8000/api/register/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                username,
                password,
                password2
            })
        });
        if (response.status === 201) {
            console.log("Usuario creado");
            redirect();
        } else {
            // Si la solicitud falla, muestra un mensaje de error
            alert("No se pudo crear el usuario:", response.status);
        }
    }

    // Función para cerrar sesión de usuario
    const logoutUser = (redirect) => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        redirect();
    }

    // Define los valores que se proporcionarán en el contexto
    const values = {
        user,
        setUser,
        authTokens,
        setAuthTokens,
        loginUser,
        registerUser,
        logoutUser
    }

    // Renderiza el contexto con los valores proporcionados y los componentes hijos
    return (
        <AuthContext.Provider value={values}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
}

// Hook personalizado para consumir el contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext);
}
