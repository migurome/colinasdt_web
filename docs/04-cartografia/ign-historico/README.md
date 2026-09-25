# Cartografía histórica del IGN, georreferenciada — frente nº 14

> **Estado: ✅ VÍA ABIERTA Y PROBADA.** 22 de septiembre de 2026. El Instituto Geográfico Nacional
> sirve su cartografía histórica por **WMS**, y eso resuelve de un golpe el problema que tenía este
> proyecto: **las imágenes que se descargan así ya vienen georreferenciadas**, porque el encuadre lo
> fija uno en la petición.

---

## El método, para poder repetirlo

Una petición `GetMap` a un WMS devuelve exactamente el rectángulo geográfico que se le pide. No hay
que calcar ni ajustar puntos de control: **el `bbox` de la petición *es* la georreferenciación**.

```
https://www.ign.es/wms/primera-edicion-mtn?service=WMS&version=1.3.0&request=GetMap
  &layers=MTN50            ← o MTN25, o catastrones
  &crs=EPSG:4326
  &bbox=<latmin>,<lonmin>,<latmax>,<lonmax>     ← ojo: en 1.3.0 va lat primero
  &width=2400&height=1613&format=image/png
```

Y para las **planimetrías** (minutas de campo, 1:25.000):

```
https://www.ign.es/wms/minutas-cartograficas?...&layers=Minutas&...
```

De ahí, pasar de píxel a coordenada es una regla de tres:

```
lon = lonmin + (x / ancho)  × (lonmax − lonmin)
lat = latmax − (y / alto)   × (latmax − latmin)
```

> **Comprobación del método.** Situando «Los Castilletes» y «La Borunda» sobre el MTN50 por este
> procedimiento y comparándolos con sus nodos en OpenStreetMap, el error es de **unos 300-400 m**,
> que es lo que cabe esperar de leer a ojo la posición de un rótulo. **Sirve para decir «está
> aquí», no para dar coordenadas.** Para precisión hay que digitalizar sobre el ráster, no estimar.

---

## Lo descargado

Los ficheros llevan el `bbox` en el nombre, en el orden `latmin_lonmin_latmax_lonmax`, para que
cualquiera pueda reconstruir la georreferenciación sin más datos.

| Fichero | Capa | Cubre |
|---|---|---|
| `mtn50-1ed_41.985_-5.855_42.035_-5.765.jpg` | MTN50 1.ª ed. | Vista general: de Quiruelas a Manganeses y de Colinas a Aguilar de Tera |
| `minuta_41.985_-5.855_42.035_-5.765.jpg` | Planimetrías | El mismo encuadre, en minuta de campo |
| `mtn50-1ed_termino_41.995_-5.835_42.020_-5.785.jpg` | MTN50 1.ª ed. | El término, a ~1,7 m/píxel |
| `mtn50-1ed_arroyo-san-juan_42.0035_-5.8330_42.0135_-5.8160.jpg` | MTN50 1.ª ed. | El arroyo de San Juan y el límite con Quiruelas |
| `mtn50-1ed_camino-al-molino_41.9920_-5.8430_42.0020_-5.8250.jpg` | MTN50 1.ª ed. | El camino al Molino y el meandro del Tera |
| `mtn50-1ed_pobladura_41.9440_-5.8500_41.9660_-5.8150.jpg` | MTN50 1.ª ed. | ★ «**El Raso Pobladura**», en Navianos de Valverde: el despoblado de **Pobladura de Trasmonte** |
| `mtn50-1ed_pobladura_rotulo.jpg` | *(recorte)* | El rótulo, ampliado, con el punto del nomenclátor |
| `comprobacion_limite-catastral-sobre-mtn50.jpg` | *(montaje)* | El límite catastral del término sobre la línea de mojones |

---

## 🚨 Y lo primero es corregir algo que escribí esta misma tarde

Hace unas horas quedó escrito en [`04-cartografia`](../README.md) que **«la microtoponimia de este
término no existe en la cartografía oficial»** y que los planos de la concentración de 1975-77 son
«hoy por hoy, **la única**» fuente para ella.

**Era falso, y por el mismo error de siempre: dar por comprobado lo que sólo se había comprobado en
una fuente.** Se consultó el **nomenclátor moderno** del IGN —que efectivamente no los trae— y se
concluyó de ahí que no estaban en ninguna cartografía oficial. Están: **el MTN50 de primera edición
y las planimetrías los rotulan a decenas.**

Lo correcto es:

- El **Nomenclátor Geográfico Básico** (el catálogo *actual* de topónimos) **no registra** ni
  Castroferrol ni los pagos de Colinas. Eso sigue comprobado y sigue siendo significativo: son
  nombres **caídos del registro oficial vivo**.
