import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { DecorationBadge, DecorationPanel } from "@/components/Decoration";
import {
  experience,
  formatDuration,
  formatRange,
  monthsBetween,
  profile,
} from "@/lib/content";
import type { ExperienceArea } from "@/types/content";

function DurationBar({ months }: { months: number }) {
  const filled = Math.min(months, 12);

  return (
    <div className="flex items-center gap-3">
      <div aria-hidden className="flex w-28 gap-0.5">
        {Array.from({ length: 12 }, (_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-[1px] ${
              i < filled
                ? "bg-accent shadow-[0_0_4px_var(--color-accent)]"
                : "bg-line"
            }`}
          />
        ))}
      </div>
      <span className="font-mono text-xs text-ink-muted">
        {formatDuration(months)}
      </span>
    </div>
  );
}

function Leaf({ last, children }: { last: boolean; children: React.ReactNode }) {
  return (
    <li className="relative py-1.5 pl-6">
      <span
        aria-hidden
        className={`absolute left-0 top-0 w-px bg-line transition-colors group-open/area:bg-accent/30 ${
          last ? "h-4" : "h-full"
        }`}
      />
      <span
        aria-hidden
        className="absolute left-0 top-4 h-px w-4 bg-line transition-colors group-open/area:bg-accent/30"
      />
      {children}
    </li>
  );
}

function Area({
  area,
  last,
  defaultOpen,
}: {
  area: ExperienceArea;
  last: boolean;
  defaultOpen: boolean;
}) {
  const count = area.tasks.length;
  const hasTags = Boolean(area.tags?.length);

  return (
    <details open={defaultOpen} className="group/area relative">
      <span
        aria-hidden
        className={`pointer-events-none absolute -left-8 top-0 w-px bg-line ${
          last ? "h-4" : "h-full"
        }`}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-8 top-4 h-px w-8 bg-line transition-all group-hover/area:bg-accent group-open/area:bg-accent/70 group-open/area:shadow-[0_0_6px_var(--color-accent)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-1 top-3 h-2 w-2 rounded-full border border-line-strong bg-canvas transition-all group-hover/area:border-accent group-hover/area:shadow-[0_0_8px_var(--color-accent)] group-open/area:border-accent group-open/area:bg-accent group-open/area:shadow-[0_0_8px_var(--color-accent)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-4 hidden h-4 w-px bg-accent/30 group-open/area:block"
      />
      <summary className="flex cursor-pointer list-none items-center gap-3 rounded py-1.5 pl-4 text-sm focus-visible:outline-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
        <span className="font-medium text-ink-dim transition-colors group-hover/area:text-ink group-open/area:text-ink">
          {area.title}
        </span>
        <span
          aria-hidden
          className="h-px flex-1 border-t border-dashed border-line"
        />
        <span className="font-mono text-xs text-ink-muted">
          {count} {count === 1 ? "task" : "tasks"}
        </span>
        <svg
          aria-hidden
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-4 w-4 text-ink-muted transition-transform duration-200 group-open/area:rotate-90 group-open/area:text-accent"
        >
          <path d="M6 3l5 5-5 5" />
        </svg>
      </summary>
      <div className="pb-2">
        <ul>
          {area.tasks.map((task, i) => (
            <Leaf key={`${i}-${task}`} last={i === count - 1}>
              <p className="text-sm leading-normal text-ink-dim">{task}</p>
            </Leaf>
          ))}
        </ul>
        {hasTags && (
          <ul
            className="flex flex-wrap gap-2 pl-6 pt-2"
            aria-label="Technologies"
          >
            {area.tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </ul>
        )}
      </div>
    </details>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="flex flex-col gap-6">
        {experience.map((job) => {
          const areas = job.areas ?? [];

          return (
            <li key={`${job.company}-${job.start}`}>
              <article className="group/entry rounded-2xl border border-line bg-surface/60 p-5 transition-colors hover:border-line-strong sm:p-6">
                {job.decoration && <DecorationPanel src={job.decoration} />}
                <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                  <p className="font-mono text-xs uppercase tracking-wide text-ink-muted">
                    {formatRange(job.start, job.end)}
                  </p>
                  <DurationBar months={monthsBetween(job.start, job.end)} />
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="font-medium text-ink">
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:text-accent"
                      >
                        {job.role} · {job.company}
                      </a>
                    ) : (
                      <>
                        {job.role} · {job.company}
                      </>
                    )}
                  </h3>
                  {job.decoration && <DecorationBadge src={job.decoration} />}
                </div>
                <p className="mt-2 text-sm leading-normal text-ink-dim">
                  {job.description}
                </p>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Technologies"
                >
                  {job.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ul>

                {areas.length > 0 && (
                  <div className="mt-5 border-t border-line pt-3">
                    <div className="relative pl-8">
                      {areas.map((area, i) => (
                        <Area
                          key={area.title}
                          area={area}
                          last={i === areas.length - 1}
                          defaultOpen={i === 0}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </li>
          );
        })}
      </ol>

      {profile.resumeUrl && (
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-12 inline-block font-medium text-ink hover:text-accent"
        >
          View Full Résumé →
        </a>
      )}
    </Section>
  );
}
