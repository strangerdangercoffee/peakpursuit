import { ALL_TREKS, REGION_LIST } from "@/data/treks";
import type { Difficulty, Region, Trek } from "@/data/treks/types";

export const DIFFICULTY: Record<
  Difficulty,
  { rank: number; label: string; icon: string; cls: string; text: string }
> = {
  green: { rank: 1, label: "Green Circle", icon: "●", cls: "diff-green", text: "Green Circle ●" },
  blue: { rank: 2, label: "Blue Square", icon: "■", cls: "diff-blue", text: "Blue Square ■" },
  black: { rank: 3, label: "Black Diamond", icon: "◆", cls: "diff-black", text: "Black Diamond ◆" },
  double: { rank: 4, label: "Double Black", icon: "◆◆", cls: "diff-double-black", text: "Double Black ◆◆" },
};

export const num = (n: number) => Number(n).toLocaleString("en-US");
export const altLabel = (m: number) => `${num(m)}m`;
export const priceLabel = (t: Trek) => (t.price ? `$${num(t.price)}` : "Ask for quote");
export const pad2 = (n: number) => (n < 10 ? "0" : "") + n;

export const getTrek = (id: string): Trek | null => ALL_TREKS.find((t) => t.id === id) ?? null;
export const getRegion = (id: string): Region | null => REGION_LIST.find((r) => r.id === id) ?? null;

// Treks of one region: easiest first, otherwise in the order they were written.
export function treksOf(regionId: string): Trek[] {
  return ALL_TREKS.map((t, i) => ({ t, i }))
    .filter((x) => x.t.region === regionId)
    .sort((a, b) => DIFFICULTY[a.t.difficulty].rank - DIFFICULTY[b.t.difficulty].rank || a.i - b.i)
    .map((x) => x.t);
}

export interface RegionGroup {
  id: string;
  info: Region;
  treks: Trek[];
}

// Regions that actually have treks, in display order.
export function regionGroups(): RegionGroup[] {
  return REGION_LIST.map((r) => ({ id: r.id, info: r, treks: treksOf(r.id) })).filter((r) => r.treks.length);
}

// Small inline SVG usable as an <img src> when there is no photo.
export function placeholderUri(label: string): string {
  const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1A3F6F"/><stop offset="1" stop-color="#071526"/></linearGradient></defs>' +
    '<rect width="640" height="420" fill="url(#g)"/>' +
    '<path d="M0 340 L150 200 L230 270 L360 120 L500 280 L560 230 L640 320 V420 H0Z" fill="#0D2137" opacity=".8"/>' +
    '<text x="320" y="390" text-anchor="middle" font-family="Georgia,serif" font-size="30" fill="#F59547">' +
    esc(label || "") +
    "</text></svg>";
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// Image used for a trek when picking it in the booking flow.
export function trekImageSrc(t: Trek): string {
  const r = getRegion(t.region);
  return t.hero?.src || r?.hero?.src || placeholderUri(r?.name || t.title);
}
