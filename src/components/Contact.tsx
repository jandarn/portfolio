import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <footer className="pb-16 text-sm text-ink-muted">
      <p>
        Want to get in touch?{" "}
        <a
          href={`mailto:${profile.email}`}
          className="font-medium text-ink hover:text-accent"
        >
          {profile.email}
        </a>
      </p>
    </footer>
  );
}
