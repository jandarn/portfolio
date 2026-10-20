import Section from "@/components/Section";
import { about } from "@/lib/content";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-4 text-ink-dim">
        {about.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </Section>
  );
}
