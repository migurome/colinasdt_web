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

## v0.9 — 25 de septiembre de 2026
### Fuera el raíl del teléfono

- **Se retira la barra de desplazamiento lateral** —la línea del tiempo que hacía de scroll en el
  móvil, con sus marcas de evento y su arrastre—. La lámina recupera los 28 píxeles que tenía
  reservados a la derecha.
- **No se oculta: se quita del documento.** Era un `role="slider"` con foco y captura de puntero;
  un mando invisible que sigue escuchando estorba más que la barra que se quería quitar.
- **El código se queda entero**, detrás de `RAIL_VISIBLE` en `p3-data.js`. Ponerlo en `true`
  devuelve la escala, las marcas por grado de prueba, el arrastre y el rótulo del año.
- De paso, el filtro deja de depender de que el raíl exista: antes recorría sus marcas sin
  comprobar que estuvieran.

> ⚠️ **Queda sin sustituto la navegación rápida.** Con 33 entradas, ir de una punta a otra es
> ahora todo deslizamiento. Los filtros por grado de prueba de la portada siguen acortando la
> lista, pero no es lo mismo.

> ⚠️ **Estado del contenido, sin cambios**: faltan por incorporar a la línea **1073, 1526, 1591,
> 1694, 1756 y 1768**.

---

## v0.8 — 25 de septiembre de 2026
### Cada entrada, con su tratamiento

- **Las siete entradas que llevan imagen tienen ya tratamiento elegido**, una por una: III milenio
  a.C., 1006 y 1752 a **portada**; 1876 a **viñeta**; siglos IV–V, siglos XI–XIII y 1993 en
  **caja**.
- **Cuando la imagen pasa a ser el fondo pierde su marco, así que su pie baja al texto de la
  lámina.** La signatura del Catastro, el número de figura o la leyenda del sello siguen escritos
  en todos los tratamientos: la referencia no se pierde por cambiar de presentación.
- El tratamiento deja de ser cosa sólo de la ilustración. Con `tr` se elige para cualquier imagen,
  y con `pos` se ajusta el encuadre si el de por defecto no sirve.
- **Un facsímil es papel claro, no un dibujo en penumbra.** Lleva más velo para que el texto se
  lea encima, y en viñeta el pie se queda en tinta normal, porque sobre papel claro la tinta clara
  no se ve.
- En viñeta **el texto se para antes de llegar al dibujo**: lo que no quepa abre lámina nueva en
  vez de escribirse encima.

> ⚠️ **Estado del contenido, sin cambios**: faltan por incorporar a la línea **1073, 1526, 1591,
> 1694, 1756 y 1768**.

---

## v0.7 — 25 de septiembre de 2026
### La ilustración entra en la lámina

- **Una ilustración no es un facsímil, y ahora los datos lo distinguen.** Una entrada puede llevar
  `img` —reproducción documental— o `ilu` —ilustración interpretada, con `gen`: el modelo y la
  fecha, que son su firma—. Cualquier lámina que lleve una `ilu` **escribe «ilustración
  interpretada» en el pie**, la vea quien la vea: en un feed una lámina se comparte suelta.
- **1006 estrena ilustración.** La comunidad de hermanos y hermanas ante la iglesia de San
  Salvador, en tratamiento de portada: ocupa la lámina entera y el texto va escrito encima.
- **Cuatro tratamientos disponibles**, elegibles entrada por entrada con el campo `tr`: `caja`,
  `vineta`, `aguada` y `portada`. Quedan los cuatro aunque de momento sólo se use uno.
- El grano del papel cae también **sobre el dibujo**. El de `body::before` va detrás del
  contenido, así que se repite dentro de la capa de la ilustración: es lo que hace que parezca
  impresa en la hoja y no pegada encima.
- ⚠️ **Las seis imágenes que ya había siguen en caja.** Son dibujos de excavación, una planta, una
  página del Catastro y la impronta del sello de 1876: documentos. Recortar un facsímil a sangre y
  escribir encima lo convierte en decoración y lo hace ilegible.
- El prompt, el modelo y las licencias tomadas quedan escritos en
  [ilustraciones-generadas.md](docs/06-identidad-simbolos/ilustraciones-generadas.md). En una
  imagen generada son lo único verificable que tiene.

> ⚠️ **Estado del contenido, sin cambios**: faltan por incorporar a la línea **1073, 1526, 1591,
> 1694, 1756 y 1768**.

---

## v0.6 — 25 de septiembre de 2026
### Marcas más finas en el raíl

- **Las marcas de evento de la línea de desplazamiento del teléfono se acortan.** Medían 16 de
  los 28 de ancho del raíl —ocho veces el grosor del trazo— y le comían el protagonismo a la
  propia línea. Pasan a 9, centradas sobre el trazo: se ven sin taparlo.

> ⚠️ **Estado del contenido, sin cambios**: faltan por incorporar a la línea **1073, 1526, 1591,
> 1694, 1756 y 1768**.

---

## v0.5 — 25 de septiembre de 2026
### Una entrada, una lámina

- **Las láminas se colapsan en una sola.** Cada campo de la entrada —texto, cita, imagen, cautela,
  fuente— se llevaba antes una pantalla entera aunque fuese una línea: había entradas con cuatro
  láminas casi vacías. Ahora **todos los bloques van juntos mientras quepan**, y sólo lo que
  desborda abre la lámina siguiente. Con 33 entradas que llevan firma, eso eliminaba por sí solo
  una lámina en cada una.
- El reparto **no se calcula, se mide**: se van añadiendo bloques hasta que la lámina desborda. El
  texto se parte por frases; la cita, la imagen, la cautela y la fuente pasan enteras.
- El partidor de frases **respeta el marcado**: no corta dentro de una etiqueta ni con un realce
  abierto, así que los destacados del texto dejan de perderse al repartir.
- ⚠️ **El sello de grado de prueba sale una sola vez**, arriba a la derecha de la primera lámina.
  Antes se repetía en todas y, además, junto a la fuente. Esto deshace en parte lo decidido en la
  0.1 —que el sello viajase en cada lámina, porque una lámina se comparte suelta—; al ir la entrada
  entera en una sola lámina, el sello sigue yendo con ella.
- La fuente completa va ahora dentro de la lámina, así que **el pie deja de repetirla** donde ya
  está escrita.
- El reparto se rehace también **al cambiar de filtro**: una entrada oculta no se puede medir.

> ⚠️ **Estado del contenido, sin cambios**: faltan por incorporar a la línea **1073, 1526, 1591,
> 1694, 1756 y 1768**.

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
