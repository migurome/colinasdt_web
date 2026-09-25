(function () {
  const $ = (s) => document.querySelector(s);
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (n) => `<span class="mk mk-${n}" aria-hidden="true"></span>`;
  const fmt = (v, d = 0) => v.toLocaleString('es-ES', { maximumFractionDigits: d, minimumFractionDigits: d });
  const NOTA_T = { catastro: 'Respuesta 28.ª' };

  /* ——— Línea temporal ——— */
  const tl = $('#tl');
  let html = '', eraActual = 0;
  EVENTOS.forEach((e) => {
    if (e.era !== eraActual) {
      eraActual = e.era;
      const era = ERAS.find((x) => x.id === e.era);
      html += `<li class="era" data-era="${era.id}"><span class="span">${era.span}</span><h3>${era.t}</h3></li>`;
    }
    if (e.sil) {
      html += `<li class="silencio" data-era="${e.era}"><div class="ev-when"><span class="ev-year">${e.y}</span></div><p>${e.p}</p></li>`;
      return;
    }
    const fig = e.img
      ? `<figure class="ev-fig"><img class="${e.img.scan ? 'scan' : ''}" src="${e.img.src}" width="${e.img.w}" height="${e.img.h}" loading="lazy" alt="${e.img.alt}"><figcaption>${e.img.cap}</figcaption></figure>`
      : '';
    html += `<li class="ev" id="ev-${e.id}" data-n="${e.n}" data-era="${e.era}">
      <div class="ev-when"><span class="ev-year">${e.y}</span>${e.d ? `<span class="ev-date">${e.d}</span>` : ''}</div>
      ${mk(e.n)}
      <div class="ev-body">
        <span class="nivel">${mk(e.n)}${NIVELES[e.n].t}</span>
        <h4>${e.t}</h4>
        ${e.q ? `<p class="cita">${e.q}</p>` : ''}
        <p>${e.p}</p>
        ${e.nota ? `<p class="nota"><b>${NOTA_T[e.id] || 'Cautela'}</b>${e.nota}</p>` : ''}
        ${fig}
        ${e.link ? `<p><a href="${e.link.href}">${e.link.t}</a></p>` : ''}
        <p class="fuente">${e.f}</p>
      </div></li>`;
  });
  tl.innerHTML = html;

  const reales = EVENTOS.filter((e) => !e.sil);
  $('#linea-n').textContent = `${reales.length} entradas · del III milenio a.C. a 2026`;

  /* ——— Filtros ——— */
  const filtros = $('#filtros');
  const opciones = [['todo', 'Todo']].concat(Object.keys(NIVELES).map((k) => [k, NIVELES[k].t]));
  filtros.innerHTML = opciones.map(([k, t]) => {
    const n = k === 'todo' ? reales.length : reales.filter((e) => e.n === k).length;
    return `<button type="button" class="chip" id="f-${k}" data-k="${k}" aria-pressed="${k === 'todo'}">${k === 'todo' ? '' : mk(k)}${t} <span class="n">${n}</span></button>`;
  }).join('');

  function aplicar(k) {
    filtros.querySelectorAll('.chip').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.k === k)));
    const visibles = new Set();
    tl.querySelectorAll('.ev').forEach((li) => {
      const ok = k === 'todo' || li.dataset.n === k;
      li.hidden = !ok;
      if (ok) visibles.add(li.dataset.era);
    });
    tl.querySelectorAll('.era').forEach((li) => { li.hidden = !visibles.has(li.dataset.era); });
    tl.querySelectorAll('.silencio').forEach((li) => { li.hidden = k !== 'todo'; });
    document.querySelectorAll('#escala .ev-mk').forEach((g) => g.classList.toggle('off', !(k === 'todo' || g.dataset.n === k)));
  }
  filtros.addEventListener('click', (ev) => {
    const b = ev.target.closest('.chip');
    if (b) aplicar(b.dataset.k);
  });

  /* ——— Escala gráfica ——— */
  (function escala() {
    const svg = $('#escala');
    // Escala con corte: un bloque para la prehistoria, una ruptura, y la escala histórica.
    const W = 1000, P = 14, X0 = -100, X1 = 2050;
    const PREH = [-2400, -2100], AX = P + 54, BX = AX + 28;
    const x = (s) => s < -500
      ? P + ((s - PREH[0]) / (PREH[1] - PREH[0])) * (AX - P)
      : BX + ((s - X0) / (X1 - X0)) * (W - P - BX);
    const orden = reales.slice().sort((a, b) => a.s - b.s);
    const filas = [];
    orden.forEach((e) => {
      const px = x(e.s);
      let r = 0;
      while (filas[r] !== undefined && px - filas[r] < 12) r++;
      filas[r] = px; e._fila = r;
    });
    const R = filas.length, RH = 12, top = 8;
    const barY = top + R * RH + 8;
    const H = barY + 58;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    let s = '';
    // bloque de la prehistoria
    s += `<rect class="seg-a" x="${P}" y="${barY}" width="${AX - P}" height="8"/>`;
    s += `<rect class="marco" x="${P}" y="${barY}" width="${AX - P}" height="8"/>`;
    s += `<text class="tick" x="${(P + AX) / 2}" y="${barY + 24}" text-anchor="middle">III mil. a.C.</text>`;
    // marca de ruptura de escala
    const my = barY + 4;
    s += `<path class="brk" d="M${AX + 6} ${my + 8} L${AX + 14} ${my - 8} M${AX + 14} ${my + 8} L${AX + 22} ${my - 8}"/>`;
    // escala histórica, tramos de siglo
    for (let a = X0, i = 0; a < 2000; a += 100, i++) {
      s += `<rect class="${i % 2 ? 'seg-b' : 'seg-a'}" x="${x(a)}" y="${barY}" width="${x(a + 100) - x(a)}" height="8"/>`;
    }
    s += `<rect class="seg-b" x="${x(2000)}" y="${barY}" width="${x(X1) - x(2000)}" height="8"/>`;
    s += `<rect class="marco" x="${x(X0)}" y="${barY}" width="${x(X1) - x(X0)}" height="8"/>`;
    for (let a = 200; a <= 2000; a += 200) s += `<text class="tick" x="${x(a)}" y="${barY + 24}" text-anchor="middle">${a}</text>`;
    s += `<text class="tick" x="${x(0)}" y="${barY + 24}" text-anchor="middle">a.C. | d.C.</text>`;
    const g1 = x(1170), g2 = x(1551), gy = barY + 34;
    s += `<path class="brk" d="M${g1} ${gy} v6 H${g2} v-6"/>`;
    s += `<text class="hueco" x="${(g1 + g2) / 2}" y="${gy + 20}" text-anchor="middle">381 años sin documentos</text>`;
    orden.forEach((e) => {
      const cx = x(e.s), cy = top + (R - 1 - e._fila) * RH + 6;
      let shape;
      switch (e.n) {
        case 'visto': shape = `<circle cx="${cx}" cy="${cy}" r="4.5" style="fill:var(--ink)"/>`; break;
        case 'sinleer': shape = `<circle cx="${cx}" cy="${cy}" r="4" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.6"/><circle cx="${cx}" cy="${cy}" r="1.5" style="fill:var(--ink)"/>`; break;
        case 'cotejar': shape = `<circle cx="${cx}" cy="${cy}" r="4" style="fill:var(--surface);stroke:var(--accent);stroke-width:1.8"/>`; break;
        case 'sinref': shape = `<circle cx="${cx}" cy="${cy}" r="4" style="fill:var(--surface);stroke:var(--muted);stroke-width:1.4;stroke-dasharray:2 1.6"/>`; break;
        case 'interp': shape = `<rect x="${cx - 3.5}" y="${cy - 3.5}" width="7" height="7" transform="rotate(45 ${cx} ${cy})" style="fill:var(--surface);stroke:var(--clay);stroke-width:1.6"/>`; break;
        case 'propuesto': shape = `<rect x="${cx - 4}" y="${cy - 4}" width="8" height="8" style="fill:var(--accent)"/>`; break;
        default: shape = `<rect x="${cx - 3}" y="${cy - 3}" width="6" height="6" style="fill:var(--muted)"/>`;
      }
      s += `<g class="ev-mk" data-id="${e.id}" data-n="${e.n}" tabindex="0" role="link" aria-label="${e.y}: ${e.t.replace(/"/g, '')}"><title>${e.y} · ${e.t}</title><circle cx="${cx}" cy="${cy}" r="9" style="fill:transparent"/>${shape}</g>`;
    });
    svg.innerHTML = s;
    const ir = (g) => {
      const li = document.getElementById('ev-' + g.dataset.id);
      if (!li) return;
      if (li.hidden) aplicar('todo');
      li.scrollIntoView({ block: 'start' });
    };
    svg.addEventListener('click', (ev) => { const g = ev.target.closest('.ev-mk'); if (g) ir(g); });
    svg.addEventListener('keydown', (ev) => {
      const g = ev.target.closest('.ev-mk');
      if (g && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); ir(g); }
    });
  })();

  /* ——— Usos del suelo, 1752 ——— */
  (function usos() {
    const total = USOS.reduce((a, u) => a + u[1], 0);
    const max = Math.max(...USOS.map((u) => u[1]));
    $('#usos').innerHTML = USOS.map(([t, v, hl]) => {
      const pct = (v / total) * 100;
      return `<div class="uso" role="listitem"><span class="uso-lbl">${t}</span><span class="uso-bar"><i class="${hl ? 'hl' : ''}" style="width:calc((100% - 7.5rem) * ${(v / max).toFixed(4)})"></i><span>${fmt(v)} f. · ${fmt(pct, pct < 1 ? 1 : 0)} %</span></span></div>`;
    }).join('') + `<div class="uso"><span class="uso-lbl"><b>Total</b></span><span class="uso-bar"><span><b>${total.toLocaleString('es-ES', { useGrouping: 'always' })} fanegas</b> · hoy, 1.043 ha</span></span></div>`;
  })();

  /* ——— Población ——— */
  (function poblacion() {
    const svg = $('#pob'), fig = $('#graf'), tip = $('#tip');
    const W = 960, H = 380, M = { l: 46, r: 56, t: 26, b: 34 };
    const X0 = 1775, X1 = 2030, Y1 = 700;
    const x = (a) => M.l + ((a - X0) / (X1 - X0)) * (W - M.l - M.r);
    const y = (v) => H - M.b - (v / Y1) * (H - M.t - M.b);
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    let s = '';
    [0, 200, 400, 600].forEach((v) => {
      s += `<line class="${v ? 'grid' : 'base'}" x1="${M.l}" x2="${W - M.r}" y1="${y(v)}" y2="${y(v)}"/>`;
      s += `<text class="ax" x="${M.l - 8}" y="${y(v) + 4}" text-anchor="end">${v}</text>`;
    });
    [1800, 1850, 1900, 1950, 2000].forEach((a) => { s += `<text class="ax" x="${x(a)}" y="${H - M.b + 22}" text-anchor="middle">${a}</text>`; });
    const path = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${x(p[0]).toFixed(1)} ${y(p[1]).toFixed(1)}`).join(' ');
    const ant = POB.ant, mun = POB.mun, loc = POB.loc;
    s += `<path d="${path(ant)}" style="fill:none;stroke:var(--s-ant);stroke-width:2;stroke-dasharray:2 4;stroke-linecap:round"/>`;
    s += `<path d="${path(mun.slice(0, 2))}" style="fill:none;stroke:var(--s-mun);stroke-width:2;stroke-dasharray:5 4"/>`;
    s += `<path d="${path(mun.slice(1))}" style="fill:none;stroke:var(--s-mun);stroke-width:2;stroke-linejoin:round"/>`;
    s += `<path d="${path(loc)}" style="fill:none;stroke:var(--s-loc);stroke-width:2;stroke-linejoin:round"/>`;
    const xm = x(1985);
    s += `<text class="hueco-txt" x="${xm}" y="${y(250)}" text-anchor="middle">1970–2000</text>`;
    s += `<text class="hueco-txt" x="${xm}" y="${y(250) + 17}" text-anchor="middle">cambia la unidad</text>`;
    const NOTAS = {
      1787: 'Censo de Floridablanca: recuento nominal, el más fiable de los tres antiguos.',
      1826: 'Miñano. Sus vecindarios se tienen por menos fiables que los de Madoz.',
      1842: 'Dato dudoso: coincide con las 132 almas de Madoz y queda por debajo de 1787 y de 1826.'
    };
    const puntos = [];
    ant.forEach((p) => puntos.push({ a: p[0], v: p[1], serie: 'Recuentos de Antiguo Régimen', col: 'var(--s-ant)', nota: NOTAS[p[0]] }));
    mun.forEach((p) => puntos.push({ a: p[0], v: p[1], serie: 'Municipio · censo, de derecho', col: 'var(--s-mun)', dudoso: p[0] === 1842, nota: NOTAS[p[0]] }));
    loc.forEach((p) => puntos.push({ a: p[0], v: p[1], serie: 'Localidad · padrón', col: 'var(--s-loc)' }));
    puntos.forEach((p, i) => {
      const fill = p.dudoso ? 'var(--surface)' : p.col;
      s += `<circle id="pt-${i}" cx="${x(p.a)}" cy="${y(p.v)}" r="4" style="fill:${fill};stroke:${p.dudoso ? p.col : 'var(--surface)'};stroke-width:2"/>`;
    });
    const lab = (a, v, txt, dx, dy, anchor, cls = 'dl') => `<text class="${cls}" x="${x(a) + dx}" y="${y(v) + dy}" text-anchor="${anchor}">${txt}</text>`;
    s += lab(1787, 156, '156', 0, -12, 'middle');
    s += lab(1826, 226, '226', 0, -12, 'middle');
    s += lab(1842, 132, '132', 4, 20, 'start');
    s += lab(1842, 132, 'dato dudoso', 4, 34, 'start', 'dl2');
    s += lab(1950, 625, '625 · máximo', 0, -12, 'middle');
    s += lab(1970, 548, '548', 8, -8, 'start');
    s += lab(2000, 403, '403', -8, -8, 'end');
    s += lab(2024, 222, '222', 8, 4, 'start');
    s += `<line id="cross" class="cross" x1="0" x2="0" y1="${M.t}" y2="${H - M.b}" visibility="hidden"/>`;
    s += `<rect id="hit" x="${M.l}" y="${M.t}" width="${W - M.l - M.r}" height="${H - M.t - M.b}" style="fill:transparent" tabindex="0" aria-label="Recorrer los datos con las flechas"/>`;
    svg.innerHTML = svg.querySelector('title').outerHTML + s;

    let activo = -1;
    function mostrar(i) {
      if (activo >= 0) svg.querySelector('#pt-' + activo).setAttribute('r', '4');
      activo = i;
      const p = puntos[i];
      svg.querySelector('#pt-' + i).setAttribute('r', '6');
      const cross = svg.querySelector('#cross');
      cross.setAttribute('x1', x(p.a)); cross.setAttribute('x2', x(p.a)); cross.setAttribute('visibility', 'visible');
      tip.innerHTML = `<b>${fmt(p.v)} hab.</b><br>${p.a} · ${p.serie}${p.nota ? `<span class="t-note">${p.nota}</span>` : ''}`;
      tip.hidden = false;
      const sr = svg.getBoundingClientRect(), fr = fig.getBoundingClientRect();
      const k = sr.width / W;
      let left = sr.left - fr.left + x(p.a) * k + 14;
      const top = sr.top - fr.top + y(p.v) * k - tip.offsetHeight - 10;
      if (left + tip.offsetWidth > fr.width) left = left - tip.offsetWidth - 28;
      tip.style.left = Math.max(0, left) + 'px';
      tip.style.top = Math.max(0, top) + 'px';
    }
    function ocultar() {
      if (activo >= 0) svg.querySelector('#pt-' + activo).setAttribute('r', '4');
      activo = -1; tip.hidden = true;
      svg.querySelector('#cross').setAttribute('visibility', 'hidden');
    }
    const hit = svg.querySelector('#hit');
    hit.addEventListener('pointermove', (ev) => {
      const sr = svg.getBoundingClientRect();
      const px = ((ev.clientX - sr.left) / sr.width) * W;
      let best = 0, bd = Infinity;
      puntos.forEach((p, i) => { const d = Math.abs(x(p.a) - px); if (d < bd) { bd = d; best = i; } });
      if (best !== activo) mostrar(best);
    });
    hit.addEventListener('pointerleave', ocultar);
    hit.addEventListener('blur', ocultar);
    hit.addEventListener('focus', () => mostrar(0));
    hit.addEventListener('keydown', (ev) => {
      if (ev.key === 'ArrowRight') { ev.preventDefault(); mostrar(Math.min(puntos.length - 1, activo + 1)); }
      if (ev.key === 'ArrowLeft') { ev.preventDefault(); mostrar(Math.max(0, activo - 1)); }
      if (ev.key === 'Escape') ocultar();
    });

    $('#pob-tabla tbody').innerHTML = puntos.map((p) => `<tr><td>${p.a}</td><td>${p.serie}${p.dudoso ? ' (dudoso)' : ''}</td><td class="num">${fmt(p.v)}</td></tr>`).join('');
  })();
})();
