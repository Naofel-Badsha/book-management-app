
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-[#0f172a] min-h-screen flex items-center justify-center p-8 text-white font-sans">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Content: Text & Search Bar */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#155DFC]">Welcome to Our Books</span>
            <span className="block text-white">— a haven for book lovers</span>
          </h1>

          <div className="relative max-w-md">
            <div className="flex items-center bg-[#1e293b] border border-gray-700 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-orange-500 transition-all">
              <div className="pl-4 text-gray-400">
                <FaSearch size={20} />
              </div>
              <input
                type="text"
                placeholder="Enter title"
                className="w-full bg-transparent py-3 px-4 outline-none text-sm text-gray-200 placeholder-gray-500"
              />
              <button className="bg-[#155DFC] hover:bg-[#0b41b6] text-white cursor-pointer font-bold py-2 px-6 rounded-full m-1 transition-colors uppercase text-xs tracking-wider">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Right Content: Image Card */}
        <div className="w-full h-full md:w-1/2 flex justify-center">
          <div className="relative group">
            {/* Rounded border box decoration (optional) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative rounded-[2rem] overflow-hidden border-4 border-gray-800 shadow-2xl">
              <img
                src="https://i.ibb.co.com/4R8B37ph/imageye-imgi-127-remember-welldesigned-book-cover-is-investment-success-your-book-so-take-time-1.webp"
                alt="Kinfolk Table Book"
                className="w-full h-auto  object-cover"
              />
            </div>
          </div>
        </div>

{/* https://i.ibb.co.com/4R8B37ph/imageye-imgi-127-remember-welldesigned-book-cover-is-investment-success-your-book-so-take-time-1.webp */}
      </div>
    </section>
  )
}

export default HeroSection

