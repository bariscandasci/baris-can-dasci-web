"use client";

import Link from "next/link";
import {
  User,
  GraduationCap,
  Target,
  Code,
  Rocket,
  Building2,
  Brain,
  Globe,
  ShieldCheck,
  Award,
  ExternalLink,
  Satellite,
  Database,
  Monitor,
} from "lucide-react";

export default function About() {
  const manifestoPoints = [
    {
      icon: Target,
      title: 'Vizyonum',
      description: 'Bilgisayar Mühendisliği ve mimari estetiği bir arada',
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Code,
      title: 'Mühendislik Yaklaşımım',
      description: 'Temiz, okunabilir ve sürdürülebilir kod yapıları oluşturuyorum. Her satır bir bina taşı gibi sağlam ve amaçlı.',
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: Brain,
      title: 'Öğrenme Felsefem',
      description: 'Ölçeklenebilir ve esnek sistem mimarileri geliştiriyorum. Her yapı gibi uzun ömürlü ve güçlü çözümler.',
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Building2,
      title: 'Sistem Yaklaşımım',
      description: 'Kullanıcı odaklı ve estetik açıdan etkileyici arayüzler tasarlıyorum. Teknoloji ve sanatın buluşma noktası.',
      color: "from-cyan-400 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3 bg-black/30 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 glass-card">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-300">Hakkımda</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="block">Hakkımda</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Karabük Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Hazırlık eğitimimin hemen ardından Amerika'da Work and Travel programına katılarak global bir bakış açısı kazandım. Karabük'e döndüğümde, bu vizyonu yerel bir üretim gücüne dönüştürmek için kendi teknoloji kulübümü kurdum. Şu anda ekibimle birlikte aktif olarak Teknofest projeleri üzerine çalışıyor, mühendislik disiplinini liderlik ve inovasyonla harmanlıyorum.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects" className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-300 text-center">
                  Projeler
                </Link>
                <Link href="/contact" className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-center">
                  İletişim
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card border border-white/10 bg-white/5 p-8 relative rounded-3xl">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400/20 rounded-lg blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-lg blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Karabük Üniversitesi</h3>
                    <p className="text-cyan-400 mb-4 font-medium uppercase tracking-wider text-sm">Bilgisayar Mühendisliği</p>
                    <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/10 pt-4">
                      <div className="text-left">
                        <span className="text-gray-500 block">Eğitim</span>
                        <p className="text-white font-medium">Bilgisayar Mühendisliği</p>
                      </div>
                      <div className="text-left">
                        <span className="text-gray-500 block">2. Sınıf</span>
                        <p className="text-white font-medium">2. Sınıf</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Yeteneklerim</h2>
            <p className="text-gray-400 text-lg">Mühendislik ve Teknoloji Becerileri</p>
          </div>

          <div className="space-y-12">
            {/* Programming Languages */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Programlama Dilleri</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">C</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">Java</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">Python</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">JavaScript</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">SQL</span>
              </div>
            </div>

            {/* Web Development */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Web Geliştirme</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">HTML</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">CSS</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">Next.js</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">Node.js</span>
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Veri Tabanları</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">Firebase</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">MongoDB</span>
              </div>
            </div>

            {/* System & Infrastructure */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Sistem & Altyapı</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">Git</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">Linux</span>
              </div>
            </div>

            {/* AI & Data Science */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Yapay Zeka & Veri Bilimi</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">Machine Learning</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">Data Analysis</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">Python Libraries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900/50 to-slate-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Eğitim & Liderlik</h2>
            <p className="text-gray-400 text-lg">Dijital Sistem Mimarı</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              {/* Education */}
              <div className="border-l-2 border-cyan-400/30 pl-6">
                <h3 className="text-xl font-bold text-white mb-2">Eğitim</h3>
                <div className="space-y-2">
                  <div className="text-cyan-400 font-medium">Karabük Üniversitesi | Bilgisayar Mühendisliği, 2. Sınıf</div>
                  <div className="text-gray-400 text-sm">Dijital Sistem Mimarı</div>
                </div>
              </div>

              {/* Experience & Leadership */}
              <div className="border-l-2 border-indigo-400/30 pl-6">
                <h3 className="text-xl font-bold text-white mb-2">Deneyim & Liderlik</h3>
                <div className="space-y-2">
                  <div className="text-gray-300">Teknoloji Kulübü Kurucusu</div>
                  <div className="text-gray-300">Teknofest Ekip Kaptanı</div>
                </div>
              </div>

              {/* Foreign Language */}
              <div className="border-l-2 border-purple-400/30 pl-6">
                <h3 className="text-xl font-bold text-white mb-2">Yabancı Dil</h3>
                <div className="text-gray-300">İngilizce: Orta Seviye (B1/B2)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projeler</h2>
            <p className="text-gray-400 text-lg">Liderlik ve Koordinasyon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card border grid-line hover:border-cyan-400 transition-all duration-300 group text-center">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Satellite className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hicaz Hyperloop</h3>
                <p className="text-gray-400 text-sm">Yüksek hızlı tren sistemleri üzerine araştırma ve geliştirme projesi</p>
              </div>
            </div>

            <div className="glass-card border grid-line hover:border-indigo-400 transition-all duration-300 group text-center">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">PUHU Uydu Projesi</h3>
                <p className="text-gray-400 text-sm">Uzay araştırmaları ve uydu teknolojileri üzerine proje</p>
              </div>
            </div>

            <div className="glass-card border grid-line hover:border-purple-400 transition-all duration-300 group text-center">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Projeler</h3>
                <p className="text-gray-400 text-sm">Liderlik ve Koordinasyon</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/projects" 
              className="btn-primary inline-flex items-center space-x-3"
            >
              <span>Projeler</span>
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
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
