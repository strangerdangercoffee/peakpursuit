/* Annapurna region data for Peak Pursuit. Schema: see SCHEMA.md.
   All prices are estimates until the owners confirm them. Images: none verified yet (null). */
window.PP_REGIONS = window.PP_REGIONS || {};
window.PP_REGIONS["annapurna"] = {
  id: "annapurna",
  name: "Annapurna",
  country: "Nepal",
  tagline: "From a three-day sunrise walk to the Thorong La circuit: rhododendron ridges, Gurung and Thakali villages, and a ring of 8,000 m giants.",
  intro: [
    "The Annapurna Conservation Area stretches across the Kaski, Myagdi, Manang and Mustang districts of central Nepal, and its range is the most startling in the country. In a few days of walking you can pass from terraced rice fields at under 1,000 m, through oak and rhododendron forest, to the dry, wind-scoured trans-Himalayan valleys of Manang and Mustang. The Marsyangdi and Kali Gandaki rivers carve the two great corridors, with Annapurna I (8,091 m) and Dhaulagiri (8,167 m) standing over them, and the Pokhara side adds the sharp, untouched tooth of Machhapuchhre.",
    "This is also one of the most culturally layered regions of Nepal. Gurung villages such as Ghandruk and Chomrong, Magar communities on the Khopra side, Thakali traders in the Kali Gandaki valley and Tibetan-Buddhist Manangi families in the high Marsyangdi each have their own food, festivals and architecture, and Muktinath is sacred to both Hindus and Buddhists. Roads have changed parts of the classic Circuit in recent years, so we build our routes around the footpaths that remain and keep vehicles for the stretches where walking beside traffic adds nothing."
  ],
  bestSeasons: "October to November (clear, stable, cold at altitude) and March to May (rhododendrons in bloom, warmer, hazier views) are the prime windows. High routes such as Thorong La and Tilicho are best kept to these two seasons; the lower Poon Hill and Ghandruk routes are walkable in December to February in warm layers, and the monsoon (June to August) brings leeches and landslides.",
  permitsSummary: "Every trek here needs an Annapurna Conservation Area Project (ACAP) entry permit, NPR 3,000 for foreign visitors, paid in rupees in Kathmandu or Pokhara. In 2026 sources disagree on whether the TIMS card is still checked in this region (several say it is no longer required, a few operators still quote NPR 2,000), so we confirm locally and tell you before you travel; we found no separate municipal entry fee for the routes in this region.",
  gettingThere: "Most of our Annapurna treks begin with the drive or short flight from Kathmandu to Pokhara (about 6–7 hours by road, about 25 minutes by air), then a 1–2 hour road transfer to a trailhead near Nayapul, Kande or Siding. The Circuit and Tilicho routes start from the Marsyangdi valley, reached by a long drive via Besisahar, and end in Jomsom with a flight or jeep ride back to Pokhara.",
  operator: "peakpursuit",
  operatorNote: null,
  hero: null,
  gallery: []
};

