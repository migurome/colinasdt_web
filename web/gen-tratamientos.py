# -*- coding: utf-8 -*-
"""Genera la pagina de eleccion: cada entrada con imagen, en los 4 tratamientos.

El estilo no se reescribe: se toma del propio p1-head.html, y el bloque de
telefono se repite sin la media query para que se vea igual a cualquier ancho.
"""
import io
import json
import os
import re
import subprocess

RAIZ = 'C:/Users/migur/Desktop/Colinas'
HEAD = os.path.join(RAIZ, 'web/src/parts/p1-head.html')
SAL = os.path.join(RAIZ, 'web/src/prueba-ilustracion.html')

# ── 1. los datos, tal como los lee la web ─────────────────────────────────
JS = r"""
const fs=require('fs');
const src=fs.readFileSync('web/src/parts/p3-data.js','utf8');
const ctx={};
new Function(src+'\nthis.E=EVENTOS;this.N=NIVELES;this.R=ERAS;').call(ctx);
const era=(id)=>{const r=ctx.R.find(x=>x.id===id);return r?r.t:'';};
const out=ctx.E.filter(e=>e.img||e.ilu).map(e=>({
  id:e.id, y:String(e.y), d:e.d||'', t:e.t, n:e.n, nt:ctx.N[e.n].t,
  era:era(e.era), p:e.p||'', f:e.f||'', tr:e.tr||'',
  img:e.img||null, ilu:e.ilu||null
}));
process.stdout.write(JSON.stringify(out));
"""
ev = json.loads(subprocess.check_output(['node', '-e', JS], cwd=RAIZ).decode('utf-8'))

# ── 2. el estilo, del fichero de verdad ───────────────────────────────────
head = io.open(HEAD, encoding='utf-8').read()
estilo = re.search(r'<style>(.*)</style>', head, re.S).group(1)

# hay varias @media 760: la que interesa es la del feed, la que trae .carrusel
MQ = '@media (max-width:760px){'
movil = ''
pos = estilo.find(MQ)
while pos >= 0:
    j = pos + len(MQ)
    prof = 1
    while prof:
        c = estilo[j]
        if c == '{':
            prof += 1
        elif c == '}':
            prof -= 1
        j += 1
    cuerpo = estilo[pos + len(MQ):j - 1]
    if '.carrusel{' in cuerpo:
        movil = cuerpo
        break
    pos = estilo.find(MQ, j)
assert movil, 'no se encontro el bloque del feed'


def esc(t):
    return (t.replace(u'&', u'&amp;').replace(u'<', u'&lt;')
             .replace(u'>', u'&gt;').replace(u'"', u'&quot;'))


def frase1(p, n=2):
    """Las primeras frases, para que la lamina se parezca a la de verdad."""
    trozos = re.split(r'(?<=[.:;\u00bb])\s+', re.sub(r'<[^>]+>', '', p))
    return ' '.join(trozos[:n])


TRATOS = [('caja', 'A \u00b7 Caja'), ('vineta', 'B \u00b7 Vi\u00f1eta a sangre'),
          ('aguada', 'C \u00b7 Aguada de fondo'), ('portada', 'D \u00b7 Portada')]


def lamina(e, clave, rot):
    im = e['ilu'] or e['img']
    es_ilu = bool(e['ilu'])
    ct = '' if clave == 'caja' else ' t-' + clave
    capa = ''
    if clave != 'caja':
        capa = (u'<div class="ilu"><img src="%s" width="%d" height="%d" alt=""></div>'
                % (im['src'], im['w'], im['h']))
    fig = ''
    if clave == 'caja':
        pie = ((u'<b>Ilustraci\u00f3n interpretada.</b> ' if es_ilu else u'') + im['cap'])
        fig = (u'<figure class="ev-fig%s"><img src="%s" width="%d" height="%d" loading="lazy" '
               u'alt="%s"><figcaption>%s</figcaption></figure>'
               % (' ev-ilu' if es_ilu else '', im['src'], im['w'], im['h'],
                  esc(im['alt']), pie))
    prosa = frase1(e['p'], 1 if clave == 'portada' else 2)
    firma = ((u'Ilustraci\u00f3n interpretada \u00b7 ' if es_ilu else u'')
             + e['f'].split(u'\u00b7')[0].strip()[:62])
    return (
        u'<section class="lam%s" aria-label="%s">%s'
        u'<div class="lam-top"><span class="era-n">%s</span>'
        u'<span class="sello"><span class="mk mk-%s"></span><span>%s</span></span></div>'
        u'<div class="lam-cuerpo arriba">'
        u'<div class="cab-ev"><span class="anio">%s</span>%s<h4>%s</h4></div>'
        u'<p class="prosa">%s</p>%s</div>'
        u'<div class="lam-pie"><span class="a">%s</span><span class="t">%s</span></div>'
        u'</section>'
        % (ct, esc(e['y'] + u' \u00b7 ' + rot), capa, esc(e['era']), e['n'], esc(e['nt']),
           esc(e['y']),
           (u'<span class="dia">%s</span>' % esc(e['d'])) if e['d'] else u'',
           e['t'], prosa, fig, esc(e['y']), esc(firma)))


