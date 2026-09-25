# El límite del término de Colinas, en coordenadas

> **Estado: ✅ RESUELTO.** 22 de septiembre de 2026. El polígono del término existe, está medido y
> está comprobado contra la cartografía que lo dibujó cuando Colinas todavía era municipio.
> Fichero: [`termino-colinas.geojson`](termino-colinas.geojson).

---

## 1. El problema, y por qué no se ha resuelto calcando

Unas horas antes, en [`ign-historico/`](ign-historico/README.md), quedó escrito que el MTN50 de
primera edición dibuja el límite jurisdiccional de Colinas con sus mojones y que «**lo que falta es
digitalizarlo**: seguir la línea de mojones sobre el ráster». Eso era verdad, pero habría dado un
contorno con **300-400 m de error**, que es la precisión de leer a ojo sobre un 1:50.000.

No ha hecho falta dibujar nada, porque **ya estaba dibujado**. Lo tenía el Catastro.

---

## 2. El razonamiento

Colinas de Trasmonte fue **municipio propio, con código INE 49051, hasta el Decreto 354/1972, de 10
de febrero**, que aprobó su incorporación voluntaria a Quiruelas de Vidriales (§11 del inventario).

Los municipios se fusionan. **Los polígonos catastrales de rústica, no.** El catastro de rústica se
levantó cuando Colinas era municipio, y el parcelario siguió organizado por sus polígonos después de
1972, porque renumerar miles de parcelas no le sirve a nadie.

Y en efecto: el término catastral de **Quiruelas de Vidriales** —código DGC **49189**, INE **49171**,
según lo declara el propio servicio del Catastro— sólo tiene **cinco polígonos rústicos**, y dos de
ellos, el **004** y el **005**, forman una pieza continua en el sureste que contiene el casco de
Colinas.

---

## 3. De dónde salen los datos

Servicio **INSPIRE de la Dirección General del Catastro**, descarga ATOM de parcela catastral:

```
https://www.catastro.hacienda.gob.es/INSPIRE/CadastralParcels/ES.SDGC.CP.atom.xml
  → 49 Zamora → 49189-QUIRUELAS DE VIDRIALES → A.ES.SDGC.CP.49189.zip
```

Fecha del conjunto descargado: **21 de agosto de 2026**. Contiene `…cadastralzoning.gml` (los cinco
polígonos rústicos y las 95 manzanas urbanas) y `…cadastralparcel.gml` (**7.091 parcelas**).
Coordenadas en **EPSG:25830** (UTM 30N, ETRS89), convertidas aquí a geográficas con la inversa de la
proyección sobre el elipsoide GRS80.

---

## 4. Tres comprobaciones independientes de que esos dos polígonos son el término

### (a) Topología: encajan exactamente

Uniendo 004 y 005 por cancelación de aristas compartidas, **262 aristas se anulan una contra otra** y
queda **un solo anillo cerrado de 959 vértices, sin huecos**. No son dos trozos cualesquiera puestos
uno al lado del otro: comparten frontera vértice a vértice y forman una sola pieza.

### (b) Superficie: las cuentas del municipio cuadran

| | ha |
|---|---|
| Polígonos **004 + 005** (la pieza de Colinas) | **1.026,6** |
| Polígonos 001 + 002 + 003 (la de Quiruelas) | 1.777,3 |
| **Suma = municipio actual** | **2.803,9** |
| Superficie oficial del municipio de Quiruelas de Vidriales | **2.799** |

Diferencia: **0,18 %**. Los cinco polígonos teselan el municipio entero y ninguno sobra.

### (c) ★★★ El mapa: la línea pasa por los mojones

Superpuesto el contorno de 004+005 sobre el **MTN50 de primera edición** —anterior a 1972, cuando la
raya todavía era jurisdicción— el contorno **cae encima de la línea de trazos y pasa por las cruces
de los mojones**, una tras otra: en la raya con Quiruelas junto al arroyo de San Juan, en el
trifinio del nordeste junto a «Casa», a lo largo del «Camino alto de Vallando», bajando por «El
Valle» hasta cruzar la carretera en el K11, y por el Tera al sur.

> **La imagen está guardada** como
> [`ign-historico/comprobacion_limite-catastral-sobre-mtn50.jpg`](ign-historico/comprobacion_limite-catastral-sobre-mtn50.jpg):
> en **verde** el término, en **rojo** el tramo que era raya con Quiruelas.

**Que dos fuentes que no se hablan entre sí —el parcelario del Catastro y el MTN50 del Instituto
Geográfico— dibujen la misma línea es lo que convierte esto en un dato y no en una conjetura.**

---

## 5. El término, en cifras

| | |
|---|---|
| **Superficie** | **1.026,6 ha = 10,27 km²** |
| **Perímetro** | **16.345 m** |
| Anchura máxima N-S | 5.166 m |
| Anchura máxima E-O | 5.046 m |
| Vértices del polígono | 959 |
| Extremo norte | 42,02912 N |
| Extremo sur | 41,98266 N |
| Extremo este | 5,77521 O |
| Extremo oeste | 5,83627 O |
| Casco (centro de las manzanas urbanas) | **42,00353 N · 5,80914 O** |

### La raya que desapareció

De los **16.345 m** de perímetro:

