// Subtemas del temario USECIPOL que faltaban en los bancos existentes:
// Verbal → término excluido, relaciones sintácticas, significado de palabras.
// Numérico → razonamiento combinatorio, geometría y medidas aplicadas.
window.STUDY_BANK_USECIPOL = {
  topics: [

    // ======================= VERBAL (subtemas USECIPOL) =======================
    {
      key: "verbal",
      problems: [
        {
          title: "Término excluido: campo semántico",
          q: "Identifica el término excluido: MARTILLO, DESTORNILLADOR, ALICATE, CLAVO.",
          options: ["MARTILLO", "DESTORNILLADOR", "ALICATE", "CLAVO"], correct: 3,
          full: [
            { t: "dato", label: "Datos", text: "Términos: martillo, destornillador, alicate, clavo." },
            { t: "plantea", label: "Plantea", text: "Busca la característica común a la mayoría: ¿son todos del mismo tipo de objeto?" },
            { t: "resuelve", label: "Desarrolla", text: "Martillo, destornillador y alicate son HERRAMIENTAS (instrumentos con los que se trabaja). El clavo es un material o insumo sobre el que se actúa." },
            { t: "resultado", label: "Resultado", text: "El término excluido es CLAVO." }
          ],
          quick: ["En término excluido, define la categoría con TRES palabras y verifica que la cuarta no entre.", "Herramienta ≠ material sobre el que se trabaja."]
        },
        {
          title: "Término excluido: grado de intensidad",
          q: "Identifica el término excluido: SUSURRAR, GRITAR, MURMURAR, CUCHICHEAR.",
          options: ["SUSURRAR", "GRITAR", "MURMURAR", "CUCHICHEAR"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Todos los términos se refieren a formas de hablar." },
            { t: "plantea", label: "Plantea", text: "Si todos pertenecen al mismo campo, el criterio de exclusión suele ser la INTENSIDAD o el matiz." },
            { t: "resuelve", label: "Desarrolla", text: "Susurrar, murmurar y cuchichear implican hablar en voz BAJA. Gritar implica lo contrario: voz muy alta." },
            { t: "resultado", label: "Resultado", text: "El término excluido es GRITAR." }
          ],
          quick: ["Cuando todas las palabras son del mismo campo, busca la que rompe la intensidad o dirección (bajo vs. alto)."]
        },
        {
          title: "Término excluido: función gramatical",
          q: "Identifica el término excluido: CORRER, SALTAR, RÁPIDO, NADAR.",
          options: ["CORRER", "SALTAR", "RÁPIDO", "NADAR"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Términos: correr, saltar, rápido, nadar." },
            { t: "plantea", label: "Plantea", text: "Además del significado, revisa la CATEGORÍA GRAMATICAL de cada palabra." },
            { t: "resuelve", label: "Desarrolla", text: "Correr, saltar y nadar son VERBOS (acciones). Rápido es un adjetivo/adverbio, no una acción." },
            { t: "resultado", label: "Resultado", text: "El término excluido es RÁPIDO." }
          ],
          quick: ["Si ves una palabra que no es del mismo tipo gramatical (verbo entre sustantivos, adjetivo entre verbos), esa es la respuesta."]
        },
        {
          title: "Término excluido: parte vs. todo",
          q: "Identifica el término excluido: PÉTALO, TALLO, RAÍZ, FLOR.",
          options: ["PÉTALO", "TALLO", "RAÍZ", "FLOR"], correct: 3,
          full: [
            { t: "dato", label: "Datos", text: "Términos: pétalo, tallo, raíz, flor." },
            { t: "plantea", label: "Plantea", text: "Verifica si hay una palabra que sea el CONJUNTO y las otras sus PARTES." },
            { t: "resuelve", label: "Desarrolla", text: "Pétalo, tallo y raíz son partes de una planta. \"Flor\" es el todo (o el conjunto) al que pertenecen varias de esas partes." },
            { t: "resultado", label: "Resultado", text: "El término excluido es FLOR." }
          ],
          quick: ["Relación parte-todo: si una palabra contiene a las demás, esa es la excluida."]
        },
        {
          title: "Relaciones sintácticas: sujeto de la oración",
          q: "Identifica el SUJETO en: \"Los estudiantes de la universidad presentaron su proyecto ayer.\"",
          options: ["Su proyecto", "Los estudiantes de la universidad", "Ayer", "Presentaron"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Oración: \"Los estudiantes de la universidad presentaron su proyecto ayer\"." },
            { t: "plantea", label: "Plantea", text: "El sujeto responde a \"¿quién realiza la acción?\" y concuerda en número con el verbo." },
            { t: "resuelve", label: "Desarrolla", text: "¿Quién presentó? Los estudiantes de la universidad. El verbo \"presentaron\" está en plural, concordando con ese sujeto plural." },
            { t: "resultado", label: "Resultado", text: "El sujeto es \"los estudiantes de la universidad\"." }
          ],
          quick: ["Pregunta \"¿quién + verbo?\" y verifica la concordancia de número con el verbo. Incluye todos los modificadores del núcleo."]
        },
        {
          title: "Relaciones sintácticas: núcleo del sujeto",
          q: "En la oración \"El nuevo director de la escuela renunció\", ¿cuál es el NÚCLEO del sujeto?",
          options: ["Nuevo", "Director", "Escuela", "Renunció"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Sujeto completo: \"el nuevo director de la escuela\"." },
            { t: "plantea", label: "Plantea", text: "El núcleo del sujeto es el sustantivo principal; el resto son modificadores." },
            { t: "resuelve", label: "Desarrolla", text: "\"El\" es artículo, \"nuevo\" adjetivo, \"de la escuela\" complemento del nombre. El sustantivo del que todos dependen es \"director\"." },
            { t: "resultado", label: "Resultado", text: "El núcleo del sujeto es \"director\"." }
          ],
          quick: ["El núcleo es el sustantivo que concuerda en número con el verbo; quita todos los modificadores y queda él solo."]
        },
        {
          title: "Relaciones sintácticas: tipo de oración",
          q: "¿Qué tipo de oración es \"Llovió toda la noche\" según su sujeto?",
          options: ["Oración con sujeto expreso", "Oración impersonal (sin sujeto)", "Oración con sujeto tácito", "Oración compuesta"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Oración: \"Llovió toda la noche\"." },
            { t: "plantea", label: "Plantea", text: "Distingue sujeto tácito (existe pero no se menciona: \"[Yo] llegué tarde\") de oración impersonal (no hay sujeto posible)." },
            { t: "resuelve", label: "Desarrolla", text: "Los verbos meteorológicos (llover, nevar, granizar) no admiten sujeto: no hay nadie ni nada que \"llueva\"." },
            { t: "resultado", label: "Resultado", text: "Es una oración impersonal (sin sujeto)." }
          ],
          quick: ["Verbos meteorológicos (llover, nevar, amanecer) + \"haber\" impersonal = oraciones SIN sujeto, no con sujeto tácito."]
        },
        {
          title: "Significado de palabras: prefijos",
          q: "Si el prefijo \"in-\" indica negación, ¿qué significa la palabra \"inaudito\"?",
          options: ["Que se escucha muy bien", "Que nunca antes se ha oído, insólito", "Que se repite constantemente", "Que es muy común"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "La palabra se compone de \"in-\" (negación) + raíz relacionada con \"oído/audición\"." },
            { t: "plantea", label: "Plantea", text: "Descompón la palabra en sus partes para deducir su significado." },
            { t: "resuelve", label: "Desarrolla", text: "\"In-\" (no) + \"audito\" (oído) = que no se ha oído nunca. De ahí su uso como sinónimo de insólito o extraordinario." },
            { t: "resultado", label: "Resultado", text: "Que nunca antes se ha oído, insólito." }
          ],
          quick: ["Descompón la palabra: prefijo + raíz. Prefijos de negación frecuentes: in-, im-, i-, des-, a-."]
        },
        {
          title: "Significado de palabras: raíces cultas",
          q: "Si \"antropo-\" significa \"ser humano\", ¿qué estudia la antropología?",
          options: ["Los astros y las estrellas", "El ser humano, sus culturas y sociedades", "Los animales", "Las rocas y minerales"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "La palabra combina \"antropo-\" (ser humano) con \"-logía\" (estudio/tratado)." },
            { t: "plantea", label: "Plantea", text: "El sufijo \"-logía\" siempre indica el estudio de algo." },
            { t: "resuelve", label: "Desarrolla", text: "Antropo- (ser humano) + -logía (estudio) = estudio del ser humano, incluyendo sus culturas y sociedades." },
            { t: "resultado", label: "Resultado", text: "El ser humano, sus culturas y sociedades." }
          ],
          quick: ["Raíces clave: antropo-(humano), bio-(vida), geo-(tierra), astro-(estrellas), zoo-(animales), -logía(estudio)."]
        },
        {
          title: "Significado de palabras en contexto: polisemia",
          q: "En \"El equipo perdió la cabeza al final del partido\", ¿qué significa \"perder la cabeza\"?",
          options: ["Sufrir una lesión física en la cabeza", "Perder el control o la compostura", "Olvidar el marcador", "Ganar con dificultad"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "\"Perder la cabeza\" es una expresión idiomática, no literal." },
            { t: "plantea", label: "Plantea", text: "El contexto deportivo y emocional descarta el sentido físico literal." },
            { t: "resuelve", label: "Desarrolla", text: "La expresión significa perder el control emocional, la calma o la compostura." },
            { t: "resultado", label: "Resultado", text: "Perder el control o la compostura." }
          ],
          quick: ["Las expresiones idiomáticas nunca se interpretan literalmente: descarta siempre la opción física/literal."]
        }
      ]
    },

    // ======================= NUMÉRICO (subtemas USECIPOL) =======================
    {
      key: "numerico",
      problems: [
        {
          title: "Combinatoria: permutaciones simples",
          q: "¿De cuántas maneras distintas pueden ordenarse 4 libros diferentes en un estante?",
          options: ["12", "16", "24", "32"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "4 libros distintos, y todos se colocan en fila (importa el orden)." },
            { t: "plantea", label: "Plantea", text: "Cuando importa el orden y se usan todos los elementos, se aplica el factorial: n!" },
            { t: "resuelve", label: "Desarrolla", text: "4! = 4 × 3 × 2 × 1 = 24. (Primera posición: 4 opciones; segunda: 3; tercera: 2; cuarta: 1.)" },
            { t: "resultado", label: "Resultado", text: "24 maneras distintas." }
          ],
          quick: ["Ordenar TODOS los elementos = n!. Memoriza: 3!=6, 4!=24, 5!=120, 6!=720."]
        },
        {
          title: "Combinatoria: combinaciones (no importa el orden)",
          q: "¿De cuántas formas se puede elegir un comité de 2 personas entre 5 candidatos?",
          options: ["8", "10", "15", "20"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Se eligen 2 personas entre 5. En un comité, el orden NO importa (elegir a Ana y Beto es igual que Beto y Ana)." },
            { t: "plantea", label: "Plantea", text: "Se usa la fórmula de combinaciones: C(n,k) = n! / [k! × (n−k)!]." },
            { t: "resuelve", label: "Desarrolla", text: "C(5,2) = (5×4)/(2×1) = 20/2." },
            { t: "resultado", label: "Resultado", text: "10 formas distintas." }
          ],
          quick: ["Atajo para C(n,2): n×(n−1)/2. Aquí: 5×4/2 = 10.", "Si el orden NO importa (comités, parejas), usa combinaciones; si importa (podios, contraseñas), permutaciones."]
        },
        {
          title: "Combinatoria: principio de multiplicación",
          q: "Un menú ofrece 3 entradas, 4 platos fuertes y 2 postres. ¿Cuántas comidas distintas de tres tiempos se pueden armar?",
          options: ["9", "18", "24", "36"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "3 entradas, 4 platos fuertes, 2 postres. Se elige uno de cada categoría." },
            { t: "plantea", label: "Plantea", text: "Principio de multiplicación: si hay etapas independientes, se MULTIPLICAN las opciones de cada una." },
            { t: "resuelve", label: "Desarrolla", text: "3 × 4 × 2." },
            { t: "resultado", label: "Resultado", text: "24 comidas distintas." }
          ],
          quick: ["Cuando eliges uno de cada grupo, MULTIPLICA las cantidades (no sumes): 3×4×2=24."]
        },
        {
          title: "Combinatoria: números formados con dígitos",
          q: "¿Cuántos números de 3 cifras distintas se pueden formar con los dígitos 1, 2, 3 y 4?",
          options: ["12", "18", "24", "64"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "4 dígitos disponibles, se forman números de 3 cifras y NO se pueden repetir dígitos." },
            { t: "plantea", label: "Plantea", text: "Importa el orden (123 ≠ 321) y no hay repetición: cuenta opciones posición por posición." },
            { t: "resuelve", label: "Desarrolla", text: "Centenas: 4 opciones. Decenas: quedan 3. Unidades: quedan 2. Total = 4 × 3 × 2." },
            { t: "resultado", label: "Resultado", text: "24 números distintos." }
          ],
          quick: ["Sin repetición: multiplica descontando 1 en cada posición (4×3×2=24). Con repetición sería 4×4×4=64."]
        },
        {
          title: "Geometría y medidas: perímetro de un rectángulo",
          q: "Un terreno rectangular mide 15 m de largo y 8 m de ancho. ¿Cuántos metros de cerca se necesitan para rodearlo completamente?",
          options: ["23 m", "46 m", "60 m", "120 m"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Largo = 15 m, ancho = 8 m. Se pide la longitud del contorno (perímetro), no el área." },
            { t: "plantea", label: "Plantea", text: "Perímetro del rectángulo = 2 × (largo + ancho)." },
            { t: "resuelve", label: "Desarrolla", text: "P = 2 × (15 + 8) = 2 × 23." },
            { t: "resultado", label: "Resultado", text: "Se necesitan 46 metros de cerca." }
          ],
          quick: ["Cercar/rodear = PERÍMETRO (2×(l+a)). Cubrir/sembrar/pintar = ÁREA (l×a). Lee bien qué piden."]
        },
        {
          title: "Geometría y medidas: conversión de unidades de área",
          q: "Un terreno cuadrado tiene 400 m² de área. ¿Cuánto mide cada lado?",
          options: ["10 m", "20 m", "40 m", "200 m"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Área del cuadrado = 400 m²." },
            { t: "plantea", label: "Plantea", text: "En un cuadrado, área = lado². Para hallar el lado, se extrae la raíz cuadrada." },
            { t: "resuelve", label: "Desarrolla", text: "lado = √400." },
            { t: "resultado", label: "Resultado", text: "Cada lado mide 20 m." }
          ],
          quick: ["Cuadrado: del área al lado se saca raíz. √400=20 (porque 20×20=400)."]
        },
        {
          title: "Geometría: teorema de Pitágoras aplicado",
          q: "Una escalera de 5 m se apoya en una pared, con su base a 3 m del muro. ¿A qué altura llega la escalera?",
          options: ["2 m", "3.5 m", "4 m", "4.5 m"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "La escalera (5 m) es la hipotenusa; la distancia al muro (3 m) es un cateto. Se pide el otro cateto (la altura)." },
            { t: "plantea", label: "Plantea", text: "Teorema de Pitágoras: hipotenusa² = cateto² + cateto², es decir 5² = 3² + h²." },
            { t: "resuelve", label: "Desarrolla", text: "25 = 9 + h² → h² = 16 → h = √16." },
            { t: "resultado", label: "Resultado", text: "La escalera llega a 4 m de altura." }
          ],
          quick: ["Reconoce la terna pitagórica 3-4-5 al instante: si ves 3 y 5, el faltante es 4. Otras ternas: 6-8-10, 5-12-13, 8-15-17."]
        },
        {
          title: "Geometría: área de un trapecio",
          q: "Un trapecio tiene bases de 10 cm y 6 cm, y una altura de 5 cm. ¿Cuál es su área?",
          options: ["30 cm²", "40 cm²", "50 cm²", "80 cm²"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Base mayor = 10 cm, base menor = 6 cm, altura = 5 cm." },
            { t: "plantea", label: "Plantea", text: "Área del trapecio = [(base mayor + base menor) / 2] × altura." },
            { t: "resuelve", label: "Desarrolla", text: "A = [(10 + 6)/2] × 5 = (16/2) × 5 = 8 × 5." },
            { t: "resultado", label: "Resultado", text: "Área = 40 cm²." }
          ],
          quick: ["Promedia las dos bases y multiplica por la altura: ((10+6)/2)×5 = 8×5 = 40."]
        },
        {
          title: "Razonamiento deductivo con datos numéricos",
          q: "En un grupo de 40 personas, 25 hablan inglés, 18 hablan francés y 8 hablan ambos idiomas. ¿Cuántas no hablan ninguno de los dos?",
          options: ["3", "5", "7", "10"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Total = 40. Inglés = 25. Francés = 18. Ambos = 8." },
            { t: "plantea", label: "Plantea", text: "Aplica la fórmula de unión de conjuntos: |A∪B| = |A| + |B| − |A∩B|, para no contar dos veces a los bilingües." },
            { t: "resuelve", label: "Desarrolla", text: "Hablan al menos uno = 25 + 18 − 8 = 35. Ninguno = 40 − 35." },
            { t: "resultado", label: "Resultado", text: "5 personas no hablan ninguno de los dos idiomas." }
          ],
          quick: ["Unión = A + B − ambos (siempre resta la intersección). Luego: Total − Unión = ninguno."]
        },
        {
          title: "Aplicación práctica: promedio ponderado",
          q: "Un estudiante obtuvo 8 en un examen que vale 70% y 6 en un trabajo que vale 30%. ¿Cuál es su nota final?",
          options: ["7.0", "7.2", "7.4", "7.6"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Examen: nota 8, peso 70%. Trabajo: nota 6, peso 30%." },
            { t: "plantea", label: "Plantea", text: "En un promedio ponderado, cada nota se multiplica por su peso y luego se suman los resultados." },
            { t: "resuelve", label: "Desarrolla", text: "Nota final = (8 × 0.70) + (6 × 0.30) = 5.6 + 1.8." },
            { t: "resultado", label: "Resultado", text: "Nota final = 7.4." }
          ],
          quick: ["No promedies simple ((8+6)/2=7 sería incorrecto): multiplica cada nota por su peso y suma."]
        }
      ]
    }
  ]
};

// Fusiona en los bancos existentes de verbal y numérico
(function mergeUsecipol() {
  if (!window.STUDY_BANK || !window.STUDY_BANK_USECIPOL) return;
  window.STUDY_BANK_USECIPOL.topics.forEach(function (extra) {
    var target = window.STUDY_BANK.topics.find(function (t) { return t.key === extra.key; });
    if (target) target.problems = target.problems.concat(extra.problems);
  });
})();
