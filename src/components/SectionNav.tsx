"use client";

import { useEffect, useState } from "react";

export interface NavItem {
  id: string;
  label: string;
}

export default function SectionNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    // Where nav links land a section (scroll-mt-24 = 96px) plus tolerance.
    const OFFSET = 100;

    const update = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      let current = items[0]?.id ?? "";
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= OFFSET) current = id;
      }
      setActive(atBottom ? items[items.length - 1].id : current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  return (
    <nav aria-label="Sections" className="mt-16 hidden lg:block">
      <ul className="flex flex-col gap-4">
        {items.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className={`group flex items-center gap-4 font-mono text-xs uppercase tracking-widest transition-[color,text-shadow] ${
                  isActive
                    ? "text-accent [text-shadow:0_0_10px_var(--color-accent)]"
                    : "text-ink-muted [text-shadow:0_0_0_transparent] hover:text-ink"
                }`}
              >
                <span
                  className={`h-px bg-current transition-all ${
                    isActive
                      ? "w-16 shadow-[0_0_6px_var(--color-accent)]"
                      : "w-8 group-hover:w-16"
                  }`}
                />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
