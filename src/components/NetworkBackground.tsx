// Hand-placed on a 600x800 canvas so it never needs layout work at runtime.
const nodes: [number, number][] = [
  [60, 80], [180, 40], [300, 110], [440, 60], [540, 150],
  [110, 200], [230, 230], [360, 210], [480, 290],
  [40, 330], [160, 360], [290, 340], [420, 400], [560, 430],
  [90, 500], [210, 520], [340, 480], [470, 540],
  [60, 650], [180, 640], [300, 620], [430, 680], [540, 640],
  [120, 760], [260, 740], [400, 780],
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [2, 6], [3, 7], [4, 8],
  [5, 6], [6, 7], [7, 8],
  [5, 9], [6, 10], [7, 11], [8, 13],
  [9, 10], [10, 11], [11, 12], [12, 13],
  [10, 14], [11, 15], [12, 16], [13, 17],
  [14, 15], [15, 16], [16, 17],
  [14, 18], [15, 19], [16, 20], [17, 22],
  [18, 19], [19, 20], [20, 21], [21, 22],
  [19, 23], [20, 24], [21, 25],
  [23, 24], [24, 25],
];

const pulsing = [2, 7, 11, 16, 20, 24];

// [from, to, seconds, delay]; each must be an existing edge.
const packets: [number, number, number, number][] = [
  [1, 2, 6, 0],
  [10, 6, 8, 2],
  [11, 15, 7, 4],
  [17, 22, 9, 1],
  [5, 9, 7, 5],
  [19, 23, 8, 3],
];

export default function NetworkBackground() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[26rem] opacity-15 [mask-image:linear-gradient(to_bottom,#000_40%,transparent)] lg:fixed lg:right-auto lg:h-screen lg:w-[46vw] lg:opacity-35 lg:[mask-image:linear-gradient(to_right,#000_45%,transparent)]"
      >
        <svg
          viewBox="0 0 600 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          strokeWidth={1}
          className="h-full w-full"
        >
          <g className="stroke-ink/10">
            {edges.map(([a, b]) => (
              <line
                key={`${a}-${b}`}
                x1={nodes[a][0]}
                y1={nodes[a][1]}
                x2={nodes[b][0]}
                y2={nodes[b][1]}
              />
            ))}
          </g>

          <g className="fill-canvas stroke-ink/20">
            {nodes.map(([x, y], i) => {
              const pulseIndex = pulsing.indexOf(i);
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={3}
                  className={pulseIndex >= 0 ? "motion-safe:animate-node-pulse" : ""}
                  style={
                    pulseIndex >= 0
                      ? { animationDelay: `${pulseIndex * 0.7}s` }
                      : undefined
                  }
                />
              );
            })}
          </g>

          {packets.map(([from, to, seconds, delay]) => {
            const [ax, ay] = nodes[from];
            const [bx, by] = nodes[to];
            return (
              <g
                key={`${from}-${to}`}
                className="animate-packet stroke-none motion-reduce:hidden"
                style={
                  {
                    "--dx": `${bx - ax}px`,
                    "--dy": `${by - ay}px`,
                    animationDuration: `${seconds}s`,
                    animationDelay: `${delay}s`,
                  } as React.CSSProperties
                }
              >
                <circle cx={ax} cy={ay} r={5} className="fill-accent/20" />
                <circle cx={ax} cy={ay} r={2} className="fill-accent" />
              </g>
            );
          })}
        </svg>
      </div>

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 shadow-[inset_0_0_120px_30px_rgb(0_0_0/0.4)]"
      />
    </>
  );
}
