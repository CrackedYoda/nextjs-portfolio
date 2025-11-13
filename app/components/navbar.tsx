"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icon library

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white font-main px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold text-purple-800 hover:text-purple-600 transition-colors"
      >
        Nelson Akalia
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-gray-300">
        <li>
          <Link href="/" className="hover:text-purple-500 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="hover:text-purple-500 transition-colors"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/career"
            className="hover:text-purple-500 transition-colors"
          >
            Career
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-purple-500 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-300 hover:text-purple-500 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-300">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-purple-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="hover:text-purple-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/career"
                onClick={() => setIsOpen(false)}
                className="hover:text-purple-500"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-purple-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
