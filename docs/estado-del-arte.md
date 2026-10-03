# Estado del arte — Colinas de Trasmonte

> **Corte a 25 de septiembre de 2026.** Este fichero contesta a tres preguntas y a ninguna más:
> **qué se sabe**, **qué falta** y **quién puede conseguirlo**. No repite la investigación —para eso
> están el [inventario](03-archivos/inventario-documental.md) y las fichas de fuente—, sino que la
> mide.
>
> Se acompaña de dos registros de trabajo, que son los que permiten **abrir una vía desde aquí sin
> volver a reconstruir el contexto**:
> [`material-pendiente.tsv`](03-archivos/material-pendiente.tsv) —**57 piezas**— y
> [`vias-de-acceso.tsv`](03-archivos/vias-de-acceso.tsv) —**33 vías** para las que se bifurcan—.

---

## 0. En cuatro líneas

El proyecto tiene **el papel**: 412 ficheros de fuente y 515 MB dentro del repositorio, no en una
caché. Tiene **el método**: todo dato lleva firma, y lo documentado, lo interpretado y lo propuesto
van separados. Tiene **una cronología continua** del III milenio a.C. a 2026 y, desde el 25 de
septiembre, **el nombre del pueblo escrito en 1073**.

Lo que **no** tiene es lo que sólo se consigue **pidiéndolo en ventanilla o comprándolo**: los libros
parroquiales de Astorga, los libros maestros del Catastro, los pleitos sin digitalizar de la
Chancillería y **cuatro ediciones de diplomática medieval**. De las **37 piezas pendientes**, **5 se
pueden trabajar desde aquí** y **32 necesitan a una persona** —o una compra, o un correo—.
Otras **veintitrés ya están hechas**; **cinco** se han dado por **sin vía** y **una** está
**bloqueada por criterio**. Sesenta y seis filas en total.

Y hay un desfase que conviene decir en voz alta: **la web va por detrás de la investigación**, por
decisión expresa. Ver §7.

---

## 1. El proyecto en números

| | |
|---|---:|
| Ficheros de fuente dentro del proyecto | <s>412</s> **359** |
| Peso del corpus | <s>515 MB</s> **539 MB** |
| Fichas y documentos de trabajo (`.md`) | **36** |
| Tablas de datos (`.tsv`) | **21** |
| Artículos científicos en PDF | **31** |
| …de ellos, leídos entero o en parte | **31** |
| …sin abrir | **0** |
| Frentes de investigación abiertos formalmente | **18** |
| …cerrados | **8** |
| …abiertos | **10** |
| Entradas en la línea temporal publicada | **60** |
| Marcas de duda `[?]` vivas en la documentación | **311** |
| Tareas que se podían hacer desde aquí | **29** |
| …**hechas** | **23** |
| …pendientes | **5** |
| …sin vía | **1** |

> 📏 **Recontado el 2 de octubre de 2026**, y esta vez **con la base escrita**, que es lo que
> faltaba: `.md`, `.tsv` y marcas `[?]` se cuentan sobre **todo el repositorio, sin `.git` y sin
> ficheros ocultos** —queda fuera, por tanto, `.inventario-documental.backup.md`—; las entradas
> publicadas, sobre `p3-data.js`; y las tareas, sobre `material-pendiente.tsv`.
>
> 🚨 **Y el recuento corrige dos cifras propias.** Las dudas vivas <s>360</s> son **311**:
> no es que se hayan borrado, es que **cuarenta y nueve se han resuelto** en los dos últimos
> días. Y las piezas pendientes <s>46</s> son **42**: el reparto «13 aquí / 33 a una persona»
> sumaba mal porque metía en el segundo grupo las cinco **sin vía** y la **bloqueada**, que no
> son lo mismo que pendientes. Ahora van en su propia línea.
>
> ✅ **Y el 3 de octubre de 2026 se cierran también las dos primeras filas**, que arrastraban la
> medición del 22 de septiembre: <s>412 ficheros</s> **352** y <s>515 MB</s> **522 MB**, contados con
> **la misma base que el índice de facsímiles** —todo lo que hay bajo `docs/` que no sea `.md` ni
> `.tsv`, sin ocultos— → [`facsimiles.md`](facsimiles.md). **Bajan los ficheros y sube el peso**:
> bajan porque el recuento viejo contaba cosas que ya no están o nunca fueron material, y sube
> porque entretanto han entrado planos, rásteres y PDF. Las cifras tachadas **no son reproducibles**
> —no decían qué contaban— y por eso se tachan en vez de corregirse.

