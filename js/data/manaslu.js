/* Manaslu region (Gorkha district, incl. Tsum Valley) - Peak Pursuit trek data. See SCHEMA.md.
   Facts checked against the sources listed on each trek. Prices are estimates until the owners confirm them.
   No images: Wikimedia Commons could not be reached for licence verification, so heroes are null and galleries empty. */
window.PP_REGIONS = window.PP_REGIONS || {};
window.PP_REGIONS['manaslu'] = {
  id: "manaslu",
  name: "Manaslu",
  country: "Nepal",
  tagline: "A quiet, restricted-permit corner of Gorkha: the Budhi Gandaki valley, the hidden Tsum Valley and the 5,106 m Larkya La beneath the eighth-highest mountain on Earth.",
  intro: [
    "Manaslu (8,163 m) is the eighth-highest mountain in the world, and the trails around it follow the Budhi Gandaki river from subtropical gorges up into the high, dry country on the Tibetan side of the Himalaya. In under two weeks of walking you pass from terraced millet fields and waterfalls to stone villages of prayer walls and yak pastures, with the Manaslu massif and the Ganesh and Himalchuli ranges closing in around you. The area sits inside the Manaslu Conservation Area, set up in 1998, which also shelters snow leopard, Himalayan tahr and red panda, though you are far more likely to see blue sheep and a great deal of mani stone than any of those.",
    "The people are as much the draw as the mountains. Nubri villages such as Lho and Samagaun and the Tsumba communities of the side valley to the east keep Tibetan Buddhist traditions that have changed slowly: monasteries and nunneries still hold daily life together, and the Tsum Valley, long regarded as a sacred hidden valley, only opened to foreign trekkers in 2008. Because the whole region is a restricted area, with permits that must be arranged through a registered agency and a licensed guide with you every step, the lodges are simpler and the trails far quieter than Everest or Annapurna. Expect basic teahouses, early nights and a feeling of really being somewhere."
  ],
  bestSeasons: "Late September to November has the clearest skies and the most stable weather for crossing Larkya La; March to May brings rhododendron forest, warmer days and more cloud, and the pass is crossed later in the season when the snow has settled. Monsoon (June to early September) means landslides on the road and trail, and December to February snow often closes the pass.",
  permitsSummary: "Everyone needs a Manaslu or Tsum Valley Restricted Area Permit (arranged by us through the Department of Immigration; seasonal USD pricing per week), a Manaslu Conservation Area Permit (NPR 3,000), and, for the Larkya La exit, an Annapurna Conservation Area Permit (NPR 3,000). Since March 2026 the old two-trekker minimum no longer applies, but a licensed guide is mandatory and permits are issued only through a registered Nepali agency.",
  gettingThere: "From Kathmandu it is a 7-9 hour jeep drive via Dhading Besi and Arughat to Soti Khola and on to Machha Khola, where the walk begins; in the monsoon the road beyond Soti Khola can be impassable. On the circuit you finish in Dharapani and drive down the Marsyangdi valley to Besisahar, then on to Kathmandu. IMPORTANT: floods on 6 September and 11 October 2026 damaged bridges, the road above Arughat and parts of the lower trail; repairs are under way and reports differ, so we confirm the current state with the Gorkha authorities and local lodge owners before every departure.",
  operator: "peakpursuit",
  operatorNote: null,
  hero: null,
  gallery: []
};

