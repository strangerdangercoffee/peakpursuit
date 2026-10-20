/* ============================================================
   PEAK PURSUIT — Trek data helpers
   Load AFTER the region files in js/data/*.js.
   Exposes window.PP with lookups and small HTML builders that
   treks.html and book.html share, so a trek only ever has to be
   described once (see js/data/SCHEMA.md).
   ============================================================ */
(function (global) {
  'use strict';

  // Display order of regions. Anything with data but not listed is appended.
  var REGION_ORDER = ['everest', 'annapurna', 'langtang', 'manaslu', 'makalu', 'kangchenjunga', 'tibet', 'bhutan'];

  var DIFFICULTY = {
    green:  { rank: 1, label: 'Green Circle',  icon: '●',  cls: 'diff-green',        text: 'Green Circle ●' },
    blue:   { rank: 2, label: 'Blue Square',   icon: '■',  cls: 'diff-blue',         text: 'Blue Square ■' },
    black:  { rank: 3, label: 'Black Diamond', icon: '◆',  cls: 'diff-black',        text: 'Black Diamond ◆' },
    double: { rank: 4, label: 'Double Black',  icon: '◆◆', cls: 'diff-double-black', text: 'Double Black ◆◆' }
  };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function num(n) { return Number(n).toLocaleString('en-US'); }
  function altLabel(m) { return num(m) + 'm'; }
  function priceLabel(t) { return t && t.price ? '$' + num(t.price) : 'Ask for quote'; }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  var allTreks = (global.PP_TREKS || []).slice();
  var regionData = global.PP_REGIONS || {};
  var byId = {};
  allTreks.forEach(function (t) { byId[t.id] = t; });

  function getTrek(id) { return byId[id] || null; }
  function getRegion(id) { return regionData[id] || null; }

  // Treks of one region: easiest first, otherwise in the order they were written.
  function treksOf(regionId) {
    return allTreks
      .map(function (t, i) { return { t: t, i: i }; })
      .filter(function (x) { return x.t.region === regionId; })
      .sort(function (a, b) {
        var d = DIFFICULTY[a.t.difficulty].rank - DIFFICULTY[b.t.difficulty].rank;
        return d || a.i - b.i;
      })
      .map(function (x) { return x.t; });
  }

  // Regions that actually have treks, in display order.
  function regions() {
    var ids = REGION_ORDER.filter(function (id) { return regionData[id]; });
    Object.keys(regionData).forEach(function (id) { if (ids.indexOf(id) === -1) ids.push(id); });
    return ids
      .map(function (id) { return { id: id, info: regionData[id], treks: treksOf(id) }; })
      .filter(function (r) { return r.treks.length; });
  }

  // ---- images ------------------------------------------------
  function placeholder(label, cls) {
    return '<div class="pp-ph ' + (cls || '') + '" role="img" aria-label="' + esc(label || 'Photo coming soon') + '"><span>' + esc(label || '') + '</span></div>';
  }

  // <img> with a graceful fallback if the file cannot be loaded.
  function imgTag(image, opts) {
    opts = opts || {};
    if (!image || !image.src) return placeholder(opts.label, opts.phClass);
    return '<img src="' + esc(image.src) + '" alt="' + esc(image.alt || opts.label || '') + '"' +
      (opts.cls ? ' class="' + esc(opts.cls) + '"' : '') +
      ' loading="' + (opts.eager ? 'eager' : 'lazy') + '" decoding="async"' +
      ' data-ph="' + esc(opts.label || '') + '" onerror="PP.imgFail(this)">';
  }

  function imgFail(el) {
    if (!el || !el.parentNode) return;
    var d = document.createElement('div');
    d.className = 'pp-ph ' + (el.className || '');
    d.setAttribute('role', 'img');
    d.setAttribute('aria-label', el.getAttribute('alt') || 'Photo unavailable');
    d.innerHTML = '<span>' + esc(el.getAttribute('data-ph') || '') + '</span>';
    el.parentNode.replaceChild(d, el);
  }

  // Small inline SVG usable as an <img src> when there is no photo (booking summary).
  function placeholderUri(label) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1A3F6F"/><stop offset="1" stop-color="#071526"/></linearGradient></defs>' +
      '<rect width="640" height="420" fill="url(#g)"/>' +
      '<path d="M0 340 L150 200 L230 270 L360 120 L500 280 L560 230 L640 320 V420 H0Z" fill="#0D2137" opacity=".8"/>' +
      '<text x="320" y="390" text-anchor="middle" font-family="Georgia,serif" font-size="30" fill="#F59547">' + esc(label || '') + '</text></svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  function creditHtml(image) {
    if (!image || !image.credit) return '';
    var text = esc(image.credit) + (image.license ? ' · ' + esc(image.license) : '');
    return image.sourceUrl
      ? '<a href="' + esc(image.sourceUrl) + '" target="_blank" rel="noopener noreferrer">' + text + '</a>'
      : text;
  }

  // ---- altitude profile (overnight altitude by day) ------------
  function altitudeChart(t) {
    var days = t.itinerary || [];
    var pts = days.filter(function (d) { return typeof d.sleepAlt === 'number'; });
    if (pts.length < 2 || days.length < 2) return '';
    var W = 800, H = 250, pl = 58, pr = 18, pt = 30, pb = 36;
    var sleepMax = Math.max.apply(null, pts.map(function (p) { return p.sleepAlt; }));
    var sleepMin = Math.min.apply(null, pts.map(function (p) { return p.sleepAlt; }));
    var top = Math.max(t.maxAlt || 0, sleepMax);
    var lo = Math.max(0, Math.floor((sleepMin - 300) / 500) * 500);
    var hi = Math.ceil((top + 150) / 500) * 500;
    var step = (hi - lo) > 3500 ? 1000 : 500;
    var n = days.length;
    function X(day) { return pl + (day - 1) / (n - 1) * (W - pl - pr); }
    function Y(a) { return pt + (1 - (a - lo) / (hi - lo)) * (H - pt - pb); }

    var grid = '';
    for (var g = Math.ceil(lo / step) * step; g <= hi; g += step) {
      grid += '<line class="alt-grid" x1="' + pl + '" x2="' + (W - pr) + '" y1="' + Y(g).toFixed(1) + '" y2="' + Y(g).toFixed(1) + '"/>' +
        '<text class="alt-axis" x="' + (pl - 8) + '" y="' + (Y(g) + 4).toFixed(1) + '" text-anchor="end">' + num(g) + 'm</text>';
    }
    var every = Math.ceil(n / 14);
    var xl = '';
    for (var d = 1; d <= n; d++) {
      if (d === 1 || d === n || d % every === 0) {
        xl += '<text class="alt-axis" x="' + X(d).toFixed(1) + '" y="' + (H - 12) + '" text-anchor="middle">Day ' + d + '</text>';
      }
    }
    var line = pts.map(function (p) { return X(p.day).toFixed(1) + ',' + Y(p.sleepAlt).toFixed(1); }).join(' ');
    var area = X(pts[0].day).toFixed(1) + ',' + Y(lo).toFixed(1) + ' ' + line + ' ' + X(pts[pts.length - 1].day).toFixed(1) + ',' + Y(lo).toFixed(1);
    var dots = pts.map(function (p) {
      return '<circle class="alt-dot" cx="' + X(p.day).toFixed(1) + '" cy="' + Y(p.sleepAlt).toFixed(1) + '" r="3.6"><title>Day ' + p.day + ': ' + esc(p.title) + ' — sleep at ' + num(p.sleepAlt) + 'm</title></circle>';
    }).join('');

    var maxLine = '';
    if (t.maxAlt && t.maxAlt > sleepMax + 60) {
      maxLine = '<line class="alt-max" x1="' + pl + '" x2="' + (W - pr) + '" y1="' + Y(t.maxAlt).toFixed(1) + '" y2="' + Y(t.maxAlt).toFixed(1) + '"/>' +
        '<text class="alt-max-label" x="' + (W - pr) + '" y="' + (Y(t.maxAlt) - 6).toFixed(1) + '" text-anchor="end">Highest point: ' + esc(t.maxAltName || '') + ' ' + num(t.maxAlt) + 'm</text>';
    } else {
      var peak = pts.filter(function (p) { return p.sleepAlt === sleepMax; })[0];
      maxLine = '<text class="alt-max-label" x="' + X(peak.day).toFixed(1) + '" y="' + (Y(sleepMax) - 10).toFixed(1) + '" text-anchor="' + (peak.day > n * 0.7 ? 'end' : 'middle') + '">Highest sleep: ' + num(sleepMax) + 'm</text>';
    }

    return '<svg class="alt-chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Overnight altitude by day, from ' + num(sleepMin) + ' to ' + num(sleepMax) + ' metres">' +
      grid + '<polygon class="alt-area" points="' + area + '"/>' + '<polyline class="alt-line" points="' + line + '"/>' + maxLine + dots + xl + '</svg>';
  }

  global.PP = {
    DIFFICULTY: DIFFICULTY,
    esc: esc, num: num, altLabel: altLabel, priceLabel: priceLabel, pad2: pad2,
    treks: allTreks, regionData: regionData,
    getTrek: getTrek, getRegion: getRegion, treksOf: treksOf, regions: regions,
    placeholder: placeholder, imgTag: imgTag, imgFail: imgFail, placeholderUri: placeholderUri, creditHtml: creditHtml,
    altitudeChart: altitudeChart
  };
})(window);
