import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Register = () => {

    const navigate = useNavigate();

    // Obtiene los valores del contexto de autenticación utilizando el hook useAuth
    const { user, authTokens, registerUser, loginUser, logoutUser } = useAuth();

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const handleRegister = (e) => {
        e.preventDefault();
        registerUser(email, username, password, password2, () => { navigate("/login") });
    };

    return (
        <div className="font-sans leading-normal tracking-normal">
            <section className=" py-10 flex justify-center items-center">
                <div className="bg-white p-8 w-96 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold mb-4">Register</h2>
                    <form onSubmit={handleRegister} action="#" method="POST">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirm_password" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                            <input value={password2} onChange={(e) => { setPassword2(e.target.value) }} type="password" id="confirm_password" name="confirm_password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600" required />
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700">Register</button>
                        </div>
                    </form>
                    <p className="text-gray-600 text-sm">Already have an account? <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800">Login here</a>.</p>
                </div>
            </section>

        </div>
    )
}

export default Register