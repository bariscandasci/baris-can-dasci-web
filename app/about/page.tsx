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
} from "lucide-react";

export default function About() {
  const manifestoPoints = [
    {
      icon: Target,
      title: "Vizyonum",
      description: "Teknoloji ve sistem mimarisinin kesişiminde yenilikçi çözümler üretmek. Benim için her kod satırı bir bina taşı gibi sağlam ve amaçlı olmalıdır.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Code,
      title: "Mühendislik Felsefem",
      description: "Temiz, okunabilir ve sürdürülebilir kod yapıları inşa etmek. Karmaşık problemleri basit, etkili ve ölçeklenebilir çözümlerle aşmaya odaklanıyorum.",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: Brain,
      title: "Öğrenme Yaklaşımım",
      description: "Sürekli gelişen bir zihniyetle, özellikle Next.js ve Python ekosistemindeki yenilikleri keşfetmek ve projelerime entegre etmek için her zaman meraklıyım.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Building2,
      title: "Sistem Anlayışım",
      description: "Ölçeklenebilir ve esnek sistem mimarileri tasarlamak. Hyperloop ve uydu teknolojileri gibi yüksek mühendislik gerektiren alanlarda güçlü çözümler üretiyorum.",
      color: "from-cyan-400 to-indigo-500"
    }
  ];

  const education = {
    university: "Karabük Üniversitesi",
    faculty: "Mühendislik Fakültesi",
    department: "Bilgisayar Mühendisliği",
    year: "2. Sınıf",
    gpa: "3.2/4.0"
  };

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
                  <span className="text-sm font-medium text-gray-300">Kişisel Vizyon</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="block">Geleceğin</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 block">Mimarisine Doğru</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Karabük Üniversitesi'nde bir mühendis adayı olarak, yazılım dünyasını 
                mimari bir disiplinle ele alıyorum. Teknofest ve Hyperloop projelerimle 
                teorik bilgiyi sahada somut başarılara dönüştürüyorum.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects" className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-300 text-center">
                  Projelerimi Keşfedin
                </Link>
                <Link href="/contact" className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-center">
                  İletişime Geçin
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
                    <h3 className="text-2xl font-bold text-white mb-2">Barış Can Daşcı</h3>
                    <p className="text-cyan-400 mb-4 font-medium uppercase tracking-wider text-sm">Bilgisayar Mühendisi Adayı</p>
                    <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/10 pt-4">
                      <div className="text-left">
                        <span className="text-gray-500 block">Üniversite</span>
                        <p className="text-white font-medium">Karabük Üni.</p>
                      </div>
                      <div className="text-left">
                        <span className="text-gray-500 block">Deneyim</span>
                        <p className="text-white font-medium">Teknofest Kaptanı</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mühendislik Manifestom</h2>
            <p className="text-gray-400 text-lg">Yaklaşımımı ve çalışma prensiplerimi tanımlayan temel ilkelerim</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {manifestoPoints.map((point, index) => (
              <div key={index} className="glass-card border border-white/10 bg-white/5 p-8 hover:border-cyan-400/50 transition-all duration-300 group rounded-3xl">
                <div className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <point.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{point.title}</h3>
                <p className="text-gray-400 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Eğitim ve Topluluk</h2>
            <p className="text-gray-400 text-lg">Akademik yolculuğum ve sosyal sorumluluklarım</p>
          </div>

          <div className="glass-card border border-white/10 bg-white/5 p-8 md:p-12 rounded-[2.5rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{education.university}</h3>
                <p className="text-cyan-400 font-medium mb-2">{education.faculty}</p>
                <p className="text-gray-400 mb-6">{education.department}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-full border border-cyan-500/20 font-bold">
                    {education.year}
                  </span>
                  <span className="text-gray-400 font-mono">GPA: {education.gpa}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                  <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-purple-400" /> GEPTEK Üyeliğim
                  </h4>
                  <p className="text-gray-400 text-sm italic">Gelişim Proje ve Teknoloji Kulübü bünyesinde aktif rol alıyorum.</p>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                  <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-cyan-400" /> Dil Hedefim
                  </h4>
                  <p className="text-gray-400 text-sm">Global projeler için İngilizce yetkinliğimi C1/C2 seviyesine taşımaya odaklanıyorum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Öne Çıkan Başarılar</h2>
            <p className="text-gray-400 text-lg">Profesyonel gelişimimin somut kanıtları</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card border grid-line hover:border-cyan-400 transition-all duration-300 group text-center">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Satellite className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Teknofest: Mobil Uydu Yer Terminali</h3>
                <p className="text-gray-400 text-sm">Ekip Kaptanı • 2024</p>
              </div>
            </div>

            <div className="glass-card border grid-line hover:border-indigo-400 transition-all duration-300 group text-center">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Kampüs Hub</h3>
                <p className="text-gray-400 text-sm">Next.js • 2024</p>
              </div>
            </div>

            <div className="glass-card border grid-line hover:border-purple-400 transition-all duration-300 group text-center">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mali Günlük (Financial Diary)</h3>
                <p className="text-gray-400 text-sm">Java Swing • 2023</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/projects" 
              className="btn-primary inline-flex items-center space-x-3"
            >
              <span>Tüm Projelerimi Gör</span>
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
              Geleceğin Mimarları ile Çalışmaya Hazır mısınız?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Yenilikçi projeleriniz için teknik uzmanlık ve yaratıcı vizyonu birleştiren
              bir ortak arıyorsanız, doğru adrestesiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                İletişime Geçin
              </Link>
              <Link href="/projects" className="btn-secondary">
                Projelerimi İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}