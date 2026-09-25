# Versiones

Control de cambios de la web de Colinas de Trasmonte.

> **Dónde vive cada cosa.** El número de versión y este mismo registro están **en los datos de la
> web**, en [`web/src/parts/p3-data.js`](web/src/parts/p3-data.js) —constantes `VERSION` y
> `VERSIONES`—, y se muestran en el apartado «Versiones» de la página. Este fichero es su copia
> para el repositorio.
>
> **Para ocultar el apartado en la web** —cuando esté asentada— basta poner
> `VERSIONES_VISIBLE = false` en ese mismo fichero: desaparecen la sección y su enlace en el
> índice, el sello de la portada deja de ser un enlace, y el registro sigue aquí.

---

## v0.4 — 25 de septiembre de 2026
### La lámina lleva ya la entrada entera

- ⚠️ **Corregido: el menú se quedaba abierto.** La regla `.menu-lista{display:grid}` le ganaba en
  especificidad al `[hidden]` que lo oculta, así que la lista se veía sin haberla pulsado. Ahora
  sólo se despliega al pulsar las tres rayas.
- **La primera lámina de cada entrada trae ya la fecha, el título y el texto.** Antes la fecha y el
  título iban en una lámina y la prosa en la siguiente.
- **Al carrusel pasa sólo lo que no cabe**: la cita, la imagen, la cautela y la fuente. Y si el
  texto no entra en la pantalla, **se parte por frases** y continúa en la lámina siguiente, con un
  «sigue» en el pie y unos puntos suspensivos al empezar.
- El reparto **se mide sobre la pantalla real**, no se calcula a ojo: se rehace al girar el
  teléfono y al terminar de cargar EB Garamond, que cambia las medidas del texto.
- Los puntos del carrusel se recalculan después del reparto, porque el número de láminas ya no se
  sabe de antemano.

> ⚠️ **Estado del contenido, sin cambios**: faltan por incorporar a la línea **1073, 1526, 1591,
> 1694, 1756 y 1768**.

---

## v0.3 — 25 de septiembre de 2026
### En el teléfono, la portada es la primera lámina

- **El feed ocupa la pantalla entera en el teléfono, y empieza en la portada.** La primera lámina es
  el nombre del pueblo con los filtros de grado de prueba debajo; deslizando al lado está la
  presentación. Al deslizar hacia arriba, la pantalla pasa a ser sólo la línea temporal: no queda
  nada del documento detrás.
- **El menú queda en tres rayas**, sin la palabra «Secciones», a cualquier ancho. El texto se
  conserva oculto para el lector de pantalla, que si no se queda sin nombre de botón.
- **Fuera el botón de versión** de la portada. El registro sigue accesible desde el menú.
- **Fuera la leyenda** de cómo leer las marcas, de momento. Cada entrada sigue llevando su marcador
  con el nombre del grado escrito al lado.
- **Las fuentes y créditos pasan a ser una sección del menú.** Con el feed a pantalla completa, el
  pie de página dejaba de ser alcanzable desde el teléfono.

> ⚠️ **Estado del contenido, sin cambios**: faltan por incorporar a la línea **1073, 1526, 1591,
> 1694, 1756 y 1768**.

---

## v0.2 — 25 de septiembre de 2026
### La línea temporal, sola; el resto, a un clic

- **La página principal es ahora sólo la línea temporal.** El término, la gente, la materia para el
  emblema, lo que falta y el propio registro de versiones **ya no se recorren al bajar**: hay que
  pedirlos expresamente.
- **Menú fijo en la esquina superior**, presente en toda la web. En teléfono se queda arriba en la
  primera pantalla y **se retira en cuanto se empieza a recorrer el feed**, para no tapar la
  lectura; reaparece al volver al principio.
- Cada sección secundaria se abre como una **vista propia**, con su enlace de vuelta a la línea. La
  dirección del navegador la recuerda —`#termino`, `#gente`, `#emblema`, `#falta`, `#versiones`—,
  así que se puede enlazar y el botón «atrás» funciona.
- **Fuera la ficha de datos de la portada** —provincia, municipio, diócesis, superficie y
  habitantes—: eran cinco cifras compitiendo con la entrada al relato.

> ⚠️ **Estado del contenido, sin cambios respecto a la 0.1**: faltan por incorporar a la línea
> **1073, 1526, 1591, 1694, 1756 y 1768**.

---

## v0.1 — 25 de septiembre de 2026
### Una sola página, con el estilo decidido

- **El estilo aprobado, aplicado a la web entera.** Papel antiguo, **una sola tipografía**
  —EB Garamond en cinco registros: título, texto, rótulo, nota y fuente— y las **tintas con
  código**: tres rojos que significan cosas distintas —almagre para los titulares, teja para la
  línea y los años, granza para los realces— más **añil** y **oliva** para la materia. Sin modo
  oscuro, como se decidió el 23 de septiembre.
- **Todo en una sola página.** Se funden en una las cuatro direcciones que había: la portada, la
  línea temporal, el prototipo de estilo y la prueba de lectura en móvil.
- **La línea temporal se lee como un feed en el teléfono.** Una entrada por pantalla, lo accesorio
  en **carrusel lateral**, y la propia línea del tiempo haciendo de **barra de desplazamiento**: se
  arrastra y salta a la entrada más cercana en el tiempo. En pantalla grande sigue siendo un
  documento, sin cambios de lectura.
- **Las láminas del carrusel no se inventan**: cada una es un campo que la entrada ya tenía
  —portada, cita, relato, imagen, cautela y fuente—. Por eso una entrada de texto simple tiene tres
  y se ajusta a pantalla, y otra con cita e imagen tiene seis.
- **El sello de prueba y la fuente viajan en cada lámina**, no sólo en la portada de la entrada.
  En un feed una lámina se ve suelta y se comparte suelta, y una propuesta no puede circular como
  si fuera un hecho documentado.
- **El trazo rojo se construye al bajar**, y en los silencios documentales va punteado.
- **Se estrena el control de versiones**: sello en la portada y este apartado.
- El documento se emite ya con `<!doctype html>` y `viewport-fit=cover`; antes se servía en modo
  *quirks*.
- El despliegue **comprueba que `index.html` coincide con sus piezas** antes de publicar, para que
  no se suba una versión montada a mano.

> ⚠️ **Estado del contenido: 22 de septiembre de 2026.** Faltan por incorporar a la línea **1073,
> 1526, 1591, 1694, 1756 y 1768**, que la investigación ya tiene documentados y la web todavía no.
> → [estado del arte](docs/estado-del-arte.md), §7.

---

## Cómo se sube de versión

1. Se añade la entrada nueva **arriba** del array `VERSIONES` en `p3-data.js` y se cambia `VERSION`.
2. Se copia aquí la misma entrada.
3. `sh web/build.sh` para remontar `index.html`.
4. Commit, y etiqueta: `git tag -a v0.2 -m "…"` y `git push --tags`.

**Criterio de numeración**, mientras la web esté en construcción: la **segunda cifra** sube con cada
tanda de cambios publicada; la **primera** pasará a 1.0 cuando el contenido esté al día con la
investigación y el emblema tenga propuesta.
