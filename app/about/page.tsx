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
  { title: "Diller", items: ["Java", "TypeScript", "JavaScript", "Python", "Go", "PHP", "C", "SQL"] },
  { title: "Ürün", items: ["React Native", "Expo", "Firebase", "Gradio", "Godot"] },
  { title: "Yapay zeka", items: ["RAG", "Phi-3.5", "OpenAI API", "Foundry Local"] },
  { title: "Sistem", items: ["Linux", "Git", "Sanal sunucu", "VirtualBox"] },
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
      <section className="grid items-center gap-10 py-8 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/resimler/baris.jpg"
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
            Karabük Üniversitesi&apos;nde bilgisayar mühendisliği okuyorum. Eylül 2024&apos;te başladım,
            ortalamam 3.09. 2025 yazında Virginia&apos;da dört aylık Work and Travel programını
            tamamladım. GEPTEK&apos;in kurucu başkanıyım. PUHU uydu takımında yazılım ekibini
            yönetiyorum, Hicaz Hyperloop&apos;ta aviyonik ve haberleşme üzerine çalışıyorum.
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
          ["Ortalama", "3.09 / 4.00"],
          ["Başlangıç", "Eylül 2024"],
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
            ["Eğitim", "Karabük Üniversitesi, Bilgisayar Mühendisliği, Eylül 2024 – devam. Ocak 2026’da Gençlik ve Spor Bakanlığı 10. Mühendislik Kış Kampı."],
            ["Staj", "Tepe Kurumsal’da donanım stajı (29 Haziran – 27 Temmuz 2026, Ankara) ve Microsoft’ta yapay zeka geliştirme stajı (29 Haziran – 24 Temmuz 2026)."],
            ["Yurt dışı", "Work and Travel, Virginia, yaz 2025. Dört aylık kültür değişim programı."],
            ["Liderlik", "GEPTEK kurucu başkanı, 2025–2026. TÜBİTAK Deneyap mentoru, Mart 2026’dan beri."],
            ["Takımlar", "PUHU yazılım ekip lideri (Kasım 2025 – devam). Hicaz Hyperloop aviyonik (Ekim 2025 – devam). GEPTEK roket simülasyon lideri (Eylül 2025 – Ocak 2026)."],
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
