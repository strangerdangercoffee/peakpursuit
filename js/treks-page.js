/* ============================================================
   PEAK PURSUIT — Treks page
   Renders region sections, trek cards, filters and the detail
   modal (with the accordion day-by-day itinerary) from PP data.
   Requires js/treks-core.js and js/data/*.js.
   ============================================================ */
(function () {
  'use strict';
  var PP = window.PP;
  var esc = PP.esc;

  var REGIONS = PP.regions();
  var TOTAL = PP.treks.length;

  var FILTERS = [
    ['all', 'All Treks'],
    ['green', '● Green Circle'],
    ['blue', '■ Blue Square'],
    ['black', '◆ Black Diamond'],
    ['double', '◆◆ Double Black'],
    ['cultural', 'Cultural'],
    ['pass', 'High Passes'],
    ['peak', 'Peak Climbing'],
    ['short', 'Short (7 days or fewer)']
  ];

  var state = { region: 'all', filter: 'all' };
  var lastFocus = null;

  function matches(t) {
    if (state.region !== 'all' && t.region !== state.region) return false;
    var f = state.filter;
    if (f === 'all') return true;
    if (PP.DIFFICULTY[f]) return t.difficulty === f;
    if (f === 'short') return t.days <= 7 || (t.tags || []).indexOf('short') !== -1;
    return (t.tags || []).indexOf(f) !== -1;
  }

  // ---------- hero ----------
  function renderHero() {
    var el = document.getElementById('heroCount');
    if (!el) return;
    var countries = {};
    REGIONS.forEach(function (r) { countries[r.info.country] = true; });
    var nCountries = Object.keys(countries).length;
    el.textContent = TOTAL + ' routes across ' + REGIONS.length + ' Himalayan regions' +
      (nCountries > 1 ? ' in ' + nCountries + ' countries' : '');
  }

  // ---------- filters ----------
  function renderFilters() {
    var bar = document.getElementById('filterBar');
    if (!bar) return;
    var counts = {};
    PP.treks.forEach(function (t) { counts[t.region] = (counts[t.region] || 0) + 1; });

    var regionChips = '<button class="filter-chip' + (state.region === 'all' ? ' active' : '') + '" data-region="all">All regions (' + TOTAL + ')</button>' +
      REGIONS.map(function (r) {
        return '<button class="filter-chip' + (state.region === r.id ? ' active' : '') + '" data-region="' + esc(r.id) + '">' + esc(r.info.name) + ' (' + counts[r.id] + ')</button>';
      }).join('');
    var typeChips = FILTERS.map(function (f) {
      return '<button class="filter-chip' + (state.filter === f[0] ? ' active' : '') + '" data-filter="' + f[0] + '">' + f[1] + '</button>';
    }).join('');

    bar.innerHTML =
      '<div class="filter-row"><span class="filter-label">Region:</span><div class="filter-chips">' + regionChips + '</div></div>' +
      '<div class="filter-row"><span class="filter-label">Filter:</span><div class="filter-chips">' + typeChips + '</div></div>';
  }

  // ---------- cards ----------
  function cardHtml(t) {
    var d = PP.DIFFICULTY[t.difficulty];
    var r = PP.getRegion(t.region) || {};
    var partner = t.operator === 'partner';
    var hl = (t.highlights || []).slice(0, 3).map(function (h) {
      return '<div class="trek-highlight">' + esc(h) + '</div>';
    }).join('');
    return '' +
      '<div class="trek-full-card reveal" data-id="' + esc(t.id) + '">' +
        '<div class="trek-img-wrap">' +
          PP.imgTag(t.hero, { label: r.name || t.title, eager: false }) +
          '<div class="trek-img-overlay"></div>' +
          '<div class="trek-img-badges">' +
            '<span class="difficulty-badge ' + d.cls + '"><span class="diff-icon">' + d.icon + '</span> ' + d.label + '</span>' +
            '<span class="trek-price-badge">From ' + PP.priceLabel(t) + '</span>' +
          '</div>' +
          '<div class="trek-img-foot">' +
            '<span class="trek-season-badge">' + esc(t.seasonBadge) + '</span>' +
            (partner ? '<span class="trek-season-badge trek-partner-badge" title="Run with a licensed local partner">Partner-operated</span>' : '') +
          '</div>' +
        '</div>' +
        '<div class="trek-body">' +
          '<div class="trek-title-row">' +
            '<h3 class="trek-title">' + esc(t.title) + '</h3>' +
            '<div class="trek-elevation">' + PP.altLabel(t.maxAlt) + '</div>' +
          '</div>' +
          '<p class="trek-tagline">' + esc(t.tagline) + '</p>' +
          '<div class="trek-specs">' +
            '<div class="trek-spec"><div class="trek-spec-val">' + t.days + '</div><div class="trek-spec-key">Days</div></div>' +
            '<div class="trek-spec"><div class="trek-spec-val">' + PP.altLabel(t.maxAlt) + '</div><div class="trek-spec-key">Max Alt.</div></div>' +
            '<div class="trek-spec"><div class="trek-spec-val">' + esc(t.accommodation) + '</div><div class="trek-spec-key">Accommodation</div></div>' +
          '</div>' +
          '<div class="trek-highlights">' + hl + '</div>' +
          '<div class="trek-actions">' +
            '<button class="btn btn-dark btn-sm" style="flex:1;justify-content:center" data-open="' + esc(t.id) + '">Full Details</button>' +
            '<a href="book.html?trek=' + encodeURIComponent(t.id) + '" class="btn btn-primary btn-sm" style="flex:1;justify-content:center">Book Now</a>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function bespokeCardHtml() {
    return '' +
      '<div class="trek-full-card reveal" data-bespoke="1">' +
        '<div class="trek-img-wrap">' +
          '<img src="images/landing.JPG" alt="Custom bespoke Himalayan trek" loading="lazy" decoding="async">' +
          '<div class="trek-img-overlay"></div>' +
          '<div class="trek-img-badges">' +
            '<span class="difficulty-badge" style="background:linear-gradient(135deg,#1E40AF,#E8722B);color:white"><span class="diff-icon">✦</span> Custom</span>' +
            '<span class="trek-price-badge">Ask for Quote</span>' +
          '</div>' +
          '<div class="trek-img-foot"><span class="trek-season-badge">Any Date</span></div>' +
        '</div>' +
        '<div class="trek-body">' +
          '<div class="trek-title-row"><h3 class="trek-title">Bespoke Himalayan Experience</h3><div class="trek-elevation">Custom</div></div>' +
          '<p class="trek-tagline">Design your dream Himalayan adventure from scratch. Private guide, custom itinerary, your pace, your objectives — in any of the regions above.</p>' +
          '<div class="trek-specs">' +
            '<div class="trek-spec"><div class="trek-spec-val">Flexible</div><div class="trek-spec-key">Duration</div></div>' +
            '<div class="trek-spec"><div class="trek-spec-val">Your Goal</div><div class="trek-spec-key">Altitude</div></div>' +
            '<div class="trek-spec"><div class="trek-spec-val">Private</div><div class="trek-spec-key">Style</div></div>' +
          '</div>' +
          '<div class="trek-highlights">' +
            '<div class="trek-highlight">Fully private, tailored to your goals and experience</div>' +
            '<div class="trek-highlight">Photography treks, family-friendly routes, solo guidance</div>' +
            '<div class="trek-highlight">Flexible departure dates year-round</div>' +
          '</div>' +
          '<div class="trek-actions">' +
            '<a href="mailto:namaste@peakpursuit.com" class="btn btn-dark btn-sm" style="flex:1;justify-content:center">Contact Us</a>' +
            '<a href="book.html?trek=custom" class="btn btn-primary btn-sm" style="flex:1;justify-content:center">Get a Quote</a>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  // ---------- region sections ----------
  function regionGuideHtml(r) {
    var info = r.info;
    var gallery = (info.gallery || []).map(function (g) {
      return '<figure class="rg-photo">' + PP.imgTag(g, { label: info.name }) +
        '<figcaption>' + PP.creditHtml(g) + '</figcaption></figure>';
    }).join('');
    return '' +
      '<details class="region-guide">' +
        '<summary>Region guide: when to go, permits &amp; getting there</summary>' +
        '<div class="rg-body">' +
          '<div class="rg-intro">' + (info.intro || []).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>' +
          '<div class="rg-facts">' +
            '<div><div class="rg-key">Best seasons</div><div>' + esc(info.bestSeasons) + '</div></div>' +
            '<div><div class="rg-key">Permits &amp; rules</div><div>' + esc(info.permitsSummary) + '</div></div>' +
            '<div><div class="rg-key">Getting there</div><div>' + esc(info.gettingThere) + '</div></div>' +
          '</div>' +
          (gallery ? '<div class="rg-gallery">' + gallery + '</div>' : '') +
        '</div>' +
      '</details>';
  }

  function sectionHtml(r, list) {
    var info = r.info;
    var partner = info.operator === 'partner';
    return '' +
      '<section class="region-section" id="region-' + esc(r.id) + '" data-region="' + esc(r.id) + '">' +
        '<div class="region-banner">' +
          PP.imgTag(info.hero, { label: info.name, eager: true, cls: 'region-banner-img' }) +
          '<div class="region-banner-overlay"></div>' +
          '<div class="region-banner-text">' +
            '<div class="eyebrow" style="color:var(--amber-light)">' + esc(info.country) + '</div>' +
            '<h2 class="region-title">' + esc(info.name) + '</h2>' +
            '<p class="region-tagline">' + esc(info.tagline) + '</p>' +
            '<div class="region-chips"><span class="region-chip">' + list.length + (list.length === 1 ? ' trek' : ' treks') + '</span>' +
              (partner ? '<span class="region-chip region-chip-partner">Run with a licensed local partner</span>' : '') +
            '</div>' +
          '</div>' +
        '</div>' +
        (partner && info.operatorNote ? '<div class="info-box info-box-amber region-note"><div class="info-box-title">How these trips are run</div>' + esc(info.operatorNote) + '</div>' : '') +
        regionGuideHtml(r) +
        '<div class="trek-grid">' + list.map(cardHtml).join('') + '</div>' +
      '</section>';
  }

  var observer = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (x) {
          if (x.isIntersecting) { x.target.classList.add('visible'); observer.unobserve(x.target); }
        });
      }, { threshold: 0.08 })
    : null;

  function renderSections(animate) {
    var host = document.getElementById('trekRegions');
    var html = '';
    var shown = 0;
    REGIONS.forEach(function (r) {
      var list = r.treks.filter(matches);
      if (!list.length) return;
      shown += list.length;
      html += sectionHtml(r, list);
    });

    var showBespoke = state.region === 'all' && (state.filter === 'all' || !!PP.DIFFICULTY[state.filter]);
    if (showBespoke) {
      html += '<section class="region-section region-custom"><div class="trek-grid">' + bespokeCardHtml() + '</div></section>';
    }
    if (!shown && !showBespoke) {
      html = '<div class="no-results"><h3>No treks match those filters</h3><p>Try a different region or clear the filter.</p>' +
        '<button class="btn btn-dark btn-sm" data-reset="1">Show all treks</button></div>';
    }
    host.innerHTML = html;

    var cards = host.querySelectorAll('.reveal');
    for (var i = 0; i < cards.length; i++) {
      if (animate && observer) observer.observe(cards[i]);
      else cards[i].classList.add('visible');
    }
  }

  function setState(next) {
    if (next.region !== undefined) state.region = next.region;
    if (next.filter !== undefined) state.filter = next.filter;
    renderFilters();
    renderSections(false);
    updateUrlParam('region', state.region === 'all' ? null : state.region);
  }

  function updateUrlParam(key, value) {
    try {
      var u = new URL(window.location.href);
      if (value) u.searchParams.set(key, value); else u.searchParams.delete(key);
      window.history.replaceState(null, '', u.pathname + (u.search || '') + u.hash);
    } catch (e) { /* non-critical */ }
  }

  // ---------- detail modal ----------
  function factsHtml(t) {
    var cells = [
      [t.days + ' days', 'Duration'],
      [PP.altLabel(t.maxAlt), t.maxAltName ? esc(t.maxAltName) : 'Max Altitude'],
      ['From ' + PP.priceLabel(t), 'Per Person'],
      [esc(t.seasonBadge), 'Best Season'],
      [esc(t.accommodation), 'Accommodation'],
      [t.walkingDays + ' days', 'Walking / Climbing']
    ];
    if (t.distanceKm) cells.push(['~' + PP.num(t.distanceKm) + ' km', 'Approx. Distance']);
    if (t.minGroupSize) cells.push([t.minGroupSize + '+ trekkers', 'Minimum Group']);
    return '<div class="trek-detail-specs tm-specs">' + cells.map(function (c) {
      return '<div class="trek-detail-spec"><div class="trek-detail-spec-val">' + c[0] + '</div><div class="trek-detail-spec-key">' + c[1] + '</div></div>';
    }).join('') + '</div>';
  }

  function itineraryHtml(t) {
    var items = (t.itinerary || []).map(function (d) {
      var pid = 'itin-' + t.id + '-' + d.day;
      var facts = [
        ['Activity', d.activity],
        ['Duration', d.duration],
        d.distanceKm ? ['Distance', d.distanceKm] : null,
        typeof d.sleepAlt === 'number' ? ['Overnight altitude', PP.altLabel(d.sleepAlt)] : null,
        ['Meals', d.meals],
        ['Accommodation', d.stay]
      ].filter(Boolean).map(function (f) {
        return '<div><dt>' + f[0] + '</dt><dd>' + esc(f[1]) + '</dd></div>';
      }).join('');
      return '' +
        '<div class="itin-item">' +
          '<h4 class="itin-h"><button type="button" class="itin-btn" id="' + pid + '-btn" aria-expanded="false" aria-controls="' + pid + '">' +
            '<span class="itin-day">Day ' + PP.pad2(d.day) + '</span>' +
            '<span class="itin-title">' + esc(d.title) + '</span>' +
            '<span class="itin-chips">' +
              (typeof d.sleepAlt === 'number' ? '<span class="itin-chip">' + PP.altLabel(d.sleepAlt) + '</span>' : '') +
              '<span class="itin-chip itin-chip-soft">' + esc(d.activity) + '</span>' +
            '</span>' +
            '<span class="itin-chev" aria-hidden="true"></span>' +
          '</button></h4>' +
          '<div class="itin-panel" id="' + pid + '" role="region" aria-labelledby="' + pid + '-btn" hidden>' +
            '<dl class="itin-facts">' + facts + '</dl>' +
            '<p class="itin-desc">' + esc(d.description) + '</p>' +
          '</div>' +
        '</div>';
    }).join('');
    return '' +
      '<div class="tm-block">' +
        '<div class="itin-toolbar">' +
          '<div class="section-mini-title" style="margin:0">Day-by-day itinerary</div>' +
          '<button type="button" class="itin-toggle" data-toggle-all="1" aria-pressed="false">Expand all</button>' +
        '</div>' +
        '<div class="itin-list">' + items + '</div>' +
      '</div>';
  }

  function listHtml(items, cls) {
    return '<ul class="tm-list ' + cls + '">' + items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>';
  }

  function heroBlockHtml(img, label) {
    return PP.imgTag(img, { label: label, eager: true, cls: 'tm-hero-img', phClass: 'tm-hero-img' }) +
      (img && img.credit ? '<div class="tm-credit">Photo: ' + PP.creditHtml(img).replace(/^Photo:\s*/i, '') + '</div>' : '');
  }

  function modalHtml(t) {
    var d = PP.DIFFICULTY[t.difficulty];
    var r = PP.getRegion(t.region) || {};
    var photos = [t.hero].concat(t.gallery || []).filter(Boolean);
    var thumbs = photos.length > 1 ? '<div class="tm-thumbs">' + photos.map(function (p, i) {
      return '<button type="button" class="tm-thumb' + (i === 0 ? ' active' : '') + '" data-photo="' + i + '" aria-label="Show photo ' + (i + 1) + '">' +
        PP.imgTag(p, { label: r.name || t.title }) + '</button>';
    }).join('') + '</div>' : '';

    return '' +
      '<div class="modal-header tm-header">' +
        '<div>' +
          '<div class="eyebrow" style="margin-bottom:0.25rem">' + esc(r.name || '') + ' · ' + d.text + '</div>' +
          '<h2 id="trekModalTitle" style="font-size:1.6rem;color:var(--navy)">' + esc(t.title) + '</h2>' +
        '</div>' +
        '<button class="modal-close" aria-label="Close" data-close="1">✕</button>' +
      '</div>' +
      '<div class="tm-hero" id="tmHero">' + heroBlockHtml(t.hero, r.name || t.title) + '</div>' +
      thumbs +
      '<div class="trek-modal-body tm-body">' +
        '<p class="tm-lead">' + esc(t.tagline) + '</p>' +
        factsHtml(t) +
        '<p class="tm-pricenote"><strong>About the price.</strong> ' + esc(t.priceNote) + (t.priceIsEstimate ? ' Final quote confirmed when you book.' : '') + '</p>' +
        (t.operator === 'partner' && t.operatorNote ? '<div class="info-box info-box-amber tm-block"><div class="info-box-title">How this trip is run</div>' + esc(t.operatorNote) + '</div>' : '') +

        '<div class="tm-block"><div class="section-mini-title">Overview</div>' +
          (t.overview || []).map(function (p) { return '<p class="tm-p">' + esc(p) + '</p>'; }).join('') + '</div>' +

        '<div class="tm-block"><div class="section-mini-title">Trek highlights</div>' + listHtml(t.highlights || [], 'tm-list-arrow') + '</div>' +

        itineraryHtml(t) +

        (PP.altitudeChart(t) ? '<div class="tm-block"><div class="section-mini-title">Altitude profile</div><div class="alt-wrap">' + PP.altitudeChart(t) + '</div>' +
          '<p class="tm-chart-note">Overnight altitude by day. Dots show where you sleep; hover or tap one for the day.</p></div>' : '') +

        '<div class="tm-block"><div class="section-mini-title">Route at a glance</div>' +
          '<dl class="tm-glance">' +
            '<div><dt>Starts</dt><dd>' + esc(t.startPoint) + '</dd></div>' +
            '<div><dt>Ends</dt><dd>' + esc(t.endPoint) + '</dd></div>' +
            '<div><dt>Best season</dt><dd>' + esc(t.bestSeasons) + '</dd></div>' +
          '</dl></div>' +

        '<div class="tm-block"><div class="section-mini-title">Permits &amp; fees</div>' +
          '<ul class="tm-permits">' + (t.permits || []).map(function (p) {
            return '<li><strong>' + esc(p.name) + '</strong><span>' + esc(p.note) + '</span></li>';
          }).join('') + '</ul></div>' +

        '<div class="tm-block tm-inc">' +
          '<div class="info-box info-box-green"><div class="info-box-title">What\'s included</div>' + listHtml(t.included || [], 'tm-list-check') + '</div>' +
          '<div class="info-box info-box-red"><div class="info-box-title">Not included</div>' + listHtml(t.excluded || [], 'tm-list-cross') + '</div>' +
        '</div>' +

        '<div class="tm-block"><div class="section-mini-title">Fitness &amp; safety</div>' +
          '<p class="tm-p">' + esc(t.fitness) + '</p>' +
          listHtml(t.safetyNotes || [], 'tm-list-arrow') + '</div>' +
      '</div>' +
      '<div class="tm-footer">' +
        '<a href="book.html?trek=' + encodeURIComponent(t.id) + '" class="btn btn-primary" style="flex:1;justify-content:center">Book This Trek</a>' +
        '<a href="prepare.html" class="btn btn-outline-amber" style="flex:1;justify-content:center">Read Prep Guide</a>' +
      '</div>';
  }

  function openTrek(id) {
    var t = PP.getTrek(id);
    if (!t) return false;
    var overlay = document.getElementById('trekModal');
    var box = document.getElementById('trekModalBox');
    box.innerHTML = modalHtml(t);
    box.scrollTop = 0;
    overlay.dataset.trek = id;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lastFocus = document.activeElement;
    var closeBtn = box.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
    updateUrlParam('trek', id);
    return true;
  }

  function closeTrek() {
    var overlay = document.getElementById('trekModal');
    if (!overlay.classList.contains('open')) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    updateUrlParam('trek', null);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function setPanel(btn, open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (panel) panel.hidden = !open;
    btn.parentNode.parentNode.classList.toggle('open', open);
  }

  function onModalClick(e) {
    var t = e.target;
    if (t.id === 'trekModal' || (t.closest && t.closest('[data-close]'))) { closeTrek(); return; }

    var itinBtn = t.closest && t.closest('.itin-btn');
    if (itinBtn) {
      setPanel(itinBtn, itinBtn.getAttribute('aria-expanded') !== 'true');
      syncToggleAll();
      return;
    }

    var all = t.closest && t.closest('[data-toggle-all]');
    if (all) {
      var open = all.getAttribute('aria-pressed') !== 'true';
      var btns = document.querySelectorAll('#trekModalBox .itin-btn');
      for (var i = 0; i < btns.length; i++) setPanel(btns[i], open);
      syncToggleAll();
      return;
    }

    var thumb = t.closest && t.closest('.tm-thumb');
    if (thumb) {
      var trek = PP.getTrek(document.getElementById('trekModal').dataset.trek);
      var photos = [trek.hero].concat(trek.gallery || []).filter(Boolean);
      var idx = parseInt(thumb.getAttribute('data-photo'), 10);
      var r = PP.getRegion(trek.region) || {};
      document.getElementById('tmHero').innerHTML = heroBlockHtml(photos[idx], r.name || trek.title);
      var thumbs = document.querySelectorAll('#trekModalBox .tm-thumb');
      for (var j = 0; j < thumbs.length; j++) thumbs[j].classList.toggle('active', j === idx);
    }
  }

  function syncToggleAll() {
    var btns = document.querySelectorAll('#trekModalBox .itin-btn');
    var toggle = document.querySelector('#trekModalBox [data-toggle-all]');
    if (!toggle || !btns.length) return;
    var allOpen = true;
    for (var i = 0; i < btns.length; i++) if (btns[i].getAttribute('aria-expanded') !== 'true') { allOpen = false; break; }
    toggle.textContent = allOpen ? 'Collapse all' : 'Expand all';
    toggle.setAttribute('aria-pressed', allOpen ? 'true' : 'false');
  }

  // ---------- init ----------
  function init() {
    renderHero();
    var params = new URLSearchParams(window.location.search);
    var regionParam = params.get('region');
    if (regionParam && REGIONS.some(function (r) { return r.id === regionParam; })) state.region = regionParam;

    renderFilters();
    renderSections(true);

    // Elements that were already in the page markup (e.g. the difficulty legend)
    var staticReveal = document.querySelectorAll('.reveal');
    for (var s = 0; s < staticReveal.length; s++) {
      if (observer) observer.observe(staticReveal[s]); else staticReveal[s].classList.add('visible');
    }

    document.getElementById('filterBar').addEventListener('click', function (e) {
      var b = e.target.closest('.filter-chip');
      if (!b) return;
      if (b.hasAttribute('data-region')) setState({ region: b.getAttribute('data-region') });
      else if (b.hasAttribute('data-filter')) setState({ filter: b.getAttribute('data-filter') });
    });

    document.getElementById('trekRegions').addEventListener('click', function (e) {
      var open = e.target.closest('[data-open]');
      if (open) { openTrek(open.getAttribute('data-open')); return; }
      if (e.target.closest('[data-reset]')) setState({ region: 'all', filter: 'all' });
    });

    var overlay = document.getElementById('trekModal');
    overlay.addEventListener('click', onModalClick);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeTrek(); });

    var trekParam = params.get('trek');
    if (trekParam) {
      setTimeout(function () { openTrek(trekParam); }, 300);
    } else if (regionParam && state.region !== 'all') {
      var sec = document.getElementById('region-' + state.region);
      if (sec) setTimeout(function () { sec.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 200);
    }
  }

  window.closeModal = closeTrek; // backwards compatibility with older inline handlers
  window.openTrekModal = openTrek;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
