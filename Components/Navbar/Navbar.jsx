import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

      <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between ">
      <div className="font-bold text-lg">
        <Link to="/">Logo</Link>
      </div>

      <div className="flex space-x-6">
        <Link
          to="/"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Shop
        </Link>
        <Link
          to="/about"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          About
        </Link>
      </div>

      <div>
        <Link
          to="/cart"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Cart
        </Link>
      </div>
    </nav>
  )
}
