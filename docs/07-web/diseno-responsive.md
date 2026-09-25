# La web, en dos lecturas — escritorio y teléfono

> **Estado: especificación, no implementación.** `web/src/` **sigue sin tocarse**, por instrucción
> expresa. Este fichero fija **qué se va a hacer y por qué**, para que el día que se levante el
> bloqueo no haya que volver a decidirlo.
>
> Medido sobre la web publicada a 22 de septiembre de 2026: **33 entradas** en la línea temporal.
>
> ✅ **Y desde el 25 de septiembre hay una prueba navegable** de lo que aquí se describe, con el
> contenido real: [`web/prueba-movil/index.html`](../../web/prueba-movil/index.html). Se abre con
> doble clic; en pantalla ancha se ve dentro de un marco de teléfono, con una columna que explica
> qué se está mirando.
>
> ⚠️ **La prueba no toca `web/src/`.** Lee `p3-data.js` y **copia** los datos: se regenera con
> `python web/prueba-movil/build-prueba.py` cada vez que la línea cambie, y es lo que hay que hacer
> **antes** de dar por buena cualquier lectura de la prueba.

---

## 1. El principio: **un solo dato, dos lecturas**

No se hacen dos webs. **Los datos son los mismos** —`p3-data.js`, sin tocar su estructura— y lo que
cambia es **cómo se recorren**:

- **En escritorio y tableta**, un **documento**: se lee de arriba abajo, se compara, se ve la
  línea entera de un vistazo. **Es lo que hay hoy y no se cambia.**
- **En teléfono**, un **feed**: una pieza cada vez, a pantalla completa, y lo accesorio **al lado**,
  no debajo.

> ⚠️ **Esto no es una concesión estética.** Es la diferencia entre **consultar** y **encontrarse**
> algo. En el escritorio el visitante viene a buscar; en el teléfono, a pasar el rato. La web tiene
> que estar escrita para las dos cosas **sin bajar el listón de la prueba** en ninguna.

---

## 2. Escritorio y tableta — **sin cambios**

Cabecera con el cajetín, línea temporal vertical con la escala y los filtros, y la información
complementaria a la derecha. Tal cual está.

---

## 3. Teléfono — el feed

### 3.1 La unidad: **una entrada = un post**

Cada entrada de la línea ocupa **la pantalla entera**. Se pasa de una a la siguiente **deslizando
hacia arriba**, con el encaje que da `scroll-snap`.

### 3.2 Las láminas del carrusel **no se inventan: ya están en los datos**

Éste es el hallazgo que hace barato todo el diseño. Cada entrada de `p3-data.js` tiene unos campos
fijos, y **cada campo es una lámina**:

| Campo | Lámina | Qué lleva |
|---|---|---|
| `y` · `d` · `t` · `era` | **1 · Portada** | El año en grande, el título, la franja de la era. Siempre. |
| `q` | **2 · La cita** | El texto literal de la fuente, en grande y sin adorno. |
| `p` | **3 · El relato** | La prosa. Siempre. |
| `img` | **4 · La imagen** | La imagen con su `cap` y su `alt` — ya escritos. |
| `nota` | **5 · La cautela** | ⚠️ Lo que no se sabe, lo que se discute, lo que es enmienda. |
| `f` | **6 · La firma** | La referencia completa, y el enlace si lo hay. Siempre. |

**Los números salen solos**, sin escribir una línea de contenido nuevo:

| Láminas por entrada | Entradas |
|---:|---:|
| 3 | 15 |
| 4 | 9 |
| 5 | 8 |
| 6 | 1 |
| **Total** | **33 entradas · 127 láminas** |

> ✅ **Un post «de texto simple» tiene tres láminas** —portada, relato y firma— y se comporta como
> pide el diseño: **se ajusta a pantalla y ya está**. Los que tienen cita, imagen o cautela
> **se pueden deslizar lateralmente**. La diferencia entre un post corto y uno largo **no hay que
> decidirla: la decide el material**, que es como debe ser en este proyecto.

