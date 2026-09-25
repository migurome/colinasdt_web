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

## v0.14 — 25 de septiembre de 2026
### Las fuentes, a su propia página

- **La firma de archivo sale de la lámina del teléfono.** Ocupaba media pantalla en cada entrada.
  Vive ahora entera en **«Las fuentes»**, una página propia del menú, agrupada por eras y con el
  grado de prueba de cada una: **sesenta entradas, sesenta firmas**. No se pierde ninguna por
  haber cambiado de sitio.
- ⚠️ **Lo que no sale de la lámina es el sello del grado de prueba**, ni la cautela de que un
  dibujo no es prueba. Esto deshace en parte lo decidido en la 0.1 —que la fuente viajase en cada
  lámina—, y conviene decir por qué se puede: lo que impedía que una propuesta circulase como un
  hecho no era la signatura, era **el sello**. Y el sello sigue arriba a la derecha.
- En pantalla grande, **la línea sigue llevando su fuente junto a cada entrada**. Ahí es un
  documento y la firma está en su sitio; el problema era el feed.
- **Las sesenta entradas tienen ya imagen.** Cincuenta y tres son **provisionales**, y lo dicen en
  el pie de la lámina. Son tramas abstractas **sin una sola letra**, para que no puedan
  confundirse con un facsímil: el **color es la era** —de la paleta de «Materia para un
  emblema»— y la **trama es el grado de prueba**. Las tres tramas —pastilla, roseta y
  retícula— no se inventan: son las tres únicas ornamentaciones que ha devuelto el suelo de
  Colinas.
- Las genera [`web/gen-dummies.py`](web/gen-dummies.py) y se sustituyen una a una: basta poner la
  imagen buena en su sitio.
- El antiguo «Fuentes y créditos» pasa a llamarse **«Créditos y permisos»**, para no confundirse
  con la página nueva.

---

## v0.13 — 25 de septiembre de 2026
### Saltar de un tiempo a otro

- **Las cinco eras, en el menú.** Quitado el raíl en la 0.9 y con la línea en sesenta entradas,
  recorrer el feed a pulso había dejado de ser navegar. Ahora se salta a cualquiera de los cinco
  tiempos —Antes del nombre, Castroferrol, Lugar del conde de Benavente, El ayuntamiento, La
  pedanía— desde las tres rayas. **No ocupa pantalla y no compite con el gesto de «atrás»**, que
  era la pega del raíl.
- Funciona igual en los dos modos: en el teléfono lleva a la primera entrada de esa era; en el
  ordenador baja al separador del documento.
- Si un filtro por grado de prueba deja una era sin entradas visibles, el salto **cae en la
  siguiente que sí tenga**, en lugar de quedarse sin hacer nada.
- Los nombres y los tramos salen de los propios datos, así que si cambian las eras el menú cambia
  solo.
- ⚠️ **El menú vuelve al retroceder.** Seguía retirándose al avanzar por el feed, como se pidió
  en la 0.2 —para no tapar la lectura—, pero eso dejaba la navegación alcanzable sólo desde la
  primera pantalla. Ahora se retira al avanzar y **reaparece en cuanto se desliza hacia atrás**.

> **Sigue pendiente**: 53 de las 60 entradas no tienen imagen. Es el siguiente trabajo largo.

---

## v0.12 — 25 de septiembre de 2026
### La línea, al día con la investigación

Tercera y última tanda. De **48 entradas a 60** —la jornada empezó con 33—.

- **1842: la cifra que el propio INE desaconseja.** Los 132 habitantes salen del Censo de la
  Matrícula Catastral, que el INE describe como hecho «sin rigor, por el procedimiento de
  imputaciones» y del que dice que «no aporta ningún dato numérico de confianza». Documentado que
  la cifra existe; documentado que no vale como medición. Con la cautela de que **el hoyo aún puede
  ser real**: en vecinos la caída es igual de clara.
- **El siglo XIX, con nombres y con caminos.** La desamortización vendiendo los bienes de propios
  (1860-1889); las vías pecuarias y la Cañada Real Sanabresa (1863 y 1895); los distritos con los
  que se votaba (1870 y 1877); el maestro **Valentín Rodríguez** (1894); y el plan de caminos
  vecinales de 1905, que nombra el itinerario **«De Colinas de Trasmonte al Cubo de Benavente»**:
  cabecera Colinas, no los pueblos mayores que atraviesa.
- **1945: al Juzgado Comarcal de Santibáñez de Tera, con Villanázar y sin Quiruelas.** Veintisiete
  años antes de que sea Quiruelas quien lo absorba.
- **1956-57**, el vuelo americano retratando el minifundio; **1958-59**, la unidad mínima de
  cultivo y la escuela mixta «servida por Maestra».
- **1971: setenta y dos nombres por una carretera.** Los titulares de fincas expropiadas por la
  C-620, convocados en el Ayuntamiento de Colinas. Es la lista de vecinos más larga que el
  proyecto tiene —con la cautela de que los nombres vienen de lectura automática del boletín—.
- **1972: el archivo se va a Quiruelas.** Cuatro meses después de la incorporación se suprime el
  Juzgado de Paz y su documentación pasa al de Quiruelas. Es adónde fueron a parar los papeles.
- 🚨 **1986: la figura que a Colinas le falta.** Catorce pueblos de Zamora se inscriben como
  entidad local menor entre 1986 y 2003; Colinas no, y Quiruelas no tiene ninguna. **Vecilla de
  Trasmonte**, a 1.673 metros y del mismo apellido toponímico, se inscribe en 1986. **Aguilar de
  Tera**, confrontante y más pequeño que Colinas en 1768, en 2003. Es lo que decide si un emblema
  de Colinas puede ser oficial por sí mismo o se queda en emblema vecinal.
