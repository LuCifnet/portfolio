"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference on mount
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Toggle dark mode and save to localStorage
  function toggleDarkMode() {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  }

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 right-0 w-full md:w-auto z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-end items-center h-16 gap-6">
        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname === link.href.replace("/", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-gray-300 font-semibold transition-colors duration-300 hover:text-purple-400 ${
                  isActive ? "text-purple-400" : ""
                }`}
              >
                {link.name}
                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-purple-400 transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                />
              </Link>
            );
          })}
        </div>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="text-gray-300 hover:text-purple-400 transition focus:outline-none"
        >
          {darkMode ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white rounded"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white rounded"
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, x: "100%" }}
            animate={{ height: "auto", opacity: 1, x: 0 }}
            exit={{ height: 0, opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 right-0 w-3/4 max-w-xs bg-black/90 dark:bg-gray-900/90 backdrop-blur-md rounded-l-lg shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 font-semibold text-lg hover:text-purple-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
              {/* Dark mode toggle inside mobile menu */}
              <button
                onClick={() => {
                  toggleDarkMode();
                  setIsOpen(false);
                }}
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 font-semibold"
              >
                {darkMode ? (
                  <>
                    <SunIcon className="w-6 h-6" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <MoonIcon className="w-6 h-6" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
