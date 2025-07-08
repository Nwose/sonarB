"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsLight(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 backdrop-blur-md border-b ${
        isLight
          ? "bg-white/30 border-gray-200 shadow-md"
          : "bg-[#ffffff1a] border-white/10 shadow-inner"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-16 xl:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="SonarB Tech" width={40} height={40} />
        </Link>

        {/* Navigation Links */}
        <div className="ml-auto flex items-center space-x-6">
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

          {/* CTA Button */}
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
      </div>
    </nav>
  );
}