> ⚠️ **Las 311 dudas no son 311 preguntas distintas**: son las veces que aparece la marca, y una
> misma duda puede repetirse en tres ficheros. **Lo que la cifra mide es la disciplina, no la
> ignorancia**: cada una de esas marcas es un sitio donde el proyecto se negó a rellenar un hueco.

---

## 2. Los tres pilares, uno por uno

### 2.1 El mapa — **el más avanzado**

✅ **Lo que está.** El término **medido** (1.043 ha, por el Decreto 3119/1970, que corrigió nuestro
propio cálculo de 796). La **raya** y el término en GeoJSON. **52 parajes** con superficie y
coordenadas del Catastro, **cotejados uno a uno** con los planos del IRYDA de 1975-77, el MTN50 de
primera edición y OSM: **123 filas de cotejo**. Los **tres vuelos** —1956-57, 1973-86 y 2023— con el
límite superpuesto. Y el **significado** de buena parte de los nombres, sacado del *Vocabulario del
valle del Tera*.

⚠️ **Lo que falta, y es trabajo, no adquisición.** **Digitalizar el límite jurisdiccional** que
dibuja el MTN50 de 1.ª edición —anterior a 1972, con sus mojones: ahí está el **polígono del término
histórico**— y **georreferenciar** el plano general de 1976. Las dos cosas se pueden hacer desde
aquí → `TAR-11`, `TAR-12`.

### 2.2 El relato — **el más caro de terminar**

✅ **Lo que está.** Una cadena que va de los silos del III milenio a.C. a 2026 sin saltos ciegos, con
**el Catastro de 1752 transcrito íntegro**, el **pleito de diezmos de 1694 leído entero** en sus 32
planas de copia, el **Censo de Aranda de 1768 cuadrado al alma** en los 24 lugares del valle, y las
series demográficas de 1526 a 2024 con sus discontinuidades **declaradas, no disimuladas**.

🚨 **Y el hallazgo que reordena el pilar**: **«uilla que dicunt Colinas, in riba de Teira», 1073** —
453 años más que el Censo de Pecheros. ⚠️ **Localizado, no leído**: viene de un artículo.

⚠️ **Lo que falta.** Dos cosas de naturaleza distinta:
- **Lo que se compra**: cuatro ediciones de diplomática —`LIB-01` a `LIB-04`—. La primera,
  **Ruiz Asencio vol. IV, cierra dos frentes de un golpe**: el documento de Castroferrol de 1060 y
  el de Colinas de 1073.
- **Lo que se pide**: los **libros parroquiales de Astorga** —la ermita, la visita de 1756, los
  difuntos de 1826-1842— y los **seis pleitos civiles** de la Chancillería, que son los únicos
  papeles donde se oye hablar a vecinos de Colinas en primera persona.

### 2.3 Los colores y símbolos — **desbloqueado, y sin empezar**

✅ **Lo que está.** El **método**, extraído de tres precedentes publicados en la misma revista y la
misma comarca —Bretocino, Tábara y Benavente—, con el modelo elegido y dicho por qué. El
**repertorio** de materia disponible. El **único emblema histórico documentado** del pueblo: los
sellos de 1876, con la carta del ayuntamiento que dice que **es el único que existió jamás**.

