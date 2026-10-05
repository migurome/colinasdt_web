# Los parajes del término, según el Catastro

> **Estado: ✅ VACIADO COMPLETO.** 22 de septiembre de 2026. **52 parajes**, con su código oficial,
> su número de parcelas, su superficie y sus coordenadas, obtenidos parcela a parcela de las **1.141
> fincas** de los polígonos 004 y 005, que son [el término de Colinas](limite-del-termino.md).
> Datos en [`parajes-catastro.tsv`](parajes-catastro.tsv).
>
> **Y 73 parajes más del término vecino de Quiruelas de Vidriales** (muestreo de 1.668 parcelas),
> en [`parajes-quiruelas-catastro.tsv`](parajes-quiruelas-catastro.tsv) → §6.

---

## 1. Lo que resulta que existía

Esta misma mañana este proyecto escribió que la microtoponimia de Colinas «no está en la cartografía
oficial» y que los planos de la concentración de 1975-77 eran «hoy por hoy la única» fuente. Por la
tarde apareció que el **MTN50 y las planimetrías del IGN** la rotulan a decenas (ver
[`ign-historico/`](ign-historico/README.md), y la corrección en el [README](README.md) §6).

Ahora aparece la tercera, y es la buena: **el Catastro guarda el paraje de cada parcela rústica**, y
lo sirve en abierto. No es una lista de nombres: es una lista de nombres **con el parcelario
debajo**, es decir, con superficie y con sitio.

```
https://ovc.catastro.meh.es/OVCServWeb/OVCWcfCallejero/COVCCallejero.svc/json/
  Consulta_DNPRC?Provincia=&Municipio=&RefCat=49189A00400507
→ "npa":"EL VALLE"  "cpaj":"39"  "ldt":"Polígono 4 Parcela 507 EL VALLE…"
```

La geometría sale de la descarga INSPIRE del Catastro y el nombre de esta consulta. Se han pedido
las **1.141 parcelas** de los polígonos 004 y 005, una por una.

> **Comprobación de las coordenadas.** Todas las de este proyecto se calculan invirtiendo la
> proyección UTM 30N sobre el elipsoide GRS80. Contrastada con el geocodificador del propio Catastro
> para la parcela 507: él da **42,0070881 N · 5,8140735 O**; el cálculo de aquí, **42,00709 ·
> −5,81407**. **Coinciden en el metro.**

---

## 2. Lo que los 52 nombres resuelven

### ✅ Vallondo, no «Vallando»

| Fuente | Grafía |
|---|---|
| Planos de la concentración, 1975-77 | **Vallondo** |
| MTN50 de primera edición | Vallando |
| **Catastro (66 parcelas, 74,89 ha, código 114)** | **VALLONDO** ✅ |

`[?]` **cerrado.** Y con él «**Parvelas de Vallondo**» (15 parcelas, 30,15 ha), que es como el
Catastro abrevia «Parcelas de Vallondo», el nombre que los planos leen como «Largos de Vallondo».

### ✅ Valancinas, no «Las Valencinas»

| Fuente | Grafía |
|---|---|
| Planos de la concentración, 1975-77 | **Valancinas** |
| **Catastro (22 parcelas, 19,85 ha, código 105)** | **VALANCINAS** ✅ |
| OpenStreetMap | *Las Valencinas* ❌ |

`[?]` **cerrado.** La forma oficial es **Valancinas**; la de OpenStreetMap es una variante de un
mapa colaborativo, no una fuente.

### Y una concordancia que vale por sí sola

**Diecinueve** de los nombres leídos en los planos de 1975-77 aparecen **idénticos** en el Catastro
de hoy: El Caserío, Vallondo, Parcelas de Vallondo, El Pendón, Las Tapias, Los Castilletes, Pico de
la Cervilla, Baldíos, El Hoyo, Los Mártires, Valdemanzanas, El Aviseo, El Valle, La Encina, Los
Llanos, Los Neguillos, Pescueza, Valancinas y Las Porqueras.

**Es decir: la lectura que este proyecto hizo de los planos era correcta.** Dos fuentes
independientes, a cincuenta años de distancia, dicen lo mismo.

---

## 3. ★★★ El Valle, medido

| | |
|---|---|
| Nombre oficial | **EL VALLE** (código de paraje **39**) |
| Parcelas | **40** |
| Superficie | **34,43 ha** |
| Centro | **42,00621 N · 5,81479 O** |
| Del casco | **554 m al ONO** |
| Polígono | 004 — dentro del término de Colinas |