- Se completan de paso tres entradas que ya estaban: el nombramiento del cura **D. Pedro Ramos** en
  la de 1857, el decreto de ordenación rural de **1968** en la de la concentración, y el plan de
  obras de **1976** en la del acuerdo de 1977.

> **Lo que falta ahora es otra cosa.** Ya no es material investigado sin publicar, sino
> **investigación por hacer**: el pleito de la Chancillería de 1694, el expediente de vías
> pecuarias del AHN —no digitalizado— y qué se vendió y a quién en la desamortización. Están en
> `docs/03-archivos/material-pendiente.tsv`.

---

## v0.11 — 25 de septiembre de 2026
### El pleito de los diezmos, entero

Segunda tanda. De **39 entradas a 48**.

- **1693-1694: el pleito de los diezmos, contado de principio a fin.** El Nuncio libra mandamiento
  y el provisor de Astorga no lo cumple; desde Madrid, D. Federico Caccia `[?]` le da **veinticuatro
  horas** so pena de excomunión mayor y manda denunciarle desde los púlpitos; el cura de Colinas
  apela; y en mayo, recorriendo la comarca, se descubre que **el tribunal que firmaba el despacho
  estaba inhibido**. Doce curas quedan con nombre y respuesta, y al menos uno gana Real Provisión
  en la Chancillería.
- **1706: un pago llamado San Pelayo**, el mismo nombre que un mojón del deslinde de 1129 —con la
  cautela escrita al lado: es advocación corriente de esta ribera, así que ninguno de los tres
  testimonios prueba nada sobre los otros—. El mismo apeo trata a Pobladura y a Colinas como dos
  vecinos distintos de Vecilla.
- **1757: la cabeza eclesiástica de tres valles vive aquí.** Don Francisco Escudero,
  «Cura del Lugar de Colinas y Arcipreste del Arciprestazgo de Vidriales, Tera y Valverde». Con
  las otras dos ejecutorias: los tres aniversarios de la parroquia (1772) y la casa vinculada de
  Domingo Bernardo (1804).
- **Pobladura de Trasmonte desaparece dos veces.** «Despoblado por la peste» anotado de mano del
  escribano en 1526; vivo otra vez en 1591 con once vecinos; ausente del Censo de Aranda, donde el
  obispado cuenta cinco Pobladuras y ninguna «de Trasmonte».
- **1848: por qué estos papeles existen.** La Casa de Osuna autentica ante un juzgado de Madrid sus
  títulos de 1694 sobre los diezmos de quince lugares, Colinas entre ellos, frente a la Hacienda
  Nacional. El diezmo estaba suprimido desde 1837: no es cobrar, es liquidar derechos. Y es la
  razón de que el legajo se copiara y hoy se pueda leer.

> **Las marcas `[?]` pasan de 3 a 13.** No se sabe menos que antes: ahora está escrito dónde la
> lectura es dudosa. Caccia, Torna[nus], Men[tero], Villageriz, «Bartolomé o bachiller», quién era
> vecino de dónde, y qué demonios es «la Salamanca Vieja».

> **Queda la tanda 3**: la cola administrativa de 1834 a 2003 —desamortización, vías pecuarias,
> distritos, escuela, vuelo americano y el Registro de Entidades Locales de 1986—.

---

## v0.10 — 25 de septiembre de 2026
### Seis entradas que cambian lo que la línea dice

Primera tanda del trabajo de poner la línea al día con la investigación. De **33 entradas a 39**.

- 🚨 **1073: Colinas aparece por su nombre.** «*uilla que dicunt Colinas, in riba de Teira*». Es
  la mención más antigua del pueblo que el proyecto conoce —**cuatrocientos setenta y ocho años**
  antes de Martín Alonso, que era lo que la línea tenía por primero—. Entra marcada **catalogada,
  sin leer**: la cita viene de un artículo, no del facsímil, y el diploma escribe «Colinas» a
  secas.
- **1526: veinticinco vecinos pecheros**, la medición de población más antigua. Y **1591:
  veintiocho vecinos**, que es exactamente la mediana de los 117 lugares de la provincia.
- **1694: el cura de Colinas apela.** Obedece por fórmula y no cumple, con el Nuncio amenazando de
  excomunión mayor al provisor de Astorga. Primera resistencia escrita de alguien de Colinas a una
  orden del señor.
- **1756: hay una ermita en el término**, con 200 reales al año retenidos para arreglarla.
- **1768: ciento catorce almas, contadas por el cura.** Al escribir «Parroquia de San Juan» de su
  mano, la advocación retrocede **setenta y nueve años** respecto a Madoz. Y en veintiuno de los
  veintitrés lugares del valle, varones más hembras cuadra con el total que el escribano anota al
  margen.
- **El silencio documental se acorta**: de 1170–1551 pasa a **1170–1526**, 356 años. La escala lo
  calcula ahora a partir de los datos en vez de llevarlo escrito a mano, así que no vuelve a
  quedarse viejo.

> **Lo que falta.** El cotejo contra `docs/cronologia.md` dio **93 filas documentadas** frente a las
> 34 entradas que había. Quedan **la tanda 2** —resto del pleito del Nuncio, 1757, 1772, 1804— y
> **la tanda 3** —la cola administrativa de 1834 a 2003—.

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
