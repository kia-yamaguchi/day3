"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  allIcebreakers,
  categoryButtons,
  filterIcebreakers,
} from "@/data/icebreakers";
import { IcebreakerCard } from "@/components/IcebreakerSections";

export function CategoryBrowseSection() {
  const [activeKey, setActiveKey] = useState(null);
  const resultsRef = useRef(null);

  const filtered = activeKey
    ? filterIcebreakers(allIcebreakers, activeKey)
    : [];

  const select = useCallback((key) => {
    setActiveKey(key);
  }, []);

  useEffect(() => {
    if (activeKey && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeKey, filtered.length]);

  const groups = ["内容", "形式", "時間", "人数"];

  return (
    <div className="space-y-10">
      <p className="text-sm text-ink-muted">
        全
        <span className="font-semibold text-ink">{allIcebreakers.length}</span>
        件の中から、内容・形式・時間・人数のいずれかに合うアイスブレイクを表示します。
      </p>

      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-soft">
              {group}
            </p>
            <div className="flex flex-wrap gap-3">
              {categoryButtons
                .filter((b) => b.group === group)
                .map((btn) => {
                  const isActive = activeKey === btn.filterKey;
                  return (
                    <button
                      key={`${btn.group}-${btn.label}`}
                      type="button"
                      onClick={() => select(btn.filterKey)}
                      className={`inline-flex rounded-full border px-5 py-2.5 text-sm font-medium shadow-card transition ${
                        isActive
                          ? "border-coral bg-coral text-white shadow-soft hover:bg-coral-hover"
                          : "border-accent-lilac/35 bg-white/90 text-ink hover:border-coral-soft hover:bg-coral-pale/40 hover:text-coral-hover"
                      }`}
                    >
                      {btn.label}
                    </button>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      <div ref={resultsRef} id="category-results" className="scroll-mt-28">
        {!activeKey && (
          <p className="rounded-2xl border border-dashed border-accent-lilac/40 bg-ivory-tint/60 px-5 py-8 text-center text-sm text-ink-muted">
            上のカテゴリを1つ選ぶと、該当するアイスブレイクが表示されます。
          </p>
        )}

        {activeKey && (
          <>
            <p className="mb-5 text-sm text-ink-muted">
              「
              <span className="font-medium text-ink">
                {categoryButtons.find((b) => b.filterKey === activeKey)
                  ?.label ?? activeKey}
              </span>
              」に一致する{" "}
              <span className="font-semibold text-coral">{filtered.length}</span>{" "}
              件
            </p>
            {filtered.length === 0 ? (
              <p className="text-sm text-ink-muted">
                該当するアイスブレイクがありません。
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {filtered.map((item) => (
                  <IcebreakerCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
