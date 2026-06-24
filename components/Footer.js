import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-accent-lilac/20 bg-gradient-to-b from-ivory-tint/90 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-3">
            <p className="text-lg font-semibold text-ink">Icebreaker Lab</p>
            <p className="text-sm leading-relaxed text-ink-muted">
              チームの最初の10分が、そのあとの協働を決めます。場に合うアイスブレイクを選んで、自然な会話の入口をつくりましょう。
            </p>
          </div>
          <div className="flex flex-wrap gap-10 text-sm">
            <div className="space-y-3">
              <p className="font-semibold text-ink">ナビゲーション</p>
              <ul className="space-y-2 text-ink-muted">
                <li>
                  <Link href="/" className="hover:text-coral">
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link href="#ideas" className="hover:text-coral">
                    アイデア一覧
                  </Link>
                </li>
                <li>
                  <Link href="#categories" className="hover:text-coral">
                    カテゴリから探す
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-ink">情報</p>
              <ul className="space-y-2 text-ink-muted">
                <li>
                  <Link href="#about" className="hover:text-coral">
                    このサイトについて
                  </Link>
                </li>
                <li>
                  <span className="cursor-not-allowed opacity-60">
                    お問い合わせ（準備中）
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-accent-aqua/20 pt-8 text-center text-xs text-ink-soft">
          © {new Date().getFullYear()} Icebreaker Lab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
