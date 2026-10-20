// Shared look for every project visual. Hover state comes from the card (`group/project`).
const fade = "transition-[stroke,fill] duration-300";

export const line = `stroke-ink/30 ${fade} group-hover/project:stroke-accent/80`;
export const dashed = `${line} [stroke-dasharray:4_6] group-hover/project:motion-safe:animate-flow`;
export const faint = "stroke-ink/10";
export const box = `fill-canvas stroke-ink/40 ${fade} group-hover/project:stroke-accent`;
export const boxDashed = `${box} [stroke-dasharray:3_3]`;
export const boxAccent = `fill-accent/15 stroke-accent`;
export const accentLine = "stroke-accent/80";
export const accentFill = "fill-accent stroke-none";
export const label =
  "fill-ink-muted font-mono text-[9px] uppercase tracking-wider";
