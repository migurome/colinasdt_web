# -*- coding: utf-8 -*-
"""Comparador de voz: la misma entrada, cuatro redacciones, una al lado de otra.

Arriba y abajo se recorre la era de Castroferrol; al lado, las cuatro voces:

  A  Tecnica       la redaccion original (etiqueta v0.14)
  B  Sobria        la que esta publicada ahora (v0.15)
  C  Microhistoria narrada, con escena y consecuencia
  D  Escena        un paso mas: frase corta, presente, mas silencio

A y B se leen de los datos de verdad —A de git, B del fichero vivo—, asi que
no pueden desincronizarse. C y D salen de web/voces.json.

    python web/gen-voz.py
"""
import io
import json
import os
import re
import subprocess

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HEAD = os.path.join(RAIZ, 'web/src/parts/p1-head.html')
SAL = os.path.join(RAIZ, 'web/src/prueba-voz.html')
ERA = 2

VOCES = [('A', u'A · Técnica', u'la original'),
         ('B', u'B · Sobria', u'la publicada'),
         ('C', u'C · Microhistoria', u'narrada'),
         ('D', u'D · Escena', u'frase corta')]

LEE = """
const fs = require('fs');
const src = fs.readFileSync(process.argv[2], 'utf8');
const c = {};
new Function(src + '\\nthis.E = EVENTOS;this.N = NIVELES;this.R = ERAS;').call(c);
const era = (id) => { const r = c.R.find((x) => x.id === id); return r ? r.t : ''; };
process.stdout.write(JSON.stringify(c.E.map((e, i) => ({
  id: e.id || '_silencio', era: e.era, y: String(e.y), d: e.d || '',
  t: e.t || '', n: e.n || '', nt: e.n ? c.N[e.n].t : '', eraT: era(e.era),
  p: e.p || '', sil: !!e.sil
}))));
"""


def lee(fichero_js):
    aux = os.path.join(RAIZ, '.voz-lee.js')
    io.open(aux, 'w', encoding='utf-8', newline='').write(LEE)
    try:
        out = subprocess.check_output(['node', aux, fichero_js], cwd=RAIZ)
    finally:
        os.remove(aux)
    return json.loads(out.decode('utf-8'))


# ── A: la redaccion de la etiqueta v0.14 ─────────────────────────────────
tmp = os.path.join(RAIZ, '.voz-v014.js')
io.open(tmp, 'w', encoding='utf-8', newline='').write(
    subprocess.check_output(['git', 'show', 'v0.14:web/src/parts/p3-data.js'],
                            cwd=RAIZ).decode('utf-8'))
try:
    vieja = {e['id']: e for e in lee(tmp)}
finally:
    os.remove(tmp)

viva = lee('web/src/parts/p3-data.js')
extra = json.loads(io.open(os.path.join(RAIZ, 'web/voces.json'), encoding='utf-8').read())

head = io.open(HEAD, encoding='utf-8').read()
estilo = re.search(r'<style>(.*)</style>', head, re.S).group(1)
MQ = '@media (max-width:760px){'
movil, pos = '', estilo.find(MQ)
while pos >= 0:
    j, prof = pos + len(MQ), 1
    while prof:
        if estilo[j] == '{':
            prof += 1
        elif estilo[j] == '}':
            prof -= 1
        j += 1
    cuerpo = estilo[pos + len(MQ):j - 1]
    if '.carrusel{' in cuerpo:
        movil = cuerpo
        break
    pos = estilo.find(MQ, j)
assert movil


def esc(t):
    return (t.replace(u'&', u'&amp;').replace(u'<', u'&lt;')
             .replace(u'>', u'&gt;').replace(u'"', u'&quot;'))


def parrafos(t):
    return u''.join(u'<p class="prosa">%s</p>' % x for x in t.split(u'|') if x.strip())


def texto(e, clave):
    if clave == 'A':
        v = vieja.get(e['id'])
        return parrafos(v['p']) if v else u'<p class="prosa">—</p>'
    if clave == 'B':
        return parrafos(e['p'])
    d = extra.get(e['id'], {})
    return parrafos(d.get(clave, u'—'))


