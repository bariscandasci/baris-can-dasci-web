"use client";

import Link from 'next/link'
import Image from 'next/image'
import { Award, ShieldCheck, ExternalLink, Brain, Code, Monitor, GraduationCap } from 'lucide-react'

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Kariyer Zirvesi '25",
      issuer: "Gaziantep İhracatçı Birlikleri",
      date: "2025",
      skills: [
        "Kariyer Planlama",
        "Sektörel Vizyon",
        "Profesyonel İletişim",
        "Gelecek Teknolojileri"
      ],
      verifyUrl: "/resimler/Kariyer Zirvesi'25.jpg",
      icon: GraduationCap,
      image: "/resimler/Kariyer Zirvesi'25.jpg"
    },
    {
      id: 2,
      title: "Yapay Zeka ve ChatGPT Uzmanlık",
      issuer: "Udemy",
      date: "2024",
      skills: [
        "Prompt Engineering",
        "LLM Entegrasyonu",
        "AI Destekli Geliştirme",
        "Verimlilik Araçları"
      ],
      verifyUrl: "/resimler/Yapay Zeka ve ChatGPT Uzmanlık Eğitimi Seti.jpg",
      icon: Brain,
      image: "/resimler/Yapay Zeka ve ChatGPT Uzmanlık Eğitimi Seti.jpg"
    },
    {
      id: 3,
      title: "Git ve GitHub ile Versiyon Kontrolü",
      issuer: "BTK Akademi",
      date: "2024",
      skills: [
        "Git İş Akışları",
        "Repository Yönetimi",
        "Collaboration",
        "Branching Stratejileri"
      ],
      verifyUrl: "/resimler/Versiyon Kontrolleri Git ve GitHub.jpg",
      icon: Code,
      image: "/resimler/Versiyon Kontrolleri Git ve GitHub.jpg"
    },
    {
      id: 4,
      title: "Adobe Animate ile Animasyon",
      issuer: "BTK Akademi",
      date: "2024",
      skills: [
        "2D Animasyon Temelleri",
        "Vektörel Çizim",
        "Karakter Tasarımı",
        "Dijital İçerik Üretimi"
      ],
      verifyUrl: "/resimler/Adobe animate ile animasyon.jpg",
      icon: Monitor,
      image: "/resimler/Adobe animate ile animasyon.jpg"
    },
    {
      id: 5,
      title: "Dış Ticarette Hatalar ve Çözümler",
      issuer: "Gaziantep İhracatçı Birlikleri",
      date: "2024",
      skills: [
        "Dış Ticaret Mevzuatı",
        "Problem Çözme",
        "Operasyonel Süreçler",
        "Çözüm Önerileri"
      ],
      verifyUrl: "/resimler/Dış ticarette yapılan hatalar ve çözüm önerileri.jpg",
      icon: ShieldCheck,
      image: "/resimler/Dış ticarette yapılan hatalar ve çözüm önerileri.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full px-6 py-3">
              <Award className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white">Sertifikalarım</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Yeteneklerimin
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 block">Dijital Kanıtları</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sürekli öğrenen bir mühendis adayı olarak, edindiğim bilgileri resmi belgelerle 
            teyit ediyorum. Bu sertifikalar, profesyonel gelişimimin ve uzmanlık alanlarımın 
            somut göstergeleridir.
          </p>
        </div>
      </section>

      {/* Certificates Grid Section */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="glass-card border border-white/10 bg-white/5 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  {/* Certificate Image with Badge */}
                  <div className="relative mb-8">
                    <Link href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                      <div className="relative rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        <Image
                          src={cert.image}
                          alt={`${cert.title} Sertifikası`}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                        {/* Overlaid Badge */}
                        <div className="absolute top-4 left-4 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl p-3 shadow-lg backdrop-blur-md border border-white/20">
                          <cert.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                    <p className="text-gray-400 font-medium">{cert.issuer}</p>
                    <p className="text-cyan-400 text-sm mt-1 font-mono tracking-wider">{cert.date}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm uppercase tracking-widest font-bold text-gray-500 mb-4">Kazanılan Yetkinlikler</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                    <Link
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-bold text-sm"
                    >
                      <span>Sertifikayı Tam Boyut Gör</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    
                    <ShieldCheck className="w-6 h-6 text-green-500/50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-white/5 border border-white/10 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
              Sürekli Gelişime İnanıyorum
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed relative z-10">
              Teknoloji dünyası her gün yenilenirken, ben de bu değişimin bir parçası olmak için 
              yeni eğitimler almaya ve yetkinliklerimi belgelemeye devam ediyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/contact" className="px-8 py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
                İş Birliği İçin İletişime Geçin
              </Link>
              <Link href="/projects" className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                Projelerimi İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}