✅ **Y la pregunta que bloqueaba el frente, contestada**: **Colinas no es entidad local menor**
—ninguna de las 14 de Zamora, y la numeración estatal corre sin hueco—. Es una **entidad singular de
población**, que es categoría del INE, no entidad local. Luego el emblema sólo puede ser oficial por
el **pleno de Quiruelas**, o queda como **emblema vecinal**.

⚠️ **Lo que falta es lo más difícil de todo el proyecto, y no se compra en ningún sitio**: **pasar de
la materia a la propuesta**. Hoy hay cuatro colores razonados en la web y un repertorio de figuras;
no hay un blasón. Y el método propio obliga a **justificar cuartel por cuartel**.

---

## 3. Los dieciocho frentes, de un vistazo

| nº | Frente | Estado | Quién lo mueve |
|---:|---|---|---|
| 1 | Catastro de Ensenada — libros maestros | ⚠️ **reabierto**: cerradas las Respuestas Generales, falta lo particular | usuario (`ARCH-10`, `ARCH-11`) |
| 2 | Los lindes del término | ✅ cerrado | — |
| 3 | Medir el término | ✅ cerrado — 1.043 ha | — |
| 4 | Planos de concentración parcelaria | ✅ cerrado · fleco: georreferenciar | aquí (`TAR-12`) |
| 5 | INE — serie y alteraciones | ✅ cerrado · dos flecos menores | aquí (`TAR-16`) |
| 6 | Castroferrol — corpus diplomático | ⚠️ **muy avanzado, no cerrado**: faltan las ediciones | usuario (`LIB-01` a `LIB-04`) |
| 7 | Anuario 1993 del IEZ | ✅ cerrado | — |
| 8 | Archivo Diocesano de Astorga | 🚨 **abierto, y es el frente con más que dar** | usuario (`ARCH-01` a `ARCH-06`) |
| 9 | Chancillería de Valladolid | ⚠️ sentencias leídas; **los pleitos hay que pedirlos** | usuario (`ARCH-07`, `ARCH-08`) |
| 10 | Fondo Osuna — vaciado sistemático | ⚠️ **el D.89 leído entero** (`TAR-01` ✅); el fondo, no | ambos (`TAR-19`, `TAR-21`, `TAR-22`) |
| 11 | Floridablanca y Miñano | ✅ cerrado · dos flecos | aquí (`TAR-17`) |
| 12 | *Brigecio* — vaciado y lectura | ✅✅ **CERRADO el 3-X-2026**: vaciado completo y **los diez artículos descargados, leídos** (`TAR-02` a `TAR-10`) · 🚨 y de paso abrieron **dos archivos** (`ARCH-23`, `ARCH-24`) y **dos lecturas** | aquí (`TAR-27`, `TAR-28`) |
| 13 | AHP de Zamora | ⚠️ abierto, con cuatro pistas duras y fechadas | usuario (`ARCH-12` a `ARCH-15`) |
| 14 | IGN / CNIG | ✅ **cerrado**: límite digitalizado (`TAR-11` ✅), códigos catastrales (`TAR-13` ✅) y 🚨 **Pobladura de Trasmonte, localizada** (`TAR-26` ✅) · ✅ **el plano IRYDA de 1975, georreferenciado** (`TAR-12` ✅) | — **frente cerrado** |
| 15 | Riesco Chueca 2018 — el topónimo | ⚠️ abierto: **hace falta el libro de 2018** | usuario (`LIB-05`) |
| 16 | El agujero de 1842 | ⚠️ **media respuesta**: el 132 es una imputación del INE, no una medición | usuario (`ARCH-05`, `ARCH-20`) |
| 17 | Madoz, releído entero | ✅ cerrado · fleco: «San Juanico» | aquí (`TAR-15`) |
| 18 | La heráldica de la comarca | ✅ **método y figura jurídica cerrados** · falta proponer | ambos |

---

## 4. Lo que se puede hacer desde aquí, sin pedirle nada a nadie

