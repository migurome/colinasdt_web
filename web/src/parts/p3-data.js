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
  { id: 3, t: 'Lugar del conde de Benavente', span: '1551 – 1826' },
  { id: 4, t: 'El ayuntamiento', span: '1833 – 1970' },
  { id: 5, t: 'La pedanía', span: '1970 – hoy' }
];

const EVENTOS = [
  { id: 'bodegas', era: 1, y: 'III milenio a.C.', s: -2250, n: 'visto',
    t: 'Alguien cava silos donde hoy están las bodegas',
    p: 'Al norte del pueblo, al pie del promontorio en el que están horadadas las bodegas —y que da nombre al pago—, cuatro hoyos-silo de la Edad del Cobre, de metro y medio de hondo y casi dos metros de diámetro, y una gran zanja de diez metros de ancho. La cerámica es lisa y de cocción reductora, con un motivo que los excavadores dan por inédito en la zona: pastillas en relieve.',
    nota: 'La zanja no está explicada: los autores barajan vertedero, drenaje de los silos, foso defensivo o el cauce fosilizado de un arroyo. Y la fecha viene por comparación con el yacimiento vecino de Los Bajos, no de una datación propia.',
    img: { src: 'img/bodegas-fig12-ceramica.jpg', w: 900, h: 1204, alt: 'Dibujos arqueológicos de cuencos y vasos calcolíticos lisos, con perfiles y numeración de inventario.', cap: 'Cerámica lisa y decorada de «Las Bodegas» (fig. 12). Piezas 93/24.' },
    f: 'Pérez Rodríguez et al., «Algunos aspectos de la Edad del Cobre en el Valle medio del río Tera», Anuario 1993, IEZ «Florián de Ocampo», pp. 49-78' },

  { id: 'petavonium', era: 1, y: '19 a.C.', s: -19, n: 'contexto',
    t: 'Petavonium, a quince kilómetros',
    p: 'Campamento de la Legio X Gemina en Rosinos de Vidriales, y después del Ala II Flavia, hasta mediados del siglo III. No es Colinas: es el mundo romano que la rodea, y así hay que contarlo.',
    f: 'Contexto regional · inventario, §9' },

  { id: 'tardorromano', era: 1, y: 's. IV–V', s: 400, n: 'visto',
    t: 'Primera ocupación en San Juan-El Valle',
    p: 'Sigillata hispánica tardía, cerámica gris estampillada con rosetas, un cubilete del alfar de Melgar de Tera y vidrio tallado. A 200 metros, dos tumbas romanas cubiertas con tégulas.',
    img: { src: 'img/excavacion-fig3-tardorromano.jpg', w: 900, h: 803, alt: 'Dibujos de cerámica y vidrio tardorromanos hallados en el yacimiento.', cap: 'Materiales tardorromanos del yacimiento (fig. 3 del artículo de 1993).' },
    f: 'Martín Carbajo et al., Anuario 1993, IEZ «Florián de Ocampo», pp. 37-48' },

  { id: 'd962', era: 2, y: '962', d: '1 de marzo', s: 962, n: 'cotejar',
    t: 'Una viña en «villa Kastro Ferronio»',
    p: 'Rauper y su mujer Mansuara donan a Nuño Sarracíniz y a su mujer Gudigeva una viña que habían comprado a Donelo, «cerca del riachuelo Almucera». Linda con la viña de Iahia, con el término de Amor y con el de Fortes, y mide una aranzada. Es la mención más antigua del lugar, y todavía no hay monasterio: es un trato entre particulares.',
    nota: 'Que la viña esté junto al Almucera es lo que descarta Villaferrueña, que está junto al Eria. La confusión venía de ahí.',
    f: 'GONZÁLEZ RODRÍGUEZ, «Castroferrol, un enclave monástico altomedieval en el valle del Tera», Brigecio 10 (2000), apéndice documental · ed. Sáez y Sáez, Col. doc. de la Catedral de León, II, doc. 353' },

  { id: 'd963', era: 2, y: '963', s: 963, n: 'cotejar',
    t: 'Adrico y Faquilo donan cuanto tienen en Castroferrol',
    p: 'Con sus hijos, donan a la catedral de Astorga toda su heredad en Castroferrol: la mitad en vida, el resto al morir.',
    nota: 'De este diploma no se conserva el texto, sólo un breve extracto en el Tumbo Negro. Sigue sin edición crítica.',
    f: 'BNE, ms. 4357, Tumbo Negro de Astorga, fol. 51v · localizado por González Rodríguez, Brigecio 10 (2000), nota 9' },

  { id: 'bermudo', era: 2, y: '985–999', s: 992, n: 'cotejar',
    t: 'Nace un monasterio dúplice',
    p: 'Monjes y monjas bajo un solo gobierno, en el reinado de Bermudo II. La familia fundadora había recibido la villa del rey a cambio de unas tierras que le confiscó en el Bierzo.',
    f: 'Síntesis de la bibliografía sobre el documento de 1015' },

  { id: 'd1006', era: 2, y: '1006', d: '26 de junio', s: 1006, n: 'cotejar',
    t: 'La abadesa Bendicta y la iglesia de San Salvador',
    q: '«patronus nostri Sancti Salvatoris… in cuius honore dedicata est ecclesia»',
    p: 'Oma Iuve, su hijo Veila y la mujer de éste, Gontrode, entregan cuanto tienen al monasterio de Castroferrol, «junto a las aguas corrientes o río Teira» y «fundado bajo la ciudad de Astorga». El latín dice dos cosas seguidas: que la iglesia está dedicada a San Salvador, y que allí hay «yugo de hermanos y hermanas» bajo la abadesa Bendicta. Entre lo donado, junto a molinos y pesqueras, hay linares.',
    nota: 'La fecha es una enmienda, no una lectura. La copia de 1613 trae una era que daría 976, imposible con el rey y el obispo que el propio texto nombra; se adopta 1006, que es la que da un extracto de la Biblioteca Nacional.',
    f: 'GONZÁLEZ RODRÍGUEZ, «Castroferrol, un enclave monástico altomedieval en el valle del Tera», Brigecio 10 (2000), apéndice documental · AHN, ms. 1195B, f. 688r-v · ed. Cavero Domínguez y Martín López, Col. doc. de la catedral de Astorga, I, doc. 200' },

  { id: 'd1015', era: 2, y: '1015', d: '22 de enero', s: 1015, n: 'cotejar',
    t: 'Nueve nombres, y la fecha exacta',
    q: '«Frater Joanis, Veila, Absub, Evite Monde, Muza, Gundisaluo, Hauiue, Nazarus, Amorum»',
    p: 'Son los testigos que el escriba separa de los demás con cuatro palabras: «id sit habitantes de Castroferronio», esto es, habitantes de Castroferrol. Nueve personas, en este término, el 22 de enero de 1015. Y la mitad de esos nombres son árabes, conviviendo con otros godos. El documento por el que aparecen es la donación que hacen María y sus hijos Galindo y Juan Ciprianiz del lugar «edificado en honor de San Miguel Arcángel y Santa María siempre virgen», en la villa «por donde discurre el riachuelo Tera y de la otra parte el Almucera», con su iglesia, viñas, prados, aguas y cauces de molino, y un ajuar de cruz, caja, corona, cáliz, patena, dalmáticas y libros.',
    nota: 'Hasta hoy, el vecino más antiguo del término que conocíamos por su nombre era Martín Alonso, en 1551. Estos son quinientos treinta y seis años anteriores. Pero son habitantes de Castroferrol, el despoblado, no de Colinas: el pueblo actual todavía no existe en las fuentes. Y la fórmula «de la otra parte» describe una franja entre dos cursos de agua, no una confluencia: los dos no se juntan hasta siete kilómetros aguas abajo.',
    f: 'GONZÁLEZ RODRÍGUEZ, «Castroferrol, un enclave monástico altomedieval en el valle del Tera», Brigecio 10 (2000), apéndice documental · AHN, ms. 1195B, ff. 686v-687r · ed. Cavero Domínguez y Martín López, op. cit., doc. 214' },

  { id: 'd1060', era: 2, y: '1060', s: 1060, n: 'cotejar',
    t: 'Castroferrol en las particiones de Diego Muñoz',
    p: 'El lugar figura entre las villas y heredades que caen en manos de Diego Muñoz al dividirse las de Osorio Fernández y doña Visclávara.',
    f: 'ed. Ruiz Asencio, Col. doc. de la catedral de León, vol. IV (1032-1109), doc. 1121 · localizado por González Rodríguez, Brigecio 10 (2000), nota 24' },

  { id: 'd1129', era: 2, y: '1129', s: 1129, n: 'cotejar',
    t: 'Una vereda que baja de Castroferrol',
    q: '«per illam veredam quae discurrit de Castro Ferronio, et ad Carvalio… et tornat inde per ipsam veredam quae discurrit ad Villa Aceif, et deinde per terminum de Axarifes»',
    p: 'Castro Ferronnio es uno de los mojones del coto del monasterio de Santa Marta de Tera, que Alfonso VII confirma «según los fijó su bisabuelo Fernando I». Es un deslinde, y por tanto geografía: nombra la vereda que baja del enclave, un carbajal, una carral, San Pelayo de Armentario Fláiniz, la carral de Comdesa, Villa Aceif y el término de Axarifes.',
    nota: 'Una «vereda» es una vía pecuaria. Ésta sale de Castroferrol en 1129, y es el testimonio más antiguo que tiene el proyecto de un camino de ganado en el término. Los nombres de los mojones vuelven a sonar a árabe: Aceif, Axarifes.',
    f: 'ed. Quintana Prieto, Santa Marta de Tera, Zamora, 1991, doc. XI · texto latino en la nota 25 de González Rodríguez, Brigecio 10 (2000)' },

  { id: 'd1170', era: 2, y: '1170', s: 1170, n: 'cotejar',
    t: 'Fernando II revalida esos límites',
    p: 'Un privilegio de confirmación repite el coto. Para entonces el monasterio ya se ha incorporado a los bienes de la mitra de Astorga, y eso debió precipitar su final como comunidad.',
    f: 'ed. Quintana Prieto, Santa Marta de Tera, Zamora, 1991, doc. XII · localizado por González Rodríguez, Brigecio 10 (2000), nota 26' },

  { id: 'sala', era: 2, y: 'ss. XI–XIII', s: 1175, n: 'visto',
    t: 'La sala que ardió',
    p: 'Una estancia de 5 × 8 metros, de mampostería en seco con contrafuertes y suelo de arcilla roja, cubierta de teja curva sobre muros de tapial. La sella un nivel de incendio de cinco centímetros de carbones. La cerámica de retícula incisa la fecha en el siglo XI.',
    nota: 'Los excavadores sólo dicen que «pudiera estar relacionada con un tipo de edificación religiosa, quizás monasterio o convento». Que sea Castroferrol lo propone la bibliografía; la excavación no lo prueba.',
    img: { src: 'img/excavacion-fig1-planta.jpg', w: 900, h: 1076, alt: 'Planta arqueológica de la estructura rectangular con sus muros y contrafuertes.', cap: 'Planta de la estructura rectangular, unidades A y B (fig. 1).' },
    f: 'Martín Carbajo et al., Anuario 1993, pp. 37-48' },

  { sil: true, era: 2, y: '1170 → 1551',
    p: 'Casi cuatro siglos sin un solo documento localizado. No sabemos cuándo se abandonó el monasterio ni cuándo nace el pueblo de Colinas.' },

  { id: 'p1551', era: 3, y: '1551', s: 1551, n: 'sinleer',
    t: 'Martín Alonso, vecino de Colinas, va a pleito',
    p: 'Contra Pedro Alonso de Soguillo, vecino de Quintanilla de Urz. Es el vecino de Colinas más antiguo cuyo nombre conocemos.',
    f: 'Real Chancillería de Valladolid, PL Civiles, Taboada (OLV), caja 726, 1' },

  { id: 'p1600', era: 3, y: '1600–1608', s: 1604, n: 'sinleer',
    t: 'Concejo contra concejo: Colinas y Vecilla',
    p: 'Los pleitos entre pueblos vecinos suelen describir mojones y aprovechamientos, a veces con planos. Es la fuente más prometedora para el término antiguo, y está por pedir.',
    f: 'Real Chancillería de Valladolid, PL Civiles, Alonso Rodríguez (OLV), caja 368, 1' },

  { id: 'c1613', era: 3, y: '1613', s: 1613, n: 'cotejar',
    t: 'Chirivoga copia el Tumbo Negro, y mueve el monasterio de sitio',
    p: 'Felipe III envía al deán de Salamanca a averiguar qué iglesias del obispado de Astorga son del Real Patronato. Su equipo copia el Tumbo Negro —hoy es el único testimonio de los diplomas de 1006 y 1015— y, al encontrarse con un monasterio de Castroferrol del que ya nadie se acordaba, se lo adjudica a Villaferrueña, un pueblo de nombre parecido y no lejos del Tera. Llegan a rebautizarlo «Castroferrueña». Su iglesia pasa al patronato real como heredera del monasterio.',
    nota: 'El autor del artículo de referencia lo llama «una tergiversación absolutamente interesada». No fue un descuido: era el modo de agregar la parroquia a las rentas de la Corona. El error siguió en pie en la bibliografía hasta el año 2000.',
    f: 'AHN, ms. 1195B · González Rodríguez, Brigecio 10 (2000)' },

  { id: 'catastro', era: 3, y: '1752', d: '9 de noviembre', s: 1752, n: 'visto',
    t: 'El Catastro de Ensenada: el primer retrato completo',
    p: '27 vecinos, el cura incluido, y 26 casas, diez de ellas inhabitables. Un término de 2.372 fanegas, un tercio de monte. El concejo tiene molino harinero y casa de fragua; hay un solo herrero, Santiago Zerrón. El río Tera es del conde de Benavente, y le rinde 200 reales al año.',
    q: '«no pueden dar razón en virtud de qué privilegio goza estos derechos»',
    nota: 'Así responden los vecinos (28.ª) cuando se les pregunta por el título de lo que cobra el conde. Nadie en el pueblo sabía por qué pagaba.',
    img: { src: 'img/catastro-1752-f372.jpg', w: 720, h: 1054, scan: true, alt: 'Página manuscrita del Catastro de Ensenada de Colinas de Trasmonte, en letra caligráfica del siglo XVIII.', cap: 'Final de la respuesta 3.ª, con los lindes del término, e inicio de la 4.ª (AGS, libro 654, imagen 0372).' },
    f: 'AGS, DGR, 1.ª Remesa, Catastro de Ensenada, Respuestas Generales, libro 654, ff. 368-407 · ed. CEB «Ledo del Pozo», pp. 238-243' },

  { id: 'floridablanca', era: 3, y: '1787', s: 1787, n: 'visto',
    t: 'Ciento cincuenta y seis personas, y ningún hidalgo',
    p: 'El censo de Floridablanca cuenta el pueblo uno a uno: 156 habitantes, 90 varones y 66 mujeres. Los clasifica por oficio y deja dieciocho casillas vacías: ni escribano, ni abogado, ni comerciante, ni estudiante, ni sacristán, ni un solo hidalgo. Hay un cura, 16 labradores, 14 jornaleros, 6 artesanos y 8 criados. Casi tantos jornaleros como labradores: la mitad de los hombres con oficio no trabajaba tierra propia.',
    nota: 'El desglose por tramos de edad dentro de cada estado civil no es verosímil —ningún soltero entre 25 y 40 años y diecisiete entre 40 y 50—: el impreso se rellenó por bloques. Los totales, en cambio, cuadran los tres.',
    f: 'Censo de 1787 «Floridablanca», ed. INE (1989), t. 3-B, prov. de Zamora, pueblo nº 103, pp. 2.858, 2.887 y 2.932' },

  { id: 'incendio1814', era: 3, y: '1814', s: 1814, n: 'cotejar',
    t: 'Arde el archivo de la catedral de Astorga',
    p: 'Con él se pierde el Tumbo Negro, el cartulario que copiaba los diplomas de Castroferrol. Desde entonces, lo que sabemos del monasterio depende de una copia del siglo XVII de un libro perdido.',
    f: 'Bibliografía sobre la transmisión del corpus · inventario, §8.1' },

  { id: 'minano', era: 3, y: '1826', s: 1826, n: 'visto',
    t: 'Un pueblo «cercado de colinas»',
    p: 'Miñano lo llama Colinas a secas, sin «de Trasmonte»: aldea de señorío con alcalde pedáneo, provincia de Valladolid, partido de Benavente, obispado de Astorga. 55 vecinos, 226 habitantes. Una parroquia y un pósito —el granero del común, que no aparece en ninguna otra fuente—. Con el molino y la fragua de 1752, son tres las casas que el concejo sostenía por su cuenta.',
    q: '«Sit. al S. del valle de Vidriales, á la orilla del rio Tera, 2 leguas al S. O. de la villa de Benavente, cercado de colinas»',
    nota: 'Los vecindarios de Miñano se tienen por menos fiables que los de Madoz, y sus 226 habitantes siguen sin cotejar. El obispado de Astorga, en cambio, queda dicho por escrito veintiún años antes que Madoz.',
    f: 'Miñano, Diccionario geográfico-estadístico de España y Portugal, t. III, Madrid, 1826, p. 142 (ejemplar digitalizado de la Universidad de Granada)' },

  { id: 'provincia', era: 4, y: '1833', d: '30 de noviembre', s: 1833, n: 'contexto',
    t: 'Provincia de Zamora',
    p: 'La nueva división territorial adscribe Colinas a Zamora, y en 1834 al partido judicial de Benavente. En 1752 se había catastrado bajo Valladolid.',
    f: 'Real Decreto de 30 de noviembre de 1833' },

  { id: 'madoz', era: 4, y: '1847', s: 1847, n: 'visto',
    t: 'Un monte que se llama como el pueblo',
    q: '«Hay un monte encinal con el mismo nombre del pueblo, que forma con otros una cordillera de 2 horas hasta San Juanico»',
    p: 'Madoz describe una aldea con ayuntamiento propio, en una ladera orientada al sur, con 35 casas en 6 calles, iglesia de San Juan Bautista, cementerio y buenas aguas. Produce trigo y lino, cría ganado lanar y pesca barbos. Y dice que en su término están los despoblados de Castroferrol y Pobladura de Trasmonte.',
    nota: 'La frase del monte es el apoyo más firme que tiene el topónimo: no eran unas colinas cualesquiera, había un encinar llamado «Colinas», en fila con otros cerros a lo largo de unos ocho o diez kilómetros. Lo que no dice es cuál nombró a cuál.',
    f: 'Madoz, Diccionario geográfico-estadístico-histórico, t. VI, Madrid, 1847, p. 521 · facsímil leído a resolución completa (Internet Archive)' },

  { id: 'censo1857', era: 4, y: '1857', s: 1857, n: 'cotejar',
    t: 'Primer censo moderno: 386 habitantes',
    p: 'Quince años antes se contaban 132. Nadie triplica su población en ese tiempo: o la cifra de 1842 se quedaba corta, o el municipio cambió de término.',
    f: 'Censo de población (INE), serie pendiente de cotejo' },

  { id: 'sello', era: 4, y: '1876', d: 'diciembre', s: 1876, n: 'visto',
    t: 'El único sello',
    q: '«va estampado el único que existe y ha existido en este municipio»',
    p: 'El alcalde remite al Gobernador Civil el sello del Ayuntamiento Constitucional. Lleva las armas reales de España, y el archivo municipal no guarda noticia de ningún otro. Colinas nunca tuvo escudo propio: cualquier emblema será el primero.',
    img: { src: 'img/sello-1876.png', w: 560, h: 642, alt: 'Impronta oval del sello con la leyenda Ayuntamiento Constitucional de Colinas de Trasmonte y las armas reales bajo corona.', cap: 'Impronta del sello, ampliada. Leyenda: AYUNTAM.TO CONSTIT.L DE COLINAS DE TRASMONTE.' },
    f: 'AHN, SIGIL-TINTA_ZAMORA,20,N.31' },

  { id: 'max1950', era: 4, y: '1950', s: 1950, n: 'cotejar',
    t: 'Máximo histórico: 625 habitantes',
    p: 'Un siglo de crecimiento casi sin pausa. Desde aquí la población sólo baja.',
    f: 'Censo de población (INE), serie pendiente de cotejo' },

  { id: 'decreto1970', era: 4, y: '1970', d: '8 de octubre', s: 1970, n: 'visto',
    t: 'Concentración parcelaria',
    p: 'El Decreto 3119/1970 declara de utilidad pública la concentración de Colinas: 1.043 hectáreas, 405 propietarios y 5.560 parcelas, casi catorce por dueño.',
    q: '«cuyo perímetro será, en principio, el del término municipal del mismo nombre»',
    f: 'BOE núm. 257, de 27 de octubre de 1970, p. 17434' },

  { id: 'fin-municipio', era: 5, y: '1972', d: '10 de febrero', s: 1972, n: 'visto',
    t: 'El pueblo pide dejar de ser municipio',
    q: '«en atención a la escasez de población, dificultad para mantener los servicios mínimos obligatorios y deseo de mejorarlos»',
    p: 'El Ayuntamiento de Colinas acuerda, con quórum legal, solicitar su incorporación a Quiruelas de Vidriales; Quiruelas la acepta y el Consejo de Ministros la aprueba. No hubo «reclamación alguna» en el plazo de información pública. El concejo que en 1752 tenía molino y fragua propios se disuelve a petición suya.',
    f: 'Decreto 354/1972, de 10 de febrero · BOE núm. 45, de 22 de febrero de 1972, pp. 3172-3173 (BOE-A-1972-33978)' },

  { id: 'plano1975', era: 5, y: '1975', d: 'enero', s: 1975, n: 'visto',
    t: 'El término, dibujado',
    p: 'Los seis planos del IRYDA dibujan el término finca a finca. Rotulan los cinco confrontantes —Quiruelas de Vidriales, Manganeses de la Polvorosa, Santa Cristina de la Polvorosa, Vecilla de Trasmonte y Aguilar de Tera— y, con ellos, los nombres de los pagos: El Valle, Vallondo, El Pendón, Las Tapias, Los Llanos, Las Porqueras. Es toponimia que no recoge ninguna otra fuente.',
    link: { href: '#termino', t: 'Ver el plano y los lindes' },
    f: 'IRYDA, plano general de la concentración parcelaria, I-75, A. Figal · Junta de Castilla y León' },

  { id: 'cecilia', era: 5, y: '1976', d: '2 de agosto', s: 1976, n: 'cotejar',
    t: 'Muere Cecilia',
    p: 'La cantautora Evangelina Sobredo Galanes y el batería Carlos de la Iglesia mueren de madrugada en la carretera que cruza el casco de Colinas, cuando su coche choca con un carro de bueyes sin luces. Es el hecho por el que se conoce el nombre del pueblo fuera de la comarca. Se cuenta aquí; no es un símbolo.',
    nota: 'Las crónicas dicen N-525; los planos de 1977 rotulan esa carretera «C-620 de Benavente a Mombuey», que es el mismo itinerario de la N-525 de hoy. Casi seguro es la misma vía renumerada, pero no está comprobado cuándo cambió de nombre.',
    f: 'Inventario, §11 · pendiente de citar por la prensa de la época' },

  { id: 'acuerdo1977', era: 5, y: '1977', d: '1 de marzo', s: 1977, n: 'visto',
    t: 'De 5.560 parcelas a 993 fincas',
    p: 'Se aprueba el acuerdo de concentración. Termina el paisaje agrario que describía el Catastro.',
    f: 'Junta de Castilla y León, ficha de la concentración parcelaria de Colinas de Trasmonte' },

  { id: 'excavacion', era: 5, y: '1993', d: '5–29 de julio', s: 1993, n: 'visto',
    t: 'Las zanjas del regadío destapan San Juan-El Valle',
    p: 'Excavación de urgencia al oeste del pueblo, camino de Quiruelas, en el paraje que el plano de 1977 rotula «El Valle». La tradición oral lo llamaba «el Convento de San Juan»; el nombre de Castroferrol se había perdido.',
    img: { src: 'img/excavacion-fig4-reticula.jpg', w: 900, h: 868, alt: 'Dibujos de ollas plenomedievales con estriado horizontal y retícula incisa.', cap: 'Cerámica plenomedieval con retícula incisa (fig. 4).' },
    f: 'Martín Carbajo et al., Anuario 1993, pp. 37-48 · gabinete STRATO' },

  { id: 'a52', era: 5, y: 'Fin. s. XX', s: 1998, n: 'interp',
    t: 'La autovía se lleva el tráfico',
    p: 'Con la A-52, la N-525 se vacía y cierran gasolineras, bares y comercios. Pero la autovía no vació el pueblo: cuando llega, Colinas llevaba cuarenta años perdiendo gente. Acelera algo que ya venía de lejos.',
    f: 'Lectura del proyecto sobre la serie de población · fecha de apertura por precisar' },

  { id: 'p2024', era: 5, y: '2024', s: 2024, n: 'cotejar',
    t: '222 habitantes',
    p: 'Un 64 % menos que en 1950.',
    f: 'Padrón municipal (INE), pendiente de cotejo' },

  { id: 'proyecto', era: 5, y: '2026', d: 'septiembre', s: 2026, n: 'propuesto',
    t: 'Recuperar el nombre, fundar un emblema',
    p: 'Este proyecto propone devolver Castroferrol a la memoria del pueblo y construir, por primera vez, unos colores y un emblema propios a partir de lo documentado.',
    link: { href: '#emblema', t: 'Ver la materia prima' },
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
   VERSIONES_VISIBLE — ponlo en false y el apartado «Versiones» desaparece
                       de la web (también su enlace en el índice). El registro
                       sigue en el repositorio, en CHANGELOG.md.
   VERSIONES    — de la más nueva a la más antigua.                        */

const VERSION = '0.3';
const VERSIONES_VISIBLE = true;

const VERSIONES = [
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
