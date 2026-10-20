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
  hero: {
    src: 'https://images.unsplash.com/photo-1727081243076-de156d350781?auto=format&fit=crop&w=1600&q=70',
    alt: 'Snow-covered mountain range under a cloudy blue sky, from a trip on the Manaslu Circuit',
    credit: 'Photo by Achyut on Unsplash',
    license: 'Unsplash License',
    sourceUrl: 'https://unsplash.com/photos/a-mountain-range-covered-in-snow-under-a-cloudy-blue-sky-enTpZGoSdek'
  },
  gallery: [
    {
      src: 'https://images.unsplash.com/photo-1691516347103-d29505e72c4a?auto=format&fit=crop&w=1600&q=70',
      alt: 'Snow-covered mountain under blue sky near Samagaun on the Manaslu Circuit, Nepal',
      credit: 'Photo by Bobby Thapa on Unsplash',
      license: 'Unsplash License',
      sourceUrl: 'https://unsplash.com/photos/a-snow-covered-mountain-with-a-blue-sky-in-the-background-1aQDZrb3SBo'
    },
    {
      src: 'https://images.unsplash.com/photo-1727081267987-c77bf3b7bf99?auto=format&fit=crop&w=1600&q=70',
      alt: 'Small village with mountains in the background on the Manaslu Circuit',
      credit: 'Photo by Achyut on Unsplash',
      license: 'Unsplash License',
      sourceUrl: 'https://unsplash.com/photos/a-small-village-with-mountains-in-the-background-VReoX--gGvw'
    },
    {
      src: 'https://images.unsplash.com/photo-1691516347496-f9ada8248715?auto=format&fit=crop&w=1600&q=70',
      alt: 'Blue lake surrounded by snow-covered mountains at Birendra Taal, Samagaun, Nepal',
      credit: 'Photo by Bobby on Unsplash',
      license: 'Unsplash License',
      sourceUrl: 'https://unsplash.com/photos/a-blue-lake-surrounded-by-snow-covered-mountains-rpuVDXLDmUE'
    }
  ]
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
    hero: {
      src: 'https://images.unsplash.com/photo-1691516347103-d29505e72c4a?auto=format&fit=crop&w=1600&q=70',
      alt: 'Snow-covered mountain under blue sky near Samagaun on the Manaslu Circuit, Nepal',
      credit: 'Photo by Bobby Thapa on Unsplash',
      license: 'Unsplash License',
      sourceUrl: 'https://unsplash.com/photos/a-snow-covered-mountain-with-a-blue-sky-in-the-background-1aQDZrb3SBo'
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1727081238344-487a943e0c16?auto=format&fit=crop&w=1600&q=70',
        alt: 'Mountain range with clouds, from a trip on the Manaslu Circuit',
        credit: 'Photo by Achyut on Unsplash',
        license: 'Unsplash License',
        sourceUrl: 'https://unsplash.com/photos/a-mountain-range-with-clouds-in-the-sky-bTOL6AlDL2A'
      },
      {
        src: 'https://images.unsplash.com/photo-1687066111672-59a6656037ac?auto=format&fit=crop&w=1600&q=70',
        alt: 'Blue lake surrounded by mountains under a cloudy sky on the Manaslu Circuit, Nepal',
        credit: 'Photo by Raj Malla on Unsplash',
        license: 'Unsplash License',
        sourceUrl: 'https://unsplash.com/photos/a-blue-lake-surrounded-by-mountains-under-a-cloudy-sky-6j21VEEOlvc'
      }
    ],
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
  ,{
    id: "manaslu-tsum-valley",
    region: "manaslu",
    title: "Tsum Valley Trek",
    tagline: "The hidden valley east of the Manaslu trail: cliff-hugging paths, Tibetan villages and the monastery at Mu Gompa, with no pass to cross and a top height of about 3,700 m.",
    difficulty: "blue",
    tags: ["cultural", "pilgrimage", "remote"],
    days: 13,
    walkingDays: 11,
    maxAlt: 3700,
    maxAltName: "Mu Gompa",
    distanceKm: null,
    startPoint: "Machha Khola (by road from Kathmandu)",
    endPoint: "Machha Khola, then by road to Kathmandu",
    minGroupSize: null,
    price: 1650,
    priceNote: "Estimated per-person price for two trekkers sharing, autumn (Sep–Nov) permit rates. Covers a licensed guide, a porter for every two trekkers, teahouse beds and three meals a day on the trail, private jeeps from and back to Kathmandu, and the Tsum Valley, conservation-area and local fees (about USD 85 per person in autumn, about USD 10 less in other seasons). A solo trekker pays a supplement for the guide and jeeps; ask us for a quote. Price will be confirmed before booking.",
    priceIsEstimate: true,
    seasonBadge: "Mar–May / Sep–Nov",
    bestSeasons: "Late September to November has the clearest skies; March to May is warmer with rhododendrons. The upper villages are cold and snowy in winter, and the lower valley is wet and slippery in the monsoon.",
    accommodation: "Teahouse",
    operator: "peakpursuit",
    operatorNote: null,
    overview: [
      "The Tsum Valley is a side valley of the Budhi Gandaki, reached by leaving the Manaslu trail at Philim. For generations it was thought of as a sacred hidden valley, and it opened to foreign trekkers only in 2008. The people here, the Tsumba, practise Tibetan Buddhism, and the villages are strung with mani walls, chortens and prayer wheels, with monasteries and a large nunnery as the high points of the route. The scenery builds from steep forested gorges to terraced fields and wide, windy uplands under the Ganesh Himal.",
      "This is a good trek for people who want a remote, culturally rich Himalayan walk without the extreme altitude of the Manaslu pass. You sleep no higher than about 3,700 m, and a spare day at Mu Gompa gives your body time to adjust. The challenge is the trail itself: it is narrow and steep in places, with long cliffside stretches, suspension bridges and a few big climbs. We walk 5-7 hours on most days and aim to return the same way."
    ],
    highlights: [
      "Mu Gompa, the high monastery at the top of the valley, with a full acclimatization day around it",
      "Rachen Gompa nunnery, set among the villages of the upper valley",
      "Chhokangparo and Lama Gaon (Lamagaon): high Tibetan-style villages with mani walls and prayer wheels",
      "Remote, uncrowded trails with far fewer trekkers than the Annapurna and Everest regions",
      "Views toward the Ganesh Himal over the valley's terraced slopes",
      "A moderate maximum altitude of about 3,700 m, with no high pass to cross"
    ],
    permits: [
      { name: "Tsum Valley Restricted Area Permit", note: "Issued through us by the Department of Immigration. About USD 40 for the first 7 days plus USD 7 per extra day in Sep–Nov (USD 30 plus USD 7 from Dec to Aug). Expect about USD 55 for this itinerary in autumn." },
      { name: "Manaslu Conservation Area Permit (MCAP)", note: "NPR 3,000 (about USD 23); checked at Philim and Lokpa." },
      { name: "Chumnubri Rural Municipality fee", note: "NPR 1,000 per person (about USD 8), usually collected at the Jagat or Philim checkpoints." },
      { name: "Guide and group rules", note: "A licensed Nepali guide is mandatory, arranged through a registered agency; one guide may lead up to 7 trekkers. Since March 2026 solo trekkers can apply, but some agencies still quote the older two-trekker minimum, so we confirm at booking." },
      { name: "Manaslu RAP / ACAP / TIMS", note: "We understand the Tsum permit alone covers this route and that ACAP is not needed (you do not cross into the Annapurna area); TIMS is unclear for this area. We confirm all of this with Immigration when we apply." }
    ],
    included: [
      "Licensed, English-speaking trekking guide for the whole trip, with his meals, lodging, insurance and wages",
      "Porter service, one porter for every two trekkers",
      "Tsum Valley RAP, MCAP and Chumnubri municipality fees, and permit paperwork",
      "Private jeep from Kathmandu to Machha Khola (or Soti Khola when the road ends there) and back",
      "Teahouse lodging on a twin-share basis throughout the trek",
      "Breakfast, lunch and dinner on trek days, plus tea or coffee with meals",
      "A basic first-aid kit carried by your guide, and our emergency and evacuation coordination",
      "One hotel night in Kathmandu on return (twin share with breakfast)"
    ],
    excluded: [
      "International flights, Nepal visa fees and any airport transfers outside the trek days",
      "Travel and rescue insurance covering trekking to 4,000 m, including helicopter evacuation (mandatory)",
      "Kathmandu hotel nights before departure, and lunches and dinners in Kathmandu",
      "Personal equipment: sleeping bag, down jacket, boots, poles (rental can be arranged in Kathmandu)",
      "Hot showers, battery or phone charging, wifi and bottled drinks in the teahouses",
      "Tips for the guide and porters (we will explain the usual amounts at your briefing)",
      "Single-room supplements, and any extra nights caused by weather, landslides or illness"
    ],
    fitness: "You should be comfortable walking 5-7 hours a day on steep, uneven ground with a light pack and be able to climb 600-800 m in a day. Train for 6-10 weeks with hill walking or stair work, and add a couple of long weekend hikes. Some trails are narrow and exposed above the river, so a head for heights helps. No technical skills are needed.",
    safetyNotes: [
      "Route status (mid-October 2026): the 11 October flood began in the Chumchet area and damaged the lower Budhi Gandaki. One report says the trail between Lokpa and Chumling was badly hit and a cantilever bridge swept away, and another that Tsum may stay closed longer than the main Manaslu route. Rebuilding was under way and reports conflict. We confirm the current state with local officials before every departure and adjust or postpone if the route is not safe.",
      "Altitude: you sleep above 3,000 m for 5 nights and the highest bed is about 3,700 m. The climb from Chumling to Chhokangparo (about 640 m) is above the usual 500 m guideline, so we go slowly on that day. Mu Gompa has a dedicated acclimatization day. Headache, nausea or unsteady walking mean no higher; descend if they do not ease.",
      "Terrain: narrow cliffside paths and many suspension bridges, with loose rock and slippery surfaces after rain. Do not rush, keep to the inside of the trail when mules or porters pass, and carry a head torch.",
      "Evacuation: there are no roads above Machha Khola and little mobile coverage. Helicopter evacuation depends on weather and daylight, so the group stays together and decisions are made early."
    ],
    hero: null,
    gallery: [],
    itinerary: [
      { day: 1, title: "Drive from Kathmandu to Machha Khola", sleepAlt: 890, activity: "Drive", duration: "8–9 hrs drive", distanceKm: "~160 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Machha Khola", description: "Leave Kathmandu early by private jeep, heading out via Dhading Besi and then taking the rougher road through Arughat and Soti Khola alongside the Budhi Gandaki gorge. The road is dusty or muddy depending on the season, and we reach the riverside teahouse in the afternoon. Bring snacks, water and a warm layer for the evening." },
      { day: 2, title: "Trek from Machha Khola to Jagat", sleepAlt: 1400, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Jagat", description: "The trail follows the river through bamboo and subtropical forest, with waterfalls, suspension bridges and a hot spring at Tatopani. Short, steep climbs and landslide sections make it more tiring than it looks. Jagat, with its stone-paved lane and the permit checkpoint, is a good place to spend the night." },
      { day: 3, title: "Trek from Jagat to Lokpa", sleepAlt: 2240, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lokpa", description: "Walk up the valley to Philim, where the main Manaslu trail continues north and the Tsum trail branches off. The path then squeezes into a narrow gorge before climbing steeply to Lokpa, the gateway to the Tsum Valley. Lokpa is a small cluster of lodges on a hillside, and tonight is a good time to drink plenty of water and pack for the cooler days ahead." },
      { day: 4, title: "Trek from Lokpa to Chumling", sleepAlt: 2386, activity: "Trek", duration: "4–5 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Chumling", description: "A relatively short day on a narrow trail that cuts across steep cliffs and crosses the river on suspension bridges, then opens to terraced fields as you reach the lower Tsum Valley. Chumling is the first major village, with a gompa, stone houses and a lively mix of Buddhist and local life. The Lokpa–Chumling section was damaged in the October 2026 floods, so expect a rebuilt or temporary path." },
      { day: 5, title: "Trek from Chumling to Chhokangparo", sleepAlt: 3030, activity: "Trek", duration: "5–6 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Chhokangparo", description: "A steady climb through the villages of the lower valley with views of the Ganesh Himal ahead. It is the biggest sleeping-altitude gain of the trek, about 640 m, so we keep a slow pace and take extended rests. Chhokangparo is a high village of stone houses and terraced fields, and the evening is cold." },
      { day: 6, title: "Trek from Chhokangparo to Nile", sleepAlt: 3361, activity: "Trek", duration: "4–5 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Nile", description: "A gentle day on an open trail through Lama Gaon (Lamagaon) and over a broad, windswept upland, with mani walls and prayer wheels at the edge of every village. Nile has a high-pasture feel, with wide views and the border country not far away. The altitude gain is modest, so there is time to wander round the village this afternoon." },
      { day: 7, title: "Trek from Nile to Mu Gompa", sleepAlt: 3700, activity: "Trek", duration: "3–4 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Mu Gompa", description: "A short walk through Chhule and across windy meadows to Mu Gompa, the highest monastery of the valley and the end of the route. The monastery is in a stark landscape of rock and snow with prayer flags and a quiet, cold calm. Settle in, eat well and rest; tomorrow is a day to explore." },
      { day: 8, title: "Acclimatization and exploring around Mu Gompa", sleepAlt: 3700, activity: "Acclimatization", duration: "3–5 hrs hike", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Mu Gompa", description: "A day to climb a little higher and sleep low: walk up the hillside above the monastery, with the option of continuing toward Dhephu Doma, and turn round at a height that suits the group, then return to Mu Gompa to sleep. If you feel the altitude, a long rest and a visit to the monastery are an equally good day. Your guide can explain the history and customs of the valley." },
      { day: 9, title: "Trek from Mu Gompa to Chhokangparo via Rachen Gompa", sleepAlt: 3030, activity: "Trek", duration: "6 hrs trek", distanceKm: "~14 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Chhokangparo", description: "Retrace the valley back through Chhule and Nile, with a stop at Rachen Gompa (about 3,240 m), a nunnery that is one of the highlights of the valley. The trail is mostly downhill and easy underfoot, and the extra oxygen comes as a relief. We reach Chhokangparo in the afternoon." },
      { day: 10, title: "Trek from Chhokangparo to Lokpa", sleepAlt: 2240, activity: "Trek", duration: "6 hrs trek", distanceKm: "~14 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lokpa", description: "A long descent through Chumling and back along the cliffside trail to Lokpa, with your knees feeling every step. Trekking poles are a great help on the steep steps. Dinner in Lokpa feels like a feast after the high-altitude diet." },
      { day: 11, title: "Trek from Lokpa to Jagat", sleepAlt: 1400, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Jagat", description: "Descend to Philim, rejoin the main Budhi Gandaki valley trail and walk on to Jagat. The path is warmer and greener than anywhere in the past week. It is a long day, so we start early and rest at the river." },
      { day: 12, title: "Trek from Jagat to Machha Khola", sleepAlt: 890, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Machha Khola", description: "The final day of walking follows the river down through familiar forest and waterfalls to Machha Khola, where the jeep will be waiting in the morning. In the dry season the road is sometimes passable further up, and if it is we may shorten the day. Celebrate with the guide and porters tonight." },
      { day: 13, title: "Drive from Machha Khola to Kathmandu", sleepAlt: 1400, activity: "Drive", duration: "8–9 hrs drive", distanceKm: "~160 km", meals: "Breakfast", stay: "Hotel, Kathmandu", description: "Jeep back along the river and through Arughat and Dhading Besi to Kathmandu, normally arriving in the late afternoon. We check in to your hotel for a shower and a proper bed, and the evening is free for a farewell dinner." }
    ],
    sources: [
      "https://www.bestheritagetour.com/blog/tsum-valley-trek-complete-guide-2025-2026",
      "https://www.thirdrockadventures.com/trip/tsum-valley-trek",
      "https://nepalalternativetreks.com/?p=1139",
      "https://www.taan.org.np/page/trekking-permit-fees",
      "https://www.nepalhikingteam.com/manaslu-circuit-trek-permit",
      "https://shikharadventure.com/blog/manaslu-conservation-area",
      "https://kathmandupost.com/national/2026/03/22/immigration-eases-rules-for-solo-trekkers-in-restricted-areas",
      "https://nepalmotherhousetreks.com/blog/is-manaslu-circuit-trekking-trail-open-on-septmber"
    ]
  }
  ,{
    id: "manaslu-base-camp",
    region: "manaslu",
    title: "Manaslu Base Camp and Pungyen Gompa",
    tagline: "Walk up the Budhi Gandaki to Samagaun, then spend three nights beneath the mountain with day hikes to Pungyen Gompa and Manaslu Base Camp, without crossing the pass.",
    difficulty: "blue",
    tags: ["remote", "cultural"],
    days: 13,
    walkingDays: 11,
    maxAlt: 4800,
    maxAltName: "Manaslu Base Camp (day hike from Samagaun)",
    distanceKm: null,
    startPoint: "Machha Khola (by road from Kathmandu)",
    endPoint: "Machha Khola, then by road to Kathmandu",
    minGroupSize: null,
    price: 1690,
    priceNote: "Estimated per-person price for two trekkers sharing, autumn (Sep–Nov) permit rates. Covers a licensed guide, a porter for every two trekkers, teahouse beds and three meals a day on the trail, private jeeps from and back to Kathmandu, and the restricted-area, conservation-area and local fees (about USD 175 per person in autumn, about USD 40 less outside Sep–Nov). A solo trekker pays a supplement for the guide and jeeps; ask us for a quote. Price will be confirmed before booking.",
    priceIsEstimate: true,
    seasonBadge: "Mar–May / Sep–Nov",
    bestSeasons: "Late September to November has the clearest views of the glacier and summit; March to May is warmer, with more cloud in the afternoons. Winter is cold and snowy above Samagaun, and the monsoon brings landslides on the lower trail.",
    accommodation: "Teahouse",
    operator: "peakpursuit",
    operatorNote: null,
    overview: [
      "This trek takes the first half of the Manaslu Circuit to the village of Samagaun (Sama Gaon) at about 3,530 m and then stays put, using day hikes to explore the mountain's northern side. You get the same river gorge, Nubri villages and long views as the circuit, but with no high pass to cross. Three nights at Samagaun give you the time to adjust before the big day: a hike to about 4,800 m at Manaslu Base Camp, which sits in a moraine basin below the ice of the north face.",
      "It suits strong walkers who want the Manaslu experience in under two weeks, or anyone unsure about committing to the 5,106 m Larkya La. You sleep no higher than about 3,530 m. The challenge is the length of the lower valley days, which are 6-7 hours each way, and the base camp hike, which is a 1,270 m climb on loose moraine and takes most of a day. Pungyen Gompa, a monastery high on the slopes opposite Samagaun, makes a natural first hike to prepare."
    ],
    highlights: [
      "Manaslu Base Camp at about 4,800 m, a full day hike from Samagaun below the north face",
      "Pungyen Gompa, a high monastery at about 4,000-4,100 m with views across the valley",
      "Three nights in Samagaun with time to explore, rest and meet local families",
      "Birendra Tal, a glacial lake close to the village, for an easy extra walk",
      "The full Budhi Gandaki valley, from subtropical gorge to high Nubri uplands",
      "No pass crossing and a sleeping altitude of about 3,530 m, for a gentler acclimatization profile"
    ],
    permits: [
      { name: "Manaslu Restricted Area Permit (RAP)", note: "Issued by the Department of Immigration through us. About USD 100 for the first 7 days plus USD 15 per extra day in Sep–Nov, or USD 75 plus USD 10 per extra day in Dec–Aug. Expect roughly USD 145 in autumn for this itinerary." },
      { name: "Manaslu Conservation Area Permit (MCAP)", note: "NPR 3,000 (about USD 23) for foreign visitors; checked at Jagat and further up the valley." },
      { name: "Chumnubri Rural Municipality fee", note: "NPR 1,000 per person (about USD 8), collected around Jagat." },
      { name: "Guide and group rules", note: "A licensed Nepali guide is mandatory, arranged through a registered agency; one guide may lead up to 7 trekkers. Since March 2026 solo trekkers can apply, but some agencies still quote the older two-trekker minimum, so we confirm at booking." },
      { name: "ACAP / TIMS", note: "The Annapurna Conservation Area Permit is not needed because you do not cross Larkya La. Sources disagree on whether a TIMS card is still issued for Manaslu; we confirm with Immigration when we apply and charge nothing separate for it." }
    ],
    included: [
      "Licensed, English-speaking trekking guide for the whole trip, with his meals, lodging, insurance and wages",
      "Porter service, one porter for every two trekkers",
      "Manaslu RAP, MCAP and Chumnubri municipality fees, and permit paperwork",
      "Private jeep from Kathmandu to Machha Khola (or Soti Khola when the road ends there) and back",
      "Teahouse lodging on a twin-share basis throughout the trek",
      "Breakfast, lunch and dinner on trek days, plus tea or coffee with meals",
      "A basic first-aid kit carried by your guide, and our emergency and evacuation coordination",
      "One hotel night in Kathmandu on return (twin share with breakfast)"
    ],
    excluded: [
      "International flights, Nepal visa fees and any airport transfers outside the trek days",
      "Travel and rescue insurance covering trekking to 5,000 m, including helicopter evacuation (mandatory)",
      "Kathmandu hotel nights before departure, and lunches and dinners in Kathmandu",
      "Personal equipment: sleeping bag, down jacket, boots, poles (rental can be arranged in Kathmandu)",
      "Hot showers, battery or phone charging, wifi and bottled drinks in the teahouses",
      "Tips for the guide and porters (we will explain the usual amounts at your briefing)",
      "Single-room supplements, and any extra nights caused by weather, landslides or illness"
    ],
    fitness: "You should be comfortable walking 6-7 hours on consecutive days with a light pack, and be able to climb about 1,200 m in a day for the base camp hike. Train for 8-10 weeks with hill walking or stair work, plus some long weekend hikes. The base camp day is steep and on loose ground, so strong legs and good knees help. Previous trekking above 3,500 m is useful but not required.",
    safetyNotes: [
      "Route status (mid-October 2026): floods on 6 September near Namrung and on 11 October in the lower Budhi Gandaki damaged bridges, the road beyond Arughat and parts of the trail. Repairs and temporary crossings were in progress and accounts conflict. This trek uses the same lower valley as the circuit, so we confirm the current state with local officials before every departure and adjust the dates or start if needed.",
      "Altitude: you sleep above 3,000 m for 4 nights and the highest bed is about 3,530 m. Pungyen Gompa (day 7) is the first higher hike, and the base camp day (day 8) climbs about 1,270 m in a day and returns to sleep low. Headache, nausea or unsteady walking mean no higher; descending is the treatment.",
      "Base camp day: the route is steep and loose moraine and glacial debris with no facilities. We start early, carry food and water for the whole day and agree a turnaround time. If the weather or the group is not right, we turn around, and the day can be swapped with Pungyen Gompa.",
      "Evacuation: there is no road above Machha Khola and mobile coverage is patchy. Helicopter evacuation depends on weather and daylight, so the group stays together and decisions are made early."
    ],
    hero: {
      src: 'https://images.unsplash.com/photo-1709305943279-b08fbf071710?auto=format&fit=crop&w=1600&q=70',
      alt: 'Snow-covered mountain at Manaslu Base Camp, near Samagaun, Nepal',
      credit: 'Photo by Sunil Tamang on Unsplash',
      license: 'Unsplash License',
      sourceUrl: 'https://unsplash.com/photos/a-snow-covered-mountain-in-the-middle-of-the-day-VQeFRGBd0p4'
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1751566609738-e1ed580bcb33?auto=format&fit=crop&w=1600&q=70',
        alt: 'Snow-capped mountain view en route to Pung Gyen Gompa near Samagaun, Manaslu Circuit trek',
        credit: 'Photo by Geetangey on Unsplash',
        license: 'Unsplash License',
        sourceUrl: 'https://unsplash.com/photos/hiker-enjoys-a-scenic-view-of-a-snow-capped-mountain-ySfDe9t_HeE'
      },
      {
        src: 'https://images.unsplash.com/photo-1611872736537-f8227460ff9e?auto=format&fit=crop&w=1600&q=70',
        alt: 'Snow-covered mountain near a lake at Samagaun, Manaslu region, Nepal',
        credit: 'Photo by Erik on Unsplash',
        license: 'Unsplash License',
        sourceUrl: 'https://unsplash.com/photos/snow-covered-mountain-near-lake-during-daytime-OwJ6Cn_DnHM'
      }
    ],
    itinerary: [
      { day: 1, title: "Drive from Kathmandu to Machha Khola", sleepAlt: 890, activity: "Drive", duration: "8–9 hrs drive", distanceKm: "~160 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Machha Khola", description: "Leave Kathmandu early by private jeep, heading out via Dhading Besi and then taking the rougher road through Arughat and Soti Khola alongside the Budhi Gandaki gorge. The road is dusty or muddy depending on the season, and we reach the riverside teahouse in the afternoon. Bring snacks, water and a warm layer for the evening." },
      { day: 2, title: "Trek from Machha Khola to Jagat", sleepAlt: 1400, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Jagat", description: "The trail follows the river through bamboo and subtropical forest, with waterfalls, suspension bridges and a hot spring at Tatopani. Short, steep climbs and landslide sections make it more tiring than it looks. Jagat, with its stone-paved lane and the permit checkpoint, is a good place to spend the night." },
      { day: 3, title: "Trek from Jagat to Deng", sleepAlt: 1860, activity: "Trek", duration: "6–7 hrs trek", distanceKm: "~18 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Deng", description: "Beyond Philim the valley narrows into a steep-sided gorge, and the trail clings to the rock above the river. Small waterfalls and scattered houses appear as the valley widens toward Deng. It is a long day, so start early, drink plenty and keep a little energy for the final climb into the village." },
      { day: 4, title: "Trek from Deng to Namrung", sleepAlt: 2630, activity: "Trek", duration: "6–7 hrs trek", distanceKm: "~17 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namrung", description: "Climbing through villages such as Bihi and Ghap, you begin to see mani walls and prayer flags that mark the start of Buddhist Nubri country. Forest thickens as you climb and the first big peaks show through the trees above Namrung. It is a tough day with several long climbs. The trail near Namrung was damaged by flooding in September 2026, so expect a temporary bridge or short diversion." },
      { day: 5, title: "Trek from Namrung to Lho", sleepAlt: 3180, activity: "Trek", duration: "4–5 hrs trek", distanceKm: "~10 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lho", description: "A gentler day through rhododendron and fir forest, past mani walls and chortens, with Manaslu itself coming into view above Lho. The village sits on a slope among fields, so you can wander round in the afternoon. The sleeping altitude rises about 550 m, slightly above our guideline, so we walk slowly, drink well and keep the afternoon easy." },
      { day: 6, title: "Trek from Lho to Samagaun", sleepAlt: 3530, activity: "Trek", duration: "4–5 hrs trek", distanceKm: "~8 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Samagaun", description: "Climb out of Lho through juniper and rhododendron, passing Shyala with wide views of the snow peaks around Manaslu, then cross the meadows into Samagaun. This is the largest village on the high circuit, with several teahouses and yak herds on the surrounding pastures. Arrive by early afternoon, rest and take a gentle walk round the village." },
      { day: 7, title: "Hike to Pungyen Gompa and back to Samagaun", sleepAlt: 3530, activity: "Acclimatization", duration: "5–7 hrs hike", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Samagaun", description: "A climb high and sleep low day: the trail climbs steeply from the valley to Pungyen Gompa at about 4,000-4,100 m, with views over the Manaslu glacier and across to the village. Take it slowly, drink plenty and turn back at any point if you feel unwell. This is the best preparation for tomorrow's longer hike, so rest well tonight." },
      { day: 8, title: "Day hike to Manaslu Base Camp", sleepAlt: 3530, activity: "Trek", duration: "8–10 hrs round trip", distanceKm: "~13 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Samagaun", description: "Leave early on the steep path up moraine and glacial debris toward Manaslu Base Camp, at about 4,800 m, the highest point of the trek and about 1,270 m above the village. There are no facilities on the way, so we carry lunch and water, and we agree a turnaround time before we start. The return to Samagaun is tiring but sleeping low means you recover well." },
      { day: 9, title: "Trek from Samagaun to Namrung", sleepAlt: 2630, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namrung", description: "The way back is mostly downhill, past Lho and through the forests above Namrung, and the air thickens with every hundred metres. Poles help on the long descents. Namrung is a good place for a last view up the valley toward the peaks." },
      { day: 10, title: "Trek from Namrung to Deng", sleepAlt: 1860, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~17 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Deng", description: "Descend through Ghap and Bihi, then drop to the riverside, where the air is warm and you start to feel the lower altitude. There are several suspension bridges and small climbs between the descents. The walk ends in Deng, a small village in a steep gorge." },
      { day: 11, title: "Trek from Deng to Jagat", sleepAlt: 1400, activity: "Trek", duration: "5–6 hrs trek", distanceKm: "~18 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Jagat", description: "Follow the narrow gorge trail back through Philim to Jagat, with the river loud in the valley below. It is a long day but mostly downhill or flat. Jagat is a good place for a hot meal and early night." },
      { day: 12, title: "Trek from Jagat to Machha Khola", sleepAlt: 890, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Machha Khola", description: "The final day of walking follows the river down through forest and waterfalls to Machha Khola, where the jeep will be waiting in the morning. In the dry season the road is sometimes passable further up, and if it is we may shorten the day. Celebrate with the guide and porters tonight." },
      { day: 13, title: "Drive from Machha Khola to Kathmandu", sleepAlt: 1400, activity: "Drive", duration: "8–9 hrs drive", distanceKm: "~160 km", meals: "Breakfast", stay: "Hotel, Kathmandu", description: "Jeep back along the river and through Arughat and Dhading Besi to Kathmandu, normally arriving in the late afternoon. We check in to your hotel for a shower and a proper bed, and the evening is free for a farewell dinner." }
    ],
    sources: [
      "https://himalayanhero.com/package/manaslu-base-camp-trek-the-complete-guide",
      "https://www.bestheritagetour.com/blog/manaslu-circuit-trek-side-trips",
      "https://heavenhimalaya.com/samagaun-in-manaslu/",
      "https://amazingnepaltrek.com/blog/manaslu-circuit-trek-a-complete-guide",
      "https://www.taan.org.np/page/trekking-permit-fees",
      "https://www.nepalhikingteam.com/manaslu-circuit-trek-permit",
      "https://kathmandupost.com/national/2026/03/22/immigration-eases-rules-for-solo-trekkers-in-restricted-areas",
      "https://mountainlustadv.com/blog/manaslu-circuit-trail-closure-flood"
    ]
  }
  ,{
    id: "manaslu-circuit-tsum-valley",
    region: "manaslu",
    title: "Manaslu Circuit with Tsum Valley",
    tagline: "The complete Manaslu journey: the hidden Tsum Valley and Mu Gompa first, then the full Budhi Gandaki circuit over Larkya La, with three acclimatization days and a spare day for weather.",
    difficulty: "black",
    tags: ["pass", "remote", "cultural", "pilgrimage"],
    days: 24,
    walkingDays: 18,
    maxAlt: 5106,
    maxAltName: "Larkya La",
    distanceKm: null,
    startPoint: "Machha Khola (by road from Kathmandu)",
    endPoint: "Dharapani, then by road to Besisahar and Kathmandu",
    minGroupSize: null,
    price: 3290,
    priceNote: "Estimated per-person price for two trekkers sharing, autumn (Sep–Nov) permit rates. Covers a licensed guide, a porter for every two trekkers, teahouse beds and three meals a day on the trail, private jeeps from and back to Kathmandu, and the Tsum Valley, Manaslu, conservation-area and local fees (budgeted at about USD 450 per person in autumn). The Manaslu and Tsum permits may be issued for the full time window of the trip, which would raise permit costs, so this is a cautious estimate to be checked with Immigration. A solo trekker pays a supplement for the guide and jeeps; ask us for a quote. Price will be confirmed before booking.",
    priceIsEstimate: true,
    seasonBadge: "Mar–May / Sep–Nov",
    bestSeasons: "Late September to mid-November gives the steadiest weather for the pass; April and May also work once the winter snow has settled. We would not plan the combination in the monsoon or deep winter.",
    accommodation: "Teahouse",
    operator: "peakpursuit",
    operatorNote: null,
    overview: [
      "This is the longest and most complete way to see the Manaslu region. You begin with the Tsum Valley, walking up to Mu Gompa at about 3,700 m through Tibetan-style villages, then return to the Budhi Gandaki trail and follow the Manaslu Circuit over Larkya La (about 5,106 m) to Dharapani. The Tsum section is a long, gentle introduction to altitude, so by the time you reach Samagaun your body has already spent a week above 2,000 m and several nights above 3,000 m.",
      "We have planned 24 days so that every stage is sound. There are three acclimatization days (Mu Gompa, Samagaun and Samdo) and a spare day after the pass for weather. It is demanding in length rather than in any one day: you walk 4-7 hours most days for three weeks, with a long pass day at the end. It suits fit trekkers with some previous multi-day experience who want the cultural depth of Tsum and the mountain drama of Manaslu in one trip, and who are happy with simple teahouses and a slow, patient pace."
    ],
    highlights: [
      "Two trips in one: the Tsum Valley with Mu Gompa and Rachen Gompa, then the whole Manaslu Circuit",
      "Crossing Larkya La (about 5,106 m) with big Himalayan ranges opening up on the far side",
      "Three acclimatization days (Mu Gompa, Samagaun, Samdo) and a spare weather day",
      "Tibetan-influenced villages from Chumling to Samagaun and Samdo, with monasteries and mani walls",
      "Samagaun beneath Manaslu's north face, with optional hikes to Birendra Tal and Pungyen Gompa",
      "The Bimthang basin and the rhododendron forests of the descent to Tilije"
    ],
    permits: [
      { name: "Manaslu Restricted Area Permit (RAP)", note: "Issued by the Department of Immigration through us. About USD 100 for the first 7 days plus USD 15 per extra day in Sep–Nov, or USD 75 plus USD 10 per extra day in Dec–Aug. For the circuit section alone this is roughly USD 175 in autumn; if issued for the whole trip window it would be higher." },
      { name: "Tsum Valley Restricted Area Permit", note: "About USD 40 for the first 7 days plus USD 7 per extra day in Sep–Nov (USD 30 plus USD 7 from Dec to Aug). Expect about USD 55 for the Tsum section in autumn." },
      { name: "Manaslu Conservation Area Permit (MCAP)", note: "NPR 3,000 (about USD 23) for foreign visitors; checked at Philim, Jagat and further up the valley." },
      { name: "Annapurna Conservation Area Permit (ACAP)", note: "NPR 3,000 (about USD 23). Needed for the descent from Larkya La into Dharapani and the Marsyangdi valley." },
      { name: "Chumnubri Rural Municipality fee", note: "NPR 1,000 per person (about USD 8), collected around Jagat." },
      { name: "Guide and group rules", note: "A licensed Nepali guide is mandatory, arranged through a registered agency; one guide may lead up to 7 trekkers. Since March 2026 solo trekkers can apply, but some agencies still quote the older two-trekker minimum, so we confirm at booking." },
      { name: "TIMS", note: "Sources disagree on whether a TIMS card is still issued or checked for Manaslu; we confirm with the Immigration office when we apply and charge nothing separate for it." }
    ],
    included: [
      "Licensed, English-speaking trekking guide for the whole trip, with his meals, lodging, insurance and wages",
      "Porter service, one porter for every two trekkers",
      "Manaslu RAP, Tsum Valley RAP, MCAP, ACAP and Chumnubri municipality fees, and permit paperwork",
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
    fitness: "You should be comfortable walking 5-7 hours a day for several weeks with a light pack, and be able to climb 800-1,000 m in a day. Train for at least 10-12 weeks with hill walking or stair work carrying a small load, plus long weekend hikes, including some back-to-back days. Previous multi-day trekking above 3,500 m is helpful. Cold-weather layering and good boots are essential for the pass day, which can start at 3 a.m. in sub-zero temperatures.",
    safetyNotes: [
      "Route status (mid-October 2026): floods on 6 September near Namrung and on 11 October in the lower Budhi Gandaki damaged bridges, the road beyond Arughat and parts of the trail. One report says the Lokpa–Chumling trail in Tsum was badly hit and a cantilever bridge swept away. Repairs were under way and accounts conflict, so we confirm the current state with local officials before every departure and will adjust or postpone if a section is not safe.",
      "Altitude: you sleep above 3,000 m for 13 nights. Three steps are above the usual 500 m guideline: Chumling to Chhokangparo (about 640 m), Namrung to Lho (about 550 m) and Samdo to Dharamsala (about 600 m). We soften them with slow pace, short days and the acclimatization days. Headache, nausea, breathlessness at rest or unsteady walking mean you do not go higher; descending is the treatment.",
      "Larkya La: the crossing starts around 4 a.m. and takes 8-10 hours in cold and often strong afternoon wind. Fresh snow, ice or poor visibility can close the pass; the spare day exists for this, and the guide has the final say. If it stays shut we turn back down the valley rather than push on.",
      "Evacuation: there is no road above Machha Khola and no mobile coverage in most villages. Helicopter evacuation needs weather, daylight and funded insurance, and rescue can take hours or days, so the group stays together and decisions are made early."
    ],
    hero: {
      src: 'https://images.unsplash.com/photo-1691516347496-f9ada8248715?auto=format&fit=crop&w=1600&q=70',
      alt: 'Blue lake surrounded by snow-covered mountains at Birendra Taal, Samagaun, Nepal',
      credit: 'Photo by Bobby on Unsplash',
      license: 'Unsplash License',
      sourceUrl: 'https://unsplash.com/photos/a-blue-lake-surrounded-by-snow-covered-mountains-rpuVDXLDmUE'
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1727081267987-c77bf3b7bf99?auto=format&fit=crop&w=1600&q=70',
        alt: 'Small village with mountains in the background on the Manaslu Circuit',
        credit: 'Photo by Achyut on Unsplash',
        license: 'Unsplash License',
        sourceUrl: 'https://unsplash.com/photos/a-small-village-with-mountains-in-the-background-VReoX--gGvw'
      },
      {
        src: 'https://images.unsplash.com/photo-1687066111672-59a6656037ac?auto=format&fit=crop&w=1600&q=70',
        alt: 'Blue lake surrounded by mountains under a cloudy sky on the Manaslu Circuit, Nepal',
        credit: 'Photo by Raj Malla on Unsplash',
        license: 'Unsplash License',
        sourceUrl: 'https://unsplash.com/photos/a-blue-lake-surrounded-by-mountains-under-a-cloudy-sky-6j21VEEOlvc'
      }
    ],
    itinerary: [
      { day: 1, title: "Drive from Kathmandu to Machha Khola", sleepAlt: 890, activity: "Drive", duration: "8–9 hrs drive", distanceKm: "~160 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Machha Khola", description: "Leave Kathmandu early by private jeep, heading out via Dhading Besi and then taking the rougher road through Arughat and Soti Khola alongside the Budhi Gandaki gorge. The road is dusty or muddy depending on the season, and we reach the riverside teahouse in the afternoon. Bring snacks, water and a warm layer for the evening." },
      { day: 2, title: "Trek from Machha Khola to Jagat", sleepAlt: 1400, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Jagat", description: "The trail follows the river through bamboo and subtropical forest, with waterfalls, suspension bridges and a hot spring at Tatopani. Short, steep climbs and landslide sections make it more tiring than it looks. Jagat, with its stone-paved lane and the permit checkpoint, is a good place to spend the night." },
      { day: 3, title: "Trek from Jagat to Lokpa", sleepAlt: 2240, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lokpa", description: "Walk up the valley to Philim, where the main Manaslu trail continues north and the Tsum trail branches off. The path then squeezes into a narrow gorge before climbing steeply to Lokpa, the gateway to the Tsum Valley. Drink plenty of water tonight and pack for cooler days ahead." },
      { day: 4, title: "Trek from Lokpa to Chumling", sleepAlt: 2386, activity: "Trek", duration: "4–5 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Chumling", description: "A relatively short day on a narrow trail that cuts across steep cliffs and crosses the river on suspension bridges, then opens to terraced fields as you reach the lower Tsum Valley. Chumling is the first major village, with a gompa and stone houses. The Lokpa–Chumling section was damaged in the October 2026 floods, so expect a rebuilt or temporary path." },
      { day: 5, title: "Trek from Chumling to Chhokangparo", sleepAlt: 3030, activity: "Trek", duration: "5–6 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Chhokangparo", description: "A steady climb through the villages of the lower valley with views of the Ganesh Himal ahead. It is the biggest sleeping-altitude gain of the Tsum section, about 640 m, so we keep a slow pace and take extended rests. Chhokangparo is a high village of stone houses and terraced fields, and the evening is cold." },
      { day: 6, title: "Trek from Chhokangparo to Nile", sleepAlt: 3361, activity: "Trek", duration: "4–5 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Nile", description: "A gentle day on an open trail through Lama Gaon (Lamagaon) and over a broad, windswept upland, with mani walls and prayer wheels at the edge of every village. Nile has a high-pasture feel, with wide views and the border country not far away. The altitude gain is modest, so there is time to wander round the village this afternoon." },
      { day: 7, title: "Trek from Nile to Mu Gompa", sleepAlt: 3700, activity: "Trek", duration: "3–4 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Mu Gompa", description: "A short walk through Chhule and across windy meadows to Mu Gompa, the highest monastery of the valley and the end of the Tsum route. The monastery stands in a stark landscape of rock and snow, with prayer flags and a quiet, cold calm. Settle in, eat well and rest; tomorrow is a day to explore." },
      { day: 8, title: "Acclimatization and exploring around Mu Gompa", sleepAlt: 3700, activity: "Acclimatization", duration: "3–5 hrs hike", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Mu Gompa", description: "A day to climb a little higher and sleep low: walk up the hillside above the monastery, with the option of continuing toward Dhephu Doma, and turn round at a height that suits the group. If you feel the altitude, a long rest and a visit to the monastery are an equally good day. This is the highest bed of the Tsum section, so use the day well." },
      { day: 9, title: "Trek from Mu Gompa to Chhokangparo via Rachen Gompa", sleepAlt: 3030, activity: "Trek", duration: "6 hrs trek", distanceKm: "~14 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Chhokangparo", description: "Retrace the valley back through Chhule and Nile, with a stop at Rachen Gompa (about 3,240 m), a nunnery that is one of the highlights of the valley. The trail is mostly downhill and easy underfoot, and the extra oxygen comes as a relief. We reach Chhokangparo in the afternoon." },
      { day: 10, title: "Trek from Chhokangparo to Lokpa", sleepAlt: 2240, activity: "Trek", duration: "6 hrs trek", distanceKm: "~14 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lokpa", description: "A long descent through Chumling and back along the cliffside trail to Lokpa, with your knees feeling every step. Trekking poles are a great help on the steep steps. Dinner in Lokpa feels like a feast after the high-altitude diet." },
      { day: 11, title: "Trek from Lokpa to Jagat", sleepAlt: 1400, activity: "Trek", duration: "6–7 hrs trek", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Jagat", description: "Descend to Philim, rejoin the main Budhi Gandaki valley trail and walk on to Jagat. The path is warmer and greener than anywhere in the past week. We deliberately stop at Jagat rather than pushing on, so the long day ahead is not made longer." },
      { day: 12, title: "Trek from Jagat to Deng", sleepAlt: 1860, activity: "Trek", duration: "6–7 hrs trek", distanceKm: "~18 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Deng", description: "Past Philim again, the valley narrows into a steep-sided gorge and the trail clings to the rock above the river. This is the start of the Manaslu Circuit proper, and the permit for the main route is checked along the way. It is a long day, so start early and keep a little energy for the final climb into Deng." },
      { day: 13, title: "Trek from Deng to Namrung", sleepAlt: 2630, activity: "Trek", duration: "6–7 hrs trek", distanceKm: "~17 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Namrung", description: "Climbing through villages such as Bihi and Ghap, you begin to see mani walls and prayer flags that mark the start of Buddhist Nubri country. Forest thickens as you climb and the first big peaks show through the trees above Namrung. The trail near Namrung was damaged by flooding in September 2026, so expect a temporary bridge or short diversion." },
      { day: 14, title: "Trek from Namrung to Lho", sleepAlt: 3180, activity: "Trek", duration: "4–5 hrs trek", distanceKm: "~10 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Lho", description: "A gentler day through rhododendron and fir forest, past mani walls and chortens, with Manaslu itself coming into view above Lho. The village sits on a slope among fields, so you can wander round in the afternoon. The sleeping altitude rises about 550 m, slightly above our guideline, so we walk slowly, drink well and keep the afternoon easy." },
      { day: 15, title: "Trek from Lho to Samagaun", sleepAlt: 3530, activity: "Trek", duration: "4–5 hrs trek", distanceKm: "~8 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Samagaun", description: "Climb out of Lho through juniper and rhododendron, passing Shyala with wide views of the snow peaks around Manaslu, then cross the meadows into Samagaun. This is the largest village on the high circuit, with several teahouses and yak herds on the surrounding pastures. Arrive by early afternoon, rest and take a gentle walk round the village." },
      { day: 16, title: "Acclimatization day at Samagaun", sleepAlt: 3530, activity: "Acclimatization", duration: "4–6 hrs hike", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Samagaun", description: "Climb high and sleep low: choose between the easy walk to Birendra Tal, a glacial lake near the village, or the longer climb toward Pungyen Gompa at about 4,000-4,100 m. Both give big views of the Manaslu glacier. Return to Samagaun to sleep, and treat the day as a rest day if you feel unwell." },
      { day: 17, title: "Trek from Samagaun to Samdo", sleepAlt: 3860, activity: "Trek", duration: "3–4 hrs trek", distanceKm: "~8 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Samdo", description: "A short day on a wide, open trail that climbs gently through juniper scrub to Samdo, a Tibetan-style settlement close to the border. The valley feels huge and bare, and the afternoon is free for resting or a short wander to the ridge behind the village. This is the last village before the pass and the nights get colder." },
      { day: 18, title: "Acclimatization day at Samdo", sleepAlt: 3860, activity: "Acclimatization", duration: "3–4 hrs hike", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Samdo", description: "We walk up the ridge toward the Rui La, which leads toward the Tibetan border, stopping at whatever height suits everyone (usually 400-500 m above the village) before returning to sleep low. In the evening your guide checks how everyone is feeling and what the forecast says for the pass. If conditions look poor, this is where we would wait rather than going up to Dharamsala." },
      { day: 19, title: "Trek from Samdo to Dharamsala (Larkya Phedi)", sleepAlt: 4460, activity: "Trek", duration: "3–4 hrs trek", distanceKm: "~6 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Dharamsala", description: "A short climb over moraine and along the glacier-carved valley to the stone lodge at Larkya Phedi, usually called Dharamsala. Altitude gain is about 600 m, above our usual guideline, so we keep the day short, arrive early and rest. Eat and drink as much as you can, sort your pass gear and go to bed early; the next wake-up is around 3 a.m." },
      { day: 20, title: "Cross Larkya La to Bimthang", sleepAlt: 3720, activity: "Pass crossing", duration: "8–10 hrs", distanceKm: "~15 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Bimthang", description: "Leaving by headlamp, you climb steadily over moraine and snow slopes, with prayer flags marking Larkya La (about 5,106 m) and big snow peaks all around you. The descent is long, rocky and knee-hard, dropping nearly 1,400 m to the Bimthang basin. Poles, warm gloves, sun protection and food in your pocket matter far more than speed today." },
      { day: 21, title: "Spare weather day at Bimthang", sleepAlt: 3720, activity: "Reserve day", duration: "Flexible", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Teahouse, Bimthang", description: "This day is held in the schedule for weather. If snow or wind forces a one-day delay at Samdo or Dharamsala, the whole plan shifts and this day absorbs it so you still reach Kathmandu on time. If the pass went to plan, use it to rest in the broad Bimthang valley, wander to the glacial lake or walk on a day early if your legs are ready." },
      { day: 22, title: "Trek from Bimthang to Tilije", sleepAlt: 2300, activity: "Trek", duration: "5–7 hrs trek", distanceKm: "~18 km", meals: "Breakfast, lunch, dinner", stay: "Teahouse, Tilije", description: "Descend through big rhododendron and oak forest, passing through the village of Gho (about 2,500 m). The oxygen feels richer by the hour, and the knees feel it too, so poles help. Tilije is a village on the Marsyangdi side, and the night here is warmer than anywhere in the past two weeks." },
      { day: 23, title: "Walk to Dharapani, jeep to Besisahar", sleepAlt: 760, activity: "Drive", duration: "2 hrs trek + 3–4 hrs drive", distanceKm: null, meals: "Breakfast, lunch, dinner", stay: "Hotel, Besisahar", description: "A short, easy walk down to Dharapani, where the Manaslu circuit ends and the ACAP checkpoint stands, then a jeep ride down the Marsyangdi valley to Besisahar. Hot showers, cold drinks and a proper bed arrive at last. We split the road home into two days because the full drive to Kathmandu after a trek day is a long haul." },
      { day: 24, title: "Drive from Besisahar to Kathmandu", sleepAlt: 1400, activity: "Drive", duration: "5–6 hrs drive", distanceKm: null, meals: "Breakfast", stay: "Hotel, Kathmandu", description: "A relaxed morning, then back on the highway through Dumre and Mugling toward Kathmandu, normally arriving by mid-afternoon. We check in to your hotel and have a farewell evening to share the trip's best moments." }
    ],
    sources: [
      "https://www.bestheritagetour.com/blog/manaslu-and-tsum-valley-trek",
      "https://www.thirdrockadventures.com/trip/tsum-valley-trek",
      "https://nepalalternativetreks.com/?p=1139",
      "https://www.everesttrekkingroutes.com/manaslu-circuit-trek-full-planning-guide-for-2026-27/",
      "https://amazingnepaltrek.com/blog/manaslu-circuit-trek-a-complete-guide",
      "https://www.taan.org.np/page/trekking-permit-fees",
      "https://www.nepalhikingteam.com/manaslu-circuit-trek-permit",
      "https://kathmandupost.com/national/2026/03/22/immigration-eases-rules-for-solo-trekkers-in-restricted-areas",
      "https://theeverestholiday.com/blog/manaslu-budhi-gandaki-flash-flood-october-2026"
    ]
  }
  /*__END__*/
);