### 3.3 🚨 El sello de prueba **viaja en cada lámina**

En la web actual, el grado de prueba —*fuente vista*, *por cotejar*, *interpretación*, *propuesta*—
se pinta **una vez por entrada**. **En un feed eso no vale.** Una lámina se ve aislada, se captura y
se comparte suelta; si el sello se queda en la portada, **una propuesta puede circular como si fuera
un hecho documentado**.

Por eso, en modo teléfono:

1. **Todas las láminas llevan el sello**, en pequeño, en la esquina.
2. **Todas llevan el pie de fuente abreviado**; la lámina 6 lo da entero.
3. **La lámina de cautela no se puede suprimir** por diseño. Si una entrada tiene `nota`, tiene
   lámina de `nota`.

> Es el criterio del proyecto llevado al soporte: **el dato no se separa de su firma, ni siquiera
> cuando el soporte invita a separarlos.**

### 3.4 El croquis

```
┌───────────────────────────┐
│ ●○○○                   ▓  │  ← puntos del carrusel  · sello de prueba
│                        ▓  │
│                        ┃  │
│        1 0 7 3         ┃  │  ← el año, grande
│                        ┃  │
│   Colinas aparece      ┃  │
│   por su nombre        ┃  │     la línea temporal,
│                        ┃  │     como barra de
│                        ◆  │  ←  desplazamiento:
│                        ┃  │     el rombo es dónde
│                        ┃  │     estás
│ ‹ desliza al lado      ┃  │
│                        ┃  │
│ Ruiz Asencio IV, 1186  ┃  │  ← firma abreviada, siempre
└───────────────────────────┘
        ▲ desliza arriba para la entrada siguiente
```

### 3.5 Movimiento y transición

- **Vertical, entre posts**: `scroll-snap-type: y mandatory` sobre el contenedor; cada post,
  `scroll-snap-align: start` y `height: 100svh` —`svh`, no `vh`, para que la barra del navegador no
  corte la última línea—.
- **Horizontal, dentro del post**: el carrusel es **un contenedor con scroll real**
  (`overflow-x: auto`, `scroll-snap-type: x mandatory`). Deslizar funciona **sin JavaScript**: es el
  gesto nativo del navegador. El JS sólo pinta los puntos y sincroniza el rombo.
- **La entrada de cada lámina**: opacidad y un desplazamiento corto —`translateY(8px)`—, disparados
  por `IntersectionObserver`. **Nada de rebotes ni de escalados**.
- ✅ **`prefers-reduced-motion` ya está respetado** en la hoja de estilos actual, y **la regla
  vale también aquí**: con esa preferencia activa, el feed sigue funcionando y **no se anima nada**.

---

## 4. La línea temporal como barra de desplazamiento

El raíl va **pegado al borde, de arriba abajo**, y hace tres cosas a la vez:

1. **Dice dónde estás**: un rombo se desplaza según avanza el feed.
2. **Lleva a donde quieras**: se arrastra, y al soltar salta a esa entrada. Un toque en cualquier
   punto, lo mismo.
3. **Dibuja la forma del tiempo**: una marca por entrada, **agrupadas por era**, con la misma escala
   comprimida que ya usa el SVG de la web para que el III milenio a.C. no se coma el resto.

Mientras se arrastra, aparece **la etiqueta del año** junto al dedo. Se suelta y desaparece.

> ★ **Esto ya está medio hecho.** La escala del escritorio (`#escala` en `p4-app.js`) **ya calcula
> las posiciones** con su función de compresión y **ya sabe saltar a una entrada al pulsarla**. El
> raíl del teléfono es esa misma función puesta en vertical.

**Los filtros por grado de prueba siguen funcionando**: al filtrar, los posts que no cumplen
desaparecen del feed **y sus marcas se apagan en el raíl**, igual que hoy.

