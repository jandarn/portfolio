import profileJson from "@/data/profile.json";
import aboutJson from "@/data/about.json";
import experienceJson from "@/data/experience.json";
import educationJson from "@/data/education.json";
import projectsJson from "@/data/projects.json";
import linksJson from "@/data/links.json";
import type {
  About,
  EducationItem,
  ExperienceItem,
  LinkItem,
  Profile,
  Project,
} from "@/types/content";

export const profile = profileJson as Profile;
export const about = aboutJson as About;
export const experience = experienceJson as ExperienceItem[];
export const education = educationJson as EducationItem[];
export const projects = projectsJson as Project[];
export const links = linksJson as LinkItem[];

const monthFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** Formats "YYYY-MM" as "Jan 2025". */
export function formatMonth(value: string): string {
  return monthFormat.format(new Date(`${value}-01T00:00:00Z`));
}

export function formatRange(start: string, end: string | null): string {
  if (start === end) return formatMonth(start);
  return `${formatMonth(start)} — ${end ? formatMonth(end) : "Present"}`;
}

/** Whole months from start to end, both inclusive. An open end means the build date. */
export function monthsBetween(start: string, end: string | null): number {
  const [sy, sm] = start.split("-").map(Number);
  const now = new Date();
  const [ey, em] = end
    ? end.split("-").map(Number)
    : [now.getFullYear(), now.getMonth() + 1];
  return (ey - sy) * 12 + (em - sm) + 1;
}

export function formatDuration(months: number): string {
  if (months < 12) return `${months} mo`;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return `${years} yr${years > 1 ? "s" : ""}${rest ? ` ${rest} mo` : ""}`;
}
