# Ilustraciones generadas

Registro de las imágenes que **no son documentos**: las que se han generado con un modelo de
imagen para acompañar una entrada de la línea temporal.

---

## La regla

Una ilustración generada **no prueba nada**. No es una fuente, no es un facsímil y no puede
presentarse como ninguna de las dos cosas. Entra en el proyecto con tres condiciones:

1. **Campo aparte en los datos.** En `web/src/parts/p3-data.js` una entrada puede llevar dos
   campos de imagen, y significan cosas distintas:
   - `img` — **reproducción documental**: facsímil, planta de excavación, dibujo arqueológico,
     impronta de sello. Se muestra entera y con su pie. **No se recorta a sangre ni se escribe
     encima.**
   - `ilu` — **ilustración interpretada**. Lleva `gen` con el modelo y la fecha, que es su firma.
2. **El pie lo dice siempre.** En la web, cualquier lámina que lleve una `ilu` escribe
   «Ilustración interpretada» en el pie, la vea quien la vea. En un feed una lámina se comparte
   suelta, y una interpretación no puede circular como si fuera un hecho documentado.
3. **El prompt queda escrito aquí, entero.** En una imagen generada, el modelo y el prompt son lo
   único verificable que tiene: **son su signatura**. Sin ellos no entra.

### Cómo se integra en la lámina del teléfono

El campo `tr` elige el tratamiento. Están los cuatro implementados, aunque sólo se use uno:

| `tr` | Qué hace |
|---|---|
| `caja` *(por defecto)* | Con su marco y su pie, como una figura del texto. |
| `vineta` | A sangre por abajo, deshecha en el papel por arriba. |
| `aguada` | De fondo, rebajada, con el texto encima. |
| `portada` | La ilustración es el campo entero y el texto va escrito sobre ella. |

**Se aplican a cualquier imagen**, `img` o `ilu`, y se eligen entrada por entrada.

> **Esto cambió el 25-IX-2026, y conviene que conste por qué.** Al principio los tratamientos a
> sangre quedaron reservados a `ilu`: recortar un facsímil y escribir encima lo convierte en
> decoración. La elección, hecha imagen por imagen, resultó ser otra y estar bien razonada: a
> **portada** fueron los dos que funcionan como campo —los dibujos de cerámica del III milenio y
> la página del Catastro, que en el feed nunca fueron legibles como documento—, a **viñeta** el
> sello, que es un objeto único emergiendo, y en **caja** se quedaron los tres que hay que leer
> enteros: la planta de la sala, los materiales tardorromanos y las ollas de 1993.
>
> Para que el cambio no costara la referencia, **el pie de la imagen baja al texto de la lámina**
> cuando la imagen pasa a ser el fondo. La signatura del Catastro, el número de figura o la
> leyenda del sello siguen escritos en todos los tratamientos.

Un facsímil, además, es papel claro y no un dibujo en penumbra: lleva la clase `t-doc`, que le
pone más velo para que el texto lea encima y deja el pie en tinta normal.

Para verlos y comparar: `web/src/prueba-ilustracion.html` —arriba y abajo se recorre la línea, al
lado los cuatro tratamientos de la misma entrada—. Es una herramienta de decisión, va con
`noindex` y sin enlace desde el sitio.

---

## 1006 · La abadesa Bendicta y la iglesia de San Salvador

- **Fichero**: `web/src/img/abadesa-1006.jpg` (1400 × 933). Original en
  `Documentacion/IA_Gen/`.
- **Modelo**: ChatGPT (generación de imagen). **Fecha**: 25 de septiembre de 2026.
- **Tratamiento**: `portada`.
- **Grado de prueba de la entrada**: por cotejar. La ilustración, en todo caso, es
  **interpretación**.

### Por qué esta entrada

De todos los nombres de la línea —Adrico y Faquilo (963), los nueve de 1015, Diego Muñoz (1060),
Martín Alonso (1551), Chirivoga (1613), Cecilia (1976)— es el único caso donde **no hay ni puede
haber retrato**, así que una imagen nueva no compite con ninguna iconografía real ni puede
confundirse con un facsímil perdido. Con Fernando II pasaría lo contrario: existe el Tumbo A. Y
Cecilia queda descartada de entrada, que es de 1976 y hay familia viva.

**La imagen no es de ella.** No es un retrato: no se le inventa la cara a una persona documentada.
Es la comunidad que el diploma dice que existía, con ella al frente.

