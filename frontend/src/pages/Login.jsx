import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { loginUser } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        loginUser(email, password, () => { navigate("/dashboard") })

    };

    return (
        <div className="font-sans leading-normal tracking-normal">
            <section className=" py-40 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold mb-4">Login</h2>
                    <form onSubmit={handleLogin} method="POST">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600" required />
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700">Login</button>
                        </div>
                    </form>
                    <p className="text-gray-600 text-sm">Don't have an account? <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800">Sign up here</a>.</p>
                </div>
            </section>

        </div>
    )
}

export default Login