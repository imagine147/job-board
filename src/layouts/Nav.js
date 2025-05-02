"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from "next/image";
import Logo from "../icons/sutherland-logo-colour.webp";
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const closeMenubar = () => setMenuOpen(false);

  const openMenubar = () => {
    if (window.innerWidth <= 1024) {
      setMenuOpen(!menuOpen);
    }
  };

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const handleClickOutside = (event) => {
    if (navRef?.current && !navRef.current.contains(event.target)) {
      closeMenubar();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 w-full z-90 bg-white shadow-sm">
      <div className="container w-full  mx-auto flex justify-between items-center py-4 px-3 gap-5 lg:gap-10 cursor-pointer">
        <Link href="/" passHref>
          <Image src={Logo} alt="sutherland-logo" width={250} height={250} />
        </Link>

        <div className="flex items-center gap-5 lg:gap-10 cursor-pointer">
          <button className="md:hidden cursor-pointer" onClick={openMenubar}>
            {menuOpen ? (
              <IoCloseOutline className="w-[32px] h-[32px]" />
            ) : (
              <RxHamburgerMenu className="w-[32px] h-[32px]" />
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex pl-2 lg:pl-0">
            <ul className="flex gap-5 lg:gap-10 text-base">
              <li>
                <Link href="/" className="text-[#767779] hover:text-[#a30162]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#767779] hover:text-[#a30162]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#767779] hover:text-[#a30162]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#767779] hover:text-[#a30162]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-[#767779] hover:text-[#a30162]">
                  Carrers
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Nav */}
          <div
            ref={navRef}
            className={`absolute top-full right-0 w-full bg-white shadow-lg p-5 md:hidden flex flex-col gap-4 z-50 transition-all ${
              menuOpen ? 'block' : 'hidden'
            }`}
          >
            <nav className="flex flex-col gap-5">
              <Link href="/" passHref onClick={() => { handleSetActive('#about'); closeMenubar(); }}>
                <button className="w-full text-base text-start font-medium text-[#767779] hover:text-[#a30162] border-b border-[#767779] pb-4">
                  Home
                </button>
              </Link>
              <Link href="/about" passHref onClick={() => { handleSetActive('event'); closeMenubar(); }}>
                <button className="w-full text-base text-start font-medium text-[#767779] hover:text-[#a30162] border-b border-[#767779] pb-4">
                  About
                </button>
              </Link>
              <Link href="/faq" passHref onClick={() => { handleSetActive('pricing'); closeMenubar(); }}>
                <button className="w-full text-base text-start font-medium text-[#767779] hover:text-[#a30162] border-b border-[#767779] pb-4">
                  FAQ
                </button>
              </Link>
              <Link href="/services" passHref onClick={() => { handleSetActive('#faq'); closeMenubar(); }}>
                <button className="w-full text-base text-start font-medium text-[#767779] hover:text-[#a30162] border-b border-[#767779] pb-4">
                  Services
                </button>
              </Link>
              <Link href="/career" passHref onClick={() => { handleSetActive('contact'); closeMenubar(); }}>
                <button className="w-full text-base text-start font-medium text-[#767779] hover:text-[#a30162] border-b border-[#767779] pb-4">
                  Careers
                </button>
              </Link>

              <Link href="/booking" passHref onClick={() => { handleSetActive('contact'); closeMenubar(); }}>
                <button className="w-full text-base text-start font-medium text-[#767779] hover:text-[#a30162] border-b border-[#767779] pb-4">
                  Book Online
                </button>
              </Link>

              {/* <div className="w-full flex gap-3 cursor-pointer text-sm font-medium">
                <Link href="/auth/login" passHref className='w-full'>
                  <button className="w-full px-4 py-3 border border-[#A30162] text-[#A30162] bg-white rounded-xl">
                    Login
                  </button>
                </Link>
                <Link href="/auth/signup" passHref className='w-full'>
                  <button className="w-full px-4 py-3 rounded-xl bg-[#A30162] text-white">
                    Create Event
                  </button>
                </Link>
              </div> */}
            </nav>
          </div>
        </div>

        {/* Desktop Buttons */}
        {/* <div className="hidden md:flex gap-3 md:gap-5 cursor-pointer text-sm font-medium">
          <Link href="/auth/login" passHref>
            <button className="px-4 py-3 border border-[#A30162] text-[#A30162] bg-white rounded-xl">
              Login
            </button>
          </Link>
          <Link href="/auth/signup" passHref>
            <button className="px-4 py-3 rounded-xl bg-[#A30162] text-white">
              Sign Up
            </button>
          </Link>
        </div> */}
        <Link href="/booking" className="hidden md:block" >
        <button className="text-[#767779] hover:text-[#a30162] border border-gray-200 hover:border-[#a30162]  rounded-md px-3 py-2">
        Book Online
        </button>
      </Link>
      </div>
    </nav>
  );
}