### El prompt, entero

```
Charcoal and sanguine drawing on warm toned paper, in the tenebrist tradition of
Spanish Golden Age painting: a single low raking light source, deep velvety
blacks, soft smudged half-tones, visible hatching and eraser-lifted highlights,
heavy paper grain. Fully modelled volumes and drapery.
NOT flat, NOT vector, NOT minimalist, NOT clip art, no uniform-weight outlines,
no symmetrical heraldic arrangement.

Landscape 3:2. Almost monochrome: bistre, sepia, soot black and warm paper, with
one single cool accent of flax blue used only on the flowers and the far water.

FOREGROUND, placed off-centre to the left on the thirds: an abbess of the year
1006, three-quarter view, standing, weathered and composed, in a heavy undyed
woollen habit and veil falling in deep sculptural folds. She holds a plain
wooden staff. Lit hard from the low left, so half her face falls into deep
shadow under the veil — the features are suggested, not described: this is not
the portrait of a known person. No halo, no mitre, no jewellery.
At her feet, half lost in shadow, a coarse earthenware cooking pot, its shoulder
incised with a simple grid of crossed lines.

MIDDLE GROUND, behind her and further down in the light: eight members of her
community, men and women together — some tonsured, some veiled — standing in
loose uneven groups, never in a row. Faces mostly swallowed by shadow, put down
in a few strokes. They read as one single mixed community of equal rank.

BACKGROUND, faint, nearly dissolved in the gloom: a small single-nave church of
dry-laid slate masonry, one door, a plain cross at the roof line; beyond it, a
pale band of river light.

LOWER EDGE, catching the light: flax in flower, five-petalled — the only
saturated colour in the whole image.

MUST NOT INCLUDE: any text, letters, numerals or writing; anything resembling a
manuscript page, parchment, vellum, illuminated initials or gold leaf; fake
ageing of the image itself — burns, tears, foxing, stains or cracks that would
make it pass for a historical artefact; photographic or 3D rendering; crowns,
mitres, heraldry or coats of arms; modern objects or clothing; decorative
borders or frames.
```

> **Sobre la referencia.** El estilo se pidió describiendo **la técnica** y anclándola en Ribera y
> Zurbarán, no nombrando a los ilustradores vivos de las portadas que dieron la idea. Llega al
> mismo sitio sin pedirle a un modelo que copie a alguien que sigue trabajando.

### De dónde sale cada cosa

| En la imagen | Fundamento |
|---|---|
| Abadesa al frente | «yugo de hermanos y hermanas» bajo la abadesa Bendicta, 1006 |
| Hombres y mujeres, mismo rango | El monasterio es dúplice: es el dato, no un adorno |
| La iglesia | «in cuius honore dedicata est ecclesia» — San Salvador |
| Mampostería de pizarra en seco | La sala excavada en 1993 — **ss. XI–XIII, no la iglesia de 1006** |
| La banda de agua al fondo | «junto a las aguas corrientes o río Teira» |
| El lino en flor | «linares» entre lo donado en 1006, y 12 fanegas de lino en el Catastro de 1752 |
| La olla con retícula incisa | Ollas 93/27/19 y 93/27/21, **siglo XI, de este mismo suelo** |
| La paleta | Las seis muestras de «Materia para un emblema» |

### Lo que es licencia, y consta

- **El báculo** no lo dice el documento. Se le pone por convención iconográfica.
- **La forma de la iglesia** se toma prestada de una sala un siglo posterior.
- **La luz dramática** es pura convención: en 1006 esto era un valle a oscuras.
- **Sin aureola** —no es santa— y **sin mitra** —es abadesa, no obispo—: eso sí es fidelidad.
- **El rostro a media sombra** es deliberado. Es la manera de no inventarle la cara a una persona
  documentada sin renunciar al carácter.

### Pendiente

- ⚠️ **Condiciones de uso de la imagen generada**, sin comprobar: qué dicen los términos del
  servicio sobre titularidad y reutilización de lo que produce. Va con lo que ya está anotado en
  [CREDITOS.md](../../CREDITOS.md), «Lo que falta hacer», puntos 2 y 3.
- Encuadre: la ilustración se generó sin saber que iba a sangrar. Si en algún tratamiento la
  cabeza cae en la zona de desvanecido, **la próxima hay que pedirla con aire arriba**.
