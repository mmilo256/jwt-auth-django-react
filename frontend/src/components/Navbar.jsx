import { Link } from 'react-router-dom'
import AuthTest from './AuthTest'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white p-2'>
            <div className='flex gap-4'>
                <Link to="/">Inicio</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/login">Sign In</Link>
                <Link to="/register">Register</Link>
            </div>
            <AuthTest />
        </nav>
    )
}

export default Navbar