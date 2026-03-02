import Link from 'next/link'
import {
  Rocket,
  Satellite,
  Code,
  Smartphone,
  Database,
  GitBranch,
  Play,
  CheckCircle,
  Clock,
  Github
} from 'lucide-react'

export default function Projects() {
  const ongoingProjects = [
    {
      id: 1,
      title: 'Teknofest: Mobil Uydu Yer Terminali',
      description: 'Ekip kaptanlığı yaptığım bu projede, uydu haberleşme sistemleri üzerine çalışıyorum. Uydu verilerinin toplanması, işlenmesi ve analiz edilmesi için modern teknolojiler kullanıyorum.',
      technologies: ['Python', 'C++', 'Raspberry Pi', 'RF Modüller'],
      status: 'Devam Ediyor',
      icon: Satellite,
      githubUrl: 'https://github.com/bariscandasci/uydu-projesi',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Hyperloop Test Altyapısı',
      description: 'Python kullanarak sanal haberleşme ve test altyapısı geliştiriyorum. Sistem simülasyonları, veri analizi ve test otomasyonu üzerine odaklanıyorum.',
      technologies: ['Python', 'Docker', 'REST API', 'Test Automation'],
      status: 'Devam Ediyor',
      icon: Rocket,
      githubUrl: 'https://github.com/bariscandasci/hyperloop-test',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const completedProjects = [
    {
      id: 3,
      title: 'Kampüs Hub',
      description: 'Next.js ve React Native kullanarak geliştirdiğim öğrenci odaklı bir platform. Ders takibi, etkinlik duyuruları ve öğrenci toplulukları için merkezi bir çözüm.',
      technologies: ['Next.js', 'React Native', 'Tailwind CSS', 'Node.js'],
      status: 'Tamamlandı',
      icon: Code,
      githubUrl: 'https://github.com/bariscandasci/kampus-hub',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 4,
      title: 'Mali Günlük (Financial Diary)',
      description: 'Java Swing, React Native ve Firebase bulut entegrasyonu içeren hibrit bir finans uygulaması. Harcama takibi, bütçe planlama ve veri analizi özellikleri sunar.',
      technologies: ['Java Swing', 'React Native', 'Firebase', 'Cloud Functions'],
      status: 'Tamamlandı',
      icon: Database,
      githubUrl: 'https://github.com/bariscandasci/financial-diary',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const ProjectCard = ({ project, isOngoing }: { project: any, isOngoing: boolean }) => (
    <div className="glass-card border grid-line hover:border-cyan-400 transition-all duration-300 group">
      <div className="p-8">
        {/* Header with Icon and Status */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow`}>
              <project.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${
                  isOngoing 
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {isOngoing ? <Clock className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                  <span>{project.status}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Kullandığım Teknolojiler</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
          >
            <span>Proje Detaylarını Gör</span>
            <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 border border-gray-600 text-gray-300 px-6 py-3 rounded-full font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full px-6 py-3 mb-8">
              <Code className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white">Projelerim</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Yenilikçi
              <span className="text-gradient block">Projeler</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Teknofest'ten mobil uygulamalara, bulut entegrasyonundan masaüstü çözümlerine
              kadar geliştirdiğim projeleri inceleyin. Her proje, teknik uzmanlığımın ve
              yaratıcı vizyonumun somut bir kanıtıdır.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Devam Eden Projeler</h2>
            <p className="text-gray-400 text-lg">Şu anda aktif olarak üzerinde çalıştığım yenilikçi projeler</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ongoingProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} isOngoing={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tamamlanan Projeler</h2>
            <p className="text-gray-400 text-lg">Geçmişte başarıyla tamamladığım ve deneyim kazandırdı projeler</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} isOngoing={false} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-card border grid-line p-12 neon-glow-cyan">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Projelerimle Çalışmaya Hazır mısınız?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Yenilikçi projeleriniz için teknik uzmanlık ve yaratıcı vizyonu birleştiren
              bir ortak arıyorsanız, doğru adrestesiniz. İlerideki projelerimde de
              aynı tutku ve profesyonellikle çalışmaya hazırım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                İş Birlikleri İçin İletişime Geçin
              </Link>
              <Link href="/certificates" className="btn-secondary">
                Sertifikalarımı İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}