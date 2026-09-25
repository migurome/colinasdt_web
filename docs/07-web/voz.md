# La voz de la línea

Cómo se escriben las entradas de la línea temporal. Decidido el 25-IX-2026, después de
medir la prosa que había.

---

## El diagnóstico, medido

El problema **no era la frase larga**. La media estaba en **13,8 palabras por frase**, que es
prosa corta, y sólo 10 de 215 frases pasaban de treinta palabras.

El problema era la **densidad de datos dentro de cada frase**:

| Entrada | Frases | Lo que metían dentro |
|---|---|---|
| 1986 | 5 | 40 cifras y 12 nombres propios |
| 1975 | 4 | 21 nombres propios |
| 1694 (los curas) | 7 | 30 nombres propios |
| 1870 | 5 | 22 nombres propios |

Ocho o diez datos por frase, y **ninguna consecuencia**. Falta el «y por eso», falta la persona,
falta el para qué. Era una lista con verbos: no se leía, se consultaba.

---

## ✅ La voz, decidida por votación (25-IX-2026)

Las cuatro redacciones se pusieron una al lado de otra en un artefacto con votos, y se eligió **entrada por entrada**. Once entradas, once votos.

| Año | Voz |
|---|---|
| 962 · Una viña en «villa Kastro Ferronio» | **C** · Microhistoria |
| 963 · Adrico y Faquilo | **C** · Microhistoria |
| 985-999 · Nace un monasterio dúplice | **B** · Sobria |
| 1006 · La abadesa Bendicta | **B** · Sobria |
| 1015 · Nueve nombres | **B** · Sobria |
| 1060 · Las particiones | **B** · Sobria |
| 1073 · Colinas por su nombre | **D** · Escena |
| 1129 · Una vereda | **C** · Microhistoria |
| 1170 · Fernando II | **B** · Sobria |
| ss. XI-XIII · La sala que ardió | **C** · Microhistoria |
| El silencio, 1170-1526 | **A** · Técnica |

**Recuento: B 5, C 4, A 1, D 1.** Pero el recuento no es la lección; el reparto sí:

- **B, la sobria, gana donde el hecho es un acto de documento** —una donación, unos testigos, una partición, una confirmación—. Ahí el documento ya tiene su propio drama y la escena sobra.
- **C, la microhistoria, gana donde hay un objeto o un gesto**: la viña, el reparto de la hacienda a la Iglesia, el deslinde que echa a andar, la sala que ardió.
- **D, la escena, gana en 1073**, que son cuatro palabras y nada más: la única entrada donde el texto puede permitirse el silencio.
- **A, la técnica, gana en el silencio documental.** Donde no hay nada que contar, contarlo menos es contarlo mejor.

> La regla que sale de aquí, y que vale para las otras cuatro eras: **la voz se elige por entrada, no por línea.** El comparador sigue en `web/src/prueba-voz.html` y el artefacto de votos guarda el resultado.

---

## Las cuatro voces

### B · Sobria narrativa

Lo que ya hacían las mejores entradas del propio proyecto, aplicado a todas. El modelo interno
estaba en la de 1972:

> «El concejo que en **1752** tenía molino y fragua propios **se disuelve a petición suya**.»

No hay nada inventado y sin embargo hay drama: conecta dos momentos y el juicio lo pone el lector.

### Las seis reglas

1. **Una idea por frase, un dato por idea.** Los otros nueve datos van a la cautela o a «Las
   fuentes».
2. **Empezar por la persona o por el gesto**, nunca por la institución. «El cura obedece y no
   cumple», no «se procede a la notificación».
3. **Decir siempre la consecuencia.** Si un dato no tiene un «y eso significa», probablemente no
   es entrada: es nota.
4. **Las listas de nombres, fuera del cuerpo.** Los ocho pueblos de 1870 y los doce curas de 1694
   son tabla, no prosa.
5. **La duda se narra, no se esconde.** «No sabemos cuándo se acabó» es mejor frase que cualquier
   rodeo.
6. **Ningún adjetivo que el documento no sostenga.**

### Lo que esto NO es

⚠️ **Novelar aquí no puede significar inventar.** Todo lo que se gana sale del **ritmo, el orden y
la consecuencia**, nunca de color añadido. Si una frase necesita un detalle que no está en el
papel, esa frase no se escribe. El dato que se saca del cuerpo **no se tira**: baja a la cautela,
que para eso está.

---

## De dónde viene

**La microhistoria**, que es literalmente esto: gente que convirtió expedientes de archivo en
narración sin inventarse nada, y que **narra la incertidumbre en vez de esconderla** —lo que este
proyecto necesita, con sus quince marcas `[?]`—.

- **Carlo Ginzburg**, *El queso y los gusanos*. Un molinero, unas actas inquisitoriales, y se lee
  como una novela. El patrón oro.
- **Alain Corbin**, *El mundo recobrado de Louis-François Pinagot*. Reconstruye a un hombre del
  que no se sabe nada, **precisamente porque no se sabe nada**. Es el caso de Colinas: cómo
  escribir desde el hueco.
- **Natalie Zemon Davis**, *El regreso de Martin Guerre*, y **Le Roy Ladurie**, *Montaillou*.
  Aldeas enteras levantadas desde registros judiciales.

**Y para el registro en español, de aquí al lado:**

- **Julio Llamazares**, *El río del olvido* y *La lluvia amarilla*. León, la raya de Zamora, los
  pueblos que se vacían.
- **Ramón Carnicer**, *Donde las Hurdes se llaman Cabrera*. La misma comarca.
- **Sergio del Molino**, *La España vacía*. El marco contemporáneo en el que esta web se lee,
  quiera o no.
- **Arturo Pérez-Reverte**, por coherencia con las ilustraciones, que se pidieron en el registro
  de las portadas de Alatriste.

---

## Estado

| Era | Entradas | Voz |
|---|---|---|
| Antes del nombre | 3 | pendiente |
| **Castroferrol** | **11** | ✅ **reescrita el 25-IX-2026 (v0.15)** |
| Lugar del conde de Benavente | 20 | pendiente |
| El ayuntamiento | 16 | pendiente |
| La pedanía | 11 | pendiente |

**El resultado de la primera era**, medido igual que el diagnóstico:

| | Frase (palabras) | Carga de datos por frase |
|---|---|---|
| Castroferrol, reescrita | 13,2 | **2,4** |
| El resto, sin tocar | 13,4 | 4,9 |

La frase no se ha alargado ni el vocabulario se ha simplificado. Lo que ha bajado —a menos de la
mitad— es **cuánto se le pide al lector por frase**.

> Para volver a medir: `node /tmp/prosa.js` con el script de medición, o repetir el conteo de
> cifras y nombres propios por frase sobre `p3-data.js`.
