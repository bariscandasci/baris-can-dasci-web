"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const activeSocialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/bariscandasci",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/bar%C4%B1%C5%9F-can-da%C5%9Fci-809541340/",
      icon: Linkedin,
    },
  ];

  const passiveSocialLinks = [
    { name: "Instagram", icon: Instagram },
    { name: "X (Twitter)", icon: Twitter },
  ];

  const quickLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımda", href: "/about" },
    { name: "Projeler", href: "/projects" },
    { name: "Yetenekler", href: "/skills" },
    { name: "Sertifikalar", href: "/certificates" },
    { name: "Akış", href: "/feed" },
    { name: "İletişim", href: "/contact" },
  ];

  return (
    <footer className="mt-8 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Portfolyo</p>
            <h3 className="mt-3 text-3xl text-white">Barış Can Daşcı</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
              Bilgisayar mühendisliği ve mimari estetiği bir arada. Karmaşık sistemleri sade,
              çalışan ürünlere dönüştürüyorum.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {activeSocialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:text-cyan-200"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
              {passiveSocialLinks.map((social) => (
                <div key={social.name} className="group relative">
                  <div className="grid h-11 w-11 cursor-not-allowed place-items-center rounded-full border border-white/10 text-zinc-600">
                    <social.icon className="h-5 w-5" />
                  </div>
                  <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-lg bg-white px-2 py-1 text-xs text-black opacity-0 transition group-hover:opacity-100">
                    Yakında
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm uppercase tracking-[0.18em] text-zinc-500">Sayfalar</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-zinc-300 transition hover:text-amber-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm uppercase tracking-[0.18em] text-zinc-500">Şu an</h4>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              Karabük Üniversitesi Bilgisayar Mühendisliği, 2. sınıf. Teknofest ekip kaptanı ve
              teknoloji kulübü kurucusu.
            </p>
            <a href="/CV.pdf" download className="btn-secondary mt-6 text-sm">
              CV İndir
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Barış Can Daşcı</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Gizlilik</Link>
            <Link href="/terms" className="hover:text-white">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
