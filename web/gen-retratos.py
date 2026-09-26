# -*- coding: utf-8 -*-
"""Descarga de Wikimedia Commons los retratos de contexto de la linea.

Son retratos de personas que dan nombre a un documento —el rey que firma, el
ministro que ordena el censo—, NO imagenes de Colinas. El pie de la lamina lo
dice, y aqui queda registrada la licencia de cada uno.

Condiciones que se imponen, y que el script comprueba:
  · licencia declarada de dominio publico en Commons (nada de CC BY-SA)
  · anchura minima de 700 px, para que no se vea pastoso a pantalla completa

    python web/gen-retratos.py

Deja las imagenes en web/src/img/ret/ y la hoja de creditos en
docs/03-archivos/retratos-commons.tsv
"""
import io
import json
import os
import re
import time
import urllib.parse
import urllib.error
import urllib.request

from PIL import Image

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SALIDA = os.path.join(RAIZ, 'web', 'src', 'img', 'ret')
CREDITOS = os.path.join(RAIZ, 'docs', '03-archivos', 'retratos-commons.tsv')
API = 'https://commons.wikimedia.org/w/api.php'
UA = {'User-Agent': 'ColinasDT/0.1 (historia local de Colinas de Trasmonte; '
                    'github.com/migurome/colinasdt_web)'}
ANCHO = 1400
MIN = 700

# id de la entrada → (fichero de Commons, quien es, por que sale aqui)
#
# Cada uno va con su fichero exacto, no con una busqueda: una busqueda puede
# traer manana otra imagen distinta, y estos ya estan comprobados uno a uno.
# El de Aranda, por ejemplo, es una copia del siglo XIX del retrato de Inza, y
# eso lo dice el pie de la lamina.
#
# Sin retrato utilizable, y por eso no estan aqui:
#   minano  — de Sebastian de Miñano solo hay en Commons un retrato subido
#             como CC BY-SA, y el proyecto solo usa dominio publico declarado.
#   aranda1768 — ya no viene de Commons: ver FUERA, aqui debajo.
RETRATOS = [
    ('bermudo', u'File:Vermudo II no Compendio de crónicas de reyes.jpg',
     u'Bermudo II de León',
     u'El rey que entrega la villa en compensación por las tierras del Bierzo'),
    ('d1129', u'File:Afonso VII de Leão e Castela - Compendio de crónicas de reyes '
     u'(Biblioteca Nacional de España).png', u'Alfonso VII',
     u'El rey que confirma el coto en el que Castroferrol es mojón'),
    ('d1170', u'File:Fernando II de Galicia e Leon no tombo A.jpg', u'Fernando II de León',
     u'El rey que revalida los mismos límites cuarenta y un años después'),
    ('pecheros1526', u'File:Carlos V en Mühlberg, by Titian, from Prado in Google Earth.jpg',
     u'Carlos I de España', u'El censo de pecheros se levanta en su reinado y lleva su nombre'),
    ('c1613', u'File:Velázquez - Felipe III (Museo del Prado, 1634-35).jpg', u'Felipe III',
     u'El rey que envía al deán de Salamanca a averiguar qué iglesias son del Real Patronato'),
    ('nuncio1694', u'File:Pope Innocent XII.PNG', u'Inocencio XII',
     u'El papa bajo cuyo pontificado actúa el Nuncio contra el provisor de Astorga'),
    ('floridablanca', u'File:Goya - José Moñino y Redondo, I conde de Floridablanca.jpg',
     u'El conde de Floridablanca', u'El censo de 1787 se ordena bajo su gobierno y lleva su nombre'),
    # de las dos litografias de la BNE se toma esta, no la de De Craene: en
    # esta el retratado sostiene el mapa rotulado «Division territorial», que
    # es justo lo que cuenta la entrada de 1833
    ('provincia', u'File:Francisco Javier de Burgos, de Domingo Valdivieso Henarejos.jpg',
     u'Francisco Javier de Burgos',
     u'Ministro de Fomento y autor de la división provincial de 1833'),
    ('madoz', u'File:Pascual Madoz, de José Nin y Tudó (1873), Congreso de los Diputados.jpg',
     u'Pascual Madoz', u'El autor del diccionario en el que Colinas ocupa nueve líneas'),
    ('osuna1848', u'File:Mariano Téllez-Girón, XII duque de Osuna '
     u'(Museo Nacional del Romanticismo de Madrid).JPG',
     u'Mariano Téllez-Girón, XII duque de Osuna',
     u'El titular de la casa cuyo archivo conserva el legajo de 1694'),
]


# Retratos que NO vienen de Commons. El script no los descarga —la imagen ya
# esta en el repositorio—, pero escribe su fila en la hoja de creditos para que
# la procedencia no se pierda cada vez que se regenera.
#
# El de Aranda se cambio el 26-IX-2026: antes estaba la copia decimononica de
# Jover, y ahora esta el retrato que le pinto Ramon Bayeu en 1769, un ano
# despues del recuento. La pintura es de dominio publico; de la reproduccion no
# consta con que condiciones se publica, y eso queda dicho en su pie de lamina
# y en CREDITOS.md.
FUERA = [
    ['aranda1768', u'El conde de Aranda',
     u'El censo de 1768 se ordena bajo su presidencia y lleva su nombre',
     u'— (no procede de Commons)',
     u'Ramón Bayeu y Subías (1746-1793)',
     u'Pedro Pablo Abarca de Bolea, X conde de Aranda — óleo, 276 × 196 cm, encargo de la '
     u'Universidad Sertoriana; Museo de Huesca, sala 7 (detalle)',
     u'1769',
     u'obra en dominio público; reproducción con condiciones sin declarar',
     u'https://elpirineoaragones.com/2020/08/21/san-juan-de-la-pena-recuerda-el-legado-del-x-'
     u'conde-de-aranda-como-militar-diplomatico-e-industrial-ilustrado/',
     u'1400x913'],
]


