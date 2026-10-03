# Índice de facsímiles — dónde está el papel detrás de cada dato

> **Por qué existe este fichero.** El criterio de este proyecto obliga a que **todo dato pueda
> volver a comprobarse sobre la imagen del documento**, y prohíbe leer un facsímil desde una vista
> reducida. Eso exige tener los originales **dentro del proyecto**, no en la caché de una sesión de
> trabajo.
>
> 🚨 **El 23 de septiembre de 2026 se descubrió que no era así.** Las fuentes que sostienen buena
> parte de la investigación —el Censo de Aranda entero, el vecindario de 1591, Floridablanca,
> Miñano, el Censo de Pecheros, **las 68 imágenes del pleito de diezmos de 1694** y **las tres
> ejecutorias de la Chancillería**— vivían en un directorio temporal de sesión. **De las
> ejecutorias, el proyecto sólo conservaba tres recortes de veintiocho planas.** Todo ello se
> incorporó ese día. Este índice se levantó para que no vuelva a pasar inadvertido.

~~**Estado a 23 de septiembre de 2026: 327 ficheros de fuente, 522 MB.**~~

~~**Estado a 25 de septiembre de 2026: 412 ficheros de fuente, 515 MB.**~~

**Estado a 3 de octubre de 2026: 357 ficheros de fuente, 539 MB.** *(recontado al cerrar `TAR-10`, con el que el lote de *Brigecio* queda leído entero; entre `TAR-09` y `TAR-10` han entrado **tres PDF** y un recorte)*

> 📏 **Y esta vez con la base escrita**, que es lo que les faltaba a las cifras anteriores:
> se cuenta **todo lo que hay bajo `docs/` que no sea `.md` ni `.tsv`** —es decir, **el
> material**: facsímiles, planos, PDF, rásteres y capas; no lo que el proyecto escribe sobre
> ellos—, sin ficheros ocultos. ⚠️ **Las cifras de septiembre no decían qué contaban**, así que
> **no son reproducibles** y no deben compararse con ésta sin más: se tachan, no se corrigen.

> ✅ **`LIMP-01`, hecho el 3 de octubre de 2026: la copia duplicada ya no está.** Las carpetas
> `facsimil/1757`, `/1772` y `/1804` repetían, con la extensión rota «`.jg`», las mismas **28
> planas** que `facsimil/ejecutoria-*` —10,8 MB—. **Se volvió a verificar por md5 antes de
> borrar** —emparejando `…-NN.jg` con `pNN.jpg`, que es como se corresponden—: **las 28, copia
> byte a byte**. Se comprobó además que **nada del proyecto apuntaba a ellas** salvo la propia
> ficha de las ejecutorias, que se ha corregido. En el repositorio **ya no queda ningún `.jg`**.

---

## 1. Archivos y fondos documentales

| Fuente | Signatura / edición | Qué hay guardado | Dónde |
|---|---|---|---|
| **Diezmos del conde-duque, 1694** | AHNOB, `OSUNA, C.466, D.89-90` | ★★★ **Las 68 imágenes completas**: el original de 1694 (D.89) y la copia de 1842 cotejada judicialmente en 1848 (D.90) | [`osuna-astorga/facsimil/c466-d89-d90-diezmos-1694/`](01-fuentes-primarias/osuna-astorga/facsimil/c466-d89-d90-diezmos-1694/) |
| **Cartas de los obispos de Astorga** | AHNOB, `OSUNA, CT.271, D.16-35` | Las **42 imágenes**, entre ellas el D.21, la carta de la ermita de 1756 | [`osuna-astorga/facsimil/ct271-d16-35-obispos-astorga/`](01-fuentes-primarias/osuna-astorga/facsimil/ct271-d16-35-obispos-astorga/) |
| **Dezmeros del señorío** | AHNOB, `OSUNA, C.426, D.135` (1561 `[?]` / 1565 `[?]`) | Las **19 imágenes**; el asiento de «Colinas» está en el folio 8 | [`dezmeros-benavente/facsimil/`](01-fuentes-primarias/dezmeros-benavente/facsimil/) |
| **Ejecutorias de la Chancillería** | ARCHV, Registro de Ejecutorias, 1757 · 1772 · 1804 | ★ **Las 28 planas**, ahora completas y separadas por pleito | [`ejecutorias-chancilleria/facsimil/`](01-fuentes-primarias/ejecutorias-chancilleria/facsimil/) |
| **Catastro de Ensenada** | AGS, Respuestas Generales, libro 654, ff. 368-407 | **40 imágenes**: las cuarenta respuestas | [`catastro-ensenada-1752/`](01-fuentes-primarias/catastro-ensenada-1752/) |
| **Sellos municipales de 1876** | AHN, `SIGIL-TINTA_ZAMORA, 20, N.31` | 5 imágenes: los sellos y la carta que los acompaña | [`sello-1876/`](01-fuentes-primarias/sello-1876/) |

## 2. Censos y fuentes impresas de época

