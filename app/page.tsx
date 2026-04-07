"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Monitor,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-black/30 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 glass-card">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">Şu anda çevrimiçi</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="/resimler/baris.jpeg"
                alt="Barış Can Daşcı"
                fill
                className="rounded-full object-cover border-4 border-white/20 shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 blur-xl"></div>
            </div>
            <div className="text-left md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                <span className="block">Barış Can</span>
                <span className="text-gradient block">Daşcı</span>
              </h1>
              <p className="text-cyan-400 text-lg font-medium">Bilgisayar Mühendisi</p>
              <p className="text-xs font-mono text-gray-500 mt-1">i am {'>'} i was</p>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            "Geleceğin mimarisini bugünden kodluyorum. Karmaşık sistemleri basit çözümlere, fikirleri somut projelere dönüştürmek için buradayım."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/about" 
              className="btn-primary flex items-center space-x-3 group"
            >
              <span>Keşfet</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              href="/projects" 
              className="btn-secondary flex items-center space-x-3"
            >
              <Monitor className="w-5 h-5 text-cyan-400" />
              <span>Projeler</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hakkımda</h2>
            <p className="text-gray-400 text-lg">Bilgisayar Mühendisliği ve mimari estetiği bir arada</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 border grid-line hover:border-cyan-400 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Yetenekler</h3>
              <p className="text-gray-400 leading-relaxed">
                Temiz, okunabilir ve sürdürülebilir kod yapıları oluşturuyorum.
                Her satır bir bina taşı gibi sağlam ve amaçlı.
              </p>
            </div>

            <div className="glass-card p-8 border grid-line hover:border-indigo-400 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">İlgi Alanları</h3>
              <p className="text-gray-400 leading-relaxed">
                Ölçeklenebilir ve esnek sistem mimarileri geliştiriyorum.
                Her yapı gibi uzun ömürlü ve güçlü çözümler.
              </p>
            </div>

            <div className="glass-card p-8 border grid-line hover:border-purple-400 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Eğitim</h3>
              <p className="text-gray-400 leading-relaxed">
                Kullanıcı odaklı ve estetik açıdan etkileyici arayüzler tasarlıyorum.
                Teknoloji ve sanatın buluşma noktası.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-card border grid-line p-12 neon-glow-cyan">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              İletişim
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Her türlü soru ve iş birliği teklifleriniz için bana ulaşabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                İletişim
              </Link>
              <Link href="/projects" className="btn-secondary">
                Projeler
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