window.PP_TREKS = window.PP_TREKS || [];
window.PP_TREKS.push(
  {
    id: "manaslu-circuit",
    region: "manaslu",
    title: "Manaslu Circuit over Larkya La",
    tagline: "A full loop around the eighth-highest mountain on Earth: river gorges, Tibetan-style villages, and a 5,106 m pass that earns its reputation.",
    difficulty: "black",
    tags: ["pass", "remote", "cultural"],
    days: 15,
    walkingDays: 10,
    maxAlt: 5106,
    maxAltName: "Larkya La",
    distanceKm: 170,
    startPoint: "Machha Khola (by road from Kathmandu)",
    endPoint: "Dharapani, then by road to Besisahar and Kathmandu",
    minGroupSize: null,
    price: 1990,
    priceNote: "Estimated per-person price for two trekkers sharing, autumn (Sep–Nov) permit rates. Covers a licensed guide, a porter for every two trekkers, teahouse beds and three meals a day on the trail, private jeeps from and back to Kathmandu, and the restricted-area, conservation-area and local fees (about USD 245 per person in autumn, about USD 55 less outside Sep–Nov). A solo trekker pays a supplement for the guide and jeeps; ask us for a quote. Price will be confirmed before booking.",
    priceIsEstimate: true,
    seasonBadge: "Mar–May / Sep–Nov",
    bestSeasons: "Late September to mid-November gives the steadiest weather for the pass; April and May also work once the winter snow has settled. The pass is not advisable in the monsoon or in deep winter.",
    accommodation: "Teahouse",
    operator: "peakpursuit",
    operatorNote: null,
    overview: [
      "The Manaslu Circuit walks right round the Manaslu massif, starting in warm, green gorges of the Budhi Gandaki and climbing steadily into the Nubri valley, where villages such as Lho and Samagaun look and feel more Tibetan than Nepali. After a gentle few days of acclimatization around Samagaun and Samdo, you cross Larkya La at about 5,106 m and drop into the Marsyangdi valley on the Annapurna side. It is a serious, remote trek: lodges are simple, there are almost no roads or phone signals for a week, and the pass day is long.",
      "We have planned 15 days so that your body has time to adjust. There are two dedicated acclimatization days (Samagaun and Samdo), each with a short walk up high and a sleep back low, and one spare day built in after the pass to absorb a weather delay. It suits fit walkers who have done multi-day trekking before, are comfortable with 6-8 hour days, and want the Himalaya without the crowds. The daily rhythm is early breakfast, a steady morning on the trail, lunch at a teahouse, and an afternoon to rest, read and drink a lot of tea."
    ],
    highlights: [
      "Crossing Larkya La (about 5,106 m) with big Himalayan ranges opening up on the far side",
      "Samagaun and Samdo: Tibetan-influenced villages beneath Manaslu's north face",
      "Two acclimatization days with optional hikes to Birendra Tal and toward the Rui La viewpoint",
      "Monasteries, mani walls and Nubri culture with very few other trekkers",
      "A real change of scene: subtropical gorge, pine forest, high pasture, then glacier-side moraine",
      "The Bimthang basin and the rhododendron forests of the descent to Tilije"
    ],
    permits: [
      { name: "Manaslu Restricted Area Permit (RAP)", note: "Issued by the Department of Immigration through us. About USD 100 for the first 7 days plus USD 15 per extra day in Sep–Nov, or USD 75 plus USD 10 per extra day in Dec–Aug. Expect roughly USD 190 in autumn for this itinerary." },
      { name: "Manaslu Conservation Area Permit (MCAP)", note: "NPR 3,000 (about USD 23) for foreign visitors; checked at Jagat and further up the valley." },
      { name: "Annapurna Conservation Area Permit (ACAP)", note: "NPR 3,000 (about USD 23). Needed for the descent from Larkya La into Dharapani and the Marsyangdi valley." },
      { name: "Chumnubri Rural Municipality fee", note: "NPR 1,000 per person (about USD 8), collected around Jagat." },
      { name: "Guide and group rules", note: "A licensed Nepali guide is mandatory, arranged through a registered agency; one guide may lead up to 7 trekkers. Since March 2026 solo trekkers can apply, but some agencies still quote the older two-trekker minimum, so we confirm at booking." },
      { name: "TIMS", note: "Sources disagree on whether a TIMS card is still issued or checked for Manaslu; we confirm with the Immigration office when we apply and charge nothing separate for it." }
    ],
    included: [
      "Licensed, English-speaking trekking guide for the whole trip, with his meals, lodging, insurance and wages",
      "Porter service, one porter for every two trekkers",
      "Manaslu RAP, MCAP, ACAP and Chumnubri municipality fees, and permit paperwork",
      "Private jeep from Kathmandu to Machha Khola (or Soti Khola when the road ends there) and from Dharapani to Besisahar and Kathmandu",
      "Teahouse lodging on twin-share basis throughout the trek, and the Besisahar hotel night",
      "Breakfast, lunch and dinner on trek days, plus tea or coffee with meals",
      "A basic first-aid kit carried by your guide, and our emergency and evacuation coordination",
      "One hotel night in Kathmandu on return (twin share with breakfast)"
    ],
    excluded: [
      "International flights, Nepal visa fees and any airport transfers outside the trek days",
      "Travel and rescue insurance covering trekking to 5,200 m, including helicopter evacuation (mandatory)",
      "Kathmandu hotel nights before departure, and lunches and dinners in Kathmandu",
      "Personal equipment: sleeping bag, down jacket, boots, poles (rental can be arranged in Kathmandu)",
      "Hot showers, battery or phone charging, wifi and bottled drinks in the teahouses",
      "Tips for the guide and porters (we will explain the usual amounts at your briefing)",
      "Single-room supplements, and any extra nights caused by weather, landslides or illness"
    ],
    fitness: "You should be comfortable walking 6-8 hours a day with a light pack, and be able to climb 800-1,000 m in a day. Train for at least 8-12 weeks beforehand with hill walking or stair work carrying a small load, plus some long weekend hikes. Previous trekking above 3,500 m is helpful but not required. Cold-weather layering and good boots are essential for the pass day, which can start at 3-4 a.m. in sub-zero temperatures.",
    safetyNotes: [
      "Route status (mid-October 2026): floods on 6 September near Namrung and on 11 October in the lower Budhi Gandaki damaged bridges, the road beyond Arughat and parts of the trail. Temporary crossings and repairs were in progress and accounts conflict, so we confirm the current state with local officials before every departure and adjust the start point or dates if needed.",
      "Altitude: you sleep above 3,000 m for 8 nights, and the Dharamsala night (about 4,460 m) is a 600 m climb from Samdo, a little over the usual 500 m guideline. We soften it with the Samdo acclimatization day, a short walk and an early rest. Headache, nausea, breathlessness at rest or unsteady walking mean you do not go higher; descending is the treatment.",
      "Larkya La: the crossing starts around 4 a.m. and takes 8-10 hours in cold and often strong afternoon wind. Fresh snow, ice or poor visibility can close the pass; the spare day exists for this, and the guide has the final say. If it stays shut we turn back down the valley rather than push on.",
      "Evacuation: there is no road above Machha Khola and no mobile coverage in most villages. Helicopter evacuation needs weather, daylight and funded insurance, and rescue can take hours or days, so the group stays together and decisions are made early."
    ],
    hero: null,
    gallery: [],
    itinerary: [
      { day: 1, title: "Drive from Kathmandu to Machha Khola", sleepAlt: 890, activity: "Drive", duration: "8–9 hrs drive", distanceKm: "~160 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Machha Khola", description: "Leave Kathmandu in the early morning by private jeep, heading out via Dhading Besi and then taking the rougher road through Arughat and Soti Khola. The last stretch follows the Budhi Gandaki river in a deep gorge and can be dusty or muddy, depending on the season. We arrive in the afternoon to a simple teahouse by the river, and the road is the day's main adventure, so bring snacks, water and something warm for the evening." },
      { day: 2, title: "Trek from Machha Khola to Jagat", sleepAlt: 1400, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Jagat", description: "The trail rises and falls along the east bank of the Budhi Gandaki through bamboo and subtropical forest, with waterfalls, a hot spring at Tatopani and several suspension bridges. Short, steep climbs and sometimes landslide-scarred sections make it more tiring than the distance suggests. Jagat, with its stone-paved lane and the permit checkpoint, is a good place to spend the night." },
      { day: 3, title: "Trek from Jagat to Deng", sleepAlt: 1860, activity: "Trek", duration: "6–7 hrs trek", distanceKm: "~18 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Deng", description: "Beyond Philim the valley narrows into a steep-sided gorge, and the trail clings to the rock above the river. Small waterfalls and scattered Gurung houses appear as the valley widens toward Deng. It is a long day, so start early, drink plenty and keep a little energy for the final climb into the village." },
      { day: 4, title: "Trek from Deng to Namrung", sleepAlt: 2630, activity: "Trek", duration: "6–7 hrs trek", distanceKm: "~17 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namrung", description: "Climbing through villages such as Bihi and Ghap, you begin to see mani walls and prayer flags that mark the start of Buddhist Nubri country. Forest thickens as you climb and the first big peaks show through the trees above Namrung. This is a tough day with several long climbs, but Namrung's cool air and evening views up the valley make a good reward. The trail near Namrung was damaged by flooding in September 2026, so expect a temporary bridge or short diversion." },
      { day: 5, title: "Trek from Namrung to Lho", sleepAlt: 3180, activity: "Trek", duration: "4–5 hrs trek", distanceKm: "~10 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lho", description: "A gentler day through rhododendron and fir forest, past mani walls and chortens, with Manaslu itself coming into view above Lho. The village sits on a slope among fields, so you can wander round in the afternoon. The sleeping altitude rises about 550 m, slightly above our guideline, so we walk slowly, drink well and keep the afternoon easy." },
      { day: 6, title: "Trek from Lho to Samagaun", sleepAlt: 3530, activity: "Trek", duration: "4–5 hrs trek", distanceKm: "~8 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Samagaun", description: "Climb out of Lho through juniper and rhododendron, passing Shyala with wide views of the snow peaks around Manaslu, then cross the meadows into Samagaun (also written Sama Gaon). This is the largest village on the high circuit, with several teahouses and yak herds on the surrounding pastures. Arrive by early afternoon, rest and take a gentle walk round the village to start adjusting to the thinner air." },
      { day: 7, title: "Acclimatization day at Samagaun", sleepAlt: 3530, activity: "Acclimatization", duration: "4–6 hrs hike", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Samagaun", description: "A climb high and sleep low day: choose between the easy walk to Birendra Tal, a glacial lake near the village, or the longer climb toward Pungyen Gompa at about 4,000-4,100 m. Both give big views of the Manaslu glacier and ice cliffs. Return to Samagaun to sleep, eat well and rest your legs; if you feel unwell, taking it as a rest day is a perfectly good choice." },
      { day: 8, title: "Trek from Samagaun to Samdo", sleepAlt: 3860, activity: "Trek", duration: "3–4 hrs trek", distanceKm: "~8 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Samdo", description: "A short day on a wide, open trail that climbs gently through juniper scrub to Samdo, a Tibetan-style settlement close to the border. The valley feels huge and bare here, and the afternoon is free for resting or a short wander to the ridge behind the village. Take it slowly; this is the last village before the pass and the cold nights start now." },
      { day: 9, title: "Acclimatization day at Samdo", sleepAlt: 3860, activity: "Acclimatization", duration: "3–4 hrs hike", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Samdo", description: "We walk up the ridge toward the Rui La, which leads toward the Tibetan border, stopping at whatever height suits everyone (usually 400-500 m above the village) before returning to sleep low. In the evening your guide checks how everyone is feeling and what the forecast says for the pass. If conditions look poor, this is where we would wait rather than going up to Dharamsala." },
      { day: 10, title: "Trek from Samdo to Dharamsala (Larkya Phedi)", sleepAlt: 4460, activity: "Trek", duration: "3–4 hrs trek", distanceKm: "~6 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Dharamsala", description: "A short climb over moraine and along the glacier-carved valley to the stone lodge at Larkya Phedi, usually called Dharamsala. Altitude gain is about 600 m, above our usual guideline, so we keep the day short, arrive early and rest. Eat and drink as much as you can, sort your pass gear and go to bed early; the next wake-up is around 3 a.m." },
      { day: 11, title: "Cross Larkya La to Bimthang", sleepAlt: 3720, activity: "Pass crossing", duration: "8–10 hrs", distanceKm: "~15 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Bimthang", description: "Leaving by headlamp, you climb steadily over moraine and snow slopes, with prayer flags marking Larkya La (about 5,106 m) and big snow peaks all around you. The descent is long, rocky and knee-hard, dropping nearly 1,400 m to the Bimthang basin. Poles, warm gloves, sun protection and food in your pocket matter far more than speed today." },
      { day: 12, title: "Spare weather day at Bimthang", sleepAlt: 3720, activity: "Reserve day", duration: "Flexible", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Bimthang", description: "This day is held in the schedule for weather. If snow or wind forces a one-day delay at Samdo or Dharamsala, the whole plan shifts and this day absorbs it so you still reach Kathmandu on time. If the pass went to plan, use it to rest in the broad Bimthang valley, wander to the glacial lake or walk on a day early if your legs are ready." },
      { day: 13, title: "Trek from Bimthang to Tilije", sleepAlt: 2300, activity: "Trek", duration: "5–7 hrs trek", distanceKm: "~18 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Tilije", description: "Descend through big rhododendron and oak forest, passing through the village of Gho (about 2,500 m). The oxygen feels richer by the hour, and the knees feel it too, so poles help. Tilije is a village on the Marsyangdi side, and the night here is warmer than anywhere in the past week." },
      { day: 14, title: "Walk to Dharapani, jeep to Besisahar", sleepAlt: 760, activity: "Drive", duration: "2 hrs trek + 3–4 hrs drive", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Hotel, Besisahar", description: "A short, easy walk down to Dharapani, where the Manaslu circuit ends and the ACAP checkpoint stands, then a jeep ride down the Marsyangdi valley to Besisahar. Hot showers, cold drinks and a proper bed arrive at last. We split the road home into two days because the full drive to Kathmandu after a trek day is a long haul." },
      { day: 15, title: "Drive from Besisahar to Kathmandu", sleepAlt: 1400, activity: "Drive", duration: "5–6 hrs drive", distanceKm: null, meals: "Breakfast", stay: "Hotel, Kathmandu", description: "A relaxed morning, then back on the highway through Dumre and Mugling toward Kathmandu, normally arriving by mid-afternoon. We check in to your hotel and have a farewell evening to share the trip's best moments. Any delays from monsoon landslides are why the schedule has a spare day." }
    ],
    sources: [
      "https://www.nepalhikingteam.com/manaslu-circuit-trek-permit",
      "https://www.everesttrekkingroutes.com/manaslu-circuit-trek-full-planning-guide-for-2026-27/",
      "https://amazingnepaltrek.com/blog/manaslu-circuit-trek-a-complete-guide",
      "https://www.bestheritagetour.com/blog/manaslu-and-tsum-valley-trek",
      "https://www.taan.org.np/page/trekking-permit-fees",
      "https://kathmandupost.com/national/2026/03/22/immigration-eases-rules-for-solo-trekkers-in-restricted-areas",
      "https://mountainlustadv.com/blog/manaslu-circuit-trail-closure-flood"
    ]
  }
  /*__END__*/
);