**10 piezas pendientes**, y **diecisiete ya hechas** —más una **sin vía**—. Por orden de lo que
aportan:

> 📏 **Corregido el 3 de octubre de 2026.** Esta línea decía <s>12 piezas</s>, que no salía de
> ninguna cuenta: las pendientes marcadas `claude` en el registro **eran 10, y lo siguen siendo**
> —se cerró `TAR-09` y se abrió `TAR-27`—. Se corrige a la vista, no se borra.

1. ✅ **`TAR-01` — el D.89: HECHA el 30-IX-2026.** Las 36 imágenes del **original de 1694**, leídas
   plana a plana. Todo lo que sostenía ese frente descansaba en **una copia de 1842**, y el cotejo
   da tres cosas: la copia **es fiel en el hecho** —fechas, lugares, curas y respuestas resisten—;
   **no siempre es literal en la palabra** —«acatamiento» en 1694, «respeto» en 1842, y la web
   citaba la copia—; y **el original traía papel que nadie había leído**: **dos despachos más**, de
   10 y de **26 de mayo de 1694**, y en el segundo **Colinas encabeza una lista de siete curas
   amenazados con excomunión pública**. Ver
   [la ficha del legajo](01-fuentes-primarias/osuna-astorga/README.md).
2. ✅ **`TAR-11` — el término histórico: HECHA el 22-IX-2026**, y por mejor camino del que esta
   lista proponía. **No se calcó el ráster** —leer a ojo un 1:50.000 habría dado 300-400 m de
   error—: se tomó el **parcelario del Catastro**, cuyos polígonos rústicos no se fusionaron en
   1972, y se comprobó contra el MTN50 anterior a esa fecha. **1.026,6 ha y 16.345 m de
   perímetro** → [el límite, en coordenadas](04-cartografia/limite-del-termino.md).
   ✅ Y con él **`TAR-13`, hecha el 1-X-2026**: los dos códigos catastrales que estaban descargados
   y sin anotar son **Navianos de Valverde** (DGC 49151) y **Villanázar** (DGC 49285). De paso se
   ha medido quién hay al otro lado de la raya: **Villanázar comparte 3.729 m** con Colinas —el
   23 % del perímetro— y **Navianos no lo toca**, se queda a 1.104 m.
