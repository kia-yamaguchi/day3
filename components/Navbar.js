import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-accent-lilac/25 bg-ivory/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-ink transition-colors hover:text-coral"
        >
          Icebreaker Lab
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-muted md:flex">
          <Link href="/" className="transition-colors hover:text-coral">
            ホーム
          </Link>
          <Link href="#ideas" className="transition-colors hover:text-coral">
            アイデア一覧
          </Link>
          <Link href="#categories" className="transition-colors hover:text-coral">
            カテゴリ
          </Link>
          <Link href="#about" className="transition-colors hover:text-coral">
            このサイトについて
          </Link>
        </nav>
        <Link
          href="#ideas"
          className="rounded-full bg-coral px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-coral-hover md:hidden"
        >
          見る
        </Link>
      </div>
    </header>
  );
}