---

## 5. Lo que **no** se copia de Instagram

Conviene dejarlo escrito, porque el parecido es el riesgo:

| ❌ No | Por qué |
|---|---|
| Avance automático de láminas | El visitante lee a su ritmo. Una cita en latín no se lee en cinco segundos. |
| Texto encima de la imagen | Los facsímiles son ilegibles debajo de una capa de texto. **La imagen ocupa su lámina.** |
| Recortar a cuadrado | Un folio manuscrito recortado a 1:1 **pierde el documento**. Se muestra entero. |
| Contadores, corazones, «me gusta» | No hay nada que medir aquí. |
| Scroll infinito | El feed **termina**, y termina en 2026. Con su final escrito. |
| Esconder la fuente detrás de un «ver más» | Es justo lo contrario del criterio del proyecto. |

---

## 6. Accesibilidad — y el modo de escape

- El carrusel es **un contenedor con scroll nativo**: el teclado y el lector de pantalla lo recorren
  sin trabajo extra.
- Cada post es un `<article>` con su `<h3>`; el feed, una lista. **El orden del DOM es el orden del
  tiempo**, y eso no cambia entre modos.
- **La imagen conserva su `alt`**, que en este proyecto está escrito con cuidado y describe el
  documento, no la foto.
- ✅ **Escape**: un enlace *«ver como documento»* que devuelve la vista de escritorio en el teléfono,
  recordado en `localStorage`. Para quien prefiera leer del tirón, y para poder comparar las dos
  lecturas cuando se esté ajustando.

---

## 7. Qué habría que tocar, cuando se levante el bloqueo

| Fichero | Qué |
|---|---|
| `parts/p1-head.html` | Los estilos del feed y del raíl, dentro de un `@media`. **Nada de lo existente se modifica.** |
| `parts/p2-body.html` | Un contenedor vacío para el feed y otro para el raíl, junto a la línea actual. |
| `parts/p3-data.js` | **Nada.** Ése es el punto: el modelo de datos ya sirve. |
| `parts/p4-app.js` | Construir las láminas a partir de los campos, los puntos, el raíl y el `IntersectionObserver`. Reutilizando la escala que ya existe. |
| `build.sh` | **Nada.** Sigue concatenando las cuatro piezas. |

**Sin dependencias nuevas.** Todo es CSS `scroll-snap` y JavaScript sin biblioteca, que es como está
escrita la web hoy.

---

## 8. Lo que falta por decidir

No se decide aquí porque no hace falta decidirlo todavía:

1. **A partir de qué ancho** entra el feed. Los cortes que ya usa la hoja son 480, 640, 760, 860 y
   900 px; **760 px** es el candidato natural.
2. **El raíl, ¿a la derecha o a la izquierda?** A la derecha cae bajo el pulgar de la mayoría; a la
   izquierda estorba menos al gesto de «atrás» de Android.
3. **Si las demás secciones entran o no en el feed** —«El término», «La gente», «Materia para un
   emblema»—. Lo natural es que **la línea temporal sea feed y el resto siga siendo documento**, pero
   está abierto.
4. **Si el orden del feed es el del tiempo o el del hallazgo.** Hoy es el del tiempo, y cambiarlo
   sería otra web.

---

## 9. El aviso que importa

⚠️ **Este diseño mueve el escaparate, no el contenido.** La línea temporal que iría al feed **es la
del 22 de septiembre**, y desde entonces hay material para **una veintena de entradas nuevas** —entre
ellas **1073**, que sería la más antigua del pueblo—.

→ **Primero se pone al día la línea, y después se monta el feed.** Un carrusel muy bien hecho de un
relato atrasado sigue siendo un relato atrasado. La lista de lo que falta está en
[`estado-del-arte.md`](../estado-del-arte.md), §7.

---

*Acordado el 25 de septiembre de 2026. `web/src/` sin modificar.*