3. ✅✅ **El lote de *Brigecio* está cerrado: los diez artículos, leídos.** Quedan en su lugar
   ✅ **`TAR-27`, hecho también el 3-X-2026**: las escrituras del Hospital de la Piedad explican
   **qué es de verdad el *Libro Becerro*** —un **inventario-catálogo de todo el archivo**, no un
   libro de rentas—, dan la **ed. facsímil de 1997 de Berdum de Espinosa** para el frente nº 18,
   y enseñan que **la cofradía de la Vega seguía el modelo de 1526 de la casa de Benavente**.
   ⚠️ **Con esto no queda ningún PDF descargado sin abrir en la biblioteca.**
   ★★★ **Y `TAR-28`, abierto y cerrado el mismo día**: el estudio completo de Azoague publica
   **los 22 punzones del taller a tamaño real** y afirma que su cerámica tiene «poca relación»
   con la TSHt **en decoración y en forma**. Con eso, **el paralelo de la roseta sale reforzado
   —y por la forma, no por el motivo—**, y queda **una lista de comprobación** para quien vaya al
   museo → [inventario § 7.1 ter](03-archivos/inventario-documental.md).
   ★★ **`TAR-10`, hecho el 3-X-2026**: la cita con la que el artículo de 1993 sostiene el
   paralelo de **nuestras rosetas** se ha comprobado **y es exacta**. Pero el paralelo **va en un
   solo sentido** —Azoague escribe antes de que Colinas se excave— y descansa en **dos
   fragmentos**: lo seguro es la roseta, lo propuesto es de qué taller salió, y **lo cierra el
   Museo de Zamora**, que el proyecto no tenía registrado →
   [inventario § 7.1 bis](03-archivos/inventario-documental.md).
   🚨🚨 **`TAR-09`, hecho el 3-X-2026**, y ha sido el que más lejos ha llegado: el priorato de
   **San Salvador de Villaverde** —del **Hospital de la Piedad de Benavente** desde 1525— cobraba
   rentas **en Colinas** en el siglo XVIII, según un **Libro Becerro inédito**; **el Catastro de
   1752 no lo dice**, y el hueco queda escrito. De paso cierra la comparación de los dos San
   Salvadores —**son dos casas**— y **abre un archivo entero** con signaturas, incluidos **tres
   apeos** que serían nóminas de vecinos de 1560, 1694 y 1741-47 →
   [el priorato de Villaverde](01-fuentes-primarias/priorato-villaverde/README.md).
   🚨 **`TAR-07`, hecho el 3-X-2026**, y era el que menos prometía: la **Regla de la cofradía
   de la Virgen de la Vega**, de **1730**, reserva **a Colinas un abad y un cabildero** de los
   dos de cada oficio. **Media hermandad por estatuto** →
   [la cofradía](01-fuentes-primarias/cofradia-vega-1730/README.md).
   ✅ **`TAR-08`, hecho el 1-X-2026**: «Las Peñas» de Quiruelas **nombra a «Las Bodegas» de
   Colinas dos veces**, añade dos yacimientos calcolíticos inéditos al lado y, cotejado con la
   fuente primaria, saca **la fecha absoluta que al valle le faltaba**: 2330 a. C. en Los Bajos
   → [inventario § 8.3](03-archivos/inventario-documental.md).
   🚨 **`TAR-06`, hecha el 1-X-2026**, y era el que más prometía: **Pobladura de Trasmonte
   tiene ficha propia** entre los 45 despoblados del conde, con **lindes, medidas, un molino en la
   Almucera en 1446** y la tabla de vecindarios 1530/1591. **Y reabre dónde estuvo**: sus dos
   lindes sobreviven como parajes y no caen donde el proyecto la había situado. De ahí salió
   **`TAR-26`**, 🚨 **cerrada ese mismo día**: Pobladura estuvo **entre Villanázar y Vecilla
   de Trasmonte**, en **41,9835 N · 5,7796 O**, y no en Navianos. Lo deciden el **reparto de
   propietarios de 1750** —barrido de 15.375 posiciones sobre el parcelario— y, en ese sitio,
   el rótulo: **«A.º de Pobladura» en el MTN50 de 1.ª edición y «Pobladura» dos veces en la
   planimetría**, con **«Los Paredones»** al lado →
   [inventario § 8.2](03-archivos/inventario-documental.md).
   ✅ **`TAR-02`, `TAR-03` y `TAR-04`, hechos el 1-X-2026**, y los tres con el mismo resultado:
   **ninguno nombra a Colinas**. El que más dice es el que menos trae, `TAR-03`: es el **catálogo
   especializado de la imaginería gótica de los dos valles**, hecho pieza a pieza, y **de la
   parroquia de San Juan no cataloga nada**. No es que no se haya buscado: es que **quien lo buscó
   para toda la comarca no encontró nada aquí**. De `TAR-02` sí queda materia de comarca —tapial,
   adobe, la *gloria* y el vocabulario de las bodegas—, y con ella se abre el frente de
   [patrimonio](05-patrimonio/README.md), que estaba declarado y vacío.
   ✅ **`TAR-05`, hecha el 1-X-2026**, que era el que más prometía —mismo autor y mismo número que
   el artículo que sostiene Castroferrol— y cumplió: **tres menciones del monasterio**, la del
   documento de 1015 **confirmando desde fuera** la corrección que el proyecto hizo sobre el
   latín, y la identificación del sitio **con San Juan-El Valle** dicha con todas las letras. Lo
   que el autor **interpreta** —que el valle del Tera era ruta de peregrinación y el monasterio
   uno de sus jalones— queda escrito como interpretación suya →
   [la ficha de Castroferrol](01-fuentes-primarias/castroferrol-962-1170/README.md).
