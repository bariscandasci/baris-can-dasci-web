import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Github, Linkedin } from "lucide-react";

const skills = [
  "C",
  "Java",
  "Python",
  "JavaScript",
  "SQL",
  "Next.js",
  "Node.js",
  "Firebase",
  "MongoDB",
  "Git",
  "Linux",
  "Machine Learning",
];

const pillars = [
  {
    index: "01",
    title: "Kod",
    text: "Temiz, okunabilir ve sürdürülebilir yapılar. Her satır bir bina taşı gibi sağlam ve amaçlı.",
  },
  {
    index: "02",
    title: "Sistem",
    text: "Ölçeklenebilir ve esnek mimariler. Uzun ömürlü, birlikte çalışabilen çözümler.",
  },
  {
    index: "03",
    title: "Arayüz",
    text: "Kullanıcı odaklı ve estetik ekranlar. Teknoloji ile görsel dilin kesiştiği yer.",
  },
];

const projects = [
  {
    title: "PUHU Uydu Projesi",
    status: "Devam ediyor",
    text: "Uzay araştırmaları ve uydu teknolojileri. Ekip liderliği ve koordinasyon.",
    tags: ["Python", "Docker", "REST API"],
    href: "/projects",
    span: "md:col-span-2",
  },
  {
    title: "Kampüs Hub",
    status: "Tamamlandı",
    text: "Ders takibi, etkinlikler ve öğrenci toplulukları için merkezi platform.",
    tags: ["Next.js", "React Native"],
    href: "/projects",
    span: "",
  },
  {
    title: "Mali Günlük",
    status: "Tamamlandı",
    text: "Harcama takibi ve bütçe planlama için hibrit finans uygulaması.",
    tags: ["Java", "Firebase"],
    href: "/projects",
    span: "",
  },
];

const certificates = [
  {
    title: "Kariyer Zirvesi '25",
    image: "/resimler/Kariyer Zirvesi'25.jpg",
  },
  {
    title: "Yapay Zeka ve ChatGPT",
    image: "/resimler/Yapay Zeka ve ChatGPT Uzmanlık Eğitimi Seti.jpg",
  },
  {
    title: "Git ve GitHub",
    image: "/resimler/Versiyon Kontrolleri Git ve GitHub.jpg",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-12 lg:pt-10">
        <div className="lg:col-span-7">
          <div className="rise inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            Şu anda çevrimiçi · Karabük Üniversitesi
          </div>

          <h1 className="rise rise-delay-1 mt-6 text-5xl leading-[0.92] text-white sm:text-7xl lg:text-8xl">
            Barış Can
            <span className="text-gradient block">Daşcı</span>
          </h1>

          <p className="rise rise-delay-2 mt-5 font-serif text-2xl italic text-amber-100/90 sm:text-3xl">
            Bilgisayar mühendisi.
          </p>

          <p className="rise rise-delay-2 mt-4 max-w-xl text-lg leading-relaxed text-zinc-300">
            Geleceğin mimarisini bugünden kodluyorum. Karmaşık sistemleri basit çözümlere,
            fikirleri somut projelere dönüştürmek için buradayım.
          </p>

          <div className="rise rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="btn-primary">
              Projeleri gör
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="btn-secondary">
              Hikayem
            </Link>
            <a
              href="https://github.com/bariscandasci"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-white hover:border-cyan-300/60"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bar%C4%B1%C5%9F-can-da%C5%9Fci-809541340/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-white hover:border-cyan-300/60"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <dl className="rise rise-delay-3 mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              ["02", "Sınıf"],
              ["03", "Proje"],
              ["05", "Sertifika"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-3xl text-white">{value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/25 via-transparent to-amber-300/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#12141b] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/resimler/baris.jpg"
                alt="Barış Can Daşcı"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07080c] via-[#07080c]/70 to-transparent p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200/90">i am &gt; i was</p>
              <p className="mt-1 text-lg text-white">Dijital sistem mimarı</p>
            </div>
          </div>

          <div className="absolute -left-3 top-8 hidden rounded-2xl border border-white/10 bg-[#0d1016]/90 px-4 py-3 shadow-xl backdrop-blur md:block">
            <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">Rol</p>
            <p className="mt-1 text-sm font-medium text-white">Teknofest ekip kaptanı</p>
          </div>
          <div className="absolute -right-2 bottom-24 hidden rounded-2xl border border-amber-200/20 bg-[#14110c]/90 px-4 py-3 shadow-xl backdrop-blur md:block">
            <p className="text-[11px] uppercase tracking-[0.16em] text-amber-200/80">Kurucu</p>
            <p className="mt-1 text-sm font-medium text-white">Teknoloji kulübü</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20 py-4">
        <div className="marquee">
          <div className="marquee-track">
            {Array.from({ length: 12 }, () => skills)
              .flat()
              .map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm whitespace-nowrap text-zinc-200"
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Yaklaşım</p>
            <h2 className="mt-2 text-4xl text-white sm:text-5xl">Nasıl çalışırım</h2>
          </div>
          <Link href="/skills" className="hidden text-sm text-zinc-300 hover:text-white sm:inline">
            Yeteneklerin tamamı →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((item) => (
            <article
              key={item.index}
              className="group rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <p className="font-mono text-sm text-amber-200/80">{item.index}</p>
              <h3 className="mt-6 text-3xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Seçilen işler</p>
            <h2 className="mt-2 text-4xl text-white sm:text-5xl">Projeler</h2>
          </div>
          <Link href="/projects" className="btn-secondary px-4 py-2 text-sm">
            Tümü
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className={`group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-200/40 ${project.span}`}
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
                  {project.status}
                </span>
                <ArrowUpRight className="h-5 w-5 text-zinc-500 transition group-hover:text-amber-200" />
              </div>
              <h3 className="mt-10 text-3xl text-white sm:text-4xl">{project.title}</h3>
              <p className="mt-3 max-w-xl text-zinc-400">{project.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-black/30 px-3 py-1 text-xs text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Hakkımda</p>
          <h2 className="mt-3 text-4xl text-white">Kulüp kurdum, ekibi yönetiyorum.</h2>
          <p className="mt-5 leading-relaxed text-zinc-300">
            Hazırlığın ardından Amerika&apos;da Work and Travel programına katıldım. Karabük&apos;e
            döndüğümde bu bakış açısını yerel bir üretime çevirmek için kendi teknoloji kulübümü
            kurdum. Şu anda ekibimle Teknofest projeleri üzerinde çalışıyorum.
          </p>
          <Link href="/about" className="btn-primary mt-8">
            Devamını oku
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {certificates.map((item) => (
            <Link key={item.title} href="/certificates" className="group">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={240}
                  height={320}
                  className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52"
                />
              </div>
              <p className="mt-2 text-xs text-zinc-400">{item.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#10131a] px-6 py-12 sm:px-12">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-amber-300/15 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-serif text-2xl italic text-amber-100 sm:text-3xl">
                Bir sonraki projeyi birlikte kuralım.
              </p>
              <p className="mt-3 max-w-xl text-zinc-400">
                İş birliği, staj ya da sadece merhaba. Mesajın doğrudan bana ulaşır.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              İletişime geç
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
