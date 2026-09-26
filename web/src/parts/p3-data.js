const NIVELES = {
  visto:     { t: 'Fuente vista' },
  sinleer:   { t: 'Catalogada, sin leer' },
  cotejar:   { t: 'Por cotejar' },
  sinref:    { t: 'Sin localizar' },
  interp:    { t: 'Interpretación' },
  propuesto: { t: 'Propuesta' },
  contexto:  { t: 'Contexto' }
};

const ERAS = [
  { id: 1, t: 'Antes del nombre', span: 'III milenio a.C. – s. V' },
  { id: 2, t: 'Castroferrol', span: '962 – 1170' },
  { id: 3, t: 'Lugar del conde de Benavente', span: '1526 – 1826' },
  { id: 4, t: 'El ayuntamiento', span: '1833 – 1970' },
  { id: 5, t: 'La pedanía', span: '1970 – hoy' }
];

const EVENTOS = [
  { id: 'bodegas', era: 1, y: 'III milenio a.C.', s: -2250, n: 'visto',
    t: 'Alguien cava silos donde hoy están las bodegas',
    p: 'Al norte del pueblo, al pie del promontorio en el que están horadadas las bodegas —y que da nombre al pago—, cuatro hoyos-silo de la Edad del Cobre, de metro y medio de hondo y casi dos metros de diámetro, y una gran zanja de diez metros de ancho. La cerámica es lisa y de cocción reductora, con un motivo que los excavadores dan por inédito en la zona: pastillas en relieve.',
    nota: 'La zanja no está explicada: los autores barajan vertedero, drenaje de los silos, foso defensivo o el cauce fosilizado de un arroyo. Y la fecha viene por comparación con el yacimiento vecino de Los Bajos, no de una datación propia.',
    img: { src: 'img/bodegas-fig12-ceramica.jpg', w: 900, h: 1204, alt: 'Dibujos arqueológicos de cuencos y vasos calcolíticos lisos, con perfiles y numeración de inventario.', cap: 'Cerámica lisa y decorada de «Las Bodegas» (fig. 12). Piezas 93/24.' },
    tr: 'portada',
    f: 'Pérez Rodríguez et al., «Algunos aspectos de la Edad del Cobre en el Valle medio del río Tera», Anuario 1993, IEZ «Florián de Ocampo», pp. 49-78' },

  { id: 'petavonium', era: 1, y: '19 a.C.', s: -19, n: 'contexto',
    t: 'Petavonium, a quince kilómetros',
    p: 'Campamento de la Legio X Gemina en Rosinos de Vidriales, y después del Ala II Flavia, hasta mediados del siglo III. No es Colinas: es el mundo romano que la rodea, y así hay que contarlo.',
    ilu: { src: 'img/prov/petavonium.jpg', w: 1000, h: 667, prov: true,
      alt: 'Imagen provisional: trama abstracta, en el color de la era y con la trama del grado de prueba, mientras la entrada no tenga ilustración.' },
    tr: 'portada',
    f: 'Contexto regional · inventario, §9' },

  { id: 'tardorromano', era: 1, y: 's. IV–V', s: 400, n: 'visto',
    t: 'Primera ocupación en San Juan-El Valle',
    p: 'Sigillata hispánica tardía, cerámica gris estampillada con rosetas, un cubilete del alfar de Melgar de Tera y vidrio tallado. A 200 metros, dos tumbas romanas cubiertas con tégulas.',
    img: { src: 'img/excavacion-fig3-tardorromano.jpg', w: 900, h: 803, alt: 'Dibujos de cerámica y vidrio tardorromanos hallados en el yacimiento.', cap: 'Materiales tardorromanos del yacimiento (fig. 3 del artículo de 1993).' },
    f: 'Martín Carbajo et al., Anuario 1993, IEZ «Florián de Ocampo», pp. 37-48' },

  { id: 'd962', era: 2, y: '962', d: '1 de marzo', s: 962, n: 'cotejar',
    t: 'Una viña en «villa Kastro Ferronio»',
    p: 'Antes de que hubiera monasterio, antes de que hubiera señor y mucho antes de que el sitio se llamara Colinas, aquí había una viña de una aranzada junto al riachuelo Almucera.|Rauper y Mansuara se la habían comprado a Donelo; ahora se la pasan a Nuño Sarracíniz y a Gudigeva. Y el escriba, para que no haya dudas mañana, anota por dónde linda: con la viña de un tal Iahia, con el término de Amor, con el de Fortes.|Eso es todo. Un trato entre vecinos por un pedazo de tierra. <b>La primera vez que este lugar aparece escrito no aparece como propiedad de nadie importante</b>: aparece como una viña con vecinos alrededor.',
    nota: 'Que la viña esté junto al Almucera es lo que descarta Villaferrueña, que está junto al Eria. La confusión venía de ahí. Los compradores son Nuño Sarracíniz y su mujer Gudigeva; se la habían comprado a Donelo, y linda con la viña de Iahia y con los términos de Amor y de Fortes.',
    ilu: { src: 'img/prov/d962.jpg', w: 1000, h: 667, prov: true,
      alt: 'Imagen provisional: trama abstracta, en el color de la era y con la trama del grado de prueba, mientras la entrada no tenga ilustración.' },
    tr: 'portada',
    f: 'GONZÁLEZ RODRÍGUEZ, «Castroferrol, un enclave monástico altomedieval en el valle del Tera», Brigecio 10 (2000), apéndice documental · ed. Sáez y Sáez, Col. doc. de la Catedral de León, II, doc. 353' },

  { id: 'd963', era: 2, y: '963', s: 963, n: 'cotejar',
    t: 'Adrico y Faquilo donan cuanto tienen en Castroferrol',
    p: 'Un año después de aquella viña, otro matrimonio hace cuentas con la eternidad. Adrico y Faquilo, con sus hijos, le entregan a la catedral de Astorga todo lo que tienen aquí: <b>la mitad ahora, el resto cuando se mueran</b>.|A cambio de qué, no lo sabemos: de este documento no se conserva el texto, sólo un resumen de unas líneas copiado siglos más tarde.|Lo que sí se ve es el efecto. En dos años, Castroferrol ha pasado de ser cosa de vecinos a tener dentro a la Iglesia. Y ya no la va a echar.',
    nota: 'De este diploma no se conserva el texto, sólo un breve extracto en el Tumbo Negro. Sigue sin edición crítica.',
    ilu: { src: 'img/prov/d963.jpg', w: 1000, h: 667, prov: true,
      alt: 'Imagen provisional: trama abstracta, en el color de la era y con la trama del grado de prueba, mientras la entrada no tenga ilustración.' },
    tr: 'portada',
    f: 'BNE, ms. 4357, Tumbo Negro de Astorga, fol. 51v · localizado por González Rodríguez, Brigecio 10 (2000), nota 9' },

  { id: 'bermudo', era: 2, y: '985–999', s: 992, n: 'cotejar',
    t: 'Nace un monasterio dúplice',
    p: 'Monjes y monjas en la misma casa y bajo el mismo gobierno, en el reinado de Bermudo II. La villa no la compró la familia fundadora: se la dio el rey, <b>a cambio de unas tierras que antes les había confiscado</b> en el Bierzo. El monasterio nace de una compensación.',
    /* Retrato de contexto: la cara de quien da nombre al documento,
       no una imagen de Colinas. El pie de la lámina lo dice solo. */
    img: { src: 'img/ret/bermudo.jpg', w: 725, h: 1427, ctx: true,
      alt: 'Miniatura medieval: un rey coronado, sentado en el trono bajo un arco, con la espada en una mano y un globo dorado en la otra.',
      cap: 'Vermudo II en el Compendio de crónicas de reyes, códice de hacia 1312-1325 (BNE). Se pintó tres siglos después de su reinado: no es un retrato, es la idea que entonces se tenía de él. <span class="mono">autor desconocido · Wikimedia Commons, Public domain</span>' },
    tr: 'portada',
    f: 'Síntesis de la bibliografía sobre el documento de 1015' },

  { id: 'd1006', era: 2, y: '1006', d: '26 de junio', s: 1006, n: 'cotejar',
    t: 'La abadesa Bendicta y la iglesia de San Salvador',
    q: '«patronus nostri Sancti Salvatoris… in cuius honore dedicata est ecclesia»',
    /* No es un facsímil: es una ilustración interpretada. Va en campo aparte
       para que el pie lo diga siempre, la vea quien la vea. */
    ilu: { src: 'img/abadesa-1006.jpg', w: 1400, h: 933,
      alt: 'Ilustración interpretada: una abadesa con báculo en primer término y, detrás, una comunidad de monjes y monjas ante una pequeña iglesia de piedra junto al río.',
      cap: 'La comunidad de hermanos y hermanas ante la iglesia de San Salvador, según lo que dice el diploma de 1006 y nada más. Ni el rostro, ni los hábitos, ni la forma de la iglesia constan en fuente alguna.',
      gen: 'Generada con ChatGPT el 25-IX-2026' },
    tr: 'portada',
    p: 'Oma Iuve entrega al monasterio cuanto tiene, con su hijo Veila y la mujer de éste, Gontrode. Entre lo donado, además de molinos y pesqueras, hay <b>linares</b>. El latín dice luego dos cosas seguidas, y las dos importan: que la iglesia está dedicada a San Salvador, y que allí hay «yugo de hermanos y hermanas» bajo una abadesa, Bendicta. <b>Una mujer al frente de una casa de hombres y mujeres</b>, junto al Tera, en el año 1006.',
    nota: 'La fecha es una enmienda, no una lectura. La copia de 1613 trae una era que daría 976, imposible con el rey y el obispo que el propio texto nombra; se adopta 1006, que es la que da un extracto de la Biblioteca Nacional.',
    f: 'GONZÁLEZ RODRÍGUEZ, «Castroferrol, un enclave monástico altomedieval en el valle del Tera», Brigecio 10 (2000), apéndice documental · AHN, ms. 1195B, f. 688r-v · ed. Cavero Domínguez y Martín López, Col. doc. de la catedral de Astorga, I, doc. 200' },

  { id: 'd1015', era: 2, y: '1015', d: '22 de enero', s: 1015, n: 'cotejar',
    t: 'Nueve nombres, y la fecha exacta',
    q: '«Frater Joanis, Veila, Absub, Evite Monde, Muza, Gundisaluo, Hauiue, Nazarus, Amorum»',
    p: 'El escriba está anotando los testigos y, en mitad de la lista, separa a nueve con cuatro palabras: «id sit habitantes de Castroferronio». Son de aquí. Nueve personas con nombre, en este término, el 22 de enero de 1015. Y la mitad de esos nombres son árabes, escritos en la misma línea que otros godos. Aparecen <b>de refilón</b>: nadie los estaba contando, iban de testigos en la donación que hacen María y sus hijos de un lugar «edificado en honor de San Miguel Arcángel y Santa María siempre virgen», con su iglesia, sus viñas y un ajuar de cruz, cáliz y libros.',
    nota: 'Hasta hoy, el vecino más antiguo del término que conocíamos por su nombre era Martín Alonso, en 1551. Estos son quinientos treinta y seis años anteriores. Pero son habitantes de Castroferrol, el despoblado, no de Colinas: el pueblo actual todavía no existe en las fuentes. Y la fórmula «de la otra parte» describe una franja entre dos cursos de agua, no una confluencia: los dos no se juntan hasta siete kilómetros aguas abajo.',
    ilu: { src: 'img/prov/d1015.jpg', w: 1000, h: 667, prov: true,
      alt: 'Imagen provisional: trama abstracta, en el color de la era y con la trama del grado de prueba, mientras la entrada no tenga ilustración.' },
    tr: 'portada',
    f: 'GONZÁLEZ RODRÍGUEZ, «Castroferrol, un enclave monástico altomedieval en el valle del Tera», Brigecio 10 (2000), apéndice documental · AHN, ms. 1195B, ff. 686v-687r · ed. Cavero Domínguez y Martín López, op. cit., doc. 214' },

  { id: 'd1060', era: 2, y: '1060', s: 1060, n: 'cotejar',
    t: 'Castroferrol en las particiones de Diego Muñoz',
    p: 'Se reparten los bienes de Osorio Fernández y de su mujer, doña Visclávara, y en la lista, entre villas y tierras, está Castroferrol. Le toca a Diego Muñoz. Nadie pregunta a los que viven allí: <b>el lugar cambia de dueño como cambia de mano un prado</b>.',
    ilu: { src: 'img/prov/d1060.jpg', w: 1000, h: 667, prov: true,
      alt: 'Imagen provisional: trama abstracta, en el color de la era y con la trama del grado de prueba, mientras la entrada no tenga ilustración.' },
    tr: 'portada',
    f: 'ed. Ruiz Asencio, Col. doc. de la catedral de León, vol. IV (1032-1109), doc. 1121 · localizado por González Rodríguez, Brigecio 10 (2000), nota 24' },

  { id: 'd1073', era: 2, y: '1073', s: 1073, n: 'sinleer',
    t: 'Colinas aparece por su nombre',
    q: '«uilla que dicunt Colinas, in riba de Teira»',
    p: '<i>uilla que dicunt Colinas.</i>|Cuatro palabras en un diploma de la catedral de León, puestas ahí para situar otra propiedad que sí importaba.|<b>Es la primera vez que el nombre existe por escrito.</b> 1073.|De los dos nombres que van a convivir un tiempo, Castroferrol acabará en despoblado. Colinas sigue ahí.',
    nota: 'La cita viene de un artículo, no del facsímil: falta ir al diploma 1186 de la colección de la catedral de León y verlo con los propios ojos. Y el documento escribe <b>«Colinas» a secas</b>: el «de Trasmonte» no está ahí.',
    ilu: { src: 'img/prov/d1073.jpg', w: 1000, h: 667, prov: true,
      alt: 'Imagen provisional: trama abstracta, en el color de la era y con la trama del grado de prueba, mientras la entrada no tenga ilustración.' },
    tr: 'portada',
    f: 'RUIZ ASENCIO, Col. doc. de la catedral de León, IV (1032-1109), León 1989, doc. 1186 · cit. GONZÁLEZ RODRÍGUEZ, Brigecio 17 (2007)' },

  { id: 'd1129', era: 2, y: '1129', s: 1129, n: 'cotejar',
    t: 'Una vereda que baja de Castroferrol',
    q: '«per illam veredam quae discurrit de Castro Ferronio, et ad Carvalio… et tornat inde per ipsam veredam quae discurrit ad Villa Aceif, et deinde per terminum de Axarifes»',
    p: 'Para confirmar el coto del monasterio de Santa Marta de Tera, Alfonso VII tiene que decir por dónde va exactamente la raya, «según la fijó su bisabuelo Fernando I». Así que el documento se pone a andar.|Sale de Castro Ferronnio <b>por una vereda</b>, llega a un carbajal, tuerce por una carral, pasa por San Pelayo, por la carral de Comdesa, por Villa Aceif, y termina en el término de Axarifes.|Una vereda es un camino de ganado. Éste, el que baja del enclave, es <b>el camino más antiguo de este término del que tenemos noticia</b>: en 1129 ya estaba hecho y ya tenía nombre.',
    nota: 'Los demás mojones del deslinde son un carbajal, una carral, San Pelayo de Armentario Fláiniz, la carral de Comdesa, Villa Aceif y el término de Axarifes. Dos de esos nombres vuelven a sonar a árabe: <b>Aceif y Axarifes</b>.',
    /* Retrato de contexto: la cara de quien da nombre al documento,
       no una imagen de Colinas. El pie de la lámina lo dice solo. */
    img: { src: 'img/ret/d1129.jpg', w: 762, h: 1407, ctx: true,
      alt: 'Miniatura medieval del mismo códice: un rey barbado, con corona de oro y manto azulado sobre forro rojo, sentado con la espada al costado.',
      cap: 'Alfonso VII, en el mismo códice que Vermudo II (BNE, hacia 1312-1325). Es el rey que confirma el coto y manda decir por dónde va la raya; de Colinas, aquí, no hay nada. <span class="mono">autor desconocido · Wikimedia Commons, Public domain</span>' },
    tr: 'portada',
    f: 'ed. Quintana Prieto, Santa Marta de Tera, Zamora, 1991, doc. XI · texto latino en la nota 25 de González Rodríguez, Brigecio 10 (2000)' },

  { id: 'd1170', era: 2, y: '1170', s: 1170, n: 'cotejar',
    t: 'Fernando II revalida esos límites',
    p: 'Cuarenta y un años después, otro rey vuelve a firmar la misma raya y el coto no cambia. Lo que ha cambiado es de quién es el monasterio: ya ha pasado a los bienes de la mitra de Astorga. <b>Deja de ser una casa con vida propia y empieza a ser una renta</b>, y eso es, probablemente, el principio de su final.',
    /* Retrato de contexto: la cara de quien da nombre al documento,
       no una imagen de Colinas. El pie de la lámina lo dice solo. */
    img: { src: 'img/ret/d1170.jpg', w: 875, h: 1024, ctx: true,
      alt: 'Miniatura medieval de un rey a caballo con lanza y escudo, rotulada FERNANDVS REX, y debajo un león.',
      cap: 'Fernando II de León en el Tumbo A de la catedral de Santiago, hacia 1129-1255. Es el rey que revalida el coto; no representa a Colinas. <span class="mono">autor desconocido · Wikimedia Commons, Public domain</span>' },
    tr: 'portada',
    f: 'ed. Quintana Prieto, Santa Marta de Tera, Zamora, 1991, doc. XII · localizado por González Rodríguez, Brigecio 10 (2000), nota 26' },

  { id: 'sala', era: 2, y: 'ss. XI–XIII', s: 1175, n: 'visto',
    t: 'La sala que ardió',
    p: 'Lo primero que apareció al excavar fue el fuego: <b>cinco centímetros de carbones</b>, extendidos como una tapa sobre todo lo demás.|Debajo había una sala de cinco metros por ocho. Los muros, de piedra encajada sin argamasa, con contrafuertes. El suelo, de arcilla roja apisonada. Encima, teja curva sobre tapial. Entre los carbones quedó cerámica con retícula incisa, y eso la fecha en el siglo XI.|<b>Ardió, y nadie volvió a levantarla.</b> Quién vivía dentro, y por qué se quemó, no lo dice nada.',
    nota: 'Los excavadores sólo dicen que «pudiera estar relacionada con un tipo de edificación religiosa, quizás monasterio o convento». Que sea Castroferrol lo propone la bibliografía; la excavación no lo prueba.',
    img: { src: 'img/excavacion-fig1-planta.jpg', w: 900, h: 1076, alt: 'Planta arqueológica de la estructura rectangular con sus muros y contrafuertes.', cap: 'Planta de la estructura rectangular, unidades A y B (fig. 1).' },
    f: 'Martín Carbajo et al., Anuario 1993, pp. 37-48' },

  { sil: true, era: 2, y: '1170 → 1526',
    p: 'Tres siglos y medio sin un solo documento localizado. No sabemos cuándo se abandonó el monasterio ni cómo pasó Colinas de ser una villa nombrada de paso en 1073 a un lugar del señorío de Benavente.' },

  { id: 'pecheros1526', era: 3, y: '1526', s: 1526, n: 'visto',
    t: 'Veinticinco vecinos pecheros',
    p: 'Veinticinco vecinos que pagan pechos. Es la medición de población más antigua que tenemos de Colinas, sesenta y cinco años anterior al vecindario de 1591.|El asiento va entre los 274 de la villa de Benavente y su tierra, que suman 3.681 pecheros: <b>exactamente el total que el propio censo escribe al pie</b>. Las cuentas cuadran, así que la cifra se puede creer.',
    nota: 'En la misma lista hay dos lugares que nadie ha identificado: «Vezinas», con 21 vecinos, y «Vecilla del Chantre», con 16. La hipótesis de que esa Vecilla fuera la de Trasmonte queda <b>descartada</b>: en 1591 las dos aparecen por separado en la misma lista.',
    /* Retrato de contexto: la cara de quien da nombre al documento,
       no una imagen de Colinas. El pie de la lámina lo dice solo. */
    img: { src: 'img/ret/pecheros1526.jpg', w: 1400, h: 1661, ctx: true,
      alt: 'Retrato ecuestre del emperador Carlos V con armadura y lanza, por Tiziano.',
      cap: 'Carlos I por Tiziano, 1548. El censo de pecheros se levanta en su reinado y lleva su nombre; el cuadro no tiene nada que ver con Colinas. <span class="mono">Titian · Wikimedia Commons, Public domain</span>' },
    tr: 'portada',
    f: 'INE, Censo de Pecheros. Carlos I, 1528, t. II, fol. 505 vº, inscr. 45' },

  { id: 'p1551', era: 3, y: '1551', s: 1551, n: 'sinleer',
    t: 'Martín Alonso, vecino de Colinas, va a pleito',
    p: 'Martín Alonso, vecino de Colinas, pleitea contra Pedro Alonso de Soguillo, vecino de Quintanilla de Urz. Del asunto no sabemos nada: el legajo está sin leer.|Queda el nombre, y no es poco: <b>es el vecino de Colinas más antiguo que sabemos nombrar</b>. Aparece porque discutió.',
    ilu: { src: 'img/prov/p1551.jpg', w: 1000, h: 667, prov: true,
      alt: 'Imagen provisional: trama abstracta, en el color de la era y con la trama del grado de prueba, mientras la entrada no tenga ilustración.' },
    tr: 'portada',
    f: 'Real Chancillería de Valladolid, PL Civiles, Taboada (OLV), caja 726, 1' },

  { id: 'c1591', era: 3, y: '1591', s: 1591, n: 'visto',
    t: 'Veintiocho vecinos, y el lugar mediano de la provincia',
    p: 'Veintisiete pecheros. Un clérigo. Ningún hidalgo.|La provincia del conde tiene ciento diecisiete lugares. Ordenados por vecinos, el del medio tiene veintiocho.|Colinas tiene veintiocho. <b>El lugar mediano, exactamente.</b>|En sesenta y cinco años ha ganado dos vecinos. Benavente, un setenta y tres por ciento.',
    nota: 'Cotejados los 115 lugares del señorío en 1526 con los 117 de 1591, <b>no desaparece ninguno</b>. La villa de Benavente crece un 73 %; su tierra, un 9 %; Colinas, de 25 a 27 pecheros, un 8 %. Dentro del campo no hay tendencia: 57 lugares pierden y 56 ganan.',
    /* El facsímil del propio documento. No es un adorno: es la prueba,
       y por eso se ve entera y no recortada. */
    img: { src: 'img/doc/c1591.jpg', w: 1285, h: 133,
      alt: 'Dos líneas de una tabla impresa: «Colinas de Trasmonte», y a la derecha las cifras 28, 27 y 1.',
      cap: 'El asiento del pueblo en el vecindario de 1591: veintiocho vecinos, veintisiete de ellos pecheros y un clérigo. <span class="mono">Censo de Castilla de 1591, vecindario de las tierras del conde de Benavente, p. 667 · ed. facsímil del INE</span>' },
    tr: 'caja',
    f: 'Censo de la Corona de Castilla, 1591 · vecindario de las tierras del conde de Benavente' },

  { id: 'p1600', era: 3, y: '1600–1608', s: 1604, n: 'sinleer',
    t: 'Concejo contra concejo: Colinas y Vecilla',
    p: 'Ocho años de pleito entre el concejo de Colinas y el de Vecilla. Los pleitos de término describen mojones y aprovechamientos, y a veces traen plano.|<b>Es la fuente más prometedora que hay para el término antiguo</b>, y está sin pedir: de ella tenemos la signatura y nada más.',
    ilu: { src: 'img/prov/p1600.jpg', w: 1000, h: 667, prov: true,
      alt: 'Imagen provisional: trama abstracta, en el color de la era y con la trama del grado de prueba, mientras la entrada no tenga ilustración.' },
    tr: 'portada',
    f: 'Real Chancillería de Valladolid, PL Civiles, Alonso Rodríguez (OLV), caja 368, 1' },

  { id: 'c1613', era: 3, y: '1613', s: 1613, n: 'cotejar',
    t: 'Chirivoga copia el Tumbo Negro, y mueve el monasterio de sitio',
    p: 'Felipe III manda al deán de Salamanca a averiguar qué iglesias del obispado de Astorga son del Real Patronato. Su equipo copia el Tumbo Negro, y gracias a esa copia conocemos hoy los diplomas de 1006 y de 1015.|En el libro se encuentran un monasterio de Castroferrol del que ya no se acordaba nadie, y se lo adjudican a Villaferrueña —nombre parecido, no lejos del Tera—; llegan a rebautizarlo «Castroferrueña». Su iglesia pasa al patronato real como heredera del monasterio.|<b>No fue un descuido, sino el modo de agregar una parroquia a las rentas de la Corona.</b> El error siguió en pie en la bibliografía hasta el año 2000.',
    nota: 'El autor del artículo de referencia lo llama «una tergiversación absolutamente interesada». No fue un descuido: era el modo de agregar la parroquia a las rentas de la Corona. El error siguió en pie en la bibliografía hasta el año 2000.',
    /* Retrato de contexto: la cara de quien da nombre al documento,
       no una imagen de Colinas. El pie de la lámina lo dice solo. */
    img: { src: 'img/ret/c1613.jpg', w: 1400, h: 1349, ctx: true,
      alt: 'Retrato de medio cuerpo de Felipe III con golilla y banda, por Velázquez.',
      cap: 'Felipe III por Velázquez, 1634-35. Es el rey que envía al deán de Salamanca a averiguar qué iglesias son del Real Patronato. <span class="mono">Diego Velázquez · Wikimedia Commons, Public domain</span>' },
    tr: 'portada',
    f: 'AHN, ms. 1195B · González Rodríguez, Brigecio 10 (2000)' },

  { id: 'diezmos1693', era: 3, y: '1693', d: '16 de diciembre', s: 1693, n: 'visto',
    t: 'El Nuncio manda, y Astorga no obedece',
    p: 'El 16 de diciembre de 1693 el Nuncio de Su Santidad libra mandamiento para que los curas del obispado de Astorga le devuelvan al conde-duque de Benavente los diezmos de las «casas de Rey». Una de esas casas está en Colinas, y seguirá estando: el Catastro la declarará cincuenta y nueve años más tarde.|El provisor de Astorga no obedece. Dice que está inhibido por letras de un metropolitano [?] y se queda quieto.|Detrás del papel hay dos hombres con nombre y con minuta: el abogado Juan Gutiérrez Coronel y el procurador Francisco de Maza. <b>Y no es el primer intento</b>: el propio despacho remite a otros autos suyos de dos meses y medio antes.',
    nota: 'No es la primera vez que el Nuncio actúa: el despacho remite a sus propios autos de «primero de Octubre del año pasado de mil y seiscientos y noventa y tres», dos meses y medio antes. Los juristas que lo mueven tienen nombre: el abogado Ldo. D. Juan Gutiérrez Coronel y el procurador Francisco de Maza, que en la lectura de la misma plana se había leído antes «Malaza».',
    /* El facsímil del propio documento. No es un adorno: es la prueba,
       y por eso se ve entera y no recortada. */
    img: { src: 'img/doc/diezmos1693.jpg', w: 1123, h: 1632,
      alt: 'Plana manuscrita del siglo XVIII, con dos sellos en seco en el margen superior y la escritura corrida de un escribano.',
      cap: 'Aquí acaba el mandamiento —«Dadas en Madrid a diez y seis días del mes de Diciembre de mil y seiscientos y noventa y tres años»— y empieza la negativa: que el tribunal de Astorga «se hallaba inhibido por el de Salamanca» y no podía ejecutar lo mandado. <span class="mono">AHNOB, OSUNA, C.466, D.90, img. 45 (copia de 1842) · PARES, Archivos Estatales</span>' },
    tr: 'portada',
    f: 'AHNOB, OSUNA, C.466, D.90, img. 45-46 y 38 (copia de 1842)' },

  { id: 'nuncio1694', era: 3, y: '1694', d: '19 de enero', s: 1694, n: 'visto',
    t: 'Veinticuatro horas, so pena de excomunión',
    q: '«recoger las agravatorias que tiene libradas» y «reducir sus mandamientos a simple citación»',
    p: 'Desde Madrid, el Nuncio no discute: cuenta el tiempo. Le da al provisor de Astorga <b>veinticuatro horas</b> para recoger las agravatorias que tenía libradas, so pena de excomunión mayor y doscientos ducados, y ordena que si no lo hace se le denuncie por público excomulgado desde los púlpitos.|Fíjese en lo que no manda: no manda sentenciar. Manda deshacer, sin embargo de cualesquiera autos del Ordinario o del Metropolitano.|Lo firma un auditor, Guido Antonio Torna [?], ante un notario, en un tribunal de Madrid que no ha estado aquí nunca. <b>Once días después, ese papel se lee en Colinas</b>, en una parroquia de ciento y pico almas.',
    nota: 'El tribunal, por dentro: firma «el Señor Auditor = Guido Antonius Torna[nus]» [?], ante el notario Baltasar Hernández Men[tero]º [?]. Y se deshace aquí una contradicción del propio proyecto: el papel no dice que haya un metropolitano <i>de</i> Salamanca, sino «el Metropolitano <b>que reside en</b> la Salamanca Vieja» —dónde se sienta el juez, no de qué sede es—. Qué sea «la Salamanca Vieja» sigue sin entenderse.',
    /* Retrato de contexto: la cara de quien da nombre al documento,
       no una imagen de Colinas. El pie de la lámina lo dice solo. */
    img: { src: 'img/ret/nuncio1694.jpg', w: 800, h: 1009, ctx: true,
      alt: 'Retrato del papa Inocencio XII sentado, con muceta y solideo.',
      cap: 'Inocencio XII, bajo cuyo pontificado actúa el Nuncio contra el provisor de Astorga. Ni él ni su tribunal supieron nunca de este pueblo. <span class="mono">Pietro Paolo Veglia · Wikimedia Commons, Public domain</span>' },
    tr: 'portada',
    f: 'AHNOB, OSUNA, C.466, D.90, img. 39, 41, 44 y 46-47 (copia de 1842)' },

  { id: 'apela1694', era: 3, y: '1694', d: '30 de enero', s: 1694, n: 'visto',
    t: 'El cura de Colinas apela',
    q: '«lo obedece con el respeto debido […] y que en cuanto a su cumplimiento no ha lugar, y desde luego de este Despacho y sus autos APELA»',
    p: 'El despacho llega a Colinas el 30 de enero y el cura lo recibe. Lo obedece «con el respeto debido»: es la fórmula, y no cuesta nada. Luego escribe lo otro: que en cuanto a su cumplimiento no ha lugar, y que apela.|Es decir, acata y no entrega. Enfrente tiene al conde-duque de Benavente, al Nuncio de Su Santidad y una excomunión mayor puesta por escrito.|<b>Es la primera vez que alguien de Colinas le dice que no, por escrito, a una orden del señor.</b> Y tiene nombre, escrito con todas las letras por el notario: <b>el licenciado Antonio García Bernardo de Quirós</b>, cura de este lugar.',
    nota: '<s>En este papel el cura no tiene nombre; lo tiene cuatro meses después.</s> <b>Corregido el 26-IX-2026</b>, al leer la plana a resolución completa para ponerla en esta entrada: el <b>30 de enero</b> el notario ya notifica «al Licenciado D.n Antonio García Bernardo de Quirós, Cura de dicho Lugar, en su persona». El nombre estaba desde el primer día. Lo del 12 de mayo es una segunda notificación, no el hallazgo del nombre. Queda por ver si el original de 1694 —no esta copia de 1842— lo nombra también.',
    /* El facsímil del propio documento. No es un adorno: es la prueba,
       y por eso se ve entera y no recortada. */
    img: { src: 'img/doc/apela1694.jpg', w: 1123, h: 1633,
      alt: 'Plana manuscrita con dos notas al margen, «Notificación» y «Otra», que separan dos diligencias del mismo día.',
      cap: 'La plana de las notificaciones del 30 de enero. Abajo, la de Colinas: el notario Francisco Domínguez se la hace al cura en su persona, «que dijo le obedece con el respeto debido». <span class="mono">AHNOB, OSUNA, C.466, D.90, img. 49 (copia limpia de 1842) · PARES, Archivos Estatales</span>' },
    tr: 'portada',
    f: 'AHNOB, OSUNA, C.466, D.90, img. 49-50 (copia limpia de 1842) · el nombre, en OSUNA, C.466, D.89, img. 28-29, y D.90, img. 55' },

  { id: 'curas1694', era: 3, y: '1694', d: 'mayo', s: 1694, n: 'visto',
    t: 'Doce curas, y un tribunal inhibido',
    p: 'El despacho recorre el valle en mayo: doce parroquias, doce curas, doce respuestas. En Santibáñez el notario tiene que volver tres veces a casa del cura.|En San Pedro de la Viña le contestan con una carta ya guardada: el provisor de Astorga está inhibido. <b>El tribunal que firmó la orden no tenía jurisdicción para firmarla</b>, y en el valle se sabía.|Los curas acuden a la Chancillería de Valladolid por vía de fuerza; al menos uno gana Real Provisión y se niega a entregar los diezmos. Ese pleito sigue sin localizar.',
    nota: 'La lectura del metropolitano es dudosa, y varios topónimos y apellidos del vaciado llevan [?]. <b>El pleito de la Chancillería sigue sin localizar</b>: es uno de los frentes abiertos del proyecto.',
    /* El facsímil del propio documento. No es un adorno: es la prueba,
       y por eso se ve entera y no recortada. */
    img: { src: 'img/doc/curas1694.jpg', w: 1400, h: 1275,
      alt: 'Carpetilla manuscrita encabezada «Rosinos de Vidriales, Villabeza de Valverde, S. Pedro de Zamudio y otros pueblos», con la fecha «28 Enero 1694» subrayada.',
      cap: 'La carpetilla de la copia de 1842 enumera los lugares cuyos curas habían cobrado los diezmos de las «Casas llamadas de Rey». En mitad de la lista, <b>Colinas de Trasmonte</b>. <span class="mono">AHNOB, OSUNA, C.466, D.90 · PARES, Archivos Estatales</span>' },
    tr: 'portada',
    f: 'AHNOB, OSUNA, C.466, D.90, img. 49-57 · vaciado en curas-1694.tsv · el obispo es D. Fray Antonio de Sanjurjo y Miranda; su provisor, el Dr. D. Antonio de Miranda' },

  { id: 'apeo1706', era: 3, y: '1706', s: 1706, n: 'visto',
    t: 'Un pago que se llama San Pelayo',
    p: 'Un apeo no se escribe para nosotros: se escribe para que cada uno sepa dónde acaba lo suyo. El de Vecilla de Trasmonte, en 1706, va orientando parcela por parcela con cuatro referencias: hacia la vega, hacia Vecilla, hacia Pobladura, hacia Colinas.|Dicho de otro modo: en 1706 <b>Pobladura y Colinas son dos vecinos distintos</b>, y Pobladura queda fuera del término de Colinas. Eso es lo que este papel prueba, y no es poco.|Además aparece un pago llamado San Pelayo. Un mojón del deslinde de 1129 se llamaba igual. Tentador, pero no prueba nada: San Pelayo es advocación corriente de esta ribera.',
    nota: 'Que el nombre se repita en 1129, en 1706 y en 1768 no prueba que sean el mismo sitio: <b>San Pelayo es advocación corriente de esta ribera</b> —Vega de Tera es parroquia de San Pelayo en el Censo de Aranda—. Ninguno de los tres prueba nada sobre los otros.',
    ilu: { src: 'img/prov/apeo1706.jpg', w: 1000, h: 667, prov: true,
      alt: 'Imagen provisional: trama abstracta, en el color de la era y con la trama del grado de prueba, mientras la entrada no tenga ilustración.' },
    tr: 'portada',
    f: 'MARTÍN BENITO, «El término de Vecilla de Tramonte en un documento de 1706», Brigecio 10 (2000), pp. 133-152' },

  { id: 'catastro', era: 3, y: '1752', d: '9 de noviembre', s: 1752, n: 'visto',
    t: 'El Catastro de Ensenada: el primer retrato completo',
    p: 'Veintisiete vecinos, el cura incluido, y veintiséis casas, diez de ellas inhabitables. Un término de 2.372 fanegas, un tercio de monte.|El concejo tiene molino harinero y casa de fragua, y hay un solo herrero, Santiago Zerrón. El río Tera es del conde de Benavente y le rinde doscientos reales al año.|Cuando se les pregunta con qué derecho cobra, los vecinos responden que <b>no pueden dar razón en virtud de qué privilegio</b>. Pagaban sin saber por qué.',
    q: '«no pueden dar razón en virtud de qué privilegio goza estos derechos»',
    nota: 'Así responden los vecinos (28.ª) cuando se les pregunta por el título de lo que cobra el conde. Nadie en el pueblo sabía por qué pagaba.',
    img: { src: 'img/catastro-1752-f372.jpg', w: 720, h: 1054, llena: true, alt: 'Página manuscrita del Catastro de Ensenada de Colinas de Trasmonte, en letra caligráfica del siglo XVIII.', cap: 'Final de la respuesta 3.ª, con los lindes del término, e inicio de la 4.ª (AGS, libro 654, imagen 0372).' },
    tr: 'portada',
    f: 'AGS, DGR, 1.ª Remesa, Catastro de Ensenada, Respuestas Generales, libro 654, ff. 368-407 · ed. CEB «Ledo del Pozo», pp. 238-243' },

  { id: 'ermita1756', era: 3, y: '1756', d: '6 de abril', s: 1756, n: 'visto',
    t: 'Hay una ermita en el término',
    q: '«componer la Ermita que ay en su territorio respectivo y ponerla decente de Ornatos»',
    p: 'Abril de 1756. El obispo de Astorga escribe al conde-duque.|Hay una ermita en el término de Colinas. Está para arreglar.|Que la componga don Matheo Villalva, que cobra el préstamo de San Juan y es ahijado del conde-duque. Y que le retengan doscientos reales al año hasta que esté hecha.|<b>No sabemos de qué advocación era, ni dónde estuvo, ni cuándo se perdió.</b> Sabemos que existió porque alguien discutió quién la pagaba.',
    nota: 'La carta <b>no dice de qué advocación es la ermita</b>. El «San Juan Bautista» que trae el catálogo de PARES es del catálogo, no del papel. Y no se ha buscado todavía dónde estuvo ni cuándo se perdió.',
    /* El facsímil del propio documento. No es un adorno: es la prueba,
       y por eso se ve entera y no recortada. */
    img: { src: 'img/doc/ermita1756.jpg', w: 1400, h: 1929,
      alt: 'Primer folio de una carta manuscrita, con el sello del archivo de Osuna abajo a la izquierda y la tinta de la otra cara transparentada.',
      cap: 'La carta del obispo de Astorga al conde-duque: que don Matheo Villalva componga «la Ermita que ay en su territorio respectivo» y la ponga «decente de Ornatos», y que se le retenga «la Cota de 200 rr. cada año». <span class="mono">AHNOB, OSUNA, CT.271, D.21 · Astorga, 6-IV-1756 · PARES, Archivos Estatales</span>' },
    tr: 'portada',
    f: 'AHNOB, OSUNA, CT.271, D.21 · Astorga, 6 de abril de 1756' },

  { id: 'arcipreste1757', era: 3, y: '1757', s: 1757, n: 'visto',
    t: 'La cabeza eclesiástica de tres valles vive aquí',
    q: '«Cura del Lugar de Colinas y Arcipreste del Arciprestazgo de Vidriales, Tera y Valverde»',
    p: 'Cuando don Francisco Escudero firma en una ejecutoria de la Chancillería, se titula entero: cura del lugar de Colinas y arcipreste del arciprestazgo de Vidriales, Tera y Valverde.|Es decir: la cabeza eclesiástica de tres valles vive aquí. En un lugar de ciento y pico almas, sin un solo hidalgo y sin ayuntamiento propio.|<b>La parroquia pesa más que el lugar.</b> Lo que Colinas no es en lo civil, lo es en lo eclesiástico.',
    /* El facsímil del propio documento. No es un adorno: es la prueba,
       y por eso se ve entera y no recortada. */
    img: { src: 'img/doc/arcipreste1757.jpg', w: 848, h: 1189,
      alt: 'Plana de papel sellado con el rótulo «Sello quarto, veinte maravedís, año de mil setecientos y cinquenta y siete» y, debajo, letra de canciollería muy apretada.',
      cap: 'La plana de la ejecutoria, en papel sellado de 1757. En ella don Francisco Escudero se titula cura de Colinas y arcipreste de Vidriales, Tera y Valverde. <span class="mono">ARCHV, Registro de Ejecutorias, caja 3250, 23 · PARES, Archivos Estatales</span>' },
    tr: 'portada',
    f: 'ARCHV, Registro de Ejecutorias, caja 3250, 23 (leído dos veces en la misma plana)' },

  { id: 'aranda1768', era: 3, y: '1768', d: '1 de noviembre', s: 1768, n: 'visto',
    t: 'Ciento catorce almas, contadas por el cura',
    q: '«Parroquia de San Juan»',
    p: 'Sesenta y un varones y cincuenta y tres hembras, con desglose por edad y estado. Ningún hidalgo. Tres eclesiásticos y un administrador del Estanco del Tabaco. La relación la escribe y la firma <b>el propio párroco</b>, y al poner el nombre de su parroquia hace retroceder <b>setenta y nueve años</b> la advocación de San Juan, que hasta ahora se tenía por Madoz y su diccionario de 1847. En los veintiuno de los veintitrés lugares del valle que traen desglose, varones más hembras da exactamente el total que el escribano anota al margen: ni un descuadre.',
    nota: 'El documento dice <b>«San Juan» a secas</b>: el «Bautista» lo añade Madoz. Y San Juan es advocación corriente en el valle —tres parroquias de veintitrés—, así que el nombre no distingue nada: le quita al topónimo San Juan del término todo valor como indicio. La fecha de la relación, «en 1.º de noviembre de 1768», lleva [?].',
    /* Retrato de contexto: la cara de quien da nombre al documento,
       no una imagen de Colinas. El pie de la lámina lo dice solo. */
    img: { src: 'img/ret/aranda1768.jpg', w: 1400, h: 913, ctx: true,
      alt: 'Detalle de un retrato al óleo del siglo XVIII: un hombre con peluca blanca, casaca azul bordada en oro y faja rosa, con bastón de mando; a un lado un globo terráqueo, y al fondo una columna y un paisaje.',
      cap: 'El conde de Aranda, presidente del Consejo de Castilla: el recuento de 1768 se ordena bajo su presidencia y por eso lleva su nombre. <b>Se lo pintan del natural al año siguiente</b>, en 1769, por encargo de la Universidad Sertoriana de Huesca. <span class="mono">Ramón Bayeu, 1769 · Museo de Huesca, sala 7 (detalle) · reproducción de El Pirineo Aragonés, 21-VIII-2020</span>' },
    tr: 'portada',
    f: 'INE, Censo de Aranda, obispado de Astorga, asiento 173, R.A.H. 01-181' },

  { id: 'pobladura', era: 3, y: '1591 → 1768', s: 1768, n: 'visto',
    t: 'Pobladura de Trasmonte desaparece',
    p: 'En 1526 el escribano anotó «Pobladura de Trasmonte — Despoblado por la peste», quince pecheros. No fue el final: en 1591 el lugar sigue vivo, con once vecinos.|En el Censo de Aranda, el obispado de Astorga cuenta cinco Pobladuras y ninguna «de Trasmonte». Entre las dos fechas se acaba, esta vez para siempre.|<b>No sabemos ni el año ni la causa.</b> El hueco también es un dato: se despobló, se rehizo y volvió a desaparecer.',
    nota: 'No se sabe ni el año ni la causa del final. El asiento de 1526 tampoco dice <b>qué</b> peste. Y la identificación moderna que hace el INE de aquel asiento —49.236, Vidayanes— contradice la localización que este proyecto defiende; el apeo de 1706 la sitúa al lado de Colinas, no a treinta kilómetros.',
    /* El facsímil del propio documento. No es un adorno: es la prueba,
       y por eso se ve entera y no recortada. */
    img: { src: 'img/doc/pobladura.jpg', w: 1400, h: 408,
      alt: 'Columnas de un índice impreso de pueblos; entre ellas, cinco líneas seguidas que empiezan por «Pobladura».',
      cap: 'El índice del Censo de Aranda para el obispado de Astorga: Pobladura de la Sierra, de las Regueras, de Somoza, de Yuso y del Valle. <b>Ninguna «de Trasmonte».</b> <span class="mono">Censo de Aranda, «Relación de pueblos» · ed. INE</span>' },
    tr: 'caja',
    f: 'INE, Censo de Pecheros. Carlos I, 1528, t. II, fol. 507 rº, inscr. 102 · Censo de 1591 · Censo de Aranda, «Relación de pueblos»' },

  { id: 'aniversarios1772', era: 3, y: '1772', s: 1772, n: 'visto',
    t: 'Tres aniversarios, y un pleito por el segundo',
    p: 'Un aniversario es una misa que alguien deja pagada para que se diga por él todos los años, cuando ya no esté. En la iglesia de Colinas hay tres, y los tres los dejó fundados un cura, Pedro Prieto [?].|<b>Es la primera fundación piadosa que tenemos documentada de esta parroquia</b>: la primera vez que alguien de aquí dispone de lo suyo para después de muerto.|Por el segundo de los tres se pleitea. Simón Prieto Montero, clérigo de menores, obtiene ejecutoria de la Chancillería contra Francisco Gutiérrez, vecino de Friera de Valverde.',
    nota: 'El nombre del fundador lleva [?]: el catálogo de PARES lee «Bartolomé» donde el facsímil parece decir «bachiller».',
    /* El facsímil del propio documento. No es un adorno: es la prueba,
       y por eso se ve entera y no recortada. */
    img: { src: 'img/doc/aniversarios1772.jpg', w: 795, h: 1116,
      alt: 'Plana de papel sellado de 1772, con el escudo impreso en el ángulo y el texto de la ejecutoria a renglón seguido.',
      cap: 'La ejecutoria de los aniversarios, en papel sellado de 1772: la gana Simón Prieto Montero, clérigo de menores. <span class="mono">ARCHV, Registro de Ejecutorias, caja 3359, 51 · PARES, Archivos Estatales</span>' },
    tr: 'portada',
    f: 'ARCHV, Registro de Ejecutorias, caja 3359, 51' },

  { id: 'floridablanca', era: 3, y: '1787', s: 1787, n: 'visto',
    t: 'Ciento cincuenta y seis personas, y ningún hidalgo',
    p: 'Ciento cincuenta y seis habitantes, noventa varones y sesenta y seis mujeres, contados uno a uno.|El impreso clasifica por oficio y aquí deja dieciocho casillas vacías: ni escribano, ni abogado, ni comerciante, ni estudiante, ni sacristán, ni un solo hidalgo. Hay un cura, dieciséis labradores, catorce jornaleros, seis artesanos y ocho criados.|<b>Casi tantos jornaleros como labradores</b>: la mitad de los hombres con oficio no trabajaba tierra propia.',
    nota: 'El desglose por tramos de edad dentro de cada estado civil no es verosímil —ningún soltero entre 25 y 40 años y diecisiete entre 40 y 50—: el impreso se rellenó por bloques. Los totales, en cambio, cuadran los tres.',
    /* Retrato de contexto: la cara de quien da nombre al documento,
       no una imagen de Colinas. El pie de la lámina lo dice solo. */
    img: { src: 'img/ret/floridablanca.jpg', w: 1400, h: 2229, ctx: true,
      alt: 'Retrato de cuerpo entero del conde de Floridablanca, de pie y vestido de rojo, por Goya.',
      cap: 'El conde de Floridablanca por Goya, 1783. El censo de 1787 se ordena bajo su gobierno; tampoco este cuadro tiene que ver con el pueblo. <span class="mono">Francisco Goya · Wikimedia Commons, Public domain</span>' },
    tr: 'portada',
    f: 'Censo de 1787 «Floridablanca», ed. INE (1989), t. 3-B, prov. de Zamora, pueblo nº 103, pp. 2.858, 2.887 y 2.932' },

  { id: 'casa1804', era: 3, y: '1804', s: 1804, n: 'visto',
    t: 'Domingo Bernardo pleitea por una casa vinculada',
    p: 'Una casa vinculada no se vende: pasa entera al siguiente de la familia.|Por una de ésas pleitea Domingo Bernardo contra Alonso Gavilla y su mujer, de Morales del Rey. 1804.|<b>Es la última de las tres ejecutorias que tenemos de este término.</b>|Quién era vecino de dónde, todavía no está claro: el facsímil no se ha leído entero.',
    nota: 'El [?] está en quién era vecino de dónde: el catálogo no lo deja claro y el facsímil no se ha leído entero.',
    /* El facsímil del propio documento. No es un adorno: es la prueba,
       y por eso se ve entera y no recortada. */
    img: { src: 'img/doc/casa1804.jpg', w: 906, h: 1292,
      alt: 'Plana de papel sellado con el escudo real y la leyenda «Hispaniarum Rex Carolus IV», y el rótulo «Sello quarto, quarenta maravedís, año de mil ochocientos y quatro».',
      cap: 'La última de las tres ejecutorias del término, en papel sellado de 1804, con el escudo de Carlos IV. <span class="mono">ARCHV, Registro de Ejecutorias, caja 3767, 43 · PARES, Archivos Estatales</span>' },
    tr: 'portada',
    f: 'ARCHV, Registro de Ejecutorias, caja 3767, 43' },

  { id: 'incendio1814', era: 3, y: '1814', s: 1814, n: 'cotejar',
    t: 'Arde el archivo de la catedral de Astorga',
    p: 'Arde el archivo de la catedral de Astorga y con él se quema el Tumbo Negro, el cartulario que copiaba los diplomas de Castroferrol.|Queda la copia que mandó hacer el deán de Salamanca en 1613, para otro asunto. <b>Todo lo que sabemos del monasterio depende de ella</b>: una copia del siglo XVII de un libro que ya no existe.',
    ilu: { src: 'img/prov/incendio1814.jpg', w: 1000, h: 667, prov: true,
      alt: 'Imagen provisional: trama abstracta, en el color de la era y con la trama del grado de prueba, mientras la entrada no tenga ilustración.' },
    tr: 'portada',
    f: 'Bibliografía sobre la transmisión del corpus · inventario, §8.1' },

  { id: 'minano', era: 3, y: '1826', s: 1826, n: 'visto',
    t: 'Un pueblo «cercado de colinas»',
    p: '«Cercado de colinas.» Así lo despacha Miñano en 1826. Y lo llama Colinas a secas, sin «de Trasmonte».|Aldea de señorío. Alcalde pedáneo. Ni villa ni ayuntamiento.|Cincuenta y cinco vecinos. Doscientos veintiséis habitantes, sin cotejar.|Una parroquia y un pósito: el granero del común. <b>No aparece en ninguna otra fuente.</b>|Con el molino y la fragua, tres casas sostenía el concejo por su cuenta.',
    q: '«Sit. al S. del valle de Vidriales, á la orilla del rio Tera, 2 leguas al S. O. de la villa de Benavente, cercado de colinas»',
    nota: 'Los vecindarios de Miñano se tienen por menos fiables que los de Madoz, y sus 226 habitantes siguen sin cotejar. El obispado de Astorga, en cambio, queda dicho por escrito veintiún años antes que Madoz.',
    /* El facsímil del propio documento. No es un adorno: es la prueba,
       y por eso se ve entera y no recortada. */
    img: { src: 'img/doc/minano.jpg', w: 751, h: 355,
      alt: 'Columna de un diccionario impreso del siglo XIX; la entrada empieza en versales: «COLINAS, Ald. S. de España».',
      cap: 'La entrada entera, de nueve líneas: «55 vecinos, 226 hab., 1 parroquia, 1 pósito… cercado de colinas». <span class="mono">Miñano, Diccionario geográfico-estadístico, t. III, Madrid, 1826, p. 142 · ejemplar de la Universidad de Granada</span>' },
    tr: 'caja',
    f: 'Miñano, Diccionario geográfico-estadístico de España y Portugal, t. III, Madrid, 1826, p. 142 (ejemplar digitalizado de la Universidad de Granada)' },

  { id: 'provincia', era: 4, y: '1833', d: '30 de noviembre', s: 1833, n: 'contexto',
    t: 'Provincia de Zamora',
    p: 'La nueva división territorial adscribe Colinas a Zamora, y en 1834 al partido judicial de Benavente. En 1752 se había catastrado bajo Valladolid.',
    /* Retrato de contexto: la cara de quien da nombre al documento,
       no una imagen de Colinas. El pie de la lámina lo dice solo. */
    img: { src: 'img/ret/provincia.jpg', w: 819, h: 1200, ctx: true,
      alt: 'Litografía decimonónica de un hombre de mediana edad, con levita y condecoraciones, que sostiene un mapa enrollado rotulado «Mapa de España. División territorial».',
      cap: 'Francisco Javier de Burgos, litografía de Domingo Valdivieso (BNE). Sostiene un mapa enrollado con el rótulo «División territorial»: la suya, la de 1833, la que pone Colinas en Zamora. <span class="mono">Domingo Valdivieso y Henarejos · Wikimedia Commons, Public domain</span>' },
    tr: 'portada',
    f: 'Real Decreto de 30 de noviembre de 1833' },

  { id: 'matricula1842', era: 4, y: '1842', s: 1842, n: 'visto',
    t: 'Ciento treinta y dos, y el propio INE dice que no cuenta',
    q: '«sin rigor, por el procedimiento de imputaciones»',
    p: 'Es la primera cifra de la serie moderna de población, y viene del Censo de la Matrícula Catastral. El INE, al describir su propia metodología, dice que se hizo así, sin fecha de referencia, y que <b>«no aporta ningún dato numérico de confianza»</b>. Está documentado que la cifra existe; está documentado que no vale como medición.',
    nota: 'Y sin embargo el hoyo puede ser real. En vecinos la caída es igual de clara —55 en 1826, 33 en 1847—, con la misma proporción de almas por vecino en las dos fuentes, lo que descarta que sea un problema de unidad de cuenta. Entre 1826 y 1842 caben la primera guerra carlista, el cólera de 1834 y la desamortización. Queda abierto por los dos lados.',
    /* La plana oficial donde el pueblo está escrito. Se ve entera:
       lo que prueba es el renglón, y el renglón vive en su página. */
    img: { src: 'img/doc/matricula1842.jpg', w: 1400, h: 1980,
      alt: 'Página impresa moderna con el epígrafe «Censo de 1842» y un párrafo de texto debajo.',
      cap: 'La metodología del propio INE, sobre el censo de 1842: «Fue realizado sin rigor por el procedimiento de imputaciones […] su baja calidad no aporta ningún dato numérico de confianza». <span class="mono">INE, Alteraciones de los municipios en los Censos de Población desde 1842, p. 7</span>' },
    tr: 'caja',
    f: 'INE, Alteraciones de los municipios desde 1842, metodología' },

  { id: 'madoz', era: 4, y: '1847', s: 1847, n: 'visto',
    t: 'Un monte que se llama como el pueblo',
    q: '«Hay un monte encinal con el mismo nombre del pueblo, que forma con otros una cordillera de 2 horas hasta San Juanico»',
    p: 'Madoz describe una aldea con ayuntamiento propio, en una ladera orientada al sur, con 35 casas en 6 calles, iglesia de San Juan Bautista, cementerio y buenas aguas. Produce trigo y lino, cría ganado lanar y pesca barbos. Y dice que en su término están los despoblados de Castroferrol y Pobladura de Trasmonte.',
    nota: 'La frase del monte es el apoyo más firme que tiene el topónimo: no eran unas colinas cualesquiera, había un encinar llamado «Colinas», en fila con otros cerros a lo largo de unos ocho o diez kilómetros. Lo que no dice es cuál nombró a cuál.',
    /* Retrato de contexto: la cara de quien da nombre al documento,
       no una imagen de Colinas. El pie de la lámina lo dice solo. */
    img: { src: 'img/ret/madoz.jpg', w: 1400, h: 1916, ctx: true,
      alt: 'Retrato al óleo de un hombre mayor y calvo, de levita negra y corbata blanca, con un libro grueso bajo el brazo y la mano apoyada en una mesa con más libros.',
      cap: 'Pascual Madoz por José Nin y Tudó, 1873, Congreso de los Diputados. Es el autor del diccionario que dedica nueve líneas al pueblo; el cuadro no tiene nada que ver con él. <span class="mono">José Nin y Tudó · Wikimedia Commons, Public domain</span>' },
    tr: 'portada',
    f: 'Madoz, Diccionario geográfico-estadístico-histórico, t. VI, Madrid, 1847, p. 521 · facsímil leído a resolución completa (Internet Archive)' },

  { id: 'osuna1848', era: 4, y: '1848', d: '18 de marzo', s: 1848, n: 'visto',
    t: 'Por qué estos papeles existen',
    p: 'La Casa de Osuna autentica ante un juzgado de Madrid sus títulos de 1694 sobre los diezmos de <b>quince lugares, Colinas entre ellos</b>, frente al Promotor Fiscal como representante de la Hacienda Nacional. Auto del 18 de marzo, cotejo el 20. El diezmo estaba suprimido desde 1837, así que esto ya no es cobrar: es <b>liquidar derechos</b>. Y es la razón de que el legajo de 1694 se copiara, se guardara y hoy se pueda leer.',
    /* Retrato de contexto: la cara de quien da nombre al documento,
       no una imagen de Colinas. El pie de la lámina lo dice solo. */
    img: { src: 'img/ret/osuna1848.jpg', w: 756, h: 1050, ctx: true,
      alt: 'Retrato de cuerpo entero de un joven de uniforme oscuro con charreteras de plata, apoyado en un pedestal de piedra donde descansa su chacó.',
      cap: 'Mariano Téllez-Girón por Valentín Carderera, hacia 1833, Museo Nacional del Romanticismo. Retratado a los diecinueve años, once antes de heredar; en 1848 es el titular de la casa cuyo archivo guarda el legajo de 1694. <span class="mono">Valentin Carderera y Solano · Wikimedia Commons, Public domain</span>' },
    tr: 'portada',
    f: 'AHNOB, OSUNA, C.466, D.90, img. 62-68 · el traslado se había sacado en Madrid el 18 de enero de 1842, por D. Claudio Sanz y Barca [?]' },

  { id: 'censo1857', era: 4, y: '1857', s: 1857, n: 'cotejar',
    t: 'Primer censo moderno: 386 habitantes',
    p: 'Quince años antes se contaban 132. Nadie triplica su población en ese tiempo: o la cifra de 1842 se quedaba corta, o el municipio cambió de término. Y ese mismo año, el 22 de julio, la Gaceta nombra cura de Colinas a <b>D. Pedro Ramos</b>.',
    /* La plana oficial donde el pueblo está escrito. Se ve entera:
       lo que prueba es el renglón, y el renglón vive en su página. */
    img: { src: 'img/doc/censo1857.jpg', w: 1400, h: 1961,
      alt: 'Primera plana de la Gaceta de Madrid de 1857, con la cabecera grabada, el escudo real y cinco columnas de texto apretado.',
      cap: 'La Gaceta del 22 de julio de 1857. En la sección de Gracia y Justicia, entre los curatos de la diócesis de Astorga: <b>«Para el de Colinas de Trasmonte á D. Pedro Ramos»</b>. <span class="mono">Gaceta de Madrid núm. 1.660, 22-VII-1857 · BOE-A-1857-7483</span>' },
    tr: 'portada',
    f: 'Censo de población (INE), serie pendiente de cotejo · el nombramiento, Gaceta de Madrid, 22-VII-1857, BOE-A-1857-7483' },

  { id: 'pecuarias1863', era: 4, y: '1863', s: 1863, n: 'sinleer',
    t: 'Las vías pecuarias del término, reconocidas',
    p: 'Acta de reconocimiento de las vías pecuarias del término. En el mismo expediente hay copia del reconocimiento de la <b>Cañada Real Sanabresa</b>, de 1895. Por aquí pasaba ganado trashumante, y alguien vino a medir por dónde.',
    nota: 'El expediente <b>no está digitalizado</b>: se sabe que existe y dónde está, no lo que dice. Es de los pocos casos en que haría falta ir en persona.',
    /* No hay facsímil del papel, pero sí del terreno: la imagen enseña
       lo que el documento midió o contó. */
    img: { src: 'img/doc/pecuarias1863.jpg', w: 1400, h: 940,
      alt: 'Mapa topágrafico antiguo en color, con curvas de nivel, los pueblos en rojo y los arroyos en azul; arriba a la derecha se leen los rótulos «Vereda» y «de ganados».',
      cap: 'El expediente de 1863 no está digitalizado, pero lo que midieron sigue dibujado: al nordeste del término, el mapa rotula <b>«Vereda» y «Vereda del ganado»</b>. <span class="mono">IGN, MTN50 de primera edición —anterior a 1972—, servicio WMS</span>' },
    tr: 'caja',
    f: 'AHN, DIVERSOS-MESTA, 746, Exp. 38' },

  { id: 'propios1866', era: 4, y: '1860–1889', s: 1866, n: 'visto',
    t: 'La desamortización vende los bienes de propios',
    p: 'Siete asientos de la Gazeta registran ventas de <b>bienes de propios</b> de Colinas, con sus meses: enero de 1866, mayo de 1873… Lo que era del común —montes, prados, eras— pasa a manos particulares.',
    nota: 'Está documentado que hubo ventas. <b>No está leído qué se vendió ni a quién</b>: los asientos dan la referencia, no el contenido.',
    /* La plana oficial donde el pueblo está escrito. Se ve entera:
       lo que prueba es el renglón, y el renglón vive en su página. */
    img: { src: 'img/doc/propios1866.jpg', w: 1400, h: 1913,
      alt: 'Plana de la Gaceta con una tabla: número de orden, corporación, mes y año, e importe.',
      cap: 'El asiento de la venta, en su renglón: <b>«Idem de Colinas de Trasmonte — Enero 1866 — 106,667»</b>. Es una de las siete anotaciones que registran la venta de los bienes del común. <span class="mono">Gaceta de Madrid, 24-IX-1868 · BOE-A-1868-8172</span>' },
    tr: 'portada',
    f: 'Gazeta de Madrid, siete asientos entre 1860 y 1889 · vaciado en la ficha boe-gazeta' },

  { id: 'distritos1870', era: 4, y: '1870', s: 1870, n: 'visto',
    t: 'Con quién va Colinas cuando se vota',
    p: 'Para las elecciones se agrupa con Barcial del Barco, Arcos de la Polvorosa, Santa Colomba de las Monjas, Villanázar, Sitrama, Santa Croya y Melgar de Tera. En 1877 queda en el «segundo distrito: Micereces de Tera». Y un itinerario oficial de ese mismo año pasa por «Benavente, Santa Cristina, <b>Vecilla, Colinas, Quiruelas</b>, Sitrama…»: es el camino por el que se iba y se venía.',
    /* La plana oficial donde el pueblo está escrito. Se ve entera:
       lo que prueba es el renglón, y el renglón vive en su página. */
    img: { src: 'img/doc/distritos1870.jpg', w: 1400, h: 1895,
      alt: 'Plana de la Gaceta a tres columnas, con los partidos judiciales y los pueblos de cada distrito electoral.',
      cap: 'El distrito, escrito pueblo a pueblo: partido judicial de Benavente, primer distrito, Micereces de Tera —y en la lista, <b>Colinas de Trasmonte</b>—. <span class="mono">Gaceta de Madrid, 30-IX-1870 · BOE-A-1870-7800</span>' },
    tr: 'portada',
    f: 'BOE-A-1870-7800 · BOE-A-1877-1187 y BOE-A-1877-3272' },

  { id: 'sello', era: 4, y: '1876', d: 'diciembre', s: 1876, n: 'visto',
    t: 'El único sello',
    q: '«va estampado el único que existe y ha existido en este municipio»',
    p: 'El alcalde remite al Gobernador Civil el sello del Ayuntamiento Constitucional. Lleva las armas reales de España, y el archivo municipal no guarda noticia de ningún otro. Colinas nunca tuvo escudo propio: cualquier emblema será el primero.',
    img: { src: 'img/sello-1876.png', w: 560, h: 642, alt: 'Impronta oval del sello con la leyenda Ayuntamiento Constitucional de Colinas de Trasmonte y las armas reales bajo corona.', cap: 'Impronta del sello, ampliada. Leyenda: AYUNTAM.TO CONSTIT.L DE COLINAS DE TRASMONTE.' },
    tr: 'vineta',
    f: 'AHN, SIGIL-TINTA_ZAMORA,20,N.31' },

  { id: 'maestro1894', era: 4, y: '1894', s: 1894, n: 'visto',
    t: 'El maestro se llama Valentín Rodríguez',
    p: 'Puesto 76 del escalafón del magisterio de la provincia de Zamora. Es el <b>primer maestro de Colinas</b> que el proyecto conoce por su nombre.',
    /* La plana oficial donde el pueblo está escrito. Se ve entera:
       lo que prueba es el renglón, y el renglón vive en su página. */
    img: { src: 'img/doc/maestro1894.jpg', w: 1400, h: 1919,
      alt: 'Tabla impresa titulada «Escalafón definitivo de los Maestros», con columnas de número, nombre, pueblo en que sirven y antigüedad en años, meses y días.',
      cap: 'Número 203 de orden y <b>76 de su clase</b>: «Valentín Rodríguez — Colinas de Trasmonte», con nueve años, diez meses y veinticinco días de servicio. <span class="mono">Gaceta de Madrid núm. 302, 29-X-1894, p. 332 · BOE-A-1894-6665</span>' },
    tr: 'portada',
    f: 'BOE-A-1894-6665, escalafón del magisterio, provincia de Zamora' },

  { id: 'camino1905', era: 4, y: '1905', s: 1905, n: 'visto',
    t: 'Colinas, cabecera de un camino vecinal',
    q: '«De Colinas de Trasmonte al Cubo de Benavente»',
    p: 'Así lo nombra el plan de caminos vecinales: por Colinas, no por los pueblos mayores que el itinerario atraviesa después —Quiruelas, Quintanilla, Brime de Urz, Cunquilla, Granucillo, Grijalba, Villaobispo, Santibáñez y Brime de Sog—. <b>Colinas es la cabecera.</b>',
    /* La plana oficial donde el pueblo está escrito. Se ve entera:
       lo que prueba es el renglón, y el renglón vive en su página. */
    img: { src: 'img/doc/camino1905.jpg', w: 1400, h: 1890,
      alt: 'Plana de la Gaceta con tablas de caminos vecinales y, arriba a la derecha, la lista de los de la Diputación de Zamora.',
      cap: 'El camino, con su nombre entero: <b>«De Colinas de Trasmonte al Cubo de Benavente»</b>, por Quiruelas de Vidriales, Quintanilla, Brime de Urz, Granucillo, Grijalba, Santibáñez… <span class="mono">Gaceta de Madrid núm. 160, 9-VI-1905, p. 969 · BOE-A-1905-3586</span>' },
    tr: 'portada',
    f: 'BOE-A-1905-3586' },

  { id: 'juzgado1945', era: 4, y: '1945', s: 1945, n: 'visto',
    t: 'Al juzgado de Santibáñez, y sin Quiruelas',
    p: 'Colinas pasa al Juzgado Comarcal de Santibáñez de Tera, junto con Villanázar. <b>Quiruelas no está en ese grupo.</b> Veintisiete años después será Quiruelas quien lo absorba.',
    /* La plana oficial donde el pueblo está escrito. Se ve entera:
       lo que prueba es el renglón, y el renglón vive en su página. */
    img: { src: 'img/doc/juzgado1945.jpg', w: 1400, h: 1873,
      alt: 'Plana del Boletín Oficial del Estado a tres columnas, con la demarcación de los juzgados, partido por partido.',
      cap: 'Partido judicial de Benavente, juzgado comarcal de <b>Santibáñez de Tera</b>: entre sus juzgados de paz, Colinas de Trasmonte. Quiruelas aparece en el grupo de al lado, el de Santibáñez de Vidriales. <span class="mono">BOE núm. 92, 2-IV-1945, p. 2592 · BOE-A-1945-3382</span>' },
    tr: 'portada',
    f: 'BOE-A-1945-3382' },

  { id: 'max1950', era: 4, y: '1950', s: 1950, n: 'cotejar',
    t: 'Máximo histórico: 625 habitantes',
    p: 'Un siglo de crecimiento casi sin pausa. Desde aquí la población sólo baja.',
    /* No hay facsímil del papel, pero sí del terreno: la imagen enseña
       lo que el documento midió o contó. */
    img: { src: 'img/doc/max1950.jpg', w: 1400, h: 731,
      alt: 'Dos fotografías aéreas del mismo casco, una al lado de otra: a la izquierda en blanco y negro, rotulada «Vuelo americano, 1956-57»; a la derecha en color, «PNOA 2023».',
      cap: 'El casco seis años después del máximo, y el mismo casco hoy. Las casas están casi en los mismos sitios; lo que cambió fue <b>cuánta gente había dentro</b>. <span class="mono">Ortofotos: IGN / CNIG — AMS 1956-1957 y PNOA 2023</span>' },
    tr: 'caja',
    f: 'Censo de población (INE), serie pendiente de cotejo' },

  { id: 'vuelo1956', era: 4, y: '1956–57', s: 1956, n: 'visto',
    t: 'El vuelo americano retrata el minifundio',
    p: 'Las fotografías aéreas muestran el término en haces de <b>tiras estrechas</b> y caminos sinuosos. Son las 5.560 parcelas que el decreto de 1970 va a contar, y la última imagen del paisaje agrario que describía el Catastro de 1752.',
    /* La foto aérea es la prueba del minifundio: se ve entera, con su
       leyenda, porque recortarla sería quitarle justo lo que prueba. */
    img: { src: 'img/doc/vuelo1956.jpg', w: 1400, h: 1370,
      alt: 'Ortofoto aérea en blanco y negro del término, partido en cientos de tiras largas y estrechas. Una línea amarilla marca el límite del término y una roja la raya con Quiruelas; hay tres rótulos: Quiruelas de Vidriales, Colinas de Trasmonte y Vecilla de Trasmonte.',
      cap: 'El término entero en el vuelo americano de 1956-57. <b>Todo él está partido en tiras largas y estrechas</b>: son las 5.560 parcelas que el decreto de 1970 contará una a una. En amarillo, el límite del término; en rojo, la raya con Quiruelas, que dejó de ser línea municipal en 1972. <span class="mono">Ortofoto: IGN / CNIG, AMS 1956-1957 (serie B), servicio WMS PNOA histórico · límite reconstruido por el proyecto</span>' },
    tr: 'portada',
    f: 'IGN, vuelo americano serie B, AMS 1956-1957' },

  { id: 'escuela1959', era: 4, y: '1958–59', s: 1958, n: 'visto',
    t: 'La unidad mínima de cultivo, y una escuela',
    q: '«una Escuela mixta, servida por Maestra, en el casco del Ayuntamiento de Colinas de Trasmonte»',
    p: 'En 1958 se fija la <b>unidad mínima de cultivo</b> del término: por debajo de esa superficie una finca ya no puede partirse. Al año siguiente se crea definitivamente la escuela.',
    /* La plana oficial donde el pueblo está escrito. Se ve entera:
       lo que prueba es el renglón, y el renglón vive en su página. */
    img: { src: 'img/doc/escuela1959.jpg', w: 1400, h: 1985,
      alt: 'Plana del BOE a dos columnas con la relación de escuelas creadas, ordenada por provincias.',
      cap: 'Bajo el epígrafe de Zamora: <b>«Una Escuela mixta, servida por Maestra, en el casco del Ayuntamiento de Colinas de Trasmonte»</b>. <span class="mono">BOE núm. 174, 22-VII-1959, p. 10023 · BOE-A-1959-9954</span>' },
    tr: 'portada',
    f: 'BOE-A-1958-9342 · Orden de 7 de julio de 1959, BOE-A-1959-9954' },

  { id: 'decreto1970', era: 4, y: '1970', d: '8 de octubre', s: 1970, n: 'visto',
    t: 'Concentración parcelaria',
    p: 'El Decreto 3119/1970 declara de utilidad pública la concentración de Colinas: 1.043 hectáreas, 405 propietarios y 5.560 parcelas, casi catorce por dueño.',
    q: '«cuyo perímetro será, en principio, el del término municipal del mismo nombre»',
    nota: 'No salió de la nada: dos años antes, un decreto de 11 de julio de 1968 había declarado la comarca «Benavente-Tera» sujeta a ordenación rural. Y la concentración <b>la pidieron los propios agricultores</b>.',
    /* La plana oficial donde el pueblo está escrito. Se ve entera:
       lo que prueba es el renglón, y el renglón vive en su página. */
    img: { src: 'img/doc/decreto1970.jpg', w: 1400, h: 1981,
      alt: 'Plana del BOE a dos columnas, con varios decretos de concentración parcelaria uno detrás de otro.',
      cap: 'El <b>Decreto 3119/1970</b>, entre los de otras zonas. Dice que la concentración la motivaron «los agricultores de la misma en solicitud de concentración», y que la zona pertenece a la comarca de ordenación rural de «Benavente-Tera». <span class="mono">BOE núm. 257, 27-X-1970, p. 17434 · BOE-A-1970-50433</span>' },
    tr: 'portada',
    f: 'BOE núm. 257, de 27 de octubre de 1970, p. 17434 · el decreto de 1968, citado en BOE-A-1976-7522' },

  { id: 'titulares1971', era: 5, y: '1971', s: 1971, n: 'visto',
    t: 'Setenta y dos nombres, por una carretera',
    p: 'Se publican los titulares de las fincas del término afectadas por la expropiación de la <b>carretera C-620</b>, de Benavente a Sitrama de Tera. El acto se convoca para el 25 de junio <b>en el Ayuntamiento de Colinas</b>. Setenta y dos nombres: es la lista de vecinos más larga que el proyecto tiene de este término.',
    nota: 'Los nombres vienen de <b>reconocimiento óptico del boletín</b> y están normalizados. Hay que cotejarlos uno a uno antes de darlos por buenos: un apellido mal leído en una lista de vecinos no es un detalle.',
    /* La plana oficial donde el pueblo está escrito. Se ve entera:
       lo que prueba es el renglón, y el renglón vive en su página. */
    img: { src: 'img/doc/titulares1971.jpg', w: 1400, h: 1984,
      alt: 'Tabla del BOE con columnas de expediente, finca, propietario, superficie a expropiar, paraje y clasificación catastral.',
      cap: 'Los setenta y dos, finca por finca, con el paraje al lado: Guadaño, Valdemanzanas, Canal, Gala. Al final de la lista, el <b>Ayuntamiento de Colinas</b> y el Estado. <span class="mono">BOE núm. 138, 10-VI-1971, p. 9423 · BOE-A-1971-40309</span>' },
    tr: 'portada',
    f: 'BOE-A-1971-40309' },

  { id: 'fin-municipio', era: 5, y: '1972', d: '10 de febrero', s: 1972, n: 'visto',
    t: 'El pueblo pide dejar de ser municipio',
    q: '«en atención a la escasez de población, dificultad para mantener los servicios mínimos obligatorios y deseo de mejorarlos»',
    p: 'El Ayuntamiento de Colinas acuerda, con quórum legal, solicitar su incorporación a Quiruelas de Vidriales; Quiruelas la acepta y el Consejo de Ministros la aprueba. No hubo «reclamación alguna» en el plazo de información pública. El concejo que en 1752 tenía molino y fragua propios se disuelve a petición suya.',
    /* La plana oficial donde el pueblo está escrito. Se ve entera:
       lo que prueba es el renglón, y el renglón vive en su página. */
    img: { src: 'img/doc/fin-municipio.jpg', w: 1400, h: 1987,
      alt: 'Plana del BOE a dos columnas con varios decretos de incorporación de municipios, uno detrás de otro.',
      cap: 'El <b>Decreto 354/1972</b>: el Ayuntamiento de Colinas «adoptó acuerdo, con quórum legal, de solicitar la incorporación de su Municipio al limitrofe de Quiruelas de Vidriales […] en atención a la escasez de población». <span class="mono">BOE núm. 45, 22-II-1972, p. 3172 · Decreto 354/1972, de 10 de febrero</span>' },
    tr: 'portada',
    f: 'Decreto 354/1972, de 10 de febrero · BOE núm. 45, de 22 de febrero de 1972, pp. 3172-3173 (BOE-A-1972-33978)' },

  { id: 'juzgado1972', era: 5, y: '1972', d: '27 de junio', s: 1972, n: 'visto',
    t: 'El archivo se va a Quiruelas',
    p: 'Cuatro meses después de la incorporación se suprime el <b>Juzgado de Paz</b> de Colinas, y su documentación y su archivo pasan al de Quiruelas. No es un detalle administrativo: es adónde fueron a parar los papeles del pueblo, y por dónde hay que empezar a buscarlos.',
    /* La plana oficial donde el pueblo está escrito. Se ve entera:
       lo que prueba es el renglón, y el renglón vive en su página. */
    img: { src: 'img/doc/juzgado1972.jpg', w: 1400, h: 1971,
      alt: 'Plana del BOE con las órdenes de supresión de juzgados de paz, a dos columnas.',
      cap: 'La orden suprime el Juzgado de Paz de Colinas y manda su documentación y archivo al de Quiruelas de Vidriales, <b>«el que se hará cargo»</b>. <span class="mono">BOE núm. 189, 8-VIII-1972, p. 14454 · BOE-A-1972-1185</span>' },
    tr: 'portada',
    f: 'Orden de 27 de junio de 1972, BOE-A-1972-1185' },

  { id: 'plano1975', era: 5, y: '1975', d: 'enero', s: 1975, n: 'visto',
    t: 'El término, dibujado',
    p: 'Los seis planos del IRYDA dibujan el término finca a finca. Rotulan los cinco confrontantes —Quiruelas de Vidriales, Manganeses de la Polvorosa, Santa Cristina de la Polvorosa, Vecilla de Trasmonte y Aguilar de Tera— y, con ellos, los nombres de los pagos: El Valle, Vallondo, El Pendón, Las Tapias, Los Llanos, Las Porqueras. Es toponimia que no recoge ninguna otra fuente.',
    link: { href: '#termino', t: 'Ver el plano y los lindes' },
    /* La plana oficial donde el pueblo está escrito. Se ve entera:
       lo que prueba es el renglón, y el renglón vive en su página. */
    img: { src: 'img/doc/plano1975.jpg', w: 1400, h: 1025,
      alt: 'Plano general del término dibujado a línea, con todas las fincas numeradas, los términos vecinos rotulados alrededor y, abajo a la derecha, la carátula del IRYDA.',
      cap: 'El término entero, dibujado finca a finca: <b>«COLINAS DE TRASMONTE, provincia Zamora, escala 1:5.000, fecha plano I-75, realizador A. Figal»</b>. <span class="mono">IRYDA, plano general de la concentración parcelaria, I-1975 · Junta de Castilla y León</span>' },
    tr: 'caja',
    f: 'IRYDA, plano general de la concentración parcelaria, I-75, A. Figal · Junta de Castilla y León' },

  { id: 'cecilia', era: 5, y: '1976', d: '2 de agosto', s: 1976, n: 'cotejar',
    t: 'Muere Cecilia',
    p: 'La cantautora Evangelina Sobredo Galanes y el batería Carlos de la Iglesia mueren de madrugada en la carretera que cruza el casco de Colinas, cuando su coche choca con un carro de bueyes sin luces. Es el hecho por el que se conoce el nombre del pueblo fuera de la comarca. Se cuenta aquí; no es un símbolo.',
    nota: 'Las crónicas dicen N-525; los planos de 1977 rotulan esa carretera «C-620 de Benavente a Mombuey», que es el mismo itinerario de la N-525 de hoy. Casi seguro es la misma vía renumerada, pero no está comprobado cuándo cambió de nombre.',
    ilu: { src: 'img/prov/cecilia.jpg', w: 1000, h: 667, prov: true,
      alt: 'Imagen provisional: trama abstracta, en el color de la era y con la trama del grado de prueba, mientras la entrada no tenga ilustración.' },
    tr: 'portada',
    f: 'Inventario, §11 · pendiente de citar por la prensa de la época' },

  { id: 'acuerdo1977', era: 5, y: '1977', d: '1 de marzo', s: 1977, n: 'visto',
    t: 'De 5.560 parcelas a 993 fincas',
    p: 'Se aprueba el acuerdo de concentración. Termina el paisaje agrario que describía el Catastro. El año anterior se había aprobado el plan de obras que lo acompaña: «red de caminos y red de saneamiento».',
    /* La plana oficial donde el pueblo está escrito. Se ve entera:
       lo que prueba es el renglón, y el renglón vive en su página. */
    img: { src: 'img/doc/acuerdo1977.jpg', w: 1400, h: 494,
      alt: 'Tres fotografías aéreas del mismo pueblo, una al lado de otra, rotuladas «Vuelo 1956-57», «Vuelo 1973-86» y «Vuelo 2023».',
      cap: 'Lo que hizo la concentración, visto desde el aire: las tiras estrechas de 1956, los bloques grandes y los caminos rectos del vuelo siguiente, y el término de hoy. <b>No es el acuerdo: es su efecto.</b> <span class="mono">Ortofotos: IGN / CNIG — AMS 1956-1957, Interministerial 1973-1986 y PNOA 2023</span>' },
    tr: 'caja',
    f: 'Junta de Castilla y León, ficha de la concentración parcelaria · el plan de obras, Orden de 26 [?]-II-1976, BOE-A-1976-7522' },

  { id: 'registro1986', era: 5, y: '1986', s: 1986, n: 'visto',
    t: 'La figura que a Colinas le falta',
    p: 'Creado el Registro de Entidades Locales, <b>catorce pueblos de Zamora</b> se inscriben como entidad local menor entre 1986 y 2003. Colinas no es uno de ellos, y Quiruelas, su municipio, no tiene ninguna. <b>Vecilla de Trasmonte</b> —a 1.673 metros, del mismo apellido toponímico— se inscribe el 10 de octubre de 1986, con el número 4490008. Y <b>Aguilar de Tera</b>, confrontante del término y más pequeño que Colinas en 1768 —92 almas frente a 114—, se inscribe el 25 de julio de 2003 [?]. La figura que a Colinas le falta se constituyó en su propia raya.',
    nota: 'La fecha es de <b>inscripción</b>, no de creación de la entidad; y en el caso de Aguilar no está comprobado si es constitución nueva o inscripción tardía. Esto es lo que decide si un emblema de Colinas puede ser oficial por sí mismo o se queda en emblema vecinal.',
    ilu: { src: 'img/prov/registro1986.jpg', w: 1000, h: 667, prov: true,
      alt: 'Imagen provisional: trama abstracta, en el color de la era y con la trama del grado de prueba, mientras la entrada no tenga ilustración.' },
    tr: 'portada',
    f: 'Registro de Entidades Locales (RD 382/1986, de 10 de febrero), vía IDECyL y datos abiertos de la Junta de Castilla y León' },

  { id: 'excavacion', era: 5, y: '1993', d: '5–29 de julio', s: 1993, n: 'visto',
    t: 'Las zanjas del regadío destapan San Juan-El Valle',
    p: 'Excavación de urgencia al oeste del pueblo, camino de Quiruelas, en el paraje que el plano de 1977 rotula «El Valle». La tradición oral lo llamaba «el Convento de San Juan»; el nombre de Castroferrol se había perdido.',
    img: { src: 'img/excavacion-fig4-reticula.jpg', w: 900, h: 868, alt: 'Dibujos de ollas plenomedievales con estriado horizontal y retícula incisa.', cap: 'Cerámica plenomedieval con retícula incisa (fig. 4).' },
    f: 'Martín Carbajo et al., Anuario 1993, pp. 37-48 · gabinete STRATO' },

  { id: 'a52', era: 5, y: 'Fin. s. XX', s: 1998, n: 'interp',
    t: 'La autovía se lleva el tráfico',
    p: 'Con la A-52, la N-525 se vacía y cierran gasolineras, bares y comercios. Pero la autovía no vació el pueblo: cuando llega, Colinas llevaba cuarenta años perdiendo gente. Acelera algo que ya venía de lejos.',
    ilu: { src: 'img/prov/a52.jpg', w: 1000, h: 667, prov: true,
      alt: 'Imagen provisional: trama abstracta, en el color de la era y con la trama del grado de prueba, mientras la entrada no tenga ilustración.' },
    tr: 'portada',
    f: 'Lectura del proyecto sobre la serie de población · fecha de apertura por precisar' },

  { id: 'p2024', era: 5, y: '2024', s: 2024, n: 'cotejar',
    t: '222 habitantes',
    p: 'Un 64 % menos que en 1950.',
    /* No hay facsímil del papel, pero sí del terreno: la imagen enseña
       lo que el documento midió o contó. */
    img: { src: 'img/doc/p2024.jpg', w: 1400, h: 1370,
      alt: 'Ortofoto aérea en color del término entero, con una línea amarilla que marca el límite y una roja la raya con Quiruelas; rotulados, Quiruelas de Vidriales, Colinas de Trasmonte y Vecilla de Trasmonte.',
      cap: 'El término hoy, con el mismo encuadre que la foto de 1956 y el mismo límite superpuesto. Donde había cientos de tiras hay ahora <b>parcelas grandes y caminos rectos</b>. <span class="mono">Ortofoto: IGN / CNIG, PNOA 2023 · límite reconstruido por el proyecto</span>' },
    tr: 'portada',
    f: 'Padrón municipal (INE), pendiente de cotejo' },

  { id: 'proyecto', era: 5, y: '2026', d: 'septiembre', s: 2026, n: 'propuesto',
    t: 'Recuperar el nombre, fundar un emblema',
    p: 'Este proyecto propone devolver Castroferrol a la memoria del pueblo y construir, por primera vez, unos colores y un emblema propios a partir de lo documentado.',
    link: { href: '#emblema', t: 'Ver la materia prima' },
    ilu: { src: 'img/prov/proyecto.jpg', w: 1000, h: 667, prov: true,
      alt: 'Imagen provisional: trama abstracta, en el color de la era y con la trama del grado de prueba, mientras la entrada no tenga ilustración.' },
    tr: 'portada',
    f: 'Proyecto Colinas de Trasmonte' }
];