- **6.050 m (37 %)** eran la **raya con Quiruelas de Vidriales**. Desde 1972 no separan nada: son
  línea interior de un mismo municipio, y no las dibuja ya ningún mapa oficial. Van aparte en
  [`raya-quiruelas.geojson`](raya-quiruelas.geojson).
- **10.295 m (63 %)** siguen siendo **límite municipal vigente** de Quiruelas de Vidriales con sus
  vecinos. Es decir: **casi dos tercios del contorno de Colinas siguen estando en el mapa oficial de
  España**, aunque ya no con su nombre.

---

## 6. Lo que esto **no** demuestra

- Es el límite **catastral de hoy**, comprobado contra el MTN50 anterior a 1972. **No es un acta de
  deslinde.** El acta, si existe, está en el Instituto Geográfico Nacional (expedientes de deslinde
  municipal), y sigue siendo lo que cerraría el asunto del todo.
- La coincidencia con la línea de mojones se ha comprobado **a ojo sobre el ráster**, a ~1,7 m por
  píxel. Se ve que la línea pasa por las cruces; **no se ha medido la desviación mojón a mojón**.
- ⚠️ **Y la superficie no cuadra del todo con la cifra oficial de 1970.** El Decreto 3119/1970 dio al
  perímetro de concentración parcelaria **1.043 ha**; el término catastral mide **1.026,6**. Sobran
  **16,4 ha (1,6 %)** en el perímetro concentrado. Puede ser que la concentración tomara terreno de
  términos vecinos, que la cifra del decreto sea redonda, o que el parcelario se haya retocado
  después. **Sin resolver.** Lo que sí se puede decir es que dos fuentes oficiales independientes dan
  la misma superficie con un 1,6 % de diferencia, y que la de 1970 es la mayor, como corresponde a un
  perímetro que se declara «casi la totalidad del término».

---

## 7. Lo que desbloquea: los 72 parajes de OpenStreetMap, filtrados

El fichero [`parajes-osm.tsv`](parajes-osm.tsv) traía 72 parajes de un rectángulo que cubre **cinco
términos**, con la advertencia de que no se podía saber cuáles eran de Colinas. Ya se puede.

**17 de los 72 caen dentro del término:**

| Paraje | Al casco | Al límite |
|---|---|---|
| Manzanilleros | 376 m SO | 762 m |
| El Regaral | 754 m NE | 912 m |
| El Gaganal | 774 m SSE | 265 m |
| El Pontón | 972 m S | 539 m |
| El Lombo | 981 m ENE | 707 m |
| Las Porqueras | 1.050 m NE | 898 m |
| Fornatejas | 1.128 m NE | 716 m |
| **Los Linares** | 1.130 m OSO | 416 m |
| El Aviseo | 1.259 m E | 265 m |
| El Hoyo | 1.591 m ENE | 431 m |
| Las Huergas | 1.649 m SSO | 535 m |
| Los Picos | 2.001 m SO | 124 m |
| Baldíos | 2.060 m ENE | 431 m |
| Las Presillas | 2.066 m OSO | **81 m** ⚠️ |
| Las Valencinas | 2.070 m NE | 724 m |
| El Pendón | 2.145 m NNE | 436 m |
| Valle Hondo | 2.827 m NE | 360 m |

> ⚠️ **Y el aviso que hay que leer antes que la tabla.** Un paraje es una **superficie**; en
> OpenStreetMap es **un punto**. Para los que caen cerca de la raya, el punto no decide nada. Quedan
> **fuera por menos de 120 m**: **Los Castilletes** (27 m), **El Redondal** (35 m), **La Salsa**
> (45 m), **El Caserío** (88 m), **La Capilla** (103 m), **El Pedazo** (112 m), **Las Tapias**
> (113 m) y **Las Pateras** (115 m). Varios de ellos el proyecto los venía dando por de Colinas, y
> **con este método no se pueden decidir**. Se deciden con el parcelario, no con un punto →
> [`parajes-catastro.md`](parajes-catastro.md).

### Y un punto que sí decide algo

El final del «**Cº al Molino**» del MTN50, en el meandro del Tera, cae **dentro del término y a 12 m
del límite**. Encaja con lo que declara el Catastro de Ensenada en 1752: un molino harinero del
concejo «**en la orilla del río Tera en término de este lugar**». Sigue siendo pista y no
localización —la coordenada del meandro es una lectura a ojo sobre el ráster—, pero ahora se sabe
que el sitio está del lado bueno de la raya.

---

## 8. Ficheros

| Fichero | Qué es |
|---|---|
| [`termino-colinas.geojson`](termino-colinas.geojson) | El término: un polígono, 959 vértices, WGS84 |
| [`raya-quiruelas.geojson`](raya-quiruelas.geojson) | Los 6.050 m que eran raya con Quiruelas y hoy no separan nada |
| [`ign-historico/comprobacion_limite-catastral-sobre-mtn50.jpg`](ign-historico/comprobacion_limite-catastral-sobre-mtn50.jpg) | La comprobación, en imagen |

---

## Nota de reutilización

Cartografía catastral de la **Dirección General del Catastro** (Ministerio de Hacienda), descargada
de sus servicios INSPIRE, que pueden usarse libremente citando al Catastro como autor y propietario
de la información. La base del MTN50 de primera edición es del **Instituto Geográfico Nacional**.

---

*Ficha redactada el 22 de septiembre de 2026.*