Es el pago donde se excavó Castroferrol. Hasta hoy el proyecto lo situaba «al oeste del pueblo» por
la tradición oral, por el rótulo del plano de 1977 y por el rótulo del MTN50. **Ahora tiene
superficie y coordenadas, y de una fuente oficial.**

⚠️ **Y una cosa que no aparece: no hay ningún paraje llamado «San Juan» en el término de Colinas.**
Se han mirado las 1.141 parcelas. El pago se llama, oficialmente, **El Valle** a secas. El «San
Juan» del nombre compuesto *San Juan-El Valle* viene de otra parte: de la tradición oral («el
Convento de San Juan»), de la advocación de la parroquia y del «**A.º de San Juan**» que el MTN50
rotula **al otro lado de la raya**, en Quiruelas (donde el parcelario llama a esa tierra «**Los
Quiñones de la Hierba**» y «Descuento», tampoco San Juan). **No invalida nada** —el nombre del
yacimiento lo puso la excavación—, pero conviene decir de dónde viene cada mitad del nombre.

---

## 4. ★★★ Las tres parcelas de la excavación, localizadas

La excavación sitúa el yacimiento en las **parcelas 1.296 y 1.297**, «al oeste del pueblo, camino de
Quiruelas», y **dos tumbas romanas de tégulas a 200 m** en la **parcela 507**. Este proyecto llevaba
meses con la duda de a qué numeración pertenecían esos números, porque **no existen en los planos de
la concentración**, cuya serie acaba en 1021.

**Son referencias catastrales.** Y están las tres:

| Parcela | Referencia | Paraje oficial | Coordenadas | Superficie | Respecto del término |
|---|---|---|---|---|---|
| **1.296** | `49189A00101296` | **Cº. DE COLINAS DE TRASMONTE** | 42,00778 · −5,81633 | 0,21 ha | **fuera, a 14 m del límite** |
| **1.297** | `49189A00101297` | **Cº. DE COLINAS DE TRASMONTE** | 42,00826 · −5,81724 | 2,27 ha | **fuera, a 72 m del límite** |
| **507** | `49189A00400507` | **EL VALLE** | 42,00709 · −5,81407 | 2,00 ha | **dentro, a 173 m del límite** |

Tres coincidencias que no pueden ser casualidad:

1. La excavación describe el sitio como «camino de Quiruelas»; el Catastro llama a ese paraje,
   literalmente, «**Cº. de Colinas de Trasmonte**» —el mismo camino, nombrado desde el otro extremo—.
2. La excavación llama al pago **El Valle**; la parcela 507 está en el paraje «**EL VALLE**».
3. La excavación pone las tumbas **a 200 m** del yacimiento; de la 1.296 a la 507 hay **202 m**.

### Y lo que eso obliga a decir

**El yacimiento está sobre la raya.** Las parcelas 1.296 y 1.297 pertenecen al **polígono 1**, que es
el de Quiruelas de Vidriales; la 507, al **polígono 4**, que es el de Colinas. Entre ellas pasa el
límite jurisdiccional que Colinas tuvo hasta 1972. En las 37 parcelas que hay a menos de 320 m de la
1.296, el reparto es limpio: **11 son de «El Valle» y están todas dentro de Colinas; 10 son del «Cº.
de Colinas de Trasmonte» y están todas fuera.**

> ⚠️ **Cautelas, todas las que hacen falta.**
> - **14 metros no deciden nada.** Que la 1.296 caiga fuera por 14 m es, en términos de precisión,
>   caer encima de la línea. Lo que sí es una decisión ajena y no un error de medida es que el
>   Catastro la tenga inscrita **en el polígono 1 y no en el 4**.
> - **El rumbo no cuadra.** La fuente dice que las tumbas están «a 200 m **al SO**» y la 507 está a
>   202 m **al ESE**. La distancia es un acierto pleno; la dirección, no. `[?]` **Sin resolver**: hay
>   que releer el artículo de 1993 y ver desde qué punto mide.
> - **Y esto no mueve el yacimiento**, que está donde estaba: lo que hace es ponerle coordenadas y
>   decir por dónde pasaba la raya.

**Por qué importa.** Madoz escribe en 1847 que Castroferrol es un despoblado **«en su térm.»**, el de
Colinas. El parcelario de hoy pone el sitio excavado del lado de Quiruelas, por unos metros. Un
despoblado partido por una raya no es una anomalía: es lo normal cuando dos concejos se reparten un
término vacante. Pero **es una tensión documentada entre dos fuentes, y queda anotada como tal.**