window.PP_TREKS = window.PP_TREKS || [];
window.PP_TREKS.push(
  {
    id: "annapurna-poon-hill",
    region: "annapurna",
    title: "Ghorepani Poon Hill Trek",
    tagline: "A gentle four-day loop through Gurung villages and rhododendron forest to a sunrise over Dhaulagiri and Annapurna, easy enough for a first Himalayan trek.",
    difficulty: "green",
    tags: ["short", "cultural"],
    days: 6,
    walkingDays: 4,
    maxAlt: 3210,
    maxAltName: "Poon Hill",
    distanceKm: null,
    startPoint: "Nayapul (by road from Pokhara)",
    endPoint: "Ghandruk, then by road to Pokhara and Kathmandu",
    minGroupSize: null,
    price: 520,
    priceNote: "Estimated per-person price for a group of two or more sharing twin rooms. Assumes a trekking guide, one porter for every two trekkers, ACAP permit, Kathmandu–Pokhara transport, one hotel night in Pokhara, teahouse rooms and three meals a day on the trail. Nepal visa, travel insurance, the Kathmandu hotel nights and personal spending are not included. Price is a placeholder until the owners confirm it.",
    priceIsEstimate: true,
    seasonBadge: "Mar–May / Oct–Nov",
    bestSeasons: "October to November and March to May give the clearest dawns; the rhododendron forest above Ulleri is at its best in late March and April. Winter mornings are crisp but walkable, and the monsoon is wet and leechy.",
    accommodation: "Teahouse",
    operator: "peakpursuit",
    operatorNote: null,
    overview: [
      "Poon Hill is the shortest way to stand among the Annapurna giants without committing to a long trek. The trail climbs from the Modi Khola valley through terraced Gurung and Magar farmland and up a long stone staircase to Ghorepani, a ridge-top village at about 2,860 m where trekking routes cross. You climb a short, steep path in the dark before dawn to the viewpoint at 3,210 m and watch the light reach the summits of the Dhaulagiri and Annapurna ranges.",
      "The walking is steady rather than technical, with one big climb on the second day and a long, mostly downhill loop back via Tadapani and Ghandruk. Nothing is higher than 3,210 m, so altitude is a mild concern rather than the main one, which makes this a good first trek for families with older children, for people short on time, or for anyone testing whether Himalayan trekking is for them.",
      "Lodge rooms are simple, the food is plentiful, and the days are short enough to leave time to sit, read and watch the weather move across the hills. If you want more, this route is also the first and last section of the Khopra Danda trek."
    ],
    highlights: [
      "Sunrise over Dhaulagiri and the Annapurna range from Poon Hill (3,210 m)",
      "The stone staircase and cascading terraces above Ulleri",
      "Rhododendron and oak forest around Ghorepani, with spectacular blossom in spring",
      "Ghandruk, a large Gurung village with a small museum and mountain views",
      "Never above 3,210 m, so a realistic first Himalayan trek",
      "A loop route: you never walk the same stretch twice"
    ],
    permits: [
      { name: "ACAP entry permit", note: "NPR 3,000 (about USD 22) for foreign visitors, single entry, paid in rupees; we arrange it for you in Kathmandu or Pokhara and it is checked at the Birethanti checkpoint." },
      { name: "TIMS card", note: "Reported as no longer required in the Annapurna region in 2026 by most sources we checked, though a few operators still quote NPR 2,000; we confirm before you travel and include it in the price if it is required." },
      { name: "Local municipal fee", note: "No separate municipal entry fee was reported for this route in 2026 sources; we double-check locally before departure." }
    ],
    included: [
      "Hotel pick-up in Kathmandu on Day 1 and ground transport Kathmandu to Pokhara and Pokhara to Nayapul",
      "Jeep transfer from Ghandruk back to Pokhara on Day 5 and Pokhara to Kathmandu on Day 6",
      "One night in a twin-share hotel in Pokhara with breakfast",
      "Teahouse accommodation on the trek, twin share",
      "Breakfast, lunch and dinner with tea or coffee during the trek days",
      "Trekking guide and porter support (one porter for every two trekkers)",
      "Annapurna Conservation Area permit (and TIMS card if it is required)",
      "Guide and porter wages, insurance, food and lodging",
      "A basic first-aid kit carried by the guide"
    ],
    excluded: [
      "International flights and Nepal visa",
      "Hotel nights in Kathmandu before and after the trek",
      "Lunch and dinner in Pokhara and Kathmandu",
      "Travel and medical insurance with emergency evacuation cover (required)",
      "Hot showers, battery charging, Wi-Fi and bottled drinks in the lodges",
      "Tips for guide and porter, and personal gear",
      "Domestic flight Kathmandu to Pokhara (available at extra cost)"
    ],
    fitness: "Comfortable walking 4–6 hours a day with a light pack. The second day has a long climb of about 1,300 m on stone steps, so a few weeks of regular walking or stair practice beforehand makes it far more enjoyable. No previous trekking experience is needed.",
    safetyNotes: [
      "Poon Hill is only 3,210 m, so serious altitude illness is unusual, but headaches can still occur; walk slowly on the Ghorepani climb, drink plenty of water and tell your guide how you feel.",
      "The pre-dawn climb to the viewpoint is cold and on loose ground; bring a headtorch, warm layers, gloves and a hat, and use the handrails on the steps.",
      "Stone steps become slippery in rain and frost, particularly on the Ulleri staircase and the descent to Ghandruk; trekking poles help the knees.",
      "Landslides can interrupt the lower trail and the road in the monsoon; in the main seasons the greater risk is a sudden cold front, so your guide checks the forecast each morning. Evacuation is by road from Ghandruk or Nayapul at the low end, and by helicopter from Ghorepani if needed."
    ],
    hero: null,
    gallery: [],
    itinerary: [
      { day: 1, title: "Drive from Kathmandu to Pokhara", sleepAlt: 820, activity: "Drive", duration: "6–7 hrs drive", distanceKm: "~200 km", meals: "Breakfast", stay: "Hotel, Pokhara", description: "We assume you reach Kathmandu the day before, and our team collects you from your hotel in the morning for the ride west along the Prithvi Highway, following the Trishuli and Marsyangdi rivers. The road is busy, so use the time to meet your guide and sort your kit. You reach Pokhara in the afternoon, with time for a stroll along Phewa Lake and your first mountain skyline. A short flight is available at extra cost if you would rather save the road time." },
      { day: 2, title: "Drive to Nayapul and trek to Tikhedhunga", sleepAlt: 1540, activity: "Trek", duration: "1 hr drive, 3–4 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Tikhedhunga", description: "A morning drive takes you to Nayapul, where you walk to Birethanti, cross a suspension bridge over the Bhurungdi Khola and have your permits checked. The trail follows the river upstream through small farms and tea stops, with waterfalls beside the path in the wetter months. You stop at Tikhedhunga, a quiet village at the foot of the big climb, with an early night and your legs warm for tomorrow." },
      { day: 3, title: "Trek from Tikhedhunga to Ghorepani via Ulleri", sleepAlt: 2860, activity: "Trek", duration: "5–6 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Ghorepani", description: "This is the hardest day: a long staircase of stone steps climbs to Ulleri, then the path continues up through Banthanti and Nangethanti into mossy rhododendron forest. Go at a steady rhythm and take rests in the tea houses, because the climb of roughly 1,300 m is steady rather than steep. Ghorepani appears suddenly on the ridge at about 2,860 m, with views of Annapurna South and Dhaulagiri on a clear evening; expect the lodge dining room to be busy and the stove to be the hub of the evening." },
      { day: 4, title: "Poon Hill sunrise, then trek to Tadapani", sleepAlt: 2610, activity: "Trek", duration: "1 hr climb, 4–5 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Tadapani", description: "Leave in the dark with a headtorch for the climb to the Poon Hill viewpoint at 3,210 m, about an hour away, and wait for the first light on Dhaulagiri and the Annapurna peaks. After breakfast back in Ghorepani you cross the ridge to Tadapani through some of the best rhododendron forest on the trek. The path rolls up and down through old trees and small clearings, and the afternoon is yours to rest at Tadapani, with Machhapuchhre across the valley." },
      { day: 5, title: "Trek from Tadapani to Ghandruk, then jeep to Pokhara", sleepAlt: 820, activity: "Trek", duration: "3–4 hrs trek, 2–3 hrs drive", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Hotel, Pokhara", description: "The final walk drops through forest and terraced fields to Ghandruk, one of the largest Gurung villages in the region, with slate-roofed houses and a small museum worth a visit. After lunch a jeep takes the road down the valley to Pokhara, where you have a hot shower, a proper bed and a celebration dinner on your own account. If you want a slower finish, ask us about adding a night in Ghandruk." },
      { day: 6, title: "Drive from Pokhara to Kathmandu", sleepAlt: 1350, activity: "Drive", duration: "6–7 hrs drive", distanceKm: "~200 km", meals: "Breakfast", stay: "Kathmandu (trip ends on arrival)", description: "A leisurely morning in Pokhara, then the road back to Kathmandu, where we drop you at your hotel in the afternoon. The ride is long, so keep a book and a snack to hand. This is the last day of the trip; your Kathmandu hotel night is not included." }
    ],
    sources: [
      "https://www.himkalaadventure.com/poonhill-trek-in-nepal.html",
      "https://www.marrontreks.com/khopra-danda-trek",
      "https://alpineadventureclub.com/khopra-ridge-trek.html",
      "https://www.hopnepal.com/blog/annapurna-circuit-trek-permit-cost",
      "https://nepalvue.com/nepal-trekking-permits-guide/"
    ]
  },
  {
    id: "annapurna-mardi-himal",
    region: "annapurna",
    title: "Mardi Himal Trek",
    tagline: "A quiet forest-and-ridge walk to the foot of Machhapuchhre, with a viewpoint at about 4,200 m and a slow ascent that respects the altitude.",
    difficulty: "blue",
    tags: [],
    days: 9,
    walkingDays: 7,
    maxAlt: 4200,
    maxAltName: "Mardi Himal Upper Viewpoint",
    distanceKm: null,
    startPoint: "Kande (by road from Pokhara)",
    endPoint: "Siding / Lumre, then by road to Pokhara and Kathmandu",
    minGroupSize: null,
    price: 780,
    priceNote: "Estimated per-person price for a group of two or more sharing twin rooms. Assumes a trekking guide, one porter for every two trekkers, ACAP permit, Kathmandu–Pokhara and trailhead transport, one hotel night in Pokhara, lodge rooms and three meals a day on the trail. Nepal visa, travel insurance, Kathmandu hotel nights and personal spending are not included. Price is a placeholder until the owners confirm it.",
    priceIsEstimate: true,
    seasonBadge: "Mar–May / Oct–Nov",
    bestSeasons: "Mid-October to November and March to early May bring the clearest views of Machhapuchhre and Annapurna South. The ridge is cold and often snowy from December to February, and wet and cloudy in the monsoon.",
    accommodation: "Teahouse",
    operator: "peakpursuit",
    operatorNote: null,
    overview: [
      "The Mardi Himal trail climbs a long, forested ridge on the eastern side of the Annapurna Sanctuary. Where the ABC route follows the river valley, this one stays high on the spine of the ridge, passing through oak and rhododendron forest, then open grass slopes with Machhapuchhre (6,993 m, the fishtail) looming a few kilometres away. The highest point we plan for is the Mardi Himal Upper Viewpoint at about 4,200 m, with an optional push towards the base camp area if you feel well and the weather is kind.",
      "The trail is quiet by Annapurna standards, and lodges at the upper camps are basic. The main risk here is altitude: many shorter schedules climb from forest to High Camp in two days, and this ridge is known for people feeling the height. Our nine-day plan deliberately slows the middle section, with separate nights at about 3,000 m and 3,250 m before High Camp, so you gain no more than about 500 m between sleeping altitudes above 3,000 m.",
      "This is a good second Himalayan trek for someone who has done Poon Hill and wants more height and more wildness. Expect steep forest climbs, cold nights at High Camp, and a long final descent on knees that will have had a good week."
    ],
    highlights: [
      "A rare ridge-top trail with views of Machhapuchhre, Annapurna South and Hiunchuli",
      "Rhododendron and oak forest, with colour in spring",
      "Mardi Himal Upper Viewpoint at about 4,200 m, with a panorama over the Sanctuary",
      "Quiet lodges and a trail that sees far fewer trekkers than ABC",
      "A paced itinerary with graded nights at 3,000 m, 3,250 m and 3,550 m",
      "A trek that ends by road at Siding or Lumre, rather than retracing steps"
    ],
    permits: [
      { name: "ACAP entry permit", note: "NPR 3,000 (about USD 22) for foreign visitors, single entry, paid in rupees; we arrange it in Kathmandu or Pokhara and it is checked at a trailhead checkpost." },
      { name: "TIMS card", note: "Reported as no longer required in the Annapurna region in 2026 by most sources we checked, though a few operators still quote NPR 2,000; we confirm before you travel and include it if required." },
      { name: "Local municipal fee", note: "No separate municipal entry fee was reported for this route in 2026 sources; we double-check locally before departure." }
    ],
    included: [
      "Hotel pick-up in Kathmandu on Day 1 and transport Kathmandu to Pokhara and back",
      "Road transfers Pokhara to Kande and Siding/Lumre to Pokhara",
      "One night in a twin-share hotel in Pokhara with breakfast",
      "Lodge accommodation on the trek, twin share",
      "Breakfast, lunch and dinner with tea or coffee during the trek days",
      "Trekking guide and porter support (one porter for every two trekkers)",
      "Annapurna Conservation Area permit (and TIMS card if it is required)",
      "Guide and porter wages, insurance, food and lodging",
      "A basic first-aid kit carried by the guide"
    ],
    excluded: [
      "International flights and Nepal visa",
      "Hotel nights in Kathmandu before and after the trek",
      "Lunch and dinner in Pokhara and Kathmandu",
      "Travel and medical insurance with emergency evacuation cover (required)",
      "Hot showers, battery charging, Wi-Fi and bottled drinks in the lodges",
      "Tips for guide and porter, and personal gear such as a sleeping bag (available to rent)",
      "Domestic flight Kathmandu to Pokhara (available at extra cost)"
    ],
    fitness: "Good general fitness and some previous multi-day walking. Expect 4–7 hours a day with steep forest climbs, and a long day to the viewpoint and back down to Low Camp. A first trek is fine if you have trained for several weeks on hills or stairs and are comfortable at moderate altitude.",
    safetyNotes: [
      "This ridge is known for rapid ascent. We space nights above 3,000 m by no more than about 500 m, keep an eye on symptoms at every stop and will descend, not hold, if anyone has worsening headache, nausea or confusion.",
      "The upper ridge is narrow in places and can be icy in spring and late autumn; avoid the viewpoint climb in poor visibility or strong wind, and the guide may turn the group around.",
      "Lodges at Badal Danda and High Camp are basic and cold at night; carry a warm sleeping bag, a down jacket, a hat and gloves.",
      "Rescue is by helicopter from the upper camps in good weather; the walk down to the road at Siding is long, so make sure your insurance covers evacuation to at least 4,500 m."
    ],
    hero: null,
    gallery: [],
    itinerary: [
      { day: 1, title: "Drive from Kathmandu to Pokhara", sleepAlt: 820, activity: "Drive", duration: "6–7 hrs drive", distanceKm: "~200 km", meals: "Breakfast", stay: "Hotel, Pokhara", description: "We assume you reach Kathmandu the day before, and our team collects you from your hotel in the morning for the drive west along the Prithvi Highway. Break the long ride with a lunch stop by the river and sort your kit with your guide on the way. You reach Pokhara in the afternoon, with time for a gentle stroll along Phewa Lake. A short flight is available at extra cost if you prefer to save the road time." },
      { day: 2, title: "Drive to Kande and trek to Pritam Deurali", sleepAlt: 2100, activity: "Trek", duration: "1–1.5 hrs drive, 4–5 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Lodge, Pritam Deurali", description: "A short drive takes you to Kande on the Pokhara–Baglung road. From here the path climbs steps and forest paths through Australian Camp and Pothana to Pritam Deurali on the ridge, at about 2,100 m. The forest is cool and the first views of the mountains appear through gaps in the trees. This is an easy first day by design, so take your time and let your legs and lungs settle." },
      { day: 3, title: "Trek from Pritam Deurali to Forest Camp", sleepAlt: 2550, activity: "Trek", duration: "5–6 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Lodge, Forest Camp", description: "The path stays on the ridge, climbing and falling through mossy rhododendron and oak forest where birdsong is constant. It is a long day but without steep drops, and the lodge at Forest Camp (about 2,550 m) is a welcome rest. The forest hides most views, so enjoy the ridge-top light and the sounds of the woods." },
      { day: 4, title: "Trek from Forest Camp to Low Camp", sleepAlt: 3000, activity: "Trek", duration: "3–4 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Lodge, Low Camp", description: "The forest thins and views of Machhapuchhre and Annapurna South open up as you climb steadily to Low Camp, at around 3,000 m (sources give figures from about 2,970 m to 3,150 m). We keep this a short day on purpose. You have time to rest, sip fluids and watch the clouds move over the ridge, which is the best acclimatisation you can do." },
      { day: 5, title: "Trek from Low Camp to Badal Danda", sleepAlt: 3250, activity: "Trek", duration: "2–3 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Lodge, Badal Danda", description: "Cross open grass slopes to Badal Danda (about 3,250 m), a place with a long view across the Sanctuary and the valley below. It is another short day, with a rest in the afternoon, and and many faster schedules skip this stop, which is exactly why altitude trouble is common on this trail. The night is cold, and the sunset is worth waiting for." },
      { day: 6, title: "Trek from Badal Danda to High Camp", sleepAlt: 3550, activity: "Trek", duration: "3–4 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Lodge, High Camp", description: "The ridge becomes sharper, with big drops on both sides and Machhapuchhre ahead. You climb steadily to High Camp, at about 3,550 m (sources vary from about 3,540 to 3,600 m), where the lodges sit in a bowl with views of Machhapuchhre, Annapurna South and Hiunchuli. In the afternoon, a gentle walk up the ridge and back is a good climb-high, sleep-low exercise." },
      { day: 7, title: "Mardi Himal Upper Viewpoint and descent to Low Camp", sleepAlt: 3000, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Lodge, Low Camp", description: "Start before dawn in the cold for the climb along the ridge to the Upper Viewpoint (about 4,200 m), reached in around three to four hours. The top is wide, windy and spectacular, with Mardi Himal close by and the Sanctuary at your feet. Some itineraries continue towards the base camp area at roughly 4,450–4,500 m; this is optional and we only do it if the group feels well and conditions are good. Then you descend to Low Camp to sleep low, so the day is long." },
      { day: 8, title: "Trek from Low Camp to Siding, then drive to Pokhara", sleepAlt: 820, activity: "Trek", duration: "5–6 hrs trek, 1.5–2 hrs drive", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Hotel, Pokhara", description: "A long descent through forest and then terraced farmland brings you to Siding (around 1,700–1,900 m, depending on the source), a Gurung village at the end of the trail. Your knees will feel this day, so poles help. A road transfer from Siding or Lumre takes you back to Pokhara in the afternoon, where you will have a hot shower, and the evening is free for a celebration dinner." },
      { day: 9, title: "Drive from Pokhara to Kathmandu", sleepAlt: 1350, activity: "Drive", duration: "6–7 hrs drive", distanceKm: "~200 km", meals: "Breakfast", stay: "Kathmandu (trip ends on arrival)", description: "A leisurely morning in Pokhara, then the road back to Kathmandu, where we drop you at your hotel in the afternoon. The ride is long, so keep a book and a snack to hand. This is the last day of the trip; your Kathmandu hotel night is not included." }
    ],
    sources: [
      "https://www.alpineadventureclub.com/mardi-himal-trek",
      "https://www.trekking-in-nepal.net/en/nepal/trip-154-mardi-himal-family-lodge-trek",
      "https://www.gotonepal.com/print/mardi-himal-base-camp-trek",
      "https://www.kilroy.se/aktiviteter/trekking/mardi-himal-trek-69442",
      "https://nepalvue.com/nepal-trekking-permits-guide/"
    ]
  },
  {
    id: "annapurna-khopra-ridge",
    region: "annapurna",
    title: "Khopra Ridge and Khayer Lake Trek",
    tagline: "A quiet ridge route above Ghandruk with community-run lodges, huge Dhaulagiri and Annapurna views from Khopra Danda, and an optional day to sacred Khayer Lake.",
    difficulty: "blue",
    tags: ["remote", "cultural"],
    days: 10,
    walkingDays: 8,
    maxAlt: 4600,
    maxAltName: "Khayer Lake",
    distanceKm: null,
    startPoint: "Ghandruk (by road from Pokhara)",
    endPoint: "Ghorepani / Tikhedhunga, then by road to Pokhara and Kathmandu",
    minGroupSize: null,
    price: 980,
    priceNote: "Estimated per-person price for a group of two or more sharing twin rooms. Assumes a trekking guide, one porter for every two trekkers, ACAP permit, Kathmandu–Pokhara and trailhead transport, one hotel night in Pokhara, lodge and community-lodge rooms and three meals a day on the trail. Nepal visa, travel insurance, Kathmandu hotel nights and personal spending are not included. Price is a placeholder until the owners confirm it.",
    priceIsEstimate: true,
    seasonBadge: "Mar–May / Oct–Nov",
    bestSeasons: "Late September to November and March to May. The ridge is cold and can be snowbound in winter; Khayer Lake may still be partly frozen in early spring. Pilgrims visit the lake on the Janai Purnima full moon in July or August, but the monsoon is not a good time to walk here.",
    accommodation: "Teahouse + community lodge",
    operator: "peakpursuit",
    operatorNote: null,
    overview: [
      "Khopra Danda (about 3,660 m) is a long grassy ridge above the Kali Gandaki valley, facing Dhaulagiri, Annapurna South and Nilgiri with almost no one else in the frame. The trek climbs from Ghandruk through Tadapani and Dobato to the ridge, with a day trip to Khayer Lake, a high lake sacred to the local Magar community, then drops through the village of Swanta to Ghorepani and finishes with a Poon Hill sunrise.",
      "The lodges along the upper section are community-run: they are owned and staffed by local villages, and their proceeds go back into community projects such as schools, rather than to one private owner. The Khopra Ridge lodge, which has only around a dozen rooms and fills in the main seasons, was set up in 2007. Rooms and food are simple, power is limited and partly solar, and the lodges are a long way from a road, so we reserve rooms ahead and carry our own cash for the community lodges.",
      "It is a good choice if you have walked Poon Hill or ABC and want a quieter route with more altitude and less company, but without the exposure of the Mardi Himal ridge. Be ready for steep climbs, cold nights, and one long, tiring day if you choose to visit the lake."
    ],
    highlights: [
      "Khopra Danda (about 3,660 m), with Dhaulagiri and Annapurna South across the Kali Gandaki valley",
      "Sunrise from the Muldai viewpoint above Dobato",
      "Khayer Lake (about 4,600 m), a sacred Magar lake in a high bowl",
      "Community-run lodges whose proceeds support local schools",
      "Swanta, a traditional Magar village on the quiet side of the ridge",
      "A closing Poon Hill sunrise at 3,210 m"
    ],
    permits: [
      { name: "ACAP entry permit", note: "NPR 3,000 (about USD 22) for foreign visitors, single entry, paid in rupees; we arrange it in Kathmandu or Pokhara." },
      { name: "TIMS card", note: "Reported as no longer required in the Annapurna region in 2026 by most sources we checked, though some operators still quote NPR 2,000; we confirm before you travel and include it if required." },
      { name: "Community lodge bookings", note: "Not a government permit, but the Khopra community lodge has limited rooms and takes cash only, so we reserve ahead and carry rupees for lodging and food there." },
      { name: "Local municipal fee", note: "No separate municipal entry fee was reported for this route in 2026 sources; we double-check locally before departure." }
    ],
    included: [
      "Hotel pick-up in Kathmandu on Day 1 and transport Kathmandu to Pokhara and back",
      "Road transfer Pokhara to Nayapul and Tikhedhunga/Hile back to Pokhara",
      "One night in a twin-share hotel in Pokhara with breakfast",
      "Teahouse and community-lodge accommodation on the trek, twin or dormitory share",
      "Breakfast, lunch and dinner with tea or coffee during the trek days",
      "Trekking guide and porter support (one porter for every two trekkers)",
      "Annapurna Conservation Area permit (and TIMS card if it is required)",
      "Guide and porter wages, insurance, food and lodging",
      "A basic first-aid kit carried by the guide"
    ],
    excluded: [
      "International flights and Nepal visa",
      "Hotel nights in Kathmandu before and after the trek",
      "Lunch and dinner in Pokhara and Kathmandu",
      "Travel and medical insurance with emergency evacuation cover (required)",
      "Hot water buckets or showers, battery charging, Wi-Fi and bottled drinks in the lodges",
      "Tips for guide and porter, and personal gear such as a sleeping bag (available to rent)",
      "Domestic flight Kathmandu to Pokhara (available at extra cost)"
    ],
    fitness: "Good fitness and some previous multi-day trekking. Expect 5–7 hours of steady climbing on several days, and an 8–9 hour round trip if you do the Khayer Lake day, which is optional. A long descent to Swanta tests the knees.",
    safetyNotes: [
      "Altitude is moderate but the climb from Tadapani to Dobato is the biggest sleeping-altitude jump of the trek (about 740 m, though only about 350 m above 3,000 m); take it slowly, drink plenty and tell your guide about any headache or nausea.",
      "The Khayer Lake day climbs about 900 m from Khopra and back; we only go if the weather and the group are good, the guide may turn back, and you can stay at the lodge instead.",
      "The upper lodges are cold, have limited power and no heating in the rooms; bring a warm sleeping bag, a down jacket, gloves and a hat.",
      "This section is a day or two from a road, so a medical problem means helicopter evacuation from the ridge in good weather or a long descent on foot; make sure your insurance covers helicopter evacuation above 4,500 m."
    ],
    hero: null,
    gallery: [],
    itinerary: [
      { day: 1, title: "Drive from Kathmandu to Pokhara", sleepAlt: 820, activity: "Drive", duration: "6–7 hrs drive", distanceKm: "~200 km", meals: "Breakfast", stay: "Hotel, Pokhara", description: "We assume you reach Kathmandu the day before, and our team collects you from your hotel in the morning for the drive west along the Prithvi Highway. Use the time to meet your guide and go through your kit list. You reach Pokhara in the afternoon, with time for a walk along Phewa Lake. A short flight is available at extra cost if you prefer to save the road time." },
      { day: 2, title: "Drive to Nayapul and trek to Ghandruk", sleepAlt: 1940, activity: "Trek", duration: "1.5 hrs drive, 2–3 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Ghandruk", description: "A morning drive takes you to the trailhead near Nayapul/Kimche, where the path climbs by stone steps to Ghandruk, one of the biggest Gurung villages in the region. It is a short day and a good chance to explore the village, its stone alleys and its small museum, and to watch the clouds clear from Annapurna South and Machhapuchhre." },
      { day: 3, title: "Trek from Ghandruk to Tadapani", sleepAlt: 2610, activity: "Trek", duration: "5–6 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Tadapani", description: "A long uphill day through terraced fields and then rhododendron forest brings you to Tadapani, a village on a forested ridge at about 2,610 m. The climb is steady and the views of Machhapuchhre and Annapurna South open late in the day. Tadapani is cool, so you will want a warm layer in the evening." },
      { day: 4, title: "Trek from Tadapani to Dobato", sleepAlt: 3350, activity: "Trek", duration: "5–6 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Dobato", description: "The day starts in dense forest and climbs steadily to the ridge, where trees give way to grass and shrub. It is the biggest climb of the trek in terms of sleeping altitude, so pace yourself with frequent stops and plenty of water. You reach Dobato (about 3,350 m) in the afternoon; stay warm, eat well and rest." },
      { day: 5, title: "Muldai viewpoint, then trek along the ridge to Khopra Danda", sleepAlt: 3660, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Community lodge, Khopra Danda", description: "Set out before dawn for the Muldai viewpoint just above Dobato, where the sun comes up over Dhaulagiri and Annapurna. After breakfast, follow the high ridge on a long, undulating path to Khopra Danda (about 3,660 m). The community lodge sits on the ridge with huge views, so you can enjoy sunset with a hot drink and an early dinner." },
      { day: 6, title: "Excursion to Khayer Lake", sleepAlt: 3660, activity: "Trek", duration: "8–9 hrs return trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Community lodge, Khopra Danda", description: "An early start takes you up and across the high ground to Khayer Lake (about 4,600 m; sources give figures between roughly 4,500 and 4,830 m), a small lake with a shrine to the local Magar deity. The route climbs 900 m and is long, so it is optional; we only go in stable weather and you can stay at the lodge for a rest day instead. Climbing high and sleeping back at Khopra is also good acclimatisation. Return to the lodge in the afternoon." },
      { day: 7, title: "Trek from Khopra Danda to Swanta", sleepAlt: 2200, activity: "Trek", duration: "5–6 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Swanta", description: "A long descent of about 1,400 m through forest, farmland and bamboo to Swanta, a traditional Magar village at about 2,200 m. The path is steep on the upper section, so poles help, and it is warmer and greener as you drop. Evening in the village is a chance to see a side of the Annapurnas that few visitors meet." },
      { day: 8, title: "Trek from Swanta to Ghorepani", sleepAlt: 2860, activity: "Trek", duration: "4–6 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Ghorepani", description: "From Swanta, the trail climbs to Ghorepani through forest, a steady gain of about 650 m. You rejoin the busier Poon Hill trail at Ghorepani (about 2,860 m), so expect more trekkers, bigger lodges and hot drinks on tap." },
      { day: 9, title: "Poon Hill sunrise, then descend to Tikhedhunga and drive to Pokhara", sleepAlt: 820, activity: "Trek", duration: "1 hr climb, 4–5 hrs trek, 1.5–2 hrs drive", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Hotel, Pokhara", description: "A pre-dawn climb takes you to Poon Hill (3,210 m) for a final sunrise over Dhaulagiri and Annapurna. After breakfast you descend the stone staircase through Ulleri to Tikhedhunga, with a jeep or bus ride back to Pokhara. The descent is long and hard on the knees, but the lodge showers in Pokhara are worth it." },
      { day: 10, title: "Drive from Pokhara to Kathmandu", sleepAlt: 1350, activity: "Drive", duration: "6–7 hrs drive", distanceKm: "~200 km", meals: "Breakfast", stay: "Kathmandu (trip ends on arrival)", description: "A leisurely morning in Pokhara, then the road back to Kathmandu, where we drop you at your hotel in the afternoon. The ride is long, so keep a book and a snack to hand. This is the last day of the trip; your Kathmandu hotel night is not included." }
    ],
    sources: [
      "https://peregrinetreks.com/khopra-ridge-and-khayer-lake-trek/",
      "https://www.marrontreks.com/khopra-danda-trek",
      "https://alpineadventureclub.com/khopra-ridge-trek.html",
      "https://nepalitimes.com/holy-waters",
      "https://fulltimeexplorer.com/khopra-danda-nepal-village-guide/"
    ]
  },
  {
    id: "annapurna-base-camp",
    region: "annapurna",
    title: "Annapurna Base Camp Trek",
    tagline: "The classic walk into the Annapurna Sanctuary: Gurung villages, bamboo forest, a stop at Machhapuchhre Base Camp and a night in the amphitheatre of peaks at 4,130 m.",
    difficulty: "blue",
    tags: ["cultural"],
    days: 12,
    walkingDays: 10,
    maxAlt: 4130,
    maxAltName: "Annapurna Base Camp",
    distanceKm: 75,
    startPoint: "Nayapul (by road from Pokhara), walking to Ghandruk",
    endPoint: "Nayapul, then by road to Pokhara and Kathmandu",
    minGroupSize: null,
    price: 1090,
    priceNote: "Estimated per-person price for a group of two or more sharing twin rooms. Assumes a trekking guide, one porter for every two trekkers, ACAP permit, Kathmandu–Pokhara and trailhead transport, one hotel night in Pokhara, teahouse rooms and three meals a day on the trail. Nepal visa, travel insurance, Kathmandu hotel nights and personal spending are not included. Price is a placeholder until the owners confirm it.",
    priceIsEstimate: true,
    seasonBadge: "Mar–May / Oct–Nov",
    bestSeasons: "March to May for warmer days and rhododendron colour, and October to November for the clearest air. The Sanctuary is cold and avalanche-prone in winter and early spring, and rainy and leechy in the monsoon.",
    accommodation: "Teahouse",
    operator: "peakpursuit",
    operatorNote: null,
    overview: [
      "Annapurna Base Camp (ABC) sits at about 4,130 m inside a ring of peaks, with Annapurna I, Annapurna South, Hiunchuli, Gangapurna and Machhapuchhre all within view. The route starts in the Gurung villages of Ghandruk and Chomrong, then enters the Modi Khola gorge, passing through bamboo, rhododendron and oak forest before the valley opens into the glacial basin of the Sanctuary.",
      "We take a slower schedule than many one-week versions. Nights at about 2,900 m, 3,230 m, 3,700 m and 4,130 m, an acclimatisation day at Deurali and a night at Machhapuchhre Base Camp (MBC) mean the final climb is a short morning walk instead of a push. On the way down you pass Chomrong again and finish at Jhinu Danda, where the natural hot springs by the river are a reward for the long steps.",
      "This trek suits fit first-time Himalayan trekkers who are comfortable with long days on stairs. Stone steps are plentiful, climbs and descents are steep, and the weather at the top is cold, but nothing is technical."
    ],
    highlights: [
      "Annapurna Base Camp (about 4,130 m) in a ring of Himalayan peaks",
      "Machhapuchhre Base Camp (about 3,700 m), with sunrise on the fishtail peak",
      "Gurung villages of Ghandruk and Chomrong, with their stone stairs and tea terraces",
      "Bamboo and rhododendron forest in the Modi Khola gorge",
      "Hot springs at Jhinu Danda on the return",
      "A graded itinerary with an acclimatisation day at Deurali"
    ],
    permits: [
      { name: "ACAP entry permit", note: "NPR 3,000 (about USD 22) for foreign visitors, single entry, paid in rupees; we arrange it in Kathmandu or Pokhara and it is checked at Birethanti/Nayapul and again at Chomrong." },
      { name: "TIMS card", note: "Reported as no longer required in the Annapurna region in 2026 by most sources we checked, though several operators still quote NPR 2,000; we confirm before you travel and include it if required." },
      { name: "Local municipal fee", note: "No separate municipal entry fee was reported for this route in 2026 sources; we double-check locally before departure." }
    ],
    included: [
      "Hotel pick-up in Kathmandu on Day 1 and transport Kathmandu to Pokhara and back",
      "Road transfers Pokhara to the Nayapul/Kimche trailhead and Nayapul back to Pokhara",
      "One night in a twin-share hotel in Pokhara with breakfast",
      "Teahouse accommodation on the trek, twin share",
      "Breakfast, lunch and dinner with tea or coffee during the trek days",
      "Trekking guide and porter support (one porter for every two trekkers)",
      "Annapurna Conservation Area permit (and TIMS card if it is required)",
      "Guide and porter wages, insurance, food and lodging",
      "A basic first-aid kit carried by the guide"
    ],
    excluded: [
      "International flights and Nepal visa",
      "Hotel nights in Kathmandu before and after the trek",
      "Lunch and dinner in Pokhara and Kathmandu",
      "Travel and medical insurance with emergency evacuation cover (required)",
      "Hot showers, battery charging, Wi-Fi and bottled drinks in the lodges",
      "Tips for guide and porter, and personal gear such as a sleeping bag (available to rent)",
      "Domestic flight Kathmandu to Pokhara (available at extra cost)"
    ],
    fitness: "Good general fitness and the ability to walk 5–7 hours a day on steep, stepped terrain for ten days in a row. Training that includes stair climbing with a light pack, and a few multi-hour hikes, will help more than running. No technical experience is needed.",
    safetyNotes: [
      "Altitude: the profile above 3,000 m is graded (about 3,230 m, 3,700 m, then 4,130 m) with a rest day at Deurali, but headaches are common; tell your guide early, avoid alcohol and descend if symptoms get worse.",
      "Avalanche: slopes above the trail between Himalaya and Deurali and above MBC can release after snowfall, especially in winter and early spring; your guide checks recent snow and may change timing or stop in Deurali.",
      "Stairs and descents are tough on the knees, particularly the climb to Chomrong and the descent to Bamboo; bring trekking poles.",
      "In case of illness, evacuation is by foot or mule to the road at Nayapul, or helicopter from ABC or MBC in clear weather; weather can delay flights for a day or more, so ensure your insurance covers helicopter evacuation."
    ],
    hero: null,
    gallery: [],
    itinerary: [
      { day: 1, title: "Drive from Kathmandu to Pokhara", sleepAlt: 820, activity: "Drive", duration: "6–7 hrs drive", distanceKm: "~200 km", meals: "Breakfast", stay: "Hotel, Pokhara", description: "We assume you reach Kathmandu the day before, and our team collects you from your hotel in the morning for the drive west along the Prithvi Highway. Use the time to meet your guide and go through your kit list. You reach Pokhara in the afternoon, with time for a walk along Phewa Lake. A short flight is available at extra cost if you prefer to save the road time." },
      { day: 2, title: "Drive to Nayapul and trek to Ghandruk", sleepAlt: 1940, activity: "Trek", duration: "1.5 hrs drive, 2–3 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Ghandruk", description: "A morning drive takes you to the trailhead near Nayapul/Kimche, where the path climbs by stone steps to Ghandruk (about 1,940 m), one of the largest Gurung villages in the region. After a short walk you have the afternoon to see the village, its stone alleys and small museum, and the first mountain views of Annapurna South and Machhapuchhre." },
      { day: 3, title: "Trek from Ghandruk to Chomrong", sleepAlt: 2170, activity: "Trek", duration: "5–6 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Chomrong", description: "The trail drops to the Kimrong Khola, crosses a suspension bridge, and then climbs again by stone steps to Chomrong (about 2,170 m), the last big village before the Sanctuary. It is a day of ups and downs rather than a steady gain, so keep a steady pace in the heat. Chomrong has a checkpost, lodges terraced on the hillside and the first full view of Annapurna South." },
      { day: 4, title: "Trek from Chomrong to Himalaya via Bamboo", sleepAlt: 2900, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Himalaya", description: "A long staircase takes you down to the Chomrong Khola, then up again to Sinuwa, where the trail enters the gorge. You continue through bamboo forest at Bamboo and Dovan, climbing gradually beside the Modi Khola. The Himalaya lodge (about 2,900 m, sources range from 2,840 to 2,920 m) comes at the end of a long day, with a cold night ahead." },
      { day: 5, title: "Trek from Himalaya to Deurali", sleepAlt: 3230, activity: "Trek", duration: "2–3 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Deurali", description: "A short morning climb through rhododendron and oak forest brings you past Hinko Cave to Deurali (about 3,230 m), a few lodges with a view of the gorge that opens into the Sanctuary. This is an avalanche-prone section after snowfall, so your guide checks the forecast and the slopes before you go. Get settled early and rest, because tomorrow is a day of climbing high without moving your bed." },
      { day: 6, title: "Acclimatization hike towards Machhapuchhre Base Camp", sleepAlt: 3230, activity: "Acclimatization", duration: "3–4 hrs round trip", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Deurali", description: "A short walk takes you up the valley toward Machhapuchhre Base Camp (about 3,700 m), climbing about 470 m, before you return to Deurali to sleep low. Go at a very slow rhythm, drink well and watch for headache or nausea. The afternoon is free to rest, read and sit by the stove." },
      { day: 7, title: "Trek from Deurali to Machhapuchhre Base Camp", sleepAlt: 3700, activity: "Trek", duration: "2–3 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, MBC", description: "You retrace the same path, but with your gear and this time stay at MBC (about 3,700 m), well within the Sanctuary and directly below Machhapuchhre, which is closed to climbers. The glacial basin opens up as the valley widens. Stay warm in the evening and watch the sunset light on the peaks." },
      { day: 8, title: "Trek from MBC to Annapurna Base Camp", sleepAlt: 4130, activity: "Trek", duration: "2–3 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, ABC", description: "A short, steady climb through stones and snow patches brings you to ABC (about 4,130 m), a cluster of lodges surrounded by the mountain wall of the Sanctuary. You arrive in time for lunch, then have the afternoon to rest and walk to the nearby viewpoints. Nights here are very cold, so layer up and keep your water bottle inside your sleeping bag." },
      { day: 9, title: "ABC sunrise and trek down to Bamboo", sleepAlt: 2310, activity: "Trek", duration: "6–7 hrs trek", distanceKm: "~20 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Bamboo", description: "Rise before dawn for sunrise on Annapurna I and the surrounding peaks, then descend the same path in a single, big day. You pass MBC, Deurali, Himalaya and Dovan and reach Bamboo (about 2,310 m), which feels warm and green after the cold. Trekking poles are essential for the long, steep descent." },
      { day: 10, title: "Trek from Bamboo to Jhinu Danda", sleepAlt: 1780, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~9 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Jhinu Danda", description: "The trail climbs back to Sinuwa, then drops to Chomrong and onwards down the steps toward Jhinu Danda (about 1,780 m). In the afternoon, take the steep path down to the natural hot springs by the Modi Khola, which is an excellent way to soothe tired legs. Expect many steps, and expect crowds at the springs in season." },
      { day: 11, title: "Trek to Nayapul, then drive to Pokhara", sleepAlt: 820, activity: "Trek", duration: "4–5 hrs trek, 1–1.5 hrs drive", distanceKm: "~12 km", meals: "Breakfast, lunch, dinner", stay: "Hotel, Pokhara", description: "The last walking day follows the river through farmland and villages to the road-head at Nayapul, with an easy but long final stretch. A vehicle takes you back to Pokhara, where you have a hot shower, a bed and a lake-side dinner on your own account. The ACAP checkpost at Birethanti closes your trek." },
      { day: 12, title: "Drive from Pokhara to Kathmandu", sleepAlt: 1350, activity: "Drive", duration: "6–7 hrs drive", distanceKm: "~200 km", meals: "Breakfast", stay: "Kathmandu (trip ends on arrival)", description: "A leisurely morning in Pokhara, then the road back to Kathmandu, where we drop you at your hotel in the afternoon. The ride is long, so keep a book and a snack to hand. This is the last day of the trip; your Kathmandu hotel night is not included." }
    ],
    sources: [
      "https://www.bikatadventures.com/Home/Itinerary/Annapurna-Base-Camp-Trek",
      "https://www.treksandtrails.org/tours/annapurna-base-camp",
      "https://www.explore-share.com/trip/annapurna-base-camp-abc-trek-in-10-days/",
      "https://www.hopnepal.com/blog/annapurna-circuit-trek-permit-cost",
      "https://nepalvue.com/nepal-trekking-permits-guide/"
    ]
  }
  /*__END__*/
);
