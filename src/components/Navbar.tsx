import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    const linkClass = `text-white font-bold hover:underline`

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-around items-center">
                <li>
                    <Link to="/" className={linkClass}>Dashboard</Link>
                </li>
                <li>
                    <Link to="/transactions" className={linkClass}>Transactions</Link>
                </li>
                <li>
                    <Link to="/budget" className={linkClass}>Budget</Link>
                </li>
                <li>
                    <Link to="/categories" className={linkClass}>Categories</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
