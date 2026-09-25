# -*- coding: utf-8 -*-
"""Genera las imagenes provisionales de las entradas que aun no tienen una.

No son ilustraciones ni documentos: son marcadores de sitio. Para que no se
confundan con ninguna de las dos cosas, son abstractas y no llevan ni una
letra. Y para que digan algo mientras esten, codifican lo que el proyecto ya
codifica en otro sitio:

  el COLOR es la era          — de la paleta de «Materia para un emblema»
  la TRAMA es el grado de prueba

Las tres tramas de relieve —pastilla, roseta y retícula— no se inventan: son
las tres únicas ornamentaciones que ha devuelto el suelo de Colinas.

    python web/gen-dummies.py
"""
import hashlib
import io
import json
import os
import subprocess

from PIL import Image, ImageDraw, ImageFilter

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SALIDA = os.path.join(RAIZ, 'web', 'src', 'img', 'prov')
W, H = 1000, 667

# ── el color, por era: las muestras de «Materia para un emblema» ───────────
ERA_COLOR = {
    1: (0x5A, 0x64, 0x6A),   # gris pizarra  — antes del nombre
    2: (0x4F, 0x5D, 0x3C),   # verde encina  — Castroferrol
    3: (0x6A, 0x4C, 0x31),   # sepia ferroso — el conde de Benavente
    4: (0x9B, 0x4B, 0x2D),   # rojo arcilla  — el ayuntamiento
    5: (0xB5, 0x9E, 0x63),   # pardo centeno — la pedanía
}
LINO = (0x6E, 0x8D, 0xC8)

# ── la trama, por grado de prueba ─────────────────────────────────────────
TRAMA = {
    'visto': 'reticula',      # cerrada: la fuente se ha visto
    'cotejar': 'roseta',      # abierta por cotejar
    'sinleer': 'pastilla',    # puntos sueltos: catalogada, sin leer
    'sinref': 'pastilla',
    'interp': 'roseta',
    'propuesto': 'roseta',
    'contexto': 'reticula',
}


def mezcla(c, d, t):
    return tuple(int(round(a + (b - a) * t)) for a, b in zip(c, d))


def semilla(sid):
    return int(hashlib.md5(sid.encode('utf-8')).hexdigest()[:8], 16)


def fondo(base, rnd):
    """Campo de tono medio: el velo del tratamiento ya oscurece bastante."""
    alto = mezcla(base, (28, 20, 13), 0.28)
    hondo = mezcla(base, (18, 13, 8), 0.60)
    g = Image.new('RGB', (1, 2))
    g.putpixel((0, 0), alto)
    g.putpixel((0, 1), hondo)
    return g.resize((W, H), Image.BICUBIC)


def reticula(d, tinta, rnd):
    paso = 54 + rnd % 30
    off = rnd % paso
    for x in range(-W, W * 2, paso):
        d.line([(x, 0), (x + 150, H)], fill=tinta, width=3)
    for y in range(-paso + off, H + paso, paso):
        d.line([(0, y), (W, y + 70)], fill=tinta, width=3)


def roseta(d, tinta, rnd):
    import math
    paso = 170 + rnd % 80
    r = paso // 4
    fila, y = 0, paso // 3
    while y < H + paso:
        x = (paso // 2 if fila % 2 else 0) + rnd % 40
        while x < W + paso:
            for k in range(6):
                a = math.pi / 3 * k + (rnd % 7) * 0.12
                cx, cy = x + math.cos(a) * r * .8, y + math.sin(a) * r * .8
                d.ellipse([cx - r * .55, cy - r * .55, cx + r * .55, cy + r * .55],
                          outline=tinta, width=3)
            x += paso
        y += paso
        fila += 1


def pastilla(d, tinta, rnd):
    paso = 92 + rnd % 46
    fila, y = 0, paso // 2
    while y < H + paso:
        x = (paso // 2 if fila % 2 else 0) + rnd % 30
        while x < W + paso:
            r = paso * 0.2
            d.ellipse([x - r, y - r * .7, x + r, y + r * .7], fill=tinta)
            x += paso
        y += paso
        fila += 1


TRAZO = {'reticula': reticula, 'roseta': roseta, 'pastilla': pastilla}


def una(sid, era, grado):
    rnd = semilla(sid)
    base = ERA_COLOR.get(era, ERA_COLOR[3])
    im = fondo(base, rnd).convert('RGBA')

    # la trama, en tinta clara y translucida
    capa = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    tinta = mezcla(base, (255, 248, 230), 0.78) + (86,)
    TRAZO[TRAMA.get(grado, 'reticula')](ImageDraw.Draw(capa), tinta, rnd)
    capa = capa.filter(ImageFilter.GaussianBlur(0.7))
    im = Image.alpha_composite(im, capa)

    # un solo acento de azul lino, como en la ilustracion de 1006
    ac = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    cx = 150 + rnd % (W - 300)
    cy = 110 + (rnd >> 8) % (H - 220)
    rr = 90 + (rnd >> 4) % 70
    ImageDraw.Draw(ac).ellipse([cx - rr, cy - rr, cx + rr, cy + rr], fill=LINO + (120,))
    im = Image.alpha_composite(im, ac.filter(ImageFilter.GaussianBlur(72)))

    # vinneta suave
    vi = Image.new('L', (W, H), 0)
    ImageDraw.Draw(vi).ellipse([-W * .18, -H * .30, W * 1.18, H * 1.30], fill=255)
    vi = vi.filter(ImageFilter.GaussianBlur(120))
    oscuro = Image.new('RGBA', (W, H), mezcla(base, (14, 10, 6), .78) + (255,))
    im = Image.composite(im, oscuro, vi)
    return im.convert('RGB')


def main():
    js = ("const fs=require('fs');"
          "const src=fs.readFileSync('web/src/parts/p3-data.js','utf8');"
          "const c={};new Function(src+String.fromCharCode(10)+'this.E=EVENTOS;').call(c);"
          "process.stdout.write(JSON.stringify(c.E.filter(e=>!e.sil&&!e.img&&!e.ilu)"
          ".map(e=>({id:e.id,era:e.era,n:e.n}))));")
    ev = json.loads(subprocess.check_output(['node', '-e', js], cwd=RAIZ).decode('utf-8'))
    if not os.path.isdir(SALIDA):
        os.makedirs(SALIDA)
    total = 0
    for e in ev:
        im = una(e['id'], e['era'], e['n'])
        ruta = os.path.join(SALIDA, e['id'] + '.jpg')
        im.save(ruta, quality=72, optimize=True, progressive=True)
        total += os.path.getsize(ruta)
    print('%d imágenes provisionales, %d kB en total' % (len(ev), total // 1024))
    io.open(os.path.join(SALIDA, 'LEEME.txt'), 'w', encoding='utf-8').write(
        u'Imágenes provisionales, generadas por web/gen-dummies.py.\n'
        u'No son ilustraciones ni documentos: son marcadores de sitio.\n'
        u'El color es la era; la trama, el grado de prueba.\n'
        u'Se sustituyen borrando el fichero y poniendo la imagen buena.\n')


if __name__ == '__main__':
    main()
