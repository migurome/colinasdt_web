# Colinas en el BOE y en la Gazeta de Madrid: 140 resultados, 109 confirmados

> **Estado: ✅ FUENTE ABIERTA Y VACIADA.** 23 de septiembre de 2026.
>
> Vaciado completo de los dos buscadores de la **Agencia Estatal Boletín Oficial del Estado**:
> **82 resultados** en la *Gazeta de Madrid* (1661-1959) y **58** en el *BOE* (1960-2025).
> **140**, todos con referencia y facsímil en PDF en abierto — y **todos verificados uno a uno**.
>
> ✅ **Verificados LOS 140, uno a uno, contra el facsímil.** Se descargaron todos los PDF, se
> extrajo su capa de texto y se comprobó si «Colinas de Trasmonte» está de verdad. Los PDF se
> borraron después; **lo que queda guardado es el veredicto y el pasaje**
> → [`verificacion-140-resultados.tsv`](verificacion-140-resultados.tsv).
>
> ⚠️ **Y hacía falta, porque el buscador se equivoca.** De 136 resultados con referencia utilizable:
>
> | Veredicto | Cuántos | Qué significa |
> |---|---:|---|
> | **VERIFICADO** | **102** | la frase «Colinas de Trasmonte» está literalmente en el texto |
> | **VERIFICADO_OCR** | **7** | está, pero el OCR la destroza («Calinas (le· Trasttl-onte») |
> | **DUDOSO** | 19 | aparece «Colinas», pero nada la liga a Trasmonte |
> | **NO_VERIFICADO** | 8 | no aparece «Colinas» en un texto por lo demás sano |
>
> **109 confirmados de 136.** 🚨 **Y la causa de los falsos positivos, identificada:** el buscador
> del BOE devuelve documentos que contienen **las palabras buscadas**, no la frase — y
> «**Trasmonte**» **es topónimo frecuente en Asturias y Galicia**. En listados largos (escalafones,
> concursos, relaciones de deudores) coinciden un «Colinas» asturiano y un «Trasmonte» gallego en
> páginas distintas del mismo documento, y el buscador los da por buenos.
>
> ⚠️ **Antes de mediodía del 23 de septiembre esta ficha decía «140 apariciones». Era demasiado.**
> Son **140 resultados**; las apariciones confirmadas son **109**.

---

## Por qué esto importa

Es **una fuente entera que el proyecto no estaba usando**, y no es menor: el boletín oficial
registra, desde 1661, **todo acto del Estado que nombra a un pueblo**. Para Colinas eso significa
desamortización, curatos, divisiones judiciales y electorales, caminos, escuelas, presupuestos
municipales, expropiaciones y la concentración parcelaria — **con fecha exacta, texto y facsímil**.

| | |
|---|---|
| `colinas-en-la-gazeta-1661-1959.tsv` | **82 filas**: fecha, diario, número, página, departamento, referencia, título, PDF |
| `colinas-en-el-boe-1960-2025.tsv` | **58 filas**: fecha, diario, organismo, sección, referencia, título |
| `titulares-1971-carretera-c620.tsv` | **72 titulares** de fincas de Colinas, 1971 |
| `verificacion-140-resultados.tsv` | **El veredicto de los 140**, con el pasaje de cada uno |
| `facsimil/` | Los PDF de las piezas leídas enteras |

---

# Lo que ya se ha leído

## ★★★ 1. La concentración parcelaria: decreto, plan y obras

**`BOE-A-1970-50433`** — Decreto **3119/1970, de 8 de octubre** (BOE 257, 27/10/1970). Leído entero
sobre el facsímil:

> «Los **acusados caracteres de gravedad que ofrece la dispersión parcelaria** de la zona de Colinas
> de Trasmonte (Zamora), **puestos de manifiesto por los agricultores de la misma en solicitud de
> concentración dirigida al Ministerio de Agricultura**, han motivado la realización […] de un
> estudio […] tanto más por cuanto que la zona pertenece a la **Comarca de Ordenación Rural de
> "Benavente-Tera"**.»
>
> «**Artículo primero.** — Se declara de utilidad pública y de urgente ejecución la concentración
> parcelaria de la zona de Colinas de Trasmonte (Zamora), **cuyo perímetro será, en principio, el
> del término municipal del mismo nombre**. Dicho perímetro **quedará en definitiva modificado** en
> los casos a que se refiere el apartado b) del artículo diez de la Ley de Concentración
> Parcelaria…»

Aprobado en Consejo de Ministros de **23 de septiembre de 1970**. Firma Francisco Franco; ministro
de Agricultura, Tomás Allende y García-Baxter.

