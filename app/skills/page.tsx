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
      skills: ["C", "Java", "Python", "JavaScript", "SQL"]
    },
    {
      title: "Web Geliştirme",
      icon: Globe,
      color: "from-indigo-400 to-purple-500",
      skills: ["HTML", "CSS", "Next.js", "Node.js"]
    },
    {
      title: "Veri Tabanları",
      icon: Database,
      color: "from-purple-400 to-pink-500",
      skills: ["Firebase", "MongoDB"]
    },
    {
      title: "Sistem & Altyapı",
      icon: Server,
      color: "from-cyan-400 to-indigo-500",
      skills: ["Git", "Linux"]
    },
    {
      title: "Yapay Zeka & Veri Bilimi",
      icon: Brain,
      color: "from-blue-400 to-cyan-500",
      skills: ["Machine Learning", "Data Analysis", "Python Libraries"]
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

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-white font-medium">{skill}</span>
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