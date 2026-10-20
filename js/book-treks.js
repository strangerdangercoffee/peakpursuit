/* ============================================================
   PEAK PURSUIT — Booking page trek picker
   Builds the "Choose Your Trek" list from the shared trek data
   (js/data/*.js) and hands the choice to selectTrek() in book.html.
   Requires js/treks-core.js.
   ============================================================ */
(function () {
  'use strict';
  var PP = window.PP;
  var esc = PP.esc;
  var DEFAULT_ID = 'ebc';
  var regionFilter = 'all';

  function imageFor(t) {
    var r = PP.getRegion(t.region) || {};
    if (t.hero && t.hero.src) return t.hero.src;
    if (r.hero && r.hero.src) return r.hero.src;
    return PP.placeholderUri(r.name || t.title);
  }

  function pick(el, t) {
    var r = PP.getRegion(t.region) || {};
    var d = PP.DIFFICULTY[t.difficulty];
    var summaryImg = document.getElementById('summaryImg');
    if (summaryImg) {
      summaryImg.onerror = function () { summaryImg.onerror = null; summaryImg.src = PP.placeholderUri(r.name || t.title); };
    }
    window.selectTrek(el, t.id, t.title, t.days + ' days', PP.altLabel(t.maxAlt), '$' + PP.num(t.price), imageFor(t), d.cls, d.text);
  }

  function makeOption(t, selectedId) {
    var r = PP.getRegion(t.region) || {};
    var d = PP.DIFFICULTY[t.difficulty];
    var el = document.createElement('div');
    el.className = 'trek-option' + (t.id === selectedId ? ' selected' : '');
    el.setAttribute('data-trek', t.id);
    el.setAttribute('role', 'button');
    el.tabIndex = 0;
    el.innerHTML =
      '<div class="trek-option-radio"></div>' +
      '<div style="flex:1">' +
        '<div class="trek-option-region">' + esc(r.name || '') + '</div>' +
        '<div class="trek-option-name">' + esc(t.title) + '</div>' +
        '<div class="trek-option-meta">' +
          '<span class="difficulty-badge ' + d.cls + '" style="font-size:0.7rem;padding:0.2rem 0.6rem"><span class="diff-icon">' + d.icon + '</span> ' + d.label + '</span>' +
          '<span>📅 ' + t.days + ' Days</span><span>📍 ' + PP.altLabel(t.maxAlt) + '</span>' +
        '</div>' +
        (t.operator === 'partner' ? '<div class="trek-option-note">Run together with a licensed local partner</div>' : '') +
      '</div>' +
      '<div class="trek-option-price">From ' + PP.priceLabel(t) + '</div>';
    el.addEventListener('click', function () { pick(el, t); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(el, t); }
    });
    return el;
  }

  function makeCustomOption(selectedId) {
    var el = document.createElement('div');
    el.className = 'trek-option' + (selectedId === 'custom' ? ' selected' : '');
    el.setAttribute('data-trek', 'custom');
    el.setAttribute('role', 'button');
    el.tabIndex = 0;
    el.innerHTML =
      '<div class="trek-option-radio"></div>' +
      '<div style="flex:1">' +
        '<div class="trek-option-name">Bespoke / Custom Trek</div>' +
        '<div class="trek-option-meta"><span>📅 Flexible</span><span>💬 Contact us for a quote</span></div>' +
      '</div>' +
      '<div class="trek-option-price" style="color:var(--stone)">Get Quote</div>';
    function choose() {
      window.selectTrek(el, 'custom', 'Custom / Bespoke Trek', 'Flexible', 'Custom', 'Contact Us', 'images/landing.JPG', '', 'Custom ✦');
    }
    el.addEventListener('click', choose);
    el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(); } });
    return el;
  }

  function currentId() {
    // `state` is a top-level const in book.html's inline script (shared global scope, not a window property)
    return (typeof state !== 'undefined' && state.trek && state.trek.id) || DEFAULT_ID;
  }

  function renderChips() {
    var host = document.getElementById('trekRegionChips');
    if (!host) return;
    var regions = PP.regions();
    host.innerHTML =
      '<button type="button" class="pp-chip' + (regionFilter === 'all' ? ' active' : '') + '" data-region="all">All regions (' + PP.treks.length + ')</button>' +
      regions.map(function (r) {
        return '<button type="button" class="pp-chip' + (regionFilter === r.id ? ' active' : '') + '" data-region="' + esc(r.id) + '">' + esc(r.info.name) + ' (' + r.treks.length + ')</button>';
      }).join('');
  }

  function renderOptions() {
    var host = document.getElementById('trekOptions');
    if (!host) return;
    var selected = currentId();
    host.innerHTML = '';
    PP.regions().forEach(function (r) {
      if (regionFilter !== 'all' && r.id !== regionFilter) return;
      r.treks.forEach(function (t) { host.appendChild(makeOption(t, selected)); });
    });
    if (regionFilter === 'all') host.appendChild(makeCustomOption(selected));
  }

  function render() {
    renderChips();
    renderOptions();
    var chips = document.getElementById('trekRegionChips');
    if (chips && !chips.dataset.bound) {
      chips.dataset.bound = '1';
      chips.addEventListener('click', function (e) {
        var b = e.target.closest('.pp-chip');
        if (!b) return;
        regionFilter = b.getAttribute('data-region');
        renderChips();
        renderOptions();
      });
    }
  }

  // Pre-select a trek from ?trek=id. Returns true when a known trek was selected.
  function preselect(id) {
    if (!id) return false;
    regionFilter = 'all';
    renderChips();
    renderOptions();
    var el = document.querySelector('#trekOptions .trek-option[data-trek="' + id + '"]');
    if (!el) return false;
    if (id === 'custom') {
      window.selectTrek(el, 'custom', 'Custom / Bespoke Trek', 'Flexible', 'Custom', 'Contact Us', 'images/landing.JPG', '', 'Custom ✦');
      return true;
    }
    var t = PP.getTrek(id);
    if (!t) return false;
    pick(el, t);
    return true;
  }

  window.PPBook = { render: render, preselect: preselect };
})();
