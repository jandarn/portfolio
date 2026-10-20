export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mb-8 scroll-mt-16 lg:mb-10 lg:scroll-mt-24">
      <h2
        id={`${id}-title`}
        className="mb-6 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-ink-muted"
      >
        {title}
        <span
          aria-hidden
          className="h-px flex-1 bg-linear-to-r from-line-strong to-transparent"
        />
      </h2>
      {children}
    </section>
  );
}
