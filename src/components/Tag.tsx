export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-line px-3 py-1 font-mono text-xs font-medium text-ink-dim transition-all duration-200 hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_10px_var(--color-accent)] hover:[text-shadow:0_0_8px_var(--color-accent)] motion-safe:hover:scale-110">
      {children}
    </li>
  );
}
