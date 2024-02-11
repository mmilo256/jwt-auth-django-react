import { useAuth } from '../context/authContext';  // Importa el hook useAuth desde el contexto de autenticación

// Componente funcional AuthTest que utiliza el contexto de autenticación
const AuthTest = () => {
    // Obtiene los valores del contexto de autenticación utilizando el hook useAuth
    const { user, authTokens, registerUser, loginUser, logoutUser } = useAuth();

    // Define un estilo CSS para los botones
    const styles = "bg-slate-300 hover:bg-slate-400 py-2 px-4";

    // Función para manejar el inicio de sesión del usuario
    const handleLogin = () => {
        const data = {
            email: "c@c.cl",
            password: "abab1212"
        };
        loginUser(data.email, data.password);
    };

    // Función para manejar el registro de un nuevo usuario
    const handleRegister = () => {
        const data = {
            email: "c@c.cl",
            username: "c",
            password: "abab1212",
            password2: "abab1212"
        };
        registerUser(data.email, data.username, data.password, data.password2);
    };

    // Función para manejar el cierre de sesión del usuario
    const handleLogout = () => {
        logoutUser();
    };

    // Renderiza el componente con los botones para iniciar sesión, registrarse o cerrar sesión, y mostrar información de usuario y tokens
    return (
        <div className="flex gap-4 m-4">
            {
                // Renderiza botones para iniciar sesión o registrarse si no hay tokens de autenticación disponibles, de lo contrario, renderiza un botón para cerrar sesión
                !authTokens
                    ? <>
                        <button onClick={handleRegister} className={styles}>Registrarse</button>
                        <button onClick={handleLogin} className={styles}>Iniciar sesión</button>
                    </>
                    : <button onClick={handleLogout} className={styles}>Cerrar sesión</button>
            }
            {/* Botón para mostrar los tokens de autenticación en la consola */}
            <button onClick={() => { console.log(authTokens) }} className={styles}>Mostrar Tokens</button>
            {/* Botón para mostrar los datos de usuario en la consola */}
            <button onClick={() => { console.log(user) }} className={styles}>Mostrar datos de usuario</button>
        </div>
    );
};

export default AuthTest;  // Exporta el componente AuthTest
