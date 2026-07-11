// Segunda ronda de contenido curado — amplía Física y Lengua a 40+ preguntas
// (se fusiona con window.STUDY_BANK igual que study-bank-extra.js).
window.STUDY_BANK_ROUND2 = {
  topics: [
    {
      key: "fisica",
      problems: [
        {
          title: "Impulso y cantidad de movimiento",
          q: "Un objeto de 3 kg se mueve a 8 m/s. ¿Cuál es su cantidad de movimiento (momento lineal)?",
          options: ["16 kg·m/s", "20 kg·m/s", "24 kg·m/s", "28 kg·m/s"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Masa = 3 kg. Velocidad = 8 m/s." },
            { t: "plantea", label: "Plantea", text: "Fórmula: cantidad de movimiento p = m × v." },
            { t: "resuelve", label: "Desarrolla", text: "p = 3 × 8." },
            { t: "resultado", label: "Resultado", text: "p = 24 kg·m/s." }
          ],
          quick: ["Multiplicación directa masa × velocidad: 3×8=24."]
        },
        {
          title: "MRUV: tiempo de frenado",
          q: "Un auto viaja a 20 m/s y frena con una desaceleración de 4 m/s² hasta detenerse. ¿Cuánto tarda en detenerse?",
          options: ["3 s", "4 s", "5 s", "6 s"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Velocidad inicial = 20 m/s. Velocidad final = 0. Desaceleración = 4 m/s²." },
            { t: "plantea", label: "Plantea", text: "Fórmula: v = v₀ + a×t. Aquí a es negativa (frena), y v final es 0." },
            { t: "resuelve", label: "Desarrolla", text: "0 = 20 − 4×t → 4t = 20 → t = 20/4." },
            { t: "resultado", label: "Resultado", text: "t = 5 segundos." }
          ],
          quick: ["Divide la velocidad inicial entre la desaceleración: 20/4=5 s."]
        },
        {
          title: "Máquinas simples: polea fija",
          q: "En una polea fija, se necesita levantar un peso de 80 N. ¿Qué fuerza aproximada se debe aplicar (sin fricción)?",
          options: ["40 N", "80 N", "120 N", "160 N"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Peso a levantar = 80 N. Polea FIJA (no móvil)." },
            { t: "plantea", label: "Plantea", text: "Una polea fija solo cambia la dirección de la fuerza, no proporciona ventaja mecánica (ideal, sin fricción)." },
            { t: "resuelve", label: "Desarrolla", text: "La fuerza necesaria es igual al peso a levantar." },
            { t: "resultado", label: "Resultado", text: "80 N." }
          ],
          quick: ["Polea fija = ventaja mecánica 1 (solo cambia dirección). Polea móvil sí reduce la fuerza a la mitad."]
        },
        {
          title: "Consumo eléctrico (kWh)",
          q: "Un electrodoméstico de 1000 W funciona durante 3 horas. ¿Cuánta energía consume, en kWh?",
          options: ["1 kWh", "2 kWh", "3 kWh", "4 kWh"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Potencia = 1000 W = 1 kW. Tiempo = 3 horas." },
            { t: "plantea", label: "Plantea", text: "Energía (kWh) = Potencia (kW) × tiempo (h)." },
            { t: "resuelve", label: "Desarrolla", text: "E = 1 × 3." },
            { t: "resultado", label: "Resultado", text: "E = 3 kWh." }
          ],
          quick: ["Convierte W a kW dividiendo entre 1000, luego multiplica por las horas."]
        },
        {
          title: "Calor latente (cambio de estado)",
          q: "Se necesitan 2260 J para evaporar 1 gramo de agua (calor latente de vaporización). ¿Cuánta energía se requiere para evaporar 5 gramos?",
          options: ["9040 J", "10 300 J", "11 300 J", "12 000 J"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Calor latente = 2260 J por gramo. Masa a evaporar = 5 g." },
            { t: "plantea", label: "Plantea", text: "Energía total = calor latente × masa." },
            { t: "resuelve", label: "Desarrolla", text: "Q = 2260 × 5." },
            { t: "resultado", label: "Resultado", text: "Q = 11 300 J." }
          ],
          quick: ["Multiplicación directa: energía por gramo × cantidad de gramos."]
        },
        {
          title: "Caída libre con velocidad inicial",
          q: "Un objeto se lanza hacia abajo con 5 m/s de velocidad inicial. Después de 2 segundos (g=10 m/s²), ¿cuál es su velocidad?",
          options: ["20 m/s", "22 m/s", "25 m/s", "28 m/s"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Velocidad inicial = 5 m/s (hacia abajo). Tiempo = 2 s. g = 10 m/s²." },
            { t: "plantea", label: "Plantea", text: "Fórmula: v = v₀ + g×t." },
            { t: "resuelve", label: "Desarrolla", text: "v = 5 + 10×2 = 5+20." },
            { t: "resultado", label: "Resultado", text: "v = 25 m/s." }
          ],
          quick: ["Suma la velocidad inicial al producto g×t: 5+20=25."]
        },
        {
          title: "Teorema del trabajo y la energía",
          q: "Un objeto de 4 kg parte del reposo y alcanza una velocidad de 6 m/s por acción de una fuerza. ¿Cuál fue el trabajo neto realizado sobre él?",
          options: ["48 J", "60 J", "72 J", "84 J"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Masa = 4 kg. Velocidad inicial = 0. Velocidad final = 6 m/s." },
            { t: "plantea", label: "Plantea", text: "Teorema trabajo-energía: el trabajo neto es igual al cambio de energía cinética (Wneto = ΔEc)." },
            { t: "resuelve", label: "Desarrolla", text: "Ec final = ½×4×6² = ½×4×36 = 72 J. Ec inicial = 0." },
            { t: "resultado", label: "Resultado", text: "Trabajo neto = 72 − 0 = 72 J." }
          ],
          quick: ["Si parte del reposo, el trabajo neto es directamente ½mv² (la energía cinética final)."]
        },
        {
          title: "Resistencias en serie (tres resistores)",
          q: "Tres resistencias de 2 Ω, 5 Ω y 3 Ω están conectadas en serie. ¿Cuál es la resistencia total?",
          options: ["8 Ω", "9 Ω", "10 Ω", "12 Ω"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "R1=2Ω, R2=5Ω, R3=3Ω, en serie." },
            { t: "plantea", label: "Plantea", text: "En serie, las resistencias se suman todas." },
            { t: "resuelve", label: "Desarrolla", text: "R total = 2+5+3." },
            { t: "resultado", label: "Resultado", text: "R total = 10 Ω." }
          ],
          quick: ["En serie siempre se suman todas, sin importar cuántas sean."]
        },
        {
          title: "Presión atmosférica (conceptual)",
          q: "¿Qué le sucede a la presión atmosférica a medida que se asciende en altitud (por ejemplo, al subir una montaña)?",
          options: ["Aumenta progresivamente", "Disminuye progresivamente", "Se mantiene constante", "Cambia de forma aleatoria"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "La presión atmosférica es el peso del aire sobre un punto dado." },
            { t: "plantea", label: "Plantea", text: "A mayor altitud, hay menos columna de aire por encima de ese punto." },
            { t: "resuelve", label: "Desarrolla", text: "Menos aire encima significa menos peso ejercido, por lo tanto menor presión." },
            { t: "resultado", label: "Resultado", text: "Disminuye progresivamente con la altitud." }
          ],
          quick: ["Regla simple: a mayor altura, menor presión atmosférica (por eso cuesta respirar en la montaña)."]
        },
        {
          title: "Ley de Ohm: hallar la resistencia",
          q: "Un circuito tiene un voltaje de 24 V y circula una corriente de 4 A. ¿Cuál es la resistencia del circuito?",
          options: ["4 Ω", "5 Ω", "6 Ω", "8 Ω"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Voltaje = 24 V. Corriente = 4 A." },
            { t: "plantea", label: "Plantea", text: "Ley de Ohm: V = I × R, de donde R = V/I." },
            { t: "resuelve", label: "Desarrolla", text: "R = 24/4." },
            { t: "resultado", label: "Resultado", text: "R = 6 Ω." }
          ],
          quick: ["R=V/I directo: 24/4=6 Ω."]
        }
      ]
    },
    {
      key: "lengua",
      problems: [
        {
          title: "Figura literaria: metonimia",
          q: "\"Todo el estadio celebró el gol con euforia.\" ¿Qué figura literaria se usa al decir \"el estadio\" para referirse a las personas en él?",
          options: ["Metáfora", "Metonimia", "Hipérbole", "Símil"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "\"El estadio celebró\" — en realidad no celebra el edificio, sino la gente dentro de él." },
            { t: "plantea", label: "Plantea", text: "La metonimia nombra algo usando un término relacionado (el lugar por sus habitantes, el autor por su obra, etc.)." },
            { t: "resuelve", label: "Desarrolla", text: "Se usa \"el estadio\" (el lugar) para referirse a \"la gente en el estadio\"." },
            { t: "resultado", label: "Resultado", text: "Es una metonimia." }
          ],
          quick: ["Metonimia típica: el lugar por sus habitantes (\"el estadio celebró\", \"todo el país lloró\")."]
        },
        {
          title: "Gramática: complemento indirecto",
          q: "Identifica el complemento indirecto en: \"María le regaló un libro a su hermano.\"",
          options: ["Un libro", "María", "A su hermano", "Regaló"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Oración: \"María le regaló un libro a su hermano\"." },
            { t: "plantea", label: "Plantea", text: "El complemento indirecto responde a \"¿a quién?\" o \"¿para quién?\" recibe la acción." },
            { t: "resuelve", label: "Desarrolla", text: "¿A quién le regaló el libro? A su hermano." },
            { t: "resultado", label: "Resultado", text: "El complemento indirecto es \"a su hermano\"." }
          ],
          quick: ["Pregunta \"¿a quién/para quién?\" para hallar el complemento indirecto (se puede reemplazar por \"le/les\")."]
        },
        {
          title: "Vocabulario en contexto: palabra técnica",
          q: "En \"El abogado presentó una apelación ante el tribunal\", ¿qué significa \"apelación\"?",
          options: ["Un halago o elogio", "Una solicitud para que un tribunal superior revise una decisión", "Un tipo de contrato", "Una multa económica"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Contexto: ámbito legal, \"ante el tribunal\"." },
            { t: "plantea", label: "Plantea", text: "\"Apelación\" es un término jurídico específico." },
            { t: "resuelve", label: "Desarrolla", text: "Se refiere al recurso legal para pedir que una instancia superior revise un fallo." },
            { t: "resultado", label: "Resultado", text: "Una solicitud para que un tribunal superior revise una decisión." }
          ],
          quick: ["El contexto legal (\"tribunal\", \"abogado\") descarta significados no jurídicos como halago o multa."]
        },
        {
          title: "Tipo de texto: narrativo",
          q: "¿Qué tipo de texto predomina en: \"Aquella mañana, Pedro caminó hasta el río y descubrió algo que cambiaría su vida\"?",
          options: ["Narrativo", "Instructivo", "Descriptivo", "Argumentativo"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "El texto cuenta una secuencia de hechos en el tiempo (\"aquella mañana... caminó... descubrió\")." },
            { t: "plantea", label: "Plantea", text: "Identifica si hay una sucesión de acciones/eventos, marca de texto narrativo." },
            { t: "resuelve", label: "Desarrolla", text: "Hay personaje (Pedro), acción (caminar, descubrir) y progresión temporal." },
            { t: "resultado", label: "Resultado", text: "Es un texto narrativo." }
          ],
          quick: ["Si hay personajes + acciones en secuencia temporal → narrativo (cuenta una historia)."]
        },
        {
          title: "Ortografía: uso de \"por qué\" / \"porque\" / \"porqué\" / \"por que\"",
          q: "Selecciona la oración con el uso correcto.",
          options: ["¿Porque no viniste ayer?", "No vino porque estaba enfermo", "Quiero saber el porque de tu decisión", "Ese es el motivo por que actuó así"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "\"Por qué\" (pregunta), \"porque\" (respuesta/causa), \"el porqué\" (sustantivo, con tilde y junto), \"por que\" (relativo, poco común)." },
            { t: "plantea", label: "Plantea", text: "Identifica cuál oración usa correctamente la forma que le corresponde según su función." },
            { t: "resuelve", label: "Desarrolla", text: "\"No vino porque estaba enfermo\" usa \"porque\" correctamente para dar una razón (respuesta)." },
            { t: "resultado", label: "Resultado", text: "Es la única oración correcta entre las opciones." }
          ],
          quick: ["Pregunta = \"por qué\" (separado, con tilde). Respuesta/causa = \"porque\" (junto, sin tilde). Sustantivo = \"el porqué\" (junto, con tilde)."]
        },
        {
          title: "Figura literaria: sinestesia",
          q: "\"Un silencio verde envolvía el bosque.\" ¿Qué figura literaria se usa al mezclar una sensación auditiva (silencio) con una visual (verde)?",
          options: ["Sinestesia", "Hipérbole", "Personificación", "Anáfora"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "\"Silencio\" (percepción auditiva) + \"verde\" (percepción visual) combinados." },
            { t: "plantea", label: "Plantea", text: "La sinestesia mezcla dos sentidos distintos en una misma expresión." },
            { t: "resuelve", label: "Desarrolla", text: "Se atribuye una cualidad visual (color) a un concepto auditivo (silencio)." },
            { t: "resultado", label: "Resultado", text: "Es una sinestesia." }
          ],
          quick: ["Si mezclas dos sentidos distintos (oír un color, ver un sonido, \"dulce mirada\") → sinestesia."]
        },
        {
          title: "Comprensión lectora: propósito del texto",
          q: "Un manual que explica paso a paso cómo armar un mueble tiene como propósito principal:",
          options: ["Persuadir al lector de comprar más muebles", "Guiar al lector para realizar una tarea correctamente", "Narrar la historia del mueble", "Describir el mueble sin dar instrucciones"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Un manual de armado da pasos ordenados para lograr un resultado." },
            { t: "plantea", label: "Plantea", text: "Identifica la función comunicativa: informar/persuadir/narrar/instruir." },
            { t: "resuelve", label: "Desarrolla", text: "El objetivo es que el lector pueda replicar el proceso correctamente." },
            { t: "resultado", label: "Resultado", text: "Guiar al lector para realizar una tarea correctamente (texto instructivo)." }
          ],
          quick: ["Manuales, recetas e instructivos siempre tienen propósito de GUIAR una acción paso a paso."]
        },
        {
          title: "Antónimo de palabra abstracta",
          q: "Elige el antónimo de \"efímero\" en un contexto donde se habla de la fama de una celebridad.",
          options: ["Pasajero", "Breve", "Duradero", "Momentáneo"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "\"Efímero\" = que dura poco tiempo." },
            { t: "plantea", label: "Plantea", text: "Busca la única palabra que signifique lo opuesto (larga duración)." },
            { t: "resuelve", label: "Desarrolla", text: "Pasajero, breve y momentáneo son sinónimos de efímero." },
            { t: "resultado", label: "Resultado", text: "\"Duradero\" es el antónimo correcto." }
          ],
          quick: ["Elimina los tres sinónimos evidentes; el que sobra es el antónimo."]
        },
        {
          title: "Plan de redacción: instrucciones",
          q: "Ordena los pasos de un instructivo: I. Enciende el dispositivo presionando el botón lateral. II. Espera a que aparezca el logo en pantalla. III. Desempaca el dispositivo de la caja. IV. Configura el idioma y la red Wi-Fi.",
          options: ["III, I, II, IV", "I, II, III, IV", "III, II, I, IV", "IV, III, I, II"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "4 pasos para configurar un dispositivo nuevo." },
            { t: "plantea", label: "Plantea", text: "Sigue el orden lógico real: primero sacar el producto de la caja, antes de poder encenderlo." },
            { t: "resuelve", label: "Desarrolla", text: "Desempacar (III) → encender (I) → esperar el logo (II) → configurar (IV)." },
            { t: "resultado", label: "Resultado", text: "Orden correcto: III, I, II, IV." }
          ],
          quick: ["En instructivos de dispositivos: desempacar siempre va primero, configurar siempre al final."]
        },
        {
          title: "Concordancia verbal con sujetos compuestos",
          q: "Selecciona la oración con concordancia verbal correcta.",
          options: ["El perro y el gato juega en el jardín", "El perro y el gato juegan en el jardín", "El perro y el gato jugamos en el jardín", "El perro y el gato jugáis en el jardín"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Sujeto compuesto: \"el perro y el gato\" (dos elementos, equivale a plural)." },
            { t: "plantea", label: "Plantea", text: "Un sujeto compuesto (unido por \"y\") requiere el verbo en PLURAL, aunque cada elemento sea singular." },
            { t: "resuelve", label: "Desarrolla", text: "\"El perro y el gato\" = ellos (3ª persona plural) → el verbo debe ir en esa forma: \"juegan\"." },
            { t: "resultado", label: "Resultado", text: "\"El perro y el gato juegan en el jardín\" es la oración correcta." }
          ],
          quick: ["Dos sujetos unidos por \"y\" = sujeto plural, aunque cada uno sea individual → verbo en plural."]
        }
      ]
    }
  ]
};

(function mergeRound2() {
  if (!window.STUDY_BANK || !window.STUDY_BANK_ROUND2) return;
  window.STUDY_BANK_ROUND2.topics.forEach(function (extraTopic) {
    var target = window.STUDY_BANK.topics.find(function (t) { return t.key === extraTopic.key; });
    if (target) target.problems = target.problems.concat(extraTopic.problems);
  });
})();
