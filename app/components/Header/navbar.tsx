'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white ">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-8">
        <a href="/" className="flex items-center ">
          <Image
            src="/slang..svg"
            alt="slang"
            width={168}
            height={40}
            priority
          />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:justify-center md:space-x-8">
          <ul className="font-normal flex justify-between p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <a href="/" className="text-[#414659] hover:text-[#555555]" aria-current="page">Features</a>
            </li>
            <li>
              <a href="/#LandingFour" className="text-[#414659] hover:text-[#555555]">About Us</a>
            </li>
            <li>
              <a href="/#LandingFivePage" className="text-[#414659] hover:text-[#555555]">Article</a>
            </li>
            <li>
              <a href="/#LandingSix" className="text-[#414659] hover:text-[#555555]">POTD</a>
            </li>
            <li>
              <a href="/tentang-kami" className="text-[#414659] hover:text-[#555555]">Contact</a>
            </li>
          </ul>
        </div>

        {/* Hamburger menu button */}
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="md:hidden block p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
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
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden w-full`} id="mobile-menu">
          <ul className="font-normal flex flex-col justify-center items-center p-4 md:p-0 space-y-4 max-w-md">
            <li>
              <a href="/" className="block py-2 px-3 text-[#414659] hover:text-[#555555]" aria-current="page">Features</a>
            </li>
            <li>
              <a href="/#LandingFour" className="block py-2 px-3 text-[#414659] hover:text-[#555555]">About Us</a>
            </li>
            <li>
              <a href="/#LandingFivePage" className="block py-2 px-3 text-[#414659] hover:text-[#555555]">Article</a>
            </li>
            <li>
              <a href="/#LandingSix" className="block py-2 px-3 text-[#414659] hover:text-[#555555]">POTD</a>
            </li>
            <li>
              <a href="/tentang-kami" className="block py-2 px-3 text-[#414659] hover:text-[#555555]">Contact</a>
            </li>
          </ul>
        </div>

        <button className='hidden md:block bg-[#2B59FF] w-[121px] h-[50px] rounded-[10px] text-white'>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
