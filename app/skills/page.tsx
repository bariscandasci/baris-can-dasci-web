import {
  Code,
  Database,
  Globe,
  Rocket,
  Brain,
  Settings,
  Server,
  GitBranch,
  Cloud,
  Palette,
  Network
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programlama Dilleri",
      icon: Code,
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "Java", level: 85, description: "Nesne yönelimli programlama ve enterprise uygulamalar" },
        { name: "Python", level: 90, description: "Veri analizi, yapay zeka ve otomasyon" },
        { name: "JavaScript", level: 95, description: "Modern web geliştirme ve Node.js" },
        { name: "TypeScript", level: 90, description: "Tip güvenli JavaScript geliştirme" },
        { name: "C/C++", level: 75, description: "Sistem programlama ve embedded sistemler" },
        { name: "SQL", level: 85, description: "Veritabanı yönetimi ve sorgulama" }
      ]
    },
    {
      title: "Web Geliştirme",
      icon: Globe,
      color: "from-indigo-400 to-purple-500",
      skills: [
        { name: "Next.js", level: 95, description: "Modern React framework ve SSR" },
        { name: "React", level: 90, description: "Component tabanlı UI geliştirme" },
        { name: "Tailwind CSS", level: 95, description: "Utility-first CSS framework" },
        { name: "Node.js", level: 85, description: "Server-side JavaScript geliştirme" },
        { name: "Express.js", level: 85, description: "Web API ve backend geliştirme" },
        { name: "RESTful APIs", level: 90, description: "API tasarımı ve geliştirme" }
      ]
    },
    {
      title: "Veri Tabanları",
      icon: Database,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "MongoDB", level: 85, description: "NoSQL veritabanı yönetimi" },
        { name: "PostgreSQL", level: 80, description: "İlişkisel veritabanı sistemleri" },
        { name: "Redis", level: 75, description: "Önbellekleme ve hızlı veri erişimi" },
        { name: "Firebase", level: 80, description: "Bulut tabanlı veritabanı ve analiz" },
        { name: "Prisma", level: 85, description: "Modern ORM ve veritabanı yönetimi" }
      ]
    },
    {
      title: "Sistem & Altyapı",
      icon: Server,
      color: "from-cyan-400 to-indigo-500",
      skills: [
        { name: "Docker", level: 85, description: "Konteynerizasyon ve dağıtım" },
        { name: "Git", level: 90, description: "Sürüm kontrolü ve iş birliği" },
        { name: "Linux", level: 80, description: "Sistem yönetimi ve komut satırı" },
        { name: "AWS", level: 70, description: "Bulut bilişim hizmetleri" },
        { name: "CI/CD", level: 80, description: "Sürekli entegrasyon ve dağıtım" }
      ]
    },
    {
      title: "Yapay Zeka & Veri Bilimi",
      icon: Brain,
      color: "from-blue-400 to-cyan-500",
      skills: [
        { name: "Machine Learning", level: 75, description: "Makine öğrenimi algoritmaları" },
        { name: "TensorFlow", level: 70, description: "Derin öğrenme framework'u" },
        { name: "Data Analysis", level: 80, description: "Veri analizi ve görselleştirme" },
        { name: "Python Libraries", level: 85, description: "NumPy, Pandas, Matplotlib" }
      ]
    },
    {
      title: "Mimari & Tasarım",
      icon: Settings,
      color: "from-green-400 to-blue-500",
      skills: [
        { name: "Clean Architecture", level: 85, description: "Temiz ve sürdürülebilir mimari" },
        { name: "Microservices", level: 75, description: "Mikroservis mimarileri" },
        { name: "Design Patterns", level: 80, description: "Tasarım kalıpları ve best practices" },
        { name: "UML", level: 75, description: "Sistem modelleme ve tasarım" }
      ]
    }
  ];

  const technologies = [
    { name: "Next.js", icon: Rocket, color: "text-cyan-400" },
    { name: "TypeScript", icon: Code, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: Palette, color: "text-indigo-400" },
    { name: "MongoDB", icon: Database, color: "text-green-400" },
    { name: "Docker", icon: Server, color: "text-purple-400" },
    { name: "Git", icon: GitBranch, color: "text-pink-400" },
    { name: "AWS", icon: Cloud, color: "text-gray-400" },
    { name: "TensorFlow", icon: Brain, color: "text-yellow-400" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-black/30 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 glass-card">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-300">Teknik Mimari</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="block">Yeteneklerim</span>
              <span className="text-gradient block">& Uzmanlıklarım</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Bilgisayar Mühendisliği ve mimari tasarımın kesişiminde uzmanlaşmış
              teknik becerilerim. Her yapı gibi sağlam temeller üzerine inşa edilmiş uzmanlıklar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/projects" className="btn-primary">
                Projelerimi İnceleyin
              </a>
              <a href="/contact" className="btn-secondary">
                İş Birliği İçin
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-card border grid-line p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center neon-glow`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-400">Uzmanlık alanları ve beceri seviyeleri</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out group-hover:scale-105`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kullandığım Teknolojiler</h2>
            <p className="text-gray-400 text-lg">Modern ve güçlü teknoloji yığınları</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="glass-card border grid-line p-6 text-center group hover:border-cyan-400 transition-all duration-300">
                <div className="w-12 h-12 bg-black/50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <tech.icon className={`w-6 h-6 ${tech.color}`} />
                </div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Yumuşak Beceriler</h2>
            <p className="text-gray-400 text-lg">Mimari düşünce ve problem çözme yetenekleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card border grid-line p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 neon-glow">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Analitik Düşünce</h3>
              <p className="text-gray-400 leading-relaxed">
                Karmaşık problemleri analiz edip basit ve etkili çözümler üretme yeteneği.
                Sistemli ve mantıksal yaklaşım.
              </p>
            </div>

            <div className="glass-card border grid-line p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 neon-glow">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Sistem Tasarımı</h3>
              <p className="text-gray-400 leading-relaxed">
                Ölçeklenebilir ve esnek sistem mimarileri geliştirme.
                Uzun ömürlü ve güçlü çözümler üretme.
              </p>
            </div>

            <div className="glass-card border grid-line p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 neon-glow">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">İş Birliği</h3>
              <p className="text-gray-400 leading-relaxed">
                Ekip çalışmalarında etkili iletişim ve koordinasyon.
                Farklı disiplinlerle uyumlu çalışma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="glass-card border grid-line p-8">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <p className="text-gray-400 text-sm">Kod Satırı</p>
            </div>
            <div className="glass-card border grid-line p-8">
              <div className="text-3xl font-bold text-indigo-400 mb-2">100%</div>
              <p className="text-gray-400 text-sm">Test Edilmiş</p>
            </div>
            <div className="glass-card border grid-line p-8">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <p className="text-gray-400 text-sm">Güncel</p>
            </div>
            <div className="glass-card border grid-line p-8">
              <div className="text-3xl font-bold text-pink-400 mb-2">0</div>
              <p className="text-gray-400 text-sm">Hata</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-card border grid-line p-12 neon-glow-indigo">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Teknik Uzmanlık İhtiyacınız mı Var?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Yenilikçi projeleriniz için teknik uzmanlık ve yaratıcı vizyonu birleştiren
              bir ortak arıyorsanız, doğru adrestesiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                İletişime Geçin
              </a>
              <a href="/projects" className="btn-secondary">
                Projelerimi İnceleyin
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}