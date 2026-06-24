import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-coral-blush/80 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-accent-lilac/35 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-accent-aqua/30 blur-3xl"
      />

      <section className="relative mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-20 lg:px-8 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent-lilac/35 bg-white/85 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ink-soft shadow-card backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-coral shadow-[0_0_10px_rgba(239,125,110,0.55)]" />
              Icebreaker portfolio
            </p>

            <div className="relative -mx-1 px-1 py-5 sm:mx-0 sm:px-0 sm:py-7">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 overflow-visible"
              >
                <span className="absolute left-[2%] top-[8%] h-14 w-14 rounded-full bg-coral-soft/55 ring-2 ring-white/70 sm:h-20 sm:w-20" />
                <span className="absolute left-[38%] top-0 h-10 w-10 rounded-full bg-accent-lilac/60 ring-2 ring-white/60 sm:h-12 sm:w-12" />
                <span className="absolute right-[8%] top-[18%] h-24 w-24 rounded-full bg-accent-melon/65 ring-2 ring-white/65 sm:h-28 sm:w-28" />
                <span className="absolute -bottom-1 left-[12%] h-20 w-20 rounded-full bg-accent-aqua/45 ring-2 ring-white/55 sm:-bottom-2 sm:h-24 sm:w-24" />
                <span className="absolute bottom-[6%] right-[20%] h-16 w-16 rounded-full bg-accent-peach/75 ring-2 ring-white/65 sm:h-[4.5rem] sm:w-[4.5rem]" />
                <span className="absolute left-[55%] top-[42%] h-8 w-8 rounded-full bg-coral-pale ring-2 ring-white/50 sm:h-10 sm:w-10" />
              </div>

              <div className="relative z-10 space-y-6">
                <h1 className="text-balance text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.25rem]">
                  <span className="text-[#52565e]">場の空気を、</span>
                  <span className="bg-gradient-to-r from-coral-hover via-coral to-coral-soft bg-clip-text text-transparent">
                    10分で変える
                  </span>
                </h1>
                <p className="max-w-xl text-pretty text-lg leading-relaxed text-ink-muted sm:text-xl">
                  シーンに合ったアイスブレイクを、すぐに見つけよう
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#ideas"
                className="inline-flex items-center justify-center rounded-full bg-coral px-8 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-coral-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              >
                アイスブレイクを見る
              </Link>
              <Link
                href="#categories"
                className="inline-flex items-center justify-center rounded-full border border-accent-lilac/45 bg-white/90 px-8 py-3.5 text-base font-semibold text-ink shadow-card backdrop-blur-sm transition hover:border-coral-soft hover:bg-accent-lilac/15 hover:text-coral-hover"
              >
                カテゴリから探す
              </Link>
            </div>

            <dl className="grid max-w-lg grid-cols-3 gap-6 border-t border-accent-aqua/25 pt-8 text-sm">
              <div>
                <dt className="text-ink-soft">収録ネタ</dt>
                <dd className="mt-1 text-lg font-semibold text-ink">100</dd>
              </div>
              <div>
                <dt className="text-ink-soft">シーン</dt>
                <dd className="mt-1 text-lg font-semibold text-ink">12</dd>
              </div>
              <div>
                <dt className="text-ink-soft">所要目安</dt>
                <dd className="mt-1 text-lg font-semibold text-ink">5–15分</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] w-full max-w-sm rounded-[2rem] bg-gradient-to-br from-white via-ivory-tint to-coral-pale/45 p-1 shadow-soft ring-1 ring-accent-lilac/25 lg:mx-0 lg:ml-auto">
              <div className="flex h-full flex-col justify-between rounded-[1.75rem] bg-white/92 p-8 backdrop-blur-sm">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-soft">
                    Today&apos;s pick
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-ink">
                    ワンワード・チェックイン
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    今の気分やフォーカスを一言で共有。心理的安全性を保ちながら、全員がそろって話し始められます。
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-coral-blush/90 px-3 py-1 text-xs font-medium text-coral-hover">
                      リモート向け
                    </span>
                    <span className="rounded-full bg-accent-lilac/35 px-3 py-1 text-xs font-medium text-ink">
                      5分
                    </span>
                    <span className="rounded-full bg-accent-aqua/30 px-3 py-1 text-xs font-medium text-ink">
                      小〜中規模
                    </span>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-lilac/40 to-transparent" />
                  <p className="text-xs text-ink-soft">
                    温かみのあるコーラルと、落ち着いたアクセントカラー。Canvaのような、大人向けのポップさです。
                  </p>
                </div>
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -bottom-6 -right-4 hidden h-28 w-40 rotate-6 rounded-2xl border border-white/90 bg-gradient-to-br from-accent-melon/50 to-white/95 shadow-card sm:block"
            />
          </div>
        </div>
      </section>

      <section id="ideas" className="scroll-mt-24 bg-ivory">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            アイスブレイク一覧
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            近日公開予定です。ヒーローセクションから、温かくポップなトーンでサイトを始めました。
          </p>
        </div>
      </section>

      <section id="categories" className="scroll-mt-24 bg-ivory-tint/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            カテゴリから探す
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            シーン・形式・時間・人数から絞り込める機能を準備中です。
          </p>
        </div>
      </section>

      <section id="about" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-coral-soft/40 bg-gradient-to-br from-white via-accent-lilac/12 to-coral-pale/35 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-ink">このサイトについて</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
              Icebreaker
              Labは、場の空気をやわらかく始動させるアイデアを集めたポートフォリオサイトです。アイボリーをベースに、コーラルを主役にした落ち着いたポップな配色でまとめています。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
