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

> ⚠️ **La voz no está decidida.** La «sobria narrativa» que se describe abajo se probó en la era
> de Castroferrol (v0.15) y **se quedó corta**: comprimía la prosa, pero seguía empezando por el
> hecho y no por nadie. Hay un **comparador lateral** con cuatro redacciones de las mismas once
> entradas, para elegir a la vista antes de tocar las otras cuarenta y nueve:
> `web/src/prueba-voz.html`, que genera `web/gen-voz.py`.
>
> | | Voz | De dónde sale |
> |---|---|---|
> | **A** | Técnica | la redacción original, etiqueta `v0.14` |
> | **B** | Sobria | la publicada hoy, `v0.15` —la de abajo— |
> | **C** | Microhistoria | narrada, con escena y consecuencia |
> | **D** | Escena | frase corta, presente, más silencio |
>
> C y D están en `web/voces.json` y **no han entrado en la línea**. A y B se leen de los datos de
> verdad, así que el comparador no puede desincronizarse.

## La voz: sobria narrativa

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