---

## 5. Los 52 parajes

Ordenados por distancia al casco (42,00353 N · 5,80914 O). La tabla completa, con coordenadas y
código de paraje, está en [`parajes-catastro.tsv`](parajes-catastro.tsv).

| Distancia | Parajes |
|---|---|
| **< 1 km** | Pueblo · Descuento ⚠️ · La Cierna · **Las Pateras** · **Los Mártires** · **El Valle** · La Loba · **Las Porqueras** · Raposeras · La Ganal · **Valdemanzanas** · **La Encina** · Carretera ⚠️ · Veguellina · Las Vacas · Manzanilleros · **El Hoyo** · N-525 ⚠️ · ZA-P-1510 ⚠️ |
| **1-2 km** | Linares Babaderos · **El Aviseo** · **Pescueza** · Quiñones · El Milano · Regadera Maestra ⚠️ · La Regata de Colinas de Trasmonte · Linares · **Los Llanos** · **Los Neguillos** · La Palera · Tierras de la Mina · Tierras de Caño Nuevo · Arrotos de Caño Nuevo · Mary Blancas · Tierras del Plantío · Vega de Abajo · **Valancinas** · **Baldíos** · Vega de Arriba · **Parcelas de Vallondo** · Arrotos · Huergas · Caleras |
| **> 2 km** | Arenales Río · Presillas · R Quiruelas ⚠️ · **El Pendón** · **Las Tapias** · **Vallondo** · **Pico de la Cervilla** · **El Caserío** · **Los Castilletes** |

**En negrita**, los que ya estaban leídos en los planos de 1975-77. ⚠️ marca lo que **no es un
topónimo**: «Descuento» es el término contable con que el catastro de rústica agrupa caminos,
cauces e improductivo; «Carretera», «N-525» y «ZA-P-1510» son viales; «Regadera Maestra» es el canal
de riego. `[?]` **«R Quiruelas»** (16 parcelas, 16,49 ha, al NNE) está sin descifrar: puede ser
*reguera* o *carretera* de Quiruelas.

Descontados esos siete, quedan **45 topónimos**. De ellos, **19 ya se habían leído en los planos de
1975-77** y **2 más estaban en OpenStreetMap** (Las Pateras, Manzanilleros): quedan **24 enteramente
nuevos para este proyecto**.

### Los que valen para la historia que se está escribiendo

- **Linares** (8,63 ha) y **Linares Babaderos** (4,38 ha), al OSO, a 1,0-1,2 km. El lino aparece en
  Colinas en **1006**, en **1752** y en **1847**: tres siglos largos de la misma planta, y dos pagos
  que llevan su nombre. Coinciden con «Los Linares» de OpenStreetMap.
- **Quiñones** (2,06 ha, al O). Un *quiñón* es el lote en que un concejo reparte tierra común. Al
  otro lado de la raya, en Quiruelas, hay «Los Quiñones de la Hierba». Es vocabulario de concejo, y
  conecta con la 17.ª respuesta del Catastro de Ensenada de 1752.
- **Baldíos** (56,94 ha, al ENE). Tierra comunal, y de las grandes del término.
- **Arrotos** (19,88 ha) y **Arrotos de Caño Nuevo** (11,84 ha). *Arroto* es tierra roturada: nombra
  el momento en que alguien metió el arado donde no lo había.
- **Caleras** (22,87 ha, al SO). Hornos de cal.
- **Los Mártires** (2,69 ha, a 478 m al E). Hagiotopónimo, y el único del término aparte de El Valle.
- **Vega de Arriba** (27,36 ha), **Vega de Abajo** (16,97 ha), **Huergas**, **Presillas** y
  **Arenales Río** (30,93 ha): toda la vega del Tera, al sur. *Huergas* es *huelgas*, prado de ribera.
- **El Pendón** (57,23 ha, al NE). ⚠️ Anotado aquí por lo que pueda valer para
  [`06-identidad-simbolos`](../06-identidad-simbolos/repertorio-simbolico.md): un pago del término se
  llama *El Pendón*. **No se afirma nada**; se deja apuntado que el nombre existe y dónde está.
- **Tierras de la Mina** (8,03 ha, al SO). `[?]` Sin explicación.

---

## 6. El otro lado de la raya: 73 parajes de Quiruelas

