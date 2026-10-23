import type { Region, Trek } from "./types";
import * as everest from "./everest";
import * as annapurna from "./annapurna";
import * as langtang from "./langtang";
import * as manaslu from "./manaslu";
import * as makalu from "./makalu";
import * as kangchenjunga from "./kangchenjunga";
import * as tibet from "./tibet";
import * as bhutan from "./bhutan";

// Display order of regions.
const MODULES: { region: Region; treks: Trek[] }[] = [
  everest, annapurna, langtang, manaslu, makalu, kangchenjunga, tibet, bhutan,
];

export const REGION_LIST: Region[] = MODULES.map((m) => m.region);
export const ALL_TREKS: Trek[] = MODULES.flatMap((m) => m.treks);
