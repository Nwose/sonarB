"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Events", path: "/events" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isLight, setIsLight] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsLight(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 backdrop-blur-md border-b ${
        isLight
          ? "bg-white/30 border-gray-200 shadow-md"
          : "bg-[#ffffff1a] border-white/10 shadow-inner"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="SonarB Tech" width={40} height={40} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`relative pb-1 transition-colors duration-200 ${
                pathname === link.path
                  ? isLight
                    ? "text-[#020233] font-semibold border-b-2 border-[#020233]"
                    : "text-gray-900 font-semibold border-b-2 border-gray-900"
                  : isLight
                  ? "text-[#020233] hover:text-blue-700"
                  : "text-gray-900 hover:text-gray-900"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link href="/signup">
            <button
              className={`ml-4 px-4 py-2 rounded-lg font-semibold shadow transition duration-300 ${
                isLight
                  ? "bg-[#020233] text-white hover:bg-gray-700"
                  : "bg-gray-900 text-white hover:bg-gray-200"
              }`}
            >
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <FaTimes className="text-2xl text-gray-900" />
            ) : (
              <FaBars className="text-2xl text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className={`md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg z-40 transition-all duration-300`}
        >
          <div className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium ${
                  pathname === link.path
                    ? "text-[#020233] font-semibold"
                    : "text-gray-700 hover:text-[#020233]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/signup">
              <button className="w-full mt-4 px-4 py-2 rounded-lg font-semibold bg-[#020233] text-white hover:bg-gray-700">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
