import {
  Code,
  Database,
  Globe,
  Rocket,
  Brain,
  Settings,
  Server,
  GitBranch,
  Network
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programlama dilleri",
      icon: Code,
      color: "from-cyan-400 to-blue-500",
      skills: ["Java", "TypeScript", "JavaScript", "Python", "Go", "PHP", "C", "SQL", "HTML", "CSS"]
    },
    {
      title: "Çerçeveler ve teknolojiler",
      icon: Globe,
      color: "from-indigo-400 to-purple-500",
      skills: ["React Native", "Expo", "Firebase", "REST API", "Godot", "Gradio"]
    },
    {
      title: "Yapay zeka",
      icon: Brain,
      color: "from-blue-400 to-cyan-500",
      skills: ["RAG", "Microsoft Foundry Local", "Phi-3.5", "Qwen3-Embedding", "OpenAI API"]
    },
    {
      title: "Sistem ve araçlar",
      icon: Server,
      color: "from-cyan-400 to-indigo-500",
      skills: ["Linux", "Git", "GitHub", "VirtualBox", "Sanal sunucu", "Adobe Animate", "Altium Designer"]
    },
    {
      title: "Mühendislik araçları",
      icon: Rocket,
      color: "from-amber-400 to-orange-500",
      skills: ["OpenRocket", "Aviyonik haberleşme"]
    }
  ];

  const technologies = [
    { name: "Python", icon: Code, color: "text-cyan-400" },
    { name: "TypeScript", icon: Code, color: "text-blue-400" },
    { name: "React Native", icon: Rocket, color: "text-indigo-400" },
    { name: "Firebase", icon: Database, color: "text-amber-300" },
    { name: "RAG", icon: Brain, color: "text-emerald-300" },
    { name: "Linux", icon: Server, color: "text-zinc-200" },
    { name: "Git", icon: GitBranch, color: "text-pink-400" },
    { name: "OpenRocket", icon: Rocket, color: "text-orange-300" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 pb-4 pt-6 sm:px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Teknik mimari</p>
        <h1 className="mt-3 max-w-3xl text-5xl text-white sm:text-7xl">
          Yetenekler
          <span className="text-gradient block">ve uzmanlık</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-zinc-300">
          CV’deki diller, RAG araçları, Linux ve mühendislik simülasyonu.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/projects" className="btn-primary">Projeleri incele</a>
          <a href="/contact" className="btn-secondary">İş birliği</a>
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
                    <p className="text-gray-400">Kullandığım araçlar</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-zinc-100">
                      {skill}
                    </span>
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