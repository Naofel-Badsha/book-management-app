import React from 'react'
import { useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { LiaTimesSolid } from 'react-icons/lia';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Shop', to: '/shop' },
    { name: 'About', to: '/about' },
    { name: 'Blogs', to: '/blogs' },
    { name: 'Contact', to: '/contact' },
  ];
  return (
    <nav className="bg-white shadow-sm w-full z-50 sticky top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/*----------------Logo Section--------------------*/}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">MY-SHOP</Link>
          </div>

          {/*--------------Desktop Menu---------------*/}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to} 
                className={({ isActive }) =>
                  `font-medium transition-colors ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/login">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 cursor-pointer transition-all">
                Login
              </button>
            </Link>
          </div>

          {/*---------------Mobile Button Section-------------------*/}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none cursor-pointer"
            >
              {isOpen ? <LiaTimesSolid size={28} /> : <HiBars3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/*--------------Mobile Menu (Dropdown)-----------------*/}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 md:hidden z-50">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to} // <--- Eikhane-o 'to' hobe
                onClick={() => setIsOpen(false)} // Link click korle menu bondho hobe
                className={({ isActive }) =>
                  `block px-3 py-3 text-base font-medium rounded-md ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full text-center mt-4 bg-blue-600 text-white py-3 rounded-lg font-medium">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar