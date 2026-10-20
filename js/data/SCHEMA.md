# Trek data schema

Every region lives in its own file, `js/data/<region>.js`. A region file does two things:
registers the region's metadata on `window.PP_REGIONS`, and pushes its treks onto `window.PP_TREKS`.
`treks.html` and `book.html` render entirely from this data, so nothing else needs editing to add a trek.

```js
window.PP_REGIONS = window.PP_REGIONS || {};
window.PP_REGIONS['manaslu'] = { /* region object */ };

window.PP_TREKS = window.PP_TREKS || [];
window.PP_TREKS.push(
  { /* trek object */ },
  { /* trek object */ }
  /*__END__*/
);
```

Keep the `/*__END__*/` marker as the last thing inside `push(...)` so new treks can be inserted before it.
Plain ES5-compatible object literals only (no imports, no template-literal logic). Straight quotes, valid JS.

## Region object

| field | type | notes |
|---|---|---|
| id | string | kebab-case, matches the file name and every trek's `region` |
| name | string | display name, e.g. `Manaslu` |
| country | string | `Nepal`, `Tibet (China)` or `Bhutan` |
| tagline | string | one sentence, max ~140 chars |
| intro | string[] | 2 paragraphs about the region: geography, culture, what makes it distinct |
| bestSeasons | string | when to go and why, 1-2 sentences |
| permitsSummary | string | the permits and rules a visitor needs for this region, 1-3 sentences |
| gettingThere | string | how trekkers reach the region from Kathmandu / the gateway city |
| operator | `'peakpursuit'` or `'partner'` | `partner` when a licensed local operator must run the trip (Tibet, Bhutan) |
| operatorNote | string or null | required when `operator` is `partner`: plain-English explanation shown to customers |
| hero | image | wide landscape photo used as the region banner |
| gallery | image[] | 3-4 further photos of the region |

## Trek object

| field | type | notes |
|---|---|---|
| id | string | kebab-case, globally unique, prefixed with the region for new treks (`manaslu-circuit`) |
| region | string | region id |
| title | string | display title |
| tagline | string | 1-2 sentences, max ~220 chars |
| difficulty | `'green'` `'blue'` `'black'` `'double'` | green = easy, blue = intermediate, black = difficult, double = expert / technical peak or glaciated pass |
| tags | string[] | any of: `cultural`, `peak`, `pass`, `pilgrimage`, `remote`, `camping`, `short` |
| days | number | total trip days; **must equal `itinerary.length`** |
| walkingDays | number | days spent trekking or climbing |
| maxAlt | number | highest point reached, metres |
| maxAltName | string | name of that point, e.g. `Larkya La` |
| distanceKm | number or null | approximate total walking distance |
| startPoint / endPoint | string | e.g. `Soti Khola (by road from Kathmandu)` |
| minGroupSize | number or null | set when regulations require a minimum group (restricted areas) |
| price | number | "from" price per person in USD |
| priceNote | string | what the price assumes (group size, inclusions, mandatory fees) |
| priceIsEstimate | boolean | `true` for every new trek. Prices are placeholders until the owners confirm them |
| seasonBadge | string | short, max ~26 chars, e.g. `Mar-May / Sep-Nov` (use an en dash) |
| bestSeasons | string | 1-2 sentences |
| accommodation | string | short, e.g. `Teahouse`, `Camping`, `Teahouse + Camping`, `Hotel + Camping` |
| operator | `'peakpursuit'` or `'partner'` | same meaning as on the region |
| operatorNote | string or null | required for `partner` treks |
| overview | string[] | 2-3 paragraphs: what the trek is, who it suits, how the days flow |
| highlights | string[] | 5-7 short bullet lines |
| permits | `{name, note}`[] | every permit/fee needed with a one-line note (cost where known) |
| included | string[] | at least 6 items |
| excluded | string[] | at least 5 items |
| fitness | string | training and experience expected |
| safetyNotes | string[] | 2-4 items: altitude, weather, evacuation, anything specific to this route |
| hero | image | main photo, used on the card and top of the detail view |
| gallery | image[] | 2-4 extra photos for the detail view |
| itinerary | day[] | one entry per day, see below |
| sources | string[] | at least 2 `https://` pages the facts were checked against |

## Itinerary day object

One entry per calendar day, numbered 1..N with no ranges (an acclimatization day is its own entry).

| field | type | notes |
|---|---|---|
| day | number | 1-based, sequential |
| title | string | route style, e.g. `Trek from Machha Khola to Jagat` |
| sleepAlt | number or null | overnight altitude in metres; `null` only if genuinely not applicable |
| activity | string | one of `Arrival`, `Drive`, `Flight`, `Trek`, `Acclimatization`, `Rest`, `Pass crossing`, `Summit day`, `Sightseeing`, `Departure`, `Reserve day` |
| duration | string | `5-6 hrs trek`, `8 hrs drive` (use an en dash for ranges) |
| distanceKm | string or null | approximate, e.g. `~14 km`; null if not meaningful |
| meals | string | e.g. `Breakfast, lunch, dinner`; arrival/city days `Breakfast` |
| stay | string | e.g. `Teahouse, Jagat` or `Hotel, Kathmandu` |
| description | string | 2-4 sentences, original wording, concrete: terrain, landmarks, what the day feels like, practical tips |

## Image object

```js
{
  src: 'https://commons.wikimedia.org/wiki/Special:FilePath/File_name.jpg?width=1280',
  alt: 'Plain description of what the photo shows',
  credit: 'Photo: Author name / Wikimedia Commons',
  license: 'CC BY-SA 4.0',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:File_name.jpg'
}
```

* Allowed licences: public domain, CC0, CC BY (any version), CC BY-SA (any version). No NC, ND, "fair use" or unknown licences.
* The file page must confirm the photo actually shows what `alt` claims (right peak, right valley, right country).
* Local images already in the repo (Everest treks only) use `src: 'images/...'` and `credit: null`, `license: null`, `sourceUrl: null`.
* If no verified photo can be found, use `null` rather than an unverified or wrong-place image.
