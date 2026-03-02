import Link from 'next/link'
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const activeSocialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/bariscandasci',
      icon: Github,
      active: true,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bar%C4%B1%C5%9F-can-da%C5%9Fci-809541340/',
      icon: Linkedin,
      active: true,
    },
  ]

  const passiveSocialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      active: false,
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      active: false,
    },
  ]

  const quickLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımda', href: '/about' },
    { name: 'Projeler', href: '/projects' },
    { name: 'Sertifikalar', href: '/certificates' },
    { name: 'İletişim', href: '/contact' },
  ]

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Barış Can Daşcı</h3>
              <p className="text-gray-400 text-sm">Bilgisayar Mühendisi Adayı</p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Tüm hakları saklıdır.
              </p>
            </div>
          </div>

          {/* Center Column - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Sosyal Medya</h4>
            <div className="flex space-x-4">
              {/* Active Social Links */}
              {activeSocialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
              
              {/* Passive Social Links with Hover Tooltips */}
              {passiveSocialLinks.map((social) => (
                <div
                  key={social.name}
                  className="relative group"
                >
                  <div className="text-gray-500 opacity-50 cursor-not-allowed p-2 rounded-lg hover:bg-white/5 transition-colors duration-300">
                    <social.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Hover Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white text-black text-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none whitespace-nowrap">
                    Çok yakında bu platformlarda da birlikte olacağız!
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-gray-500 text-sm">
              <p>İnovasyon ve teknolojiye tutkuyla bağlı bir mühendis adayı.</p>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              Karabük Üniversitesi • Bilgisayar Mühendisliği
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}