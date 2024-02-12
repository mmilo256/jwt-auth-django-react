import React from 'react'

const Landing = () => {
    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">


            <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-semibold mb-4">Welcome to Our Vibrant Landing Page</h1>
                    <p className="text-xl mb-8">A visually stunning landing page designed with Tailwind CSS.</p>
                    <a href="#" className="inline-block bg-white text-indigo-600 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-600 hover:text-white">Get Started</a>
                </div>
            </section>


            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum lorem et erat ultricies, sit amet blandit risus gravida.</p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum lorem et erat ultricies, sit amet blandit risus gravida.</p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum lorem et erat ultricies, sit amet blandit risus gravida.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-8">Ready to Get Started?</h2>
                    <p className="text-xl mb-8">Sign up now to unlock all the amazing features!</p>
                    <a href="#" className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 hover:text-white">Sign Up</a>
                </div>
            </section>


            <footer className="bg-gray-800 text-white py-10">
                <div className="container mx-auto px-4">
                    <p className="text-center">&copy; 2024 Vibrant Landing. All rights reserved.</p>
                </div>
            </footer>

        </div>
    )
}

export default Landing