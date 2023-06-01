import React from 'react'
import viteLogo from '/vite.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex justify-between px-4 py-4 shadow-md md:px-8">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) => isActive && 'text-blue-700 underline'}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && 'text-blue-700 underline'}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && 'text-blue-700 underline'}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          Sign In
        </li>
      </ul>
    </header>
  )
}