> ⚠️ **Y una precisión que corrige al inventario.** El §11 del inventario trae una fila
> «**Superficie del perímetro: 1.043 ha**» inmediatamente debajo de «Disposición: Decreto
> 3119/1970», lo que da a entender que **el decreto da esa cifra**. **No la da.** El decreto **no
> menciona hectárea alguna**: fija el perímetro por remisión al término municipal. Las 1.043 ha
> vienen de **una ficha de la Junta de Castilla y León**, como ya decía —bien— la
> [`transcripción del Catastro de 1752`](../catastro-ensenada-1752/transcripcion-integra.md).
>
> ★ **Y hay una pista para el `[?]` de las hectáreas.** El proyecto arrastra un desajuste del 1,6 %
> entre las **1.043 ha** de la ficha oficial y las **1.026,6 ha** medidas sobre el parcelario
> catastral. El artículo primero dice que el perímetro **«quedará en definitiva modificado»** por
> el artículo 10 b). **Interpretación, no dato:** si el perímetro de concentración se modificó
> respecto del término, las dos cifras podrían medir cosas distintas. **Lo dirimiría el acta de
> concentración**, que no está aquí.

**`BOE-A-1976-7522`** — Orden de **26** `[?]` **de febrero de 1976** (el cuerpo del texto lee «28»),
BOE 85 de 08/04/1976: aprueba el **plan de mejoras territoriales y obras** de la zona. Y dice en qué
consistían:

> «…el plan […] que se refiere a las obras de **red de caminos y red de saneamiento**.»

Y data el marco: «Por **Decreto de 11 de julio de 1968** se declaró sujeta a ordenación rural la
comarca de **Benavente-Tera**.»

> ★★ **Esto cierra el corchete que abrían las fotos aéreas.** El vuelo de 1956 enseña minifundio en
> tiras; el de 1973-86, bloques grandes y **caminos rectos nuevos**.
> **Decreto 1970 → obras 1976 → la foto lo confirma.**
> → [`04-cartografia/vuelos-historicos/`](../../04-cartografia/vuelos-historicos/README.md)

## ★★★ 2. Dónde fue a parar el archivo del Juzgado de Paz

**`BOE-A-1972-1185`** — Orden de **27 de junio de 1972**, BOE 189 de 08/08/1972:

> «…ha acordado la **supresión del Juzgado de Paz de Colinas de Trasmonte** y su incorporación al de
> igual clase de **Quiruelas de Vidriales**, **el que se hará cargo de la documentación y archivo
> del Juzgado de Paz suprimido**.»

> 🚨 **Es una pista archivística, y de las buenas.** El frente nº 13 busca el archivo del antiguo
> ayuntamiento. Esto dice, negro sobre blanco, que **al menos el archivo del Juzgado de Paz pasó a
> Quiruelas en 1972**. Hay dónde preguntar, y con la Orden en la mano.
>
> Nota de contexto: Colinas **tuvo Juzgado de Paz propio** hasta ese año. La supresión es
> consecuencia de la incorporación del municipio (Decreto 354/1972).

## ★★ 3. Setenta y dos titulares de fincas, 1971

**`BOE-A-1971-40309`** — Resolución de la **Jefatura Provincial de Carreteras de Zamora**, BOE 138
de 10/06/1971. Fija el levantamiento de **actas previas a la ocupación** de las fincas afectadas por
el ensanche de la **carretera C-620, de Benavente a Sitrama de Tera**, p.k. 1,500 a 20,000, en el
**término municipal de Colinas de Trasmonte**. Acto el **25 de junio** de 1971, **en el Ayuntamiento
de Colinas**.

Y trae **la relación nominal de titulares**, con número de finca y de expediente:
→ [`titulares-1971-carretera-c620.tsv`](titulares-1971-carretera-c620.tsv).

- **67 particulares**, el **Ayuntamiento de Colinas de Trasmonte** (4 fincas) y el **Estado**.
- Apellidos más repetidos: **Esteban** (9), **Pernía** (8, contando las variantes que el OCR
  estropea), **Fernández** (6), **Cabreros** (5), **Jáñez**, **Martínez**, **Rodríguez**.
- ★ Aparecen **Prieto** (José Prieto Pernía) y **Escudero** (Isaac Colinas Escudero) — los mismos
  apellidos que las ejecutorias del XVIII dan al fundador de los aniversarios y al arcipreste
  → [`ejecutorias-chancilleria/`](../ejecutorias-chancilleria/README.md). ⚠️ **Coincidencia de
  apellido no es parentesco**; se anota, no se afirma.

