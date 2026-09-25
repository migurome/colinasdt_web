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
