/* Everest (Khumbu) region data. Schema: js/data/SCHEMA.md
   Permit and fee figures checked October 2026 against operator and press sources; confirm before booking, rates change. */
window.PP_REGIONS = window.PP_REGIONS || {};
window.PP_REGIONS["everest"] = {
  id: "everest",
  name: "Everest (Khumbu)",
  country: "Nepal",
  tagline: "Sherpa villages, glacier valleys and the highest mountains on Earth, reached on foot from the airstrip at Lukla.",
  intro: [
    "The Khumbu fills the northeast corner of Nepal against the Tibetan border, in the Solukhumbu district. Three great valleys fan out from Namche Bazaar: the Imja valley toward Dingboche and Chhukung, the Khumbu Glacier valley toward Lobuche and Everest Base Camp, and the Gokyo valley beside the long Ngozumpa Glacier. Everest, Lhotse, Nuptse, Cho Oyu and Ama Dablam stand over these valleys, and the whole area is protected as Sagarmatha National Park, a UNESCO World Heritage Site.",
    "This is also a living Sherpa homeland. Trails pass stone-walled potato fields, long mani walls, prayer-flag ridges and yak caravans, and the gompas at Tengboche, Pangboche and Khumjung are still working monasteries. Teahouses make the region easy to walk without camping, and the range of trips is wide: a gentle five-day loop to Namche, base camp and viewpoint treks, the quiet Gokyo lakes, three high passes, and the trekking peaks of Island Peak, Lobuche East and Mera. Every itinerary here is built around slow, sensible height gain."
  ],
  bestSeasons: "Late September to November has the clearest skies and steadiest weather; March to May is warmer, with rhododendrons in bloom and the Everest climbing season under way at base camp. Winter is cold but often crisp and clear, while the June to August monsoon brings cloud, rain and disrupted flights.",
  permitsSummary: "Khumbu treks need the Sagarmatha National Park entry permit and the Khumbu Pasang Lhamu Rural Municipality trek card; a separate TIMS card is not used in this region. The Jiri approach adds a Gaurishankar Conservation Area permit, Mera Peak adds Makalu Barun National Park, and the trekking peaks (Mera, Island Peak, Lobuche East) each need an NMA climbing permit.",
  gettingThere: "Most Khumbu treks begin with a flight from Kathmandu to Lukla (2,860 m), about 35 minutes. In the busy spring and autumn seasons many Lukla flights are moved to Manthali (Ramechhap) airport, a pre-dawn drive of roughly 4-5 hours from Kathmandu followed by a flight of around 20 minutes; as of early October 2026 flights are running from Manthali. Lukla flights are weather-dependent, so keep a spare day or two at the end of your trip. The Jiri trek is the exception and starts with a road journey from Kathmandu.",
  operator: "peakpursuit",
  operatorNote: null,
  hero: { src: "images/above_clouds.jpeg", alt: "A sea of cloud filling a valley below sharp snow peaks under a deep blue Himalayan sky", credit: null, license: null, sourceUrl: null },
  gallery: [
    { src: "images/landing.JPG", alt: "The runway threshold marked 24 at Lukla airport, with sunbeams breaking through cloud over the valley", credit: null, license: null, sourceUrl: null },
    { src: "images/yak_shrine.JPG", alt: "A white stupa and a resting yak in a high Khumbu valley beneath snow-covered peaks", credit: null, license: null, sourceUrl: null },
    { src: "images/sunset_everest.jpeg", alt: "The summit pyramid of Everest glowing orange at sunset beside a lower ridge", credit: null, license: null, sourceUrl: null }
  ]
};