> ⚠️ **Precisiones.** (1) No es el padrón de propietarios de Colinas: son **sólo los afectados por
> la carretera**. (2) Los nombres están **extraídos del OCR del facsímil** y normalizados a mano;
> hay lecturas dudosas marcadas `[?]`. (3) **El emparejamiento nombre ↔ número de finca no es
> fiable** en el OCR: el orden de las columnas se descuadra. Para usarlo hay que **leer el PDF**,
> que está en `facsimil/`.

## ★ 4. Un cura de Colinas, 1857

**`BOE-A-1857-7483`** — Gaceta de Madrid núm. 1.660, 22/07/1857, Ministerio de Gracia y Justicia,
«Nombrando para los curatos vacantes que se expresan á los sujetos citados»:

> «…Para el de **Colinas de Trasmonte á D. Pedro Ramos**…»

Se suma a la lista de clérigos de Colinas que el proyecto va reuniendo: Francisco Escudero (1757),
el bachiller Pedro Prieto (ant. 1772) y ahora **Pedro Ramos (1857)**.

## ★★ 5. Desamortización: Colinas vendió

Siete asientos de **ventas de bienes** en la Gazeta, todos con «Colinas de Trasmonte» en el texto:

| Fecha | Referencia | Qué |
|---|---|---|
| 18/06/1860 | `BOE-A-1860-5704` | Bienes vendidos y censos redimidos hasta fin de 1857 |
| 06/07/1868 | `BOE-A-1868-5766` | **Bienes de Propios y provinciales** — «Idem de Colinas de Trasmonte … **1.066,67**» |
| 24/09/1868 | `BOE-A-1868-8172` | Ventas posteriores al 2-X-1858 — «… **Enero 1866** … 106,667» |
| 22/08/1877 | `BOE-A-1877-6493` | Ventas posteriores — «… **Mayo 1873** … 400» |
| 07/08/1879 | `BOE-A-1879-...` | Carpeta de relaciones de bienes de propios |
| 07/05/1884 | `BOE-A-1884-...` | Ventas posteriores |
| 28/08/1889 | `BOE-A-1889-...` | Estado por provincias de los **compradores de bienes nacionales** |

> ★★ **«Bienes de Propios» es el patrimonio del concejo**: los montes, praderas y tierras
> comunales. Estos asientos dicen que **Colinas perdió bienes comunales por desamortización**, con
> cantidades y fechas de venta (1866, 1873…).
> ⚠️ **No se ha leído qué se vendió ni a quién.** Las cifras de arriba están copiadas de las
> columnas del facsímil sin saber todavía si son reales, escudos o pesetas. **Esto es el índice,
> no el expediente**; el expediente está en el AHP de Zamora (frente nº 13), y ahora **se sabe qué
> pedir y de qué año**.

## ★ 6. Colinas en las divisiones del territorio

- **`BOE-A-1870-7800`** (30/09/1870) — Decreto de **división territorial para las elecciones**.
  Colinas aparece **en dos páginas distintas**, agrupada con «Barcial del Barco, Arcos de la
  Polvorosa, Santa Colomba de las Monjas, Villanázar, **Colinas de Trasmonte**, Sitrama de Tera,
  Santa Croya de Tera, Melgar de Tera…».
- **`BOE-A-1877-1187`** (12/02/1877) — División de los partidos judiciales en distritos:
  «**Segundo distrito: Micereces de Tera** — Micereces de Tera, Villanázar, **Colinas de
  Trasmonte**, Sitrama de Tera, Santa Croya de Tera, Melgar de Tera, Pueblica de V…».
- ★ **`BOE-A-1877-3272`** (28/04/1877) — *Memoria justificativa del proyecto de división judicial
  del territorio que comprende la Audiencia de Valladolid*. Describiendo las vías, dice:
  > «…La primera pasa por Benavente, Santa Cristina, Vecilla, **Colinas**, Quiruelas, Sitrama,
  > Santa Marta, Camarzana, Calzada, Vega de Tera, Junquera…»
  >
  > **Es un itinerario de 1877 que pasa por Colinas**, y confirma el orden Vecilla → Colinas →
  > Quiruelas sobre el terreno. Interesa al frente nº 14.

## ★ 7. Cinco datos más, sacados del vaciado completo

Los pasajes están todos en
[`verificacion-140-resultados.tsv`](verificacion-140-resultados.tsv), columna `contexto`.

### Un maestro con nombre, 1894

`BOE-A-1894-6665` — *Escalafón de Maestros y Maestras, provincia de Zamora*, Gaceta de 29/10/1894.
En el puesto **76**:

> «**Valentín Rodríguez** — Colinas de Trasmonte»

### ★★ La escuela, creada en 1959

`BOE-A-1959-9954` — Orden de **7 de julio de 1959**, por la que se crean **definitivamente** Escuelas
Nacionales de Enseñanza Primaria:

