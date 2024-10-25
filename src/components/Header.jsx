import { useState } from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white p-4 fixed top-0 w-full z-20 scroll-auto">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg md:text-xl text-cyan-500 font-bold">
          <a href="/">
            BINYTE
          </a>
        </h1>
        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm md:text-base">
            <li>
              <Link to="/" className="hover:text-cyan-500 transition">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-cyan-500 transition">
                ABOUT US
              </Link>
            </li>
            <li>
              <a href="/services" className="hover:text-cyan-500 transition">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-500 transition">
                BLOG
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-cyan-500 transition">
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-slate-200 text-black text-sm py-2 px-4 rounded-full font-semibold hover:bg-slate-300 transition hidden md:block">
          GET IN TOUCH
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-4 mt-4 text-center text-base">
            <li>
              <a href="/#" className="hover:text-blue-300 transition">
                HOME
              </a>
            </li>
            <li>
              <a href="/#about " className="hover:text-blue-300 transition">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="/#services" className="hover:text-blue-300 transition">
                SERVICES
              </a>
            </li>
            <li>
              <a href="/#" className="hover:text-blue-300 transition">
                BLOG
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-blue-300 transition">
                CONTACT US
              </a>
            </li>
            <li>
              <button className="bg-slate-200 text-black text-sm py-2 px-4 rounded-full font-semibold hover:bg-slate-300 transition">
                GET IN TOUCH
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
