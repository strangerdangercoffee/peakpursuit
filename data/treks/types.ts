// Trek catalogue schema. Each region lives in data/treks/<region>.ts and is
// registered in data/treks/index.ts.

export type Difficulty = "green" | "blue" | "black" | "double";
export type Operator = "peakpursuit" | "partner";
export type TrekTag = "cultural" | "peak" | "pass" | "pilgrimage" | "remote" | "camping" | "short";

export interface TrekImage {
  src: string;
  alt: string;
  credit: string | null;
  license: string | null;
  sourceUrl: string | null;
}

export interface Region {
  id: string;
  name: string;
  country: string;
  tagline: string;
  intro: string[];
  bestSeasons: string;
  permitsSummary: string;
  gettingThere: string;
  operator: Operator;
  operatorNote: string | null;
  hero: TrekImage | null;
  gallery: TrekImage[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  sleepAlt: number | null;
  activity: string;
  duration: string;
  distanceKm: string | null;
  meals: string;
  stay: string;
  description: string;
}

export interface Permit {
  name: string;
  note: string;
}

export interface Trek {
  id: string;
  region: string;
  title: string;
  tagline: string;
  difficulty: Difficulty;
  tags: TrekTag[];
  days: number;
  walkingDays: number;
  maxAlt: number;
  maxAltName: string;
  distanceKm: number | null;
  startPoint: string;
  endPoint: string;
  minGroupSize: number | null;
  price: number;
  priceNote: string;
  priceIsEstimate: boolean;
  seasonBadge: string;
  bestSeasons: string;
  accommodation: string;
  operator: Operator;
  operatorNote: string | null;
  overview: string[];
  highlights: string[];
  permits: Permit[];
  included: string[];
  excluded: string[];
  fitness: string;
  safetyNotes: string[];
  hero: TrekImage | null;
  gallery: TrekImage[];
  itinerary: ItineraryDay[];
  sources: string[];
}
