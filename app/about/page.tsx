import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const manifesto = [
  {
    title: "Vizyon",
    text: "Bilgisayar mühendisliği ile mimari estetiği aynı masaya koyuyorum.",
  },
  {
    title: "Mühendislik",
    text: "Temiz, okunabilir ve sürdürülebilir kod. Her satır bir bina taşı gibi sağlam.",
  },
  {
    title: "Öğrenme",
    text: "Ölçeklenebilir sistemler kurmak için sürekli yeni araç ve yöntem deniyorum.",
  },
  {
    title: "Arayüz",
    text: "Kullanıcı odaklı, estetik ekranlar. Teknoloji ile görsel dilin buluştuğu yer.",
  },
];

const groups = [
  { title: "Diller", items: ["C", "Java", "Python", "JavaScript", "SQL"] },
  { title: "Web", items: ["HTML", "CSS", "Next.js", "Node.js"] },
  { title: "Veri", items: ["Firebase", "MongoDB"] },
  { title: "Sistem", items: ["Git", "Linux"] },
  { title: "Yapay zeka", items: ["Machine Learning", "Data Analysis", "Python Libraries"] },
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
      <section className="grid items-center gap-10 py-8 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/resimler/baris.jpeg"
              alt="Barış Can Daşcı"
              width={720}
              height={900}
              className="aspect-[4/5] w-full object-cover object-top"
              priority
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Hakkımda</p>
          <h1 className="mt-3 text-5xl text-white sm:text-6xl">
            Mühendisliği
            <span className="text-gradient block">liderlikle birleştiriyorum.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            Karabük Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Hazırlık eğitimimin
            hemen ardından Amerika&apos;da Work and Travel programına katılarak global bir bakış
            açısı kazandım. Karabük&apos;e döndüğümde bu vizyonu yerel bir üretim gücüne dönüştürmek
            için kendi teknoloji kulübümü kurdum. Şu anda ekibimle Teknofest projeleri üzerinde
            çalışıyor, mühendislik disiplinini liderlik ve inovasyonla harmanlıyorum.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="btn-primary">
              Projeler
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-secondary">İletişim</Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Okul", "Karabük Üniversitesi"],
          ["Bölüm", "Bilgisayar Mühendisliği"],
          ["Sınıf", "2. sınıf"],
          ["Dil", "İngilizce B1 / B2"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</p>
            <p className="mt-2 text-lg text-white">{value}</p>
          </div>
        ))}
      </section>

      <section className="py-8">
        <h2 className="text-4xl text-white">Dört ilke</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {manifesto.map((item, index) => (
            <article key={item.title} className="rounded-[1.6rem] border border-white/10 p-6">
              <p className="font-mono text-sm text-amber-200/80">0{index + 1}</p>
              <h3 className="mt-4 text-2xl text-white">{item.title}</h3>
              <p className="mt-2 text-zinc-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-4xl text-white">Yol</h2>
          <p className="mt-3 text-zinc-400">Eğitim, liderlik ve saha.</p>
        </div>
        <ol className="space-y-6 lg:col-span-8">
          {[
            ["Eğitim", "Karabük Üniversitesi, Bilgisayar Mühendisliği, 2. sınıf."],
            ["Deneyim", "Work and Travel, Amerika. Global bir çalışma ortamı."],
            ["Liderlik", "Teknoloji kulübü kurucusu ve Teknofest ekip kaptanı."],
            ["Odak", "PUHU uydu projesi: uzay araştırmaları ve ekip koordinasyonu."],
          ].map(([title, text]) => (
            <li key={title} className="border-l border-amber-200/40 pl-5">
              <h3 className="text-xl text-white">{title}</h3>
              <p className="mt-1 text-zinc-400">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="py-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-4xl text-white">Araç kutusu</h2>
          <Link href="/skills" className="text-sm text-zinc-300 hover:text-white">
            Ayrıntılar →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-white/10 p-5">
              <h3 className="text-lg text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
