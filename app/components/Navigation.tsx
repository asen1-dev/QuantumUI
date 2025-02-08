"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Github, Youtube } from "lucide-react"
import { Discord } from "../components/Icons"
import Logo from "./Logo"

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full ${isScrolled ? "bg-black/80" : "bg-transparent"} backdrop-blur-xl border-b border-white/10 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              href="/"
              className="text-base font-medium text-gray-300 hover:text-white mx-3 transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <div className="relative">
              <button
                type="button"
                className="text-gray-300 group bg-black rounded-md inline-flex items-center text-base font-medium hover:text-white focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Products</span>
                <ChevronDown
                  className={`ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition-transform duration-150 ease-in-out ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-black px-5 py-6 sm:gap-8 sm:p-8">
                      <Link
                        href="/components"
                        className="flex items-start rounded-lg hover:bg-gray-900 transition ease-in-out duration-150"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-white">Components</p>
                          <p className="mt-1 text-sm text-gray-400">Explore our library of customizable components</p>
                        </div>
                      </Link>
                      <Link
                        href="/templates"
                        className="flex items-start rounded-lg hover:bg-gray-900 transition ease-in-out duration-150"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-white">Templates</p>
                          <p className="mt-1 text-sm text-gray-400">Ready-to-use templates for quick development</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/docs"
              className="text-base font-medium text-gray-300 hover:text-white mx-3 transition duration-150 ease-in-out"
            >
              Docs
            </Link>
            <div className="hidden lg:flex items-center ml-4 space-x-4">
              <a href="https://discord.gg/quantumui" className="text-gray-400 hover:text-white transition-colors">
                <Discord className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/quantumui/quantumui"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/quantumui" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <Link
              href="/get-started"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              Get Started
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-900">
            Home
          </Link>
          <Link
            href="/products"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
          >
            Products
          </Link>
          <Link
            href="/docs"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-white"
          >
            Docs
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center justify-center space-x-4">
            <a href="https://discord.gg/quantumui" className="text-gray-400 hover:text-white transition-colors">
              <Discord className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/quantumui/quantumui"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.youtube.com/quantumui" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

