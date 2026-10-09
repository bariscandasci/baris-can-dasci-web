"use client";

import Link from 'next/link'
import {
  Rocket,
  Radio,
  Brain,
  Server,
  Database,
  Users,
  CheckCircle,
  Clock,
} from 'lucide-react'

export default function Projects() {
  
  const ongoingProjects = [
    {
      id: 1,
      title: 'PUHU Uydu Takımı',
      description: 'Mobil uydu terminalinin yazılım yönetimi. Otonom sinyal iyileştirme için yapay zeka destekli veri işleme birimleri.',
      technologies: ['Yazılım liderliği', 'Yapay zeka', 'Uydu'],
      status: 'Kasım 2025 – devam',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 2,
      title: 'Hicaz Hyperloop',
      description: 'Yüksek hızlı sensör verisini işleyen algoritmalar ve kapsül ile yer istasyonu arasında düşük gecikmeli haberleşme.',
      technologies: ['Aviyonik', 'Haberleşme', 'Telemetri'],
      status: 'Ekim 2025 – devam',
      icon: Radio,
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  const completedProjects = [
    {
      id: 3,
      title: 'Çevrimdışı BT destek asistanı',
      description: 'Microsoft Foundry Local üzerinde, belgelere sadık kalan çevrimdışı bir yardım masası. Phi-3.5 yalnızca düşük riskli giriş cümlelerini üretir; Active Directory, VPN, Linux sunucuları, donanım ve yazıcı belgelerinde NumPy ve SQLite ile arama yapılır.',
      technologies: ['Python', 'Phi-3.5', 'Gradio', 'RAG'],
      status: '2026',
      icon: Brain,
      color: 'from-amber-400 to-orange-500'
    },
    {
      id: 4,
      title: 'Makale özetleme asistanı',
      description: 'Aynı geri getirme ve çıkarımsal üretim mimarisinin buluta bağlı hali. Makaleleri OpenAI API ile özetler.',
      technologies: ['Python', 'RAG', 'OpenAI API'],
      status: '2026',
      icon: Brain,
      color: 'from-violet-500 to-fuchsia-500'
    },
    {
      id: 5,
      title: 'Mali Günlük Pro',
      description: 'Java Swing ve React Native ile gerçek zamanlı senkronlu bir harcama sistemi. Firebase üzerinde kimlik doğrulama ve harcama görselleştirme.',
      technologies: ['Java Swing', 'React Native', 'Firebase'],
      status: '2026',
      icon: Database,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 6,
      title: 'ShareNote',
      description: 'Yapay zeka ile otomatik özetleyen, ortak not paylaşım platformu. Altı kişilik ekibin görev dağılımını ve Git akışını yönettim.',
      technologies: ['TypeScript', 'Firebase', 'OpenAI API'],
      status: '2025',
      icon: Users,
      color: 'from-sky-500 to-indigo-500'
    },
    {
      id: 7,
      title: 'Kişisel sunucu',
      description: 'Tepe Kurumsal stajında Bilkent Holding sunucu mimarisini incelemek için kurup yönettiğim kişisel sunucu.',
      technologies: ['Linux', 'Self-hosting'],
      status: '2026',
      icon: Server,
      color: 'from-zinc-500 to-slate-600'
    },
    {
      id: 8,
      title: 'GEPTEK Roket Takımı',
      description: 'OpenRocket ile orta irtifa roketlerde kararlılık ve paraşüt açılışı simülasyonu. Hedef apogee için aerodinamik parametreleri iyileştirdim.',
      technologies: ['OpenRocket', 'Simülasyon'],
      status: 'Eylül 2025 – Ocak 2026',
      icon: Rocket,
      color: 'from-rose-500 to-orange-500'
    }
  ]

  const ProjectCard = ({ project, isOngoing }: { project: any, isOngoing: boolean }) => (
    <article className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-200/40">
      <div className={`absolute -right-8 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${project.color} opacity-30 blur-2xl`} />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${project.color}`}>
            <project.icon className="h-7 w-7 text-white" />
          </div>
          <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs ${
            isOngoing
              ? "border border-cyan-300/30 bg-cyan-300/10 text-cyan-100"
              : "border border-emerald-300/30 bg-emerald-300/10 text-emerald-100"
          }`}>
            {isOngoing ? <Clock className="h-3.5 w-3.5" /> : <CheckCircle className="h-3.5 w-3.5" />}
            {project.status}
          </span>
        </div>
        <h3 className="mt-8 text-3xl text-white">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-zinc-400">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span key={tech} className="rounded-full bg-black/30 px-3 py-1 text-xs text-zinc-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 pb-6 pt-6 sm:px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Seçilen işler</p>
        <h1 className="mt-3 max-w-3xl text-5xl text-white sm:text-7xl">
          Yenilikçi
          <span className="text-gradient block">projeler</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-zinc-300">
          PUHU ve Hicaz’taki görevler, RAG sistemleri ve stajda kurduğum sunucu.
        </p>
      </section>

      {/* Ongoing Projects */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-3xl text-white sm:text-4xl">Devam eden</h2>
            <p className="mt-2 text-zinc-400">Hâlâ üzerinde çalıştığım takımlar.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ongoingProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} isOngoing={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-3xl text-white sm:text-4xl">Tamamlanan</h2>
            <p className="mt-2 text-zinc-400">Bitirdiğim ürünler ve kapanmış takım görevi.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} isOngoing={false} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:flex-row sm:items-end sm:p-10">
          <div>
            <h2 className="text-3xl text-white sm:text-4xl">Birlikte üretelim</h2>
            <p className="mt-3 max-w-xl text-zinc-400">
              Soru ve iş birliği teklifleri için doğrudan yazabilirsin.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">İş birliği</Link>
            <Link href="/certificates" className="btn-secondary">Sertifikalar</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