def api(**p):
    """Commons corta el paso si se le agobia: se va despacio y se reintenta."""
    p['format'] = 'json'
    url = API + '?' + urllib.parse.urlencode(p)
    espera = 5.0
    for intento in range(5):
        time.sleep(espera)
        try:
            r = urllib.request.Request(url, headers=UA)
            return json.loads(urllib.request.urlopen(r, timeout=40).read().decode('utf-8'))
        except urllib.error.HTTPError as e:
            if e.code != 429 or intento == 4:
                raise
            espera *= 2
            print(u'    (429, esperando %.0f s)' % espera)


def limpia(t):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', str(t))).replace('&amp;', '&').strip()


def ficha(titulo):
    d = api(action='query', prop='imageinfo', iiprop='url|size|extmetadata',
            iiurlwidth=ANCHO, titles=titulo)
    for p in d.get('query', {}).get('pages', {}).values():
        if 'imageinfo' not in p:
            return None
        ii = p['imageinfo'][0]
        m = ii.get('extmetadata', {})
        g = lambda k: limpia(m.get(k, {}).get('value', ''))
        return {'titulo': p['title'], 'licencia': g('LicenseShortName'),
                'autor': g('Artist'), 'obra': g('ObjectName'), 'fecha': g('DateTimeOriginal'),
                'w': ii.get('width') or 0, 'h': ii.get('height') or 0,
                # thumburl es la version ya escalada por Commons: ni bomba ni 30 MB
                'url': (ii.get('thumburl') or ii.get('url') or '').split('?')[0],
                'original': (ii.get('url') or '').split('?')[0],
                'pagina': (ii.get('descriptionurl') or
                           'https://commons.wikimedia.org/wiki/' +
                           urllib.parse.quote(p['title'].replace(' ', '_')))}
    return None


def busca_pd(q):
    """Primer resultado en dominio publico y suficientemente grande."""
    d = api(action='query', list='search', srnamespace=6, srlimit=6, srsearch=q)
    for r in d.get('query', {}).get('search', []):
        f = ficha(r['title'])
        # ojo: la miniatura de un PDF tambien acaba en .jpg. Se mira el fichero.
        if not f or f['titulo'].lower().endswith(('.pdf', '.djvu', '.tif', '.tiff')):
            continue
        if 'public domain' not in f['licencia'].lower():
            continue
        if f['w'] < MIN:
            continue
        return f
    return None


def baja(url, destino):
    r = urllib.request.Request(url, headers=UA)
    datos = urllib.request.urlopen(r, timeout=120).read()
    tmp = destino + '.bruto'
    io.open(tmp, 'wb').write(datos)
    im = Image.open(tmp).convert('RGB')
    if im.width > ANCHO:
        im = im.resize((ANCHO, int(im.height * ANCHO / im.width)), Image.LANCZOS)
    im.save(destino, quality=82, optimize=True, progressive=True)
    os.remove(tmp)
    return im.size


def main(solo=None):
    if not os.path.isdir(SALIDA):
        os.makedirs(SALIDA)
    filas, fallos = [], []
    for eid, clave, quien, por_que in RETRATOS:
        if solo and eid not in solo:
            continue
        f = busca_pd(clave[1:]) if clave.startswith('?') else ficha(clave)
        if not f:
            fallos.append((eid, quien, u'sin resultado utilizable'))
            continue
        if 'public domain' not in f['licencia'].lower():
            fallos.append((eid, quien, u'licencia %s, no se usa' % f['licencia']))
            continue
        if f['w'] < MIN:
            fallos.append((eid, quien, u'sólo %d px de ancho' % f['w']))
            continue
        destino = os.path.join(SALIDA, eid + '.jpg')
        w, h = baja(f['url'], destino)
        filas.append([eid, quien, por_que, f['titulo'], f['autor'][:120],
                      f['obra'][:120], f['fecha'][:40], f['licencia'],
                      f['pagina'], '%dx%d' % (w, h)])
        print(u'  ✓ %-14s %-26s %s (%dx%d)' % (eid, quien, f['licencia'], w, h))
    for eid, quien, motivo in fallos:
        print(u'  ✗ %-14s %-26s %s' % (eid, quien, motivo))

    if solo:                     # repeticion parcial: no se pisa la hoja entera
        print(u'(repeticion parcial: la hoja de creditos no se reescribe)')
        for r in filas:
            print(u'  ' + u' | '.join(r[:5]))
        return
    filas += [list(f) for f in FUERA]          # los que no son de Commons
    cab = ['entrada', 'quien', 'por_que_sale', 'fichero', 'autor',
           'obra', 'fecha_obra', 'licencia', 'pagina', 'tamano']
    with io.open(CREDITOS, 'w', encoding='utf-8', newline='') as fh:
        fh.write(u'\t'.join(cab) + u'\n')
        for r in filas:
            fh.write(u'\t'.join(x.replace('\t', ' ') for x in r) + u'\n')
    print(u'\n%d retratos (%d fuera de Commons), %d descartados. Créditos en %s'
          % (len(filas), len(FUERA), len(fallos), os.path.relpath(CREDITOS, RAIZ)))


if __name__ == '__main__':
    import sys
    main(set(sys.argv[1:]) or None)
