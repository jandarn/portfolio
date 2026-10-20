import {
  accentFill,
  accentLine,
  box,
  boxAccent,
  boxDashed,
  dashed,
  faint,
  label,
  line,
} from "@/components/visuals/styles";
import type { VisualType } from "@/types/content";

function Network() {
  const hub = [160, 100];
  const spokes = [
    [70, 50],
    [70, 150],
    [250, 45],
    [255, 150],
    [160, 30],
    [160, 170],
  ];
  const ring = [
    [70, 50, 160, 30],
    [160, 30, 250, 45],
    [70, 150, 160, 170],
    [160, 170, 255, 150],
  ];

  return (
    <>
      {spokes.map(([x, y]) => (
        <line key={`s${x}-${y}`} x1={hub[0]} y1={hub[1]} x2={x} y2={y} className={line} />
      ))}
      {ring.map(([x1, y1, x2, y2]) => (
        <line key={`r${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} className={dashed} />
      ))}
      {spokes.map(([x, y]) => (
        <circle key={`n${x}-${y}`} cx={x} cy={y} r={5} className={box} />
      ))}
      <circle cx={hub[0]} cy={hub[1]} r={16} className={dashed} />
      <circle cx={hub[0]} cy={hub[1]} r={6} className={accentFill} />
    </>
  );
}

function Pipeline() {
  const stages = ["src", "build", "test", "ship"];
  const x = (i: number) => 20 + i * 76;

  return (
    <>
      {stages.slice(0, -1).map((name, i) => (
        <g key={`c${name}`}>
          <path d={`M${x(i) + 52} 100 H${x(i + 1)}`} className={dashed} />
          <path
            d={`M${x(i + 1) - 7} 95 L${x(i + 1) - 1} 100 L${x(i + 1) - 7} 105`}
            className={line}
          />
        </g>
      ))}
      {stages.map((name, i) => (
        <g key={name}>
          <rect
            x={x(i)}
            y={82}
            width={52}
            height={36}
            rx={4}
            className={i === stages.length - 1 ? boxAccent : box}
          />
          <text
            x={x(i) + 26}
            y={100}
            textAnchor="middle"
            dominantBaseline="middle"
            className={label}
          >
            {name}
          </text>
        </g>
      ))}
    </>
  );
}

function Chart() {
  const points = [
    [30, 140],
    [70, 118],
    [110, 128],
    [150, 92],
    [190, 102],
    [230, 62],
    [270, 74],
    [300, 40],
  ];
  const d = points.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");
  const last = points[points.length - 1];

  return (
    <>
      {[50, 90, 130].map((y) => (
        <line key={y} x1={30} y1={y} x2={300} y2={y} className={faint} />
      ))}
      <path d="M30 30 V170 H300" className={line} />
      <path d={`${d} V170 H30 Z`} className="fill-accent/10 stroke-none" />
      <path d="M30 80 H300" className={dashed} />
      <path d={d} className={accentLine} />
      <circle cx={last[0]} cy={last[1]} r={4} className={accentFill} />
    </>
  );
}

function Blueprint() {
  return (
    <>
      <path d="M160 50 V68 H86 V86 M160 50 V68 H234 V86" className={dashed} />
      <path d="M86 114 V132 H160 V150 M234 114 V132 H160 V150" className={dashed} />
      <path d="M46 190 H274 M46 186 V194 M274 186 V194" className={line} />
      <path d="M10 22 V10 H22 M310 178 V190 H298" className={line} />
      {[
        [120, 22, "lb"],
        [46, 86, "app"],
        [194, 86, "app"],
      ].map(([x, y, name]) => (
        <g key={`${x}-${y}`}>
          <rect x={x as number} y={y as number} width={80} height={28} rx={3} className={boxDashed} />
          <text
            x={(x as number) + 40}
            y={(y as number) + 14}
            textAnchor="middle"
            dominantBaseline="middle"
            className={label}
          >
            {name}
          </text>
        </g>
      ))}
      <rect x={120} y={150} width={80} height={28} rx={3} className={boxAccent} />
      <text
        x={160}
        y={164}
        textAnchor="middle"
        dominantBaseline="middle"
        className={label}
      >
        db
      </text>
    </>
  );
}

function Chevron({ x, y }: { x: number; y: number }) {
  return <path d={`M${x - 6} ${y - 5} L${x} ${y} L${x - 6} ${y + 5}`} className={line} />;
}

function Text({
  x,
  y,
  children,
  start,
}: {
  x: number;
  y: number;
  children: string;
  start?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={start ? "start" : "middle"}
      dominantBaseline="middle"
      className={label}
    >
      {children}
    </text>
  );
}

// Terraform account factory adding accounts to an AWS Organization.
function LandingZone() {
  const accounts = [152, 214, 276];

  return (
    <>
      <rect x={116} y={16} width={190} height={168} rx={6} className={`${line} [stroke-dasharray:3_3]`} />
      <Text x={124} y={28} start>aws org</Text>
      <path d="M211 58 V75 M152 75 H276 M152 75 V92 M214 75 V92 M276 75 V92" className={line} />
      <rect x={186} y={36} width={50} height={22} rx={3} className={box} />
      <Text x={211} y={47}>mgmt</Text>
      {accounts.map((cx) => (
        <g key={cx}>
          <rect x={cx - 22} y={92} width={44} height={26} rx={3} className={box} />
          <Text x={cx} y={105}>acct</Text>
        </g>
      ))}
      <rect x={192} y={140} width={44} height={26} rx={3} className={boxAccent} />
      <Text x={214} y={153}>new</Text>

      <Text x={49} y={68}>terraform</Text>
      <rect x={14} y={78} width={70} height={44} rx={4} className={box} />
      <Text x={49} y={100}>factory</Text>
      <path d="M84 100 H100 V153 H192" className={dashed} />
      <Chevron x={192} y={153} />
    </>
  );
}

// Docs service in the middle, surrounded by the pieces that run and protect it.
function DocsStack() {
  const hub = [160, 100];
  const actors = [
    { name: "nginx", x: 160, y: 24, flow: true },
    { name: "ldap", x: 278, y: 56, flow: false },
    { name: "grafana", x: 278, y: 144, flow: false },
    { name: "prom", x: 160, y: 176, flow: true },
    { name: "scripts", x: 44, y: 144, flow: false },
    { name: "docker", x: 44, y: 56, flow: false },
  ];

  return (
    <>
      {actors.map((a) => (
        <line
          key={`l-${a.name}`}
          x1={hub[0]}
          y1={hub[1]}
          x2={a.x}
          y2={a.y}
          className={a.flow ? dashed : line}
        />
      ))}
      <line x1={160} y1={176} x2={278} y2={144} className={dashed} />
      {actors.map((a) => (
        <g key={a.name}>
          <rect x={a.x - 30} y={a.y - 12} width={60} height={24} rx={3} className={box} />
          <Text x={a.x} y={a.y}>{a.name}</Text>
        </g>
      ))}
      <rect x={132} y={82} width={56} height={36} rx={4} className="fill-canvas stroke-none" />
      <rect x={132} y={82} width={56} height={36} rx={4} className={boxAccent} />
      <Text x={hub[0]} y={hub[1]}>docs</Text>
    </>
  );
}

// Push to GitHub, run the Actions workflow, publish the site.
function Cicd() {
  const steps = [
    { name: "build", x: 142 },
    { name: "test", x: 179 },
    { name: "ship", x: 216 },
  ];

  return (
    <>
      <path d="M58 100 H76" className={dashed} />
      <Chevron x={76} y={100} />
      <path d="M122 100 H136" className={dashed} />
      <Chevron x={136} y={100} />
      <path d="M256 100 H270" className={dashed} />
      <Chevron x={270} y={100} />

      <rect x={12} y={86} width={46} height={28} rx={3} className={box} />
      <Text x={35} y={100}>push</Text>
      <rect x={76} y={86} width={46} height={28} rx={3} className={box} />
      <Text x={99} y={100}>repo</Text>

      <rect x={136} y={66} width={120} height={68} rx={5} className={`${line} [stroke-dasharray:3_3]`} />
      <Text x={196} y={58}>actions</Text>
      {steps.map((s) => (
        <g key={s.name}>
          <rect x={s.x} y={88} width={34} height={24} rx={3} className={box} />
          <Text x={s.x + 17} y={100}>{s.name}</Text>
          <circle cx={s.x + 17} cy={122} r={2} className={accentFill} />
        </g>
      ))}

      <rect x={270} y={86} width={40} height={28} rx={3} className={boxAccent} />
      <Text x={290} y={100}>site</Text>
    </>
  );
}

// Claude Code inside a container: one scoped volume in, the rest of the host blocked.
function Sandbox() {
  return (
    <>
      <rect x={90} y={28} width={140} height={144} rx={8} className={`${line} [stroke-dasharray:3_3]`} />
      <Text x={160} y={20}>container</Text>

      <path d="M70 100 H110" className={dashed} />
      <Chevron x={110} y={100} />
      <rect x={14} y={86} width={56} height={28} rx={3} className={box} />
      <Text x={42} y={100}>volume</Text>

      <rect x={110} y={78} width={100} height={44} rx={4} className={boxAccent} />
      <Text x={160} y={100}>claude code</Text>
      <Text x={160} y={150}>non-root</Text>

      <path d="M210 100 H230" className={line} />
      <path d="M236 94 L246 106 M246 94 L236 106" className={accentLine} />
      <rect x={258} y={86} width={52} height={28} rx={3} className={box} />
      <Text x={284} y={100}>host</Text>
    </>
  );
}

const visuals = {
  network: Network,
  pipeline: Pipeline,
  chart: Chart,
  blueprint: Blueprint,
  "landing-zone": LandingZone,
  "docs-stack": DocsStack,
  cicd: Cicd,
  sandbox: Sandbox,
};

export default function ProjectVisual({ type }: { type: VisualType }) {
  const Visual = visuals[type];

  return (
    <svg
      aria-hidden
      viewBox="0 0 320 200"
      fill="none"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full p-2 transition-[filter] duration-300 group-hover/project:[filter:drop-shadow(0_0_4px_var(--color-accent))]"
    >
      <Visual />
    </svg>
  );
}