posts = []
for e in ev:
    lams = u''.join(lamina(e, k, r) for k, r in TRATOS)
    pts = u''.join(u'<span class="punto%s"></span>' % (' on' if n == 0 else '')
                   for n in range(len(TRATOS)))
    marca = u' \u2605 elegido' if e['tr'] else u''
    posts.append(
        u'<article class="post" data-y="%s" data-fijo="%s">'
        u'<div class="puntos" aria-hidden="true">%s</div>'
        u'<div class="carrusel" tabindex="0" aria-label="%s">%s</div></article>'
        % (esc(e['y']), esc(e['tr']), pts, esc(e['y'] + u': ' + e['t']), lams))

PAG = u"""<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex">
<title>Prueba \u00b7 tratamientos de imagen</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..700;1,400..600&display=swap">
<style>
/* \u2550\u2550\u2550 P\u00c1GINA DE ELECCI\u00d3N \u2014 generada, no se edita a mano \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   La hace scratchpad/gen_tratamientos.py a partir de p1-head.html y
   p3-data.js. Arriba y abajo se recorre la l\u00ednea; al lado, los cuatro
   tratamientos de la misma entrada. Va con noindex y sin enlace: es una
   herramienta de decisi\u00f3n, no una p\u00e1gina del sitio.
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
%(estilo)s

/* \u2500\u2500\u2500 el bloque de tel\u00e9fono, repetido sin media query: as\u00ed la prueba se ve
   igual en el port\u00e1til que en el m\u00f3vil \u2500\u2500\u2500 */
%(movil)s

/* \u2500\u2500\u2500 y el feed, encajado en una columna \u2500\u2500\u2500 */
.feed{position:static;height:100svh;overflow-y:auto;overflow-x:hidden;
  scroll-snap-type:y mandatory;padding-right:0;scrollbar-width:none}
.post{max-width:26rem;margin-inline:auto;border-inline:1px solid var(--filo)}
.chapa{position:fixed;left:50%%;bottom:14px;transform:translateX(-50%%);z-index:60;
  background:rgba(36,28,20,.88);color:var(--papel-alto);border-radius:999px;
  padding:6px 15px;font-size:.75rem;font-weight:600;letter-spacing:.12em;
  text-transform:uppercase;pointer-events:none;white-space:nowrap}
.chapa b{color:#E8C9B4;font-weight:600}
</style>
</head>
<body>
<div class="feed" id="feed">
%(posts)s
</div>
<div class="chapa" id="chapa"></div>
<script>
(function () {
  var TR = %(tratos)s;
  var chapa = document.getElementById('chapa');
  var feed = document.getElementById('feed');
  var posts = Array.prototype.slice.call(document.querySelectorAll('.post'));
  var actual = posts[0];

  function pinta() {
    if (!actual) return;
    var car = actual.querySelector('.carrusel');
    var n = car.clientWidth ? Math.round(car.scrollLeft / car.clientWidth) : 0;
    n = Math.max(0, Math.min(TR.length - 1, n));
    var pts = actual.querySelectorAll('.punto');
    for (var j = 0; j < pts.length; j++) pts[j].classList.toggle('on', j === n);
    var fijo = actual.dataset.fijo;
    chapa.innerHTML = actual.dataset.y + ' \\u00b7 ' + TR[n][1] +
      (fijo && fijo === TR[n][0] ? ' \\u00b7 <b>elegido</b>' : '');
  }

  posts.forEach(function (p) {
    var car = p.querySelector('.carrusel');
    var t = null;
    car.addEventListener('scroll', function () {
      if (t) return;
      t = requestAnimationFrame(function () { t = null; if (actual === p) pinta(); });
    }, { passive: true });
  });

  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { actual = e.target; pinta(); } });
  }, { threshold: 0.6 });
  posts.forEach(function (p) { io.observe(p); });
  feed.addEventListener('scroll', function () {}, { passive: true });
  pinta();
})();
</script>
</body>
</html>
"""

html = PAG % {
    'estilo': estilo.strip(),
    'movil': movil.strip(),
    'posts': u'\n'.join(posts),
    'tratos': json.dumps(TRATOS),
}
io.open(SAL, 'w', encoding='utf-8', newline='').write(html)
print('ok', SAL, len(html), 'caracteres,', len(ev), 'entradas')
