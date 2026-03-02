"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Code,
  Building2,
  Rocket,
  Monitor,
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Settings,
  Mail,
} from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Ana Sayfa", href: "/", icon: Home },
    { name: "Hakkımda", href: "/about", icon: User },
    { name: "Projeler", href: "/projects", icon: Briefcase },
    { name: "Yetenekler", href: "/skills", icon: Settings },
    { name: "İletişim", href: "/contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10 glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-lg glass-card border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-lg opacity-0 group-hover:opacity-75 blur transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">Future Architect</h1>
                <p className="text-xs text-gray-400">Barış Can Daşcı</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  <span className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg glass-card border border-white/10 hover:border-cyan-400 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 glass-card animate-fadeIn">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-lg hover:bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-cyan-400" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gradient mb-4">Future Architect</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Geleceği kodla inşa ediyoruz. Bilgisayar Mühendisliği öğrencisi olarak
                teknoloji ve tasarımın kesişiminde yenilikçi çözümler üretiyorum.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Hızlı Erişim</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">İletişim</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📍 Karabük Üniversitesi</p>
                <p>📧 bariscan.dasci@ogr.karabuk.edu.tr</p>
                <p>🔗 LinkedIn | GitHub</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2026 Barış Can Daşcı. Tüm hakları saklıdır. Made with ❤️ and Next.js
          </div>
        </div>
      </footer>
    </div>
  );
}