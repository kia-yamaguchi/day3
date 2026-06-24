export function IcebreakerCard({ item, anchorId }) {
  return (
    <article
      id={anchorId ?? undefined}
      className="scroll-mt-28 rounded-2xl border border-accent-lilac/25 bg-white/90 p-6 shadow-card backdrop-blur-sm transition hover:border-coral-soft/50 hover:shadow-soft"
    >
      <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {item.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.keywords.map((kw, idx) => (
          <span
            key={`${item.id}-kw-${idx}`}
            className="rounded-full bg-coral-pale/80 px-3 py-1 text-xs font-medium text-coral-hover"
          >
            {kw}
          </span>
        ))}
      </div>
    </article>
  );
}
