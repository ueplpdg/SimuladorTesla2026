// BANCO USECIPOL 2026 — Verbal, Abstracto y Conocimientos Generales.
// Se fusiona con banco-usecipol-numerico.js al cargar.
window.BANCO_USECIPOL_RESTO = {
  sections: [

    // ==================== RAZONAMIENTO VERBAL ====================
    {
      key: "verbal", title: "Razonamiento Verbal",
      focus: "Analogías por relación funcional, sinonimia y antonimia, acepciones múltiples, postura crítica, conclusión lógica y término excluido.",
      pool: [
        { q: "Complete la analogía: Llave es a ______ como batería es a celular.", options: ["candado", "llavero", "metal", "cajón"], correct: 0,
          hint: "Define con una frase precisa qué hace la batería respecto del celular.",
          steps: [
            { t: "dato", label: "Par base", text: "El par completo es batería → celular." },
            { t: "plantea", label: "Nombra la relación", text: "La batería ACTIVA o pone en funcionamiento al celular." },
            { t: "resuelve", label: "Aplica", text: "¿Qué objeto pone en funcionamiento (abre) una llave? Un candado." },
            { t: "trampa", label: "Cuidado", text: "«Llavero» es donde se guarda (contenedor), «metal» es el material y «cajón» un lugar. Ninguno replica la función." },
            { t: "resultado", label: "Respuesta", text: "candado" }
          ],
          quick: ["Frase guía: «la batería HACE FUNCIONAR al celular» → «la llave HACE FUNCIONAR al candado».", "Descarta material, contenedor y lugar."] },

        { q: "Complete la analogía: Tiza es a ______ como tinta es a impresora.", options: ["pizarra", "aula", "polvo", "profesor"], correct: 0,
          hint: "La tinta es el insumo que consume la impresora para escribir.",
          steps: [
            { t: "dato", label: "Par base", text: "tinta → impresora: el insumo y el soporte donde se aplica." },
            { t: "plantea", label: "Relación", text: "Es «insumo de escritura → superficie o medio donde se plasma»." },
            { t: "resuelve", label: "Aplica", text: "La tiza se usa para escribir sobre la pizarra." },
            { t: "resultado", label: "Respuesta", text: "pizarra" }
          ],
          quick: ["Busca el SOPORTE, no la persona ni el lugar general."] },

        { q: "Complete la analogía: Termómetro es a temperatura como ______ es a peso.", options: ["balanza", "kilogramo", "masa", "objeto"], correct: 0,
          hint: "La relación es instrumento y la magnitud que mide.",
          steps: [
            { t: "dato", label: "Par base", text: "termómetro → temperatura: instrumento y magnitud medida." },
            { t: "plantea", label: "Relación", text: "Se busca el instrumento que mide el peso." },
            { t: "resuelve", label: "Aplica", text: "La balanza mide el peso, igual que el termómetro mide la temperatura." },
            { t: "trampa", label: "Cuidado", text: "«Kilogramo» es la unidad, no el instrumento. «Masa» es otra magnitud." },
            { t: "resultado", label: "Respuesta", text: "balanza" }
          ],
          quick: ["Distingue instrumento (balanza), unidad (kilogramo) y magnitud (peso)."] },

        { q: "Timar es a estafar como:", options: ["desinfectar es a purificar", "ocaso es a aurora", "malo es a pésimo", "avalancha es a destrucción"], correct: 0,
          hint: "Determina el TIPO de relación del par base antes de mirar las opciones.",
          steps: [
            { t: "dato", label: "Par base", text: "«Timar» y «estafar» significan prácticamente lo mismo: la relación es de SINONIMIA." },
            { t: "plantea", label: "Busca el mismo tipo", text: "Hay que hallar el único par que también sea de sinónimos." },
            { t: "resuelve", label: "Evalúa", text: "Desinfectar/purificar: ambos son eliminar impurezas ⟹ sinónimos ✓. Ocaso/aurora: antónimos ✗. Malo/pésimo: gradación de intensidad ✗. Avalancha/destrucción: causa-efecto ✗." },
            { t: "resultado", label: "Respuesta", text: "desinfectar es a purificar" }
          ],
          quick: ["Clasifica el par base y elimina por TIPO de relación.", "Antónimos, gradación y causa-efecto quedan fuera de inmediato."] },

        { q: "Aletargar es a demorar como:", options: ["hallar es a encontrar", "subir es a descender", "grande es a colosal", "lluvia es a inundación"], correct: 0,
          hint: "Identifica primero si el par base son sinónimos, antónimos o una gradación.",
          steps: [
            { t: "dato", label: "Par base", text: "«Aletargar» es retardar o dilatar; «demorar» es lo mismo. Son SINÓNIMOS." },
            { t: "plantea", label: "Filtra", text: "Se necesita otro par de sinónimos plenos." },
            { t: "resuelve", label: "Evalúa", text: "Hallar/encontrar: sinónimos exactos ✓. Subir/descender: antónimos ✗. Grande/colosal: gradación ✗. Lluvia/inundación: causa-efecto ✗." },
            { t: "resultado", label: "Respuesta", text: "hallar es a encontrar" }
          ],
          quick: ["Sinonimia plena ≠ gradación de intensidad. Ojo con ese distractor."] },

        { q: "Todos los enunciados son significados de «marco», EXCEPTO:", options: ["Lámina de vidrio transparente que cubre un cuadro.", "Pieza que rodea algunas cosas.", "Límites en que se encuadra un problema o etapa.", "Nombre propio masculino."], correct: 0,
          hint: "¿Qué parte de un cuadro es el marco y qué parte no lo es?",
          steps: [
            { t: "dato", label: "Consigna", text: "Se piden acepciones reales de «marco»; la respuesta es la que NO corresponde." },
            { t: "plantea", label: "Revisa las válidas", text: "«Pieza que rodea» es la acepción física ✓. «Límites de un problema» es la figurada, como marco legal ✓. «Nombre propio» también es válida ✓." },
            { t: "resuelve", label: "Detecta la intrusa", text: "La lámina de vidrio que cubre un cuadro se llama CRISTAL. El marco bordea; el cristal cubre." },
            { t: "resultado", label: "Respuesta", text: "Lámina de vidrio transparente que cubre un cuadro." }
          ],
          quick: ["En preguntas con «EXCEPTO», marca las que SÍ valen y quédate con la sobrante."] },

        { q: "Todos los enunciados son significados de «banco», EXCEPTO:", options: ["Instrumento de cuerda usado en orquestas.", "Institución financiera que custodia dinero.", "Asiento largo para varias personas.", "Conjunto numeroso de peces."], correct: 0,
          hint: "Repasa las acepciones reales y busca la que pertenece a otra palabra.",
          steps: [
            { t: "dato", label: "Consigna", text: "Hay que hallar el significado que NO corresponde a «banco»." },
            { t: "plantea", label: "Revisa las válidas", text: "Institución financiera ✓, asiento largo ✓, y «banco de peces» como conjunto o cardumen ✓." },
            { t: "resuelve", label: "Detecta la intrusa", text: "«Banco» no designa ningún instrumento de cuerda; esa acepción es inventada." },
            { t: "resultado", label: "Respuesta", text: "Instrumento de cuerda usado en orquestas." }
          ],
          quick: ["«Banco» es muy polisémica: finanzas, mueble, peces, banco de datos, banco de arena."] },

        { q: "Determine la POSTURA CRÍTICA del texto:\n\n«La presencia del gas ozono en la superficie terrestre tiene un efecto dañino puesto que es tóxico y afecta la salud. En las capas altas de la atmósfera, el ozono es un componente natural que nos protege contra la radiación ultravioleta. Es el hombre el culpable de las concentraciones de ozono en las capas más bajas, puesto que el gas se forma por reacciones químicas entre el oxígeno y el dióxido de nitrógeno procedente de la combustión vehicular y de las fábricas.»", options: ["El hombre es responsable de la concentración de ozono dañino en las capas bajas.", "El ozono nos protege de los rayos ultravioleta.", "El ozono se encuentra en las capas altas de la atmósfera.", "Oxígeno, nitrógeno y ozono producen un gas venenoso."], correct: 0,
          hint: "«Postura crítica» es el juicio del autor, no un dato neutral.",
          steps: [
            { t: "dato", label: "Consigna", text: "No se pide cualquier dato, sino la POSTURA CRÍTICA: lo que el autor señala o atribuye como responsabilidad." },
            { t: "plantea", label: "Localiza la marca", text: "La frase clave es «Es el hombre el culpable…». «Culpable» es una valoración, no una descripción." },
            { t: "resuelve", label: "Descarta lo informativo", text: "Que el ozono proteja de los rayos UV y que esté en capas altas son datos neutrales. La cuarta opción distorsiona el texto." },
            { t: "resultado", label: "Respuesta", text: "El hombre es responsable de la concentración de ozono dañino en las capas bajas." }
          ],
          quick: ["Busca palabras de valoración: «culpable», «responsable», «lamentablemente», «pese a».", "Si la opción es un dato verificable y neutral, no es la postura crítica."] },

        { q: "Determine la IDEA PRINCIPAL del texto:\n\n«El uso excesivo de pantallas en la infancia se ha vinculado con retrasos en el desarrollo del lenguaje. Diversos estudios señalan que los niños que pasan más de tres horas diarias frente a dispositivos presentan menor vocabulario que sus pares. Sin embargo, cuando el uso es acompañado por un adulto que dialoga sobre el contenido, ese efecto disminuye notablemente.»", options: ["El efecto negativo de las pantallas en el lenguaje infantil se reduce con acompañamiento adulto.", "Los niños no deberían usar pantallas bajo ninguna circunstancia.", "Los estudios sobre pantallas y lenguaje son contradictorios.", "El vocabulario infantil depende únicamente del tiempo de pantalla."], correct: 0,
          hint: "La idea principal debe abarcar TODO el texto, incluido el giro final.",
          steps: [
            { t: "dato", label: "Estructura", text: "El texto plantea un problema (retrasos del lenguaje), lo respalda con estudios y luego introduce un matiz con «Sin embargo»." },
            { t: "plantea", label: "Regla", text: "La idea principal debe integrar el planteamiento Y el matiz, no solo una parte." },
            { t: "resuelve", label: "Evalúa", text: "«Bajo ninguna circunstancia» es un extremo que el texto no afirma. «Contradictorios» tergiversa: los estudios coinciden. «Únicamente» absolutiza y el texto menciona otro factor." },
            { t: "resultado", label: "Respuesta", text: "El efecto negativo se reduce con acompañamiento adulto." }
          ],
          quick: ["Lo que sigue a «sin embargo» suele contener la clave de la idea principal.", "Descarta opciones con «únicamente», «nunca», «siempre»."] },

        { q: "Lea el enunciado y determine la conclusión CORRECTA:\n• Patricio es programador.\n• Patricio utiliza lentes para trabajar en la computadora.\n• Todos los compañeros de trabajo de Patricio utilizan lentes.\n• Pedro es compañero de trabajo de Patricio.", options: ["Pedro utiliza lentes.", "Todos los programadores utilizan lentes.", "Todos los que trabajan en computadora utilizan lentes.", "Algunos compañeros de Patricio no son programadores."], correct: 0,
          hint: "Solo vale lo que se deduce con certeza, sin agregar nada.",
          steps: [
            { t: "dato", label: "Premisas clave", text: "P3: todo compañero de Patricio usa lentes. P4: Pedro es compañero de Patricio." },
            { t: "plantea", label: "Aplica el silogismo", text: "Si TODO elemento del conjunto usa lentes y Pedro pertenece al conjunto, Pedro usa lentes. Es Modus Ponens." },
            { t: "resuelve", label: "Descarta", text: "«Todos los programadores» generaliza desde un solo caso ✗. «Todos los que trabajan en computadora» amplía el conjunto ✗. «Algunos no son programadores» no está afirmado ✗." },
            { t: "resultado", label: "Respuesta", text: "Pedro utiliza lentes." }
          ],
          quick: ["Busca la premisa con «Todos» y quién pertenece a ese conjunto.", "Toda opción que generalice desde un individuo es falsa."] },

        { q: "Determine la conclusión CORRECTA:\n• Todos los cadetes del curso aprobaron natación.\n• Ninguno que aprobó natación fue sancionado.\n• Rubén es cadete del curso.", options: ["Rubén no fue sancionado.", "Rubén fue sancionado.", "Algunos cadetes fueron sancionados.", "No se puede concluir nada sobre Rubén."], correct: 0,
          hint: "Encadena las dos primeras premisas antes de aplicar la tercera.",
          steps: [
            { t: "dato", label: "Premisas", text: "P1: cadetes ⊆ aprobaron natación. P2: aprobaron natación ∩ sancionados = ∅. P3: Rubén es cadete." },
            { t: "plantea", label: "Encadena", text: "Si los cadetes están dentro de «aprobaron natación», y ese conjunto no se cruza con «sancionados», entonces ningún cadete fue sancionado." },
            { t: "resuelve", label: "Aplica a Rubén", text: "Rubén es cadete, por lo tanto no fue sancionado." },
            { t: "resultado", label: "Respuesta", text: "Rubén no fue sancionado." }
          ],
          quick: ["A ⊆ B y B ∩ C = ∅ ⟹ A ∩ C = ∅.", "Dibuja los círculos si dudas: es más rápido que razonarlo en palabras."] },

        { q: "Identifique el término EXCLUIDO: MARTILLO, DESTORNILLADOR, ALICATE, CLAVO.", options: ["CLAVO", "MARTILLO", "DESTORNILLADOR", "ALICATE"], correct: 0,
          hint: "Define la categoría usando solo TRES de las palabras.",
          steps: [
            { t: "dato", label: "Términos", text: "martillo, destornillador, alicate, clavo." },
            { t: "plantea", label: "Busca lo común", text: "Martillo, destornillador y alicate son HERRAMIENTAS: instrumentos con los que se trabaja." },
            { t: "resuelve", label: "Identifica la intrusa", text: "El clavo es un material o insumo sobre el que se actúa, no una herramienta." },
            { t: "resultado", label: "Respuesta", text: "CLAVO" }
          ],
          quick: ["Herramienta ≠ material sobre el que se trabaja.", "Revisa siempre significado, categoría gramatical y relación parte-todo."] },

        { q: "Identifique el término EXCLUIDO: SUSURRAR, GRITAR, MURMURAR, CUCHICHEAR.", options: ["GRITAR", "SUSURRAR", "MURMURAR", "CUCHICHEAR"], correct: 0,
          hint: "Todas son formas de hablar; fíjate en la intensidad.",
          steps: [
            { t: "dato", label: "Términos", text: "Los cuatro se refieren a formas de hablar." },
            { t: "plantea", label: "Criterio", text: "Si todas pertenecen al mismo campo, el criterio suele ser la INTENSIDAD." },
            { t: "resuelve", label: "Identifica", text: "Susurrar, murmurar y cuchichear implican voz BAJA. Gritar es lo contrario: voz muy alta." },
            { t: "resultado", label: "Respuesta", text: "GRITAR" }
          ],
          quick: ["Mismo campo semántico ⟹ busca la que rompe la intensidad o la dirección."] },

        { q: "Identifique el término EXCLUIDO: CORRER, SALTAR, RÁPIDO, NADAR.", options: ["RÁPIDO", "CORRER", "SALTAR", "NADAR"], correct: 0,
          hint: "Revisa también la categoría gramatical, no solo el significado.",
          steps: [
            { t: "dato", label: "Términos", text: "correr, saltar, rápido, nadar." },
            { t: "plantea", label: "Criterio gramatical", text: "Correr, saltar y nadar son VERBOS que expresan acción." },
            { t: "resuelve", label: "Identifica", text: "«Rápido» es adjetivo o adverbio: describe cómo se hace algo, no es una acción." },
            { t: "resultado", label: "Respuesta", text: "RÁPIDO" }
          ],
          quick: ["Si una palabra no es del mismo tipo gramatical que las demás, esa es la respuesta."] },

        { q: "Con base en el contexto, identifique el significado de la palabra en negrita:\n«El ÓRGANO necesita mantenimiento», señaló el ingeniero acústico.", options: ["Instrumento musical de viento", "Cada una de las partes del cuerpo que ejercen una función", "Persona o cosa que sirve para ejecutar un acto", "Aparato antiguo de refrigeración"], correct: 0,
          hint: "La profesión de quien habla es la pista decisiva.",
          steps: [
            { t: "dato", label: "Pista contextual", text: "Habla un INGENIERO ACÚSTICO (especialista en sonido) y el objeto «necesita mantenimiento», así que es un aparato." },
            { t: "plantea", label: "Filtra acepciones", text: "«Órgano» puede ser parte del cuerpo, medio de acción o instrumento musical de viento." },
            { t: "resuelve", label: "Aplica el contexto", text: "Un órgano corporal no recibe mantenimiento de un ingeniero acústico. La acepción compatible con sonido y mantenimiento es el instrumento musical." },
            { t: "resultado", label: "Respuesta", text: "Instrumento musical de viento" }
          ],
          quick: ["La pista está en las palabras vecinas: «acústico» y «mantenimiento».", "No elijas la acepción más frecuente por costumbre."] },

        { q: "Identifique el significado de la palabra en negrita:\n«El juez desestimó la PLANTA del edificio presentada por el arquitecto.»", options: ["Plano o vista superior de una construcción", "Vegetal que crece en la tierra", "Parte inferior del pie", "Fábrica industrial"], correct: 0,
          hint: "El contexto es arquitectónico y judicial, no botánico.",
          steps: [
            { t: "dato", label: "Pista contextual", text: "La presenta un ARQUITECTO y se refiere a un edificio." },
            { t: "plantea", label: "Filtra", text: "«Planta» tiene varias acepciones: vegetal, planta del pie, fábrica y plano de construcción." },
            { t: "resuelve", label: "Aplica", text: "En arquitectura, la «planta» es el plano que muestra la distribución vista desde arriba." },
            { t: "resultado", label: "Respuesta", text: "Plano o vista superior de una construcción" }
          ],
          quick: ["Identifica el ÁMBITO profesional del texto y elige la acepción de ese campo."] },

        { q: "Identifique la CONSECUENCIA LÓGICA:\nEn un país se establecieron aranceles para algunos objetos importados. A pesar de los intentos de fomentar la producción nacional, se continúa importando celulares de todo tipo. Por lo tanto:", options: ["Probablemente los celulares importados pagan aranceles.", "Los aranceles no se aplicarán a los celulares.", "Los aranceles se aplicarán para los celulares.", "Quizá ese país reduzca los aranceles para los celulares."], correct: 0,
          hint: "La palabra «algunos» limita cuánto puedes afirmar.",
          steps: [
            { t: "dato", label: "Lee con precisión", text: "Hay aranceles para ALGUNOS objetos importados, y los celulares se siguen importando. No dice explícitamente que estén en la lista." },
            { t: "plantea", label: "Calibra la certeza", text: "Con «algunos» no cabe una conclusión categórica: debe ser PROBABLE." },
            { t: "resuelve", label: "Evalúa", text: "«Probablemente pagan aranceles» respeta ese margen ✓. Las afirmaciones categóricas no se sustentan ✗. Y una reducción futura no se menciona ✗." },
            { t: "resultado", label: "Respuesta", text: "Probablemente los celulares importados pagan aranceles." }
          ],
          quick: ["«Todos» permite conclusiones absolutas; «algunos» solo probables.", "Con premisas parciales, elige la conclusión más prudente."] },

        { q: "Lea el fragmento y responda:\n«Cuando el cerebro recibe el mensaje de que hay bacterias dañinas en el cuerpo, EMITE órdenes para que se cierren las glándulas sudoríparas.»\nEn la lectura, la palabra EMITE significa:", options: ["manda", "trae", "lleva", "espera"], correct: 0,
          hint: "Sustituye la palabra por cada opción y comprueba el sentido.",
          steps: [
            { t: "dato", label: "Función en la oración", text: "El sujeto es el cerebro y el objeto son «órdenes»: el verbo expresa producirlas y enviarlas." },
            { t: "plantea", label: "Prueba de sustitución", text: "«El cerebro MANDA órdenes» ✓. «TRAE» ✗ invierte la dirección. «LLEVA» ✗ sugiere transportar algo ajeno. «ESPERA» ✗ invierte el rol." },
            { t: "resuelve", label: "Confirma", text: "El cerebro ORIGINA las instrucciones, no las recibe ni las transporta." },
            { t: "resultado", label: "Respuesta", text: "manda" }
          ],
          quick: ["Reemplaza y lee la frase completa con cada opción.", "Verifica la dirección: emitir es hacia afuera."] },

        { q: "Complete la analogía: ______ es a tierra como armada es a ______", options: ["Infantería - mar", "Infantería - aire", "Barco - mar", "Mar - arcilla"], correct: 0,
          hint: "Piensa en las ramas de las Fuerzas Armadas y su medio de operación.",
          steps: [
            { t: "dato", label: "Par conocido", text: "La «armada» es la rama militar que opera en el agua." },
            { t: "plantea", label: "Relación", text: "Es «rama militar → medio en el que opera»." },
            { t: "resuelve", label: "Completa", text: "La rama que opera en tierra es la infantería, y el medio de la armada es el mar." },
            { t: "trampa", label: "Cuidado", text: "«Infantería - aire» falla porque la armada no opera en el aire. «Barco» es un vehículo, no una rama." },
            { t: "resultado", label: "Respuesta", text: "Infantería - mar" }
          ],
          quick: ["Infantería → tierra; armada → mar; fuerza aérea → aire.", "Si faltan DOS palabras, ambas deben encajar."] },

        { q: "Complete la oración con el conector adecuado:\n«El operativo se planificó durante semanas; ______, tuvo que suspenderse por el clima.»", options: ["sin embargo", "además", "porque", "es decir"], correct: 0,
          hint: "Determina si las dos ideas se suman o se oponen.",
          steps: [
            { t: "dato", label: "Las dos ideas", text: "Primera: se planificó mucho (positivo). Segunda: se suspendió (resultado adverso)." },
            { t: "plantea", label: "Tipo de relación", text: "Hay CONTRASTE entre el esfuerzo y el resultado, así que se necesita un conector adversativo." },
            { t: "resuelve", label: "Descarta", text: "«Además» suma ✗, «porque» indica causa ✗, «es decir» aclara ✗. Solo «sin embargo» marca oposición." },
            { t: "resultado", label: "Respuesta", text: "sin embargo" }
          ],
          quick: ["Adversativos: sin embargo, no obstante, pero, aunque.", "Causales: porque, ya que. Consecutivos: por lo tanto, así que."] },

        { q: "Seleccione el ANTÓNIMO de «efímero».", options: ["duradero", "pasajero", "breve", "momentáneo"], correct: 0,
          hint: "Tres opciones son sinónimos; elimínalas.",
          steps: [
            { t: "dato", label: "Significado", text: "«Efímero» significa que dura muy poco tiempo." },
            { t: "plantea", label: "Filtra", text: "Pasajero, breve y momentáneo son SINÓNIMOS de efímero." },
            { t: "resuelve", label: "Identifica", text: "Solo «duradero» expresa lo contrario: de larga duración." },
            { t: "resultado", label: "Respuesta", text: "duradero" }
          ],
          quick: ["Elimina primero el bloque de sinónimos evidentes; lo que sobra es el antónimo."] },

        { q: "Seleccione el SINÓNIMO de «perspicaz».", options: ["sagaz", "torpe", "lento", "distraído"], correct: 0,
          hint: "Recuerda que perspicaz implica agudeza mental.",
          steps: [
            { t: "dato", label: "Significado", text: "«Perspicaz» describe a quien comprende con agudeza y rapidez." },
            { t: "plantea", label: "Filtra", text: "Torpe, lento y distraído apuntan a lo contrario." },
            { t: "resuelve", label: "Identifica", text: "«Sagaz» significa astuto y agudo: es el sinónimo." },
            { t: "resultado", label: "Respuesta", text: "sagaz" }
          ],
          quick: ["Si tres opciones son antónimos entre sí y una es distinta, esa suele ser el sinónimo."] },

        { q: "Según su composición, ¿qué significa la palabra «inaudito»?", options: ["Que nunca antes se ha oído; insólito", "Que se escucha con mucha claridad", "Que se repite constantemente", "Que resulta muy común"], correct: 0,
          hint: "Descompón la palabra en prefijo y raíz.",
          steps: [
            { t: "dato", label: "Descomposición", text: "«in-» es prefijo de negación y «audito» se relaciona con oír." },
            { t: "plantea", label: "Une los sentidos", text: "in- (no) + audito (oído) = que no se ha oído nunca." },
            { t: "resuelve", label: "Aplica", text: "De ahí su uso como sinónimo de insólito o extraordinario." },
            { t: "resultado", label: "Respuesta", text: "Que nunca antes se ha oído; insólito" }
          ],
          quick: ["Prefijos de negación: in-, im-, i-, a-, des-.", "Descomponer la palabra evita memorizar definiciones."] },

        { q: "Según su composición, ¿qué estudia la «antropología»?", options: ["El ser humano, sus culturas y sociedades", "Los astros y el universo", "Los animales y su comportamiento", "Las rocas y los minerales"], correct: 0,
          hint: "El sufijo «-logía» siempre indica estudio.",
          steps: [
            { t: "dato", label: "Descomposición", text: "«antropo-» significa ser humano y «-logía» significa estudio o tratado." },
            { t: "resuelve", label: "Une", text: "Antropo- + -logía = estudio del ser humano, incluidas sus culturas y sociedades." },
            { t: "resultado", label: "Respuesta", text: "El ser humano, sus culturas y sociedades" }
          ],
          quick: ["Raíces clave: antropo(humano), bio(vida), geo(tierra), astro(estrellas), zoo(animales)."] },

        { q: "Identifique el SUJETO completo en: «Los aspirantes de la promoción anterior rindieron la prueba física ayer.»", options: ["Los aspirantes de la promoción anterior", "La prueba física", "Ayer", "Rindieron"], correct: 0,
          hint: "Pregunta «¿quién realiza la acción?» e incluye sus modificadores.",
          steps: [
            { t: "dato", label: "Oración", text: "«Los aspirantes de la promoción anterior rindieron la prueba física ayer.»" },
            { t: "plantea", label: "Regla", text: "El sujeto responde a «¿quién?» y concuerda en número con el verbo." },
            { t: "resuelve", label: "Aplica", text: "¿Quién rindió? Los aspirantes de la promoción anterior. El verbo «rindieron» está en plural y concuerda con ese sujeto." },
            { t: "trampa", label: "Cuidado", text: "«La prueba física» es complemento directo (responde a «¿qué?»), y «ayer» es circunstancial de tiempo." },
            { t: "resultado", label: "Respuesta", text: "Los aspirantes de la promoción anterior" }
          ],
          quick: ["El sujeto COMPLETO incluye artículos, adjetivos y complementos del nombre.", "Verifica la concordancia de número con el verbo."] },

        { q: "¿Qué tipo de oración es «Llovió durante toda la madrugada» según su sujeto?", options: ["Impersonal, sin sujeto posible", "Con sujeto tácito", "Con sujeto expreso", "Oración compuesta"], correct: 0,
          hint: "Distingue sujeto tácito (existe, no se menciona) de impersonal (no existe).",
          steps: [
            { t: "dato", label: "Oración", text: "«Llovió durante toda la madrugada.»" },
            { t: "plantea", label: "Diferencia clave", text: "Sujeto tácito: «[Yo] llegué tarde», el sujeto existe aunque no se escriba. Impersonal: no hay sujeto posible." },
            { t: "resuelve", label: "Aplica", text: "Los verbos meteorológicos (llover, nevar, granizar) no admiten sujeto: no hay nadie ni nada que «llueva»." },
            { t: "resultado", label: "Respuesta", text: "Impersonal, sin sujeto posible" }
          ],
          quick: ["Verbos meteorológicos y «haber» impersonal ⟹ oraciones SIN sujeto."] }
      ]
    },

    // ==================== RAZONAMIENTO ABSTRACTO ====================
    {
      key: "abstracto", title: "Razonamiento Abstracto",
      focus: "Series por rotación y conteo, matrices de progresión, analogías de figuras, series de letras y detección del elemento que rompe el patrón.",
      pool: [
        { q: "Observe la secuencia de figuras. La zona sombreada avanza siempre en el mismo sentido. ¿Qué figura completa la secuencia?", figure: "rotacion-serie",
          options: ["Sombreado en el cuadrante inferior izquierdo", "Sombreado en el cuadrante superior derecho", "Sombreado en el cuadrante superior izquierdo", "Sombreado en el cuadrante inferior derecho"], correct: 0,
          hint: "Rastrea un solo elemento e ignora el resto.",
          steps: [
            { t: "dato", label: "Observa", text: "El sombreado ocupa: superior izquierdo, luego superior derecho, luego inferior derecho." },
            { t: "plantea", label: "Sentido y paso", text: "Se desplaza un cuadrante por figura, en sentido horario: SI → SD → ID → …" },
            { t: "resuelve", label: "Proyecta", text: "Después del inferior derecho viene el inferior izquierdo." },
            { t: "verifica", label: "Verifica", text: "La serie recorre los cuatro cuadrantes en orden horario sin repetir: SI, SD, ID, II ✓" },
            { t: "resultado", label: "Respuesta", text: "Cuadrante inferior izquierdo." }
          ],
          quick: ["Fija un punto de referencia y sigue solo ese elemento.", "Ciclo horario de 4 posiciones: SI → SD → ID → II → SI…"] },

        { q: "En la matriz de 3 × 3, la cantidad de puntos sigue un patrón constante al leer de izquierda a derecha y de arriba hacia abajo. ¿Cuántos puntos tiene la casilla faltante?", figure: "matriz-puntos",
          options: ["9 puntos", "8 puntos", "7 puntos", "10 puntos"], correct: 0,
          hint: "Convierte las figuras en números y resuélvelo como serie.",
          steps: [
            { t: "dato", label: "Traduce", text: "En orden de lectura: 1, 2, 3, 4, 5, 6, 7, 8, y falta la novena." },
            { t: "plantea", label: "Halla la regla", text: "Cada casilla tiene un punto más que la anterior: paso +1." },
            { t: "resuelve", label: "Aplica", text: "La octava tiene 8, así que la novena tiene 8 + 1 = 9." },
            { t: "resultado", label: "Respuesta", text: "9 puntos." }
          ],
          quick: ["Toda matriz gráfica se resuelve mejor como serie numérica.", "Última casilla visible + paso = respuesta."] },

        { q: "Complete la analogía de figuras: la primera se transforma en la segunda mediante un giro. Aplique la MISMA transformación a la tercera.", figure: "analogia-giro",
          options: ["Flecha apuntando hacia la izquierda", "Flecha apuntando hacia arriba", "Flecha apuntando hacia la derecha", "Flecha apuntando hacia abajo"], correct: 0,
          hint: "Mide el ángulo del primer par y trasládalo idéntico.",
          steps: [
            { t: "dato", label: "Primer par", text: "La primera flecha apunta arriba y la segunda a la derecha." },
            { t: "plantea", label: "Mide", text: "De arriba a derecha hay un giro de 90° en sentido horario." },
            { t: "resuelve", label: "Aplica", text: "La tercera apunta abajo; girando 90° horario pasa a apuntar a la izquierda." },
            { t: "verifica", label: "Verifica", text: "Ciclo horario: arriba → derecha → abajo → izquierda → arriba ✓" },
            { t: "resultado", label: "Respuesta", text: "Flecha hacia la izquierda." }
          ],
          quick: ["Fíjate solo en la PUNTA de la flecha.", "Memoriza el ciclo horario de 90°."] },

        { q: "Observe las cuatro figuras. Tres comparten una propiedad geométrica y una no. ¿Cuál es la figura EXCLUIDA?", figure: "excluida-lados",
          options: ["El círculo", "El triángulo", "El cuadrado", "El pentágono"], correct: 0,
          hint: "Halla la propiedad que comparten TRES figuras.",
          steps: [
            { t: "dato", label: "Observa", text: "Se presentan un triángulo, un cuadrado, un pentágono y un círculo." },
            { t: "plantea", label: "Orden de revisión", text: "Revisa en este orden: tipo de línea (recta o curva), número de lados, vértices, relleno y orientación." },
            { t: "resuelve", label: "Identifica", text: "El triángulo, el cuadrado y el pentágono son POLÍGONOS: tienen lados rectos y vértices, aunque su cantidad de lados sea distinta. El círculo es una línea curva continua, sin lados ni vértices." },
            { t: "trampa", label: "Cuidado", text: "Que las tres primeras tengan distinto número de lados no importa: la propiedad común es ser polígono, no tener el mismo número de lados." },
            { t: "resultado", label: "Respuesta", text: "El círculo." }
          ],
          quick: ["Revisa primero recta vs. curva, antes de contar lados.", "La regla la definen TRES figuras; la cuarta es la respuesta."] },

        { q: "Identifique la figura que continúa la secuencia: cada figura tiene un lado más que la anterior.", figure: "serie-lados",
          options: ["Hexágono (6 lados)", "Pentágono (5 lados)", "Heptágono (7 lados)", "Octágono (8 lados)"], correct: 0,
          hint: "Cuenta los lados y trátalo como serie numérica.",
          steps: [
            { t: "dato", label: "Traduce", text: "Las figuras visibles tienen 3, 4 y 5 lados." },
            { t: "plantea", label: "Regla", text: "Serie 3, 4, 5 con diferencia constante +1." },
            { t: "resuelve", label: "Proyecta", text: "El siguiente es 5 + 1 = 6 lados: un hexágono." },
            { t: "resultado", label: "Respuesta", text: "Hexágono (6 lados)." }
          ],
          quick: ["Nombres por lados: 3 triángulo, 4 cuadrilátero, 5 pentágono, 6 hexágono, 7 heptágono, 8 octágono."] },

        { q: "¿Qué letra continúa la serie: C, F, I, L, __ ?", options: ["O", "M", "N", "P"], correct: 0,
          hint: "Convierte las letras en su posición dentro del alfabeto.",
          steps: [
            { t: "dato", label: "Traduce a números", text: "En el alfabeto español sin considerar la Ñ: C = 3, F = 6, I = 9, L = 12." },
            { t: "plantea", label: "Halla el paso", text: "Las diferencias son 6−3 = 3, 9−6 = 3, 12−9 = 3. El salto es constante de 3." },
            { t: "resuelve", label: "Proyecta", text: "La siguiente posición es 12 + 3 = 15, que corresponde a la letra O." },
            { t: "resultado", label: "Respuesta", text: "O" }
          ],
          quick: ["Numera el alfabeto (A=1, B=2, C=3…) y resuelve como serie numérica.", "Salto de 3: C, F, I, L, O, R…"] },

        { q: "¿Qué letra continúa la serie: B, D, G, K, __ ?", options: ["P", "N", "M", "O"], correct: 0,
          hint: "El salto aquí no es constante: calcula las diferencias.",
          steps: [
            { t: "dato", label: "Traduce", text: "B = 2, D = 4, G = 7, K = 11." },
            { t: "plantea", label: "Halla el patrón", text: "Diferencias: 4−2 = 2, 7−4 = 3, 11−7 = 4. El salto crece de uno en uno." },
            { t: "resuelve", label: "Proyecta", text: "El siguiente salto es 5: 11 + 5 = 16, que corresponde a la letra P." },
            { t: "resultado", label: "Respuesta", text: "P" }
          ],
          quick: ["Si el salto no es constante, calcula la diferencia de las diferencias.", "Saltos crecientes 2, 3, 4, 5…"] },

        { q: "En la serie de dominós, la mitad superior aumenta de 1 en 1 y la inferior disminuye de 1 en 1. Si los primeros son 1|5, 2|4 y 3|3, ¿cuál continúa?", options: ["4|2", "4|4", "3|2", "5|1"], correct: 0,
          hint: "Analiza las dos mitades como series independientes.",
          steps: [
            { t: "dato", label: "Observa", text: "Dominós visibles: 1|5, 2|4, 3|3." },
            { t: "plantea", label: "Separa", text: "Mitad superior: 1, 2, 3 → aumenta +1. Mitad inferior: 5, 4, 3 → disminuye −1." },
            { t: "resuelve", label: "Proyecta", text: "Superior: 3 + 1 = 4. Inferior: 3 − 1 = 2. El dominó es 4|2." },
            { t: "trampa", label: "Cuidado", text: "Nunca leas el dominó como el número «13» o «42»: son dos series separadas." },
            { t: "resultado", label: "Respuesta", text: "4|2" }
          ],
          quick: ["Dominós = dos series independientes (arriba y abajo).", "Nota que la suma se mantiene en 6 en todos: otra vía de comprobación."] },

        { q: "Tres círculos divididos en 4 partes contienen: Círculo 1 (9, 0, 3, 8); Círculo 2 (4, 6, 5, 5); Círculo 3 (7, 5, 6, X). ¿Cuál es el valor de X?", options: ["2", "5", "4", "8"], correct: 0,
          hint: "Compara la suma total de cada círculo completo.",
          steps: [
            { t: "dato", label: "Datos", text: "Círculo 1: 9, 0, 3, 8. Círculo 2: 4, 6, 5, 5. Círculo 3: 7, 5, 6, X." },
            { t: "plantea", label: "Busca el patrón", text: "Círculo 1 suma 20; círculo 2 también suma 20. La suma es constante." },
            { t: "resuelve", label: "Despeja", text: "7 + 5 + 6 + X = 20 ⟹ 18 + X = 20 ⟹ X = 2" },
            { t: "resultado", label: "Respuesta", text: "X = 2" }
          ],
          quick: ["En figuras con números, prueba primero la SUMA constante.", "Confirma el patrón en DOS figuras completas antes de aplicarlo."] },

        { q: "En una matriz de 2 filas, la tercera casilla de cada fila se obtiene sumando las dos primeras. Si la primera fila es (4, 5, 9) y la segunda es (6, X, 11), ¿cuál es el valor de X?", options: ["5", "6", "4", "17"], correct: 0,
          hint: "Deduce la regla con la fila completa y aplícala a la incompleta.",
          steps: [
            { t: "dato", label: "Datos", text: "Fila 1: 4, 5, 9. Fila 2: 6, X, 11." },
            { t: "plantea", label: "Verifica la regla", text: "En la fila completa: 4 + 5 = 9 ✓. La regla es sumar las dos primeras casillas." },
            { t: "resuelve", label: "Despeja", text: "6 + X = 11 ⟹ X = 11 − 6 = 5" },
            { t: "resultado", label: "Respuesta", text: "X = 5" }
          ],
          quick: ["Usa siempre la fila o columna COMPLETA para hallar la regla.", "Luego despeja en la fila con el hueco."] },

        { q: "¿Qué número continúa la serie: 2, 6, 12, 20, 30, __ ?", options: ["42", "40", "36", "45"], correct: 0,
          hint: "Calcula las diferencias entre términos consecutivos.",
          steps: [
            { t: "dato", label: "Serie", text: "2, 6, 12, 20, 30." },
            { t: "plantea", label: "Halla las diferencias", text: "6−2 = 4, 12−6 = 6, 20−12 = 8, 30−20 = 10. Las diferencias crecen de 2 en 2." },
            { t: "resuelve", label: "Proyecta", text: "La siguiente diferencia es 12: 30 + 12 = 42." },
            { t: "verifica", label: "Verifica", text: "Otra vía: cada término es n(n+1) → 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42 ✓" },
            { t: "resultado", label: "Respuesta", text: "42" }
          ],
          quick: ["Si las diferencias no son constantes, calcula la segunda diferencia.", "Reconoce el patrón n(n+1): 2, 6, 12, 20, 30, 42."] },

        { q: "¿Qué número continúa la serie: 3, 6, 12, 24, __ ?", options: ["48", "36", "42", "30"], correct: 0,
          hint: "Prueba primero si hay una razón constante en lugar de una diferencia.",
          steps: [
            { t: "dato", label: "Serie", text: "3, 6, 12, 24." },
            { t: "plantea", label: "Prueba la razón", text: "6 ÷ 3 = 2, 12 ÷ 6 = 2, 24 ÷ 12 = 2. Cada término es el doble del anterior." },
            { t: "resuelve", label: "Proyecta", text: "24 × 2 = 48." },
            { t: "resultado", label: "Respuesta", text: "48" }
          ],
          quick: ["Si los términos crecen rápido, prueba MULTIPLICACIÓN antes que suma.", "Progresión geométrica de razón 2."] },

        { q: "Identifique la figura EXCLUIDA por su número de lados: CUADRADO, ROMBO, TRAPECIO, TRIÁNGULO.", options: ["TRIÁNGULO", "CUADRADO", "ROMBO", "TRAPECIO"], correct: 0,
          hint: "Cuenta cuántos lados tiene cada figura nombrada.",
          steps: [
            { t: "dato", label: "Cuenta los lados", text: "Cuadrado: 4 lados. Rombo: 4 lados. Trapecio: 4 lados. Triángulo: 3 lados." },
            { t: "plantea", label: "Busca lo común", text: "Tres de las figuras son cuadriláteros, es decir, tienen exactamente 4 lados." },
            { t: "resuelve", label: "Identifica", text: "El triángulo es el único con 3 lados, así que no pertenece al grupo de los cuadriláteros." },
            { t: "trampa", label: "Cuidado", text: "El rombo y el trapecio no parecen cuadrados, pero igual tienen 4 lados. La forma no importa: lo decisivo es el conteo." },
            { t: "resultado", label: "Respuesta", text: "TRIÁNGULO" }
          ],
          quick: ["Traduce cada nombre a su número de lados antes de comparar.", "Cuadriláteros frecuentes: cuadrado, rectángulo, rombo, trapecio, paralelogramo."] },

        { q: "En una analogía de figuras, la primera tiene 2 puntos y se transforma en una de 6 puntos. Si la tercera figura tiene 3 puntos, ¿cuántos puntos tendrá su transformada?",
          options: ["9 puntos", "7 puntos", "6 puntos", "12 puntos"], correct: 0,
          hint: "Prueba si la transformación es una suma o una multiplicación.",
          steps: [
            { t: "dato", label: "Primer par", text: "2 puntos → 6 puntos." },
            { t: "plantea", label: "Determina la operación", text: "Podría ser +4 o ×3. Hay que decidir con criterio: en analogías de figuras, la proporción suele mantenerse." },
            { t: "resuelve", label: "Aplica ×3", text: "Si la regla es multiplicar por 3: 3 × 3 = 9 puntos." },
            { t: "verifica", label: "Verifica", text: "La relación 2:6 es la misma que 3:9, ambas equivalen a triplicar ✓" },
            { t: "resultado", label: "Respuesta", text: "9 puntos." }
          ],
          quick: ["En analogías, prefiere la relación PROPORCIONAL (×) sobre la aditiva (+).", "2:6 = 3:9, ambas son ×3."] },

        { q: "¿Qué número continúa la serie: 1, 4, 9, 16, 25, __ ?", options: ["36", "30", "32", "49"], correct: 0,
          hint: "Estos números tienen una propiedad muy reconocible.",
          steps: [
            { t: "dato", label: "Serie", text: "1, 4, 9, 16, 25." },
            { t: "plantea", label: "Reconoce el patrón", text: "Son cuadrados perfectos: 1², 2², 3², 4², 5²." },
            { t: "resuelve", label: "Proyecta", text: "El siguiente es 6² = 36." },
            { t: "verifica", label: "Verifica", text: "Las diferencias son 3, 5, 7, 9 (impares consecutivos), y la siguiente es 11: 25 + 11 = 36 ✓" },
            { t: "resultado", label: "Respuesta", text: "36" }
          ],
          quick: ["Memoriza los cuadrados: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.", "Sus diferencias son los impares consecutivos."] },

        { q: "¿Qué número continúa la serie: 2, 3, 5, 8, 13, __ ?", options: ["21", "18", "20", "26"], correct: 0,
          hint: "Cada término se relaciona con los DOS anteriores.",
          steps: [
            { t: "dato", label: "Serie", text: "2, 3, 5, 8, 13." },
            { t: "plantea", label: "Prueba la suma de anteriores", text: "2 + 3 = 5 ✓, 3 + 5 = 8 ✓, 5 + 8 = 13 ✓. Es una secuencia tipo Fibonacci." },
            { t: "resuelve", label: "Proyecta", text: "8 + 13 = 21." },
            { t: "resultado", label: "Respuesta", text: "21" }
          ],
          quick: ["Si ni la diferencia ni la razón son constantes, prueba SUMAR los dos términos anteriores.", "8 + 13 = 21."] },

        { q: "¿Qué par de letras continúa la serie: AZ, BY, CX, __ ?", options: ["DW", "DX", "EW", "CW"], correct: 0,
          hint: "Analiza la primera y la segunda letra como series independientes.",
          steps: [
            { t: "dato", label: "Serie", text: "AZ, BY, CX, y falta el siguiente par." },
            { t: "plantea", label: "Separa las dos series", text: "Primeras letras: A, B, C → avanzan hacia adelante en el alfabeto. Segundas letras: Z, Y, X → retroceden desde el final." },
            { t: "resuelve", label: "Proyecta cada una", text: "Después de C viene D. Después de X, retrocediendo, viene W. El par es DW." },
            { t: "resultado", label: "Respuesta", text: "DW" }
          ],
          quick: ["Pares de letras = dos series independientes.", "Una avanza desde A y la otra retrocede desde Z."] },

        { q: "En una matriz de 2 filas, la tercera casilla se obtiene multiplicando las dos primeras. Si la primera fila es (3, 4, 12) y la segunda es (5, X, 35), ¿cuál es el valor de X?", options: ["7", "6", "8", "30"], correct: 0,
          hint: "Confirma la regla con la fila completa antes de despejar.",
          steps: [
            { t: "dato", label: "Datos", text: "Fila 1: 3, 4, 12. Fila 2: 5, X, 35." },
            { t: "plantea", label: "Verifica la regla", text: "En la fila completa: 3 × 4 = 12 ✓. La regla es multiplicar las dos primeras casillas." },
            { t: "resuelve", label: "Despeja", text: "5 × X = 35 ⟹ X = 35 ÷ 5 = 7" },
            { t: "resultado", label: "Respuesta", text: "X = 7" }
          ],
          quick: ["Deduce la regla en la fila COMPLETA y despeja en la incompleta.", "Prueba suma y luego multiplicación: solo una encaja."] },

        { q: "En la serie de dominós la suma de ambas mitades es siempre 8. Si los primeros son 2|6 y 3|5, ¿cuál continúa la secuencia manteniendo el patrón de la mitad superior?", options: ["4|4", "5|3", "4|5", "3|6"], correct: 0,
          hint: "Usa las dos condiciones: la suma constante y la progresión superior.",
          steps: [
            { t: "dato", label: "Observa", text: "Dominós visibles: 2|6 (suma 8) y 3|5 (suma 8)." },
            { t: "plantea", label: "Dos condiciones", text: "La mitad superior avanza 2, 3, … es decir +1. Y la suma de ambas mitades siempre es 8." },
            { t: "resuelve", label: "Aplica ambas", text: "La superior siguiente es 4. Para que la suma sea 8, la inferior es 8 − 4 = 4. El dominó es 4|4." },
            { t: "verifica", label: "Verifica", text: "4 + 4 = 8 ✓ y la superior siguió la progresión 2, 3, 4 ✓" },
            { t: "resultado", label: "Respuesta", text: "4|4" }
          ],
          quick: ["Cuando hay dos condiciones, resuelve una y usa la otra para comprobar.", "Superior +1 y suma fija 8 ⟹ 4|4."] },

        { q: "Un cubo se pinta completamente de rojo por fuera y luego se corta en 27 cubos pequeños iguales (3 × 3 × 3). ¿Cuántos cubos pequeños quedan sin ninguna cara pintada?", options: ["1", "6", "8", "12"], correct: 0,
          hint: "Solo queda sin pintar lo que no toca ninguna cara exterior.",
          steps: [
            { t: "dato", label: "Datos", text: "Cubo pintado por fuera y dividido en 3 × 3 × 3 = 27 cubos pequeños." },
            { t: "plantea", label: "Razona la posición", text: "Un cubo pequeño queda sin pintar solo si no toca ninguna cara externa, es decir, si está totalmente en el interior." },
            { t: "resuelve", label: "Calcula el interior", text: "El bloque interior mide (3−2) × (3−2) × (3−2) = 1 × 1 × 1 = 1 cubo (el del centro exacto)." },
            { t: "verifica", label: "Verifica", text: "Fórmula general para n × n × n: los cubos sin pintar son (n−2)³. Con n = 3: 1³ = 1 ✓" },
            { t: "resultado", label: "Respuesta", text: "1 cubo." }
          ],
          quick: ["Fórmula: cubos sin pintar = (n−2)³.", "Con n=3 → 1; con n=4 → 8; con n=5 → 27."] }
      ]
    },

    // ==================== CONOCIMIENTOS GENERALES ====================
    {
      key: "generales", title: "Conocimientos Generales",
      focus: "Historia universal y del Ecuador, geografía, ciencias naturales, literatura, cívica y símbolos nacionales.",
      pool: [
        { q: "¿Qué invento marcó el inicio de la Revolución Industrial?", options: ["La máquina de vapor", "El teléfono", "La rueda", "La computadora"], correct: 0,
          hint: "Ubica el siglo y descarta los inventos de otras épocas.",
          steps: [
            { t: "dato", label: "Período", text: "La Revolución Industrial comenzó en Inglaterra a mediados del siglo XVIII." },
            { t: "plantea", label: "Descarta por época", text: "La rueda es prehistórica, el teléfono es de 1876 y la computadora del siglo XX." },
            { t: "resuelve", label: "Explica el impacto", text: "La máquina de vapor, perfeccionada por James Watt, permitió mecanizar la producción y transformar el transporte." },
            { t: "resultado", label: "Respuesta", text: "La máquina de vapor." }
          ],
          quick: ["Revolución Industrial = siglo XVIII, Inglaterra, máquina de vapor (James Watt).", "Consecuencias: migración campo-ciudad y aparición de la clase obrera."] },

        { q: "¿Qué científico inglés viajó a bordo del Beagle y visitó las Islas Galápagos en 1835?", options: ["Charles Darwin", "Alexander von Humboldt", "Gregor Mendel", "Isaac Newton"], correct: 0,
          hint: "Es el dato de cultura general con mayor conexión ecuatoriana.",
          steps: [
            { t: "dato", label: "Claves", text: "Científico inglés, viaje en el HMS Beagle, visita a Galápagos en 1835." },
            { t: "plantea", label: "Descarta", text: "Humboldt fue alemán y no viajó en el Beagle. Mendel fue austríaco, padre de la genética. Newton pertenece al siglo XVII." },
            { t: "resuelve", label: "Conecta", text: "Darwin observó las variaciones entre pinzones y tortugas de distintas islas, base de la selección natural." },
            { t: "resultado", label: "Respuesta", text: "Charles Darwin." }
          ],
          quick: ["Cadena: Darwin → Beagle → Galápagos (1835) → «El origen de las especies» (1859).", "Galápagos: Patrimonio Natural de la Humanidad en 1978."] },

        { q: "¿Qué conflicto histórico enfrentó Galileo Galilei a raíz de sus observaciones astronómicas?", options: ["Conflicto con la Iglesia por defender el heliocentrismo", "Disputa con Newton por la ley de la gravedad", "Persecución por sus teorías geológicas", "Problemas legales por inventar la bomba de agua"], correct: 0,
          hint: "Recuerda qué modelo del universo sostenía la Iglesia entonces.",
          steps: [
            { t: "dato", label: "Contexto", text: "Galileo (1564-1642) perfeccionó el telescopio y observó las fases de Venus y las lunas de Júpiter." },
            { t: "plantea", label: "El choque", text: "Sus observaciones respaldaban el HELIOCENTRISMO de Copérnico, mientras la Iglesia sostenía el GEOCENTRISMO." },
            { t: "resuelve", label: "Desenlace", text: "Fue juzgado por la Inquisición en 1633, obligado a retractarse y condenado a arresto domiciliario." },
            { t: "trampa", label: "Cuidado", text: "Newton nació el año en que Galileo murió: no pudieron disputar entre ellos." },
            { t: "resultado", label: "Respuesta", text: "Conflicto con la Iglesia por el heliocentrismo." }
          ],
          quick: ["Heliocentrismo = Sol al centro (Copérnico, Galileo). Geocentrismo = Tierra al centro.", "Galileo: telescopio, juicio de 1633."] },

        { q: "¿Cuál es la capital de la provincia de Chimborazo?", options: ["Riobamba", "Guano", "Alausí", "Chambo"], correct: 0,
          hint: "Es la ciudad de esa provincia con mayor peso histórico.",
          steps: [
            { t: "dato", label: "Ubicación", text: "Chimborazo está en la Sierra centro del Ecuador y toma su nombre del volcán homónimo." },
            { t: "plantea", label: "Distingue", text: "Guano, Alausí y Chambo son cantones de la provincia, pero no la capital." },
            { t: "resuelve", label: "Identifica", text: "La capital es Riobamba, «la Sultana de los Andes», donde se redactó la primera Constitución del Ecuador en 1830." },
            { t: "resultado", label: "Respuesta", text: "Riobamba." }
          ],
          quick: ["Riobamba = capital de Chimborazo + primera Constitución (1830).", "El Chimborazo es la montaña más alta del Ecuador."] },

        { q: "Respecto del Himno Nacional del Ecuador, ¿quién escribió la LETRA y quién compuso la MÚSICA?", options: ["Letra: Juan León Mera; música: Antonio Neumane", "Letra: Antonio Neumane; música: Juan León Mera", "Letra: Juan Montalvo; música: Antonio Neumane", "Letra: Juan León Mera; música: Eugenio Espejo"], correct: 0,
          hint: "Uno de los autores escribió también «Cumandá».",
          steps: [
            { t: "dato", label: "Dos roles", text: "El himno tiene un autor para la letra y otro distinto para la música." },
            { t: "plantea", label: "La letra", text: "La escribió Juan León Mera, ambateño, autor también de la novela «Cumandá»." },
            { t: "resuelve", label: "La música", text: "La compuso Antonio Neumane, músico de origen extranjero radicado en Ecuador." },
            { t: "trampa", label: "Cuidado", text: "Invertir los roles es la trampa más común. Montalvo (ensayista) y Espejo (precursor) no participaron." },
            { t: "resultado", label: "Respuesta", text: "Letra: Juan León Mera; música: Antonio Neumane." }
          ],
          quick: ["Mnemotecnia: Mera escribe (letra); Neumane suena (música)."] },

        { q: "El verdadero nombre de Eugenio Espejo, precursor de la independencia ecuatoriana, fue:", options: ["Francisco Javier Eugenio de Santa Cruz y Espejo", "Francisco Eugenio Espejo Aldás", "Javier Eugenio de la Cruz Espejo", "Eugenio Francisco de Santa Cruz Montalvo"], correct: 0,
          hint: "Su apellido incluye «Santa Cruz».",
          steps: [
            { t: "dato", label: "Contexto", text: "Espejo (1747-1795) fue médico, escritor y periodista quiteño, precursor ideológico de la independencia." },
            { t: "plantea", label: "Reconstruye", text: "Su nombre completo era Francisco Javier Eugenio de Santa Cruz y Espejo." },
            { t: "resuelve", label: "Descarta", text: "Las otras opciones alteran el orden o agregan apellidos ajenos, como Montalvo." },
            { t: "resultado", label: "Respuesta", text: "Francisco Javier Eugenio de Santa Cruz y Espejo." }
          ],
          quick: ["Espejo: precursor + fundó «Primicias de la Cultura de Quito» (1792), primer periódico del país."] },

        { q: "Según la Constitución de 2008, ¿cuántas Funciones del Estado tiene el Ecuador?", options: ["Cinco: Ejecutiva, Legislativa, Judicial, Electoral, y de Transparencia y Control Social", "Tres: Ejecutiva, Legislativa y Judicial", "Cuatro: las tres clásicas más la Electoral", "Dos: Ejecutiva y Legislativa"], correct: 0,
          hint: "El esquema de Montesquieu fue ampliado en Montecristi.",
          steps: [
            { t: "dato", label: "Punto de partida", text: "La teoría clásica contempla tres poderes: Ejecutivo, Legislativo y Judicial." },
            { t: "plantea", label: "La ampliación", text: "La Constitución de 2008 añadió dos funciones nuevas al esquema tradicional." },
            { t: "resuelve", label: "Enumera", text: "Ejecutiva, Legislativa, Judicial, Electoral, y de Transparencia y Control Social." },
            { t: "trampa", label: "Cuidado", text: "«Tres» es correcto para la teoría general, pero incorrecto para Ecuador. Fíjate qué preguntan." },
            { t: "resultado", label: "Respuesta", text: "Cinco funciones." }
          ],
          quick: ["Ecuador 2008 = 5 funciones.", "Otras claves: Estado intercultural y plurinacional, derechos de la naturaleza."] },

        { q: "¿Cuál es la organización territorial del Ecuador, de mayor a menor?", options: ["Región → Provincia → Cantón → Parroquia", "Provincia → Región → Cantón → Parroquia", "Cantón → Provincia → Parroquia → Región", "Provincia → Cantón → Región → Parroquia"], correct: 0,
          hint: "Ubica la unidad más pequeña y reconstruye hacia arriba.",
          steps: [
            { t: "dato", label: "Unidades", text: "Región, provincia, cantón y parroquia." },
            { t: "plantea", label: "Ancla los extremos", text: "La parroquia es la MÁS PEQUEÑA y la región la MÁS GRANDE. Eso descarta tres opciones." },
            { t: "resuelve", label: "Ordena", text: "Una región agrupa provincias; una provincia se divide en cantones; un cantón en parroquias." },
            { t: "resultado", label: "Respuesta", text: "Región → Provincia → Cantón → Parroquia." }
          ],
          quick: ["Ecuador tiene 24 provincias; la parroquia es el nivel más local."] },

        { q: "Ordene cronológicamente: I. Batalla de Pichincha. II. Primer Grito de Independencia en Quito. III. Ecuador se separa de la Gran Colombia. IV. Independencia de Guayaquil.", options: ["II, IV, I, III", "I, II, III, IV", "II, I, IV, III", "IV, II, I, III"], correct: 0,
          hint: "Ancla cada hito a su año y ordena los números.",
          steps: [
            { t: "dato", label: "Asigna los años", text: "Primer Grito: 10 de agosto de 1809. Independencia de Guayaquil: 9 de octubre de 1820. Pichincha: 24 de mayo de 1822. Separación de la Gran Colombia: 1830." },
            { t: "plantea", label: "Ordena", text: "1809 (II) → 1820 (IV) → 1822 (I) → 1830 (III)." },
            { t: "resuelve", label: "Lógica del proceso", text: "El primer intento fracasa en 1809. Guayaquil se independiza en 1820 y organiza la campaña a la Sierra. Pichincha sella la independencia en 1822. La república nace en 1830." },
            { t: "trampa", label: "Cuidado", text: "1822 es la independencia de España; 1830 el nacimiento de la República. Son hechos distintos." },
            { t: "resultado", label: "Respuesta", text: "II, IV, I, III" }
          ],
          quick: ["Cadena: 1809 → 1820 → 1822 → 1830.", "Pichincha la comandó Antonio José de Sucre."] },

        { q: "¿Qué general dirigió las fuerzas patriotas en la Batalla de Pichincha de 1822?", options: ["Antonio José de Sucre", "Simón Bolívar", "José de San Martín", "Eloy Alfaro"], correct: 0,
          hint: "Fue el lugarteniente de Bolívar, y la antigua moneda llevó su nombre.",
          steps: [
            { t: "dato", label: "Contexto", text: "La Batalla de Pichincha, del 24 de mayo de 1822, selló la independencia de Quito." },
            { t: "plantea", label: "Distingue", text: "Bolívar lideraba el proyecto independentista general, pero no comandó personalmente esta batalla." },
            { t: "resuelve", label: "Identifica", text: "Antonio José de Sucre, lugarteniente de Bolívar, comandó las fuerzas patriotas." },
            { t: "resultado", label: "Respuesta", text: "Antonio José de Sucre." }
          ],
          quick: ["Pichincha (1822) = Sucre. La antigua moneda ecuatoriana llevaba su nombre."] },

        { q: "¿Qué experimento comprobó experimentalmente la teoría de Oparin-Haldane sobre el origen de la vida?", options: ["El experimento de Miller-Urey", "El experimento de Pasteur", "La teoría de la primera proteína", "La teoría creacionista"], correct: 0,
          hint: "Distingue quién PROPUSO la hipótesis de quién la COMPROBÓ.",
          steps: [
            { t: "dato", label: "Separa los roles", text: "Oparin y Haldane PROPUSIERON que la vida surgió de compuestos inorgánicos. Se pide el experimento que lo comprobó." },
            { t: "plantea", label: "El montaje", text: "En 1953, Miller y Urey simularon la atmósfera primitiva (metano, amoníaco, hidrógeno y vapor de agua) con descargas eléctricas." },
            { t: "resuelve", label: "El resultado", text: "Obtuvieron aminoácidos: moléculas orgánicas a partir de materia inorgánica." },
            { t: "trampa", label: "Cuidado", text: "Pasteur refutó la generación espontánea, que es un asunto distinto." },
            { t: "resultado", label: "Respuesta", text: "El experimento de Miller-Urey." }
          ],
          quick: ["Oparin-Haldane propone; Miller-Urey comprueba (1953, aminoácidos)."] },

        { q: "Son plastidios pigmentados que NO poseen clorofila pero retienen carotenoides, responsables de los colores amarillo, naranja y rojo de flores y frutos. ¿Qué son?", options: ["Cromoplastos", "Cloroplastos", "Leucoplastos", "Mitocondrias"], correct: 0,
          hint: "El prefijo de la palabra indica su función: «cromo».",
          steps: [
            { t: "dato", label: "Claves", text: "Plastidio, pigmentado, SIN clorofila, con carotenoides, colores cálidos." },
            { t: "plantea", label: "Etimología", text: "«Cromo-» significa color: cromoplasto es el plastidio de color distinto al verde." },
            { t: "resuelve", label: "Descarta", text: "Los cloroplastos tienen clorofila y hacen fotosíntesis. Los leucoplastos son incoloros y almacenan reservas. Las mitocondrias no son plastidios." },
            { t: "resultado", label: "Respuesta", text: "Cromoplastos." }
          ],
          quick: ["Cloroplasto (verde), cromoplasto (colores cálidos), leucoplasto (incoloro, reserva)."] },

        { q: "La formación «árbol de piedra», en Bolivia, se formó por rocas volcánicas desgastadas y esculpidas por el viento cargado de arena. ¿Qué proceso la originó?", options: ["Erosión", "Meteorización", "Consolidación", "Eutrofización"], correct: 0,
          hint: "Distingue el proceso que solo desgasta del que además transporta.",
          steps: [
            { t: "dato", label: "El agente", text: "Viento cargado de arena actuando de forma continua sobre la roca." },
            { t: "plantea", label: "Diferencia clave", text: "La METEORIZACIÓN descompone la roca en el mismo sitio, sin transporte. La EROSIÓN implica desgaste MÁS transporte." },
            { t: "resuelve", label: "Aplica", text: "El viento arrastra la arena que esculpe y retira el material desprendido: es erosión eólica." },
            { t: "resultado", label: "Respuesta", text: "Erosión." }
          ],
          quick: ["Erosión = desgaste + TRANSPORTE. Meteorización = alteración en el sitio."] },

        { q: "Un móvil recorre 240 m en 30 s con movimiento rectilíneo uniforme. ¿Cuál es su velocidad y qué distancia recorrerá en 45 s?", options: ["8 m/s y 360 m", "8 m/s y 320 m", "6 m/s y 270 m", "12 m/s y 540 m"], correct: 0,
          hint: "La velocidad es la relación entre distancia y tiempo.",
          steps: [
            { t: "dato", label: "Datos", text: "d = 240 m; t = 30 s; movimiento uniforme (velocidad constante)." },
            { t: "plantea", label: "Fórmula", text: "v = [[d/t]]" },
            { t: "resuelve", label: "Calcula v", text: "v = 240 ÷ 30 = 8 m/s" },
            { t: "resuelve", label: "Calcula d", text: "d = v × t = 8 × 45 = 360 m" },
            { t: "verifica", label: "Verifica", text: "45 s es 1,5 veces 30 s, así que 240 × 1,5 = 360 m ✓" },
            { t: "resultado", label: "Respuesta", text: "8 m/s y 360 m." }
          ],
          quick: ["v = d÷t; d = v×t; t = d÷v.", "Atajo proporcional: si el tiempo se multiplica por 1,5, la distancia también."] },

        { q: "El mono araña, dispersor de semillas del bosque húmedo tropical, está en peligro por captura indiscriminada y expansión agrícola. ¿Qué estrategias reducen estos efectos?\n1. Educación ambiental con las comunidades.\n2. Aumentar el turismo recreativo.\n3. Investigar y monitorear la población.\n4. Regular las temporadas de caza.", options: ["1 y 3", "2 y 4", "1 y 4", "2 y 3"], correct: 0,
          hint: "Descarta cualquier medida que mantenga la presión sobre la especie.",
          steps: [
            { t: "dato", label: "Amenazas", text: "Captura indiscriminada y expansión agrícola, sobre una especie con pocos individuos." },
            { t: "plantea", label: "Evalúa", text: "La 1 actúa sobre la causa humana ✓. La 3 permite decisiones de manejo informadas ✓." },
            { t: "resuelve", label: "Descarta", text: "La 2 aumentaría la presión sobre una especie vulnerable ✗. La 4 es inaceptable: en peligro de extinción no se admite caza en ninguna temporada ✗." },
            { t: "trampa", label: "Cuidado", text: "«Regular la caza» suena responsable, y ahí está la trampa: debe prohibirse, no regularse." },
            { t: "resultado", label: "Respuesta", text: "1 y 3." }
          ],
          quick: ["Prioriza educación, investigación y protección del hábitat.", "Si una alternativa es inválida, elimina todas las combinaciones que la contienen."] },

        { q: "Cientos de toneladas de residuos tecnológicos llegan cada mes a países pobres de África, enviados por naciones ricas bajo la etiqueta de «material de segunda mano». ¿Qué situación evidencia esta práctica?", options: ["La externalización del deterioro ambiental por los países industrializados.", "La especialización de las economías pobres en el reciclaje tecnológico.", "La inexistencia de legislación ambiental en los países industrializados.", "Un intento efectivo de reducir la brecha digital."], correct: 0,
          hint: "Pregúntate quién genera el problema y dónde termina su costo.",
          steps: [
            { t: "dato", label: "Los hechos", text: "Los países ricos producen los residuos, pero estos terminan en países pobres bajo una etiqueta que disimula su naturaleza." },
            { t: "plantea", label: "Nombra el fenómeno", text: "Trasladar a otro país el costo ambiental del propio consumo se llama EXTERNALIZACIÓN." },
            { t: "resuelve", label: "Descarta", text: "No hay especialización en reciclaje: llegan como desecho. No es falta de legislación: precisamente por las normas estrictas se exportan. Y no reduce la brecha digital: son aparatos obsoletos." },
            { t: "resultado", label: "Respuesta", text: "La externalización del deterioro ambiental." }
          ],
          quick: ["Identifica quién produce el daño y quién carga la consecuencia.", "Descarta opciones que presenten el hecho como beneficioso."] },

        { q: "Tras un golpe de Estado, una Junta Militar decreta censura de prensa, clausura el Congreso, declara estado de sitio, ilegaliza la central sindical y anula los registros electorales. ¿Con qué característica se relacionan estas medidas?", options: ["Con la suspensión de los derechos civiles y políticos.", "Con la distribución del poder estatal en distintos órganos.", "Con la concentración del poder para evitar arbitrariedades.", "Con la legitimación del gobierno mediante reformas constitucionales."], correct: 0,
          hint: "Traduce cada medida al derecho concreto que elimina.",
          steps: [
            { t: "dato", label: "Traduce", text: "Censura elimina la libertad de expresión. Clausurar el Congreso elimina la representación. Ilegalizar el sindicato elimina la libertad de asociación. Anular registros elimina el sufragio." },
            { t: "plantea", label: "Agrupa", text: "Todas apuntan a la eliminación sistemática de derechos civiles y políticos." },
            { t: "resuelve", label: "Descarta", text: "«Distribución del poder» es lo opuesto. «Evitar arbitrariedades» es contradictorio. Y no hay reformas constitucionales, sino decretos militares." },
            { t: "resultado", label: "Respuesta", text: "Con la suspensión de los derechos civiles y políticos." }
          ],
          quick: ["Convierte cada medida en el derecho que suprime.", "Sospecha del lenguaje positivo en contextos represivos."] },

        { q: "¿Cuál es el río más largo del mundo según las mediciones actuales?", options: ["Amazonas", "Nilo", "Misisipi", "Yangtsé"], correct: 0,
          hint: "El dato cambió con las mediciones modernas de su nacimiento.",
          steps: [
            { t: "dato", label: "Los candidatos", text: "Históricamente el título se disputó entre el Nilo y el Amazonas." },
            { t: "plantea", label: "El cambio", text: "Las mediciones modernas del nacimiento del Amazonas en Perú modificaron el criterio." },
            { t: "resuelve", label: "Resuelve", text: "El Amazonas alcanza unos 6 992 km y supera al Nilo. Además es, sin discusión, el más caudaloso del planeta." },
            { t: "resultado", label: "Respuesta", text: "Amazonas." }
          ],
          quick: ["Amazonas = el más largo Y el más caudaloso. El Nilo es segundo."] },

        { q: "¿Cuál es la montaña más alta del Ecuador?", options: ["Chimborazo", "Cotopaxi", "Cayambe", "Tungurahua"], correct: 0,
          hint: "Su cumbre tiene además un récord planetario curioso.",
          steps: [
            { t: "dato", label: "Contexto", text: "Ecuador tiene numerosos volcanes en la Sierra, en la llamada Avenida de los Volcanes." },
            { t: "plantea", label: "Criterio", text: "Se pide la mayor altitud sobre el nivel del mar." },
            { t: "resuelve", label: "Identifica", text: "El Chimborazo alcanza unos 6 263 m. Por el abultamiento ecuatorial de la Tierra, su cumbre es además el punto más alejado del centro del planeta." },
            { t: "resultado", label: "Respuesta", text: "Chimborazo." }
          ],
          quick: ["Chimborazo: el más alto del Ecuador y el punto más lejano del centro de la Tierra.", "Cotopaxi es el segundo más alto."] },

        { q: "¿Cuáles son las regiones naturales continentales del Ecuador?", options: ["Costa, Sierra y Amazonía", "Norte, Centro y Sur", "Andina, Pacífica y Atlántica", "Tropical, Templada y Fría"], correct: 0,
          hint: "La Cordillera de los Andes define la división.",
          steps: [
            { t: "dato", label: "Contexto", text: "Se piden las regiones naturales del Ecuador continental, sin contar Galápagos." },
            { t: "plantea", label: "El criterio", text: "La Cordillera de los Andes divide el territorio en tres franjas con clima y geografía distintos." },
            { t: "resuelve", label: "Enumera", text: "Al oeste de los Andes, la Costa; en el centro, la Sierra; al este, la Amazonía." },
            { t: "resultado", label: "Respuesta", text: "Costa, Sierra y Amazonía." }
          ],
          quick: ["3 regiones continentales + la Insular (Galápagos) si se cuenta aparte."] },

        { q: "¿Quién escribió «Huasipungo», novela clave del indigenismo ecuatoriano?", options: ["Jorge Icaza", "Juan Montalvo", "Juan León Mera", "José de la Cuadra"], correct: 0,
          hint: "Es la obra ecuatoriana de denuncia social más conocida internacionalmente.",
          steps: [
            { t: "dato", label: "Contexto", text: "Novela de 1934 que denuncia la explotación del indígena en el sistema de hacienda." },
            { t: "plantea", label: "Corriente", text: "Es la obra más representativa del realismo social e indigenismo en Ecuador." },
            { t: "resuelve", label: "Identifica", text: "Su autor es Jorge Icaza, cuya obra tuvo gran repercusión internacional." },
            { t: "resultado", label: "Respuesta", text: "Jorge Icaza." }
          ],
          quick: ["Icaza → Huasipungo. Mera → Cumandá e Himno. Montalvo → ensayo."] },

        { q: "¿Qué significa que el Ecuador sea un Estado laico?", options: ["Es independiente de cualquier religión y garantiza la libertad de culto", "Impone una religión oficial a sus ciudadanos", "Prohíbe toda práctica religiosa", "Es gobernado por autoridades religiosas"], correct: 0,
          hint: "Laicidad es neutralidad, no prohibición.",
          steps: [
            { t: "dato", label: "Concepto", text: "Un Estado laico no se identifica con ninguna religión en particular." },
            { t: "plantea", label: "Precisa", text: "Laico no significa ateo ni antirreligioso: significa neutral." },
            { t: "resuelve", label: "Aplica", text: "El Estado se mantiene independiente, sin imponer ni prohibir religión alguna, y garantiza la libertad de culto." },
            { t: "resultado", label: "Respuesta", text: "Es independiente de cualquier religión y garantiza la libertad de culto." }
          ],
          quick: ["Laico = neutralidad religiosa del Estado, no ausencia de religión en la sociedad."] },

        { q: "¿A partir de qué edad el voto es OBLIGATORIO en Ecuador?", options: ["18 años", "16 años", "21 años", "25 años"], correct: 0,
          hint: "Hay un tramo en que el voto es facultativo, antes y después.",
          steps: [
            { t: "dato", label: "Contexto", text: "En Ecuador el voto es facultativo para los jóvenes de 16 y 17 años y para los mayores de 65." },
            { t: "plantea", label: "La pregunta", text: "Se pide la edad desde la cual el voto pasa a ser obligatorio." },
            { t: "resuelve", label: "Identifica", text: "Es obligatorio a partir de los 18 años y hasta los 65." },
            { t: "resultado", label: "Respuesta", text: "18 años." }
          ],
          quick: ["Facultativo: 16-17 y más de 65. Obligatorio: 18-65."] },

        { q: "¿Qué organismo internacional se creó en 1945 para promover la paz y la cooperación entre naciones?", options: ["La Organización de las Naciones Unidas (ONU)", "La Liga de las Naciones", "La OTAN", "La Unión Europea"], correct: 0,
          hint: "Reemplazó a un organismo anterior que había fracasado.",
          steps: [
            { t: "dato", label: "Contexto", text: "Al terminar la Segunda Guerra Mundial, la Liga de las Naciones había fracasado en evitar el conflicto." },
            { t: "plantea", label: "La necesidad", text: "Se buscó crear un organismo más sólido para mantener la paz mundial." },
            { t: "resuelve", label: "Identifica", text: "La ONU se fundó en 1945, reemplazando a la Liga de las Naciones." },
            { t: "resultado", label: "Respuesta", text: "La ONU." }
          ],
          quick: ["ONU (1945) reemplaza a la Liga de las Naciones (creada tras la Primera Guerra Mundial)."] },

        { q: "¿Qué gas liberan las plantas a la atmósfera como resultado de la fotosíntesis?", options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Metano"], correct: 0,
          hint: "Es el proceso inverso a la respiración celular.",
          steps: [
            { t: "dato", label: "Reactivos", text: "En la fotosíntesis la planta toma CO₂ y agua, usando la energía de la luz." },
            { t: "plantea", label: "Identifica el subproducto", text: "Se busca el gas que se devuelve al ambiente." },
            { t: "resuelve", label: "Resuelve", text: "La planta produce glucosa (su alimento) y libera oxígeno como subproducto, indispensable para la vida animal." },
            { t: "resultado", label: "Respuesta", text: "Oxígeno." }
          ],
          quick: ["Fotosíntesis: entra CO₂, sale O₂. Respiración: entra O₂, sale CO₂."] }
      ]
    }
  ]
};

// Fusiona los tres componentes con el de numérico
(function mergeBanco() {
  if (!window.BANCO_USECIPOL || !window.BANCO_USECIPOL_RESTO) return;
  window.BANCO_USECIPOL.sections = window.BANCO_USECIPOL.sections.concat(window.BANCO_USECIPOL_RESTO.sections);
})();
