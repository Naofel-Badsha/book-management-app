import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaMap, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">MY-SHOP</h2>
            <p className="text-gray-400 leading-relaxed">
              Apnar priyo shob product niye amra achi apnar pashe. Quality ebong
              bhoroshai amader primority.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-700 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-white transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaMap size={18} className="text-blue-500" />
                <span>123 Street, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone size={18} className="text-blue-500" />
                <span>+880 1234 567890</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMailBulk size={18} className="text-blue-500" />
                <span>support@myshop.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MY-SHOP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
