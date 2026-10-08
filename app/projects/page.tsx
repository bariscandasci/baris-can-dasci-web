"use client";

import Link from 'next/link'
import {
  Rocket,
  Code,
  Database,
  CheckCircle,
  Clock,
} from 'lucide-react'

export default function Projects() {
  
  const ongoingProjects = [
    {
      id: 2,
      title: 'PUHU Uydu Projesi',
      description: 'Uzay araştırmaları ve uydu teknolojileri üzerine proje',
      technologies: ['Python', 'Docker', 'REST API', 'Test Automation'],
      status: 'Liderlik ve Koordinasyon',
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
        <p className="mt-6 text-sm italic text-zinc-500">Depo ve detaylar yakında yayınlanacak.</p>
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
          Uydu teknolojisinden kampüs platformuna, üzerinde çalıştığım ve tamamladığım işler.
        </p>
      </section>

      {/* Ongoing Projects */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-3xl text-white sm:text-4xl">Devam eden</h2>
            <p className="mt-2 text-zinc-400">Şu anda ekiple yürüttüğüm iş.</p>
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
            <p className="mt-2 text-zinc-400">Yayına hazırlanan ürünler.</p>
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
