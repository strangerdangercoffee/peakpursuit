import type { Trek } from "@/data/treks/types";
import { num } from "@/lib/treks";

/** Overnight altitude by day, drawn as inline SVG. */
export default function AltitudeChart({ trek: t }: { trek: Trek }) {
  const days = t.itinerary || [];
  const pts = days.filter((d): d is typeof d & { sleepAlt: number } => typeof d.sleepAlt === "number");
  if (pts.length < 2 || days.length < 2) return null;

  const W = 800, H = 250, pl = 58, pr = 18, pt = 30, pb = 36;
  const sleepMax = Math.max(...pts.map((p) => p.sleepAlt));
  const sleepMin = Math.min(...pts.map((p) => p.sleepAlt));
  const top = Math.max(t.maxAlt || 0, sleepMax);
  const lo = Math.max(0, Math.floor((sleepMin - 300) / 500) * 500);
  const hi = Math.ceil((top + 150) / 500) * 500;
  const step = hi - lo > 3500 ? 1000 : 500;
  const n = days.length;
  const X = (day: number) => pl + ((day - 1) / (n - 1)) * (W - pl - pr);
  const Y = (a: number) => pt + (1 - (a - lo) / (hi - lo)) * (H - pt - pb);

  const grid: number[] = [];
  for (let g = Math.ceil(lo / step) * step; g <= hi; g += step) grid.push(g);
  const every = Math.ceil(n / 14);
  const xLabels: number[] = [];
  for (let d = 1; d <= n; d++) if (d === 1 || d === n || d % every === 0) xLabels.push(d);

  const line = pts.map((p) => `${X(p.day).toFixed(1)},${Y(p.sleepAlt).toFixed(1)}`).join(" ");
  const area = `${X(pts[0].day).toFixed(1)},${Y(lo).toFixed(1)} ${line} ${X(pts[pts.length - 1].day).toFixed(1)},${Y(lo).toFixed(1)}`;

  const showMaxLine = !!t.maxAlt && t.maxAlt > sleepMax + 60;
  const peak = pts.find((p) => p.sleepAlt === sleepMax)!;

  return (
    <svg
      className="alt-chart"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Overnight altitude by day, from ${num(sleepMin)} to ${num(sleepMax)} metres`}
    >
      {grid.map((g) => (
        <g key={g}>
          <line className="alt-grid" x1={pl} x2={W - pr} y1={Y(g).toFixed(1)} y2={Y(g).toFixed(1)} />
          <text className="alt-axis" x={pl - 8} y={(Y(g) + 4).toFixed(1)} textAnchor="end">{num(g)}m</text>
        </g>
      ))}
      <polygon className="alt-area" points={area} />
      <polyline className="alt-line" points={line} />
      {showMaxLine ? (
        <>
          <line className="alt-max" x1={pl} x2={W - pr} y1={Y(t.maxAlt).toFixed(1)} y2={Y(t.maxAlt).toFixed(1)} />
          <text className="alt-max-label" x={W - pr} y={(Y(t.maxAlt) - 6).toFixed(1)} textAnchor="end">
            Highest point: {t.maxAltName || ""} {num(t.maxAlt)}m
          </text>
        </>
      ) : (
        <text
          className="alt-max-label"
          x={X(peak.day).toFixed(1)}
          y={(Y(sleepMax) - 10).toFixed(1)}
          textAnchor={peak.day > n * 0.7 ? "end" : "middle"}
        >
          Highest sleep: {num(sleepMax)}m
        </text>
      )}
      {pts.map((p) => (
        <circle key={p.day} className="alt-dot" cx={X(p.day).toFixed(1)} cy={Y(p.sleepAlt).toFixed(1)} r={3.6}>
          <title>{`Day ${p.day}: ${p.title} — sleep at ${num(p.sleepAlt)}m`}</title>
        </circle>
      ))}
      {xLabels.map((d) => (
        <text key={d} className="alt-axis" x={X(d).toFixed(1)} y={H - 12} textAnchor="middle">Day {d}</text>
      ))}
    </svg>
  );
}
