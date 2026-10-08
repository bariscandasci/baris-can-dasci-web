import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-4">
      <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">404</p>
      <h1 className="mt-3 text-5xl text-white">Bu sayfa yok.</h1>
      <p className="mt-4 text-lg text-zinc-300">
        Aradığın adres taşınmış veya kaldırılmış olabilir.
      </p>
      <Link href="/" className="btn-primary mt-8 self-start">
        Ana sayfaya dön
      </Link>
    </div>
  );
}