4. **`TAR-14`, `TAR-18`, `TAR-21`, `TAR-22`** — cuatro dudas concretas que se pueden cerrar con lo
   que ya hay en casa o en abierto, incluida la verificación del recuento de **1587**.
5. ✅ **`TAR-24` — la procedencia de cada imagen: HECHA el 30-IX-2026**, en v0.40. **45 de 45
   imágenes publicadas llevan firma al pie**, y las condiciones de los cuatro archivos están
   leídas una por una. **La del IGN no se cumplía** —pide una fórmula, no una mención— y se
   corrigió el mismo día → [`CREDITOS.md`](../CREDITOS.md).
6. ✅ **`LIMP-01` y `LIMP-02` — HECHAS el 3-X-2026, con autorización expresa.** Las tres carpetas
   duplicadas de las ejecutorias **ya no están** —28 planas, 10,8 MB, verificadas copia byte a
   byte antes de borrar—, y el índice de facsímiles da ahora la cifra de hoy **y dice qué
   cuenta**, que es lo que le faltaba → [`facsimiles.md`](facsimiles.md).

---

## 5. Lo que necesita a una persona

**33 piezas.** Agrupadas por a quién hay que dirigirse, que es como se pide:

| Destino | Piezas | Lo esencial que guarda |
|---|---|---|
| **A. H. Diocesano de Astorga** | `ARCH-01`…`ARCH-06` | El **libro de fábrica de la ermita**, el **libro de visita de abril-mayo de 1756** y los **difuntos de 1826-1842**. Es el frente que más puede cambiar el relato. |
| **AHP de Zamora** | `ARCH-10`, `ARCH-12`…`ARCH-15` | Los **libros maestros del Catastro** —empezando por la serie «Índices de Pueblos»—, el archivo del antiguo ayuntamiento y la desamortización. |
| **A. R. Chancillería de Valladolid** | `ARCH-07`, `ARCH-08` | Los **seis pleitos civiles**, con las declaraciones de testigos. |
| **Compra o préstamo** | `LIB-01`…`LIB-10` | Las **cuatro ediciones de diplomática**. `LIB-01` es la que más desbloquea por euro gastado. |
| **Otros** | `ARCH-09`, `ARCH-11`, `ARCH-16`…`ARCH-22` | AHN, AHP de Valladolid, BNE, RAH, AGS, Junta de CyL. |

> ✅ **Nada de esto está perdido: está localizado.** Todas las piezas llevan **institución** y, cuando
> existe, **signatura**. La diferencia entre «no lo tenemos» y «no lo hemos pedido» está escrita fila
> por fila.

---

## 6. Cómo se abre una vía desde aquí

Los dos registros están pensados para trabajarse **por identificador**, sin rehacer el contexto:

- **«Explora `TAR-05`»** → se ejecuta la tarea y se escribe el resultado en la ficha que
  corresponda, no en este fichero.
- **«¿Qué vías hay para `LIB-01`?»** → [`vias-de-acceso.tsv`](03-archivos/vias-de-acceso.tsv) da
  **cuatro**, ordenadas por lo que cuestan: préstamo interbibliotecario, consulta en la Universidad
  de León, compra de viejo y correo al editor.
- **«Prepara la petición de `ARCH-01`»** → se redacta la solicitud con las cinco piezas del Archivo
  Diocesano **en un solo escrito**, que es como conviene mandarlo.
- **«Prueba la vía 1 de `TAR-18`»** → se intenta, y **el resultado se anota en la columna
  `resultado`, salga bien o salga mal**. Una vía probada y fallida es información: por eso la fila
  de la BNE ya dice *403 en todas las pruebas*.

**Reglas de mantenimiento**, para que los registros no mientan:

