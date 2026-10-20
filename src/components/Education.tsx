import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { DecorationBadge, DecorationPanel } from "@/components/Decoration";
import { education, formatMonth, formatRange } from "@/lib/content";
import type { EducationItem } from "@/types/content";

// Certifications show a single date: when they were issued, or Present while pending.
function dateLabel(item: EducationItem): string {
  if (item.kind !== "certification") return formatRange(item.start, item.end);
  return item.end ? formatMonth(item.end) : "Present";
}

// Masks (not gradient colors) so the neon glow fades together with the line.
const fadeMask = {
  none: "",
  top: "[mask-image:linear-gradient(to_bottom,transparent,#000_56px)]",
  bottom:
    "[mask-image:linear-gradient(to_bottom,#000_calc(100%_-_56px),transparent)]",
  both: "[mask-image:linear-gradient(to_bottom,transparent,#000_56px,#000_calc(100%_-_56px),transparent)]",
};

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="group/list relative ml-1">
        <span
          aria-hidden
          className={`pointer-events-none absolute bottom-0 left-0 top-0 w-px bg-line ${fadeMask.bottom}`}
        />
        <ol>
          {education.map((item, i) => {
            const done = item.end !== null;
            const fadesTop = done && education[i - 1]?.end === null;
            const isLast = i === education.length - 1;
            const mask =
              fadeMask[
                fadesTop ? (isLast ? "both" : "top") : isLast ? "bottom" : "none"
              ];

            return (
              <li
                key={`${item.title}-${item.start}`}
                data-done={done || undefined}
                className="group/entry relative pb-10 pl-8 last:pb-0"
              >
                {item.decoration && <DecorationPanel src={item.decoration} />}
                {done && (
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -left-3 bottom-0 top-0 w-6 ${mask}`}
                  >
                    <span className="absolute inset-y-0 left-3 w-px bg-ink/30" />
                    <span className="absolute inset-y-0 left-3 w-px bg-accent opacity-0 transition-opacity duration-300 [filter:drop-shadow(0_0_3px_var(--color-accent))_drop-shadow(0_0_8px_var(--color-accent))] group-has-[[data-done]:hover]/list:opacity-100" />
                  </span>
                )}
                <span
                  aria-hidden
                  className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border ${
                    done
                      ? "border-accent bg-accent shadow-[0_0_4px_var(--color-accent)] transition-shadow duration-300 group-has-[[data-done]:hover]/list:shadow-[0_0_6px_var(--color-accent),0_0_14px_var(--color-accent)]"
                      : "border-line-strong bg-canvas"
                  }`}
                />
                <p className="font-mono text-xs uppercase tracking-wide text-ink-muted">
                  {dateLabel(item)} · {item.kind}
                </p>
                <div className="mt-1 flex items-start justify-between gap-4">
                  <h3 className="font-medium text-ink">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:text-accent"
                      >
                        {item.title} · {item.institution}
                      </a>
                    ) : (
                      <>
                        {item.title} · {item.institution}
                      </>
                    )}
                  </h3>
                  {item.decoration && <DecorationBadge src={item.decoration} />}
                </div>
                <p className="mt-2 text-sm leading-normal text-ink-dim">
                  {item.description}
                </p>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Technologies"
                >
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
