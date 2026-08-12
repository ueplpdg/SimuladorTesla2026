// Conocimientos Generales — componente 4 del examen USECIPOL.
// Subtemas oficiales: Geografía, Historia, Ciencia y Naturaleza, Arte y Cultura, Literatura.
window.STUDY_BANK_GENERALES = {
  topics: [{
    key: "generales", title: "Conocimientos Generales", color: "#132a44",
    description: "Geografía, historia, ciencia y naturaleza, arte y mitología, literatura — contexto nacional e internacional.",
    problems: [

      // ---------- GEOGRAFÍA ----------
      {
        title: "Geografía: río más largo del mundo",
        q: "¿Cuál es considerado el río más largo del mundo?",
        options: ["Río Nilo", "Río Amazonas", "Río Misisipi", "Río Yangtsé"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Los dos candidatos históricos al título son el Nilo (África) y el Amazonas (Sudamérica)." },
          { t: "plantea", label: "Plantea", text: "Durante años se atribuyó el título al Nilo, pero mediciones modernas del nacimiento del Amazonas en Perú cambiaron el criterio." },
          { t: "resuelve", label: "Desarrolla", text: "Con esas mediciones, el Amazonas alcanza aproximadamente 6.992 km, superando al Nilo. Además es, sin discusión, el más caudaloso del planeta." },
          { t: "resultado", label: "Resultado", text: "El río Amazonas." }
        ],
        quick: ["Amazonas = el más largo Y el más caudaloso (según mediciones actuales). El Nilo es el segundo."]
      },
      {
        title: "Geografía: capital de Australia",
        q: "¿Cuál es la capital de Australia?",
        options: ["Sídney", "Melbourne", "Canberra", "Brisbane"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "Sídney y Melbourne son las ciudades más grandes y conocidas de Australia." },
          { t: "plantea", label: "Plantea", text: "Cuidado: la ciudad más grande NO siempre es la capital. Es una trampa clásica de examen." },
          { t: "resuelve", label: "Desarrolla", text: "Canberra fue construida específicamente como capital, para resolver la rivalidad entre Sídney y Melbourne." },
          { t: "resultado", label: "Resultado", text: "Canberra." }
        ],
        quick: ["Capitales que NO son la ciudad más grande: Australia→Canberra, EE.UU.→Washington D.C., Brasil→Brasilia, Turquía→Ankara."]
      },
      {
        title: "Geografía: continente más grande",
        q: "¿Cuál es el continente más extenso del mundo?",
        options: ["África", "América", "Asia", "Europa"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "Se compara la superficie total de los continentes." },
          { t: "plantea", label: "Plantea", text: "Asia concentra además la mayor población mundial y los países más poblados (China e India)." },
          { t: "resuelve", label: "Desarrolla", text: "Asia abarca unos 44,6 millones de km², seguida de África con unos 30,3 millones." },
          { t: "resultado", label: "Resultado", text: "Asia." }
        ],
        quick: ["Orden por superficie: Asia > África > América del Norte > América del Sur > Antártida > Europa > Oceanía."]
      },
      {
        title: "Geografía: el desierto más grande",
        q: "¿Cuál es el desierto cálido más extenso del mundo?",
        options: ["Desierto de Gobi", "Desierto del Sahara", "Desierto de Atacama", "Desierto de Kalahari"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Se pregunta por el desierto CÁLIDO más extenso (la Antártida es técnicamente el desierto más grande, pero es frío)." },
          { t: "plantea", label: "Plantea", text: "El Sahara ocupa gran parte del norte de África." },
          { t: "resuelve", label: "Desarrolla", text: "Se extiende por unos 9 millones de km², atravesando más de diez países africanos." },
          { t: "resultado", label: "Resultado", text: "El Sahara." }
        ],
        quick: ["Sahara = desierto cálido más grande. La Antártida es el desierto más grande en términos absolutos (desierto polar)."]
      },
      {
        title: "Geografía: la cordillera más larga",
        q: "¿Cuál es la cordillera continental más larga del mundo?",
        options: ["Los Himalayas", "Los Alpes", "Los Andes", "Las Montañas Rocosas"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "Se distingue longitud (extensión) de altura (elevación máxima)." },
          { t: "plantea", label: "Plantea", text: "Los Himalayas tienen las montañas más ALTAS, pero no son la cordillera más LARGA." },
          { t: "resuelve", label: "Desarrolla", text: "Los Andes recorren unos 7.000 km a lo largo de la costa oeste de Sudamérica, atravesando siete países, incluido Ecuador." },
          { t: "resultado", label: "Resultado", text: "Los Andes." }
        ],
        quick: ["Andes = la más LARGA. Himalayas = la más ALTA (Everest). No confundas ambas propiedades."]
      },
      {
        title: "Geografía: el océano más extenso",
        q: "¿Cuál es el océano más extenso y profundo del planeta?",
        options: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "Los océanos del mundo: Pacífico, Atlántico, Índico, Antártico y Ártico." },
          { t: "plantea", label: "Plantea", text: "El Pacífico baña las costas de América (incluido Ecuador) y Asia." },
          { t: "resuelve", label: "Desarrolla", text: "Cubre alrededor de un tercio de la superficie terrestre y contiene la Fosa de las Marianas, el punto más profundo conocido." },
          { t: "resultado", label: "Resultado", text: "El océano Pacífico." }
        ],
        quick: ["Pacífico = el más grande y más profundo (Fosa de las Marianas). Ecuador tiene costa en el Pacífico."]
      },
      {
        title: "Geografía: la línea ecuatorial",
        q: "¿Qué característica define a la línea ecuatorial (Ecuador terrestre)?",
        options: ["Divide la Tierra en hemisferio oriental y occidental", "Divide la Tierra en hemisferio norte y sur, en su latitud 0°", "Marca el meridiano de Greenwich", "Señala el Trópico de Cáncer"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "La línea ecuatorial es un paralelo, no un meridiano." },
          { t: "plantea", label: "Plantea", text: "Los paralelos marcan la LATITUD (norte-sur); los meridianos marcan la LONGITUD (este-oeste)." },
          { t: "resuelve", label: "Desarrolla", text: "El Ecuador terrestre es el paralelo de latitud 0°, y divide el planeta en hemisferio norte y hemisferio sur. Da nombre a nuestro país." },
          { t: "resultado", label: "Resultado", text: "Divide la Tierra en hemisferio norte y sur, en su latitud 0°." }
        ],
        quick: ["Ecuador = paralelo de latitud 0° (norte/sur). Greenwich = meridiano de longitud 0° (este/oeste)."]
      },
      {
        title: "Geografía: volcán más alto del Ecuador",
        q: "¿Cuál es la montaña más alta del Ecuador?",
        options: ["Cotopaxi", "Chimborazo", "Cayambe", "Tungurahua"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Ecuador tiene numerosos volcanes en la región Sierra (Avenida de los Volcanes)." },
          { t: "plantea", label: "Plantea", text: "Se pregunta por la mayor altitud sobre el nivel del mar." },
          { t: "resuelve", label: "Desarrolla", text: "El Chimborazo alcanza unos 6.263 m. Además, por el abultamiento ecuatorial de la Tierra, su cumbre es el punto más alejado del centro del planeta." },
          { t: "resultado", label: "Resultado", text: "El Chimborazo." }
        ],
        quick: ["Chimborazo = el más alto del Ecuador y el punto más lejano del centro de la Tierra. Cotopaxi es el segundo más alto."]
      },
      {
        title: "Geografía: fenómeno de El Niño",
        q: "¿Qué caracteriza al fenómeno de El Niño, que afecta la costa ecuatoriana?",
        options: ["El enfriamiento inusual de las aguas del Pacífico", "El calentamiento inusual de las aguas del Pacífico, con lluvias intensas", "Un aumento de la actividad volcánica", "La disminución total de precipitaciones en todo el país"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Fenómeno climático recurrente en el océano Pacífico ecuatorial." },
          { t: "plantea", label: "Plantea", text: "Distingue El Niño (calentamiento) de La Niña (enfriamiento), su fase opuesta." },
          { t: "resuelve", label: "Desarrolla", text: "El calentamiento anómalo del agua provoca lluvias intensas e inundaciones en la costa ecuatoriana y peruana." },
          { t: "resultado", label: "Resultado", text: "El calentamiento inusual de las aguas del Pacífico, con lluvias intensas." }
        ],
        quick: ["El Niño = agua CALIENTE + lluvias/inundaciones. La Niña = agua FRÍA + sequías. Son fases opuestas del mismo ciclo."]
      },
      {
        title: "Geografía: capital de Canadá",
        q: "¿Cuál es la capital de Canadá?",
        options: ["Toronto", "Montreal", "Ottawa", "Vancouver"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "Toronto, Montreal y Vancouver son las ciudades canadienses más conocidas internacionalmente." },
          { t: "plantea", label: "Plantea", text: "Otra vez, la ciudad más grande no es la capital." },
          { t: "resuelve", label: "Desarrolla", text: "Ottawa fue elegida como capital por su posición intermedia entre las zonas anglófona y francófona del país." },
          { t: "resultado", label: "Resultado", text: "Ottawa." }
        ],
        quick: ["Memoriza las capitales 'inesperadas': Canadá→Ottawa, Australia→Canberra, Brasil→Brasilia, Suiza→Berna."]
      },

      // ---------- HISTORIA ----------
      {
        title: "Historia: descubrimiento de América",
        q: "¿En qué año llegó Cristóbal Colón por primera vez a América?",
        options: ["1476", "1492", "1500", "1519"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Expedición financiada por los Reyes Católicos de España." },
          { t: "plantea", label: "Plantea", text: "Es una de las fechas más recurrentes en exámenes de cultura general." },
          { t: "resuelve", label: "Desarrolla", text: "El 12 de octubre de 1492 Colón desembarcó en una isla del Caribe, iniciando el contacto europeo permanente con el continente." },
          { t: "resultado", label: "Resultado", text: "1492." }
        ],
        quick: ["1492 = llegada de Colón + fin de la Reconquista española (toma de Granada). Dos hechos, mismo año."]
      },
      {
        title: "Historia: Primera Guerra Mundial",
        q: "¿En qué período se desarrolló la Primera Guerra Mundial?",
        options: ["1914 – 1918", "1918 – 1922", "1939 – 1945", "1905 – 1910"], correct: 0,
        full: [
          { t: "dato", label: "Datos", text: "Conflicto iniciado tras el asesinato del archiduque Francisco Fernando en Sarajevo." },
          { t: "plantea", label: "Plantea", text: "No confundir con la Segunda Guerra Mundial (1939-1945)." },
          { t: "resuelve", label: "Desarrolla", text: "Se desarrolló entre 1914 y 1918, y terminó con el Tratado de Versalles en 1919." },
          { t: "resultado", label: "Resultado", text: "1914 – 1918." }
        ],
        quick: ["Primera Guerra Mundial: 1914-1918. Segunda: 1939-1945. Memoriza ambos pares juntos."]
      },
      {
        title: "Historia: Revolución Francesa",
        q: "¿Qué acontecimiento marca el inicio simbólico de la Revolución Francesa?",
        options: ["La coronación de Napoleón", "La toma de la Bastilla, el 14 de julio de 1789", "La firma del Tratado de Versalles", "La Noche de San Bartolomé"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "La Bastilla era una fortaleza-prisión símbolo del poder absolutista del rey." },
          { t: "plantea", label: "Plantea", text: "Su asalto por el pueblo de París representó el desafío directo a la monarquía." },
          { t: "resuelve", label: "Desarrolla", text: "Ocurrió el 14 de julio de 1789, fecha que hoy es la fiesta nacional de Francia." },
          { t: "resultado", label: "Resultado", text: "La toma de la Bastilla, el 14 de julio de 1789." }
        ],
        quick: ["14 de julio de 1789 = toma de la Bastilla = inicio de la Revolución Francesa y fiesta nacional francesa."]
      },
      {
        title: "Historia: civilización inca",
        q: "¿Cuál era la capital del Imperio Inca (Tahuantinsuyo)?",
        options: ["Quito", "Cusco", "Machu Picchu", "Tiwanaku"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "El Tahuantinsuyo abarcó parte de los actuales Ecuador, Perú, Bolivia, Chile, Argentina y Colombia." },
          { t: "plantea", label: "Plantea", text: "Machu Picchu es un sitio ceremonial famoso, pero no era la capital administrativa." },
          { t: "resuelve", label: "Desarrolla", text: "Cusco (en el actual Perú) era el centro político y religioso del imperio; su nombre significa \"ombligo del mundo\"." },
          { t: "resultado", label: "Resultado", text: "Cusco." }
        ],
        quick: ["Cusco = capital inca (\"ombligo del mundo\"). Machu Picchu = ciudadela/santuario, no capital. Quito fue capital del norte del imperio."]
      },
      {
        title: "Historia: independencia de Guayaquil",
        q: "¿Qué fecha se conmemora la independencia de Guayaquil?",
        options: ["10 de agosto de 1809", "9 de octubre de 1820", "24 de mayo de 1822", "13 de mayo de 1830"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Las principales fechas patrias ecuatorianas: Primer Grito de Independencia (Quito), independencia de Guayaquil, Batalla de Pichincha." },
          { t: "plantea", label: "Plantea", text: "Cada fecha corresponde a un hecho y una ciudad distinta." },
          { t: "resuelve", label: "Desarrolla", text: "El 9 de octubre de 1820 Guayaquil proclamó su independencia, y desde ahí se organizó la campaña libertadora hacia la Sierra." },
          { t: "resultado", label: "Resultado", text: "9 de octubre de 1820." }
        ],
        quick: ["Fechas clave: 10 ago 1809 (Primer Grito, Quito) · 9 oct 1820 (Guayaquil) · 24 may 1822 (Pichincha, independencia definitiva)."]
      },
      {
        title: "Historia: Primer Grito de Independencia",
        q: "¿Qué se conmemora el 10 de agosto de 1809 en Ecuador?",
        options: ["La independencia definitiva del país", "El Primer Grito de Independencia, en Quito", "La fundación de la República del Ecuador", "La Batalla de Pichincha"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "En 1809 se formó en Quito una Junta Soberana de Gobierno." },
          { t: "plantea", label: "Plantea", text: "Fue el primer intento organizado de autogobierno, aunque fracasó poco después." },
          { t: "resuelve", label: "Desarrolla", text: "Por ser el primer movimiento independentista formal de la región, se le conoce como el Primer Grito de Independencia." },
          { t: "resultado", label: "Resultado", text: "El Primer Grito de Independencia, en Quito." }
        ],
        quick: ["10 de agosto de 1809 = PRIMER GRITO (intento inicial, fracasó). La independencia definitiva llegó en 1822 con Pichincha."]
      },
      {
        title: "Historia: caída del Muro de Berlín",
        q: "¿En qué año cayó el Muro de Berlín, símbolo del fin de la Guerra Fría?",
        options: ["1961", "1975", "1989", "1991"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "El muro dividió Berlín (y simbólicamente Europa) desde 1961." },
          { t: "plantea", label: "Plantea", text: "Distingue la construcción (1961) de la caída, y esta de la disolución de la URSS (1991)." },
          { t: "resuelve", label: "Desarrolla", text: "El muro cayó el 9 de noviembre de 1989, iniciando la reunificación alemana y el desmoronamiento del bloque soviético." },
          { t: "resultado", label: "Resultado", text: "1989." }
        ],
        quick: ["1961 = se construye el Muro. 1989 = cae el Muro. 1991 = se disuelve la URSS. Tres fechas distintas."]
      },
      {
        title: "Historia: fundación de la República del Ecuador",
        q: "¿En qué año Ecuador se separó de la Gran Colombia y nació como república independiente?",
        options: ["1822", "1830", "1845", "1861"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Tras la Batalla de Pichincha (1822), el territorio se integró a la Gran Colombia de Simón Bolívar." },
          { t: "plantea", label: "Plantea", text: "La independencia de España (1822) y el nacimiento de la república (separación de la Gran Colombia) son hechos distintos." },
          { t: "resuelve", label: "Desarrolla", text: "En 1830 el Distrito del Sur se separó de la Gran Colombia y se constituyó como el Estado del Ecuador." },
          { t: "resultado", label: "Resultado", text: "1830." }
        ],
        quick: ["1822 = independencia de España. 1830 = nace la República del Ecuador (se separa de la Gran Colombia)."]
      },
      {
        title: "Historia: la Segunda Guerra Mundial",
        q: "¿Qué hecho marcó el inicio de la Segunda Guerra Mundial en Europa?",
        options: ["El ataque a Pearl Harbor", "La invasión alemana a Polonia en 1939", "La caída de París", "El bombardeo de Hiroshima"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Alemania, bajo el régimen nazi, expandía su territorio en Europa central." },
          { t: "plantea", label: "Plantea", text: "El detonante fue el hecho que llevó a Francia y Reino Unido a declarar la guerra." },
          { t: "resuelve", label: "Desarrolla", text: "La invasión de Polonia, el 1 de septiembre de 1939, provocó esa declaración de guerra y el inicio formal del conflicto." },
          { t: "resultado", label: "Resultado", text: "La invasión alemana a Polonia en 1939." }
        ],
        quick: ["Inicio en Europa: invasión de Polonia (1939). Pearl Harbor (1941) marca la entrada de EE. UU., no el inicio de la guerra."]
      },
      {
        title: "Historia: origen de la escritura",
        q: "¿Cuál civilización antigua es reconocida por desarrollar uno de los primeros sistemas de escritura, la cuneiforme?",
        options: ["Los egipcios", "Los sumerios (Mesopotamia)", "Los mayas", "Los griegos"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "La escritura cuneiforme se hacía con cuñas sobre tablillas de arcilla." },
          { t: "plantea", label: "Plantea", text: "Los egipcios desarrollaron los jeroglíficos; los mayas, su propia escritura glífica, pero más tardía." },
          { t: "resuelve", label: "Desarrolla", text: "Los sumerios, en Mesopotamia (actual Irak), desarrollaron la escritura cuneiforme alrededor del 3.300 a.C., considerada de las más antiguas conocidas." },
          { t: "resultado", label: "Resultado", text: "Los sumerios (Mesopotamia)." }
        ],
        quick: ["Cuneiforme→sumerios (Mesopotamia). Jeroglíficos→egipcios. Mesopotamia se considera \"la cuna de la civilización\"."]
      },

      // ---------- CIENCIA Y NATURALEZA ----------
      {
        title: "Ciencia: los cinco sentidos",
        q: "¿Cuál de los siguientes NO es uno de los cinco sentidos clásicos del ser humano?",
        options: ["Vista", "Equilibrio", "Olfato", "Gusto"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Los cinco sentidos clásicos son: vista, oído, olfato, gusto y tacto." },
          { t: "plantea", label: "Plantea", text: "Identifica cuál de las opciones no forma parte de esa lista tradicional." },
          { t: "resuelve", label: "Desarrolla", text: "El equilibrio (sentido vestibular) es una capacidad real del oído interno, pero no está entre los cinco sentidos clásicos." },
          { t: "resultado", label: "Resultado", text: "Equilibrio." }
        ],
        quick: ["Los 5 clásicos: vista, oído, olfato, gusto, tacto. Equilibrio y propiocepción son sentidos reales pero NO de la lista clásica."]
      },
      {
        title: "Ciencia: símbolo químico del oro",
        q: "¿Cuál es el símbolo químico del oro en la tabla periódica?",
        options: ["Or", "Ag", "Au", "Fe"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "Muchos símbolos químicos derivan del nombre latino del elemento." },
          { t: "plantea", label: "Plantea", text: "El oro en latín es \"aurum\"; la plata es \"argentum\" (Ag) y el hierro \"ferrum\" (Fe)." },
          { t: "resuelve", label: "Desarrolla", text: "De \"aurum\" se toman las dos primeras letras: Au." },
          { t: "resultado", label: "Resultado", text: "Au." }
        ],
        quick: ["Símbolos del latín: Au=aurum(oro), Ag=argentum(plata), Fe=ferrum(hierro), Na=natrium(sodio), K=kalium(potasio), Pb=plumbum(plomo)."]
      },
      {
        title: "Ciencia: elemento más abundante del universo",
        q: "¿Cuál es el elemento químico más abundante del universo?",
        options: ["Oxígeno", "Hidrógeno", "Carbono", "Helio"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Se pregunta por abundancia en el universo, no en la corteza terrestre." },
          { t: "plantea", label: "Plantea", text: "Las estrellas, que constituyen la mayor parte de la materia visible, están formadas principalmente por el elemento más simple." },
          { t: "resuelve", label: "Desarrolla", text: "El hidrógeno, con un solo protón, representa alrededor del 75% de la materia bariónica del universo. El helio es el segundo." },
          { t: "resultado", label: "Resultado", text: "Hidrógeno." }
        ],
        quick: ["Universo: hidrógeno (1°), helio (2°). Corteza terrestre: oxígeno (1°), silicio (2°). Ojo con cuál te preguntan."]
      },
      {
        title: "Ciencia: planeta más grande del sistema solar",
        q: "¿Cuál es el planeta más grande del sistema solar?",
        options: ["Saturno", "Neptuno", "Júpiter", "Urano"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "Los gigantes gaseosos son Júpiter, Saturno, Urano y Neptuno." },
          { t: "plantea", label: "Plantea", text: "Saturno destaca por sus anillos, pero no es el mayor en tamaño." },
          { t: "resuelve", label: "Desarrolla", text: "Júpiter tiene una masa mayor que la de todos los demás planetas juntos, y su diámetro supera 11 veces el de la Tierra." },
          { t: "resultado", label: "Resultado", text: "Júpiter." }
        ],
        quick: ["Orden por tamaño: Júpiter > Saturno > Urano > Neptuno > Tierra > Venus > Marte > Mercurio."]
      },
      {
        title: "Naturaleza: el animal terrestre más grande",
        q: "¿Cuál es el animal terrestre más grande que existe actualmente?",
        options: ["El hipopótamo", "El elefante africano", "La jirafa", "El rinoceronte blanco"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Se especifica animal TERRESTRE (la ballena azul es el mayor animal del planeta, pero es marino)." },
          { t: "plantea", label: "Plantea", text: "Compara masa corporal, no altura (la jirafa es la más alta, no la más pesada)." },
          { t: "resuelve", label: "Desarrolla", text: "El elefante africano puede superar las 6 toneladas de peso, muy por encima de las demás especies terrestres." },
          { t: "resultado", label: "Resultado", text: "El elefante africano." }
        ],
        quick: ["Terrestre más GRANDE/pesado: elefante africano. Más ALTO: jirafa. Animal más grande del planeta: ballena azul (marino)."]
      },
      {
        title: "Naturaleza: clasificación de los mamíferos",
        q: "¿Cuál de los siguientes animales es un mamífero?",
        options: ["El pingüino", "El delfín", "El cocodrilo", "El tiburón"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Los mamíferos amamantan a sus crías, tienen pelo y son de sangre caliente." },
          { t: "plantea", label: "Plantea", text: "Vivir en el agua no implica ser pez. Hay mamíferos acuáticos." },
          { t: "resuelve", label: "Desarrolla", text: "El delfín es un mamífero acuático: respira por pulmones y amamanta a sus crías. El pingüino es ave, el cocodrilo reptil y el tiburón pez." },
          { t: "resultado", label: "Resultado", text: "El delfín." }
        ],
        quick: ["Mamíferos acuáticos frecuentes en examen: delfín, ballena, foca, manatí. Pingüino = ave. Tiburón = pez."]
      },
      {
        title: "Ciencia: velocidad de la luz",
        q: "¿Cuál es la velocidad aproximada de la luz en el vacío?",
        options: ["300 km por segundo", "3.000 km por segundo", "300.000 km por segundo", "30.000 km por segundo"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "Es una de las constantes físicas fundamentales del universo." },
          { t: "plantea", label: "Plantea", text: "Se suele expresar como aproximadamente 3 × 10⁸ metros por segundo." },
          { t: "resuelve", label: "Desarrolla", text: "3 × 10⁸ m/s equivale a 300.000.000 m/s, es decir, unos 300.000 kilómetros por segundo." },
          { t: "resultado", label: "Resultado", text: "Aproximadamente 300.000 km por segundo." }
        ],
        quick: ["Memoriza: c ≈ 300.000 km/s = 3×10⁸ m/s. Nada con masa puede alcanzarla."]
      },
      {
        title: "Ciencia: gas de la respiración",
        q: "¿Qué gas necesitan los seres humanos para respirar y liberar energía en sus células?",
        options: ["Nitrógeno", "Dióxido de carbono", "Oxígeno", "Hidrógeno"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "El aire está compuesto principalmente por nitrógeno (~78%) y oxígeno (~21%)." },
          { t: "plantea", label: "Plantea", text: "Aunque el nitrógeno es el gas más abundante del aire, no lo utilizamos en la respiración celular." },
          { t: "resuelve", label: "Desarrolla", text: "El oxígeno es el que se emplea en la respiración celular para liberar energía; el dióxido de carbono es el desecho que exhalamos." },
          { t: "resultado", label: "Resultado", text: "Oxígeno." }
        ],
        quick: ["Inhalamos O₂ (lo usamos), exhalamos CO₂ (desecho). El nitrógeno es el más abundante pero no lo respiramos metabólicamente."]
      },
      {
        title: "Ciencia: unidad de la tabla periódica",
        q: "En la tabla periódica, ¿qué representa el número atómico de un elemento?",
        options: ["Su masa total en gramos", "El número de protones en su núcleo", "El número de moléculas que forma", "Su temperatura de fusión"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Cada elemento de la tabla periódica tiene un número atómico único." },
          { t: "plantea", label: "Plantea", text: "Ese número es lo que define la identidad química del elemento." },
          { t: "resuelve", label: "Desarrolla", text: "El número atómico equivale a la cantidad de protones del núcleo (y, en un átomo neutro, también a su número de electrones)." },
          { t: "resultado", label: "Resultado", text: "El número de protones en su núcleo." }
        ],
        quick: ["Número atómico = protones (define el elemento). Número másico = protones + neutrones (define el isótopo)."]
      },
      {
        title: "Naturaleza: la fotosíntesis",
        q: "¿Qué gas liberan las plantas a la atmósfera como resultado de la fotosíntesis?",
        options: ["Dióxido de carbono", "Nitrógeno", "Oxígeno", "Metano"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "En la fotosíntesis, la planta toma CO₂ y agua, y usa la energía de la luz." },
          { t: "plantea", label: "Plantea", text: "Identifica el subproducto que se devuelve al ambiente." },
          { t: "resuelve", label: "Desarrolla", text: "La planta produce glucosa (su alimento) y libera oxígeno como subproducto, gas indispensable para la vida animal." },
          { t: "resultado", label: "Resultado", text: "Oxígeno." }
        ],
        quick: ["Fotosíntesis: entra CO₂, sale O₂. Respiración: entra O₂, sale CO₂. Procesos complementarios."]
      },

      // ---------- ARTE, CULTURA Y MITOLOGÍA ----------
      {
        title: "Arte: autor de La Mona Lisa",
        q: "¿Quién pintó La Mona Lisa (La Gioconda)?",
        options: ["Miguel Ángel", "Leonardo da Vinci", "Rafael", "Vincent van Gogh"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Obra del Renacimiento italiano, exhibida en el Museo del Louvre, en París." },
          { t: "plantea", label: "Plantea", text: "Miguel Ángel es famoso por la Capilla Sixtina y el David; Van Gogh es postimpresionista, de otra época." },
          { t: "resuelve", label: "Desarrolla", text: "Leonardo da Vinci la pintó a inicios del siglo XVI; es célebre por su técnica y la ambigüedad de su sonrisa." },
          { t: "resultado", label: "Resultado", text: "Leonardo da Vinci." }
        ],
        quick: ["Da Vinci: Mona Lisa, La Última Cena. Miguel Ángel: Capilla Sixtina, David, La Piedad. No los confundas."]
      },
      {
        title: "Mitología griega: dios del mar",
        q: "En la mitología griega, ¿quién es el dios del mar?",
        options: ["Zeus", "Hades", "Poseidón", "Ares"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "Los tres hermanos principales se repartieron el mundo: cielo, mar e inframundo." },
          { t: "plantea", label: "Plantea", text: "Zeus recibió el cielo, Hades el inframundo y el tercero el mar." },
          { t: "resuelve", label: "Desarrolla", text: "Poseidón es el dios del mar, representado con un tridente. Su equivalente romano es Neptuno." },
          { t: "resultado", label: "Resultado", text: "Poseidón." }
        ],
        quick: ["Zeus=cielo (Júpiter), Poseidón=mar (Neptuno), Hades=inframundo (Plutón). Ares=guerra (Marte)."]
      },
      {
        title: "Mitología griega: dios de la guerra",
        q: "En la mitología griega, ¿qué dios representa la guerra?",
        options: ["Apolo", "Ares", "Hermes", "Dionisio"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Cada dios del panteón griego tiene un dominio específico." },
          { t: "plantea", label: "Plantea", text: "Apolo se asocia al sol y las artes; Hermes es el mensajero; Dionisio, el vino." },
          { t: "resuelve", label: "Desarrolla", text: "Ares es el dios de la guerra; su equivalente en la mitología romana es Marte." },
          { t: "resultado", label: "Resultado", text: "Ares." }
        ],
        quick: ["Ares (griego) = Marte (romano) = guerra. Atenea también se asocia a la guerra, pero estratégica y a la sabiduría."]
      },
      {
        title: "Mitología griega: diosa de la sabiduría",
        q: "¿Qué diosa griega representa la sabiduría y la estrategia?",
        options: ["Afrodita", "Hera", "Atenea", "Artemisa"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "Las diosas principales del panteón griego tienen atributos bien diferenciados." },
          { t: "plantea", label: "Plantea", text: "Afrodita se asocia al amor y la belleza; Hera al matrimonio; Artemisa a la caza y la luna." },
          { t: "resuelve", label: "Desarrolla", text: "Atenea es la diosa de la sabiduría, la estrategia militar y las artes; la ciudad de Atenas lleva su nombre." },
          { t: "resultado", label: "Resultado", text: "Atenea." }
        ],
        quick: ["Atenea=sabiduría (Minerva). Afrodita=amor (Venus). Artemisa=caza/luna (Diana). Hera=matrimonio (Juno)."]
      },
      {
        title: "Arte: autor de la Capilla Sixtina",
        q: "¿Quién pintó los frescos del techo de la Capilla Sixtina, en el Vaticano?",
        options: ["Leonardo da Vinci", "Miguel Ángel", "Donatello", "Botticelli"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Obra maestra del Renacimiento, incluye la célebre escena de La Creación de Adán." },
          { t: "plantea", label: "Plantea", text: "El artista era además escultor, autor del David y La Piedad." },
          { t: "resuelve", label: "Desarrolla", text: "Miguel Ángel pintó el techo entre 1508 y 1512, por encargo del papa Julio II." },
          { t: "resultado", label: "Resultado", text: "Miguel Ángel." }
        ],
        quick: ["Capilla Sixtina + David + La Piedad = Miguel Ángel. Mona Lisa + Última Cena = Da Vinci."]
      },
      {
        title: "Cultura: patrimonio cultural del Ecuador",
        q: "¿Cuál fue la primera ciudad del mundo declarada Patrimonio Cultural de la Humanidad por la UNESCO, en 1978?",
        options: ["Cusco", "Quito", "Cartagena", "Roma"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "En 1978 la UNESCO inscribió los primeros bienes en su lista de Patrimonio Mundial." },
          { t: "plantea", label: "Plantea", text: "Quito destaca por conservar uno de los centros históricos coloniales mejor preservados de América Latina." },
          { t: "resuelve", label: "Desarrolla", text: "Quito y Cracovia fueron las primeras ciudades declaradas Patrimonio Cultural de la Humanidad, en 1978. Las Islas Galápagos también entraron ese año, como patrimonio natural." },
          { t: "resultado", label: "Resultado", text: "Quito." }
        ],
        quick: ["Dato patrio clave: Quito (1978) fue de las primeras ciudades Patrimonio de la Humanidad. Galápagos también, como patrimonio natural."]
      },

      // ---------- LITERATURA ----------
      {
        title: "Literatura: autor de Don Quijote",
        q: "¿Quién escribió \"Don Quijote de la Mancha\"?",
        options: ["Lope de Vega", "Miguel de Cervantes", "Francisco de Quevedo", "Federico García Lorca"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Obra cumbre de la literatura en español, publicada en dos partes (1605 y 1615)." },
          { t: "plantea", label: "Plantea", text: "Se la considera la primera novela moderna." },
          { t: "resuelve", label: "Desarrolla", text: "Su autor es Miguel de Cervantes Saavedra; por él, el español se conoce también como \"la lengua de Cervantes\"." },
          { t: "resultado", label: "Resultado", text: "Miguel de Cervantes." }
        ],
        quick: ["Don Quijote = Cervantes = primera novela moderna. El español es \"la lengua de Cervantes\"."]
      },
      {
        title: "Literatura: autor de Cien años de soledad",
        q: "¿Quién escribió \"Cien años de soledad\"?",
        options: ["Mario Vargas Llosa", "Gabriel García Márquez", "Julio Cortázar", "Pablo Neruda"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Novela emblemática del realismo mágico latinoamericano, ambientada en Macondo." },
          { t: "plantea", label: "Plantea", text: "Su autor, colombiano, recibió el Premio Nobel de Literatura en 1982." },
          { t: "resuelve", label: "Desarrolla", text: "Gabriel García Márquez la publicó en 1967 y narra la historia de la familia Buendía a lo largo de generaciones." },
          { t: "resultado", label: "Resultado", text: "Gabriel García Márquez." }
        ],
        quick: ["Cien años de soledad = García Márquez (Colombia, Nobel 1982) = realismo mágico = Macondo."]
      },
      {
        title: "Literatura: autor de Romeo y Julieta",
        q: "¿Quién escribió \"Romeo y Julieta\"?",
        options: ["Charles Dickens", "William Shakespeare", "Oscar Wilde", "Edgar Allan Poe"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Tragedia teatral inglesa sobre dos jóvenes de familias enemistadas en Verona." },
          { t: "plantea", label: "Plantea", text: "Su autor es el dramaturgo inglés más influyente de la historia." },
          { t: "resuelve", label: "Desarrolla", text: "William Shakespeare la escribió a finales del siglo XVI; también es autor de Hamlet, Macbeth y Otelo." },
          { t: "resultado", label: "Resultado", text: "William Shakespeare." }
        ],
        quick: ["Shakespeare: Romeo y Julieta, Hamlet, Macbeth, Otelo, El rey Lear. Todas tragedias clásicas del teatro inglés."]
      },
      {
        title: "Literatura ecuatoriana: Huasipungo",
        q: "¿Quién escribió \"Huasipungo\", novela clave de la literatura indigenista ecuatoriana?",
        options: ["Juan Montalvo", "Jorge Icaza", "José de la Cuadra", "Juan León Mera"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Novela de 1934 que denuncia la explotación del indígena ecuatoriano en el sistema de hacienda." },
          { t: "plantea", label: "Plantea", text: "Es la obra más representativa del realismo social/indigenismo en Ecuador." },
          { t: "resuelve", label: "Desarrolla", text: "Su autor es Jorge Icaza, cuya obra tuvo gran repercusión internacional en la denuncia social." },
          { t: "resultado", label: "Resultado", text: "Jorge Icaza." }
        ],
        quick: ["Autores ecuatorianos clave: Jorge Icaza (Huasipungo), Juan León Mera (Cumandá), Juan Montalvo (ensayo)."]
      },
      {
        title: "Literatura ecuatoriana: Cumandá",
        q: "¿Quién escribió \"Cumandá\", novela romántica ecuatoriana ambientada en la Amazonía?",
        options: ["Jorge Icaza", "Juan León Mera", "Medardo Ángel Silva", "Demetrio Aguilera Malta"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Novela de 1879, considerada la primera novela ecuatoriana de relevancia." },
          { t: "plantea", label: "Plantea", text: "Su autor también escribió la letra del Himno Nacional del Ecuador." },
          { t: "resuelve", label: "Desarrolla", text: "Juan León Mera escribió Cumandá, obra del romanticismo que idealiza el paisaje amazónico y la figura indígena." },
          { t: "resultado", label: "Resultado", text: "Juan León Mera." }
        ],
        quick: ["Juan León Mera = Cumandá + letra del Himno Nacional del Ecuador. Dato doble muy preguntado."]
      },
      {
        title: "Literatura: género de la Ilíada y la Odisea",
        q: "¿A qué género literario pertenecen \"La Ilíada\" y \"La Odisea\", atribuidas a Homero?",
        options: ["Novela moderna", "Poesía épica", "Teatro dramático", "Ensayo filosófico"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Obras fundacionales de la literatura occidental, de la Grecia antigua." },
          { t: "plantea", label: "Plantea", text: "Están escritas en verso y narran las hazañas de héroes (Aquiles, Odiseo)." },
          { t: "resuelve", label: "Desarrolla", text: "La combinación de verso + narración de hazañas heroicas define la poesía épica (o epopeya)." },
          { t: "resultado", label: "Resultado", text: "Poesía épica." }
        ],
        quick: ["Épica = verso + héroes + hazañas (Ilíada, Odisea, Eneida). No confundir con teatro ni novela."]
      },
      {
        title: "Literatura: Premio Nobel chileno",
        q: "¿Qué poeta chileno, autor de \"Veinte poemas de amor y una canción desesperada\", ganó el Premio Nobel de Literatura?",
        options: ["Nicanor Parra", "Pablo Neruda", "Vicente Huidobro", "Gabriela Mistral"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Chile tiene dos premios Nobel de Literatura: Gabriela Mistral (1945) y Pablo Neruda (1971)." },
          { t: "plantea", label: "Plantea", text: "Se pide específicamente al autor de \"Veinte poemas de amor y una canción desesperada\"." },
          { t: "resuelve", label: "Desarrolla", text: "Esa obra, junto al \"Canto general\", pertenece a Pablo Neruda, Nobel de Literatura en 1971." },
          { t: "resultado", label: "Resultado", text: "Pablo Neruda." }
        ],
        quick: ["Nobel chilenos: Gabriela Mistral (1945, primera mujer latinoamericana) y Pablo Neruda (1971)."]
      },
      {
        title: "Literatura: definición de fábula",
        q: "¿Qué caracteriza a una fábula como género literario?",
        options: ["Es un relato extenso sin ninguna enseñanza", "Es un relato breve, frecuentemente con animales, que termina en una moraleja", "Es un poema de amor", "Es un texto científico"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Género cultivado por autores como Esopo y La Fontaine." },
          { t: "plantea", label: "Plantea", text: "Sus rasgos definitorios son la brevedad, los personajes (a menudo animales personificados) y una enseñanza final." },
          { t: "resuelve", label: "Desarrolla", text: "Esa enseñanza explícita al final se denomina moraleja." },
          { t: "resultado", label: "Resultado", text: "Es un relato breve, frecuentemente con animales, que termina en una moraleja." }
        ],
        quick: ["Fábula = breve + animales personificados + MORALEJA. Autores clásicos: Esopo, La Fontaine, Samaniego."]
      },
      {
        title: "Cultura: día del idioma español",
        q: "¿Con qué figura literaria se asocia principalmente el Día del Idioma Español (23 de abril)?",
        options: ["Pablo Neruda", "Miguel de Cervantes", "Jorge Luis Borges", "Rubén Darío"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "El 23 de abril se conmemora la muerte de Cervantes y también de Shakespeare." },
          { t: "plantea", label: "Plantea", text: "La fecha honra al máximo referente de la lengua española." },
          { t: "resuelve", label: "Desarrolla", text: "Por eso el Día del Idioma Español se asocia a Miguel de Cervantes, autor del Quijote." },
          { t: "resultado", label: "Resultado", text: "Miguel de Cervantes." }
        ],
        quick: ["23 de abril = Día del Idioma (Cervantes) y también Día Mundial del Libro."]
      },
      {
        title: "Cultura: himno nacional del Ecuador",
        q: "¿Quién compuso la música del Himno Nacional del Ecuador?",
        options: ["Juan León Mera", "Antonio Neumane", "Jorge Icaza", "Gabriel García Moreno"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "El himno tiene un autor para la letra y otro para la música." },
          { t: "plantea", label: "Plantea", text: "Juan León Mera escribió la LETRA; se pregunta por la MÚSICA." },
          { t: "resuelve", label: "Desarrolla", text: "La música fue compuesta por Antonio Neumane, músico de origen francés radicado en Ecuador." },
          { t: "resultado", label: "Resultado", text: "Antonio Neumane." }
        ],
        quick: ["Himno del Ecuador: LETRA = Juan León Mera, MÚSICA = Antonio Neumane. Pregunta típica de trampa."]
      },
      {
        title: "Ciencia: teoría de la relatividad",
        q: "¿Qué científico formuló la teoría de la relatividad?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "La teoría transformó la comprensión del espacio, el tiempo y la gravedad en el siglo XX." },
          { t: "plantea", label: "Plantea", text: "Newton formuló las leyes del movimiento y la gravitación universal, en el siglo XVII." },
          { t: "resuelve", label: "Desarrolla", text: "Albert Einstein publicó la relatividad especial en 1905 y la general en 1915, junto con la célebre ecuación E=mc²." },
          { t: "resultado", label: "Resultado", text: "Albert Einstein." }
        ],
        quick: ["Einstein = relatividad, E=mc². Newton = leyes del movimiento y gravitación. Darwin = evolución."]
      },
      {
        title: "Ciencia: teoría de la evolución",
        q: "¿Qué naturalista formuló la teoría de la evolución por selección natural, tras visitar las Islas Galápagos?",
        options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Alexander Fleming"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Sus observaciones en Galápagos (pinzones, tortugas) fueron clave para su teoría." },
          { t: "plantea", label: "Plantea", text: "Mendel es el padre de la genética; Pasteur y Fleming hicieron aportes a la microbiología y la medicina." },
          { t: "resuelve", label: "Desarrolla", text: "Charles Darwin publicó \"El origen de las especies\" en 1859, exponiendo la selección natural." },
          { t: "resultado", label: "Resultado", text: "Charles Darwin." }
        ],
        quick: ["Darwin + Galápagos + \"El origen de las especies\" (1859) = selección natural. Dato con conexión ecuatoriana directa."]
      },
      {
        title: "Geografía: país más poblado del mundo",
        q: "Según estimaciones recientes, ¿cuál es el país más poblado del mundo?",
        options: ["China", "India", "Estados Unidos", "Indonesia"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Durante décadas China ocupó el primer lugar en población mundial." },
          { t: "plantea", label: "Plantea", text: "Las estimaciones demográficas recientes muestran un cambio en ese liderazgo." },
          { t: "resuelve", label: "Desarrolla", text: "En 2023 India superó a China como el país más poblado, con más de 1.400 millones de habitantes." },
          { t: "resultado", label: "Resultado", text: "India." }
        ],
        quick: ["Dato actualizado: India (1°) superó a China (2°) en 2023. Antes de esa fecha la respuesta era China."]
      },
      {
        title: "Historia: los Juegos Olímpicos antiguos",
        q: "¿En qué civilización antigua se originaron los Juegos Olímpicos?",
        options: ["Roma", "Grecia", "Egipto", "Persia"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Los juegos se celebraban en honor a Zeus, en un santuario específico." },
          { t: "plantea", label: "Plantea", text: "El nombre proviene del lugar donde se realizaban." },
          { t: "resuelve", label: "Desarrolla", text: "Se originaron en la antigua Grecia, en Olimpia, alrededor del año 776 a.C. Los juegos modernos se reinstauraron en 1896, en Atenas." },
          { t: "resultado", label: "Resultado", text: "Grecia." }
        ],
        quick: ["Olimpiadas: origen en Olimpia, Grecia antigua (776 a.C.); reinstauradas en Atenas en 1896."]
      },
      {
        title: "Cultura: la UNESCO",
        q: "¿A qué se dedica principalmente la UNESCO?",
        options: ["A la regulación del comercio internacional", "A la educación, la ciencia y la cultura", "A operaciones militares de paz", "A la banca internacional"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "UNESCO es un organismo especializado de las Naciones Unidas." },
          { t: "plantea", label: "Plantea", text: "Su nombre en inglés significa Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura." },
          { t: "resuelve", label: "Desarrolla", text: "Entre sus funciones está declarar sitios Patrimonio de la Humanidad, como Quito y las Islas Galápagos." },
          { t: "resultado", label: "Resultado", text: "A la educación, la ciencia y la cultura." }
        ],
        quick: ["UNESCO = Educación, Ciencia y Cultura (Patrimonio de la Humanidad). OMS = salud. FMI = finanzas."]
      },
      {
        title: "Geografía: las Islas Galápagos",
        q: "¿Por qué son mundialmente reconocidas las Islas Galápagos?",
        options: ["Por su industria pesada", "Por su biodiversidad única y su papel en la teoría de la evolución", "Por ser el punto más alto de América", "Por su producción de petróleo"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Archipiélago ecuatoriano ubicado en el océano Pacífico, a unos 1.000 km del continente." },
          { t: "plantea", label: "Plantea", text: "Su aislamiento geográfico permitió el desarrollo de especies endémicas únicas." },
          { t: "resuelve", label: "Desarrolla", text: "Esas especies (pinzones, tortugas gigantes, iguanas marinas) inspiraron a Darwin. Fue declarado Patrimonio Natural de la Humanidad en 1978." },
          { t: "resultado", label: "Resultado", text: "Por su biodiversidad única y su papel en la teoría de la evolución." }
        ],
        quick: ["Galápagos: especies endémicas + Darwin + Patrimonio Natural (1978). Dato patrio de alta probabilidad."]
      },
      {
        title: "Ciencia: la penicilina",
        q: "¿Quién descubrió la penicilina, el primer antibiótico de uso masivo?",
        options: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Marie Curie"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Descubrimiento accidental a partir de un hongo del género Penicillium, en 1928." },
          { t: "plantea", label: "Plantea", text: "Pasteur desarrolló la pasteurización y vacunas; Koch identificó bacterias causantes de enfermedades; Curie trabajó en radioactividad." },
          { t: "resuelve", label: "Desarrolla", text: "Alexander Fleming observó que ese hongo inhibía el crecimiento bacteriano, lo que llevó al desarrollo de la penicilina." },
          { t: "resultado", label: "Resultado", text: "Alexander Fleming." }
        ],
        quick: ["Fleming = penicilina (1928). Pasteur = pasteurización/vacunas. Curie = radioactividad. Koch = bacterias patógenas."]
      },
      {
        title: "Historia: la Guerra Fría (bloques)",
        q: "¿Qué dos sistemas ideológicos se enfrentaron durante la Guerra Fría?",
        options: ["Feudalismo y capitalismo", "Capitalismo y comunismo", "Monarquía y república", "Fascismo y nazismo"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Período de tensión entre Estados Unidos y la Unión Soviética (1947-1991)." },
          { t: "plantea", label: "Plantea", text: "Cada superpotencia representaba un modelo económico y político opuesto." },
          { t: "resuelve", label: "Desarrolla", text: "Estados Unidos lideraba el bloque capitalista (occidental) y la URSS el bloque comunista (oriental)." },
          { t: "resultado", label: "Resultado", text: "Capitalismo y comunismo." }
        ],
        quick: ["Guerra Fría = EE.UU./capitalismo (OTAN) vs URSS/comunismo (Pacto de Varsovia). Nunca guerra directa entre ambos."]
      },
      {
        title: "Geografía: país con más husos horarios (territorio continuo)",
        q: "¿Cuál es el país con la mayor extensión territorial del mundo?",
        options: ["Canadá", "China", "Rusia", "Estados Unidos"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "Se compara la superficie total de los países." },
          { t: "plantea", label: "Plantea", text: "Rusia se extiende sobre dos continentes: Europa y Asia." },
          { t: "resuelve", label: "Desarrolla", text: "Con más de 17 millones de km², Rusia casi duplica a Canadá, el segundo país más extenso." },
          { t: "resultado", label: "Resultado", text: "Rusia." }
        ],
        quick: ["Orden por superficie: Rusia > Canadá > China ≈ EE.UU. > Brasil > Australia."]
      },
      {
        title: "Ciencia: el sistema solar",
        q: "¿Cuántos planetas conforman actualmente el sistema solar?",
        options: ["7", "8", "9", "10"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "La clasificación cambió en 2006, tras una decisión de la Unión Astronómica Internacional." },
          { t: "plantea", label: "Plantea", text: "Antes se contaban nueve planetas, incluyendo Plutón." },
          { t: "resuelve", label: "Desarrolla", text: "Plutón fue reclasificado como planeta enano, dejando ocho planetas: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno." },
          { t: "resultado", label: "Resultado", text: "8 planetas." }
        ],
        quick: ["Desde 2006: 8 planetas (Plutón pasó a planeta enano). Si una opción dice 9, es la respuesta desactualizada."]
      },
      {
        title: "Cultura: lenguas más habladas",
        q: "¿Cuál es el idioma con más hablantes nativos en el mundo?",
        options: ["Inglés", "Chino mandarín", "Español", "Hindi"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Se distingue hablantes NATIVOS de hablantes totales (incluyendo segunda lengua)." },
          { t: "plantea", label: "Plantea", text: "El inglés lidera en hablantes totales, pero no en nativos." },
          { t: "resuelve", label: "Desarrolla", text: "El chino mandarín tiene el mayor número de hablantes nativos; el español ocupa el segundo lugar en ese criterio." },
          { t: "resultado", label: "Resultado", text: "Chino mandarín." }
        ],
        quick: ["Nativos: mandarín (1°), español (2°). Totales (incl. segunda lengua): inglés (1°). Fíjate qué criterio piden."]
      },
      {
        title: "Historia: figura de Simón Bolívar",
        q: "¿Por qué se conoce a Simón Bolívar como \"El Libertador\"?",
        options: ["Por fundar la Universidad de Caracas", "Por liderar las campañas de independencia de varios países sudamericanos", "Por escribir la Constitución de España", "Por descubrir el río Amazonas"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Militar y político venezolano de inicios del siglo XIX." },
          { t: "plantea", label: "Plantea", text: "Su papel fue decisivo en la emancipación de varias naciones del dominio español." },
          { t: "resuelve", label: "Desarrolla", text: "Lideró campañas que liberaron los actuales Venezuela, Colombia, Ecuador, Perú y Bolivia, e impulsó el proyecto de la Gran Colombia." },
          { t: "resultado", label: "Resultado", text: "Por liderar las campañas de independencia de varios países sudamericanos." }
        ],
        quick: ["Bolívar = El Libertador (5 países) + proyecto de la Gran Colombia. Sucre fue su lugarteniente en Pichincha."]
      },
      {
        title: "Historia: Antonio José de Sucre",
        q: "¿Qué general dirigió las fuerzas patriotas en la Batalla de Pichincha (1822)?",
        options: ["Simón Bolívar", "Antonio José de Sucre", "José de San Martín", "Eloy Alfaro"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "La Batalla de Pichincha selló la independencia de Quito el 24 de mayo de 1822." },
          { t: "plantea", label: "Plantea", text: "Bolívar lideraba el proyecto general, pero no comandó personalmente esta batalla." },
          { t: "resuelve", label: "Desarrolla", text: "Antonio José de Sucre, lugarteniente de Bolívar, comandó las fuerzas patriotas en Pichincha." },
          { t: "resultado", label: "Resultado", text: "Antonio José de Sucre." }
        ],
        quick: ["Pichincha (1822) = Sucre al mando. La antigua moneda ecuatoriana llevaba su nombre por eso."]
      },
      {
        title: "Ciencia: los estados de la materia",
        q: "¿Cuáles son los tres estados de agregación de la materia más comunes en la Tierra?",
        options: ["Sólido, líquido y plasma", "Sólido, líquido y gaseoso", "Líquido, gaseoso y plasma", "Sólido, plasma y condensado"], correct: 1,
        full: [
          { t: "dato", label: "Datos", text: "Existen más estados (plasma, condensado de Bose-Einstein), pero se piden los más comunes en la Tierra." },
          { t: "plantea", label: "Plantea", text: "Piensa en el agua, que se presenta naturalmente en los tres." },
          { t: "resuelve", label: "Desarrolla", text: "El agua existe como hielo (sólido), agua (líquido) y vapor (gaseoso) en condiciones terrestres normales." },
          { t: "resultado", label: "Resultado", text: "Sólido, líquido y gaseoso." }
        ],
        quick: ["Los 3 comunes: sólido, líquido, gaseoso. El plasma es el 4° estado (estrellas, relámpagos), no común en la superficie terrestre."]
      },
      {
        title: "Geografía: capital de Brasil",
        q: "¿Cuál es la capital de Brasil?",
        options: ["Río de Janeiro", "São Paulo", "Brasilia", "Salvador"], correct: 2,
        full: [
          { t: "dato", label: "Datos", text: "Río de Janeiro fue capital hasta 1960; São Paulo es la ciudad más poblada." },
          { t: "plantea", label: "Plantea", text: "Otra vez la trampa: ni la ciudad más famosa ni la más grande es la capital." },
          { t: "resuelve", label: "Desarrolla", text: "Brasilia fue construida en el interior del país e inaugurada como capital en 1960, para descentralizar el desarrollo." },
          { t: "resultado", label: "Resultado", text: "Brasilia." }
        ],
        quick: ["Brasilia = capital construida a propósito (1960). Igual que Canberra en Australia: capitales planificadas."]
      }
    ]
  }]
};