1. `estado` sólo pasa a `obtenido` cuando **la pieza está en el proyecto**, no cuando se ha pedido.
   Para las tareas (`TAR-*`) el estado equivalente es **`hecho`**, y hay que ponerlo **el día que
   se hacen**: un registro miente igual por quedarse corto que por pasarse. El 1-X-2026 había
   **cuatro** tareas hechas marcadas como pendientes.
2. Una vía que se prueba **se marca aunque falle**. Lo contrario lleva a probarla otra vez dentro de
   un mes.
3. Lo que se consiga **se vacía en su ficha**, y aquí queda sólo el puntero. Este fichero mide; no
   almacena.

---

## 7. La web, y por qué va por detrás

> **Puesto al día el 25-IX-2026. Cerrado.** La línea publicada tiene **60 entradas**, de las 33
> que tenía: entraron las **tres tandas** —las seis que cambian lo que la línea dice, el pleito
> de los diezmos con el bloque eclesiástico, y la cola administrativa de 1842 a 2003—.
>
> De la tabla de abajo **sólo queda pendiente una fila**: la de la catedral de León en el s. X, y
> queda por una razón de criterio, no de tiempo —el autor citado **no identifica el documento
> concreto**, así que no hay nada que firmar—. Igual que los recuentos de **1561/65, 1571 y
> 1587**, que siguen sin transcribir.
>
> Lo que falta ahora **no es material investigado sin publicar, sino investigación por hacer**:
> el pleito de la Chancillería de 1694, el expediente de vías pecuarias del AHN, y qué se vendió
> y a quién en la desamortización. Están en `material-pendiente.tsv`.

La línea temporal reflejaba el estado del **22 de septiembre**. La investigación había producido,
entre otras cosas, **material para una veintena de entradas nuevas** que la web no conocía:

| Lo que la línea no sabe | Peso |
|---|---|
| ✅ ~~**1073** — Colinas por su nombre, «in riba de Teira» ~~ | 🚨🚨🚨 sería la entrada más antigua del pueblo |
| **s. X** — la catedral de León con intereses en Colinas | ★★ |
| ✅ ~~**1526**~~ · **1561/65** · **1571** · **1587** · ✅ ~~**1591**~~ — entraron los dos recuentos, faltan los tres del medio | 🚨 |
| ✅ ~~**1694** — el Nuncio, la excomunión del provisor y **el cura de Colinas que apela** ~~ | 🚨🚨 |
| ✅ ~~**1756** — la carta del obispo y la ermita dotada con 200 reales ~~ | 🚨🚨 |
| ✅ ~~**1757** · **1772** · **1804** — las tres ejecutorias~~ | ★★ |
| ✅ ~~**1768** — el Censo de Aranda: 114 almas, y el valle entero cuadrado ~~ | ★★ |
| ✅ ~~**1842** · **1848** — la copia y el cotejo judicial ante la Hacienda~~ | ★★ |
| ✅ ~~**1860-1889** — la venta de los bienes de propios~~ | ★ |

→ El diseño acordado para llevarlo allí está en
[`07-web/diseno-responsive.md`](07-web/diseno-responsive.md). **Tampoco está implementado**, y por
la misma razón.

---

## 8. Lo que este estado del arte no dice

- **No dice que el relato esté terminado.** Dice que es continuo y que sus huecos están señalados.
- **No promete lo que hay en los archivos.** Un libro de fábrica puede estar perdido, y el archivo
  municipal **ya estaba incompleto en 1876**, por escrito y de puño del propio ayuntamiento.
- **No convierte el 1073 en certeza.** Está **localizado, no leído**, y el diploma escribe «Colinas»
  a secas. Lo que lo cerraría es un libro, no una hipótesis.
- **No decide el emblema.** No hay ni un trazo propuesto todavía, y eso es deliberado: el método
  elegido obliga a ganarlo antes de dibujarlo.

---

*Levantado el 25 de septiembre de 2026. Se revisa cuando cambie el reparto entre lo que se puede
hacer aquí y lo que hay que pedir — no cada vez que se cierra una duda.*