Se barrió también el parcelario de los polígonos **001, 002 y 003**, que son el término de Quiruelas
de Vidriales, por dos razones concretas:

1. **Poner a prueba el segundo candidato de González Rodríguez.** El artículo de *Brigecio* 10 deja
   abierta la localización de Castroferrol entre San Juan-El Valle, en Colinas, y **un yacimiento
   llamado «San Miguel» en término de Quiruelas**.
2. **Saber cuáles de los nombres recogidos por el proyecto son del vecino**, que es la advertencia
   que arrastran el vaciado del MTN50 y la lista de OpenStreetMap.

**Muestreo de 1 de cada 3 parcelas: 1.668 consultas, 0 errores, 73 parajes** →
[`parajes-quiruelas-catastro.tsv`](parajes-quiruelas-catastro.tsv).

### ❌ No hay ningún «San Miguel»

Ni San Miguel, ni Castro, ni Ferrol, ni San Juan. En 73 parajes de Quiruelas, **ninguno**.

> ⚠️ **Es un muestreo, no un censo**: un paraje de una o dos parcelas ha podido escapar. Pero los 73
> que salen cubren **1.668 parcelas**, y los nombres grandes no se escapan de una muestra así.
>
> Sumado a que **Madoz tampoco lo recoge** —ni en la entrada de Quiruelas ni en la serie alfabética
> *San Miguel de…*, ver [`madoz-1847`](../01-fuentes-primarias/madoz-1847/README.md), §9— lo que
> queda es esto: **el nombre «San Miguel» del segundo candidato no está en la toponimia oficial de
> Quiruelas ni en Madoz.** Viene, con toda probabilidad, del inventario arqueológico de Larrén
> Izquierdo. **No se afirma que el yacimiento no exista**; se afirma que el topónimo no aparece por
> ninguna de estas dos vías.

### Lo que sí aparece enfrente

- ★★ **El Carbajal** (15,5 ha) y **Praderas del Carbajal**. El deslinde de **1129** nombra «*et ad
  Carvalio*» entre los hitos del coto. ⚠️ *Carvajal* es de los topónimos más repetidos del noroeste,
  y el coto de 1129 es el de Santa Marta de Tera, no el de Colinas. **Candidato mejor situado** que
  el «El Carvajal» de OpenStreetMap —que cae 3,2 km al norte, hacia Manganeses—, pero candidato.
- ★ **Sitramín** (11,1 ha). Santa Marta de Tera tuvo posesiones en **Sitrama**, y el callejero de
  Colinas conserva un «Camino de Sitrama». ⚠️ Anotado, sin conclusión.
- ★ **Los Quiñones** y **Los Quiñones de la Hierba**, justo enfrente de los **Quiñones** de Colinas:
  el vocabulario del reparto concejil, a los dos lados de la raya.
- **Linares del Nesillo**, que el proyecto tenía por OpenStreetMap: confirmado, y es de Quiruelas.
- **La Monja** (6,4 ha), **El Fraile** (21,0 ha), **La Capilla**, **El Calvario**, **El Moro**.
  ⚠️ **No se afirma nada con esto.** Son de los nombres más comunes del campo castellano y no
  documentan ninguna casa religiosa. Se anotan porque están en el término donde se propuso el
  segundo candidato, y porque alguien los buscará.
- **Cervilla** en Quiruelas y **Pico de la Cervilla** en Colinas: el mismo nombre partido por la raya.

### 🚨 Y una corrección al propio proyecto

Con el parcelario enfrente, varios nombres que este proyecto venía dando por de Colinas **son de
Quiruelas**: **El Pedazo**, **La Capilla**, **El Redondillo**, **Valmayor**, **Valdevacas**, **El
Raso**, **La Cabaña**, **El Monte** y **La Casa**. Algunos venían del vaciado del MTN50 —que cubre
cinco términos— y otros de puntos de OpenStreetMap que caían a 100 m de la raya sin decidir nada.

**El punto no decidía; el parcelario decide.**

> 🔎 **Un detalle que confirma una cautela.** «**Descuento**» aparece en los dos términos, y en los
> dos como uno de los conjuntos mayores. No es un topónimo: es la partida contable con la que el
> catastro de rústica agrupa caminos, cauces e improductivo. Que salga idéntica a los dos lados es
> la prueba.

---

## 7. Lo que estos ficheros **no** son

- **El de Colinas no es el término medido parcela a parcela.** Las 1.141 parcelas suman **994,3 ha**
  y el término mide **1.026,6**: faltan **32,3 ha**, que son caminos, cauces y vía pública no
  parcelados.
