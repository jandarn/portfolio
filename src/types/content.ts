export interface Profile {
  name: string;
  title: string;
  tagline: string;
  description: string;
  email: string;
  /** Path or URL to the résumé. Set to null to hide the link. */
  resumeUrl: string | null;
  availability: {
    open: boolean;
    label: string;
  };
}

export interface About {
  paragraphs: string[];
}

export interface ExperienceArea {
  title: string;
  tasks: string[];
  tags?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  url: string | null;
  /** Format: YYYY-MM */
  start: string;
  /** Format: YYYY-MM. null means "Present". */
  end: string | null;
  description: string;
  tags: string[];
  /** Path to a transparent SVG/PNG shown as a silhouette on hover. Omit for none. */
  decoration?: string | null;
  areas?: ExperienceArea[];
}

export interface EducationItem {
  title: string;
  institution: string;
  kind: "degree" | "certification";
  url: string | null;
  /** Format: YYYY-MM */
  start: string;
  /** Format: YYYY-MM. null means in progress. */
  end: string | null;
  description: string;
  tags: string[];
  /** Path to a transparent SVG/PNG shown as a silhouette on hover. Omit for none. */
  decoration?: string | null;
}

export type VisualType =
  | "network"
  | "pipeline"
  | "chart"
  | "blueprint"
  | "landing-zone"
  | "docs-stack"
  | "cicd"
  | "sandbox";

export interface Project {
  title: string;
  description: string;
  repo: string | null;
  url: string | null;
  image: string | null;
  /** Generated SVG shown when there is no image. */
  visual?: VisualType | null;
  tags: string[];
}

export interface LinkItem {
  label: string;
  url: string;
}