window.PP_TREKS = window.PP_TREKS || [];
window.PP_TREKS.push(
  {
    id: "namche",
    region: "everest",
    title: "Namche Bazaar Cultural Walk",
    tagline: "The gateway to Everest — explore the bustling Sherpa capital, visit the Everest Museum, hike to Khumjung, and acclimatize in comfort.",
    difficulty: "green",
    tags: ["cultural", "short"],
    days: 5,
    walkingDays: 3,
    maxAlt: 3440,
    maxAltName: "Namche Bazaar (day walks reach about 3,880 m near Syangboche)",
    distanceKm: 45,
    startPoint: "Lukla (flight from Kathmandu or Manthali)",
    endPoint: "Lukla, then flight to Kathmandu",
    minGroupSize: null,
    price: 690,
    priceNote: "Published 'from' price per person in USD. Ask us for an itemised quote showing exactly what is covered for your dates and group size.",
    priceIsEstimate: false,
    seasonBadge: "Year-Round",
    bestSeasons: "Namche can be visited in any month, but October–November and March–May give the clearest views and most reliable flights. Winter is cold in the evenings, and the June–August monsoon often delays flights to Lukla.",
    accommodation: "Lodge",
    operator: "peakpursuit",
    operatorNote: null,
    overview: [
      "This is the shortest way into the Khumbu: a flight to Lukla, two days of walking up the Dudh Kosi valley, and a full day to explore Namche Bazaar and the villages above it. It suits first-time trekkers, families and anyone short on time who still wants to sleep in a Sherpa town beneath real mountains.",
      "Namche sits at 3,440 m in a steep amphitheatre, so the trip is built around taking it slowly: an easy first night at Phakding, a rest day with short walks, and a descent that feels effortless by comparison. On the way you cross high suspension bridges, enter Sagarmatha National Park at Monjo and, if the weather allows, catch a first glimpse of Everest and Nuptse on the climb into Namche.",
      "One honest note on scope: the great monastery at Tengboche lies a long day beyond Namche and does not fit into five days. The monastery visit on this trip is at Khumjung. If Tengboche matters to you, the Ama Dablam Base Camp and Everest Base Camp trips both stay there."
    ],
    highlights: [
      "Sherpa culture & Namche Saturday market",
      "Everest view from Syangboche ridge",
      "Monastery visits at Tengboche & Khumjung",
      "Museum and visitor centre at Sagarmatha National Park headquarters above Namche",
      "A flight into Lukla, one of the most dramatic mountain airstrips anywhere"
    ],
    permits: [
      { name: "Sagarmatha National Park entry permit", note: "NPR 3,000 per foreign visitor (some operators add 13% VAT), roughly US$22–27. Buy at the Nepal Tourism Board / DNPWC counter in Kathmandu or at the Monjo park gate; it is charged once per entry." },
      { name: "Khumbu Pasang Lhamu Rural Municipality trek card", note: "NPR 2,000–3,000 per person depending on length of stay (published rates vary by source), paid in rupees at Lukla or Monjo; it cannot be prepaid in Kathmandu. This local card replaced TIMS in the Khumbu, so a separate TIMS card is not needed." }
    ],
    included: [
      "Experienced certified guide",
      "Porter service",
      "All required permits (see the permit list above)",
      "Lodge accommodation along the route",
      "Airport transfers",
      "Farewell dinner in Kathmandu"
    ],
    excluded: [
      "International flights",
      "Nepal visa",
      "Travel insurance (mandatory)",
      "Personal gear",
      "Alcoholic beverages",
      "Tips"
    ],
    fitness: "No technical experience needed. You should be comfortable walking 5–6 hours on uneven ground with some steep climbing; the Phakding–Namche day gains about 800 m. A few weeks of regular hill walking or stair climbing beforehand makes the days much more enjoyable.",
    safetyNotes: [
      "Namche is at 3,440 m. Headache, poor sleep and loss of appetite are common on the first nights; tell your guide early, drink plenty of water and do not push on if symptoms build. Descending is always the cure.",
      "The Phakding to Namche day is the biggest single height gain on the trip (roughly 790 m of sleeping altitude). Walk it slowly and use the rest day properly rather than treating it as a second hiking day.",
      "Lukla flights are cancelled or delayed by cloud and wind more often than anyone likes. Keep a spare day in Kathmandu after the trek, and carry insurance that covers helicopter evacuation.",
      "On narrow trails and suspension bridges, wait on the uphill side for yak and porter trains, never the cliff side."
    ],
    hero: { src: "images/trek_namche.jpg", alt: "Namche Bazaar's tiered, colourful rooftops spread across a steep hillside bowl in the Khumbu", credit: null, license: null, sourceUrl: null },
    gallery: [
      { src: "images/yak_shrine.JPG", alt: "A white stupa and a resting yak in a high Khumbu valley beneath snow-covered peaks", credit: null, license: null, sourceUrl: null }
    ],
    itinerary: [
      { day: 1, title: "Fly Kathmandu to Lukla, trek to Phakding", sleepAlt: 2652, activity: "Flight", duration: "35 min flight + 3–4 hrs trek", distanceKm: "~8 km", meals: "Breakfast, lunch, dinner", stay: "Lodge, Phakding",
        description: "Fly in over foothills to the sloping runway at Lukla (2,860 m), where a short briefing and a cup of tea open the trek. In the busy seasons the flight leaves from Manthali instead, after a pre-dawn drive of about 4–5 hours from Kathmandu. The trail drops gently through Chheplung and Ghat beside the milky Dudh Kosi, past mani walls and prayer wheels, to an easy first night at Phakding." },
      { day: 2, title: "Trek from Phakding to Namche Bazaar", sleepAlt: 3440, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~11 km", meals: "Breakfast, lunch, dinner", stay: "Lodge, Namche Bazaar",
        description: "Cross a string of swaying suspension bridges, register at the Sagarmatha National Park gate at Monjo, then cross the high Hillary Bridge at the river junction below Namche. The final stretch is a steady zigzag climb of about 600 m through pine forest; on a clear day there is a first glimpse of Everest and Nuptse on the way up. Namche appears suddenly, a horseshoe of stone lodges and shops stacked up the hillside." },
      { day: 3, title: "Namche rest day: Syangboche, Khumjung and the museum", sleepAlt: 3440, activity: "Acclimatization", duration: "4–5 hrs easy walking", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Lodge, Namche Bazaar",
        description: "Climb slowly to the Syangboche ridge, where the Everest View Hotel (about 3,880 m) looks across to Everest, Lhotse and Ama Dablam, then walk on to Khumjung. Visit the monastery, the school built by Edmund Hillary's trust and the quiet village of Khunde, then return to Namche in the afternoon for the museum at the national park headquarters and a wander round the shops. The weekly Saturday market only runs on that day, so ask us how your dates line up." },
      { day: 4, title: "Trek from Namche Bazaar to Lukla", sleepAlt: 2860, activity: "Trek", duration: "6–7 hrs trek", distanceKm: "~19 km", meals: "Breakfast, lunch, dinner", stay: "Lodge, Lukla",
        description: "A long, mostly downhill day: the steep stone steps below Namche, the Hillary Bridge again, then the river trail through Monjo and Phakding. Your legs will feel the descent, and the thicker air at lower altitude makes the walking feel remarkably easy. The last hour climbs gently back to Lukla, where a farewell evening with your porters and guide is traditional." },
      { day: 5, title: "Fly Lukla to Kathmandu", sleepAlt: 1400, activity: "Flight", duration: "35 min flight", distanceKm: null, meals: "Breakfast, farewell dinner", stay: "Hotel, Kathmandu",
        description: "Early flights are the most reliable, so you will be at the airstrip soon after dawn. In peak season some flights land at Manthali, followed by a drive of several hours back to the city, so keep the afternoon free. Tonight is your farewell dinner in Kathmandu." }
    ],
    sources: [
      "https://www.holymountaintreks.com/ama-dablam-base-camp-trek/",
      "https://www.gotonepal.com/print/gokyo-lake-trek",
      "https://www.nepalhiking.com/kathmandu-to-lukla-flights/",
      "https://www.hopnepal.com/blog/permits-for-everest-base-camp-trek",
      "https://alpineluxurytreks.com/nepal-permits-and-fees"
    ]
  },
  {
    id: "amadablam",
    region: "everest",
    title: "Ama Dablam Base Camp",
    tagline: "Trek to the foot of one of the world's most photogenic mountains — the \"matterhorn of the Himalayas.\" A classic route through Sherpa villages.",
    difficulty: "blue",
    tags: ["cultural"],
    days: 10,
    walkingDays: 8,
    maxAlt: 4600,
    maxAltName: "Ama Dablam Base Camp (about 4,600 m)",
    distanceKm: null,
    startPoint: "Lukla (flight from Kathmandu or Manthali)",
    endPoint: "Lukla, then flight to Kathmandu",
    minGroupSize: null,
    price: 1290,
    priceNote: "Published 'from' price per person in USD. Ask us for an itemised quote showing exactly what is covered for your dates and group size.",
    priceIsEstimate: false,
    seasonBadge: "Oct–Nov · Mar–May",
    bestSeasons: "October–November gives the sharpest views of Ama Dablam against deep blue sky; March–May is warmer, with rhododendron forest in flower below Tengboche. Both are also the seasons when climbing teams are camped at the base camp.",
    accommodation: "Teahouse",
    operator: "peakpursuit",
    operatorNote: null,
    overview: [
      "Ama Dablam's name comes from the amulet box worn by Sherpa women, and the hanging glacier on its flank is the 'dablam'. Few mountains are as easy to love: it dominates the trail from Namche to Tengboche and then draws closer every hour. This trip walks that classic valley, sleeps at Tengboche and Pangboche, and gives you a full day to climb to the climbers' base camp in the shadow of the peak.",
      "It is a moderate trek with a gentle build. You spend a rest day in Namche, keep your nights below 4,000 m, and make the base camp climb as a day trip from Pangboche, so you always sleep lower than the highest point you reach. The days are short enough to enjoy the monasteries at Tengboche and Pangboche and the forests between them.",
      "A note on scope: the Chhukung valley sits a further day up the Imja valley beyond Pangboche, via Dingboche. This 10-day schedule does not include a night there, so ask us about adding days if a sunrise over Lhotse and Nuptse is a priority."
    ],
    highlights: [
      "Close-up views of Ama Dablam's dramatic south face",
      "Tengboche Monastery — highest monastery in Nepal",
      "Chhukung Valley sunrise over Lhotse and Nuptse",
      "A rest day in Namche with Everest views from the Syangboche ridge",
      "Pangboche's old monastery and the yak pastures beneath the mountain"
    ],
    permits: [
      { name: "Sagarmatha National Park entry permit", note: "NPR 3,000 per foreign visitor (some operators add 13% VAT), roughly US$22–27. Buy at the Nepal Tourism Board / DNPWC counter in Kathmandu or at the Monjo park gate; it is charged once per entry." },
      { name: "Khumbu Pasang Lhamu Rural Municipality trek card", note: "NPR 2,000–3,000 per person depending on length of stay (published rates vary by source), paid in rupees at Lukla or Monjo; it cannot be prepaid in Kathmandu. This local card replaced TIMS in the Khumbu, so a separate TIMS card is not needed." }
    ],
    included: [
      "Experienced certified guide",
      "Porter service",
      "All required permits (see the permit list above)",
      "Teahouse accommodation along the route",
      "Airport transfers",
      "Farewell dinner in Kathmandu"
    ],
    excluded: [
      "International flights",
      "Nepal visa",
      "Travel insurance (mandatory)",
      "Personal gear",
      "Alcoholic beverages",
      "Tips"
    ],
    fitness: "Good general fitness and some hill-walking experience. Expect 5–7 hours of walking on the longer days, with one steep 600 m climb to Tengboche and a long, undulating base camp day of 6–7 hours. No technical skills are needed.",
    safetyNotes: [
      "The base camp day reaches about 4,600 m after several nights above 3,400 m. Go at the pace of the slowest person, eat and drink well, and be ready to turn round early if you have a headache that does not ease.",
      "Sleeping at Pangboche (about 3,930 m) rather than higher keeps the sleeping altitude well below the day's highest point; resist the temptation to push further up the valley.",
      "The upper trail to the base camp is a rough yak track, and weather can close in quickly in the afternoon. Stay with your guide and start early.",
      "Helicopter evacuation is the only quick way out above Pangboche; make sure your insurance covers it before you leave home."
    ],
    hero: { src: "images/trek_amadablam.jpg", alt: "Ama Dablam rising above a valley beneath a bright blue sky and scattered cloud", credit: null, license: null, sourceUrl: null },
    gallery: [
      { src: "images/sunset_3_peaks.jpeg", alt: "Three Himalayan summits glowing orange in the last light of the day above a snowy ridge", credit: null, license: null, sourceUrl: null }
    ],
    itinerary: [
      { day: 1, title: "Fly Kathmandu to Lukla, trek to Phakding", sleepAlt: 2652, activity: "Flight", duration: "35 min flight + 3–4 hrs trek", distanceKm: "~8 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Phakding",
        description: "The flight to Lukla (2,860 m) is the first adventure; in peak season it leaves from Manthali after an early drive of 4–5 hours. From the airstrip the trail runs gently down the Dudh Kosi valley through Chheplung and Ghat, with mani walls and prayer wheels at every village. Phakding is an easy first night, perfect for a first look at how teahouses work." },
      { day: 2, title: "Trek from Phakding to Namche Bazaar", sleepAlt: 3440, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~11 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "Suspension bridges, pine forest and the national park gate at Monjo lead to the high Hillary Bridge, after which the trail climbs steeply for about two hours to Namche. This is the biggest gain of the trek, so walk slowly and stop often. On a clear day the climb offers your first view of Everest and Nuptse." },
      { day: 3, title: "Acclimatization day in Namche Bazaar", sleepAlt: 3440, activity: "Acclimatization", duration: "3–4 hrs easy walking", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "Walk up to the Syangboche ridge and the Everest View Hotel (about 3,880 m) for a long look at Ama Dablam, Lhotse and Everest, then drop back to Namche for lunch, the museum at the park headquarters and a stroll through the bazaar. Climbing high and sleeping low like this is the best acclimatization you can give your body." },
      { day: 4, title: "Trek from Namche Bazaar to Tengboche", sleepAlt: 3867, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~10 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Tengboche",
        description: "The path contours high above the Dudh Kosi through Kyangjuma and Sanasa, with Ama Dablam filling the view ahead. It then drops to the river at Phunki Tenga before the steep, shady climb through fir and rhododendron to the ridge-top monastery. Tengboche is the largest gompa in the Khumbu, and the afternoon light on Ama Dablam from its meadow is hard to beat." },
      { day: 5, title: "Trek from Tengboche to Pangboche", sleepAlt: 3930, activity: "Trek", duration: "3–4 hrs trek", distanceKm: "~6 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Pangboche",
        description: "A short day on purpose. Descend through Deboche's mossy forest, cross the Imja Khola and climb gently into Pangboche, one of the oldest gompa villages in the Khumbu. With the afternoon free, rest, repack a small bag for tomorrow and watch the cloud move across the face of Ama Dablam, now very close." },
      { day: 6, title: "Pangboche to Ama Dablam Base Camp and back", sleepAlt: 3930, activity: "Trek", duration: "6–7 hrs round trip", distanceKm: null, meals: "Breakfast, packed lunch, dinner", stay: "Teahouse, Pangboche",
        description: "Leave early with a packed lunch and climb through scrub and yak pastures to the climbers' meadow at the foot of the mountain, at about 4,600 m. In spring and autumn the tents of climbing teams give it a village feel; otherwise it is wonderfully quiet. Stay as long as the weather and your energy allow, then walk back down to Pangboche to sleep at a much lower altitude." },
      { day: 7, title: "Trek from Pangboche to Tengboche", sleepAlt: 3867, activity: "Trek", duration: "3 hrs trek", distanceKm: "~6 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Tengboche",
        description: "A relaxed return along the same forested ridge, with time for tea at Deboche and the monastery at Tengboche. If you arrive in time, ask your guide whether visitors can sit in on prayers, and how to behave if so. A second evening here is a chance to photograph Ama Dablam at sunset and sunrise." },
      { day: 8, title: "Trek from Tengboche to Namche Bazaar", sleepAlt: 3440, activity: "Trek", duration: "4–5 hrs trek", distanceKm: "~10 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "Down to Phunki Tenga, across the river and along the contour trail back to Namche, with the thick air returning noticeably. It is a good afternoon for a hot shower, a bakery coffee and a last browse of the shops before the descent to Lukla." },
      { day: 9, title: "Trek from Namche Bazaar to Lukla", sleepAlt: 2860, activity: "Trek", duration: "6–7 hrs trek", distanceKm: "~19 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lukla",
        description: "The longest walking day on the way home, but all downhill after the first steps: the Hillary Bridge, Monjo, Phakding and the final climb to Lukla. You will feel strong after a week at altitude. Celebrate with your team in Lukla tonight." },
      { day: 10, title: "Fly Lukla to Kathmandu", sleepAlt: 1400, activity: "Flight", duration: "35 min flight", distanceKm: null, meals: "Breakfast, farewell dinner", stay: "Hotel, Kathmandu",
        description: "Fly back to the capital on an early flight, weather permitting. If flights are operating from Manthali, expect a drive of several hours into Kathmandu. Tonight is the farewell dinner; ask us about a spare day in the city in case Lukla weather delays you." }
    ],
    sources: [
      "https://www.holymountaintreks.com/ama-dablam-base-camp-trek/",
      "https://www.gotonepal.com/print/gokyo-lake-trek",
      "https://www.hopnepal.com/blog/permits-for-everest-base-camp-trek",
      "https://alpineluxurytreks.com/nepal-permits-and-fees",
      "https://www.nepalhiking.com/kathmandu-to-lukla-flights/"
    ]
  },
  {
    id: "gokyo",
    region: "everest",
    title: "Gokyo Lakes Trek",
    tagline: "A serene alternative to the EBC trail — turquoise sacred lakes at altitude, a glacier hike, and the iconic summit of Gokyo Ri with panoramic Everest views.",
    difficulty: "blue",
    tags: ["remote"],
    days: 13,
    walkingDays: 10,
    maxAlt: 4790,
    maxAltName: "Gokyo village (highest overnight; the Gokyo Ri viewpoint, 5,357 m, is a day walk)",
    distanceKm: null,
    startPoint: "Lukla (flight from Kathmandu or Manthali)",
    endPoint: "Lukla, then flight to Kathmandu",
    minGroupSize: null,
    price: 1490,
    priceNote: "Published 'from' price per person in USD. Ask us for an itemised quote showing exactly what is covered for your dates and group size.",
    priceIsEstimate: false,
    seasonBadge: "Oct–Nov · Mar–May",
    bestSeasons: "October–November brings the clearest air for views from Gokyo Ri, though nights at Gokyo are very cold. March–May is milder, and the lakes are often partly frozen into April. Snow can linger on the upper trail early in the season.",
    accommodation: "Teahouse",
    operator: "peakpursuit",
    operatorNote: null,
    overview: [
      "The Gokyo valley runs parallel to the Everest Base Camp trail but feels like a different world. The path climbs beside the Ngozumpa Glacier, the longest glacier in Nepal, past a necklace of turquoise lakes that are sacred to Buddhists and Hindus and are listed as a Ramsar wetland. The reward at the top is Gokyo Ri, a barren hill with one of the great panoramas of the Himalaya: Everest, Lhotse, Makalu and Cho Oyu in a single sweep.",
      "Because the route avoids the main Khumbu highway, you share the trail with far fewer people and see more yak herding and, with luck, Himalayan tahr and pheasants in the forests and pastures. It is classed as moderate: the altitude is real (three nights at about 4,790 m), but the days are short and there are no passes to cross.",
      "The schedule climbs gradually from Namche, with a rest day, an easy night at Phortse and short days to Dole and Machhermo, then gives you two full days at Gokyo for the viewpoint and the glacier lakes before you walk out the same way."
    ],
    highlights: [
      "Six sacred Gokyo Lakes & Ngozumpa Glacier",
      "Summit Gokyo Ri (5,357m) for 360° Everest panorama",
      "Less crowded, more wildlife than EBC route",
      "Two full days at Gokyo, with time for the fifth lake and the glacier edge",
      "Quiet yak-herding settlements at Dole and Machhermo"
    ],
    permits: [
      { name: "Sagarmatha National Park entry permit", note: "NPR 3,000 per foreign visitor (some operators add 13% VAT), roughly US$22–27. Buy at the Nepal Tourism Board / DNPWC counter in Kathmandu or at the Monjo park gate; it is charged once per entry." },
      { name: "Khumbu Pasang Lhamu Rural Municipality trek card", note: "NPR 2,000–3,000 per person depending on length of stay (published rates vary by source), paid in rupees at Lukla or Monjo; it cannot be prepaid in Kathmandu. This local card replaced TIMS in the Khumbu, so a separate TIMS card is not needed." }
    ],
    included: [
      "Experienced certified guide",
      "Porter service",
      "All required permits (see the permit list above)",
      "Teahouse accommodation along the route",
      "Airport transfers",
      "Farewell dinner in Kathmandu"
    ],
    excluded: [
      "International flights",
      "Nepal visa",
      "Travel insurance (mandatory)",
      "Personal gear",
      "Alcoholic beverages",
      "Tips"
    ],
    fitness: "Good aerobic fitness and comfort walking 5–7 hours a day for ten days. Previous multi-day trekking is helpful. The Gokyo Ri climb is 550–600 m of steady ascent on a cold, windy morning, so training with a loaded pack on hills is a good idea.",
    safetyNotes: [
      "You sleep at about 4,790 m for three nights, with a viewpoint above 5,300 m. Headache, nausea or a persistent cough are warning signs: tell your guide at once and expect to descend if they do not ease. Descent is the treatment.",
      "Temperatures at Gokyo drop well below freezing at night, even in the main seasons. Pack a proper sleeping bag, warm layers and a hat you can sleep in.",
      "The glacier lakes are fed by the moving Ngozumpa Glacier. Stay on the marked paths, keep away from unstable moraine edges and never walk on frozen lake ice.",
      "Dole, Machhermo and Gokyo are a long way from help. Helicopter evacuation is the only fast option, so check that your insurance covers it at 5,000 m."
    ],
    hero: { src: "images/trek_gokyo.jpg", alt: "A turquoise glacial lake beside the grey moraine of a huge glacier, with snowy peaks and cloud behind", credit: null, license: null, sourceUrl: null },
    gallery: [
      { src: "images/above_clouds.jpeg", alt: "A sea of cloud filling a valley below sharp snow peaks under a deep blue Himalayan sky", credit: null, license: null, sourceUrl: null }
    ],
    itinerary: [
      { day: 1, title: "Fly Kathmandu to Lukla, trek to Phakding", sleepAlt: 2652, activity: "Flight", duration: "35 min flight + 3–4 hrs trek", distanceKm: "~8 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Phakding",
        description: "Fly to Lukla (2,860 m), or to Manthali first in the peak seasons, which means a pre-dawn drive of 4–5 hours. After a briefing and tea with your crew, the trail drops through Chheplung and Ghat beside the Dudh Kosi, past mani walls and the first yak trains. A short, easy first walk to Phakding sets the tone for the rest of the trip." },
      { day: 2, title: "Trek from Phakding to Namche Bazaar", sleepAlt: 3440, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~11 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "Cross several suspension bridges, pass the Sagarmatha National Park gate at Monjo and finish with a steep two-hour climb from the river junction up to Namche. Take it slowly; this is the biggest single height gain of the trek. Namche rewards you with hot drinks, bakeries and, in clear weather, the first view of Everest's summit on the way up." },
      { day: 3, title: "Acclimatization day in Namche Bazaar", sleepAlt: 3440, activity: "Acclimatization", duration: "3–4 hrs easy walking", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "Walk up to the Syangboche ridge and the Everest View Hotel (about 3,880 m) for a first big panorama, then return to Namche to sleep. Spend the afternoon at the museum at the park headquarters or in the market lanes. This rest day is the foundation of your acclimatization for the higher valleys to come." },
      { day: 4, title: "Trek from Namche Bazaar to Phortse via Khumjung", sleepAlt: 3810, activity: "Trek", duration: "5–6 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Phortse",
        description: "Climb to Khumjung, then along the open Mong La ridge, which reaches about 4,000 m, with long views toward Ama Dablam and Cho Oyu. The trail then descends to the Sherpa village of Phortse, a quiet place of stone houses and potato terraces. Crossing a higher ridge and sleeping lower is excellent acclimatization before the Gokyo valley." },
      { day: 5, title: "Trek from Phortse to Dole", sleepAlt: 4040, activity: "Trek", duration: "4–5 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Dole",
        description: "Drop to the river at Phortse Tenga, then climb steeply through juniper and rhododendron forest, a hard but short pull of about 2.5 hours. Dole is a scatter of yak-herding lodges on a sunny shelf above the Dudh Kosi. You arrive early, so use the afternoon for rest and a short walk higher up the hillside, then come back down to sleep." },
      { day: 6, title: "Trek from Dole to Machhermo", sleepAlt: 4470, activity: "Trek", duration: "3–4 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Machhermo",
        description: "The valley opens out above the treeline into yak pastures and tiny summer settlements such as Lhabarma and Luza, with Kyajo Ri and Cho Oyu coming into view. It is a short, steady day that leaves time to rest at Machhermo before the bigger climb to the lakes. Be extra careful to drink well and watch for headaches this evening." },
      { day: 7, title: "Trek from Machhermo to Gokyo", sleepAlt: 4790, activity: "Trek", duration: "4–5 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Gokyo",
        description: "The path climbs onto the huge moraine wall of the Ngozumpa Glacier and passes the first two lakes, Longponga and Taujung. Gokyo village sits on the shore of the third lake, Dudh Pokhari, with the cone of Gokyo Ri rising behind it. The turquoise colour changes by the hour with the light and the cloud." },
      { day: 8, title: "Climb Gokyo Ri and explore the lakes", sleepAlt: 4790, activity: "Acclimatization", duration: "5–6 hrs round trip", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Gokyo",
        description: "Leave early for the steady, switchbacking climb of about 570 m to Gokyo Ri (5,357 m). The panorama takes in Everest, Lhotse, Makalu and Cho Oyu, the Ngozumpa Glacier and the lakes spread out far below. Dress warmly, because the summit is cold and exposed to wind, and take your time on the descent." },
      { day: 9, title: "Fifth lake and the glacier edge", sleepAlt: 4790, activity: "Acclimatization", duration: "4–6 hrs round trip", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Gokyo",
        description: "A second day at Gokyo gives time for the glacier hike: follow the moraine path north past the fourth lake toward the fifth lake (about 4,980 m) and look out over the Ngozumpa Glacier with Cho Oyu behind. It is a flexible day, so you can shorten it if you are tired or the weather turns. Return to Gokyo to sleep." },
      { day: 10, title: "Trek from Gokyo to Dole", sleepAlt: 4040, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Dole",
        description: "Retrace the valley downhill with fresh eyes: the lakes, Machhermo and Luza look different in the opposite direction, and the air gets thicker with every step. It is a long day, so start early and keep a steady pace on the moraine and the descent to Dole. Sleeping lower tonight should bring a noticeably better night." },
      { day: 11, title: "Trek from Dole to Namche Bazaar", sleepAlt: 3440, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "Descend to Phortse Tenga, cross the river and climb to the Mong La ridge before the long traverse down to Namche. After a week at altitude you will feel strong, so enjoy the views of Ama Dablam and Thamserku. Namche's bakeries and hot showers are a welcome treat tonight." },
      { day: 12, title: "Trek from Namche Bazaar to Lukla", sleepAlt: 2860, activity: "Trek", duration: "6–7 hrs trek", distanceKm: "~19 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lukla",
        description: "The steep steps down to the Hillary Bridge, then the river trail through Monjo and Phakding, with a gentle climb back up to Lukla. Your knees will notice the descent, but your lungs will be delighted. Share a farewell evening with your crew." },
      { day: 13, title: "Fly Lukla to Kathmandu", sleepAlt: 1400, activity: "Flight", duration: "35 min flight", distanceKm: null, meals: "Breakfast, farewell dinner", stay: "Hotel, Kathmandu",
        description: "Fly back to Kathmandu on an early flight, weather permitting, or via Manthali and a drive of several hours in peak season. Keep the afternoon flexible in case of delays. Tonight is the farewell dinner." }
    ],
    sources: [
      "https://www.gotonepal.com/print/gokyo-lake-trek",
      "https://himalayanhero.com/blog/gokyo-cho-la-pass-trek-itinerary-16-day-guide",
      "https://alpineadventureclub.com/renjo-la-pass-trek.html",
      "https://en.wikipedia.org/wiki/Gokyo_Lakes",
      "https://asocialnomad.com/nepal/phortse-tenga-to-dhole/",
      "https://www.holymountaintreks.com/ama-dablam-base-camp-trek/",
      "https://alpineluxurytreks.com/nepal-permits-and-fees"
    ]
  },
  {
    id: "ebc",
    region: "everest",
    title: "Everest Base Camp",
    tagline: "The world's most legendary trek. Stand at the foot of the world's highest mountain, feel the thin air at 5,364m, and look up at the Khumbu Icefall.",
    difficulty: "black",
    tags: ["cultural"],
    days: 14,
    walkingDays: 11,
    maxAlt: 5364,
    maxAltName: "Everest Base Camp (the Kalapathar viewpoint on Day 11 reaches about 5,545 m)",
    distanceKm: 130,
    startPoint: "Lukla (flight from Kathmandu or Manthali)",
    endPoint: "Lukla, then flight to Kathmandu",
    minGroupSize: null,
    price: 1890,
    priceNote: "Published 'from' price per person in USD. Ask us for an itemised quote showing exactly what is covered for your dates and group size.",
    priceIsEstimate: false,
    seasonBadge: "Oct–Nov · Mar–May",
    bestSeasons: "October–November has the clearest skies and the most settled weather, with cold nights. March–May is warmer and is the season when expedition tents fill Everest Base Camp. In autumn the camp itself is mostly empty, which some trekkers prefer.",
    accommodation: "Teahouse",
    operator: "peakpursuit",
    operatorNote: null,
    overview: [
      "This is the classic: a fortnight up the Khumbu valley from Lukla to the foot of the Khumbu Icefall and back, sleeping in teahouses in Sherpa villages the whole way. You pass the monasteries at Tengboche and Pangboche, climb above the treeline to Dingboche and Lobuche, walk beside the Khumbu Glacier and finish with Everest Base Camp itself and the pre-dawn summit of Kalapathar, the best ground-level view of Everest.",
      "The pace is deliberately unhurried. There are two full days in Namche and two at Dingboche, each with a walk higher than where you sleep, so the body has time to adapt before the thin-air days at Lobuche and Gorak Shep. You will probably still feel the altitude, but this is the structure that gives most healthy trekkers a good chance of reaching the top.",
      "It is a demanding trek rather than a technical one: long days on rocky trails, cold nights above 4,900 m, basic rooms at Gorak Shep and a very early start for Kalapathar. If you are fit, prepared and flexible about weather, it is one of the most rewarding walks in the world."
    ],
    highlights: [
      "Reach legendary Everest Base Camp at 5,364m",
      "Summit Kalapathar (5,545m) for best Everest sunrise",
      "Fly into Lukla — one of the world's most dramatic airports",
      "Two acclimatization stops, in Namche and Dingboche, each with a hike higher than where you sleep",
      "Tengboche and Pangboche monasteries beneath Ama Dablam"
    ],
    permits: [
      { name: "Sagarmatha National Park entry permit", note: "NPR 3,000 per foreign visitor (some operators add 13% VAT), roughly US$22–27. Buy at the Nepal Tourism Board / DNPWC counter in Kathmandu or at the Monjo park gate; it is charged once per entry." },
      { name: "Khumbu Pasang Lhamu Rural Municipality trek card", note: "NPR 2,000–3,000 per person depending on length of stay (published rates vary by source), paid in rupees at Lukla or Monjo; it cannot be prepaid in Kathmandu. This local card replaced TIMS in the Khumbu, so a separate TIMS card is not needed." }
    ],
    included: [
      "Experienced certified guide",
      "Porter service",
      "All required permits (see the permit list above)",
      "Teahouse accommodation along the route",
      "Airport transfers",
      "Farewell dinner in Kathmandu"
    ],
    excluded: [
      "International flights",
      "Nepal visa",
      "Travel insurance (mandatory)",
      "Personal gear",
      "Alcoholic beverages",
      "Tips"
    ],
    fitness: "Strong aerobic fitness and comfort walking 5–8 hours a day for two weeks. No technical skills, but previous multi-day trekking and ideally some time above 3,000 m help. Train with hills and a loaded pack for 8–12 weeks; Kalapathar and base camp days are long, cold and at 5,000 m or more.",
    safetyNotes: [
      "Altitude sickness is the main risk. The schedule includes two acclimatization stops, but you can still be affected at Lobuche and Gorak Shep. Report headache, nausea, breathlessness at rest or unsteady walking immediately. Never ascend with symptoms; if they worsen, descend.",
      "Sleeping gains on the Tengboche–Dingboche and Dingboche–Lobuche days are a little over 500 m. Stick to the planned stops, drink 3–4 litres a day and do not add extra height on rest days.",
      "Lukla flights are often delayed by weather. Keep a spare day or two before your international flight and check that your insurance covers helicopter evacuation above 5,000 m.",
      "Gorak Shep nights are very cold and sleep can be poor. Start Kalapathar in the dark only when your guide says conditions are safe; winds and temperatures near -20 C are possible in the main seasons."
    ],
    hero: { src: "images/trek_ebc.jpg", alt: "A steep rock-and-snow Himalayan peak rising above a glacier in the Khumbu under a blue sky", credit: null, license: null, sourceUrl: null },
    gallery: [
      { src: "images/hike_3rd_person.jpeg", alt: "A trekker with poles walking up a snowy trail in the high Khumbu with snow peaks ahead", credit: null, license: null, sourceUrl: null }
    ],
    itinerary: [
      { day: 1, title: "Fly Kathmandu to Lukla, trek to Phakding", sleepAlt: 2652, activity: "Flight", duration: "35 min flight + 3–4 hrs trek", distanceKm: "~8 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Phakding",
        description: "Fly over the foothills to Lukla (2,860 m), or to Manthali first in the peak seasons, after a pre-dawn drive of about 4–5 hours. Meet your porters over tea, then follow the Dudh Kosi through pine forest, mani walls and small villages to Phakding. It is a short, gentle first walk by design." },
      { day: 2, title: "Trek from Phakding to Namche Bazaar", sleepAlt: 3440, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~11 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "Cross suspension bridges high above the river, enter Sagarmatha National Park at Monjo and take the steep path from the Hillary Bridge up to Namche. The climb is about 600 m and takes roughly two hours, so go slowly. Namche, the Sherpa capital, is a bowl of stone lodges and shops that appears all at once." },
      { day: 3, title: "Acclimatization in Namche: Everest View hike", sleepAlt: 3440, activity: "Acclimatization", duration: "3–4 hrs easy walking", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "Climb to the Syangboche ridge and the Everest View Hotel (about 3,880 m) for the first big panorama of Everest, Lhotse and Ama Dablam, then return to Namche to sleep. Visit the museum at the park headquarters in the afternoon. On Saturdays the weekly market fills the town with traders from surrounding valleys." },
      { day: 4, title: "Second day in Namche: Khumjung and Khunde", sleepAlt: 3440, activity: "Rest", duration: "2–4 hrs easy walking", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "A deliberately gentle day: an optional walk to Khumjung and Khunde to see the monastery, the school built by Edmund Hillary's trust and the village hospital, or simply rest, wash clothes and repack. The extra night at 3,440 m gives your body a margin before the long climb to Dingboche. Keep drinking plenty of water." },
      { day: 5, title: "Trek from Namche Bazaar to Tengboche", sleepAlt: 3867, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~10 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Tengboche",
        description: "The trail contours above the Dudh Kosi through rhododendron and pine forest, with the Khumjung valley branching off above you and Ama Dablam ahead. It dips to Phunki Tenga at the river, then climbs about 600 m to Tengboche. The monastery here is the largest in the Khumbu, set on a ridge with Everest, Lhotse and Ama Dablam all in view on clear days." },
      { day: 6, title: "Trek from Tengboche to Dingboche", sleepAlt: 4410, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~11 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Dingboche",
        description: "Descend through Deboche's forest, cross the Imja Khola and pass the old monastery at Pangboche. Above Pangboche the trees thin out into yak pastures, stone walls and mani walls, with Ama Dablam very close. Dingboche opens out as a walled patchwork of fields in a wide valley; arrive early, rest and drink a lot." },
      { day: 7, title: "Dingboche acclimatization: Nangkartshang ridge", sleepAlt: 4410, activity: "Acclimatization", duration: "3–5 hrs round trip", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Dingboche",
        description: "Climb the ridge behind the village toward Nangkartshang (about 5,000–5,100 m), as high as feels comfortable, for views of Makalu, Lhotse and Ama Dablam. Return to sleep at 4,410 m: climb high, sleep low. The night sky above Dingboche can be spectacular if the clouds stay away." },
      { day: 8, title: "Dingboche: walk toward Chhukung", sleepAlt: 4410, activity: "Acclimatization", duration: "4–5 hrs round trip", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Dingboche",
        description: "A second acclimatization day at the same height: walk up the Imja valley toward Chhukung (4,730 m) with Island Peak, Lhotse and Nuptse ahead, then return to Dingboche for the night. Take it easy and treat it as a rest day with a view. By now you should be sleeping, eating and walking well; if you are not, tell your guide so the plan can be adjusted." },
      { day: 9, title: "Trek from Dingboche to Lobuche", sleepAlt: 4940, activity: "Trek", duration: "4–5 hrs trek", distanceKm: "~8–10 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lobuche",
        description: "A steady climb up the Khumbu valley to the hamlet of Dughla beneath the snout of the Khumbu Glacier, then a stiff pull to the ridge of memorial chortens for climbers and Sherpas who died on Everest. The path then follows the glacier's lateral moraine to Lobuche. The air is thin now, so walk slowly and expect cold nights." },
      { day: 10, title: "Lobuche to Gorak Shep and Everest Base Camp", sleepAlt: 5140, activity: "Trek", duration: "7–8 hrs round trip", distanceKm: "~13 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Gorak Shep",
        description: "Follow the moraine to Gorak Shep (5,140 m), drop your bags and eat, then walk the rocky, undulating path beside the Khumbu Glacier to Everest Base Camp (5,364 m). In spring the camp is a city of yellow and orange expedition tents; in autumn it is largely empty, and the summit of Everest is hidden behind Nuptse. Return to Gorak Shep for a cold, early night." },
      { day: 11, title: "Kalapathar sunrise, then descend to Pheriche", sleepAlt: 4288, activity: "Summit day", duration: "2–3 hrs climb + 5–6 hrs descent", distanceKm: "~15 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Pheriche",
        description: "Wake around 4 am, put on every layer and climb in the dark by headlamp to Kalapathar (about 5,545 m), arriving in time for first light. Everest, Nuptse and Lhotse turn gold above the glacier, the single best ground-level view of the mountain. After breakfast at Gorak Shep, descend via Lobuche and Dughla to Pheriche; you will sleep far lower and the air will feel luxuriously thick." },
      { day: 12, title: "Trek from Pheriche to Namche Bazaar", sleepAlt: 3440, activity: "Trek", duration: "7–8 hrs trek", distanceKm: "~20 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "A long downhill day through Pangboche, Deboche and Tengboche, with a short climb out of the Imja valley and a final contour to Namche. Descending gets you back to rich air quickly, and the forests will feel lush after the barren glacier. Namche's bakeries and a hot shower are the reward." },
      { day: 13, title: "Trek from Namche Bazaar to Lukla", sleepAlt: 2860, activity: "Trek", duration: "6–7 hrs trek", distanceKm: "~19 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lukla",
        description: "Down the steep steps to the Hillary Bridge, along the river through Monjo and Phakding, and a gentle final climb to Lukla. Celebrate with your guide and porters tonight; it is traditional to thank the crew who carried you here. Keep your passport and flight details handy for the morning." },
      { day: 14, title: "Fly Lukla to Kathmandu", sleepAlt: 1400, activity: "Flight", duration: "35 min flight", distanceKm: null, meals: "Breakfast, farewell dinner", stay: "Hotel, Kathmandu",
        description: "Fly back to Kathmandu, weather permitting; in peak season some flights land at Manthali, followed by a drive of several hours. Keep the day flexible in case Lukla is closed by cloud. Tonight is the farewell dinner and a well-earned celebration." }
    ],
    sources: [
      "https://himalayanhero.com/blog/jiri-to-everest-base-camp-trek-itinerary/",
      "https://www.alpineadventureclub.com/lobuche-east-peak-climbing",
      "https://lifehappensoutdoors.com/the-ultimate-guide-to-lobuche-peak/",
      "https://www.nepalhiking.com/kathmandu-to-lukla-flights/",
      "https://www.hopnepal.com/blog/permits-for-everest-base-camp-trek",
      "https://alpineluxurytreks.com/nepal-permits-and-fees"
    ]
  },
  {
    id: "kalapathar",
    region: "everest",
    title: "Kalapathar Sunrise Summit",
    tagline: "Hike before dawn to summit Kalapathar (Black Rock) at 5,545m for the world's most dramatic sunrise view directly over Everest. Bucket-list moment.",
    difficulty: "black",
    tags: [],
    days: 13,
    walkingDays: 10,
    maxAlt: 5545,
    maxAltName: "Kalapathar",
    distanceKm: null,
    startPoint: "Lukla (flight from Kathmandu or Manthali)",
    endPoint: "Lukla, then flight to Kathmandu",
    minGroupSize: null,
    price: 1790,
    priceNote: "Published 'from' price per person in USD. Ask us for an itemised quote showing exactly what is covered for your dates and group size.",
    priceIsEstimate: false,
    seasonBadge: "Full Moon Specials",
    bestSeasons: "The Kalapathar climb works best in October–November and March–May, when mornings are clearest. Full-moon dates add a silver light on the peaks; nights are coldest in late autumn, and cloud can still hide the view in any season.",
    accommodation: "Teahouse",
    operator: "peakpursuit",
    operatorNote: null,
    overview: [
      "Kalapathar means 'black rock', and from its crest above Gorak Shep you look straight at Everest, Nuptse and Lhotse, with the Khumbu Glacier curling away beneath you. Everest Base Camp itself sits in a hollow with no view of the summit, so this scramble is the real payoff of the Everest region trek, and this itinerary is built around being fit, acclimatized and awake for it.",
      "The route is the classic Khumbu valley: Lukla, Namche, Tengboche, Dingboche, Lobuche and Gorak Shep, with an acclimatization day in Namche and two at Dingboche before the thin-air nights. You also visit Everest Base Camp on the way, then climb Kalapathar the next morning in the dark so that you are on top as the light arrives.",
      "Full-moon departures offer an extra option: a climb under moonlight, with the peaks glowing in silver. Whether that goes ahead depends on cloud, wind and how everybody is feeling that night, and the guide makes the final decision."
    ],
    highlights: [
      "Best unobstructed view of Everest summit from ground level",
      "Also visits Everest Base Camp on the same route",
      "Full moon night hike option (seasonal)",
      "Two acclimatization days at Dingboche before the high nights",
      "Namche, Tengboche and Pangboche on the classic Khumbu trail"
    ],
    permits: [
      { name: "Sagarmatha National Park entry permit", note: "NPR 3,000 per foreign visitor (some operators add 13% VAT), roughly US$22–27. Buy at the Nepal Tourism Board / DNPWC counter in Kathmandu or at the Monjo park gate; it is charged once per entry." },
      { name: "Khumbu Pasang Lhamu Rural Municipality trek card", note: "NPR 2,000–3,000 per person depending on length of stay (published rates vary by source), paid in rupees at Lukla or Monjo; it cannot be prepaid in Kathmandu. This local card replaced TIMS in the Khumbu, so a separate TIMS card is not needed." }
    ],
    included: [
      "Experienced certified guide",
      "Porter service",
      "All required permits (see the permit list above)",
      "Teahouse accommodation along the route",
      "Airport transfers",
      "Farewell dinner in Kathmandu"
    ],
    excluded: [
      "International flights",
      "Nepal visa",
      "Travel insurance (mandatory)",
      "Personal gear",
      "Alcoholic beverages",
      "Tips"
    ],
    fitness: "Strong aerobic fitness and the stamina for several 5–7 hour days. No technical skills, but you will climb in sub-zero darkness at over 5,000 m, so previous trekking at altitude helps. Train with hills and a loaded pack for 8–12 weeks beforehand.",
    safetyNotes: [
      "Kalapathar is climbed at 5,100–5,545 m after a night at Gorak Shep. If you wake with a headache, nausea or poor balance, say so and skip the climb; descending is the right call.",
      "Pre-dawn temperatures can reach -20 C with wind. Frostbite risk is real: carry insulated mittens, a warm hat, goggles or glasses and chemical hand warmers, and keep your water bottle inside your jacket.",
      "A full-moon night climb is only attempted in settled weather, on the guide's decision; headlamps are still carried and the descent is often slower than the ascent.",
      "Sleeping altitude gains on the Tengboche–Dingboche and Dingboche–Lobuche days are slightly more than 500 m. Stay with the planned stops and do not skip the Dingboche rest days. Make sure your insurance covers helicopter evacuation above 5,000 m."
    ],
    hero: { src: "images/kalapathar.jpeg", alt: "Two trekkers walking across a snowfield toward a pointed snow-capped peak under heavy cloud", credit: null, license: null, sourceUrl: null },
    gallery: [
      { src: "images/sunset_everest.jpeg", alt: "The summit pyramid of Everest glowing orange at sunset beside a lower ridge", credit: null, license: null, sourceUrl: null }
    ],
    itinerary: [
      { day: 1, title: "Fly Kathmandu to Lukla, trek to Phakding", sleepAlt: 2652, activity: "Flight", duration: "35 min flight + 3–4 hrs trek", distanceKm: "~8 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Phakding",
        description: "Fly into Lukla (2,860 m), or via Manthali and an early 4–5 hour drive in the peak seasons. After tea and a briefing, walk down the Dudh Kosi valley through pine forest and small villages to Phakding. The pace is purposely gentle; you have days of climbing ahead." },
      { day: 2, title: "Trek from Phakding to Namche Bazaar", sleepAlt: 3440, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~11 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "A day of suspension bridges, the national park gate at Monjo and the steep final climb of about 600 m from the Hillary Bridge to Namche. Go slowly and drink often; this is the largest height gain before the high camps. On a clear day, the first view of Everest and Nuptse appears on the way up." },
      { day: 3, title: "Acclimatization day in Namche Bazaar", sleepAlt: 3440, activity: "Acclimatization", duration: "3–4 hrs easy walking", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "Climb to the Syangboche ridge and the Everest View Hotel (about 3,880 m), then walk back down to sleep in Namche. In the afternoon visit the museum at the park headquarters or wander the shops. Resting well today pays off all the way up the valley." },
      { day: 4, title: "Trek from Namche Bazaar to Tengboche", sleepAlt: 3867, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~10 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Tengboche",
        description: "The path contours high above the Dudh Kosi, drops to the river at Phunki Tenga and then climbs steeply through forest to the monastery ridge at Tengboche. Ama Dablam dominates the view and, on clear evenings, Everest and Lhotse glow to the north. The monastery is the largest gompa in the Khumbu." },
      { day: 5, title: "Trek from Tengboche to Dingboche", sleepAlt: 4410, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~11 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Dingboche",
        description: "Descend through Deboche's forest, cross the Imja Khola and walk through Pangboche, then up the Imja valley above the treeline. Stone-walled fields and yak pastures replace the forest, and Ama Dablam sits just across the valley. Arrive in Dingboche early and rest." },
      { day: 6, title: "Dingboche acclimatization: Nangkartshang ridge", sleepAlt: 4410, activity: "Acclimatization", duration: "3–5 hrs round trip", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Dingboche",
        description: "Climb the ridge above the village toward Nangkartshang, to roughly 5,000 m or as high as you feel comfortable, for wide views of Makalu, Lhotse and Ama Dablam. Return to sleep at 4,410 m. This is the most valuable acclimatization day of the trek." },
      { day: 7, title: "Second Dingboche day: walk toward Chhukung", sleepAlt: 4410, activity: "Acclimatization", duration: "4–5 hrs round trip", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Dingboche",
        description: "Stroll up the Imja valley toward Chhukung (4,730 m), with Island Peak, Lhotse and Nuptse closing in ahead, and return to Dingboche for the night. Keep the effort easy; this is an acclimatization walk, not a workout. If you feel strong, you will be glad of the extra margin before Lobuche and Gorak Shep." },
      { day: 8, title: "Trek from Dingboche to Lobuche", sleepAlt: 4940, activity: "Trek", duration: "4–5 hrs trek", distanceKm: "~8–10 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lobuche",
        description: "A steady climb to Dughla beneath the Khumbu Glacier, then a stiff pull to the ridge of memorial chortens for lost climbers, and on along the glacier's lateral moraine to Lobuche. The air is noticeably thin and the nights cold. Walk slowly and keep your fluids up." },
      { day: 9, title: "Lobuche to Gorak Shep and Everest Base Camp", sleepAlt: 5140, activity: "Trek", duration: "7–8 hrs round trip", distanceKm: "~13 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Gorak Shep",
        description: "Follow the moraine to Gorak Shep (5,140 m), eat and rest, then walk the rocky, rolling path beside the glacier to Everest Base Camp (5,364 m). From the camp you look up at the Khumbu Icefall, but the summit of Everest is hidden, which is why tomorrow's climb matters. Return to Gorak Shep for an early, cold night." },
      { day: 10, title: "Kalapathar sunrise, then descend to Pheriche", sleepAlt: 4288, activity: "Summit day", duration: "2–3 hrs climb + 5–6 hrs descent", distanceKm: "~15 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Pheriche",
        description: "Rise in the small hours and climb Kalapathar (about 5,545 m) by headlamp, aiming to be on the summit as the first light touches Everest, Nuptse and Lhotse. On a full-moon departure the guide may offer an earlier start by moonlight if conditions are good. After a warm breakfast at Gorak Shep, descend to Pheriche, where a much lower night brings welcome relief." },
      { day: 11, title: "Trek from Pheriche to Namche Bazaar", sleepAlt: 3440, activity: "Trek", duration: "7–8 hrs trek", distanceKm: "~20 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "A long descent through Pangboche, Deboche and Tengboche and the final contour to Namche. You will drop over 1,000 m, and the thickening air feels wonderful. Namche's bakeries and hot showers are the reward." },
      { day: 12, title: "Trek from Namche Bazaar to Lukla", sleepAlt: 2860, activity: "Trek", duration: "6–7 hrs trek", distanceKm: "~19 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lukla",
        description: "Down the stone steps to the Hillary Bridge, along the river through Monjo and Phakding, and up the last climb to Lukla. Thank your crew over dinner tonight; it is a Lukla tradition. Pack with flight weight limits in mind." },
      { day: 13, title: "Fly Lukla to Kathmandu", sleepAlt: 1400, activity: "Flight", duration: "35 min flight", distanceKm: null, meals: "Breakfast, farewell dinner", stay: "Hotel, Kathmandu",
        description: "Take an early flight back, weather permitting; in peak season some flights land at Manthali, followed by a drive of several hours. Leave the rest of the day free in case of delays. Tonight is the farewell dinner." }
    ],
    sources: [
      "https://himalayanhero.com/blog/jiri-to-everest-base-camp-trek-itinerary/",
      "https://www.alpineadventureclub.com/lobuche-east-peak-climbing",
      "https://lifehappensoutdoors.com/the-ultimate-guide-to-lobuche-peak/",
      "https://www.nepalhiking.com/kathmandu-to-lukla-flights/",
      "https://www.hopnepal.com/blog/permits-for-everest-base-camp-trek",
      "https://alpineluxurytreks.com/nepal-permits-and-fees"
    ]
  },
  {
    id: "renjola",
    region: "everest",
    title: "Renjo La Pass & Gokyo",
    tagline: "Cross the dramatic Renjo La pass at 5,360m with sweeping views of the Everest massif, then descend to the sacred Gokyo Lakes.",
    difficulty: "black",
    tags: ["pass", "remote"],
    days: 15,
    walkingDays: 9,
    maxAlt: 5360,
    maxAltName: "Renjo La",
    distanceKm: null,
    startPoint: "Lukla (flight from Kathmandu or Manthali)",
    endPoint: "Lukla, then flight to Kathmandu",
    minGroupSize: null,
    price: 1690,
    priceNote: "Published 'from' price per person in USD. Ask us for an itemised quote showing exactly what is covered for your dates and group size.",
    priceIsEstimate: false,
    seasonBadge: "Oct–Nov · Mar–May",
    bestSeasons: "October–November is the most reliable window for crossing the pass, with settled weather and little snow; March–May is also good, though snow can linger on the climb early in spring. Avoid the monsoon and midwinter, when the pass can be iced and cloudy.",
    accommodation: "Teahouse",
    operator: "peakpursuit",
    operatorNote: null,
    overview: [
      "The Renjo La is the western gateway between the Bhote Koshi valley and the Gokyo lakes, and crossing it makes a lovely high loop: up the quiet Thame valley, over the pass at 5,360 m, down to the turquoise lakes at Gokyo and back through Dole and Namche. From the top you see the Everest massif, Cho Oyu and the Gokyo lakes stretching out far below.",
      "This itinerary spends longer than most on the western valley. There is a rest day in Namche and another at Thame, an extra day at Lungden to prepare for the pass, and two full days at Gokyo for the lakes and Gokyo Ri. The pass day itself is the longest of the trip, about 7–8 hours, but the trail is a clear path rather than a technical climb.",
      "You will see far fewer trekkers than on the Everest Base Camp trail, which gives the walk a remote, peaceful feel. It is a challenging trek for fit walkers who enjoy long days and cold nights, not a mountaineering trip."
    ],
    highlights: [
      "Renjo La summit — stunning views of Everest & Cho Oyu",
      "Gokyo Lakes and Gokyo Ri summit",
      "Less-traveled route with fewer trekkers",
      "Thame, the Sherpa village famed for its monastery and its mountaineers",
      "Extra acclimatization days at Thame and Lungden before the pass"
    ],
    permits: [
      { name: "Sagarmatha National Park entry permit", note: "NPR 3,000 per foreign visitor (some operators add 13% VAT), roughly US$22–27. Buy at the Nepal Tourism Board / DNPWC counter in Kathmandu or at the Monjo park gate; it is charged once per entry." },
      { name: "Khumbu Pasang Lhamu Rural Municipality trek card", note: "NPR 2,000–3,000 per person depending on length of stay (published rates vary by source), paid in rupees at Lukla or Monjo; it cannot be prepaid in Kathmandu. This local card replaced TIMS in the Khumbu, so a separate TIMS card is not needed." }
    ],
    included: [
      "Experienced certified guide",
      "Porter service",
      "All required permits (see the permit list above)",
      "Teahouse accommodation along the route",
      "Airport transfers",
      "Farewell dinner in Kathmandu"
    ],
    excluded: [
      "International flights",
      "Nepal visa",
      "Travel insurance (mandatory)",
      "Personal gear",
      "Alcoholic beverages",
      "Tips"
    ],
    fitness: "Very good aerobic fitness and comfort with 6–8 hour days for two weeks. The pass day involves about 1,000 m of climbing on rocky, sometimes snowy trail followed by a long descent, so previous high-altitude trekking is recommended. Microspikes or light crampons may be needed after snowfall.",
    safetyNotes: [
      "The pass is crossed from Lungden (4,380 m) over 5,360 m to Gokyo (4,790 m) in a single, long day. Start before dawn, set a steady pace and be willing to turn back if weather or symptoms demand. Descent is not an option mid-pass, which is why we add acclimatization days before it.",
      "The Thame to Lungden day gains about 580 m of sleeping altitude, a little more than ideal. It follows a rest day at Thame; do not skip it, and report any headache or poor sleep at once.",
      "Snow and ice on the pass can make a good trail treacherous. Your guide may delay the crossing by a day or ask you to wear spikes; accept that without argument.",
      "Lungden and Gokyo are remote; helicopter evacuation is the only quick way out. Check your insurance covers it above 5,000 m."
    ],
    hero: { src: "images/trek_renjola.jpg", alt: "Prayer flags strung over a snow-dusted cairn at a high pass beneath a deep blue sky", credit: null, license: null, sourceUrl: null },
    gallery: [
      { src: "images/sunset_3_peaks.jpeg", alt: "Three Himalayan summits glowing orange in the last light of the day above a snowy ridge", credit: null, license: null, sourceUrl: null }
    ],
    itinerary: [
      { day: 1, title: "Fly Kathmandu to Lukla, trek to Phakding", sleepAlt: 2652, activity: "Flight", duration: "35 min flight + 3–4 hrs trek", distanceKm: "~8 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Phakding",
        description: "Fly to Lukla (2,860 m), or to Manthali first in the peak seasons, which means an early drive of 4–5 hours. After tea and a briefing, walk down the Dudh Kosi valley through Chheplung and Ghat to Phakding. It is a gentle first walk, an easy way to settle into the rhythm of trekking." },
      { day: 2, title: "Trek from Phakding to Namche Bazaar", sleepAlt: 3440, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~11 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "Suspension bridges, the national park gate at Monjo and then the steep climb from the Hillary Bridge up to Namche, around two hours on a zigzag path. Walk slowly; this is the biggest height gain before the pass. Namche's stone houses stacked in an amphitheatre make a fine reward." },
      { day: 3, title: "Acclimatization day in Namche Bazaar", sleepAlt: 3440, activity: "Acclimatization", duration: "3–4 hrs easy walking", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "Walk up to the Syangboche ridge and the Everest View Hotel (about 3,880 m), then return to sleep in Namche. Visit the museum at the park headquarters and browse the market lanes. A real rest day now will make the high valleys easier." },
      { day: 4, title: "Trek from Namche Bazaar to Thame", sleepAlt: 3800, activity: "Trek", duration: "4–5 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Thame",
        description: "Leave the main Everest trail and follow the Bhote Koshi valley west, passing Thamo and its small hydroelectric plant, with fewer trekkers and more yak herders each hour. Thame is a Sherpa village of stone houses and high fields, home to a celebrated monastery set above the village. The valley is quiet, sunny and peaceful." },
      { day: 5, title: "Rest and acclimatization day in Thame", sleepAlt: 3800, activity: "Acclimatization", duration: "2–4 hrs easy walking", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Thame",
        description: "Visit Thame monastery on its ridge and, if you are feeling good, walk a few hundred metres higher up the valley toward the tiny settlement of Thame Og before returning to sleep. The day also lets you check gear and rest, since the next days climb steadily. Thame is known for producing generations of Sherpa climbers, so conversations with locals are worth the time." },
      { day: 6, title: "Trek from Thame to Lungden", sleepAlt: 4380, activity: "Trek", duration: "5–6 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lungden",
        description: "The trail follows the river upstream through Taranga and Marulung, crossing the Bhote Koshi on a plank bridge, as the valley narrows and the treeline falls away. Lungden is a handful of lodges in a stony bowl beneath the pass. Take the altitude gain of about 580 m slowly and drink often." },
      { day: 7, title: "Lungden rest and pass preparation", sleepAlt: 4380, activity: "Acclimatization", duration: "2–3 hrs easy walking", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lungden",
        description: "A quiet day at 4,380 m to adapt before the crossing. Take a short walk on the slopes toward the start of the Renjo La trail, return to the lodge, check crampons or spikes and agree a start time. It also serves as a weather buffer: if the forecast is poor, the crossing can be delayed by a day." },
      { day: 8, title: "Cross Renjo La (5,360 m) and descend to Gokyo", sleepAlt: 4790, activity: "Pass crossing", duration: "7–8 hrs trek", distanceKm: null, meals: "Breakfast, packed lunch, dinner", stay: "Teahouse, Gokyo",
        description: "Start before dawn and climb steadily on rocky switchbacks to the cairn and prayer flags of the Renjo La, where Everest, Lhotse, Makalu and Cho Oyu spread out beyond the turquoise Gokyo lakes. The descent to Gokyo is long and knee-testing, passing the lakeshore trail to the village. This is the biggest day of the trek, so conserve energy and keep eating and drinking." },
      { day: 9, title: "Climb Gokyo Ri (5,357 m)", sleepAlt: 4790, activity: "Acclimatization", duration: "5–6 hrs round trip", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Gokyo",
        description: "A steady climb of about 570 m up the hill behind Gokyo brings a 360-degree panorama of Everest, Lhotse, Makalu, Cho Oyu and the Ngozumpa Glacier. Leave early for calmer weather and bring a windproof layer; the top is cold. Descend carefully and rest in the afternoon." },
      { day: 10, title: "Fifth lake and glacier edge", sleepAlt: 4790, activity: "Acclimatization", duration: "4–6 hrs round trip", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Gokyo",
        description: "Walk along the moraine north past the fourth lake toward the fifth lake (about 4,980 m) for views up the Ngozumpa Glacier toward Cho Oyu. It is a flexible day, shortened or skipped if you are tired or the weather turns. Return to Gokyo for the night." },
      { day: 11, title: "Trek from Gokyo to Dole", sleepAlt: 4040, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Dole",
        description: "Walk back down the valley beside the lakes and glacier, passing Machhermo and tiny summer settlements before reaching Dole. The air thickens and your appetite should return. Starting early gives a gentle afternoon at Dole." },
      { day: 12, title: "Trek from Dole to Namche Bazaar", sleepAlt: 3440, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namche Bazaar",
        description: "Descend to Phortse Tenga on the Dudh Kosi, then climb to the Mong La ridge before the long contour down to Namche, with views of Ama Dablam and Thamserku. Spirits are usually high now, and Namche's bakeries and showers are a treat. It is a long but mostly downhill day." },
      { day: 13, title: "Trek from Namche Bazaar to Phakding", sleepAlt: 2652, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~11 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Phakding",
        description: "Down the stone steps to the Hillary Bridge, then along the river and across the suspension bridges to Phakding. The trail feels warm and green after the high valleys, and the air is thick and easy. Splitting the descent over two days keeps it relaxed and leaves slack before the flight." },
      { day: 14, title: "Trek from Phakding to Lukla", sleepAlt: 2860, activity: "Trek", duration: "3–4 hrs trek", distanceKm: "~8 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lukla",
        description: "A short, gentle final walk back up the valley to Lukla, with plenty of time for lunch and a farewell evening with the crew. Check in for tomorrow's flight and keep your documents handy. The extra margin here protects you if the weather delays flights." },
      { day: 15, title: "Fly Lukla to Kathmandu", sleepAlt: 1400, activity: "Flight", duration: "35 min flight", distanceKm: null, meals: "Breakfast, farewell dinner", stay: "Hotel, Kathmandu",
        description: "Fly back to Kathmandu on an early flight, weather permitting; in peak season some flights land at Manthali, followed by a drive of several hours. Tonight is the farewell dinner." }
    ],
    sources: [
      "https://alpineadventureclub.com/renjo-la-pass-trek.html",
      "https://www.gotonepal.com/print/everest-three-high-passes-trek",
      "https://himalayanhero.com/blog/gokyo-cho-la-pass-trek-itinerary-16-day-guide",
      "https://www.gotonepal.com/print/gokyo-lake-trek",
      "https://www.nepalhiking.com/kathmandu-to-lukla-flights/",
      "https://alpineluxurytreks.com/nepal-permits-and-fees"
    ]
  }
  /*__END__*/
);