def lamina(e, clave, rot, pie):
    sello = u''
    if e['n']:
        sello = (u'<span class="sello"><span class="mk mk-%s"></span>'
                 u'<span>%s</span></span>' % (e['n'], esc(e['nt'])))
    cab = u''
    if not e['sil']:
        cab = (u'<div class="cab-ev"><span class="anio">%s</span>%s<h4>%s</h4></div>'
               % (esc(e['y']),
                  (u'<span class="dia">%s</span>' % esc(e['d'])) if e['d'] else u'',
                  e['t']))
    else:
        cab = u'<div class="cab-ev"><span class="anio">%s</span><h4>Silencio documental</h4></div>' % esc(e['y'])
    return (u'<section class="lam" aria-label="%s">'
            u'<div class="lam-top"><span class="era-n">%s</span>%s</div>'
            u'<div class="lam-cuerpo arriba">%s%s</div>'
            u'<div class="lam-pie"><span class="a">%s</span><span class="t">%s</span></div>'
            u'</section>'
            % (esc(e['y'] + u' · ' + rot), esc(e['eraT']), sello,
               cab, texto(e, clave), esc(e['y']), esc(pie)))


posts = []
for e in viva:
    if e['era'] != ERA:
        continue
    lams = u''.join(lamina(e, k, r, p) for k, r, p in VOCES)
    pts = u''.join(u'<span class="punto%s"></span>' % (' on' if i == 0 else '')
                   for i in range(len(VOCES)))
    posts.append(u'<article class="post" data-y="%s">'
                 u'<div class="puntos" aria-hidden="true">%s</div>'
                 u'<div class="carrusel" tabindex="0" aria-label="%s">%s</div></article>'
                 % (esc(e['y']), pts, esc(e['y'] + u': ' + (e['t'] or u'silencio')), lams))

PAG = u"""<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex">
<title>Prueba · la voz de la línea</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..700;1,400..600&display=swap">
<style>
/* ═══ COMPARADOR DE VOZ — generado, no se edita a mano ═════════════════
   Lo hace web/gen-voz.py. Arriba y abajo, la era de Castroferrol; al lado,
   cuatro redacciones de la misma entrada. Sin imágenes y sin tratamientos:
   aquí sólo se juzga el texto. noindex y sin enlace desde el sitio.
   ═══════════════════════════════════════════════════════════ */
%(estilo)s

/* el bloque de teléfono, sin media query: igual en el portátil y en el móvil */
%(movil)s

.feed{position:static;height:100svh;overflow-y:auto;overflow-x:hidden;
  scroll-snap-type:y mandatory;padding-right:0;scrollbar-width:none}
.post{max-width:27rem;margin-inline:auto;border-inline:1px solid var(--filo)}
.lam-cuerpo{gap:.75em}
.lam-cuerpo .prosa + .prosa{margin-top:0}
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
  var V = %(voces)s;
  var chapa = document.getElementById('chapa');
  var posts = Array.prototype.slice.call(document.querySelectorAll('.post'));
  var actual = posts[0];
  function pinta() {
    if (!actual) return;
    var car = actual.querySelector('.carrusel');
    var n = car.clientWidth ? Math.round(car.scrollLeft / car.clientWidth) : 0;
    n = Math.max(0, Math.min(V.length - 1, n));
    var pts = actual.querySelectorAll('.punto');
    for (var j = 0; j < pts.length; j++) pts[j].classList.toggle('on', j === n);
    chapa.innerHTML = actual.dataset.y + ' \\u00b7 <b>' + V[n][1] + '</b> \\u00b7 ' + V[n][2];
  }
  posts.forEach(function (p) {
    var car = p.querySelector('.carrusel'), t = null;
    car.addEventListener('scroll', function () {
      if (t) return;
      t = requestAnimationFrame(function () { t = null; if (actual === p) pinta(); });
    }, { passive: true });
  });
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { actual = e.target; pinta(); } });
  }, { threshold: 0.6 });
  posts.forEach(function (p) { io.observe(p); });
  pinta();
})();
</script>
</body>
</html>
"""

io.open(SAL, 'w', encoding='utf-8', newline='').write(PAG % {
    'estilo': estilo.strip(),
    'movil': movil.strip(),
    'posts': u'\n'.join(posts),
    'voces': json.dumps(VOCES),
})
print('ok %s — %d entradas × %d voces' % (SAL, len(posts), len(VOCES)))