| Fuente | Edición | Qué hay guardado | Dónde |
|---|---|---|---|
| **Censo de Aranda (1768-69)** | INE, facsímil, tomos I (694 pp.) y II (478 pp.) | Los **dos tomos enteros**, 118 MB, más 11 recortes de asientos | [`censo-aranda-1768/facsimil/`](01-fuentes-primarias/censo-aranda-1768/facsimil/) |
| **Censo de Castilla de 1591** | INE, *Vecindario*, 852 pp. | El **tomo entero**, más 6 recortes | [`censo-1591/facsimil/`](01-fuentes-primarias/censo-1591/facsimil/) |
| **Censo de Floridablanca (1787)** | INE, tomo III, encuadernado en dos volúmenes | Los **dos volúmenes**, 106 MB; el de la **Submeseta Norte** es el que trae Zamora | [`censo-floridablanca-1787/facsimil/`](01-fuentes-primarias/censo-floridablanca-1787/facsimil/) |
| **Censo de Pecheros (1528)** | INE, tomos I (426 pp.) y II (530 pp.) | Los **dos tomos** | [`censo-pecheros-1528/facsimil/`](01-fuentes-primarias/censo-pecheros-1528/facsimil/) |
| **Miñano (1826-1829)** | DIGIBUG, Universidad de Granada, tomo III | El **tomo entero**, 209 pp. ⚠️ **sin capa de texto**: sólo se lee a imagen | [`minano-1826/facsimil/`](01-fuentes-primarias/minano-1826/facsimil/) |
| **Madoz (1847)** | Tomo VI, p. 521 | 7 imágenes de la plana y sus detalles | [`madoz-1847/`](01-fuentes-primarias/madoz-1847/) |

## 3. Boletines oficiales

| Fuente | Qué hay guardado | Dónde |
|---|---|---|
| **Gazeta y BOE, 1857-1976** | **17 PDF**, de la desamortización de los propios (1857-1889) a la concentración parcelaria. ⚠️ Los cinco últimos —escalafón de 1894, caminos de 1905, juzgados de 1945, unidad mínima de 1958 y escuelas de 1959— se descargaron el **26-IX-2026**: estaban leídos y citados, pero el PDF no se había guardado | [`boe-gazeta/facsimil/`](01-fuentes-primarias/boe-gazeta/facsimil/) |
| **Decreto 354/1972** | El BOE núm. 45 con la incorporación a Quiruelas | [`incorporacion-1972/`](01-fuentes-primarias/incorporacion-1972/) |
| **INE, metodología** | *Alteraciones de los municipios en los Censos desde 1842*, 14 pp. — la que descalifica el 132 de 1842 | [`03-archivos/`](03-archivos/) |

## 4. Cartografía

| Fuente | Qué hay guardado | Dónde |
|---|---|---|
| **Catastro, servicio INSPIRE** | Los **GML de parcelario y zonificación** de tres términos, con sus metadatos | [`04-cartografia/catastro-inspire/`](04-cartografia/catastro-inspire/) |
| **IGN histórico (MTN50, planimetrías)** | 8 rásteres, ya georreferenciados por venir de WMS | [`04-cartografia/ign-historico/`](04-cartografia/ign-historico/) |
| **Vuelos 1956-57, 1973-86 y 2023** | 5 ortofotos del término con el límite superpuesto | [`04-cartografia/vuelos-historicos/`](04-cartografia/vuelos-historicos/) |
| **Concentración parcelaria (IRYDA)** | Recorte de la hoja 3, «El Valle» | [`04-cartografia/concentracion-parcelaria-1975-77/`](04-cartografia/concentracion-parcelaria-1975-77/) |

> ✅ **El cabo suelto del punto 4, atado el 1 de octubre de 2026** (`TAR-13`). Los tres códigos
> están identificados, y el nombre lo dan **los propios metadatos INSPIRE** de cada descarga
> —`A.ES.SDGC.CP.MD..<código>.xml`, campo `gmd:title`—:
>
> | Código DGC | Término | Qué pinta aquí |
> |---|---|---|
> | **49189** | **Quiruelas de Vidriales** (INE 49171) | **Contiene el término de Colinas**: polígonos rústicos 004 y 005 |
> | **49285** | **Villanázar** | **Vecino por el sureste**: comparte **3.729 m** con el contorno de Colinas, el 23 % de su perímetro |
> | **49151** | **Navianos de Valverde** | **No toca a Colinas**: su borde norte se queda a **1.104 m** al sur. Se bajó para el barrido de parajes de la zona, no por vecindad |
>
> Las dos últimas cifras están medidas, no supuestas →
> [`limite-del-termino.md`](04-cartografia/limite-del-termino.md), «¿Y quién hay al otro lado?».
> ⚠️ **Los códigos de la Dirección General del Catastro no son los del INE** —Quiruelas es 49189
> para el Catastro y 49171 para el INE—, así que al citar hay que decir de cuál se habla. Los del
> INE de Villanázar y Navianos **no se han comprobado** y aquí no se dan.

## 5. Bibliografía

**27 ficheros, 55 MB** en [`02-bibliografia/`](02-bibliografia/): los artículos de *Brigecio*
descargados, los dos del Anuario de 1993, los tres de heráldica comarcal y los dos de Riesco Chueca.

---

## Lo que sigue sin estar, y hay que pedir

- **Los seis pleitos civiles** de la Chancillería —**no digitalizados**—, incluido el del caño del
  Calero (1600-1608 `[?]`) y el de Martín Alonso (1551).
- **Las cuatro unidades de `DIVERSOS-MESTA`** (vías pecuarias), tampoco digitalizadas.
- **Los libros maestros o Respuestas Particulares** del Catastro de Ensenada (frente nº 1).
- **Los libros sacramentales, de fábrica y de visita** del Archivo Diocesano de Astorga
  (frente nº 8).
- **`FC-CAUSA_GENERAL, 1318, Exp.4`** (139 imágenes): está digitalizado, pero el proyecto **no lo ha
  abierto** a la espera de fijar un criterio para material sensible.

---

*Índice levantado el 23 de septiembre de 2026, al incorporar al proyecto las fuentes que hasta
entonces sólo existían en el directorio temporal de trabajo.*
