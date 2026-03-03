"use client";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  User,
  AtSign,
  MessageSquare,
  Building2,
  Rocket
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "E-posta",
      detail: "bariscandasci1@gmail.com",
      link: "mailto:bariscandasci1@gmail.com",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Phone,
      title: "Telefon",
      detail: "+90 505 618 5680",
      link: "tel:+905056185680",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: MapPin,
      title: "Konum",
      detail: "Ankara / Karabük, Türkiye",
      link: "https://maps.google.com",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const activeSocialLinks = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      username: "bariscan-dasci",
      link: "https://www.linkedin.com/in/bar%C4%B1%C5%9F-can-da%C5%9Fci-809541340/",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Github,
      title: "GitHub",
      username: "@bariscandasci",
      link: "https://github.com/bariscandasci",
      color: "from-gray-400 to-gray-600"
    }
  ];

  const passiveSocialLinks = [
    {
      icon: Instagram,
      title: "Instagram",
      username: "@bariscan",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Twitter,
      title: "Twitter",
      username: "@bariscan_dasci",
      color: "from-sky-400 to-sky-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3 bg-black/30 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 glass-card">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-300">İletişim</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="block">Bağlantı</span>
                <span className="text-gradient block">Kurun</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Yenilikçi projeleriniz için teknik uzmanlık ve yaratıcı vizyonu birleştiren
                bir ortak arıyorsanız, doğru adrestesiniz. İletişim kurmak için çeşitli
                kanallar mevcuttur.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:bariscandasci1@gmail.com" className="btn-primary flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>E-posta Gönder</span>
                </a>
                <a href="#contact-form" className="btn-secondary">
                  İletişim Formu
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card border grid-line p-8 relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-lg opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg opacity-20 blur-xl"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-xl glass-card border border-white/20 flex items-center justify-center mb-6 mx-auto">
                    <Rocket className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Geleceğin Mimarları</h3>
                  <p className="text-gray-400 mb-6">İnovasyon ve teknolojinin buluşma noktası</p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <span className="text-white font-semibold">{info.title}</span>
                          <p className="text-gray-400 text-sm">{info.detail}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">İletişim Formu</h2>
            <p className="text-gray-400 text-lg">İş birliği teklifleriniz, sorularınız veya sadece merhaba demek için buradasınız</p>
          </div>

          <div className="glass-card border grid-line p-8">
            {/* Formspree Entegrasyonu Yapıldı */}
            <form 
              action="https://formspree.io/f/xqedoore" 
              method="POST" 
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Ad Soyad
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      required
                      className="block w-full pl-10 pr-3 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Adınızı girin"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-posta
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <AtSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      required
                      className="block w-full pl-10 pr-3 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="eposta@ornek.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Konu
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  className="block w-full px-3 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="Mesajınızın konusunu girin"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mesaj
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    required
                    className="block w-full pl-10 pr-3 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Mesajınızı buraya yazabilirsiniz..."
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn-primary flex items-center space-x-3 px-8 py-3"
                >
                  <Send className="w-5 h-5" />
                  <span>Mesajı Gönder</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sosyal Medya</h2>
            <p className="text-gray-400 text-lg">Profesyonel ağlarımızda takip edin</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeSocialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card border grid-line p-6 text-center group hover:border-cyan-400 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 neon-glow`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{social.title}</h3>
                <p className="text-gray-400 text-sm">{social.username}</p>
                <div className="mt-4 text-xs text-gray-500">Profil ziyareti →</div>
              </a>
            ))}
            
            {passiveSocialLinks.map((social, index) => (
              <div
                key={index}
                onClick={() => alert('Çok yakında bu platformlarda da birlikte olacağız!')}
                className="glass-card border grid-line p-6 text-center group hover:border-gray-500 transition-all duration-300 cursor-pointer opacity-50 grayscale"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 neon-glow`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{social.title}</h3>
                <p className="text-gray-400 text-sm">{social.username}</p>
                <div className="mt-4 text-xs text-gray-500">Yakında →</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-indigo-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-card border grid-line p-12 neon-glow-cyan">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Projeleriniz İçin Hazır mısınız?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Yenilikçi projeleriniz için teknik uzmanlık ve yaratıcı vizyonu birleştiren
              bir ortak arıyorsanız, doğru adrestesiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:bariscandasci1@gmail.com" className="btn-primary">
                E-posta Gönder
              </a>
              <a href="#contact-form" className="btn-secondary">
                İletişim Formu
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}