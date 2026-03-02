"use client";

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Code, Rocket, Award } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Barış Can Daşcı</h1>
              <p className="text-xs text-gray-400">Bilgisayar Mühendisi</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Ana Sayfa
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Hakkımda
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Projeler
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              İletişim
            </Link>
            <Link 
              href="/certificates" 
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Sertifikalarım
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10">
            <div className="px-4 py-4 space-y-4">
              <Link 
                href="/" 
                className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Hakkımda
              </Link>
              <Link 
                href="/projects" 
                className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Projeler
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                İletişim
              </Link>
              <Link 
                href="/skills"
                className="block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Yeteneklerim
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}