const POB = {
  ant: [[1787,156],[1826,226]],
  mun: [[1842,132],[1857,386],[1860,425],[1877,413],[1887,452],[1897,498],[1900,491],[1910,477],[1920,529],[1930,552],[1940,620],[1950,625],[1960,612],[1970,548]],
  loc: [[2000,403],[2002,381],[2004,376],[2006,345],[2008,339],[2010,322],[2012,301],[2014,287],[2016,278],[2017,271],[2024,222]]
};

const USOS = [
  ['Monte de encinas, robles y jaras', 800, true],
  ['Sembradura de 3.ª calidad (sólo centeno)', 636],
  ['Sembradura de 1.ª calidad', 400],
  ['Sembradura de 2.ª calidad', 400],
  ['Prados y ejidos', 120],
  ['Viña', 16]
];

/* ═══════════ Control de versiones ═══════════
   VERSION      — la que se muestra en la portada y en el pie.
   Imágenes, y son dos cosas distintas:
     img — reproducción documental (facsímil, planta, dibujo de excavación).
           Se muestra entera y con su pie. No se recorta ni se escribe encima.
     ilu — ilustración interpretada. No es prueba de nada: el pie lo dice
           siempre, y lleva `gen` con el modelo y la fecha, que es su firma.
     tr  — cómo se integra la imagen en la lámina del teléfono, elegido
           entrada por entrada: 'caja' (por defecto), 'vineta', 'aguada' o
           'portada'. Cuando no es 'caja' la imagen pasa a ser el fondo y
           pierde su marco, así que su pie baja al texto de la lámina: la
           referencia no se pierde nunca.
     pos — encuadre de esa imagen de fondo, si el de por defecto no sirve.
           Lo que lleva object-position, p. ej. '50% 20%'.
     llena — sólo para `img`: en la lámina limpia del final, llenar la
           pantalla de borde a borde en vez de verse entera. Por defecto un
           documento se ve entero, porque recortarlo lo deja sin leer; esto
           es para decir que en esa imagen concreta da igual.

   VERSIONES_VISIBLE — ponlo en false y el apartado «Versiones» desaparece
                       de la web (también su enlace en el índice). El registro
                       sigue en el repositorio, en CHANGELOG.md.
   VERSIONES    — de la más nueva a la más antigua.                        */

