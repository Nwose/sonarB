"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Image
              src="/logo.png"
              alt="SonarB Tech"
              width={150}
              height={50}
              className="mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              At SonarB Tech Institute, we boast expertise in advanced
              technological instruction, fostering an inclusive learning
              environment, and providing comprehensive career guidance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["about", "courses", "events", "blog"].map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/${slug}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {slug.charAt(0).toUpperCase() + slug.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>info@sonarbtech.com</li>
              <li>+1 (555) 123-4567</li>
              <li>
                123 Tech Street
                <br />
                Innovation City, IC 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom with Top Border */}
        <div className="border-t border-gray-500 mt-12 pt-6 text-center text-gray-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} SonarB Tech Institute. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