- Pero **la cartografía histórica oficial sí los conserva**, y con dibujo del terreno alrededor.
- Y por tanto los planos de 1975-77 **no son la única fuente**: son **una de tres**, y la más
  moderna. Lo valioso es que las tres se pueden **cotejar entre sí**.

---

## Lo que aparece en estos mapas

### ★★★ 1. El «Arroyo de San Juan» existe, y está al oeste de Colinas

En el MTN50, entre Colinas y Quiruelas, corre un curso azul rotulado **dos veces** «**A.º de San
Juan**», en paralelo y al nordeste del «**A.º Almucera**». Va aproximadamente de
**42,010 N · −5,829 O** a **42,007 N · −5,822 O**, esto es **un kilómetro largo al ONO del casco**.

> **Por qué importa.** El paraje del monasterio se llama **San Juan-El Valle**, y hasta hoy ese
> nombre le llegaba al proyecto por **dos vías que no son cartográficas**: la tradición oral («el
> Convento de San Juan») y el rótulo del plano parcelario de 1977. Ahora hay **un tercer testimonio,
> independiente de los otros dos y anterior a ambos**: un topónimo *San Juan* dibujado por el
> Instituto Geográfico en el sitio correcto.
>
> ⚠️ **Lo que no prueba.** Que el arroyo se llame San Juan no dice nada sobre el monasterio: puede
> venir de la parroquia de San Juan Bautista, que está en el pueblo. **Refuerza el topónimo, no la
> identificación.**
>
> 🚨 **Y unas horas después apareció el matiz que faltaba.** Medido el arroyo contra el polígono del
> término —ya disponible, ver [`limite-del-termino.md`](../limite-del-termino.md)— **el A.º de San
> Juan corre del lado de Quiruelas**, fuera del término de Colinas, y la tierra que baña se llama en
> el parcelario «**Los Quiñones de la Hierba**». Además, **en las 1.141 parcelas del término de
> Colinas no hay ningún paraje llamado San Juan**: el pago se llama **El Valle** a secas
> → [`parajes-catastro.md`](../parajes-catastro.md), §3. Sigue siendo un tercer testimonio del
> topónimo; ya no se puede decir que esté *en* el término.

### ⚠️ 2. Hay un «El Valle» al este, y no es el nuestro

El MTN50 rotula «**El Valle**» hacia **42,001 N · −5,789 O**, es decir **1,6 km al ESE del casco**,
pegado a **Vecilla de Trasmonte** y junto al «Cº de Vecilla».

> **No es el paraje de San Juan-El Valle**, que está al oeste. *Valle* es de los topónimos más
> repetidos que existen, y esto es un aviso para todo el frente: **encontrar el nombre no es
> encontrar el sitio.** El ancla del paraje de Colinas es *San Juan*, no *El Valle*.

### ★★ 3. Un «Camino al Molino» que baja al Tera

Al suroeste del pueblo, el MTN50 rotula «**Cº al Molino**»: un camino que sale hacia el sur y muere
en un **meandro del Río Tera**, hacia **41,996 N · −5,835 O**. Al lado, el pago «**Merino**», y
enfrente «**Prado Arenales**» y «**El Pedazo**».

> El Catastro de 1752, respuesta 17.ª: «un **molino harinero** sito **en la orilla del río Tera** en
> término de este lugar, el que es **propio del concejo**». El proyecto tenía el molino documentado
> pero **sin sitio**. Un camino que se llama «al Molino» y termina en el río es **la mejor pista que
> ha aparecido**.
>
> ⚠️ **Pista, no localización.** Ni el nombre del camino fecha el molino, ni el MTN50 dibuja aquí
> edificio alguno. Para cerrarlo hacen falta el **vuelo americano de 1956-57** y, sobre todo, los
> **planos de procedencia** de la concentración.

### ★★ 4. Vías pecuarias, rotuladas

El MTN50 nombra, al nordeste del término, «**Vereda**», «**Vereda del ganado**» y «**Camino
Real**», además de «**Camino alto**» y «**Camino Zamorano**». En el callejero actual sobreviven
«Calle Vereda» y «Calle Cañada».

> **Esto conecta dos frentes.** El deslinde de **1129** nombra «*illam **veredam** quae discurrit de
> Castro Ferronio*» — una vía pecuaria saliendo del enclave. Ocho siglos después, el Instituto
> Geográfico sigue dibujando veredas por aquí. **No se afirma que sean la misma**; se afirma que el
> tipo de camino pervive y que hay dónde buscarlo.

### 5. La toponimia que los mapas conservan

Leídos sobre el MTN50 y la minuta, y ordenados por sector. **Ninguno lleva coordenada aquí a
propósito**: la lectura a ojo tiene 300-400 m de error, y este proyecto no publica cifras que no ha
medido bien.

