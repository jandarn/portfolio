import type { CSSProperties } from "react";

function silhouette(src: string): CSSProperties {
  const url = `url(${src})`;
  return {
    maskImage: url,
    WebkitMaskImage: url,
    maskSize: "contain",
    WebkitMaskSize: "contain",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
  };
}

// Place inside an element with `group/entry`; it shows while that entry is hovered or focused.
export function DecorationPanel({ src }: { src: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-0 top-1/2 -z-10 hidden aspect-square w-[24vw] max-w-[26rem] -translate-y-1/2 opacity-0 transition-opacity duration-500 [filter:blur(0.6px)_drop-shadow(0_0_14px_var(--color-accent))] [mask-image:radial-gradient(closest-side,#000_55%,transparent)] group-focus-within/entry:opacity-25 group-hover/entry:opacity-25 xl:block"
    >
      <span className="block h-full w-full bg-accent" style={silhouette(src)} />
    </div>
  );
}

export function DecorationBadge({ src }: { src: string }) {
  return (
    <span
      aria-hidden
      className="block h-8 w-8 shrink-0 bg-accent/70 xl:hidden"
      style={silhouette(src)}
    />
  );
}
