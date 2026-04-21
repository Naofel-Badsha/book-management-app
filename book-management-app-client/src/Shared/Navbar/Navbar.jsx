import React from 'react'
import { useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { LiaTimesSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-600">MY-SHOP</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link to="/login">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Button Section */}
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

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 md:hidden z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <Link to="/login">
              <button className="w-full text-left px-3 py-2 text-base font-medium text-blue-600">
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