const VERSION = '0.32';
const VERSIONES_VISIBLE = true;
/* El raíl: la línea del tiempo haciendo de barra de desplazamiento en el
   teléfono. Retirado el 25-IX-2026 por estorbar en la mano. El código se
   queda entero: ponlo en true y vuelve, marcas, arrastre y rótulo. */
const RAIL_VISIBLE = false;
/* Las ilustraciones interpretadas —las que dibujan lo que ningún documento
   enseña— no salen en la web mientras se decide qué papel tienen en un
   proyecto que se sostiene sobre pruebas. No se borran: siguen en los datos,
   con su pie y su aviso, y vuelven poniendo esto en true. Una imagen
   provisional no interpreta nada, así que ésas se quedan. */
const ILUSTRACIONES_VISIBLES = false;

const VERSIONES = [
  { v: '0.32', f: '26 de septiembre de 2026', t: 'Ninguna foto en el cajón',
    c: [
      '<b>Diecisiete entradas más enseñan su imagen</b>: la plana del BOE o de la Gaceta donde el pueblo está escrito, el plano de la concentración, el mapa viejo con sus veredas y el término visto desde el aire en 1956, en 1973 y hoy.',
      'Cinco de esas planas <b>no estaban descargadas</b> —el escalafón del maestro, el camino vecinal, la demarcación de juzgados, la unidad mínima y la escuela—: el propio proyecto tenía apuntada su dirección desde hacía días.',
      'Quedan catorce entradas con trama, y <b>de ninguna de ellas hay una imagen en el archivo</b>: son legajos sin pedir, diplomas que sólo viven en una copia del XVII, o cifras.'
    ],
    p: 'De sesenta y una entradas, cuarenta y cinco enseñan ya un documento, un retrato o una fotografía.' },
  { v: '0.31', f: '26 de septiembre de 2026', t: 'El término desde el aire',
    c: [
      '<b>La entrada del vuelo americano enseña ya la fotografía</b>: el término entero en 1956, partido en tiras largas y estrechas, con el límite superpuesto y la raya con Quiruelas que dejó de existir en 1972.',
      'Se ve <b>entera, con su leyenda</b>: recortarla sería quitarle justo lo que prueba.',
      'Es el retrato aéreo más antiguo que existe de este término: <b>el vuelo de 1945-46 no cubre Colinas</b>, según el propio servicio del IGN.'
    ],
    p: 'De la era del ayuntamiento, siete entradas siguen con trama; casi todas tienen su BOE en el repositorio.' },
  { v: '0.30', f: '26 de septiembre de 2026', t: 'El ayuntamiento, a cuatro voces',
    c: [
      '<b>La tercera era se pone a votación</b>: dieciséis entradas, de 1833 a 1970, escritas de cuatro maneras. Dos mil ochocientas palabras nuevas, y ningún dato que no estuviera ya en la fuente.',
      'Son los años en que el pueblo tiene ayuntamiento propio: la provincia nueva, los censos, la venta de los bienes del común, el único sello, el primer maestro con nombre y la concentración parcelaria.',
      '<b>En la línea no cambia nada hasta que se vote</b>, igual que en las dos eras anteriores.'
    ],
    p: 'Con ésta van tres eras escritas a cuatro voces y cuarenta y siete entradas comparadas; quedan catorce, en los dos extremos de la línea.' },
  { v: '0.29', f: '26 de septiembre de 2026', t: 'El papel, a la vista',
    c: [
      '<b>Diez entradas cambian su imagen provisional por el facsímil del propio documento</b>: la plana donde el provisor se niega, la notificación al cura de Colinas, la carta de la ermita, las tres ejecutorias en su papel sellado, el asiento de 1591, el índice donde Pobladura ya no está y la entrada de Miñano. Todas se ven enteras, con su signatura al pie.',
      '<b>La era del conde de Benavente queda en la voz votada</b>: diecinueve entradas cambian de redacción y una se queda como estaba. B 9, C 6, D 4, A 1.',
      '⚠️ <b>Una cautela corregida a la vista</b>: al leer la plana para ponerla en la web se vio que el cura de 1694 <b>sí está nombrado el 30 de enero</b>. Lo que decía el proyecto queda tachado, no borrado.'
    ],
    p: 'De la era del conde, dieciséis de veinte entradas enseñan ya una imagen de verdad. De las cuatro que faltan, tres son legajos sin leer.' },
  { v: '0.28', f: '26 de septiembre de 2026', t: 'Veinte entradas, cuatro voces',
    c: [
      '<b>La era del conde de Benavente se pone a votación</b>: sus veinte entradas, de 1526 a 1826, escritas de cuatro maneras distintas. Cuatro mil cuatrocientas palabras nuevas, y ni un dato que no estuviera ya en el papel.',
      'Aquí <b>A es lo que hay publicado</b>, porque esta era nunca se reescribió; la sobria, la microhistoria y la escena son las tres propuestas.',
      '<b>En la línea no cambia nada todavía.</b> Se vota primero, como se hizo con Castroferrol, y se aplica entrada por entrada.'
    ],
    p: 'La voz se elige por entrada y no por era: eso fue lo que enseñó la primera votación.' },
  { v: '0.27', f: '26 de septiembre de 2026', t: 'El Aranda que sí lo vio',
    c: [
      '<b>El retrato de 1768 cambia</b>: se va la copia decimonónica y entra el que le pintó Ramón Bayeu <b>en 1769, un año después del recuento</b>, hoy en el Museo de Huesca. Del natural, y casi contemporáneo del papel.',
      '<b>Las ilustraciones interpretadas dejan de salir en la web.</b> La de 1006 —la abadesa y su comunidad— sigue en los datos, con su aviso y su pie; simplemente no se publica mientras se decide qué sitio tiene un dibujo en una página que sólo enseña pruebas.',
      'Las <b>imágenes provisionales se quedan</b>: son tramas, no interpretan nada, y marcan el hueco de lo que falta.'
    ],
    p: 'La pintura de Bayeu está en dominio público; de la reproducción no constan las condiciones, y queda anotado en CRÉDITOS junto a lo demás que falta comprobar.' },
  { v: '0.26', f: '26 de septiembre de 2026', t: 'Cinco caras más',
    c: [
      '<b>Cinco entradas que estaban con imagen provisional tienen ya retrato de contexto</b>: Bermudo II, Alfonso VII, Javier de Burgos, Pascual Madoz y el XII duque de Osuna. Con los seis de antes, once.',
      'Bermudo II y Alfonso VII salen <b>del mismo códice</b>, hacia 1312-1325: dos reyes pintados por la misma mano tres siglos después de reinar. No son retratos, y el pie lo dice.',
      'El de 1833 no es una cara cualquiera: <b>sostiene el mapa rotulado «División territorial»</b>, que es justo lo que esa entrada cuenta.',
      'De Miñano (1826) <b>no hay retrato en dominio público</b>, así que se queda con su imagen provisional. El hueco también es un dato.'
    ],
    p: 'Quedan cuarenta y dos entradas con imagen provisional; casi ninguna tiene una cara que buscar.' },
  { v: '0.25', f: '25 de septiembre de 2026', t: 'La página del Catastro, a sangre',
    c: [
      '<b>En 1752 la imagen llena ya la lámina de borde a borde</b>, igual que los retratos. Se ve la letra del escribano grande, a cambio de perder los márgenes de la página.',
      'No es una excepción a mano: los datos tienen ahora un campo para decirlo imagen por imagen. Los otros cinco documentos <b>siguen viéndose enteros</b>, porque recortar un facsímil suele dejarlo sin leer.',
      'Fuera una bandera muerta de esa misma imagen, resto de una versión vieja que no usaba ya nadie.'
    ],
    p: 'Si alguno de los otros cuatro documentos también pide llenar, es una palabra en sus datos.' },
  { v: '0.24', f: '25 de septiembre de 2026', t: 'La voz, elegida a votos',
    c: [
      '<b>Las once entradas de Castroferrol quedan en la voz votada</b>, elegida <b>entrada por entrada</b> y no por línea: seis cambian, cinco ya estaban.',
      '<b>La sobria gana donde el hecho es un acto de documento</b> —una donación, unos testigos, una partición—. <b>La microhistoria gana donde hay un objeto o un gesto</b>: la viña, el deslinde que echa a andar, la sala que ardió.',
      '<b>1073 se queda en escena</b>, que son cuatro palabras y nada más. Y <b>el silencio vuelve a la redacción seca</b>: donde no hay nada que contar, contarlo menos es contarlo mejor.',
      'La lámina aprende a <b>separar párrafos</b>: dos de las voces los llevan y hasta ahora todo se metía en uno.'
    ],
    p: 'La regla para las otras cuatro eras sale de aquí: la voz se elige por entrada, no por línea.' },
  { v: '0.23', f: '25 de septiembre de 2026', t: 'Lámina limpia para las trece',
    c: [
      '<b>La lámina limpia deja de ser cosa de los retratos.</b> La tienen ahora las trece entradas con imagen de verdad: seis documentos, seis retratos y la ilustración de 1006. Entre ellas, <b>1752</b>, que es la que faltaba.',
      'Las <b>47 provisionales no la llevan</b>: una trama abstracta a pantalla completa no es nada que mirar.',
      '⚠️ <b>El documento se ve entero; la pintura, a sangre.</b> Un facsímil recortado deja de poder leerse, y para eso está ahí. Los retratos y la ilustración siguen llenando la lámina de borde a borde, como se pidió.'
    ],
    p: 'En 1752 la página del Catastro se ve ahora completa y grande, que es lo que no pasaba en ningún sitio.' },
  { v: '0.22', f: '25 de septiembre de 2026', t: 'Quién pintó al conde de Aranda',
    c: [
      '⚠️ <b>El retrato de 1768 no es del natural</b>, y ahora lo dice. Es una <b>copia decimonónica</b>, de hacia 1878, que Francisco Jover y Casanova hizo del retrato de Joaquín Inza. Museo del Prado, P003445.',
      'El crédito estaba incompleto por un fallo mío: el catálogo de Commons devolvía <b>autor y fecha en blanco</b> para ese fichero, y el descargador se lo creyó. Los datos estaban en la página, no en el catálogo.',
      'La mirada extraña que tiene se explica sola: es la de un copista de 1878 mirando otro cuadro, ochenta años después de morir el retratado.'
    ],
    p: 'No es una imagen generada. Conviene decirlo porque la pregunta era razonable.' },
  { v: '0.21', f: '25 de septiembre de 2026', t: 'El texto empieza arriba del todo',
    c: [
      '<b>Fuera la banda de arriba de la lámina</b> —el rótulo de la era y el sello de grado de prueba—. El texto arranca en lo alto y gana esa franja entera.',
      '<b>El sello baja al pie</b>, en pequeño, junto al año. No podía desaparecer: es lo que impide que una propuesta circule como un hecho cuando la lámina se comparte suelta.',
      'El nombre de la era deja de verse en la lámina. Sigue estando en el menú, que es desde donde se salta de un tiempo a otro, y en «Las fuentes».',
      'La portada y el silencio documental pierden también su banda, por lo mismo.'
    ],
    p: 'Los dos comparadores —voz y tratamientos de imagen— se regeneran con el mismo cambio, para que no enseñen una lámina que ya no existe.' },
  { v: '0.20', f: '25 de septiembre de 2026', t: 'El retrato, a sangre',
    c: [
      '<b>La lámina de retrato llena la pantalla de borde a borde</b>, centrada y sin papel a los lados ni por arriba.',
      '⚠️ <b>Eso recorta</b>: llenar el borde obliga a quitar lo que sobra por el lado largo. El cuadro entero, con su crédito, sigue estando en la lámina del texto de la misma entrada.'
    ],
    p: 'El más afectado es Felipe III, que es casi cuadrado y pierde ancho; los verticales —Goya, Aranda— pierden poco.' },
  { v: '0.19', f: '25 de septiembre de 2026', t: 'La imagen y nada más',
    c: [
      '<b>Fuera el marco, la sombra, el giro y el grano</b> de la lámina de retrato. La imagen va centrada y lo más grande que quepa entera, y no lleva nada encima.',
      'Se ajusta a la pantalla <b>sin cortar</b>: llenarla de borde a borde obligaría a recortar el cuadro, y eso ya se descartó.'
    ],
    p: 'El fondo de esas mismas entradas sigue recortando el cuadro para llenar la pantalla.' },
  { v: '0.18', f: '25 de septiembre de 2026', t: 'El cuadro entero, sin recortar',
    c: [
      '⚠️ <b>Fuera el recorte en diagonal</b> de la lámina de retrato. Cortaba dos triángulos del cuadro, y <b>una pintura recortada deja de ser la pintura</b>.',
      '<b>Ahora el retrato se ve entero</b>, montado sobre papel con su filo y ladeado unos grados, como una lámina dejada en la mesa. Sigue sin una palabra encima.',
      'El grano del papel pasa por encima también del cuadro, que es lo que hace que parezca impreso en la hoja.'
    ],
    p: 'El fondo de esas mismas entradas sigue recortando el cuadro para llenar la pantalla. Se puede cambiar a cuadro entero si también estorba.' },
  { v: '0.17', f: '25 de septiembre de 2026', t: 'La cara sola, en diagonal',
    c: [
      '<b>Las seis entradas con retrato ganan una lámina más</b>: la cara sola, recortada en una banda diagonal sobre el papel, <b>sin una palabra encima</b>. Va la última del carrusel: primero se lee la entrada, luego se mira la cara.',
      'El crédito —autor, obra, licencia— sigue estando, pero en la lámina del texto. Aquí «limpio» quiere decir limpio.',
      'El grano del papel cae también sobre el retrato, como en las ilustraciones: así la cara parece impresa en la hoja y no pegada encima.',
      'El filo de la diagonal es <b>una capa del mismo recorte</b>, un pelo más grande y puesta debajo. Una línea girada un ángulo fijo no seguiría al corte al cambiar de pantalla; esto sí.'
    ],
    p: 'Sólo la tienen las entradas con retrato de personaje: 1170, 1526, 1613, 1694, 1768 y 1787.' },
  { v: '0.16', f: '25 de septiembre de 2026', t: 'Seis caras para seis documentos',
    c: [
      '<b>Entran seis retratos de contexto</b>, todos en dominio público y traídos de Wikimedia Commons: Fernando II en el Tumbo A (1170), Carlos I por Tiziano (1526), Felipe III por Velázquez (1613), Inocencio XII (1694), el conde de Aranda (1768) y Floridablanca por Goya (1787).',
      '⚠️ <b>Un retrato no es una imagen de Colinas.</b> Es la cara de quien da nombre al documento, y el pie de la lámina escribe «Retrato de contexto» siempre, automáticamente. El de Goya no tiene nada que ver con este pueblo, y así queda dicho.',
      'Cada uno lleva su <b>autor, su obra, su licencia y su enlace a Commons</b> escritos en el pie y registrados en una hoja aparte. Es el punto 1 de «Lo que falta hacer» de los créditos, cumplido al menos para estos seis.',
      '<b>Tres se quedaron fuera, y se dice por qué</b>: Bermudo II y Alfonso VII sólo están en imágenes de 337 y 223 píxeles, que a pantalla completa se verían pastosas; de Pascual Madoz no se encontró retrato utilizable en dominio público.',
      '<b>Cecilia queda excluida a propósito.</b> Es de 1976, las fotografías tienen dueño y hay familia viva. No se busca.'
    ],
    p: 'Quedan 47 entradas con imagen provisional. Los retratos sólo sirven donde hay un personaje con cara conocida; el resto necesita ilustración propia.' },
  { v: '0.15', f: '25 de septiembre de 2026', t: 'La voz de la línea',
    c: [
      '<b>Las once entradas de Castroferrol, reescritas.</b> Primera era de las cinco. El problema no eran las frases largas —la media estaba en 13,8 palabras, que es prosa corta— sino <b>cuántos datos metía cada frase</b>: ocho o diez, y ninguna consecuencia.',
      'La regla es una idea por frase, empezar por la persona y no por la institución, y <b>decir siempre el «y eso significa»</b>. Los datos que salen del cuerpo no se tiran: bajan a la cautela.',
      '⚠️ <b>Novelar no es inventar.</b> Todo lo ganado sale del ritmo, del orden y de la consecuencia. No entra un solo dato que no estuviera ya escrito.',
      'Medido igual que antes: la carga de datos por frase baja de <b>4,9 a 2,4</b>, y la frase no se alarga —de 13,4 a 13,2 palabras—. No se ha simplificado el vocabulario; se ha bajado lo que se le pide al lector por frase.',
      'La voz queda escrita, con sus reglas y sus referencias, para que las otras cuatro eras salgan iguales.'
    ],
    p: 'Quedan por reescribir 49 entradas: Antes del nombre, el conde de Benavente, el ayuntamiento y la pedanía.' },
  { v: '0.14', f: '25 de septiembre de 2026', t: 'Las fuentes, a su propia página',
    c: [
      '<b>La firma de archivo sale de la lámina.</b> Ocupaba media pantalla en cada entrada del teléfono. Ahora vive entera en <b>«Las fuentes»</b>, una página propia del menú, agrupada por eras: sesenta entradas, sesenta firmas, ninguna perdida por el camino.',
      '<b>Lo que no sale de la lámina es el grado de prueba</b> —el sello de arriba a la derecha— ni la cautela de que un dibujo no es prueba. Una lámina se comparte suelta, y eso es lo que impide que una propuesta circule como un hecho.',
      '<b>Las sesenta entradas tienen ya imagen.</b> Cincuenta y tres son <b>provisionales</b>, y lo dicen en el pie: tramas abstractas, sin una sola letra, para que no se confundan con un documento. El <b>color es la era</b> y la <b>trama, el grado de prueba</b>; las tres tramas —pastilla, roseta y retícula— son las únicas que ha devuelto el suelo de Colinas.',
      'En pantalla grande la línea <b>sigue llevando su fuente junto a cada entrada</b>: ahí es un documento y la firma está en su sitio.',
      'El antiguo «Fuentes y créditos» pasa a llamarse <b>«Créditos y permisos»</b>, para no confundirse con la página nueva.'
    ],
    p: 'Las imágenes provisionales se sustituyen una a una: basta poner la buena en su sitio. Las genera web/gen-dummies.py.' },
  { v: '0.13', f: '25 de septiembre de 2026', t: 'Saltar de un tiempo a otro',
    c: [
      '<b>Las cinco eras, en el menú.</b> Quitado el raíl y con sesenta entradas, recorrer el feed a pulso había dejado de ser navegar. Ahora se salta a cualquiera de los cinco tiempos desde las tres rayas, sin ocupar pantalla ni competir con el gesto de «atrás».',
      'Funciona igual en el teléfono y en el ordenador: en el feed lleva a la primera entrada de esa era, y en el documento baja al separador.',
      'Si un filtro deja una era sin entradas, el salto <b>cae en la siguiente que sí tenga</b> en vez de no hacer nada.',
      '<b>El menú vuelve al retroceder.</b> Seguía retirándose al avanzar por el feed, como se pidió, pero así sólo se podía navegar desde la primera pantalla. Ahora reaparece en cuanto se desliza hacia atrás.'
    ],
    p: 'Las 53 entradas que no tienen imagen siguen sin tenerla: es el siguiente trabajo largo.' },
  { v: '0.12', f: '25 de septiembre de 2026', t: 'La línea, al día con la investigación',
    c: [
      '<b>Doce entradas más: de 48 a 60.</b> Tercera y última tanda. La línea publicada deja de ir por detrás del trabajo de archivo: empezó la jornada con 33 entradas.',
      '<b>1842: la cifra que el propio INE desaconseja.</b> Los 132 habitantes salen del Censo de la Matrícula Catastral, que el INE describe como hecho «sin rigor» y del que dice que «no aporta ningún dato numérico de confianza». Documentado que la cifra existe, y documentado que no vale como medición.',
      '<b>El siglo XIX, con nombres y caminos</b>: la desamortización vendiendo los bienes del común, las vías pecuarias reconocidas, los distritos con los que se votaba, el maestro Valentín Rodríguez y el camino vecinal que <b>sale de Colinas</b> y no de los pueblos mayores.',
      '<b>1945: al juzgado de Santibáñez, y sin Quiruelas.</b> Veintisiete años antes de que sea Quiruelas quien lo absorba.',
      '<b>1971: setenta y dos nombres por una carretera</b>, la lista de vecinos más larga que el proyecto tiene. Y <b>1972: el archivo se va a Quiruelas</b> con el Juzgado de Paz —adónde fueron a parar los papeles del pueblo—.',
      '🚨 <b>1986: la figura que a Colinas le falta.</b> Catorce pueblos de Zamora se inscriben como entidad local menor; Colinas no. Vecilla de Trasmonte, a 1.673 metros, sí. Y Aguilar de Tera, más pequeño que Colinas en 1768, también. Es lo que decide si un emblema puede ser oficial o se queda en vecinal.'
    ],
    p: 'Con esto, lo que falta <b>ya no es material investigado sin publicar, sino investigación por hacer</b>: el pleito de la Chancillería de 1694, el expediente de vías pecuarias del AHN y qué se vendió en la desamortización.' },
  { v: '0.11', f: '25 de septiembre de 2026', t: 'El pleito de los diezmos, entero',
    c: [
      '<b>Nueve entradas más: de 39 a 48.</b> La segunda tanda de poner la línea al día.',
      '<b>1693-1694: el pleito de los diezmos, contado entero.</b> El Nuncio manda y Astorga no obedece; desde Madrid le dan al provisor veinticuatro horas so pena de excomunión mayor; el cura de Colinas apela; y en mayo se descubre que <b>el tribunal que firmaba el despacho estaba inhibido</b>. Doce curas de la comarca quedan con nombre y respuesta.',
      '<b>1706: un pago que se llama San Pelayo</b>, como un mojón de 1129 —y la cautela de que eso no prueba nada, porque es advocación corriente de la ribera—. El mismo apeo deja a Pobladura fuera del término de Colinas.',
      '<b>1757: el arcipreste de los tres valles vive en Colinas.</b> Y las otras dos ejecutorias: los tres aniversarios de la parroquia (1772) y la casa vinculada de Domingo Bernardo (1804).',
      '<b>Pobladura de Trasmonte desaparece dos veces</b>: «despoblado por la peste» en 1526, vivo otra vez en 1591 con once vecinos, y ausente del Censo de Aranda. El hueco también es un dato.',
      '<b>1848: por qué estos papeles existen.</b> La Casa de Osuna autentica sus títulos de 1694 frente a la Hacienda, once años después de suprimido el diezmo. Sin esa liquidación de derechos, el legajo no se habría copiado.'
    ],
    p: 'Las marcas [?] de la línea pasan de 3 a 13: no es que se sepa menos, es que ahora está escrito dónde la lectura es dudosa. Queda la tanda 3, la cola administrativa de 1834 a 2003.' },
  { v: '0.10', f: '25 de septiembre de 2026', t: 'Seis entradas que cambian lo que la línea dice',
    c: [
      '🚨 <b>1073: Colinas aparece por su nombre.</b> «uilla que dicunt Colinas, in riba de Teira». Es la mención más antigua del pueblo que el proyecto conoce, <b>cuatrocientos setenta y ocho años</b> antes de lo que la línea daba por primero. Entra como <b>catalogada, sin leer</b>: la cita viene de un artículo, no del facsímil.',
      '<b>1526: veinticinco vecinos pecheros.</b> La medición de población más antigua, sesenta y cinco años anterior al vecindario de 1591. <b>1591: veintiocho vecinos</b>, y exactamente el lugar mediano de los 117 de la provincia.',
      '<b>1694: el cura de Colinas apela.</b> Obedece por fórmula y no cumple una orden del señor, con el Nuncio amenazando de excomunión. Es la primera resistencia escrita de alguien de Colinas.',
      '<b>1756: hay una ermita en el término</b>, y hay dada orden de retener 200 reales al año para arreglarla. La carta no dice de qué advocación es.',
      '<b>1768: ciento catorce almas, contadas por el cura.</b> Al escribir «Parroquia de San Juan» de su mano, la advocación retrocede <b>setenta y nueve años</b> respecto a Madoz.',
      'El silencio documental se acorta: ya no va de 1170 a 1551, sino <b>de 1170 a 1526</b>. Y la escala lo calcula sola a partir de los datos, en vez de llevarlo escrito a mano.'
    ],
    p: 'De 33 entradas a <b>39</b>. Quedan dos tandas: el resto del pleito del Nuncio con el bloque eclesiástico, y la cola administrativa de 1834 a 2003.' },
  { v: '0.9', f: '25 de septiembre de 2026', t: 'Fuera el raíl del teléfono',
    c: [
      '<b>Se retira la barra de desplazamiento lateral</b> del teléfono —la línea del tiempo que hacía de scroll y se arrastraba—. La lámina recupera los 28 píxeles que tenía reservados a la derecha.',
      'No se oculta: se quita del documento. Era un control con foco y arrastre, y un mando invisible que sigue escuchando estorba más que la barra.',
      '<b>El código se queda entero</b> detrás de un interruptor. Con una línea vuelven la escala, las marcas, el arrastre y el rótulo del año.'
    ],
    p: 'Sigue pendiente lo mismo: incorporar a la línea <b>1073, 1526, 1591, 1694, 1756 y 1768</b>.' },
  { v: '0.8', f: '25 de septiembre de 2026', t: 'Cada entrada, con su tratamiento',
    c: [
      '<b>Las siete entradas con imagen tienen ya tratamiento elegido</b>, una por una: el III milenio, 1006 y 1752 a portada; 1876 a viñeta; los siglos IV–V, XI–XIII y 1993 en caja.',
      '<b>Cuando la imagen pasa a ser el fondo pierde su marco, así que su pie baja al texto de la lámina.</b> La referencia —la signatura del Catastro, el número de figura, la leyenda del sello— no se pierde en ningún tratamiento.',
      'Un facsímil es papel claro y no un dibujo en penumbra, así que <b>lleva más velo</b> para que el texto se lea encima; y en viñeta el pie se queda en tinta normal, que sobre papel claro la tinta clara no se ve.',
      'En viñeta <b>el texto se para antes de llegar al dibujo</b>: lo que no quepa abre lámina nueva en lugar de escribirse encima.'
    ],
    p: 'Sigue pendiente lo mismo: incorporar a la línea <b>1073, 1526, 1591, 1694, 1756 y 1768</b>.' },
  { v: '0.7', f: '25 de septiembre de 2026', t: 'La ilustración entra en la lámina',
    c: [
      '<b>Una ilustración no es un facsímil, y ahora los datos lo distinguen.</b> Las imágenes van en dos campos: uno para la reproducción documental y otro para la ilustración interpretada. Cualquier lámina que lleve la segunda <b>escribe «ilustración interpretada» en el pie</b>, la vea quien la vea: en un feed una lámina se comparte suelta.',
      '<b>1006 estrena ilustración</b>: la comunidad de hermanos y hermanas ante la iglesia de San Salvador. Ocupa la lámina entera, con el texto escrito encima, como la cubierta de un libro.',
      '<b>Cuatro maneras de integrar un dibujo</b>, elegibles entrada por entrada: en caja, a sangre por abajo, de fondo rebajada, o de portada. Quedan las cuatro disponibles aunque sólo se use una.',
      'El grano del papel cae también <b>sobre el dibujo</b>, no sólo alrededor: es lo que hace que parezca impreso en la hoja y no pegado encima.',
      'Las seis imágenes que ya había —dibujos de excavación, una planta, una página del Catastro y la impronta del sello— <b>siguen en caja</b>: un documento no se recorta a sangre ni se escribe encima.'
    ],
    p: 'Sigue pendiente lo mismo: incorporar a la línea <b>1073, 1526, 1591, 1694, 1756 y 1768</b>.' },
  { v: '0.6', f: '25 de septiembre de 2026', t: 'Marcas más finas en el raíl',
    c: [
      '<b>Las marcas de la línea de desplazamiento del teléfono se acortan</b>: cruzaban el raíl casi de lado a lado y pesaban más que el propio trazo. Ahora ocupan nueve de los veintiocho de ancho, lo justo para verse sin taparlo.'
    ],
    p: 'Sigue pendiente lo mismo: incorporar a la línea <b>1073, 1526, 1591, 1694, 1756 y 1768</b>.' },
  { v: '0.5', f: '25 de septiembre de 2026', t: 'Una entrada, una lámina',
    c: [
      '<b>Las láminas se colapsan en una sola.</b> Antes cada campo —texto, cita, imagen, cautela, fuente— se llevaba una pantalla entera, aunque fuese una línea: había entradas con cuatro láminas casi vacías. Ahora todo va junto mientras quepa, y <b>sólo lo que desborda</b> abre la lámina siguiente.',
      'El texto se parte por frases, y <b>sin romper los realces</b>: el corte nunca cae dentro de una palabra marcada.',
      '<b>El sello de grado de prueba sale una sola vez</b>, arriba a la derecha de la primera lámina. Antes se repetía en cada lámina y otra vez junto a la fuente.',
      'La fuente completa va dentro de la lámina, así que <b>el pie deja de repetirla</b> ahí donde ya está.',
      'El reparto se rehace también <b>al cambiar de filtro</b>: una entrada oculta no se puede medir.'
    ],
    p: 'Sigue pendiente lo mismo: incorporar a la línea <b>1073, 1526, 1591, 1694, 1756 y 1768</b>.' },
  { v: '0.4', f: '25 de septiembre de 2026', t: 'La lámina lleva ya la entrada entera',
    c: [
      '⚠️ <b>Corregido: el menú se quedaba abierto.</b> Una regla de estilo le ganaba al atributo que lo oculta, así que la lista se veía sin haberla pulsado. Ahora sólo se despliega al pulsar las tres rayas.',
      '<b>La primera lámina de cada entrada trae ya la fecha, el título y el texto</b>, que antes iban en dos láminas distintas.',
      '<b>Al carrusel pasa sólo lo que no cabe</b>: la cita, la imagen, la cautela y la fuente. Y si el texto no entra en la pantalla, se parte por frases y continúa en la lámina siguiente, marcada con «sigue».',
      'El reparto se mide sobre la pantalla real, así que se rehace al girar el teléfono y <b>al terminar de cargar la tipografía</b>, que cambia las medidas.'
    ],
    p: 'Sigue pendiente lo mismo: incorporar a la línea <b>1073, 1526, 1591, 1694, 1756 y 1768</b>.' },
  { v: '0.3', f: '25 de septiembre de 2026', t: 'En el teléfono, la portada es la primera lámina',
    c: [
      '<b>El feed ocupa ya la pantalla entera en el teléfono, y empieza en la portada.</b> La primera lámina es el nombre del pueblo con los filtros de prueba debajo; deslizando al lado está la presentación. En cuanto se desliza hacia arriba, la pantalla es sólo la línea.',
      '<b>El menú queda en tres rayas</b>, sin la palabra «Secciones». El texto sigue ahí para quien use lector de pantalla.',
      '<b>Fuera el botón de versión</b> de la portada. El registro de cambios sigue en el menú.',
      '<b>Fuera la leyenda</b> de cómo leer las marcas, de momento. Los marcadores siguen en cada entrada, con su nombre escrito al lado.',
      '<b>Las fuentes y créditos pasan al menú</b> como una sección más: con el feed a pantalla completa, al pie ya no se llegaba desde el teléfono.'
    ],
    p: 'Sigue pendiente lo mismo: incorporar a la línea <b>1073, 1526, 1591, 1694, 1756 y 1768</b>.' },
  { v: '0.2', f: '25 de septiembre de 2026', t: 'La línea temporal, sola; el resto, a un clic',
    c: [
      '<b>La página principal es ahora sólo la línea temporal.</b> El término, la gente, la materia para el emblema, lo que falta y este mismo registro <b>ya no se recorren al bajar</b>: hay que pedirlos.',
      '<b>Menú fijo en la esquina superior</b>, siempre a mano. En teléfono se queda arriba en la primera pantalla y <b>se retira en cuanto se empieza a recorrer el feed</b>, para no tapar la lectura; vuelve al subir del todo.',
      'Cada sección secundaria se abre como una <b>vista propia</b>, con su enlace de vuelta. La dirección del navegador la recuerda, así que se puede enlazar y el botón «atrás» funciona.',
      '<b>Fuera la ficha de datos de la portada</b> —provincia, municipio, diócesis, superficie y habitantes—: eran cinco cifras compitiendo con la entrada al relato.'
    ],
    p: 'Sigue pendiente lo mismo que en la 0.1: incorporar a la línea <b>1073, 1526, 1591, 1694, 1756 y 1768</b>.' },
  { v: '0.1', f: '25 de septiembre de 2026', t: 'Una sola página, con el estilo decidido',
    c: [
      '<b>El estilo aprobado, aplicado a la web entera</b>: papel antiguo, una sola tipografía —EB Garamond en cinco registros— y las tintas con código, donde los tres rojos significan cosas distintas y el añil y el oliva marcan la materia.',
      '<b>Todo en una sola página.</b> Se han fundido la portada, la línea temporal, el prototipo de estilo y la prueba de lectura en móvil, que antes eran cuatro direcciones distintas.',
      '<b>La línea temporal se lee como un feed en el teléfono</b>: una entrada por pantalla, lo accesorio en carrusel lateral y la propia línea del tiempo haciendo de barra de desplazamiento. En pantalla grande sigue siendo un documento.',
      '<b>El sello de prueba y la fuente viajan en cada lámina</b> del carrusel, no sólo en la portada de la entrada: una lámina suelta no puede circular sin decir cuánto está probado.',
      '<b>El trazo rojo se construye al bajar</b>, y en los silencios documentales va punteado.',
      'Se estrena este apartado de versiones y el sello de versión en la portada.'
    ],
    p: 'Contenido a 22 de septiembre de 2026: <b>faltan por incorporar</b> 1073, 1526, 1591, 1694, 1756 y 1768, que la investigación ya tiene y la línea todavía no.' }
];