- **El de Quiruelas es una muestra de 1 de cada 3**, y sus superficies son **las de la muestra**, no
  las del paraje. Sirven para ordenar por tamaño, no para medir.
- **Las coordenadas de cada paraje son el centro de gravedad de sus parcelas**, ponderado por
  superficie. Para pagos alargados —una vega, un camino— ese punto puede caer en un sitio que nadie
  llamaría así. Sirve para situar, no para delimitar.
- **Es el nomenclátor de hoy, no el de siempre.** Un paraje que hoy se llama de una manera pudo
  llamarse de otra. Lo que este fichero permite es **cotejar** las tres capas —1975-77, MTN50 y
  Catastro— y ver qué se ha movido.

---

## Nota de reutilización

Datos de la **Dirección General del Catastro** (Ministerio de Hacienda), obtenidos de sus servicios
públicos INSPIRE y del servicio de consulta OVC, que pueden usarse libremente citando al Catastro
como autor y propietario de la información.

---

*Ficha redactada el 22 de septiembre de 2026.*

---

# ✅ `TAR-29` — el parcelario de **Santa Colomba de las Monjas**, y un negativo que vale

> **5 de octubre de 2026.** No es un término vecino de Colinas —está a **11,1 km al ESE**, al otro
> lado de Benavente—, y se barre por una razón concreta: el **3 de octubre** este proyecto propuso
> que el topónimo «**Vezinas / Ce\[z\]inas / Jecinas / Xeçinas**», que tres rollos fiscales del
> señorío ponen pegado a Colinas **en el renglón** entre 1526 y 1591, sea el despoblado de
> **Cejinas**, de la zona norte de ese término. **Había que ir a verlo**
> → [`censo-1591`, § 7](../01-fuentes-primarias/censo-1591/README.md).

## Cómo se ha barrido

| | |
|---|---|
| Término | **Santa Colomba de las Monjas** · DGC **49222** · INE **49199** |
| Servicio | el mismo que usó este proyecto para Quiruelas: `Consulta_DNPRC` del Catastro, leyendo `locs.lors.lorus.npa` |
| Alcance | **polígonos 1 a 4** —no hay más—, parcelas **de 3 en 3** hasta agotar cada polígono |
| Resultado | **233 parcelas con dato**, **40 parajes distintos** → [`parajes-santa-colomba-de-las-monjas.tsv`](parajes-santa-colomba-de-las-monjas.tsv) |

## 🚨 **No hay ningún paraje llamado Cejinas** — y esta vez el negativo es cerrado

Un muestreo normalmente **no puede probar una ausencia**: un paraje de una o dos parcelas escapa.
**Aquí sí puede**, por una propiedad del propio Catastro que el barrido deja a la vista:

> **Los códigos de paraje (`cpaj`) van en orden alfabético estricto y son correlativos.**
> Comprobado sobre los cuarenta: **1 ADOVIRAS, 2 BLANCA, 3 BOCAS GRANDES, 5 BOTIJOS, 6 CANTO,
> 7 CANTO BLANCO, 8 CMNO STA CRISTINA, 9 CORONAS, 11 EL BARRERO… 43 TRAS LA ALAMEDA**. **Sin una
> sola excepción.**

De los **43 códigos** que llega a usar el término, la muestra ha visto **40**. Los tres que faltan
quedan **encajonados entre dos nombres conocidos**, y ninguno de los tres huecos admite «Cejinas»:

| Hueco | Entre | y | ¿Cabe «CEJINAS»? |
|---:|---|---|:-:|
| **4** | BOCAS GRANDES | BOTIJOS | ❌ |
| **10** | CORONAS | EL BARRERO | ❌ |
| **38** | MONTE CERVATO | PICO DEL GRAJO | ❌ |

**Y donde tendría que estar, no hay sitio**: «CEJINAS» ordena **después de CANTO BLANCO (7) y antes
de CMNO STA CRISTINA (8)** —CE < CM—, y **los dos códigos están ocupados y son consecutivos**.

> ✅ **Conclusión, y es firme dentro de lo que mide:** **el Catastro de hoy no tiene en Santa
> Colomba de las Monjas ningún paraje llamado Cejinas.**

## ⚠️ Lo que eso sí y no significa

**No refuta el despoblado.** Un despoblado puede desaparecer del nomenclátor de parajes sin dejar
de haber existido: los parajes del Catastro son **una capa administrativa moderna**, no un registro
histórico, y el proyecto ya sabe que **recogen unos nombres y pierden otros**.

