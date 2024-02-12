import React from 'react'
import { useAuth } from '../context/authContext'

const Dashboard = () => {

    const { user } = useAuth();

    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">


            <header className="bg-gradient-to-r from-purple-500 to-indigo-600 border-b border-gray-200">
                <div className="container mx-auto px-4 py-5 flex justify-between items-center">
                    <h1 className="text-3xl font-semibold text-white">¡Bienvenido/a, {user.username}!</h1>

                </div>
            </header>


            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-12 gap-4">


                    <aside className="col-span-3 bg-gray-800 p-4">
                        <nav>
                            <ul>
                                <li><a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">Dashboard</a></li>
                                <li><a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">Users</a></li>
                                <li><a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">Settings</a></li>
                                <li><a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">Analytics</a></li>
                                <li><a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">Reports</a></li>
                                <li><a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">Messages</a></li>
                            </ul>
                        </nav>
                    </aside>


                    <div className="col-span-9 bg-white p-4">
                        <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>

                        <p className="text-gray-700">Welcome to the vibrant dashboard! This is a visually appealing example of a dashboard interface using Tailwind CSS.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dashboard