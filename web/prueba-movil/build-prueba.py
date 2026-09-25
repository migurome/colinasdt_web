# -*- coding: utf-8 -*-
"""Monta la prueba movil a partir de plantilla.html y de los datos REALES de web/src.

No modifica nada de web/src: solo lo lee. Se vuelve a ejecutar cuando p3-data.js cambie.

    python web/prueba-movil/build-prueba.py
"""
import io
import os
import re
import shutil

AQUI = os.path.dirname(os.path.abspath(__file__))
WEB = os.path.dirname(AQUI)
RAIZ = os.path.dirname(WEB)
DATOS = os.path.join(WEB, 'src', 'parts', 'p3-data.js')
PLANTILLA = os.path.join(AQUI, 'plantilla.html')

# ── 1. los datos: de NIVELES hasta el cierre de EVENTOS, tal cual
src = io.open(DATOS, encoding='utf-8').read()
ini = src.index('const NIVELES')
fin = src.index('const POB')
bloque = src[ini:fin].rstrip()
assert bloque.endswith('];'), bloque[-40:]
for nombre in ('NIVELES', 'ERAS', 'EVENTOS'):
    assert 'const %s' % nombre in bloque, nombre

# ── 2. la plantilla
pl = io.open(PLANTILLA, encoding='utf-8').read()
assert '/*__DATOS__*/' in pl
cuerpo = pl.replace('/*__DATOS__*/', bloque)

# ── 3. las imagenes que las entradas citan, copiadas al lado
usadas = sorted(set(re.findall(r"src: '(img/[^']+)'", bloque)))
destino = os.path.join(AQUI, 'img')
if not os.path.isdir(destino):
    os.makedirs(destino)
copiadas = 0
for rel in usadas:
    o = os.path.join(WEB, 'src', rel.replace('/', os.sep))
    d = os.path.join(AQUI, rel.replace('/', os.sep))
    if not os.path.exists(o):
        print('!! falta la imagen', rel)
        continue
    if not os.path.exists(d) or os.path.getsize(d) != os.path.getsize(o):
        shutil.copy2(o, d)
        copiadas += 1

# ── 4. dos salidas del mismo cuerpo
#    a) index.html  — documento completo, se abre con doble clic
#    b) artifact.html — sin envoltorio, para publicar (el visor pone el suyo)
completo = (
    '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
    + cuerpo.replace('\n</script>\n', '\n</script>\n', 1)
    + '\n</body>\n</html>\n'
)
# el <head> se cierra justo antes del primer <div class="escena">
corte = completo.index('<div class="escena">')
completo = completo[:corte] + '</head>\n<body>\n' + completo[corte:]

for nombre, texto in (('index.html', completo), ('artifact.html', cuerpo)):
    p = os.path.join(AQUI, nombre)
    io.open(p + '.tmp', 'w', encoding='utf-8', newline='').write(texto)
    os.replace(p + '.tmp', p)
    print('ok %-14s %7d bytes' % (nombre, len(texto.encode('utf-8'))))

print('imagenes: %d citadas, %d copiadas' % (len(usadas), copiadas))
print('entradas: %d' % bloque.count('\n  { '))