**Sí quita un apoyo.** La identificación propuesta el 3 de octubre se sostenía en **dos patas**: la
posición en la relación del obispo de 1587 —entre Sta. Coloma y Sta. Christina— y la noticia de
que en la zona norte de ese término hubo un despoblado de ese nombre. **La primera sigue en pie.
La segunda no recibe confirmación del parcelario**, que era la vía más barata de tenerla.

> 📏 **La identificación se queda, pues, donde estaba: ★★ propuesta fuerte, no cerrada**, y con
> **una comprobación menos**. Lo que queda por probar es **RIESCO CHUECA, *Toponimia de la
> provincia de Zamora*** (`LIB-05`), que es trabajo de toponimia y no de catastro.

> ⚠️ **Y una trampa que conviene señalar antes de que alguien caiga en ella.** El barrido devuelve
> en ese mismo término un paraje llamado «**LAS VECILLAS**» (código 33, polígonos 1 y 3).
> **No tiene nada que ver.** <s>Las grafías de 1587 y 1591 empiezan por **J/X**, y eso no se reduce
> a «Vecillas».</s> 🔁 **Ese argumento era malo y se corrige**: la grafía de 1528 empieza
> justamente por **V** («Vezinas»), y el apeo de 1663 añade formas en **L‑, C‑ y Z‑**, de modo
> que **la inicial no distingue nada**. **Lo que distingue es el cuerpo de la palabra**:
> ‑*(x/j/g/s)inas* frente a ‑*cillas*. **Parecido de oído, como el de «Valancinas».**

*Barrido del 5 de octubre de 2026. Los datos proceden de la Sede Electrónica del Catastro
(Dirección General del Catastro, Ministerio de Hacienda) y deben citarse así.*

---

# 🚨🔁 `TAR-31` — el apeo de 1663 **estrecha este negativo** (5 de octubre de 2026, tarde)

Horas después de cerrar `TAR-29` se leyó entero el **apeo del despoblado**, `OSUNA,C.457,D.36`
(Archivo Histórico de la Nobleza, 85 planas, 1663)
→ [`apeo-cejinas-1663`](../01-fuentes-primarias/apeo-cejinas-1663/README.md). **Dice algo que
cambia el alcance de lo que aquí se afirmó.**

> «*Copia del Apeo de las tierras que gozan varias Comunidades y Particulares en **el término
> despoblado de Lexinas, propio de este Estado de Benavente***»

Y a lo largo del cuaderno: «**la raya de Santa Colomba**», «**la raya del Lugar de Arcos**»,
«**la raya de Velilla**», y el rumbo «**hacia Santa Cristina**».

| | |
|---|---|
| ✅ **Sigue en pie** | **el Catastro de hoy no tiene en Santa Colomba de las Monjas ningún paraje llamado Cejinas**. El argumento alfabético no se toca |
| 🔁 **Se estrecha** | <s>«el parcelario no lo confirma»</s> → **el parcelario de Santa Colomba no lo confirma** |
| 🚨 **Y por qué** | en 1663 **Lexinas era término propio**, no un pago de Santa Colomba. Lindaba con **cuatro**: Santa Colomba, Arcos, Velilla y, por rumbo, Santa Cristina. **Se barrió uno** |

> 📏 **De dónde venía la premisa, y por qué falló.** La idea de buscar en Santa Colomba no salía
> de una fuente histórica: salía de **una descripción divulgativa** que ponía el despoblado «*en la
> zona norte de ese término*». El barrido comprobó bien **lo que se le pidió comprobar**; lo que
> estaba mal planteado era **la pregunta**. ★ **Y es el orden correcto de trabajo el que lo arregla:
> primero el documento, después el parcelario.**

> ⚠️ **Ruta intentada hoy y fallida, que se anota porque el hueco también es un dato.** Se quiso
> barrer en el acto **Arcos de la Polvorosa** y **Santa Cristina de la Polvorosa**. El servicio
> `ovcservweb` del Catastro **rechaza la conexión** desde esta máquina —`ECONNRESET`—, probado
> con **dos clientes distintos** (`requests` y el contexto del navegador) y por **dos rutas**,
> pocas horas después de haberle pedido las 233 parcelas de `TAR-29`. **No es un negativo del
> Catastro: es una puerta cerrada hoy.** Queda como **`TAR-32`**.

*Nota añadida el 5 de octubre de 2026.*
