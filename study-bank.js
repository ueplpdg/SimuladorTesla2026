// Banco de estudio curado — 6 temas x 10 problemas, cada uno con solución
// COMPLETA (paso a paso, para comprender) y solución RÁPIDA (atajo mental
// para el día del examen). Pensado para practicar con presión de tiempo
// real y luego repasar la explicación con calma.
window.STUDY_BANK = {
  topics: [

    // ======================= RAZONAMIENTO NUMÉRICO =======================
    {
      key: "numerico", title: "Razonamiento Numérico", color: "#132a44",
      description: "Porcentajes, razones, regla de tres, interés, trabajo conjunto, sucesiones y probabilidad.",
      problems: [
        {
          title: "Descuento porcentual simple",
          q: "Un artículo cuesta $560 y tiene un descuento del 30%. ¿Cuánto se paga por él?",
          options: ["$380", "$392", "$400", "$448"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Precio original = $560. Descuento = 30%." },
            { t: "plantea", label: "Plantea", text: "Descuento en dólares = Precio × (porcentaje / 100)." },
            { t: "resuelve", label: "Desarrolla", text: "Descuento = 560 × 0.30 = $168." },
            { t: "resultado", label: "Resultado", text: "Precio final = 560 − 168 = $392." }
          ],
          quick: ["30% ≈ 3/10 del precio. 560 × 0.3 = 168.", "Precio final = 560 − 168 = 392.", "Atajo: paga el 70% directo → 560 × 0.7 = 392."]
        },
        {
          title: "Aumento y descuento sucesivos (trampa clásica)",
          q: "Un producto de $200 sube 20% y luego baja 20% sobre el nuevo precio. ¿Cuál es el precio final?",
          options: ["$188", "$192", "$196", "$200"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Precio inicial = $200. Sube 20%, luego baja 20% (sobre el precio YA aumentado)." },
            { t: "plantea", label: "Plantea", text: "Aplica cada porcentaje en cadena, no los sumes ni los canceles." },
            { t: "resuelve", label: "Desarrolla", text: "Tras subir 20%: 200 × 1.20 = $240. Tras bajar 20%: 240 × 0.80 = $192." },
            { t: "resultado", label: "Resultado", text: "Precio final = $192 (NO vuelve a $200 — un error muy común)." }
          ],
          quick: ["Nunca canceles +20% con −20%: el resultado siempre es MENOR al original.", "Multiplica en cadena: 200 × 1.2 × 0.8 = 192."]
        },
        {
          title: "Razón y proporción",
          q: "La razón entre perros y gatos en una veterinaria es 3:5. Si hay 18 perros, ¿cuántos gatos hay?",
          options: ["24", "27", "30", "33"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Razón perros:gatos = 3:5. Perros = 18." },
            { t: "plantea", label: "Plantea", text: "18 perros equivalen a 3 'partes' → cada parte = 18/3 = 6." },
            { t: "resuelve", label: "Desarrolla", text: "Gatos = 5 partes × 6 = 30." },
            { t: "resultado", label: "Resultado", text: "Hay 30 gatos." }
          ],
          quick: ["Divide el dato conocido entre su número de partes: 18/3 = 6.", "Multiplica por las partes que preguntan: 6 × 5 = 30."]
        },
        {
          title: "Regla de tres simple directa",
          q: "Una receta para 4 personas necesita 300 g de harina. ¿Cuántos gramos se necesitan para 10 personas?",
          options: ["600 g", "700 g", "750 g", "800 g"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "4 personas → 300 g. Se pregunta por 10 personas." },
            { t: "plantea", label: "Plantea", text: "A más personas, más harina: es una relación DIRECTA." },
            { t: "resuelve", label: "Desarrolla", text: "Gramos por persona = 300/4 = 75 g. Para 10 personas: 75 × 10." },
            { t: "resultado", label: "Resultado", text: "Se necesitan 750 g." }
          ],
          quick: ["Halla el valor por unidad: 300/4 = 75 g por persona.", "Multiplica por el nuevo total: 75 × 10 = 750 g."]
        },
        {
          title: "Regla de tres inversa (trabajo y tiempo)",
          q: "10 obreros construyen una obra en 18 días. ¿Cuántos días tardarán 15 obreros al mismo ritmo?",
          options: ["10 días", "12 días", "14 días", "15 días"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "10 obreros → 18 días. Se pregunta por 15 obreros." },
            { t: "plantea", label: "Plantea", text: "A más obreros, menos días: relación INVERSA. El trabajo total (obrero × días) es constante." },
            { t: "resuelve", label: "Desarrolla", text: "Trabajo total = 10 × 18 = 180 obrero-días. Con 15 obreros: 180/15." },
            { t: "resultado", label: "Resultado", text: "Tardarán 12 días." }
          ],
          quick: ["Multiplica el par conocido: 10 × 18 = 180.", "Divide entre el nuevo número de obreros: 180/15 = 12."]
        },
        {
          title: "Interés simple",
          q: "Un capital de $1500 se invierte al 8% de interés simple anual. ¿Cuánto interés genera en 4 años?",
          options: ["$360", "$420", "$480", "$540"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Capital = $1500, tasa = 8% anual, tiempo = 4 años." },
            { t: "plantea", label: "Plantea", text: "Interés simple: I = Capital × tasa × tiempo." },
            { t: "resuelve", label: "Desarrolla", text: "I = 1500 × 0.08 × 4." },
            { t: "resultado", label: "Resultado", text: "I = $480." }
          ],
          quick: ["Interés de 1 año = 1500 × 0.08 = 120.", "Multiplica por los años: 120 × 4 = 480."]
        },
        {
          title: "Trabajo conjunto (tasas combinadas)",
          q: "Ana termina un trabajo sola en 6 días y Beto lo termina solo en 12 días. ¿En cuántos días lo terminan trabajando juntos?",
          options: ["3 días", "4 días", "5 días", "8 días"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Ana: 1/6 del trabajo por día. Beto: 1/12 del trabajo por día." },
            { t: "plantea", label: "Plantea", text: "Trabajando juntos, las tasas de trabajo se SUMAN." },
            { t: "resuelve", label: "Desarrolla", text: "Tasa conjunta = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4 del trabajo por día." },
            { t: "resultado", label: "Resultado", text: "Si hacen 1/4 por día, terminan en 4 días." }
          ],
          quick: ["Truco directo: tiempo conjunto = (t1 × t2)/(t1 + t2) = (6×12)/(6+12) = 72/18 = 4 días."]
        },
        {
          title: "Sucesión geométrica",
          q: "¿Qué número continúa la sucesión: 2, 6, 18, 54, 162, ...?",
          options: ["324", "378", "432", "486"], correct: 3,
          full: [
            { t: "dato", label: "Datos", text: "Términos: 2, 6, 18, 54, 162." },
            { t: "plantea", label: "Plantea", text: "Compara términos consecutivos: 6/2=3, 18/6=3, 54/18=3 → razón constante 3." },
            { t: "resuelve", label: "Desarrolla", text: "Siguiente término = último × razón = 162 × 3." },
            { t: "resultado", label: "Resultado", text: "El siguiente número es 486." }
          ],
          quick: ["Divide dos términos seguidos para hallar la razón (aquí, ×3).", "Multiplica el último término por esa razón: 162×3=486."]
        },
        {
          title: "Promedio ponderado",
          q: "Un estudiante obtiene 7/10 en un examen que pesa 40% de la nota y 9/10 en otro que pesa 60%. ¿Cuál es su nota final?",
          options: ["7.8", "8.0", "8.2", "8.4"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Nota 1 = 7, peso 40%. Nota 2 = 9, peso 60%." },
            { t: "plantea", label: "Plantea", text: "Nota final = Σ (nota × peso en decimal), donde los pesos deben sumar 1." },
            { t: "resuelve", label: "Desarrolla", text: "7 × 0.40 = 2.8;  9 × 0.60 = 5.4;  Suma = 2.8 + 5.4." },
            { t: "resultado", label: "Resultado", text: "Nota final = 8.2." }
          ],
          quick: ["Multiplica cada nota por su peso en decimal y suma los resultados.", "2.8 + 5.4 = 8.2."]
        },
        {
          title: "Probabilidad simple",
          q: "Al lanzar un dado de 6 caras, ¿cuál es la probabilidad de obtener un múltiplo de 3?",
          options: ["1/6", "1/3", "1/2", "2/3"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Dado de 6 caras: {1,2,3,4,5,6}. Múltiplos de 3 en ese rango: {3, 6}." },
            { t: "plantea", label: "Plantea", text: "Probabilidad = casos favorables / casos totales." },
            { t: "resuelve", label: "Desarrolla", text: "Casos favorables = 2 (el 3 y el 6). Casos totales = 6. P = 2/6." },
            { t: "resultado", label: "Resultado", text: "Simplificando: P = 1/3." }
          ],
          quick: ["Cuenta los múltiplos de 3 hasta el 6: solo el 3 y el 6 → 2 casos.", "2/6 se simplifica a 1/3."]
        }
      ]
    },

    // ======================= RAZONAMIENTO LÓGICO =======================
    {
      key: "logico", title: "Razonamiento Lógico", color: "#132a44",
      description: "Silogismos, negaciones lógicas, series, edades, verdades/mentiras y problemas de orden.",
      problems: [
        {
          title: "Silogismo categórico básico",
          q: "Premisa 1: Todos los médicos son profesionales. Premisa 2: Ana es médica. ¿Qué se concluye?",
          options: ["Ana es profesional", "Ana no es profesional", "Algunos médicos no son profesionales", "No se puede concluir nada"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "P1: Todo médico → profesional. P2: Ana es médica." },
            { t: "plantea", label: "Plantea", text: "Si TODO elemento de un conjunto (médicos) cumple una propiedad (ser profesional), y Ana pertenece a ese conjunto..." },
            { t: "resuelve", label: "Desarrolla", text: "Ana ∈ {médicos} ⊆ {profesionales}." },
            { t: "resultado", label: "Resultado", text: "Ana es profesional." }
          ],
          quick: ["Dibuja círculos: médicos dentro de profesionales. Si Ana está en el círculo chico, está en el grande.", "\"Todos... y X es uno de ellos\" siempre concluye que X cumple la propiedad."]
        },
        {
          title: "Negación de proposición universal",
          q: "¿Cuál es la negación de \"Todos los perros ladran\"?",
          options: ["Ningún perro ladra", "Algunos perros no ladran", "Todos los perros no ladran", "Algún perro ladra"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Proposición: \"Todos son A\" (universal afirmativa)." },
            { t: "plantea", label: "Plantea", text: "Regla: negar \"Todos son A\" NO es \"Ninguno es A\" — es \"Algunos NO son A\"." },
            { t: "resuelve", label: "Desarrolla", text: "Basta con que UN perro no ladre para que \"todos ladran\" sea falso." },
            { t: "resultado", label: "Resultado", text: "\"Algunos perros no ladran\"." }
          ],
          quick: ["Tabla mental: negación de TODO = ALGUNO...NO. Negación de NINGUNO = ALGUNO.", "Nunca conviertas 'todos' en 'ninguno' al negar — es el error más común."]
        },
        {
          title: "Negación de proposición particular negativa",
          q: "¿Cuál es la negación de \"Ninguno de los empleados llegó tarde\"?",
          options: ["Todos los empleados llegaron tarde", "Algunos empleados llegaron tarde", "Ningún empleado llegó temprano", "Todos los empleados llegaron temprano"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Proposición: \"Ninguno es A\" (universal negativa)." },
            { t: "plantea", label: "Plantea", text: "Regla: negar \"Ninguno es A\" da \"Algunos SÍ son A\" (no \"Todos\")." },
            { t: "resuelve", label: "Desarrolla", text: "Basta con que UN empleado haya llegado tarde para que \"ninguno llegó tarde\" sea falso." },
            { t: "resultado", label: "Resultado", text: "\"Algunos empleados llegaron tarde\"." }
          ],
          quick: ["Ninguno ↔ Algunos son las negaciones mutuas; Todos ↔ Algunos no son las otras.", "Nunca uses \"Todos\" como negación de \"Ninguno\"."]
        },
        {
          title: "Silogismo por transitividad",
          q: "Premisa 1: Todo cuadrado es rectángulo. Premisa 2: Todo rectángulo es paralelogramo. ¿Qué se concluye?",
          options: ["Todo cuadrado es paralelogramo", "Todo paralelogramo es cuadrado", "Ningún cuadrado es paralelogramo", "Algunos cuadrados no son paralelogramos"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Cuadrado ⊆ Rectángulo (P1). Rectángulo ⊆ Paralelogramo (P2)." },
            { t: "plantea", label: "Plantea", text: "Si A está dentro de B, y B está dentro de C, por transitividad A está dentro de C." },
            { t: "resuelve", label: "Desarrolla", text: "Cuadrado ⊆ Rectángulo ⊆ Paralelogramo." },
            { t: "resultado", label: "Resultado", text: "Todo cuadrado es paralelogramo." }
          ],
          quick: ["Encadena las inclusiones como fichas de dominó: A→B→C entonces A→C directo."]
        },
        {
          title: "Trampa: dos premisas particulares",
          q: "Premisa 1: Algunos deportistas son disciplinados. Premisa 2: Algunos disciplinados son estudiosos. ¿Se concluye que algunos deportistas son estudiosos?",
          options: ["Sí, siempre se cumple", "No, no se puede concluir válidamente", "Sí, pero solo los profesionales", "No, la conclusión correcta es lo opuesto"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "P1: Algunos deportistas son disciplinados. P2: Algunos disciplinados son estudiosos." },
            { t: "plantea", label: "Plantea", text: "Regla clave: de dos premisas PARTICULARES (\"algunos...algunos\") nunca se puede sacar ninguna conclusión válida." },
            { t: "resuelve", label: "Desarrolla", text: "Los \"algunos disciplinados\" de la premisa 1 podrían no ser los mismos que los de la premisa 2." },
            { t: "resultado", label: "Resultado", text: "No se puede concluir nada válido con certeza." }
          ],
          quick: ["Si ambas premisas empiezan con \"Algunos\", la respuesta casi siempre es \"no se puede concluir\".", "Es la trampa más común del examen — memorízala."]
        },
        {
          title: "Problema de edades con proyección futura",
          q: "Dentro de 6 años, la edad de Pablo será el doble de la edad de Luisa. Si Luisa tiene 14 años, ¿qué edad tiene Pablo actualmente?",
          options: ["30", "32", "34", "36"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Luisa tiene 14 años hoy. En 6 años: edad de Pablo = 2 × edad de Luisa." },
            { t: "plantea", label: "Plantea", text: "Edad de Luisa en 6 años = 14 + 6 = 20. Edad de Pablo en 6 años = 2 × 20 = 40." },
            { t: "resuelve", label: "Desarrolla", text: "Edad actual de Pablo = edad en 6 años − 6 = 40 − 6." },
            { t: "resultado", label: "Resultado", text: "Pablo tiene actualmente 34 años." }
          ],
          quick: ["Suma primero el desplazamiento de tiempo a la edad conocida (14+6=20).", "Aplica la proporción (×2=40) y resta el mismo desplazamiento (40−6=34)."]
        },
        {
          title: "Serie numérica con diferencias crecientes",
          q: "Completa la serie: 1, 3, 7, 13, 21, ...",
          options: ["27", "29", "31", "33"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Serie: 1, 3, 7, 13, 21." },
            { t: "plantea", label: "Plantea", text: "Diferencias entre términos: 2, 4, 6, 8 — aumentan de 2 en 2." },
            { t: "resuelve", label: "Desarrolla", text: "La siguiente diferencia será 10: 21 + 10." },
            { t: "resultado", label: "Resultado", text: "El siguiente número es 31." }
          ],
          quick: ["Resta términos consecutivos para ver el patrón de diferencias.", "Si suben de 2 en 2, suma la siguiente diferencia esperada (10) al último término."]
        },
        {
          title: "Serie de letras con saltos crecientes",
          q: "¿Qué letra continúa la serie: B, D, G, K, P, ...?",
          options: ["T", "U", "V", "W"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Serie: B(2), D(4), G(7), K(11), P(16) — posiciones en el abecedario." },
            { t: "plantea", label: "Plantea", text: "Diferencias entre posiciones: +2, +3, +4, +5 — aumentan de 1 en 1." },
            { t: "resuelve", label: "Desarrolla", text: "La siguiente diferencia es +6: 16 + 6 = 22." },
            { t: "resultado", label: "Resultado", text: "La posición 22 corresponde a la letra V." }
          ],
          quick: ["Convierte letras a números (A=1,B=2...) y busca el patrón de saltos.", "Aquí los saltos suben de 1 en 1: +2,+3,+4,+5,+6."]
        },
        {
          title: "Problema de verdades y mentiras",
          q: "Ana dice \"Beto miente\". Beto dice \"Carla miente\". Carla dice \"Ana y Beto mienten\". Si solo uno de los tres dice la verdad, ¿quién es?",
          options: ["Ana", "Beto", "Carla", "Ninguno"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Solo UNA de las tres personas dice la verdad; las otras dos mienten." },
            { t: "plantea", label: "Plantea", text: "Prueba cada caso por separado y busca cuál no genera contradicción." },
            { t: "resuelve", label: "Desarrolla", text: "Si Beto dice la verdad: Carla miente → \"Ana y Beto mienten\" es falso (consistente, ya que Beto no miente). Ana debe mentir → \"Beto miente\" es falso, es decir Beto NO miente (consistente)." },
            { t: "resultado", label: "Resultado", text: "Beto es quien dice la verdad — es el único caso sin contradicciones." }
          ],
          quick: ["En problemas de \"solo uno dice la verdad\", prueba cada persona como la verdadera y revisa si las otras declaraciones cuadran sin contradicción.", "El caso que no genera conflicto lógico es la respuesta."]
        },
        {
          title: "Problema de orden y posición",
          q: "En una fila de 6 personas, Carla está dos lugares delante de Diego. Diego está en el 4to lugar contando desde el frente. ¿En qué lugar está Carla?",
          options: ["1°", "2°", "3°", "5°"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Diego está en el lugar 4. Carla está 2 lugares delante de Diego (más cerca del frente)." },
            { t: "plantea", label: "Plantea", text: "\"Delante\" significa un número de posición MENOR (más cerca del inicio de la fila)." },
            { t: "resuelve", label: "Desarrolla", text: "Posición de Carla = posición de Diego − 2 = 4 − 2." },
            { t: "resultado", label: "Resultado", text: "Carla está en el 2° lugar." }
          ],
          quick: ["\"Delante de\" resta posiciones; \"detrás de\" suma posiciones.", "4 − 2 = 2°."]
        }
      ]
    },

    // ======================= RAZONAMIENTO VERBAL =======================
    {
      key: "verbal", title: "Razonamiento Verbal", color: "#132a44",
      description: "Analogías, sinónimos/antónimos, refranes, oraciones incompletas, plan de redacción y comprensión.",
      problems: [
        {
          title: "Analogía instrumento — magnitud",
          q: "Reloj es a tiempo como termómetro es a...",
          options: ["Calor", "Grados", "Temperatura", "Clima"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Par base: Reloj → Tiempo (lo que mide)." },
            { t: "plantea", label: "Plantea", text: "Identifica la relación exacta: \"instrumento que MIDE esta magnitud\"." },
            { t: "resuelve", label: "Desarrolla", text: "Aplica la misma relación: ¿qué magnitud mide un termómetro?" },
            { t: "resultado", label: "Resultado", text: "Temperatura — el termómetro mide temperatura, igual que el reloj mide el tiempo." }
          ],
          quick: ["Convierte el par en una frase: \"El reloj MIDE el tiempo\".", "Prueba la misma frase con cada opción; \"grados\" es la unidad, no la magnitud."]
        },
        {
          title: "Analogía objeto — lugar de resguardo",
          q: "Libro es a biblioteca como cuadro es a...",
          options: ["Pintor", "Museo", "Marco", "Color"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Par base: Libro → Biblioteca (lugar donde se guarda/exhibe)." },
            { t: "plantea", label: "Plantea", text: "La relación es objeto-lugar de conservación o exhibición." },
            { t: "resuelve", label: "Desarrolla", text: "¿Dónde se exhibe típicamente un cuadro (obra de arte)?" },
            { t: "resultado", label: "Resultado", text: "Museo — un cuadro se exhibe en un museo, igual que un libro se guarda en una biblioteca." }
          ],
          quick: ["Frase guía: \"El libro se guarda EN la biblioteca\".", "Descarta \"pintor\" (creador) y \"marco\" (parte del objeto), no son lugares."]
        },
        {
          title: "Sinónimo en contexto",
          q: "Selecciona el sinónimo de \"efímero\" en: \"Vivimos un instante efímero de felicidad\".",
          options: ["Duradero", "Pasajero", "Eterno", "Constante"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Palabra: \"efímero\", en el contexto de un \"instante\"." },
            { t: "plantea", label: "Plantea", text: "\"Efímero\" significa que dura muy poco tiempo." },
            { t: "resuelve", label: "Desarrolla", text: "Duradero, eterno y constante son opuestos (indican larga duración)." },
            { t: "resultado", label: "Resultado", text: "El sinónimo correcto es \"pasajero\"." }
          ],
          quick: ["\"Instante\" ya sugiere algo breve — busca la palabra que coincida con esa brevedad.", "Descarta las tres palabras que significan \"larga duración\"."]
        },
        {
          title: "Antónimo en contexto",
          q: "Elige el antónimo de \"meticuloso\" en: \"A pesar de ser tan meticuloso, cometió varios errores por descuido\".",
          options: ["Cuidadoso", "Detallista", "Descuidado", "Minucioso"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "\"Meticuloso\" = cuidadoso, atento a los detalles." },
            { t: "plantea", label: "Plantea", text: "Busca la opción de significado OPUESTO, no sinónimo." },
            { t: "resuelve", label: "Desarrolla", text: "Cuidadoso, detallista y minucioso son sinónimos de meticuloso." },
            { t: "resultado", label: "Resultado", text: "\"Descuidado\" es el antónimo correcto." }
          ],
          quick: ["Elimina primero los sinónimos evidentes.", "Lo que queda es el antónimo casi siempre."]
        },
        {
          title: "Interpretación de refrán I",
          q: "¿Qué significa el refrán \"Al que madruga, Dios lo ayuda\"?",
          options: ["Solo las personas religiosas tienen éxito", "La constancia y la iniciativa traen recompensas", "Es obligatorio levantarse muy temprano cada día", "El éxito depende únicamente de la suerte"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Refrán: \"Al que madruga, Dios lo ayuda\"." },
            { t: "plantea", label: "Plantea", text: "Busca el sentido FIGURADO: \"madrugar\" simboliza tomar la iniciativa, no literalmente despertar temprano." },
            { t: "resuelve", label: "Desarrolla", text: "El refrán conecta la anticipación y el esfuerzo con buenos resultados." },
            { t: "resultado", label: "Resultado", text: "La constancia y la iniciativa traen recompensas." }
          ],
          quick: ["Descarta opciones literales o absolutas (\"obligatorio\", \"únicamente\").", "Quédate con la idea general de esfuerzo → recompensa."]
        },
        {
          title: "Interpretación de refrán II",
          q: "¿Qué significa el refrán \"Más vale pájaro en mano que cien volando\"?",
          options: ["Es mejor tener algo seguro que arriesgarlo todo por más, pero incierto", "Nunca hay que cazar animales", "Cien es siempre mejor que uno", "Hay que arriesgarse siempre a ganar más"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Refrán: comparar un pájaro seguro (en mano) contra cien inciertos (volando)." },
            { t: "plantea", label: "Plantea", text: "El contraste clave es SEGURO (uno) vs. INCIERTO (cien, que podrían no atraparse)." },
            { t: "resuelve", label: "Desarrolla", text: "El refrán valora la certeza de lo poco por encima del riesgo de perseguir mucho más." },
            { t: "resultado", label: "Resultado", text: "Es mejor tener algo seguro que arriesgarlo todo por más, pero incierto." }
          ],
          quick: ["Busca el contraste seguro vs. arriesgado en el refrán.", "La respuesta casi siempre favorece la prudencia, no el riesgo."]
        },
        {
          title: "Completar oración coherente",
          q: "Completa: \"Aunque llovía intensamente, decidieron ______ la excursión.\"",
          options: ["Cancelar", "Continuar", "Olvidar", "Posponer"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Conector \"Aunque\" indica CONTRASTE con la condición adversa (lluvia intensa)." },
            { t: "plantea", label: "Plantea", text: "Si \"aunque\" contrasta con la lluvia, la acción debe ir EN CONTRA de lo esperado (que sería cancelar)." },
            { t: "resuelve", label: "Desarrolla", text: "Cancelar, olvidar y posponer serían la reacción \"esperada\" ante la lluvia, no la contrastante." },
            { t: "resultado", label: "Resultado", text: "\"Continuar\" es la única opción coherente con el contraste que exige \"aunque\"." }
          ],
          quick: ["\"Aunque\" siempre anuncia una acción que va CONTRA lo esperado por la primera parte de la oración."]
        },
        {
          title: "Plan de redacción (ordenar ideas)",
          q: "Ordena: I. El vapor se condensa formando nubes. II. El agua se evapora por el calor del sol. III. Las nubes liberan agua en forma de lluvia. IV. La lluvia se acumula en ríos y mares.",
          options: ["II, I, III, IV", "I, II, III, IV", "IV, II, I, III", "II, III, I, IV"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "4 pasos del ciclo del agua, desordenados." },
            { t: "plantea", label: "Plantea", text: "Sigue la secuencia física real del fenómeno, de causa a efecto." },
            { t: "resuelve", label: "Desarrolla", text: "Primero se evapora el agua (II), luego el vapor se condensa en nubes (I), después llueve (III), y finalmente el agua se acumula (IV)." },
            { t: "resultado", label: "Resultado", text: "Orden correcto: II, I, III, IV." }
          ],
          quick: ["En procesos naturales o técnicos, ordena según la secuencia lógica causa→efecto.", "Busca la acción que \"inicia\" la cadena (aquí, la evaporación)."]
        },
        {
          title: "Comprensión de idea principal",
          q: "\"El que no vive para servir, no sirve para vivir.\" ¿Cuál es la idea principal?",
          options: ["Solo las personas que trabajan tienen valor", "La vida adquiere sentido cuando se pone al servicio de los demás", "Servir a otros es una obligación legal", "Quien no trabaja no puede sobrevivir"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Frase: juego de palabras entre \"servir\" (ayudar) y \"servir\" (tener utilidad/valor)." },
            { t: "plantea", label: "Plantea", text: "Interpreta el sentido FIGURADO, no el literal de \"trabajar\" o \"ley\"." },
            { t: "resuelve", label: "Desarrolla", text: "La frase conecta el propósito de vivir con la acción de ayudar a los demás." },
            { t: "resultado", label: "Resultado", text: "La vida adquiere sentido cuando se pone al servicio de los demás." }
          ],
          quick: ["Cuidado con interpretar \"servir\" en sentido literal de \"trabajo\" — es una trampa común.", "Busca la opción con el sentido más amplio y humano, no el más literal."]
        },
        {
          title: "Intruso semántico",
          q: "Identifica la palabra que NO pertenece al grupo por su significado: Rápido, veloz, ágil, lento.",
          options: ["Rápido", "Veloz", "Ágil", "Lento"], correct: 3,
          full: [
            { t: "dato", label: "Datos", text: "Grupo de palabras: rápido, veloz, ágil, lento." },
            { t: "plantea", label: "Plantea", text: "Busca el campo semántico común entre la mayoría de palabras." },
            { t: "resuelve", label: "Desarrolla", text: "Rápido, veloz y ágil son sinónimos relacionados con la velocidad." },
            { t: "resultado", label: "Resultado", text: "\"Lento\" es la única de significado opuesto (antónimo del grupo)." }
          ],
          quick: ["Agrupa mentalmente las palabras que son sinónimas entre sí.", "La que sobra suele ser el antónimo del resto."]
        }
      ]
    },

    // ======================= MATEMÁTICAS =======================
    {
      key: "matematicas", title: "Matemáticas", color: "#132a44",
      description: "Álgebra, inecuaciones, fracciones, progresiones, geometría, sistemas de ecuaciones, logaritmos y estadística.",
      problems: [
        {
          title: "Despejar una ecuación lineal",
          q: "Despejar x en: 5x − 7 = 28",
          options: ["x = 6", "x = 7", "x = 8", "x = 9"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Ecuación: 5x − 7 = 28." },
            { t: "plantea", label: "Plantea", text: "Aísla el término con x pasando el −7 al otro lado (cambia de signo)." },
            { t: "resuelve", label: "Desarrolla", text: "5x = 28 + 7 = 35. Divide entre 5." },
            { t: "resultado", label: "Resultado", text: "x = 7." }
          ],
          quick: ["Lo que resta pasa sumando; lo que multiplica pasa dividiendo.", "28+7=35, 35/5=7. Comprueba: 5×7−7=28 ✓."]
        },
        {
          title: "Resolver una inecuación",
          q: "Resolver: 2x − 5 ≤ 9",
          options: ["x ≤ 7", "x ≥ 7", "x ≤ 2", "x ≥ 2"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Inecuación: 2x − 5 ≤ 9." },
            { t: "plantea", label: "Plantea", text: "Se despeja igual que una ecuación; el signo solo se invierte si divides/multiplicas por un negativo." },
            { t: "resuelve", label: "Desarrolla", text: "2x ≤ 9 + 5 = 14. Divide entre 2 (positivo, no cambia el signo)." },
            { t: "resultado", label: "Resultado", text: "x ≤ 7." }
          ],
          quick: ["Despeja como ecuación normal.", "REGLA CLAVE: solo invierte el signo si multiplicas/divides por un número NEGATIVO."]
        },
        {
          title: "Simplificar una fracción",
          q: "Simplificar la fracción: 42/56",
          options: ["2/3", "3/4", "5/7", "7/8"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Fracción: 42/56." },
            { t: "plantea", label: "Plantea", text: "Halla el Máximo Común Divisor (MCD) de 42 y 56." },
            { t: "resuelve", label: "Desarrolla", text: "MCD(42,56) = 14. Divide ambos términos: 42/14 = 3, 56/14 = 4." },
            { t: "resultado", label: "Resultado", text: "42/56 = 3/4." }
          ],
          quick: ["Divide varias veces entre 2 y 7 hasta que no se pueda más.", "42/56 → ÷2 → 21/28 → ÷7 → 3/4."]
        },
        {
          title: "Suma de progresión aritmética",
          q: "En la progresión 4, 9, 14, 19, ..., ¿cuánto suman los primeros 12 términos?",
          options: ["354", "366", "378", "390"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "a₁ = 4, diferencia d = 5, n = 12 términos." },
            { t: "plantea", label: "Plantea", text: "Fórmula: Sₙ = n/2 × [2a₁ + (n−1)d]." },
            { t: "resuelve", label: "Desarrolla", text: "S₁₂ = 12/2 × [2×4 + 11×5] = 6 × [8+55] = 6 × 63." },
            { t: "resultado", label: "Resultado", text: "S₁₂ = 378." }
          ],
          quick: ["Halla el último término: a₁₂ = 4 + 11×5 = 59.", "Suma = (primero + último)/2 × n = (4+59)/2 × 12 = 31.5×12 = 378."]
        },
        {
          title: "Progresión geométrica: n-ésimo término",
          q: "En la progresión geométrica 5, 10, 20, 40, ..., ¿cuál es el 8vo término?",
          options: ["480", "560", "640", "720"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "a₁ = 5, razón r = 2, se pide el término 8." },
            { t: "plantea", label: "Plantea", text: "Fórmula: aₙ = a₁ × r^(n−1)." },
            { t: "resuelve", label: "Desarrolla", text: "a₈ = 5 × 2^7 = 5 × 128." },
            { t: "resultado", label: "Resultado", text: "a₈ = 640." }
          ],
          quick: ["Duplica repetidamente desde el primer término: 5,10,20,40,80,160,320,640 (8 términos)."]
        },
        {
          title: "Teorema de Pitágoras",
          q: "Un triángulo rectángulo tiene catetos de 7 cm y 24 cm. ¿Cuánto mide la hipotenusa?",
          options: ["23 cm", "24 cm", "25 cm", "26 cm"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Catetos: 7 cm y 24 cm." },
            { t: "plantea", label: "Plantea", text: "Teorema de Pitágoras: hipotenusa² = cateto1² + cateto2²." },
            { t: "resuelve", label: "Desarrolla", text: "h² = 7² + 24² = 49 + 576 = 625." },
            { t: "resultado", label: "Resultado", text: "h = √625 = 25 cm." }
          ],
          quick: ["Memoriza la terna pitagórica 7-24-25 (muy común en exámenes).", "Otras ternas útiles: 3-4-5, 6-8-10, 5-12-13, 9-12-15, 8-15-17."]
        },
        {
          title: "Sistema de ecuaciones (suma y diferencia)",
          q: "La suma de dos números es 52 y su diferencia es 14. ¿Cuál es el número mayor?",
          options: ["30", "31", "32", "33"], correct: 3,
          full: [
            { t: "dato", label: "Datos", text: "x + y = 52;  x − y = 14." },
            { t: "plantea", label: "Plantea", text: "Sumar ambas ecuaciones elimina 'y' directamente." },
            { t: "resuelve", label: "Desarrolla", text: "(x+y)+(x−y) = 52+14 → 2x = 66 → x = 33." },
            { t: "resultado", label: "Resultado", text: "El número mayor es 33 (el menor es 52−33=19)." }
          ],
          quick: ["Truco directo: mayor = (suma + diferencia)/2. Menor = (suma − diferencia)/2.", "(52+14)/2 = 33."]
        },
        {
          title: "Área de figuras planas",
          q: "Hallar el área de un rectángulo de base 15 cm y altura 8 cm.",
          options: ["100 cm²", "110 cm²", "120 cm²", "130 cm²"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Base = 15 cm, altura = 8 cm." },
            { t: "plantea", label: "Plantea", text: "Área del rectángulo = base × altura." },
            { t: "resuelve", label: "Desarrolla", text: "Área = 15 × 8." },
            { t: "resultado", label: "Resultado", text: "Área = 120 cm²." }
          ],
          quick: ["Fórmula directa: base × altura = 15×8 = 120."]
        },
        {
          title: "Propiedades de logaritmos",
          q: "Hallar el valor de x en: log x = log 12 + log 3 − log 4",
          options: ["x = 6", "x = 9", "x = 12", "x = 15"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "log x = log 12 + log 3 − log 4." },
            { t: "plantea", label: "Plantea", text: "Propiedades: log a + log b = log(a×b);  log a − log b = log(a/b)." },
            { t: "resuelve", label: "Desarrolla", text: "log x = log(12 × 3 / 4) = log(36/4) = log 9." },
            { t: "resultado", label: "Resultado", text: "x = 9." }
          ],
          quick: ["Convierte sumas de logaritmos en multiplicación y restas en división: (12×3)/4 = 9."]
        },
        {
          title: "Estadística: la mediana",
          q: "Hallar la mediana del siguiente grupo de datos: 12, 15, 11, 18, 14, 20, 13",
          options: ["13", "14", "15", "16"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Datos: 12, 15, 11, 18, 14, 20, 13 (7 datos)." },
            { t: "plantea", label: "Plantea", text: "Ordena los datos de menor a mayor y ubica el valor central." },
            { t: "resuelve", label: "Desarrolla", text: "Ordenados: 11, 12, 13, 14, 15, 18, 20. Con 7 datos, el valor central es el 4to." },
            { t: "resultado", label: "Resultado", text: "La mediana es 14." }
          ],
          quick: ["Siempre ordena antes de buscar la mediana.", "Con un número IMPAR de datos, la mediana es exactamente el del medio."]
        }
      ]
    },

    // ======================= FÍSICA =======================
    {
      key: "fisica", title: "Física", color: "#132a44",
      description: "Cinemática, dinámica (leyes de Newton), trabajo y energía, densidad, electricidad y presión.",
      problems: [
        {
          title: "MRU: encuentro de dos móviles",
          q: "Dos autos separados por 200 m se mueven uno hacia el otro a 20 m/s y 30 m/s. ¿En qué tiempo se cruzan?",
          options: ["3 s", "4 s", "5 s", "6 s"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Distancia = 200 m. Velocidades: 20 m/s y 30 m/s, en sentidos opuestos (se acercan)." },
            { t: "plantea", label: "Plantea", text: "Cuando dos móviles se acercan, sus velocidades se SUMAN (velocidad relativa de acercamiento)." },
            { t: "resuelve", label: "Desarrolla", text: "Velocidad de acercamiento = 20+30 = 50 m/s. Tiempo = distancia/velocidad = 200/50." },
            { t: "resultado", label: "Resultado", text: "Se cruzan en 4 segundos." }
          ],
          quick: ["Si se acercan: SUMA las velocidades. Si uno alcanza al otro (mismo sentido): RESTA las velocidades.", "200/50 = 4 s."]
        },
        {
          title: "Segunda ley de Newton",
          q: "¿Qué fuerza neta se necesita para acelerar un objeto de 8 kg a 3 m/s²?",
          options: ["11 N", "16 N", "24 N", "32 N"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Masa = 8 kg. Aceleración = 3 m/s²." },
            { t: "plantea", label: "Plantea", text: "Segunda ley de Newton: F = m × a." },
            { t: "resuelve", label: "Desarrolla", text: "F = 8 × 3." },
            { t: "resultado", label: "Resultado", text: "F = 24 N." }
          ],
          quick: ["Fórmula directa F=m·a: solo multiplica los datos dados.", "8×3=24 N."]
        },
        {
          title: "Tercera ley de Newton (acción y reacción)",
          q: "Un boxeador golpea una bolsa con una fuerza de 300 N. Según la tercera ley de Newton, ¿qué fuerza ejerce la bolsa sobre el puño del boxeador?",
          options: ["0 N (la bolsa no ejerce fuerza)", "150 N, en la misma dirección", "300 N, en dirección opuesta", "600 N, en dirección opuesta"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Fuerza del puño sobre la bolsa = 300 N." },
            { t: "plantea", label: "Plantea", text: "Tercera ley de Newton: a toda acción le corresponde una reacción de igual magnitud y sentido opuesto." },
            { t: "resuelve", label: "Desarrolla", text: "La bolsa ejerce sobre el puño una fuerza de la MISMA magnitud (300 N) pero en dirección CONTRARIA." },
            { t: "resultado", label: "Resultado", text: "300 N, en dirección opuesta." }
          ],
          quick: ["Acción-reacción siempre tienen IGUAL magnitud y sentido OPUESTO — nunca se suman ni se anulan entre sí porque actúan sobre cuerpos distintos."]
        },
        {
          title: "Caída libre (MRUV)",
          q: "Se deja caer un objeto desde el reposo. Si tarda 3 s en llegar al suelo (g = 10 m/s²), ¿desde qué altura cayó?",
          options: ["30 m", "35 m", "40 m", "45 m"], correct: 3,
          full: [
            { t: "dato", label: "Datos", text: "Velocidad inicial = 0 (reposo). Tiempo = 3 s. g = 10 m/s²." },
            { t: "plantea", label: "Plantea", text: "Fórmula de caída libre desde el reposo: h = ½ × g × t²." },
            { t: "resuelve", label: "Desarrolla", text: "h = ½ × 10 × 3² = ½ × 10 × 9 = 45." },
            { t: "resultado", label: "Resultado", text: "La altura es 45 m." }
          ],
          quick: ["Memoriza h=½gt² con g=10: h=5×t².", "Aquí: 5 × 3² = 5×9 = 45 m."]
        },
        {
          title: "Lanzamiento horizontal (tiro parabólico)",
          q: "Un objeto es lanzado horizontalmente a 20 m/s desde un edificio y tarda 2 s en tocar el suelo. ¿Qué distancia horizontal recorrió?",
          options: ["30 m", "35 m", "40 m", "45 m"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Velocidad horizontal = 20 m/s (constante). Tiempo de vuelo = 2 s." },
            { t: "plantea", label: "Plantea", text: "En un lanzamiento horizontal, el movimiento horizontal es independiente de la caída y tiene velocidad constante: x = v × t." },
            { t: "resuelve", label: "Desarrolla", text: "x = 20 × 2." },
            { t: "resultado", label: "Resultado", text: "x = 40 m." }
          ],
          quick: ["El eje horizontal en tiro parabólico es SIEMPRE velocidad constante: distancia = v×t.", "20×2=40 m."]
        },
        {
          title: "Trabajo mecánico",
          q: "Se aplica una fuerza de 50 N sobre un objeto, moviéndolo 6 metros en la misma dirección de la fuerza. ¿Cuál es el trabajo realizado?",
          options: ["200 J", "250 J", "300 J", "350 J"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Fuerza = 50 N. Distancia = 6 m (misma dirección que la fuerza)." },
            { t: "plantea", label: "Plantea", text: "Trabajo mecánico: W = F × d (cuando la fuerza y el desplazamiento están alineados)." },
            { t: "resuelve", label: "Desarrolla", text: "W = 50 × 6." },
            { t: "resultado", label: "Resultado", text: "W = 300 Joules." }
          ],
          quick: ["Fórmula directa W=F·d: 50×6=300 J."]
        },
        {
          title: "Energía cinética",
          q: "¿Cuál es la energía cinética de un objeto de 4 kg que se mueve a 5 m/s?",
          options: ["20 J", "40 J", "50 J", "100 J"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Masa = 4 kg. Velocidad = 5 m/s." },
            { t: "plantea", label: "Plantea", text: "Fórmula: Ec = ½ × m × v²." },
            { t: "resuelve", label: "Desarrolla", text: "Ec = ½ × 4 × 5² = ½ × 4 × 25 = ½ × 100." },
            { t: "resultado", label: "Resultado", text: "Ec = 50 Joules." }
          ],
          quick: ["Eleva la velocidad al cuadrado primero (5²=25), luego multiplica por masa y divide entre 2.", "4×25=100, 100/2=50 J."]
        },
        {
          title: "Densidad",
          q: "Un objeto tiene una masa de 270 g y ocupa un volumen de 30 cm³. ¿Cuál es su densidad?",
          options: ["7 g/cm³", "8 g/cm³", "9 g/cm³", "10 g/cm³"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Masa = 270 g. Volumen = 30 cm³." },
            { t: "plantea", label: "Plantea", text: "Fórmula: densidad = masa / volumen." },
            { t: "resuelve", label: "Desarrolla", text: "ρ = 270 / 30." },
            { t: "resultado", label: "Resultado", text: "ρ = 9 g/cm³." }
          ],
          quick: ["Divide directo masa entre volumen: 270/30=9."]
        },
        {
          title: "Ley de Ohm",
          q: "En un circuito, la fuente entrega 12 V y la resistencia es de 4 Ω. ¿Cuál es la corriente que circula?",
          options: ["2 A", "3 A", "4 A", "48 A"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Voltaje = 12 V. Resistencia = 4 Ω." },
            { t: "plantea", label: "Plantea", text: "Ley de Ohm: V = I × R, de donde I = V/R." },
            { t: "resuelve", label: "Desarrolla", text: "I = 12 / 4." },
            { t: "resultado", label: "Resultado", text: "I = 3 Amperios." }
          ],
          quick: ["I=V/R directo: 12/4=3 A. (V=I×R si preguntan voltaje; R=V/I si preguntan resistencia)."]
        },
        {
          title: "Presión hidrostática",
          q: "¿Cuál es la presión hidrostática a 5 metros de profundidad en agua (densidad = 1000 kg/m³, g = 10 m/s²)?",
          options: ["25 000 Pa", "40 000 Pa", "50 000 Pa", "60 000 Pa"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Profundidad h = 5 m. Densidad ρ = 1000 kg/m³. g = 10 m/s²." },
            { t: "plantea", label: "Plantea", text: "Fórmula de presión hidrostática: P = ρ × g × h." },
            { t: "resuelve", label: "Desarrolla", text: "P = 1000 × 10 × 5." },
            { t: "resultado", label: "Resultado", text: "P = 50 000 Pascales (50 kPa)." }
          ],
          quick: ["Multiplica los tres datos en orden: 1000×10×5 = 50 000 Pa.", "A mayor profundidad, mayor presión — relación directa y lineal."]
        }
      ]
    },

    // ======================= LENGUA Y LITERATURA =======================
    {
      key: "lengua", title: "Lengua y Literatura", color: "#132a44",
      description: "Figuras literarias, gramática, vocabulario en contexto, tipos de texto, ortografía y comprensión lectora.",
      problems: [
        {
          title: "Figura literaria: personificación",
          q: "\"El viento susurraba secretos entre los árboles.\" ¿Qué figura literaria se usa?",
          options: ["Metáfora", "Personificación", "Hipérbole", "Anáfora"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Frase: el viento \"susurraba secretos\"." },
            { t: "plantea", label: "Plantea", text: "Identifica si se atribuye una cualidad HUMANA a algo que no lo es." },
            { t: "resuelve", label: "Desarrolla", text: "\"Susurrar\" es una acción humana (hablar), atribuida al viento (elemento natural)." },
            { t: "resultado", label: "Resultado", text: "Es una personificación." }
          ],
          quick: ["Si un objeto o elemento natural \"actúa como persona\" (habla, siente, piensa) → personificación."]
        },
        {
          title: "Figura literaria: metáfora",
          q: "\"Sus ojos eran dos luceros brillando en la noche.\" ¿Qué figura literaria se usa?",
          options: ["Símil", "Metáfora", "Hipérbole", "Aliteración"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Frase: los ojos SON dos luceros (sin usar \"como\")." },
            { t: "plantea", label: "Plantea", text: "Identifica si se compara con \"como\" (símil) o si se identifica directamente un elemento con otro (metáfora)." },
            { t: "resuelve", label: "Desarrolla", text: "No hay \"como\": se dice directamente que los ojos SON luceros." },
            { t: "resultado", label: "Resultado", text: "Es una metáfora." }
          ],
          quick: ["¿Aparece la palabra \"como\"? Si sí → símil. Si no, y se identifican dos cosas directamente → metáfora."]
        },
        {
          title: "Figura literaria: símil e hipérbole",
          q: "\"Corría como el viento y lloraba ríos de lágrimas.\" ¿Qué par de figuras literarias contiene esta frase?",
          options: ["Metáfora e hipérbole", "Símil e hipérbole", "Personificación y símil", "Aliteración y metáfora"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Frase 1: \"corría como el viento\" (usa \"como\"). Frase 2: \"lloraba ríos de lágrimas\" (exageración imposible)." },
            { t: "plantea", label: "Plantea", text: "La comparación explícita con \"como\" es un símil. La exageración extrema es una hipérbole." },
            { t: "resuelve", label: "Desarrolla", text: "\"Corría como el viento\" compara con \"como\" → símil. \"Ríos de lágrimas\" exagera la cantidad de llanto → hipérbole." },
            { t: "resultado", label: "Resultado", text: "Símil e hipérbole." }
          ],
          quick: ["\"Como\" = símil siempre. Exageración extrema e imposible = hipérbole."]
        },
        {
          title: "Sujeto y predicado",
          q: "Identifica el sujeto de: \"Los estudiantes de la facultad presentaron su proyecto de tesis.\"",
          options: ["Su proyecto de tesis", "La facultad", "Los estudiantes de la facultad", "Presentaron"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Oración: \"Los estudiantes de la facultad presentaron su proyecto de tesis\"." },
            { t: "plantea", label: "Plantea", text: "El sujeto es QUIEN realiza la acción del verbo; pregúntate: ¿quién presentó?" },
            { t: "resuelve", label: "Desarrolla", text: "Quien presenta es \"Los estudiantes de la facultad\" (frase nominal completa, no solo \"la facultad\")." },
            { t: "resultado", label: "Resultado", text: "El sujeto es \"Los estudiantes de la facultad\"." }
          ],
          quick: ["Pregunta \"¿quién + verbo?\" al inicio de la oración.", "El sujeto incluye TODO su grupo nominal, no solo el núcleo."]
        },
        {
          title: "Vocabulario en contexto",
          q: "Completa: \"El testigo narró los hechos con tanta ______ que nadie dudó de su versión.\"",
          options: ["Confusión", "Precisión", "Timidez", "Indiferencia"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Consecuencia dada: \"nadie dudó de su versión\"." },
            { t: "plantea", label: "Plantea", text: "Busca la palabra cuya CONSECUENCIA lógica sea generar credibilidad." },
            { t: "resuelve", label: "Desarrolla", text: "Confusión, timidez e indiferencia generarían dudas, no confianza." },
            { t: "resultado", label: "Resultado", text: "\"Precisión\" es la única palabra coherente con generar certeza en el oyente." }
          ],
          quick: ["Lee la CONSECUENCIA de la oración primero (después de \"que\").", "Elige la palabra que explique lógicamente esa consecuencia."]
        },
        {
          title: "Tipo de texto",
          q: "¿Qué tipo de texto predomina en: \"Se recomienda calentar el aceite antes de añadir la cebolla picada\"?",
          options: ["Narrativo", "Instructivo", "Argumentativo", "Descriptivo"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Texto: indicaciones para cocinar, en orden." },
            { t: "plantea", label: "Plantea", text: "Identifica la función del texto: ¿cuenta una historia, da indicaciones, describe o convence?" },
            { t: "resuelve", label: "Desarrolla", text: "Da instrucciones ordenadas paso a paso para lograr un resultado (como una receta)." },
            { t: "resultado", label: "Resultado", text: "Es un texto instructivo." }
          ],
          quick: ["Si ves verbos en infinitivo/imperativo dando pasos ordenados → instructivo.", "Si narra hechos en el tiempo → narrativo; si busca convencer → argumentativo."]
        },
        {
          title: "Ortografía: tilde diacrítica",
          q: "Selecciona la opción con el uso correcto de la tilde diacrítica.",
          options: ["Él llegó temprano / El almuerzo estuvo rico", "El llegó temprano / Él almuerzo estuvo rico", "Él llegó temprano / Él almuerzo estuvo rico", "El llegó temprano / El almuerzo estuvo rico"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "\"Él\" (con tilde) = pronombre personal. \"El\" (sin tilde) = artículo." },
            { t: "plantea", label: "Plantea", text: "Pregúntate si la palabra reemplaza a una persona (pronombre, lleva tilde) o acompaña a un sustantivo (artículo, sin tilde)." },
            { t: "resuelve", label: "Desarrolla", text: "\"Él llegó\" → él es sujeto/persona (pronombre, con tilde). \"El almuerzo\" → acompaña al sustantivo \"almuerzo\" (artículo, sin tilde)." },
            { t: "resultado", label: "Resultado", text: "\"Él llegó temprano / El almuerzo estuvo rico\" es la combinación correcta." }
          ],
          quick: ["Si puedes reemplazar la palabra por \"ella\" o un nombre propio → es pronombre, lleva tilde.", "Si va pegado a un sustantivo (\"el almuerzo\") → es artículo, sin tilde."]
        },
        {
          title: "Función del conector textual",
          q: "¿Qué función cumple el conector \"sin embargo\" en un texto?",
          options: ["Añadir una idea similar", "Introducir una contraposición o contraste", "Concluir el texto", "Dar un ejemplo"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Conector: \"sin embargo\"." },
            { t: "plantea", label: "Plantea", text: "Clasifica el conector según su función: aditivo, adversativo/contraste, consecutivo, o de ejemplo." },
            { t: "resuelve", label: "Desarrolla", text: "\"Sin embargo\" introduce una idea que va en sentido contrario a la anterior." },
            { t: "resultado", label: "Resultado", text: "Es un conector adversativo: introduce contraste." }
          ],
          quick: ["Memoriza grupos: \"además/asimismo\"=suma; \"sin embargo/no obstante\"=contraste; \"por lo tanto\"=consecuencia; \"por ejemplo\"=ejemplo."]
        },
        {
          title: "Comprensión lectora: idea principal",
          q: "\"La educación no cambia el mundo, cambia a las personas que van a cambiar el mundo.\" ¿Cuál es la idea principal?",
          options: ["La educación no tiene ningún efecto real", "La educación transforma indirectamente al mundo, a través de las personas", "El mundo cambia sin necesidad de educación", "Solo algunas personas pueden cambiar el mundo"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Frase: la educación no cambia el mundo directamente, cambia a las personas." },
            { t: "plantea", label: "Plantea", text: "Distingue causa directa de causa indirecta: la frase niega el efecto DIRECTO pero afirma un efecto INDIRECTO." },
            { t: "resuelve", label: "Desarrolla", text: "El efecto es en cadena: educación → persona transformada → esa persona transforma el mundo." },
            { t: "resultado", label: "Resultado", text: "La educación transforma indirectamente al mundo, a través de las personas." }
          ],
          quick: ["Cuidado con la opción que toma la negación literal (\"no tiene efecto\") — es la trampa más común.", "Busca la opción que conserve el matiz \"indirecto\", no el extremo."]
        },
        {
          title: "Comprensión lectora: intención del autor",
          q: "En un texto que dice \"Debemos actuar ya frente al cambio climático, pues cada año que pasa el daño es más difícil de revertir\", ¿cuál es la intención principal del autor?",
          options: ["Informar de manera neutral sobre el clima", "Persuadir al lector de tomar acción inmediata", "Narrar una historia sobre el clima", "Describir el paisaje afectado por el clima"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "El texto usa \"debemos actuar ya\" y justifica con una consecuencia negativa creciente." },
            { t: "plantea", label: "Plantea", text: "Identifica si el texto solo informa, o si busca convencer al lector de hacer algo." },
            { t: "resuelve", label: "Desarrolla", text: "El uso de \"debemos\" (llamado a la acción) y la justificación urgente son marcas de un texto argumentativo/persuasivo." },
            { t: "resultado", label: "Resultado", text: "La intención principal es persuadir al lector de tomar acción inmediata." }
          ],
          quick: ["Busca verbos de mandato o exhortación (\"debemos\", \"hay que\") — son la marca típica de un texto persuasivo."]
        }
      ]
    }

  ]
};
