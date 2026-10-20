import SectionNav, { type NavItem } from "@/components/SectionNav";
import { links, profile } from "@/lib/content";

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[38%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          <a href="#top">{profile.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium text-ink sm:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-ink-dim">
          {profile.tagline}
        </p>
        <SectionNav items={navItems} />
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block rounded-full border border-line px-5 py-2 font-mono text-xs uppercase tracking-widest text-ink-dim transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent lg:mt-12"
        >
          Contact
        </a>
      </div>

      <ul className="mt-8 flex flex-wrap items-center gap-5 lg:mt-0" aria-label="Social links">
        {links.map(({ label, url }) => (
          <li key={label}>
            <a
              href={url}
              target={url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer noopener"
              className="font-mono text-sm text-ink-dim transition-colors hover:text-accent"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
