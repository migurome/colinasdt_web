(function () {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const mk = (n) => `<span class="mk mk-${n}" aria-hidden="true"></span>`;
  const fmt = (v, d = 0) => v.toLocaleString('es-ES', { maximumFractionDigits: d, minimumFractionDigits: d });
  const NOTA_T = {
    catastro: 'Respuesta 28.ª',
    d1073: 'Localizado, no leído',
    pecheros1526: 'Dos lugares sin identificar',
    c1591: 'La comarca, medida dos veces',
    apela1694: 'El nombre, cuatro meses después',
    ermita1756: 'La advocación no consta',
    aranda1768: 'San Juan no distingue nada',
    diezmos1693: 'No era la primera vez',
    nuncio1694: 'El tribunal, por dentro',
    curas1694: 'El pleito que falta',
    apeo1706: 'El nombre no prueba el sitio',
    pobladura: 'Ni el año ni la causa',
    aniversarios1772: 'Bartolomé o bachiller',
    casa1804: 'Vecino de dónde',
    matricula1842: 'Y aun así puede ser real',
    propios1866: 'Qué y a quién, sin leer',
    pecuarias1863: 'Hay que ir en persona',
    decreto1970: 'No salió de la nada',
    titulares1971: 'Nombres de lectura automática',
    registro1986: 'Inscripción, no creación'
  };
  const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  /* Estado compartido: en teléfono y en la vista de la línea, el feed
     ocupa la pantalla entera y el cuerpo no debe desplazarse detrás. */
  const Estado = { movil: false, vista: 'linea' };
  function ajustarCuerpo() {
    document.body.classList.toggle('feed-fijo', Estado.movil && Estado.vista === 'linea');
  }
  /* Dónde vivía cada pieza antes de mudarse al feed */
  const Orig = {};
  ['.portada', '#filtros', '.lede-txt'].forEach((sel) => {
    const el = document.querySelector(sel);
    if (el) Orig[sel] = { el: el, p: el.parentNode, n: el.nextSibling };
  });

  const reales = EVENTOS.filter((e) => !e.sil);
  const eraDe = (id) => ERAS.find((x) => x.id === id);

  /* ═══════════ 1. Línea temporal — modo documento ═══════════ */
  const tl = $('#tl');
  let html = '', eraActual = 0;
  EVENTOS.forEach((e) => {
    if (e.era !== eraActual) {
      eraActual = e.era;
      const era = eraDe(e.era);
      html += `<li class="era" data-era="${era.id}"><span class="span">${era.span}</span><h3>${era.t}</h3></li>`;
    }
    if (e.sil) {
      html += `<li class="silencio" data-era="${e.era}"><div class="ev-when"><span class="ev-year">${e.y}</span></div><p>${e.p}</p></li>`;
      return;
    }
    let fig = e.img
      ? `<figure class="ev-fig${e.img.ctx ? ' ev-ilu' : ''}"><img src="${e.img.src}" width="${e.img.w}" height="${e.img.h}" loading="lazy" alt="${esc(e.img.alt)}"><figcaption>${
        e.img.ctx ? '<b>Retrato de contexto.</b> ' : ''}${e.img.cap}</figcaption></figure>`
      : '';
    /* la ilustracion nunca se presenta como el facsimil: el pie la separa */
    if (e.ilu) {
      fig += `<figure class="ev-fig ev-ilu"><img src="${e.ilu.src}" width="${e.ilu.w}" height="${
        e.ilu.h}" loading="lazy" alt="${esc(e.ilu.alt)}"><figcaption><b>Ilustración interpretada.</b> ${
        e.ilu.cap} ${esc(e.ilu.gen || '')}</figcaption></figure>`;
    }
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
  $('#linea-n').textContent = `${reales.length} entradas · del III milenio a.C. a 2026`;

  /* El trazo rojo se construye al bajar */
  (function alBajar() {
    const items = tl.querySelectorAll('.ev, .silencio');
    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((li) => li.classList.add('on'));
      return;
    }
    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('on'); obs.unobserve(x.target); } });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    items.forEach((li) => obs.observe(li));
  })();

  /* ═══════════ 2. Filtros por grado de prueba ═══════════ */
  const filtros = $('#filtros');
  const opciones = [['todo', 'Todo']].concat(Object.keys(NIVELES).map((k) => [k, NIVELES[k].t]));
  filtros.innerHTML = opciones.map(([k, t]) => {
    const n = k === 'todo' ? reales.length : reales.filter((e) => e.n === k).length;
    if (n === 0) return '';
    return `<button type="button" class="chip" id="f-${k}" data-k="${k}" aria-pressed="${k === 'todo'}">${k === 'todo' ? '' : mk(k)}${t} <span class="n">${n}</span></button>`;
  }).join('');

  let filtroActual = 'todo';
  function aplicar(k) {
    filtroActual = k;
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
    if (Feed.montado) Feed.filtrar(k);
  }
  filtros.addEventListener('click', (ev) => {
    const b = ev.target.closest('.chip');
    if (b) aplicar(b.dataset.k);
  });

  /* ═══════════ 3. Escala gráfica del tiempo (pantalla grande) ═══════════ */
  /* Un bloque para la prehistoria, una ruptura, y la escala histórica. */
  const W = 1000, P = 14, X0 = -100, X1 = 2050;
  const PREH = [-2400, -2100], AX = P + 54, BX = AX + 28;
  const escX = (s) => s < -500
    ? P + ((s - PREH[0]) / (PREH[1] - PREH[0])) * (AX - P)
    : BX + ((s - X0) / (X1 - X0)) * (W - P - BX);
  const orden = reales.slice().sort((a, b) => a.s - b.s);

  (function escala() {
    const svg = $('#escala');
    const filas = [];
    orden.forEach((e) => {
      const px = escX(e.s);
      let r = 0;
      while (filas[r] !== undefined && px - filas[r] < 12) r++;
      filas[r] = px; e._fila = r;
    });
    const R = filas.length, RH = 12, top = 8;
    const barY = top + R * RH + 8;
    const H = barY + 58;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    let s = '';
    s += `<rect class="seg-a" x="${P}" y="${barY}" width="${AX - P}" height="8"/>`;
    s += `<rect class="marco" x="${P}" y="${barY}" width="${AX - P}" height="8"/>`;
    s += `<text class="tick" x="${(P + AX) / 2}" y="${barY + 24}" text-anchor="middle">III mil. a.C.</text>`;
    const my = barY + 4;
    s += `<path class="brk" d="M${AX + 6} ${my + 8} L${AX + 14} ${my - 8} M${AX + 14} ${my + 8} L${AX + 22} ${my - 8}"/>`;
    for (let a = X0, i = 0; a < 2000; a += 100, i++) {
      s += `<rect class="${i % 2 ? 'seg-b' : 'seg-a'}" x="${escX(a)}" y="${barY}" width="${escX(a + 100) - escX(a)}" height="8"/>`;
    }
    s += `<rect class="seg-b" x="${escX(2000)}" y="${barY}" width="${escX(X1) - escX(2000)}" height="8"/>`;
    s += `<rect class="marco" x="${escX(X0)}" y="${barY}" width="${escX(X1) - escX(X0)}" height="8"/>`;
    for (let a = 200; a <= 2000; a += 200) s += `<text class="tick" x="${escX(a)}" y="${barY + 24}" text-anchor="middle">${a}</text>`;
    s += `<text class="tick" x="${escX(0)}" y="${barY + 24}" text-anchor="middle">a.C. | d.C.</text>`;
    /* el hueco sale del propio silencio de los datos: si entra un documento
       dentro, la escala se estrecha sola y el rotulo cuenta bien */
    const sil = EVENTOS.find((e) => e.sil);
    const hv = sil ? String(sil.y).match(/\d+/g).map(Number) : [1170, 1526];
    const g1 = escX(hv[0]), g2 = escX(hv[1]), gy = barY + 34;
    s += `<path class="brk" d="M${g1} ${gy} v6 H${g2} v-6"/>`;
    s += `<text class="hueco" x="${(g1 + g2) / 2}" y="${gy + 20}" text-anchor="middle">${hv[1] - hv[0]} años sin documentos</text>`;
    orden.forEach((e) => {
      const cx = escX(e.s), cy = top + (R - 1 - e._fila) * RH + 6;
      let shape;
      switch (e.n) {
        case 'visto': shape = `<circle cx="${cx}" cy="${cy}" r="4.5" style="fill:var(--tinta)"/>`; break;
        case 'sinleer': shape = `<circle cx="${cx}" cy="${cy}" r="4" style="fill:var(--papel-alto);stroke:var(--tinta);stroke-width:1.6"/><circle cx="${cx}" cy="${cy}" r="1.5" style="fill:var(--tinta)"/>`; break;
        case 'cotejar': shape = `<circle cx="${cx}" cy="${cy}" r="4" style="fill:var(--papel-alto);stroke:var(--anil);stroke-width:1.8"/>`; break;
        case 'sinref': shape = `<circle cx="${cx}" cy="${cy}" r="4" style="fill:var(--papel-alto);stroke:var(--tenue);stroke-width:1.4;stroke-dasharray:2 1.6"/>`; break;
        case 'interp': shape = `<rect x="${cx - 3.5}" y="${cy - 3.5}" width="7" height="7" transform="rotate(45 ${cx} ${cy})" style="fill:var(--papel-alto);stroke:var(--teja);stroke-width:1.6"/>`; break;
        case 'propuesto': shape = `<rect x="${cx - 4}" y="${cy - 4}" width="8" height="8" style="fill:var(--anil)"/>`; break;
        default: shape = `<rect x="${cx - 3}" y="${cy - 3}" width="6" height="6" style="fill:var(--oliva)"/>`;
      }
      s += `<g class="ev-mk" data-id="${e.id}" data-n="${e.n}" tabindex="0" role="link" aria-label="${esc(e.y)}: ${esc(e.t)}"><title>${esc(e.y)} · ${esc(e.t)}</title><circle cx="${cx}" cy="${cy}" r="9" style="fill:transparent"/>${shape}</g>`;
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

  /* ═══════════ 4. Modo feed — en teléfono ═══════════
     Las láminas no se inventan: cada una es un campo que la entrada ya tiene. */
  const Feed = {
    montado: false,
    /* Los bloques de una entrada, en orden. No se inventa ninguno: cada uno
       es un campo que la entrada ya tenia. Van todos juntos mientras quepan. */
    bloques(e) {
      const B = [];
      B.push(`<div class="cab-ev"><span class="anio">${esc(e.y)}</span>${
        e.d ? `<span class="dia">${esc(e.d)}</span>` : ''}<h4>${e.t}</h4></div>`);
      if (e.p) B.push(`<p class="prosa">${e.p}</p>`);
      if (e.link) B.push(`<p class="fuente enlace">En esta página: ${e.link.t}</p>`);
      if (e.q) B.push(`<p class="cita">${e.q}</p>`);
      const caja = this.trato(e) === 'caja';
      if (e.img) {
        /* un retrato no es una imagen de Colinas: el pie lo dice siempre */
        const ct = e.img.ctx ? '<b>Retrato de contexto.</b> ' : '';
        B.push(caja
          ? `<figure class="ev-fig${e.img.ctx ? ' ev-ilu' : ''}"><img src="${e.img.src}" width="${e.img.w}" height="${
            e.img.h}" loading="lazy" alt="${esc(e.img.alt)}"><figcaption>${ct}${e.img.cap}</figcaption></figure>`
          : `<p class="fuente pie-ilu">${ct}${e.img.cap}</p>`);
      }
      if (e.ilu && !e.ilu.prov) {
        B.push(caja
          ? `<figure class="ev-fig ev-ilu"><img src="${e.ilu.src}" width="${e.ilu.w}" height="${
            e.ilu.h}" loading="lazy" alt="${esc(e.ilu.alt)}"><figcaption><b>Ilustración interpretada.</b> ${
            e.ilu.cap}</figcaption></figure>`
          : `<p class="fuente pie-ilu"><b>Ilustración interpretada.</b> ${e.ilu.cap}</p>`);
      }
      if (e.nota) B.push(`<p class="nota"><b>${NOTA_T[e.id] || 'Cautela'}</b>${e.nota}</p>`);
      return B;
    },
    /* Parte en frases sin romper el marcado: no corta dentro de una etiqueta
       ni con un <b> abierto. Sin lookbehind, que no todos los telefonos lo
       admiten todavia. */
    frases(t) {
      const s = String(t), out = [];
      let buf = '', dentro = false, abiertas = 0, cierra = false;
      for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        buf += c;
        if (c === '<') { dentro = true; cierra = s.charAt(i + 1) === '/'; continue; }
        if (c === '>') {
          dentro = false;
          if (cierra) abiertas--; else if (s.charAt(i - 1) !== '/') abiertas++;
          continue;
        }
        if (dentro || abiertas > 0) continue;
        if (/[.:;»!?]/.test(c) && (i + 1 >= s.length || s.charAt(i + 1) === ' ')) {
          if (buf.trim()) out.push(buf.trim());
          buf = '';
        }
      }
      if (buf.trim()) out.push(buf.trim());
      return out;
    },
    /* Se elige entrada por entrada. Si no es 'caja', la imagen pasa a ser el
       fondo de la lamina y su pie baja al texto: la referencia no se pierde. */
    trato(e) {
      return (e.ilu || e.img) ? (e.tr || 'caja') : 'caja';
    },
    capa(e, primera) {
      const im = e.ilu || e.img;
      if (!im || this.trato(e) === 'caja') return '';
      const pos = e.pos ? ` style="object-position:${e.pos}"` : '';
      return `<div class="ilu"><img src="${im.src}" width="${im.w}" height="${
        im.h}"${pos} alt="${primera ? esc(im.alt) : ''}"></div>`;
    },
    pie(e) {
      /* La firma de archivo salió de aqui: ocupaba media pantalla y está
         entera en «Las fuentes». Lo que no puede salir es la cautela de que
         un dibujo no es prueba: una lamina se comparte suelta. */
      const t = e.ilu ? (e.ilu.prov ? 'Imagen provisional' : 'Ilustración interpretada')
        : (e.img && e.img.ctx ? 'Retrato de contexto' : '');
      /* el grado de prueba viaja aqui desde que la banda de arriba se quito */
      const sl = e.n ? `<span class="sello">${mk(e.n)}<span>${NIVELES[e.n].t}</span></span>` : '';
      return `<div class="lam-pie"><span class="a">${esc(e.y)}</span>${
        t ? `<span class="t">${t}</span>` : ''}${sl}</div>`;
    },
    montar() {
      if (this.montado) return;
      const feed = $('#feed');
      let h = '';
      EVENTOS.forEach((e, i) => {
        if (e.sil) {
          h += `<article class="post post-sil" data-i="${i}"><div class="carrusel"><div class="lam l-sil">
            <div class="lam-cuerpo"><div class="caja"><div class="rango">${esc(e.y)}</div><p>${e.p}</p></div></div>
            <div class="lam-pie"><span class="t">Silencio documental</span></div>
          </div></div></article>`;
          return;
        }
        /* una lamina de partida con todo dentro; repartir() decide si desborda */
        const tr = this.trato(e);
        /* un documento es papel claro y pide mas velo que una ilustracion */
        const ct = tr === 'caja' ? '' : ' t-' + tr + (e.ilu ? '' : ' t-doc');
        const lam = `<section class="lam lam-1${ct}" aria-label="${esc(e.y + ' · ' + e.t)}">${
          this.capa(e, true)}<div class="lam-cuerpo arriba">${
          this.bloques(e).join('')}</div>${this.pie(e)}</section>`;
        h += `<article class="post" id="post-${e.id}" data-i="${i}" data-n="${e.n}">
          <div class="puntos" aria-hidden="true"></div>
          <div class="carrusel" tabindex="0" aria-label="${esc(e.y + ': ' + e.t)}">${lam}</div></article>`;
      });
      h = `<article class="post post-portada" data-i="-1">
          <div class="puntos" aria-hidden="true"><span class="punto on"></span><span class="punto"></span></div>
          <div class="carrusel" tabindex="0" aria-label="Portada y presentación">
            <section class="lam l-cubierta">
              <div class="lam-cuerpo" id="hueco-portada"></div>
              <div class="lam-pie"><span class="t">Desliza al lado para la presentación</span></div>
            </section>
            <section class="lam l-presenta">
              <div class="lam-cuerpo arriba" id="hueco-lede"></div>
              <div class="lam-pie"><span class="t">Desliza hacia arriba para empezar la línea</span></div>
            </section>
          </div></article>` + h;
      feed.innerHTML = h;
      this.posts = Array.prototype.slice.call(feed.querySelectorAll('.post'));
      this.visibles = this.posts.slice();
      this.feed = feed;
      this.actual = -1;
      this.ultimaY = 0;

      this.posts.forEach((post) => {
        const car = post.querySelector('.carrusel');
        let t = null;
        car.addEventListener('scroll', () => {
          if (t) return;
          t = requestAnimationFrame(() => {
            t = null;
            /* se reconsultan cada vez: el reparto los vuelve a crear */
            const pts = post.querySelectorAll('.punto');
            if (!pts.length || !car.clientWidth) return;
            const n = Math.round(car.scrollLeft / car.clientWidth);
            pts.forEach((p, j) => p.classList.toggle('on', j === n));
          });
        }, { passive: true });
      });

      this.rail();
      let tf = null;
      feed.addEventListener('scroll', () => {
        if (tf) return;
        tf = requestAnimationFrame(() => {
          tf = null;
          this.pinta(Math.round(feed.scrollTop / feed.clientHeight));
          /* El menú se retira al avanzar y vuelve al retroceder. Si sólo
             estuviera arriba del todo, con sesenta entradas no habría manera
             de navegar sin volver antes a la portada. */
          const m = document.getElementById('menu');
          if (m) {
            const y = feed.scrollTop;
            m.classList.toggle('oculto', y > 30 && y > this.ultimaY + 4);
            this.ultimaY = y;
          }
        });
      }, { passive: true });

      this.montado = true;
      this.filtrar(filtroActual);
      this.pinta(0);
    },
    /* Todo lo de la entrada va en una sola lamina mientras quepa. El reparto
       se mide sobre la pantalla real: lo que desborda abre la siguiente, el
       texto partido por frases y los demas bloques enteros. */
    repartir() {
      if (!this.montado) return;
      const nodo = (h) => {
        const d = document.createElement('div');
        d.innerHTML = h;
        return d.firstElementChild;
      };
      this.posts.forEach((post) => {
        const i = +post.dataset.i;
        if (i < 0 || post.classList.contains('post-sil')) return;
        const car = post.querySelector('.carrusel');
        const base = car.querySelector('.lam-1');
        if (!base) return;
        /* oculta por el filtro, o aun sin disponer: no hay nada que medir */
        if (base.querySelector('.lam-cuerpo').clientHeight < 80) return;
        const e = EVENTOS[i];
        /* se empieza de cero: fuera lo que dejo el reparto anterior */
        Array.prototype.slice.call(car.querySelectorAll('.lam-cont, .lam-ret')).forEach((x) => x.remove());
        Array.prototype.slice.call(car.querySelectorAll('.sigue')).forEach((x) => x.remove());
        let cuerpo = base.querySelector('.lam-cuerpo');
        cuerpo.innerHTML = '';
        let abiertas = 0;
        const cabe = () => cuerpo.scrollHeight <= cuerpo.clientHeight + 1;
        /* tope de laminas por entrada: antes de perder texto, la lamina rueda */
        const nueva = () => {
          if (abiertas >= 14) return false;
          abiertas++;
          const l = this.laminaCont(e);
          car.appendChild(l);
          cuerpo = l.querySelector('.lam-cuerpo');
          return true;
        };
        this.bloques(e).forEach((html) => {
          let el = nodo(html);
          cuerpo.appendChild(el);
          if (cabe()) return;
          if (el.classList.contains('prosa')) {
            const fr = this.frases(el.innerHTML);
            el.innerHTML = '';
            let j = 0;
            while (j < fr.length) {
              const antes = el.innerHTML;
              el.innerHTML = antes + (antes ? ' ' : '') + fr[j];
              /* una frase sola que no cabe se deja: rueda antes que desaparecer */
              if (cabe() || !antes) { j++; continue; }
              el.innerHTML = antes;
              if (!nueva()) { el.innerHTML = antes + ' ' + fr.slice(j).join(' '); break; }
              el = nodo('<p class="prosa sigo"></p>');
              cuerpo.appendChild(el);
            }
            return;
          }
          /* cita, imagen, cautela y fuente no se parten: pasan enteras */
          if (cuerpo.children.length > 1) {
            cuerpo.removeChild(el);
            nueva();                         /* si no cabe otra lamina, vuelve a esta */
            cuerpo.appendChild(el);
          }
        });
        /* Si la entrada trae retrato, una lamina mas al final: la cara sola,
           en diagonal y sin texto. Va despues del reparto para que quede la
           ultima, detras de las continuaciones. */
        if (e.img && e.img.ctx) {
          const r = document.createElement('section');
          r.className = 'lam lam-ret';
          r.setAttribute('aria-label', esc(e.img.alt));
          r.innerHTML =
            '<div class="ret"><img src="' + e.img.src + '" width="' + e.img.w +
            '" height="' + e.img.h + '" loading="lazy" alt=""></div>';
          car.appendChild(r);
        }
        const lams = car.querySelectorAll('.lam');
        lams.forEach((l, j) => {
          if (j === lams.length - 1) return;
          if (!l.querySelector('.lam-pie')) return;   /* la del retrato no lleva pie */
          const av = document.createElement('span');
          av.className = 'sigue';
          av.textContent = 'sigue →';
          l.querySelector('.lam-pie').appendChild(av);
        });
      });
      this.puntos();
    },
    laminaCont(e) {
      const d = document.createElement('section');
      const tr = this.trato(e);
      /* la continuacion no cambia de fondo a media entrada */
      d.className = 'lam lam-cont' + (tr === 'caja' ? '' : ' t-' + tr + (e.ilu ? '' : ' t-doc'));
      d.setAttribute('aria-label', e.y + ' · continuación');
      d.innerHTML = this.capa(e, false) +
        '<div class="lam-cuerpo arriba"></div>' + this.pie(e);
      return d;
    },
    puntos() {
      this.posts.forEach((post) => {
        const caja = post.querySelector('.puntos');
        const car = post.querySelector('.carrusel');
        if (!caja || !car) return;
        const n = post.querySelectorAll('.lam').length;
        const act = car.clientWidth ? Math.round(car.scrollLeft / car.clientWidth) : 0;
        let h = '';
        for (let j = 0; j < n; j++) {
          h += '<span class="punto' + (j === act ? ' on' : '') + '"></span>';
        }
        caja.innerHTML = n > 1 ? h : '';
      });
    },
    /* La portada y los filtros se mudan al feed, y vuelven en pantalla grande */
    adjuntar() {
      if (!this.montado || this.adjuntado) return;
      const cub = document.getElementById('hueco-portada');
      const pre = document.getElementById('hueco-lede');
      if (Orig['.portada']) cub.appendChild(Orig['.portada'].el);
      if (Orig['#filtros']) cub.appendChild(Orig['#filtros'].el);
      if (Orig['.lede-txt']) pre.appendChild(Orig['.lede-txt'].el);
      const lede = document.querySelector('.lede');
      if (lede) lede.classList.add('vacia');
      this.adjuntado = true;
    },
    soltar() {
      if (!this.adjuntado) return;
      ['.portada', '#filtros', '.lede-txt'].forEach((sel) => {
        const o = Orig[sel];
        if (o) o.p.insertBefore(o.el, o.n);
      });
      const lede = document.querySelector('.lede');
      if (lede) lede.classList.remove('vacia');
      this.adjuntado = false;
    },
    /* El raíl: la misma escala comprimida, puesta en vertical */
    rail() {
      if (!RAIL_VISIBLE) {
        /* fuera del DOM, no sólo oculto: era un slider con foco y arrastre */
        ['#rail', '#rail-lbl'].forEach((sel) => {
          const el = document.querySelector(sel);
          if (el) el.remove();
        });
        this.feed.classList.add('sin-rail');
        return;
      }
      const rail = $('#rail'), svg = $('#rail-svg');
      const RH = 1000, RP = 18;
      const AY = RP + 54, BY = AY + 26;
      this.rY = (s) => s < -500
        ? RP + ((s - PREH[0]) / (PREH[1] - PREH[0])) * (AY - RP)
        : BY + ((s - X0) / (X1 - X0)) * (RH - RP - BY);
      this.RH = RH; this.RP = RP;
      const FORMA = { visto: 'tk', sinleer: 'tk', cotejar: 'tk tk-an', sinref: 'tk tk-te',
                      interp: 'tk tk-tj', propuesto: 'tk tk-an', contexto: 'tk tk-ol' };
      const sl = EVENTOS.find((e) => e.sil);
      const hv = sl ? String(sl.y).match(/\d+/g).map(Number) : [1170, 1526];
      const y1 = this.rY(hv[0]), y2 = this.rY(hv[1]);
      let s = '';
      s += `<path class="fantasma" d="M14 ${RP} V${y1.toFixed(1)}"/>`;
      s += `<path class="vacio" d="M14 ${y1.toFixed(1)} V${y2.toFixed(1)}"/>`;
      s += `<path class="fantasma" d="M14 ${y2.toFixed(1)} V${RH - RP}"/>`;
      s += `<path class="hecho" id="hecho" d="M14 ${RP} V${RP}"/>`;
      s += `<path class="quiebre" d="M7 ${AY + 9} L21 ${AY + 3} M7 ${AY + 17} L21 ${AY + 11}"/>`;
      /* la marca cruza el trazo, no lo tapa: 9 de los 28 de ancho */
      orden.forEach((e) => {
        s += `<rect class="${FORMA[e.n] || 'tk'}" data-n="${e.n}" x="9.5" y="${(this.rY(e.s) - 1).toFixed(1)}" width="9" height="2"/>`;
      });
      s += `<circle id="pulgar" cx="14" cy="${RP}" r="5.4"/>`;
      svg.setAttribute('viewBox', `0 0 28 ${RH}`);
      svg.innerHTML = s;
      this.pulgar = $('#pulgar'); this.hecho = $('#hecho');
      this.lbl = $('#rail-lbl'); this.railEl = rail;

      const desdeY = (clientY) => {
        const r = rail.getBoundingClientRect();
        const vy = ((clientY - r.top) / r.height) * RH;
        let mejor = 0, dist = Infinity;
        this.visibles.forEach((p, i) => {
          if (+p.dataset.i < 0) return;
          const e = EVENTOS[+p.dataset.i];
          if (e.sil) return;
          const d = Math.abs(this.rY(e.s) - vy);
          if (d < dist) { dist = d; mejor = i; }
        });
        return mejor;
      };
      let arrastrando = false;
      rail.addEventListener('pointerdown', (ev) => {
        arrastrando = true;
        rail.setPointerCapture(ev.pointerId);
        this.lbl.classList.add('on');
        this.irA(desdeY(ev.clientY));
        ev.preventDefault();
      });
      rail.addEventListener('pointermove', (ev) => { if (arrastrando) this.irA(desdeY(ev.clientY)); });
      const soltar = () => { if (arrastrando) { arrastrando = false; this.lbl.classList.remove('on'); } };
      rail.addEventListener('pointerup', soltar);
      rail.addEventListener('pointercancel', soltar);
      rail.addEventListener('keydown', (ev) => {
        if (ev.key === 'ArrowDown' || ev.key === 'ArrowRight') { this.irA(this.actual + 1); ev.preventDefault(); }
        if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') { this.irA(this.actual - 1); ev.preventDefault(); }
        if (ev.key === 'Home') { this.irA(0); ev.preventDefault(); }
        if (ev.key === 'End') { this.irA(this.visibles.length - 1); ev.preventDefault(); }
      });
    },
    irA(idx) {
      idx = Math.max(0, Math.min(this.visibles.length - 1, idx));
      const p = this.visibles[idx];
      if (!p) return;
      this.feed.scrollTo({ top: p.offsetTop, behavior: 'auto' });
      this.pinta(idx);
    },
    pinta(idx) {
      if (idx === this.actual || !this.visibles.length) return;
      this.actual = idx;
      const p = this.visibles[idx];
      if (!p || !this.pulgar) return;   /* sin raíl no hay nada que pintar */
      const i = +p.dataset.i;
      if (i < 0) {                       /* la portada: el raíl aún no ha empezado */
        this.pulgar.setAttribute('cy', String(this.RP));
        this.hecho.setAttribute('d', `M14 ${this.RP} V${this.RP}`);
        this.lbl.textContent = 'Portada';
        this.lbl.style.top = (this.RP / this.RH * this.railEl.clientHeight) + 'px';
        this.railEl.setAttribute('aria-valuenow', '1');
        this.railEl.setAttribute('aria-valuemax', String(this.visibles.length));
        this.railEl.setAttribute('aria-valuetext', 'Portada');
        return;
      }
      const e = EVENTOS[i];
      let yy;
      if (e.sil) {
        const prev = this.visibles[Math.max(0, idx - 1)];
        const pi = prev ? +prev.dataset.i : -1;
        const ep = pi >= 0 ? EVENTOS[pi] : null;
        yy = (ep && !ep.sil) ? this.rY(ep.s) : this.RP;
      } else {
        yy = this.rY(e.s);
      }
      this.pulgar.setAttribute('cy', yy.toFixed(1));
      this.hecho.setAttribute('d', `M14 ${this.RP} V${yy.toFixed(1)}`);
      this.lbl.style.top = (yy / this.RH * this.railEl.clientHeight) + 'px';
      this.lbl.textContent = e.y;
      this.railEl.setAttribute('aria-valuenow', String(idx + 1));
      this.railEl.setAttribute('aria-valuemax', String(this.visibles.length));
      this.railEl.setAttribute('aria-valuetext', e.y + (e.t ? ': ' + e.t : ''));
    },
    filtrar(k) {
      if (!this.montado) return;
      this.posts.forEach((p) => {
        const portada = p.classList.contains('post-portada');
        p.hidden = !(portada || k === 'todo' || p.dataset.n === k);
      });
      this.visibles = this.posts.filter((p) => !p.hidden);
      const svg = $('#rail-svg');          /* puede no estar: el rail es opcional */
      if (svg) {
        svg.querySelectorAll('.tk').forEach((g) => {
          g.classList.toggle('off', !(k === 'todo' || g.dataset.n === k));
        });
      }
      this.feed.scrollTop = 0;
      this.actual = -1;
      this.pinta(0);
      /* las que estaban ocultas no se pudieron medir: se reparten al salir */
      if (Estado.movil) requestAnimationFrame(() => this.repartir());
    }
  };

  /* Conmutación documento ⇄ feed, por ancho de pantalla */
  (function modo() {
    const mq = window.matchMedia('(max-width: 760px)');
    const sec = $('#linea'), p = $('#linea-p');
    const TXT = {
      doc: 'La escala está dibujada a proporción, así que los huecos son silencios reales de las fuentes. Lleva un corte para que quepa el yacimiento de la Edad del Cobre. Pulsa una marca para ir a su entrada, o filtra por grado de prueba.',
      feed: 'Una entrada por pantalla, entera: desliza hacia arriba para pasar a la siguiente. Sólo cuando no cabe —porque el texto es largo o lleva cita o imagen— continúa al lado.'
    };
    function ajustar() {
      Estado.movil = mq.matches;
      if (mq.matches) {
        sec.classList.add('feed-on');
        p.textContent = TXT.feed;
        Feed.montar();
        Feed.adjuntar();
        requestAnimationFrame(() => requestAnimationFrame(() => Feed.repartir()));
        /* EB Garamond cambia las medidas: se reparte otra vez al cargar */
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(() => { if (Estado.movil) Feed.repartir(); });
        }
      } else {
        Feed.soltar();
        sec.classList.remove('feed-on');
        p.textContent = TXT.doc;
        const m = document.getElementById('menu');
        if (m) m.classList.remove('oculto');
      }
      ajustarCuerpo();
    }
    mq.addEventListener ? mq.addEventListener('change', ajustar) : mq.addListener(ajustar);
    ajustar();
    let tr = null;
    window.addEventListener('resize', () => {
      if (!Estado.movil) return;
      clearTimeout(tr);
      tr = setTimeout(() => Feed.repartir(), 220);
    });
  })();

  /* ═══════════ 5. Usos del suelo, 1752 ═══════════ */
  (function usos() {
    const total = USOS.reduce((a, u) => a + u[1], 0);
    const max = Math.max(...USOS.map((u) => u[1]));
    $('#usos').innerHTML = USOS.map(([t, v, hl]) => {
      const pct = (v / total) * 100;
      return `<div class="uso" role="listitem"><span class="uso-lbl">${t}</span><span class="uso-bar"><i class="${hl ? 'hl' : ''}" style="width:calc((100% - 8.5rem) * ${(v / max).toFixed(4)})"></i><span>${fmt(v)} f. · ${fmt(pct, pct < 1 ? 1 : 0)} %</span></span></div>`;
    }).join('') + `<div class="uso"><span class="uso-lbl"><b>Total</b></span><span class="uso-bar"><span><b>${total.toLocaleString('es-ES', { useGrouping: 'always' })} fanegas</b> · hoy, 1.043 ha</span></span></div>`;
  })();

  /* ═══════════ 6. Población ═══════════ */
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
    s += `<path d="${path(ant)}" style="fill:none;stroke:var(--oliva);stroke-width:2;stroke-dasharray:2 4;stroke-linecap:round"/>`;
    s += `<path d="${path(mun.slice(0, 2))}" style="fill:none;stroke:var(--anil);stroke-width:2;stroke-dasharray:5 4"/>`;
    s += `<path d="${path(mun.slice(1))}" style="fill:none;stroke:var(--anil);stroke-width:2;stroke-linejoin:round"/>`;
    s += `<path d="${path(loc)}" style="fill:none;stroke:var(--teja);stroke-width:2;stroke-linejoin:round"/>`;
    const xm = x(1985);
    s += `<text class="hueco-txt" x="${xm}" y="${y(250)}" text-anchor="middle">1970–2000</text>`;
    s += `<text class="hueco-txt" x="${xm}" y="${y(250) + 17}" text-anchor="middle">cambia la unidad</text>`;
    const NOTAS = {
      1787: 'Censo de Floridablanca: recuento nominal, el más fiable de los tres antiguos.',
      1826: 'Miñano. Sus vecindarios se tienen por menos fiables que los de Madoz.',
      1842: 'Dato dudoso: coincide con las 132 almas de Madoz y queda por debajo de 1787 y de 1826.'
    };
    const puntos = [];
    ant.forEach((p) => puntos.push({ a: p[0], v: p[1], serie: 'Recuentos de Antiguo Régimen', col: 'var(--oliva)', nota: NOTAS[p[0]] }));
    mun.forEach((p) => puntos.push({ a: p[0], v: p[1], serie: 'Municipio · censo, de derecho', col: 'var(--anil)', dudoso: p[0] === 1842, nota: NOTAS[p[0]] }));
    loc.forEach((p) => puntos.push({ a: p[0], v: p[1], serie: 'Localidad · padrón', col: 'var(--teja)' }));
    puntos.forEach((p, i) => {
      const fill = p.dudoso ? 'var(--papel-alto)' : p.col;
      s += `<circle id="pt-${i}" cx="${x(p.a)}" cy="${y(p.v)}" r="4" style="fill:${fill};stroke:${p.dudoso ? p.col : 'var(--papel-alto)'};stroke-width:2"/>`;
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

  /* ═══════════ 7. Versiones ═══════════ */
  (function versiones() {
    const sec = $('#versiones'), lista = $('#lista-versiones');
    const enlace = $('#idx-versiones');
    const pie = $('#pie-version');

    pie.innerHTML = `Versión <b>${VERSION}</b> de esta web · ${VERSIONES[0] ? VERSIONES[0].f : ''}`;

    if (typeof VERSIONES_VISIBLE !== 'undefined' && !VERSIONES_VISIBLE) {
      if (enlace) enlace.remove();   /* así la vista deja de existir para el menú */
      return;
    }

    $('#versiones-n').textContent = `${VERSIONES.length} ${VERSIONES.length === 1 ? 'versión publicada' : 'versiones publicadas'}`;
    lista.innerHTML = VERSIONES.map((v) => `<article class="vsn">
      <div class="vsn-n"><b>v${v.v}</b><span>${v.f}</span></div>
      <div class="vsn-c">
        <h3>${v.t}</h3>
        <ul>${v.c.map((x) => `<li>${x}</li>`).join('')}</ul>
        ${v.p ? `<p class="nota"><b>Estado del contenido</b>${v.p}</p>` : ''}
      </div></article>`).join('');
  })();

  /* ═══════════ 8. Las fuentes, una por una ═══════════
     La firma de archivo salió de la lámina del teléfono. Vive aquí, entera
     y agrupada por eras, para que nada de lo que la línea cuenta quede sin
     firmar por haber cambiado de sitio. */
  (function fuentes() {
    const caja = $('#fuentes-lista');
    if (!caja) return;
    let h = '', era = 0, n = 0;
    EVENTOS.forEach((e) => {
      if (e.sil || !e.f) return;
      if (e.era !== era) {
        era = e.era;
        const r = eraDe(era);
        h += `<h3 class="fu-era">${esc(r ? r.t : '')}<span>${esc(r ? r.span : '')}</span></h3>`;
      }
      n++;
      h += `<div class="fu" id="fu-${e.id}">
        <div class="fu-a">${esc(e.y)}</div>
        <div class="fu-c">
          <h4>${e.t}</h4>
          <p class="nivel">${mk(e.n)}${NIVELES[e.n].t}</p>
          <p class="fuente">${e.f}</p>
        </div></div>`;
    });
    caja.innerHTML = h;
    const rot = $('#fuentes-n');
    if (rot) rot.textContent = n + ' entradas, ' + n + ' firmas';
  })();

  /* ═══════════ 9. Menú de secciones y vistas ═══════════
     La página principal es la línea temporal. El resto de secciones
     no se recorren al bajar: se piden desde el menú de la esquina. */
  (function vistas() {
    const menu = $('#menu'), bt = $('#menu-bt'), lista = $('#menu-lista');
    const enlaces = Array.prototype.slice.call(lista.querySelectorAll('a'));
    const cajas = {};
    enlaces.forEach((a) => { cajas[a.dataset.v] = document.getElementById('v-' + a.dataset.v); });

    function abrir(b) {
      lista.hidden = !b;
      bt.setAttribute('aria-expanded', String(b));
    }
    bt.addEventListener('click', (ev) => { ev.stopPropagation(); abrir(lista.hidden); });
    document.addEventListener('click', (ev) => { if (!menu.contains(ev.target)) abrir(false); });
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && !lista.hidden) { abrir(false); bt.focus(); }
    });

    function mostrar(v) {
      if (!cajas[v]) v = 'linea';
      Object.keys(cajas).forEach((k) => {
        if (cajas[k]) cajas[k].classList.toggle('vista-on', k === v);
      });
      enlaces.forEach((a) => {
        if (a.dataset.v === v) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
      });
      abrir(false);
      menu.classList.remove('oculto');
      Estado.vista = v;
      ajustarCuerpo();
      document.title = v === 'linea'
        ? 'Colinas de Trasmonte'
        : (enlaces.filter((a) => a.dataset.v === v)[0].textContent + ' · Colinas de Trasmonte');
    }

    function desdeHash(inicial) {
      const h = location.hash.replace('#', '');
      const v = cajas[h] ? h : 'linea';
      mostrar(v);
      if (!inicial) window.scrollTo({ top: 0, behavior: 'auto' });
    }
    window.addEventListener('hashchange', () => desdeHash(false));
    desdeHash(true);

    /* ---- Salto por eras ----------------------------------------------
       Quitado el raíl, y con sesenta entradas, recorrer el feed a pulso
       deja de ser navegar. Las cinco eras van en el mismo menú, que no
       ocupa pantalla ni compite con el gesto de «atrás». */
    function saltar(id) {
      abrir(false);
      const ir = () => {
        if (Estado.movil && Feed.montado) {
          let idx = -1;
          Feed.visibles.forEach((p, j) => {
            if (idx >= 0) return;
            const i = +p.dataset.i;
            /* >= y no ===: si el filtro dejó esa era sin entradas, cae en la
               siguiente que sí tenga, en vez de no hacer nada */
            if (i >= 0 && EVENTOS[i].era >= id) idx = j;
          });
          if (idx >= 0) Feed.irA(idx);
        } else {
          const el = document.querySelector('.tl > li.era[data-era="' + id + '"]');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      if (Estado.vista !== 'linea') {
        location.hash = '#linea';
        setTimeout(ir, 70);            /* deja que la vista cambie y suba */
      } else {
        requestAnimationFrame(ir);
      }
    }

    (function eras() {
      const caja = $('#menu-eras');
      if (!caja) return;
      let h = '<p class="caps">Ir a un tiempo</p>';
      ERAS.forEach((r) => {
        h += `<button type="button" data-era="${r.id}">${esc(r.t)}<span class="sp">${esc(r.span)}</span></button>`;
      });
      caja.innerHTML = h;
      caja.hidden = false;
      caja.addEventListener('click', (ev) => {
        const b = ev.target.closest('button[data-era]');
        if (b) saltar(+b.dataset.era);
      });
    })();
  })();
})();
