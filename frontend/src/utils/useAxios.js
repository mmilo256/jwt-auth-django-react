import axios from 'axios';  // Importa axios para realizar solicitudes HTTP
import { jwtDecode } from 'jwt-decode';  // Importa jwtDecode de la librería jwt-decode para decodificar tokens JWT
import dayjs from 'dayjs';  // Importa dayjs para trabajar con fechas y tiempos
import { useAuth } from '../context/authContext';  // Importa el hook useAuth desde el contexto de autenticación

const baseURL = 'http://localhost:8000/api/';  // Define la URL base para las solicitudes a la API

// Hook personalizado useAxios para crear una instancia de axios con configuraciones adicionales
export const useAxios = () => {
    // Obtiene los valores del contexto de autenticación utilizando el hook useAuth
    const { authTokens, setUser, setAuthTokens } = useAuth();

    // Crea una instancia de axios con la URL base y las cabeceras de autorización
    const api = axios.create({
        baseURL,
        headers: { Authorization: `Bearer ${authTokens?.access}` }
    });

    // Interceptor de solicitud para manejar la actualización de tokens de forma automática
    api.interceptors.request.use(async request => {
        // Decodifica el token de acceso para obtener información sobre su expiración
        const user = jwtDecode(authTokens.access);
        // Verifica si el token de acceso ha expirado comparando su fecha de expiración con la fecha y hora actuales
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        // Si el token de acceso no ha expirado, continua con la solicitud original
        if (!isExpired) {
            return request;
        }

        // Si el token de acceso ha expirado, solicita un nuevo token de actualización al servidor
        const response = await axios.post(`${baseURL}/token/refresh/`, {
            refresh: authTokens.refresh
        });

        // Almacena los nuevos tokens en el almacenamiento local y actualiza los tokens de autenticación y el usuario en el contexto
        localStorage.setItem("authTokens", JSON.stringify(response.data));
        setAuthTokens(response.data);
        setUser(jwtDecode(response.data.access));

        // Actualiza la cabecera de autorización en la solicitud original con el nuevo token de acceso
        request.headers.Authorization = `Bearer ${response.data.access}`;

        return request;
    });

    return api;  // Retorna la instancia de axios con los interceptores configurados
};