- **Norte y nordeste:** Los Llanos · La Borunda · Los Castilletes · **Vallando** · A.º de Vallando ·
  Dehesa · Monte · Los Ballizares · Valmayor · Los Vivares · Saludes · El Redondillo · Casa ·
  Camino alto · Camino Real · Vereda del ganado
- **Centro y este:** El Lombo · La Capilla · Llanos · El Ganal · **El Valle** (el de Vecilla) ·
  Cº de Vecilla · Valle Morales
- **Sur y suroeste:** El Pedazo · Prado Arenales · Las Huergas · Merino · Cº al Molino ·
  Camino Zamorano · A.º Palero · Camino Nuevo · Río Tera
- **Oeste:** **A.º de San Juan** · A.º Almucera · Fornatejas · Las Eras · **Los Linares** ·
  Carretera (con los mojones K12 a K15)

> ⚠️ **Y la advertencia de siempre: este encuadre cubre cinco términos.** Quiruelas, Colinas,
> Vecilla, Villanázar y Manganeses. **La mayoría de esos nombres no son de Colinas.** Hasta que no
> haya polígono del término, esta lista es materia prima, no inventario.

### ★ 6. Divergencias de grafía que hay que resolver

| Fuente | Grafía |
|---|---|
| Planos de la concentración, 1975-77 | **Vallondo** |
| MTN50 de primera edición | **Vallando** |
| **Catastro** (66 parcelas, 74,89 ha) | **VALLONDO** ✅ |

| Fuente | Grafía |
|---|---|
| Planos de la concentración, 1975-77 | **Valancinas** |
| **Catastro** (22 parcelas, 19,85 ha) | **VALANCINAS** ✅ |
| OpenStreetMap | *Las Valencinas* |

> ✅ **RESUELTAS las dos el mismo día**, y no releyendo el plano sino preguntándole al parcelario:
> el Catastro registra **VALLONDO** y **VALANCINAS**, que es lo que leían los planos de 1975-77.
> El MTN50 y OpenStreetMap son, cada uno en un caso, la fuente que se desvía →
> [`parajes-catastro.md`](../parajes-catastro.md), §2.

---

## ★★★ 7. Lo que estos mapas pueden dar y todavía no hemos sacado: el término

**El MTN50 de primera edición es anterior a 1972**, cuando Colinas era municipio. Por tanto
**dibuja su límite jurisdiccional**, y lo hace del modo habitual: una línea de trazos con **cruces
(+) en los mojones**. Esas cruces se ven con claridad en las ampliaciones —a lo largo del arroyo de
San Juan, al nordeste hacia Los Castilletes, y al sur cruzando el Tera—, y los rótulos «Vidriales»
y «Trasmonte» caen a uno y otro lado de la línea, confirmando cuál es cuál.

> **Ahí está el polígono del término**, que es lo que bloquea medio frente de cartografía: sin él no
> se puede decidir cuáles de los 72 parajes de OpenStreetMap son de Colinas, ni comprobar la
> superficie de 1.043 ha, ni contrastar la cabida de 1752.
>
> **Lo que falta es digitalizarlo**: seguir la línea de mojones sobre el ráster y convertir píxeles a
> coordenadas con la fórmula de arriba. **Es trabajo, no adquisición**, y ya no depende de nadie.

> ✅ **RESUELTO el mismo día, y por una puerta mejor: no hubo que calcar nada.** Los **polígonos
> catastrales de rústica 004 y 005** son el término de Colinas, y su contorno —que sale con
> precisión métrica de la descarga INSPIRE del Catastro— **cae encima de esta línea de trazos y pasa
> por estas mismas cruces**. La comprobación, en imagen, es
> [`comprobacion_limite-catastral-sobre-mtn50.jpg`](comprobacion_limite-catastral-sobre-mtn50.jpg);
> el término mide **1.026,6 ha** y **16.345 m** de perímetro →
> [`limite-del-termino.md`](../limite-del-termino.md).
>
> **Lo que aporta esta ficha sigue en pie, y es lo que da validez a aquello:** sin esta línea de
> mojones anterior a 1972, el polígono catastral sería sólo un polígono catastral. Es el MTN50 el
> que certifica que esa raya era jurisdicción.

---

## Nota de reutilización

Cartografía del **Instituto Geográfico Nacional** (MTN50 de primera edición y planimetrías),
servida por sus WMS públicos. Al usarla debe acreditarse el IGN como productor. Las imágenes de esta
carpeta son **peticiones a esos servicios**, no ficheros redistribuidos: cualquiera puede
regenerarlas con la URL de arriba y el `bbox` del nombre del fichero.

---

*Ficha redactada el 22 de septiembre de 2026.*