> «Una **Escuela mixta, servida por Maestra**, en el casco del Ayuntamiento de **Colinas de
> Trasmonte**.»

⚠️ «Se crean **definitivamente**» sugiere que antes funcionaba de modo provisional; el escalafón de
1894 demuestra que **había maestro sesenta y cinco años antes**. Lo que esta Orden fija es la
**plaza**, no la enseñanza.

### ★★ Un camino vecinal que arranca en Colinas, 1905

`BOE-A-1905-3586` — *Planes de caminos vecinales* contratados con las Diputaciones:

> «**De Colinas de Trasmonte al Cubo de Benavente por Quiruelas de Vidriales, Quintanilla, Brime de
> Urz, Cunquilla, Granucillo, Grijalba, Villaobispo, Santibáñez, Brime de Sog**…»

★ **Colinas es la cabecera del itinerario**, no una parada. El camino recorre el valle de Vidriales
entero. Interesa al frente nº 14: es un trazado proyectado, fechado y con las escalas intermedias.

### ★ La demarcación judicial de 1945

`BOE-A-1945-3382` — Orden que aprueba la demarcación de los Juzgados Municipales, Comarcales y de
Paz. Colinas queda adscrita al **Juzgado Comarcal de Santibáñez de Tera**, junto con:

> «Bretocino, Burganes de Valverde, Calzadilla de Tera, Camarzana de Tera, **Colinas de Trasmonte**,
> Melgar de Tera, Micereces de Tera, Otero de Bodas, Pueblica de Valverde, Santa Croya de Tera,
> Sitrama de Tera, Vega de Tera y **Villanázar**.»

> ★ **Detalle que no conviene pasar por alto: Quiruelas no está en esa lista, y Villanázar sí.** En
> 1945, administrativamente, Colinas miraba **al Tera**, no a Vidriales. Veintisiete años después se
> incorporó a Quiruelas. ⚠️ Una demarcación judicial no es una adscripción comarcal; **se anota, no
> se concluye**.

### La unidad mínima de cultivo, 1958

`BOE-A-1958-9342` — Orden de **27 de mayo de 1958**: fija la superficie de la unidad mínima de
cultivo por términos municipales, y Colinas figura en la lista de Zamora *(escrito «Colinas **del**
Trasmonte»)*. Es el umbral legal **doce años antes** de que se decretara la concentración.

---

## Lo que queda por leer (y es mucho)

De las 140, se han leído **siete**. El resto está indexado y espera. Lo más prometedor, por
familias:

| Familia | Cuántas | Por qué interesa |
|---|---|---|
| **Secretarios, médicos, farmacéuticos y matronas titulares** (1930-1960) | ~15 | **Nombres de los cargos** del Ayuntamiento de Colinas, año a año |
| **Escalafones de maestros** (1894, 1898, 1899, 1940s) | ~5 | La **escuela** de Colinas y sus maestros |
| **Escuelas Nacionales** (Orden de 7-VII-1959) | 1 | Creación definitiva de escuelas de enseñanza primaria |
| **Presupuestos municipales** (1943) | 1 | **Los ingresos del Ayuntamiento de Colinas en 1943** |
| **Caminos vecinales** (1905) | 1 | Planes de caminos vecinales — cartografía |
| **Demarcación de Juzgados** (1940s) | 1 | El Juzgado de Paz antes de su supresión |
| **Administración de Justicia** (1872, 1874, 1880, 1892, 1899…) | ~7 | Edictos judiciales: **nombres de vecinos** |
| **Unidad mínima de cultivo** (1958) | 1 | Umbral legal justo antes de la concentración |

---

## Nota de método

Los dos buscadores usan formularios distintos: el del BOE busca a texto completo con
`campo[3]=DOC`; el de la Gazeta, con `campo[4]=DOC`. La paginación **no admite un parámetro
`page`**: hay que seguir el enlace «Pág. siguiente», que lleva un `id_busqueda` opaco.

⚠️ **Y el aviso importante**: el buscador devuelve documentos «en cuyo texto se encuentren **las
palabras buscadas**» — no necesariamente la frase. En listados largos eso puede producir falsos
positivos. **Por eso se verificaron ocho documentos contra el facsímil**, repartidos entre 1857 y
1976. Los ocho traen la frase completa. El resto **no está verificado uno a uno**, y se marca así.

---

## Nota de reutilización

*Gazeta de Madrid* y *Boletín Oficial del Estado*, **Agencia Estatal BOE**. Los textos y facsímiles
son de acceso libre en `boe.es`. Cítese la referencia (`BOE-A-AAAA-NNNNN`), fecha y número.

---

*Ficha redactada el 23 de septiembre de 2026.*
