import ProjectVisual from "@/components/visuals/ProjectVisual";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { projects } from "@/lib/content";

const blueprintGrid =
  "bg-canvas bg-[linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:20px_20px]";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.title}
            className="group/project min-w-0 xl:last:odd:col-span-2 xl:last:odd:w-[calc(50%-0.5rem)] xl:last:odd:justify-self-center"
          >
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_24px_-8px_var(--color-accent)] motion-safe:hover:-translate-y-0.5">
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="aspect-[16/10] w-full border-b border-line object-cover"
                />
              ) : (
                project.visual && (
                  <div
                    className={`aspect-[16/10] border-b border-line ${blueprintGrid}`}
                  >
                    <ProjectVisual type={project.visual} />
                  </div>
                )
              )}

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-medium text-ink">{project.title}</h3>
                <p className="mt-2 text-sm leading-normal text-ink-dim">
                  {project.description}
                </p>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Technologies"
                >
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ul>
                {(project.repo || project.url) && (
                  <p className="mt-auto flex gap-4 pt-4 font-mono text-xs">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-ink-dim hover:text-accent"
                      >
                        repo ↗
                      </a>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-ink-dim hover:text-accent"
                      >
                        live ↗
                      </a>
                    )}
                  </p>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
