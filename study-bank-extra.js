// Banco de estudio — EXTENSIÓN (20 problemas adicionales por tema, variando la
// forma de plantear cada tipo y sumando dificultad: reglas de tres compuestas,
// falacias lógicas, ecuaciones cuadráticas, circuitos, figuras retóricas, etc.)
// Se fusiona automáticamente con window.STUDY_BANK al cargar.
window.STUDY_BANK_EXTRA = {
  topics: [

    // ======================= NUMÉRICO (20 extra) =======================
    {
      key: "numerico",
      problems: [
        {
          title: "Descuento porcentual inverso (hallar precio original)",
          q: "Después de un descuento del 15%, un artículo cuesta $340. ¿Cuál era su precio original?",
          options: ["$380", "$391", "$400", "$410"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Precio con descuento = $340. Descuento aplicado = 15%." },
            { t: "plantea", label: "Plantea", text: "Si el precio final es el 85% del original: Precio original × 0.85 = 340." },
            { t: "resuelve", label: "Desarrolla", text: "Precio original = 340 / 0.85." },
            { t: "resultado", label: "Resultado", text: "Precio original = $400." }
          ],
          quick: ["Cuando dan el precio FINAL y el %, divide entre (1 − descuento): 340/0.85=400.", "Nunca multipliques por 0.85 cuando ya tienes el precio con descuento — hay que dividir."]
        },
        {
          title: "Descuento seguido de IVA",
          q: "Un artículo de $500 tiene un descuento del 20%, y luego se le agrega un IVA del 12% sobre el precio ya rebajado. ¿Cuál es el precio final?",
          options: ["$428", "$440", "$448", "$460"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Precio = $500. Descuento = 20%. IVA = 12% (sobre el precio con descuento)." },
            { t: "plantea", label: "Plantea", text: "Aplica los porcentajes en el orden indicado: primero el descuento, luego el IVA sobre ese resultado." },
            { t: "resuelve", label: "Desarrolla", text: "Con descuento: 500 × 0.80 = $400. Con IVA: 400 × 1.12." },
            { t: "resultado", label: "Resultado", text: "Precio final = $448." }
          ],
          quick: ["Encadena los factores en el orden del enunciado: 500 × 0.80 × 1.12 = 448."]
        },
        {
          title: "Reparto proporcional en tres partes",
          q: "Se reparten $960 entre tres personas en la razón 2:3:5. ¿Cuánto recibe la persona con la mayor parte?",
          options: ["$380", "$420", "$460", "$480"], correct: 3,
          full: [
            { t: "dato", label: "Datos", text: "Total = $960. Razón de reparto = 2:3:5 (10 partes en total)." },
            { t: "plantea", label: "Plantea", text: "Valor de 1 parte = Total / número total de partes." },
            { t: "resuelve", label: "Desarrolla", text: "1 parte = 960/10 = $96. La mayor parte tiene 5 partes: 96 × 5." },
            { t: "resultado", label: "Resultado", text: "La persona con mayor parte recibe $480." }
          ],
          quick: ["Suma las partes de la razón (2+3+5=10), divide el total entre esa suma, y multiplica por la parte que preguntan."]
        },
        {
          title: "Regla de tres simple directa (rendimiento de combustible)",
          q: "Un auto recorre 180 km con 15 litros de gasolina. ¿Cuántos litros necesita para recorrer 300 km, al mismo rendimiento?",
          options: ["20 L", "22 L", "25 L", "28 L"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "180 km → 15 L. Se pregunta por 300 km." },
            { t: "plantea", label: "Plantea", text: "A más distancia, más litros: relación DIRECTA." },
            { t: "resuelve", label: "Desarrolla", text: "Rendimiento = 180/15 = 12 km por litro. Litros para 300 km = 300/12." },
            { t: "resultado", label: "Resultado", text: "Se necesitan 25 litros." }
          ],
          quick: ["Halla cuánto recorre con 1 litro (180/15=12 km/L).", "Divide la nueva distancia entre ese rendimiento: 300/12=25 L."]
        },
        {
          title: "Regla de tres compuesta I (obreros, horas y días)",
          q: "Si 6 obreros trabajando 8 horas diarias construyen un muro en 10 días, ¿cuántos días tardarán 4 obreros trabajando 6 horas diarias?",
          options: ["16 días", "18 días", "20 días", "22 días"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "6 obreros × 8 h/día × 10 días = trabajo total (en \"obrero-horas\")." },
            { t: "plantea", label: "Plantea", text: "El trabajo total (obreros × horas × días) es constante para la misma obra." },
            { t: "resuelve", label: "Desarrolla", text: "Trabajo total = 6×8×10 = 480 obrero-horas. Con 4 obreros × 6 h/día = 24 obrero-horas por día. Días = 480/24." },
            { t: "resultado", label: "Resultado", text: "Tardarán 20 días." }
          ],
          quick: ["Multiplica los 3 datos conocidos: 6×8×10=480.", "Divide entre el producto de los 2 nuevos datos: 480/(4×6)=480/24=20 días."]
        },
        {
          title: "Regla de tres compuesta II (grifos y caudal)",
          q: "12 grifos con un caudal de 15 L/min llenan un tanque en 4 horas. ¿Cuántas horas tardarán 6 grifos con un caudal de 20 L/min en llenar el mismo tanque?",
          options: ["5 horas", "6 horas", "7 horas", "8 horas"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "El volumen del tanque es constante = (N° grifos) × (caudal) × (tiempo)." },
            { t: "plantea", label: "Plantea", text: "Volumen = 12 × 15 × 4 = 720 (unidades proporcionales de volumen)." },
            { t: "resuelve", label: "Desarrolla", text: "Con 6 grifos y caudal 20: nuevo producto grifos×caudal = 6×20 = 120. Horas = 720/120." },
            { t: "resultado", label: "Resultado", text: "Tardarán 6 horas." }
          ],
          quick: ["Multiplica los 3 datos originales: 12×15×4=720.", "Divide entre el producto de los 2 nuevos datos: 720/(6×20)=6 horas."]
        },
        {
          title: "Regla de tres compuesta III (con tres variables y trabajo doble)",
          q: "8 obreros trabajando 6 horas diarias tardan 15 días en pavimentar una calle. ¿Cuántos días tardarán 10 obreros trabajando 8 horas diarias en pavimentar una calle del DOBLE de longitud?",
          options: ["16 días", "18 días", "20 días", "24 días"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Trabajo original = 8×6×15 = 720 obrero-horas, para pavimentar 1 calle (longitud L)." },
            { t: "plantea", label: "Plantea", text: "Para el DOBLE de longitud (2L), se necesita el DOBLE de trabajo: 720×2 = 1440 obrero-horas." },
            { t: "resuelve", label: "Desarrolla", text: "Nueva capacidad diaria = 10 obreros × 8 h = 80 obrero-horas por día. Días = 1440/80." },
            { t: "resultado", label: "Resultado", text: "Tardarán 18 días." }
          ],
          quick: ["Con 3 o más variables: calcula el trabajo total requerido (ajustando por el factor de la obra, aquí ×2), y luego divide entre la nueva capacidad diaria."]
        },
        {
          title: "Mezcla de concentraciones",
          q: "Se mezclan 4 litros de una solución al 20% de alcohol con 6 litros de una solución al 40% de alcohol. ¿Cuál es la concentración de la mezcla final?",
          options: ["28%", "30%", "32%", "34%"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "4 L al 20% y 6 L al 40%. Total = 10 L." },
            { t: "plantea", label: "Plantea", text: "Cantidad de alcohol puro = suma de (volumen × concentración) de cada solución." },
            { t: "resuelve", label: "Desarrolla", text: "Alcohol puro = 4×0.20 + 6×0.40 = 0.8 + 2.4 = 3.2 L, en un total de 10 L." },
            { t: "resultado", label: "Resultado", text: "Concentración final = 3.2/10 = 32%." }
          ],
          quick: ["Suma las cantidades puras (volumen×%) y divide entre el volumen total: 3.2/10=0.32=32%."]
        },
        {
          title: "Progresión aritmética: término específico",
          q: "En la sucesión 5, 9, 13, 17, ..., ¿cuál es el término número 20?",
          options: ["77", "79", "81", "83"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "a₁ = 5, diferencia d = 4, se pide el término n=20." },
            { t: "plantea", label: "Plantea", text: "Fórmula del término n-ésimo: aₙ = a₁ + (n−1)×d." },
            { t: "resuelve", label: "Desarrolla", text: "a₂₀ = 5 + 19×4 = 5 + 76." },
            { t: "resultado", label: "Resultado", text: "a₂₀ = 81." }
          ],
          quick: ["No hace falta escribir toda la lista: usa aₙ=a₁+(n−1)d directo.", "5+19×4=81."]
        },
        {
          title: "Sucesión tipo Fibonacci",
          q: "¿Qué número continúa la sucesión: 1, 1, 2, 3, 5, 8, 13, ...?",
          options: ["18", "20", "21", "24"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Términos: 1,1,2,3,5,8,13." },
            { t: "plantea", label: "Plantea", text: "Cada término es la SUMA de los dos anteriores." },
            { t: "resuelve", label: "Desarrolla", text: "8 + 13 = 21." },
            { t: "resultado", label: "Resultado", text: "El siguiente número es 21." }
          ],
          quick: ["Suma los dos últimos términos: 8+13=21."]
        },
        {
          title: "Hallar el número original tras un aumento",
          q: "Después de un aumento del 25%, un salario es de $750. ¿Cuál era el salario original?",
          options: ["$580", "$600", "$620", "$640"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Salario final = $750, tras un aumento del 25%." },
            { t: "plantea", label: "Plantea", text: "Salario final = Salario original × 1.25." },
            { t: "resuelve", label: "Desarrolla", text: "Salario original = 750 / 1.25." },
            { t: "resultado", label: "Resultado", text: "Salario original = $600." }
          ],
          quick: ["Con el valor FINAL tras un aumento, divide entre (1 + tasa): 750/1.25=600."]
        },
        {
          title: "Número que aumentado en un % da otro número",
          q: "Un número aumentado en su 20% da 96. ¿Cuál es el número?",
          options: ["76", "78", "80", "82"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "x + 20% de x = 96, es decir, x × 1.20 = 96." },
            { t: "plantea", label: "Plantea", text: "Despeja x dividiendo entre 1.20." },
            { t: "resuelve", label: "Desarrolla", text: "x = 96 / 1.20." },
            { t: "resultado", label: "Resultado", text: "x = 80." }
          ],
          quick: ["\"Aumentado en su 20%\" siempre se traduce como ×1.20. Divide el resultado entre 1.20."]
        },
        {
          title: "Edades: relación de suma y múltiplo",
          q: "La suma de las edades de un padre y su hijo es 55 años. El padre tiene el cuádruple de la edad del hijo. ¿Qué edad tiene el hijo?",
          options: ["9", "10", "11", "12"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Hijo = x. Padre = 4x. Suma = 55." },
            { t: "plantea", label: "Plantea", text: "Plantea la ecuación: x + 4x = 55." },
            { t: "resuelve", label: "Desarrolla", text: "5x = 55 → x = 11." },
            { t: "resultado", label: "Resultado", text: "El hijo tiene 11 años (el padre tiene 44)." }
          ],
          quick: ["Suma los \"múltiplos de x\" (1x+4x=5x) e iguala a la suma dada: 55/5=11."]
        },
        {
          title: "Interés compuesto",
          q: "Un capital de $1000 se invierte al 10% de interés COMPUESTO anual. ¿Cuánto dinero hay después de 2 años?",
          options: ["$1180", "$1200", "$1210", "$1220"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Capital = $1000. Tasa = 10% anual, compuesto (se reinvierten los intereses)." },
            { t: "plantea", label: "Plantea", text: "Monto final = Capital × (1 + tasa)^(número de años)." },
            { t: "resuelve", label: "Desarrolla", text: "M = 1000 × (1.10)² = 1000 × 1.21." },
            { t: "resultado", label: "Resultado", text: "M = $1210." }
          ],
          quick: ["Diferencia clave con el interés simple: aquí se eleva (1+tasa) a la potencia del número de años, no se multiplica.", "1000×1.1×1.1=1210."]
        },
        {
          title: "Trabajo conjunto con tres personas",
          q: "Ana hace un trabajo sola en 4 días, Beto en 6 días y Carla en 12 días. ¿En cuántos días lo terminan los tres juntos?",
          options: ["1.5 días", "2 días", "2.5 días", "3 días"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Tasas diarias: Ana=1/4, Beto=1/6, Carla=1/12 del trabajo por día." },
            { t: "plantea", label: "Plantea", text: "Al trabajar juntos, las tasas se suman." },
            { t: "resuelve", label: "Desarrolla", text: "1/4+1/6+1/12 = 3/12+2/12+1/12 = 6/12 = 1/2 del trabajo por día." },
            { t: "resultado", label: "Resultado", text: "Si hacen 1/2 del trabajo por día, lo terminan en 2 días." }
          ],
          quick: ["Usa 12 como denominador común de 4,6,12: 3/12+2/12+1/12=6/12=1/2.", "1/2 por día = 2 días para terminar todo."]
        },
        {
          title: "Regla de tres inversa (velocidad y tiempo)",
          q: "Un auto a 60 km/h tarda 5 horas en llegar a su destino. ¿Cuánto tardaría un auto a 100 km/h en recorrer la misma distancia?",
          options: ["2 horas", "3 horas", "4 horas", "4.5 horas"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "60 km/h → 5 horas. Se pregunta por 100 km/h." },
            { t: "plantea", label: "Plantea", text: "A mayor velocidad, menos tiempo: relación INVERSA. La distancia es constante." },
            { t: "resuelve", label: "Desarrolla", text: "Distancia = 60 × 5 = 300 km. Tiempo con 100 km/h = 300/100." },
            { t: "resultado", label: "Resultado", text: "Tardaría 3 horas." }
          ],
          quick: ["Multiplica el par conocido para hallar la distancia fija: 60×5=300 km.", "Divide entre la nueva velocidad: 300/100=3 h."]
        },
        {
          title: "Probabilidad con cartas (figuras)",
          q: "De una baraja de 52 cartas, se saca una al azar. ¿Cuál es la probabilidad de que sea una figura (J, Q o K)?",
          options: ["1/13", "3/13", "1/4", "4/13"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Baraja de 52 cartas. Figuras: J, Q, K, hay 4 de cada una → 12 figuras en total." },
            { t: "plantea", label: "Plantea", text: "Probabilidad = casos favorables / casos totales." },
            { t: "resuelve", label: "Desarrolla", text: "P = 12/52." },
            { t: "resultado", label: "Resultado", text: "Simplificando: P = 3/13." }
          ],
          quick: ["12 figuras de 52 cartas: 12/52 se simplifica dividiendo entre 4 → 3/13."]
        },
        {
          title: "Probabilidad sin reemplazo (dos eventos)",
          q: "En una bolsa hay 3 bolas rojas y 2 azules. Se saca una bola al azar (sin regresarla) y luego otra. ¿Cuál es la probabilidad de sacar dos bolas rojas seguidas?",
          options: ["1/5", "3/10", "2/5", "1/2"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Bolsa: 3 rojas, 2 azules (5 en total). Se sacan 2 bolas sin reemplazo." },
            { t: "plantea", label: "Plantea", text: "P(dos rojas) = P(1ra roja) × P(2da roja, dado que la 1ra ya no está)." },
            { t: "resuelve", label: "Desarrolla", text: "P(1ra roja) = 3/5. Quedan 2 rojas de 4 bolas totales: P(2da roja) = 2/4. P total = 3/5 × 2/4." },
            { t: "resultado", label: "Resultado", text: "P = 6/20 = 3/10." }
          ],
          quick: ["Multiplica probabilidades sucesivas, reduciendo 1 bola del total cada vez: 3/5 × 2/4 = 3/10."]
        },
        {
          title: "Problema de alcance (mismo sentido)",
          q: "Un ciclista sale con 20 km de ventaja, viajando a 15 km/h. Otro ciclista sale a perseguirlo a 20 km/h en la misma dirección. ¿En cuánto tiempo lo alcanza?",
          options: ["3 horas", "4 horas", "5 horas", "6 horas"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Ventaja = 20 km. Velocidades: 15 km/h y 20 km/h, en el MISMO sentido (uno persigue al otro)." },
            { t: "plantea", label: "Plantea", text: "Cuando uno persigue al otro en el mismo sentido, las velocidades se RESTAN (velocidad relativa de aproximación)." },
            { t: "resuelve", label: "Desarrolla", text: "Velocidad relativa = 20−15 = 5 km/h. Tiempo = distancia/velocidad relativa = 20/5." },
            { t: "resultado", label: "Resultado", text: "Lo alcanza en 4 horas." }
          ],
          quick: ["Se acercan (sentidos opuestos): SUMA velocidades. Uno alcanza al otro (mismo sentido): RESTA velocidades.", "20/5=4 h."]
        },
        {
          title: "Porcentaje combinado con conteo total",
          q: "En una empresa, el 60% de los empleados son hombres. Si hay 48 mujeres, ¿cuántos empleados hay en total?",
          options: ["108", "115", "120", "125"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Hombres = 60% del total → Mujeres = 40% del total = 48." },
            { t: "plantea", label: "Plantea", text: "Si 48 corresponde al 40%, el total corresponde al 100%." },
            { t: "resuelve", label: "Desarrolla", text: "Total = 48 / 0.40." },
            { t: "resultado", label: "Resultado", text: "Total = 120 empleados." }
          ],
          quick: ["Si te dan hombres%, calcula primero el % de mujeres (100−60=40%).", "Divide el dato conocido entre ese porcentaje en decimal: 48/0.4=120."]
        }
      ]
    },

    // ======================= LÓGICO (20 extra) =======================
    {
      key: "logico",
      problems: [
        {
          title: "Silogismo negativo (Celarent)",
          q: "Premisa 1: Ningún reptil es mamífero. Premisa 2: Todas las serpientes son reptiles. ¿Qué se concluye?",
          options: ["Ninguna serpiente es mamífero", "Algunas serpientes son mamíferos", "Todos los mamíferos son serpientes", "No se puede concluir nada"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "P1: Reptil ∩ Mamífero = ∅. P2: Serpiente ⊆ Reptil." },
            { t: "plantea", label: "Plantea", text: "Si el conjunto \"serpientes\" está totalmente dentro de \"reptiles\", y \"reptiles\" no se cruza con \"mamíferos\"..." },
            { t: "resuelve", label: "Desarrolla", text: "Entonces \"serpientes\" tampoco se cruza con \"mamíferos\"." },
            { t: "resultado", label: "Resultado", text: "Ninguna serpiente es mamífero." }
          ],
          quick: ["Si A⊆B y B∩C=∅, entonces A∩C=∅ también.", "Dibuja los círculos: serpientes dentro de reptiles, y reptiles totalmente fuera de mamíferos."]
        },
        {
          title: "Silogismo disyuntivo",
          q: "O Juan está en casa o está en el trabajo. Juan no está en casa. ¿Qué se concluye?",
          options: ["Juan está en el trabajo", "Juan no está en el trabajo", "Juan está en ambos lugares", "No se puede concluir nada"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "\"O P o Q\" (disyunción exclusiva o inclusiva de dos opciones). Se sabe que NO P (no está en casa)." },
            { t: "plantea", label: "Plantea", text: "Si solo hay dos opciones posibles y una de ellas es falsa, la otra debe ser verdadera." },
            { t: "resuelve", label: "Desarrolla", text: "Como Juan no está en casa, y solo había dos lugares posibles..." },
            { t: "resultado", label: "Resultado", text: "Juan está en el trabajo." }
          ],
          quick: ["Regla del silogismo disyuntivo: \"O P o Q\" + \"no P\" → Q, siempre."]
        },
        {
          title: "Modus Ponens",
          q: "Si llueve, entonces el suelo se moja. Hoy está lloviendo. ¿Qué se concluye?",
          options: ["El suelo se moja", "El suelo no se moja", "No está lloviendo", "No se puede concluir nada"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Regla: Si P, entonces Q. Se cumple P (está lloviendo)." },
            { t: "plantea", label: "Plantea", text: "Modus Ponens: de \"Si P entonces Q\" y \"P es verdadero\", se concluye Q." },
            { t: "resuelve", label: "Desarrolla", text: "P (llueve) es verdadero, así que Q debe cumplirse." },
            { t: "resultado", label: "Resultado", text: "El suelo se moja." }
          ],
          quick: ["Modus Ponens es el razonamiento más directo y válido: afirmar P para concluir Q."]
        },
        {
          title: "Modus Tollens",
          q: "Si un animal es ave, entonces tiene plumas. Este animal no tiene plumas. ¿Qué se concluye?",
          options: ["Este animal es ave", "Este animal no es ave", "Este animal tiene plumas", "No se puede concluir nada"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Regla: Si P (ave), entonces Q (plumas). Se sabe que NO Q (no tiene plumas)." },
            { t: "plantea", label: "Plantea", text: "Modus Tollens: de \"Si P entonces Q\" y \"no Q\", se concluye \"no P\"." },
            { t: "resuelve", label: "Desarrolla", text: "Como no tiene plumas (no Q), no puede ser ave (no P)." },
            { t: "resultado", label: "Resultado", text: "Este animal no es ave." }
          ],
          quick: ["Modus Tollens: niega el consecuente (Q) para concluir la negación del antecedente (P)."]
        },
        {
          title: "Falacia de afirmación del consecuente (trampa)",
          q: "Si estudio, entonces apruebo el examen. Aprobé el examen. ¿Se puede concluir válidamente que estudié?",
          options: ["Sí, siempre se cumple", "No, es una falacia lógica — pudo aprobar sin estudiar", "Sí, porque aprobar implica estudiar", "No se puede saber si estudió o no, pero la lógica sí lo confirma"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Regla: Si P (estudio), entonces Q (apruebo). Se sabe que Q es verdadero (aprobó)." },
            { t: "plantea", label: "Plantea", text: "Afirmar el consecuente (Q) NO permite concluir el antecedente (P) — es una falacia común." },
            { t: "resuelve", label: "Desarrolla", text: "Pudo haber aprobado por otras razones (suerte, conocimiento previo) sin haber estudiado esta vez." },
            { t: "resultado", label: "Resultado", text: "No es válido — es la falacia de afirmación del consecuente." }
          ],
          quick: ["Cuidado: \"Si P entonces Q\" + \"Q\" NO permite concluir P. Es una de las trampas más frecuentes del examen."]
        },
        {
          title: "Negación de una conjunción (De Morgan)",
          q: "¿Cuál es la negación de \"Hoy hace frío y está lloviendo\"?",
          options: ["Hoy no hace frío y no está lloviendo", "Hoy no hace frío o no está lloviendo", "Hoy hace frío o está lloviendo", "Hoy hace calor y no llueve"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Proposición: \"P y Q\" (conjunción)." },
            { t: "plantea", label: "Plantea", text: "Ley de De Morgan: la negación de \"P y Q\" es \"no P O no Q\" (cambia \"y\" por \"o\")." },
            { t: "resuelve", label: "Desarrolla", text: "Basta con que UNA de las dos condiciones sea falsa para que la conjunción completa sea falsa." },
            { t: "resultado", label: "Resultado", text: "\"Hoy no hace frío o no está lloviendo\"." }
          ],
          quick: ["Regla De Morgan: niega \"P y Q\" → \"no P o no Q\" (el conector siempre cambia)."]
        },
        {
          title: "Negación de una disyunción (De Morgan)",
          q: "¿Cuál es la negación de \"Iré al cine o me quedaré en casa\"?",
          options: ["No iré al cine y no me quedaré en casa", "No iré al cine o no me quedaré en casa", "Iré al cine y me quedaré en casa", "Iré al cine y no me quedaré en casa"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Proposición: \"P o Q\" (disyunción)." },
            { t: "plantea", label: "Plantea", text: "Ley de De Morgan: la negación de \"P o Q\" es \"no P Y no Q\" (cambia \"o\" por \"y\")." },
            { t: "resuelve", label: "Desarrolla", text: "Para que la disyunción sea falsa, AMBAS opciones deben ser falsas." },
            { t: "resultado", label: "Resultado", text: "\"No iré al cine y no me quedaré en casa\"." }
          ],
          quick: ["Regla De Morgan: niega \"P o Q\" → \"no P y no Q\" (el conector siempre cambia)."]
        },
        {
          title: "Serie con patrón mixto (×2 +1)",
          q: "¿Qué número continúa la serie: 2, 5, 11, 23, 47, ...?",
          options: ["90", "93", "95", "98"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Serie: 2, 5, 11, 23, 47." },
            { t: "plantea", label: "Plantea", text: "Compara cada término con el anterior: 2×2+1=5, 5×2+1=11, 11×2+1=23, 23×2+1=47 — patrón: ×2, luego +1." },
            { t: "resuelve", label: "Desarrolla", text: "Aplica el mismo patrón: 47 × 2 + 1." },
            { t: "resultado", label: "Resultado", text: "El siguiente número es 95." }
          ],
          quick: ["Prueba \"×2+1\" en dos términos consecutivos para confirmar el patrón antes de aplicarlo."]
        },
        {
          title: "Serie con dos patrones intercalados",
          q: "¿Qué número continúa la serie: 3, 10, 6, 20, 9, 30, ...?",
          options: ["12", "13", "15", "40"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Serie: 3, 10, 6, 20, 9, 30." },
            { t: "plantea", label: "Plantea", text: "Separa la serie en dos: posiciones impares (3,6,9,...) y posiciones pares (10,20,30,...)." },
            { t: "resuelve", label: "Desarrolla", text: "Las posiciones impares suben de 3 en 3: 3, 6, 9, → siguiente 12. Las pares suben de 10 en 10." },
            { t: "resultado", label: "Resultado", text: "El siguiente término (posición impar) es 12." }
          ],
          quick: ["Si una serie 'salta' de forma irregular, prueba separarla en dos subseries (posiciones impares y pares)."]
        },
        {
          title: "Edades: relación en el pasado",
          q: "Hace 5 años, la edad de Marta era el triple de la edad de su hijo. Si el hijo tenía 4 años hace 5 años, ¿cuántos años tiene Marta actualmente?",
          options: ["15", "16", "17", "18"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Hace 5 años: hijo tenía 4 años, Marta tenía el triple." },
            { t: "plantea", label: "Plantea", text: "Edad de Marta hace 5 años = 3 × 4 = 12." },
            { t: "resuelve", label: "Desarrolla", text: "Edad actual de Marta = edad hace 5 años + 5 = 12 + 5." },
            { t: "resultado", label: "Resultado", text: "Marta tiene actualmente 17 años." }
          ],
          quick: ["Aplica la proporción al dato del pasado (3×4=12) y luego suma los años transcurridos (12+5=17)."]
        },
        {
          title: "Problema de orden en carrera",
          q: "En una carrera de 4 corredores: Ana llegó antes que Beto. Beto llegó antes que Carla. Diana llegó última. ¿En qué posición llegó Ana?",
          options: ["1°", "2°", "3°", "No se puede determinar"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Ana < Beto < Carla (en tiempo de llegada). Diana llegó en el 4° (último) lugar." },
            { t: "plantea", label: "Plantea", text: "Con solo 4 corredores y Diana ya en el último lugar, Ana, Beto y Carla ocupan los 3 primeros lugares en ese orden." },
            { t: "resuelve", label: "Desarrolla", text: "Orden completo: Ana (1°), Beto (2°), Carla (3°), Diana (4°)." },
            { t: "resultado", label: "Resultado", text: "Ana llegó en 1er lugar." }
          ],
          quick: ["Cuando ya sabes quién ocupa el último lugar, el orden de los demás según sus comparaciones directas queda fijo."]
        },
        {
          title: "Silogismo negativo (Camestres)",
          q: "Premisa 1: Ningún pájaro es mamífero. Premisa 2: Todos los murciélagos son mamíferos. ¿Qué se concluye?",
          options: ["Ningún murciélago es pájaro", "Algunos murciélagos son pájaros", "Todos los pájaros son murciélagos", "No se puede concluir nada"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "P1: Pájaro ∩ Mamífero = ∅. P2: Murciélago ⊆ Mamífero." },
            { t: "plantea", label: "Plantea", text: "Si murciélago está dentro de mamífero, y mamífero no se cruza con pájaro..." },
            { t: "resuelve", label: "Desarrolla", text: "Entonces murciélago tampoco se cruza con pájaro." },
            { t: "resultado", label: "Resultado", text: "Ningún murciélago es pájaro." }
          ],
          quick: ["Mismo patrón que Celarent: A⊆B, B∩C=∅ ⟹ A∩C=∅."]
        },
        {
          title: "Edades: tres personas con razón",
          q: "La suma de las edades de tres amigos es 70 años. El primero tiene el doble del segundo, y el segundo tiene el doble del tercero. ¿Qué edad tiene el tercero?",
          options: ["8", "9", "10", "12"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Tercero = x. Segundo = 2x. Primero = 4x. Suma total = 70." },
            { t: "plantea", label: "Plantea", text: "Plantea: x + 2x + 4x = 70." },
            { t: "resuelve", label: "Desarrolla", text: "7x = 70 → x = 10." },
            { t: "resultado", label: "Resultado", text: "El tercero tiene 10 años (segundo=20, primero=40)." }
          ],
          quick: ["Expresa todo en función de la incógnita menor y suma los coeficientes: 1x+2x+4x=7x=70 → x=10."]
        },
        {
          title: "Validez lógica vs. verdad fáctica",
          q: "Premisa 1 (dada como verdadera para este ejercicio): Todas las aves vuelan. Premisa 2: Los pingüinos son aves. ¿Qué se concluye LÓGICAMENTE, aceptando las premisas dadas?",
          options: ["Los pingüinos vuelan", "Los pingüinos no vuelan", "No se puede concluir nada", "La premisa 1 es falsa, así que no aplica"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Se pide razonar dentro de la lógica formal, aceptando las premisas TAL COMO se dan (aunque sepamos que en la realidad no todas las aves vuelan)." },
            { t: "plantea", label: "Plantea", text: "Un argumento es VÁLIDO si la conclusión se sigue necesariamente de las premisas, sin importar si esas premisas son ciertas en el mundo real." },
            { t: "resuelve", label: "Desarrolla", text: "Aceptando P1 y P2 como verdaderas dentro del ejercicio, el silogismo es formalmente válido." },
            { t: "resultado", label: "Resultado", text: "Lógicamente, los pingüinos vuelan (aunque sepamos que en la realidad esto es falso — el examen evalúa la VALIDEZ del razonamiento, no el conocimiento del mundo real)." }
          ],
          quick: ["En preguntas de razonamiento lógico, SIEMPRE acepta las premisas como verdaderas, aunque contradigan lo que sabes del mundo real.", "Te preguntan si el razonamiento es válido, no si es cierto en la realidad."]
        },
        {
          title: "Serie de cuadrados perfectos",
          q: "¿Qué número continúa la serie: 1, 4, 9, 16, 25, ...?",
          options: ["30", "32", "36", "40"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Serie: 1, 4, 9, 16, 25." },
            { t: "plantea", label: "Plantea", text: "Son cuadrados perfectos: 1², 2², 3², 4², 5²." },
            { t: "resuelve", label: "Desarrolla", text: "El siguiente es 6²." },
            { t: "resultado", label: "Resultado", text: "6² = 36." }
          ],
          quick: ["Reconoce cuadrados perfectos rápido: 1,4,9,16,25,36,49,64,81,100 — memorízalos."]
        },
        {
          title: "Serie de potencias de 2",
          q: "¿Qué número continúa la serie: 1, 2, 4, 8, 16, ...?",
          options: ["24", "28", "30", "32"], correct: 3,
          full: [
            { t: "dato", label: "Datos", text: "Serie: 1, 2, 4, 8, 16." },
            { t: "plantea", label: "Plantea", text: "Cada término es el doble del anterior — son potencias de 2." },
            { t: "resuelve", label: "Desarrolla", text: "16 × 2." },
            { t: "resultado", label: "Resultado", text: "32." }
          ],
          quick: ["Memoriza potencias de 2: 1,2,4,8,16,32,64,128,256..."]
        },
        {
          title: "Paradoja del mentiroso (clásica)",
          q: "En una isla, los caballeros siempre dicen la verdad y los pícaros siempre mienten. Una persona dice: \"Soy un pícaro\". ¿Qué se puede concluir?",
          options: ["Es un caballero", "Es un pícaro", "Es una afirmación imposible — nadie de la isla puede decir eso sin contradicción", "Puede ser cualquiera de los dos"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Caballero = siempre dice verdad. Pícaro = siempre miente. Alguien afirma \"Soy un pícaro\"." },
            { t: "plantea", label: "Plantea", text: "Prueba ambos casos: si fuera caballero, diría la verdad (sería pícaro) — contradicción. Si fuera pícaro, mentiría, así que en realidad NO sería pícaro — también contradicción." },
            { t: "resuelve", label: "Desarrolla", text: "Ambos casos llevan a una contradicción lógica." },
            { t: "resultado", label: "Resultado", text: "Es una afirmación imposible: ningún habitante de la isla puede decir eso." }
          ],
          quick: ["Clásico \"acertijo del mentiroso\": una autorreferencia de este tipo siempre genera contradicción — la respuesta es que es imposible."]
        },
        {
          title: "Orden con múltiples restricciones (fila de 5)",
          q: "5 amigos hacen fila. Ana está primera. Bea está justo detrás de Ana. Eva es la última. Carlos está justo delante de Dani. ¿Cuál es el orden completo?",
          options: ["Ana, Bea, Carlos, Dani, Eva", "Ana, Carlos, Bea, Dani, Eva", "Ana, Bea, Dani, Carlos, Eva", "Carlos, Ana, Bea, Dani, Eva"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Ana = 1°. Bea justo detrás de Ana = 2°. Eva = 5° (última). Carlos justo delante de Dani." },
            { t: "plantea", label: "Plantea", text: "Quedan las posiciones 3 y 4 para Carlos y Dani. Como Carlos está justo delante de Dani, Carlos=3° y Dani=4°." },
            { t: "resuelve", label: "Desarrolla", text: "Verifica: Ana(1), Bea(2), Carlos(3), Dani(4), Eva(5) — cumple todas las condiciones." },
            { t: "resultado", label: "Resultado", text: "Orden: Ana, Bea, Carlos, Dani, Eva." }
          ],
          quick: ["Coloca primero las posiciones fijas (Ana=1°, Eva=5°), luego resuelve las relativas con lo que sobra."]
        },
        {
          title: "Razonamiento bicondicional",
          q: "Aprobarás el curso si y solo si entregas todos los trabajos. No entregaste todos los trabajos. ¿Qué se concluye?",
          options: ["Aprobarás el curso", "No aprobarás el curso", "Podrías aprobar de todas formas", "No se puede concluir nada"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "\"P si y solo si Q\" (bicondicional): P y Q son ambas verdaderas o ambas falsas, siempre." },
            { t: "plantea", label: "Plantea", text: "Se sabe que Q (entregar todos los trabajos) es falso." },
            { t: "resuelve", label: "Desarrolla", text: "En un bicondicional, si Q es falso, P también debe ser falso." },
            { t: "resultado", label: "Resultado", text: "No aprobarás el curso." }
          ],
          quick: ["\"Si y solo si\" es una vía doble: si un lado falla, el otro también falla, sin excepción."]
        },
        {
          title: "Conjuntos: unión e intersección",
          q: "En un grupo de 30 estudiantes, 18 practican fútbol, 12 practican básquet, y 5 practican ambos deportes. ¿Cuántos no practican ninguno de los dos?",
          options: ["3", "5", "7", "10"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Total = 30. Fútbol = 18. Básquet = 12. Ambos = 5." },
            { t: "plantea", label: "Plantea", text: "Fórmula de unión: |Fútbol ∪ Básquet| = |Fútbol| + |Básquet| − |Ambos| (para no contar dos veces a quienes practican ambos)." },
            { t: "resuelve", label: "Desarrolla", text: "Practican al menos uno = 18+12−5 = 25. No practican ninguno = 30 − 25." },
            { t: "resultado", label: "Resultado", text: "5 estudiantes no practican ninguno de los dos deportes." }
          ],
          quick: ["Fórmula clave: Unión = A + B − Intersección.", "No practican ninguno = Total − Unión = 30−25=5."]
        }
      ]
    },

    // ======================= VERBAL (20 extra) =======================
    {
      key: "verbal",
      problems: [
        {
          title: "Analogía causa — efecto",
          q: "Fuego es a calor como hielo es a...",
          options: ["Agua", "Frío", "Nieve", "Invierno"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Par base: Fuego → Calor (lo que produce/genera)." },
            { t: "plantea", label: "Plantea", text: "La relación es causa-efecto/sensación asociada." },
            { t: "resuelve", label: "Desarrolla", text: "¿Qué sensación produce el hielo, análoga al calor del fuego?" },
            { t: "resultado", label: "Resultado", text: "Frío — el hielo produce frío, igual que el fuego produce calor." }
          ],
          quick: ["Frase guía: \"El fuego PRODUCE calor\". Aplica la misma frase: \"El hielo PRODUCE frío\"."]
        },
        {
          title: "Analogía parte — todo",
          q: "Rueda es a bicicleta como ala es a...",
          options: ["Nube", "Avión", "Cielo", "Piloto"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Par base: Rueda → Bicicleta (parte esencial del todo)." },
            { t: "plantea", label: "Plantea", text: "La relación es parte-todo: la rueda es una parte fundamental de la bicicleta." },
            { t: "resuelve", label: "Desarrolla", text: "¿De qué es parte fundamental el ala?" },
            { t: "resultado", label: "Resultado", text: "Avión — el ala es parte esencial del avión, igual que la rueda de la bicicleta." }
          ],
          quick: ["Frase guía: \"La rueda es PARTE DE la bicicleta\"."]
        },
        {
          title: "Analogía profesión — herramienta",
          q: "Carpintero es a martillo como cirujano es a...",
          options: ["Hospital", "Bisturí", "Paciente", "Medicina"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Par base: Carpintero → Martillo (herramienta principal de su oficio)." },
            { t: "plantea", label: "Plantea", text: "La relación es profesión-herramienta característica." },
            { t: "resuelve", label: "Desarrolla", text: "¿Cuál es la herramienta característica de un cirujano?" },
            { t: "resultado", label: "Resultado", text: "Bisturí — es la herramienta característica del cirujano." }
          ],
          quick: ["Descarta lugares (hospital) y personas (paciente): busca un OBJETO/herramienta."]
        },
        {
          title: "Analogía género — especie",
          q: "Rosa es a flor como perro es a...",
          options: ["Mascota", "Mamífero", "Ladrido", "Casa"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Par base: Rosa → Flor (categoría general a la que pertenece)." },
            { t: "plantea", label: "Plantea", text: "La relación es especie-categoría (elemento específico → categoría general)." },
            { t: "resuelve", label: "Desarrolla", text: "¿A qué categoría biológica general pertenece el perro?" },
            { t: "resultado", label: "Resultado", text: "Mamífero — es la categoría biológica del perro, igual que flor es la categoría de la rosa." }
          ],
          quick: ["Busca la categoría BIOLÓGICA/general, no una característica (mascota) ni un sonido (ladrido)."]
        },
        {
          title: "Sinónimo en contexto (austero)",
          q: "Selecciona el sinónimo de \"austero\" en: \"Vivía en una casa austera, sin ningún lujo.\"",
          options: ["Lujosa", "Sobria", "Amplia", "Colorida"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Contexto: \"sin ningún lujo\"." },
            { t: "plantea", label: "Plantea", text: "\"Austero\" significa sencillo, sobrio, sin adornos ni lujos." },
            { t: "resuelve", label: "Desarrolla", text: "Lujosa, amplia y colorida no coinciden con \"sin lujo\"." },
            { t: "resultado", label: "Resultado", text: "El sinónimo correcto es \"sobria\"." }
          ],
          quick: ["La frase \"sin ningún lujo\" ya te da la pista directa del significado."]
        },
        {
          title: "Antónimo en contexto (prolijo)",
          q: "Elige el antónimo de \"prolijo\" en: \"A diferencia de su informe anterior, tan prolijo y detallado, este fue muy ______.\"",
          options: ["Extenso", "Minucioso", "Conciso", "Detallado"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "\"Prolijo\" (en este sentido) = extenso y detallado en exceso." },
            { t: "plantea", label: "Plantea", text: "El contraste \"a diferencia de\" exige la palabra OPUESTA." },
            { t: "resuelve", label: "Desarrolla", text: "Extenso, minucioso y detallado son sinónimos de prolijo." },
            { t: "resultado", label: "Resultado", text: "\"Conciso\" (breve y directo) es el antónimo correcto." }
          ],
          quick: ["\"A diferencia de\" es una señal clara de que buscas el antónimo, no el sinónimo."]
        },
        {
          title: "Interpretación de refrán III",
          q: "¿Qué significa el refrán \"Camarón que se duerme, se lo lleva la corriente\"?",
          options: ["Los camarones no deben dormir en el río", "Quien se descuida o es pasivo, pierde oportunidades", "La corriente siempre arrastra objetos pequeños", "Dormir es siempre perjudicial"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Refrán: comparar un camarón dormido (descuidado) siendo arrastrado por la corriente." },
            { t: "plantea", label: "Plantea", text: "Busca el sentido figurado sobre actitud ante la vida, no el literal sobre camarones." },
            { t: "resuelve", label: "Desarrolla", text: "\"Dormirse\" simboliza descuido o pasividad; \"la corriente se lo lleva\" simboliza perder oportunidades." },
            { t: "resultado", label: "Resultado", text: "Quien se descuida o es pasivo, pierde oportunidades." }
          ],
          quick: ["Descarta siempre las opciones que interpretan el refrán de forma literal (sobre camarones o ríos reales)."]
        },
        {
          title: "Interpretación de refrán IV",
          q: "¿Qué significa el refrán \"No hay peor sordo que el que no quiere oír\"?",
          options: ["Los sordos son personas tercas por naturaleza", "Alguien se niega deliberadamente a entender o aceptar algo evidente", "Es imposible comunicarse con personas con discapacidad auditiva", "Escuchar siempre es obligatorio"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Refrán: contrasta la sordera física con una \"sordera\" voluntaria." },
            { t: "plantea", label: "Plantea", text: "El refrán no habla de discapacidad auditiva real, sino de actitud." },
            { t: "resuelve", label: "Desarrolla", text: "\"No querer oír\" simboliza negarse a aceptar o entender algo, aunque sea evidente." },
            { t: "resultado", label: "Resultado", text: "Alguien se niega deliberadamente a entender o aceptar algo evidente." }
          ],
          quick: ["Descarta interpretaciones literales sobre discapacidad — casi siempre son trampa en refranes."]
        },
        {
          title: "Completar oración con conector adecuado",
          q: "Completa: \"El proyecto se retrasó, ______ el equipo trabajó horas extra para cumplir con la fecha.\"",
          options: ["además", "sin embargo", "porque", "es decir"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Primera idea: el proyecto se retrasó (negativo). Segunda idea: el equipo cumplió trabajando extra (positivo/contraste)." },
            { t: "plantea", label: "Plantea", text: "Necesitas un conector que indique CONTRASTE entre ambas ideas." },
            { t: "resuelve", label: "Desarrolla", text: "\"Además\" suma, \"porque\" indica causa, \"es decir\" aclara — ninguno contrasta." },
            { t: "resultado", label: "Resultado", text: "\"Sin embargo\" es el único conector adversativo (de contraste) entre las opciones." }
          ],
          quick: ["Identifica si las dos ideas se oponen (usa conector adversativo) o se relacionan de otra forma (causal, aditivo, etc.)."]
        },
        {
          title: "Completar oración condicional",
          q: "Completa: \"Si hubieras estudiado más, ______ mejores resultados en el examen.\"",
          options: ["obtienes", "obtendrás", "habrías obtenido", "obtuviste"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Estructura: \"Si hubieras + participio, ...\" — es una oración condicional de tipo irreal en pasado." },
            { t: "plantea", label: "Plantea", text: "Las condicionales irreales de pasado usan el condicional compuesto en la consecuencia." },
            { t: "resuelve", label: "Desarrolla", text: "\"Si hubieras estudiado\" pide como consecuencia \"habrías obtenido\", no un tiempo simple." },
            { t: "resultado", label: "Resultado", text: "\"Habrías obtenido\" es la forma gramaticalmente correcta." }
          ],
          quick: ["\"Si hubieras + participio\" siempre se combina con \"habrías + participio\" en la otra parte de la oración."]
        },
        {
          title: "Plan de redacción: biografía",
          q: "Ordena los enunciados sobre la vida de un científico: I. Publicó su teoría más famosa a los 26 años. II. Nació en una pequeña ciudad en 1879. III. Sus ideas revolucionaron la física moderna. IV. Estudió en la universidad y mostró interés temprano por la ciencia.",
          options: ["II, IV, I, III", "I, II, III, IV", "II, I, IV, III", "IV, II, I, III"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "4 enunciados sobre la biografía de un científico, desordenados." },
            { t: "plantea", label: "Plantea", text: "Sigue el orden cronológico natural de una biografía: nacimiento → formación → logro → consecuencia/legado." },
            { t: "resuelve", label: "Desarrolla", text: "Nace (II) → estudia (IV) → publica su teoría (I) → su legado revoluciona la ciencia (III)." },
            { t: "resultado", label: "Resultado", text: "Orden correcto: II, IV, I, III." }
          ],
          quick: ["En biografías, el orden casi siempre es: nacimiento, formación, logro principal, legado/consecuencia."]
        },
        {
          title: "Plan de redacción: texto argumentativo",
          q: "Ordena las partes de un párrafo argumentativo: I. Por lo tanto, se debe invertir más en educación pública. II. La educación es la base del desarrollo de un país. III. Además, mejora la calidad de vida de las personas. IV. Los países con mejor educación tienen economías más fuertes.",
          options: ["II, IV, III, I", "I, II, III, IV", "II, I, III, IV", "IV, II, III, I"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "4 enunciados de un párrafo argumentativo: tesis, dos argumentos y una conclusión." },
            { t: "plantea", label: "Plantea", text: "Estructura típica: tesis (idea principal) → argumentos que la sustentan → conclusión (marcada por \"por lo tanto\")." },
            { t: "resuelve", label: "Desarrolla", text: "Tesis: la educación es la base del desarrollo (II). Argumentos: mejores economías (IV) y mejor calidad de vida (III). Conclusión: invertir más (I, con \"por lo tanto\")." },
            { t: "resultado", label: "Resultado", text: "Orden correcto: II, IV, III, I." }
          ],
          quick: ["Busca primero la tesis (idea general) y la conclusión (marcada por \"por lo tanto\" o similar) — los argumentos van en medio."]
        },
        {
          title: "Comprensión lectora: inferencia",
          q: "\"Cuando llegó a la reunión, todos dejaron de hablar y la miraron en silencio.\" ¿Qué se puede inferir de esta situación?",
          options: ["A todos les daba igual su llegada", "Probablemente estaban hablando de ella", "Ella llegó muy tarde a la reunión", "La reunión ya había terminado"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Dato explícito: al llegar ella, todos dejaron de hablar y la miraron en silencio." },
            { t: "plantea", label: "Plantea", text: "Una inferencia es una conclusión razonable basada en pistas, no dicha explícitamente en el texto." },
            { t: "resuelve", label: "Desarrolla", text: "El silencio repentino al verla llegar sugiere que la conversación probablemente era sobre ella." },
            { t: "resultado", label: "Resultado", text: "Probablemente estaban hablando de ella." }
          ],
          quick: ["Las inferencias piden \"leer entre líneas\": busca la explicación más razonable a partir de las pistas dadas, sin inventar información nueva."]
        },
        {
          title: "Comprensión lectora: tono del autor",
          q: "\"Otra vez el gobierno promete soluciones milagrosas que, como es costumbre, nunca llegan.\" ¿Qué tono tiene esta afirmación?",
          options: ["Objetivo y neutral", "Irónico y crítico", "Alegre y esperanzador", "Indiferente"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Frase con expresiones como \"otra vez\", \"como es costumbre\", \"nunca llegan\"." },
            { t: "plantea", label: "Plantea", text: "Identifica marcas de actitud del autor: ¿es neutral o toma una postura?" },
            { t: "resuelve", label: "Desarrolla", text: "Las expresiones \"otra vez\" y \"como es costumbre\" muestran escepticismo y crítica hacia una situación repetitiva." },
            { t: "resultado", label: "Resultado", text: "El tono es irónico y crítico." }
          ],
          quick: ["Busca palabras que revelen actitud del autor (\"otra vez\", \"como siempre\", \"lamentablemente\") — indican que el texto NO es neutral."]
        },
        {
          title: "Intruso semántico (categoría biológica)",
          q: "Identifica la palabra que NO pertenece al grupo por su significado: Perro, gato, tiburón, caballo.",
          options: ["Perro", "Gato", "Tiburón", "Caballo"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Grupo: perro, gato, tiburón, caballo." },
            { t: "plantea", label: "Plantea", text: "Busca la categoría biológica común a la mayoría." },
            { t: "resuelve", label: "Desarrolla", text: "Perro, gato y caballo son mamíferos terrestres." },
            { t: "resultado", label: "Resultado", text: "\"Tiburón\" es un pez, no un mamífero — es el intruso." }
          ],
          quick: ["Agrupa por categoría biológica real, no solo por ser \"animales\" en general."]
        },
        {
          title: "Conector causal vs. consecutivo",
          q: "Completa: \"Llegó tarde a la reunión ______ el tráfico estaba muy congestionado.\"",
          options: ["por lo tanto", "porque", "sin embargo", "es decir"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Segunda idea (tráfico congestionado) explica la CAUSA de la primera (llegar tarde)." },
            { t: "plantea", label: "Plantea", text: "Necesitas un conector CAUSAL (explica el motivo), no consecutivo ni adversativo." },
            { t: "resuelve", label: "Desarrolla", text: "\"Por lo tanto\" indica consecuencia; \"sin embargo\" indica contraste; \"es decir\" aclara." },
            { t: "resultado", label: "Resultado", text: "\"Porque\" es el conector causal correcto." }
          ],
          quick: ["Pregúntate: ¿la segunda idea es la CAUSA o la CONSECUENCIA de la primera? Eso define el conector."]
        },
        {
          title: "Identificar el par de sinónimos",
          q: "¿Cuál de los siguientes pares de palabras son sinónimos?",
          options: ["Alegría — tristeza", "Veloz — lento", "Feliz — contento", "Grande — pequeño"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "4 pares de palabras para evaluar su relación semántica." },
            { t: "plantea", label: "Plantea", text: "Busca el par cuyo significado sea equivalente (sinónimos), no opuesto (antónimos)." },
            { t: "resuelve", label: "Desarrolla", text: "Alegría-tristeza, veloz-lento y grande-pequeño son pares de ANTÓNIMOS." },
            { t: "resultado", label: "Resultado", text: "\"Feliz — contento\" es el único par de sinónimos." }
          ],
          quick: ["Elimina primero los pares obviamente opuestos (antónimos); el que sobra suele ser el de sinónimos."]
        },
        {
          title: "Analogía verbo — sustantivo derivado",
          q: "Correr es a corredor como nadar es a...",
          options: ["Piscina", "Nadador", "Natación", "Agua"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Par base: Correr (verbo) → Corredor (persona que realiza la acción)." },
            { t: "plantea", label: "Plantea", text: "La relación es verbo → persona que ejecuta esa acción (agente)." },
            { t: "resuelve", label: "Desarrolla", text: "¿Cómo se llama la persona que nada?" },
            { t: "resultado", label: "Resultado", text: "Nadador — es la persona que realiza la acción de nadar." }
          ],
          quick: ["Descarta el lugar (piscina), el elemento (agua) y la actividad en sí (natación) — busca a la PERSONA."]
        },
        {
          title: "Interpretación de refrán V",
          q: "¿Qué significa el refrán \"Del dicho al hecho hay mucho trecho\"?",
          options: ["Decir algo es exactamente igual a hacerlo", "Existe una gran diferencia entre planear/prometer algo y realmente llevarlo a cabo", "Es más fácil hacer las cosas que decirlas", "El dicho y el hecho no tienen ninguna relación"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Refrán: contrasta \"el dicho\" (lo que se promete o dice) con \"el hecho\" (lo que realmente se logra)." },
            { t: "plantea", label: "Plantea", text: "\"Trecho\" significa distancia — una gran distancia entre ambas cosas." },
            { t: "resuelve", label: "Desarrolla", text: "El refrán advierte que prometer algo es mucho más fácil que efectivamente cumplirlo." },
            { t: "resultado", label: "Resultado", text: "Existe una gran diferencia entre planear/prometer algo y realmente llevarlo a cabo." }
          ],
          quick: ["\"Trecho\" = distancia grande. El refrán siempre marca la diferencia entre prometer y cumplir."]
        },
        {
          title: "Analogía instrumento musical — familia",
          q: "Violín es a cuerdas como trompeta es a...",
          options: ["Percusión", "Viento", "Teclado", "Coro"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Par base: Violín → Cuerdas (familia de instrumentos a la que pertenece)." },
            { t: "plantea", label: "Plantea", text: "La relación es instrumento → familia/categoría instrumental a la que pertenece." },
            { t: "resuelve", label: "Desarrolla", text: "¿A qué familia de instrumentos pertenece la trompeta?" },
            { t: "resultado", label: "Resultado", text: "Viento — la trompeta pertenece a la familia de instrumentos de viento (metal), igual que el violín a las cuerdas." }
          ],
          quick: ["Clasifica el instrumento de la segunda palabra por su familia real: cuerdas, viento, percusión o teclado."]
        }
      ]
    },

    // ======================= MATEMÁTICAS (20 extra) =======================
    {
      key: "matematicas",
      problems: [
        {
          title: "Despejar ecuación con paréntesis",
          q: "Resolver: 3(x + 4) = 27",
          options: ["x = 3", "x = 5", "x = 7", "x = 9"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Ecuación: 3(x + 4) = 27." },
            { t: "plantea", label: "Plantea", text: "Primero elimina el paréntesis dividiendo ambos lados entre 3, o distribuyendo el 3." },
            { t: "resuelve", label: "Desarrolla", text: "Dividiendo entre 3: x + 4 = 9. Restando 4: x = 5." },
            { t: "resultado", label: "Resultado", text: "x = 5." }
          ],
          quick: ["Si todo el paréntesis está multiplicado por un número, divide primero ambos lados por ese número: 27/3=9, luego 9−4=5."]
        },
        {
          title: "Despejar ecuación con fracción",
          q: "Resolver: x/3 + 5 = 12",
          options: ["x = 17", "x = 19", "x = 21", "x = 23"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Ecuación: x/3 + 5 = 12." },
            { t: "plantea", label: "Plantea", text: "Aísla el término con x restando 5 de ambos lados." },
            { t: "resuelve", label: "Desarrolla", text: "x/3 = 7. Multiplica ambos lados por 3." },
            { t: "resultado", label: "Resultado", text: "x = 21." }
          ],
          quick: ["Lo que divide pasa multiplicando: x/3=7 → x=7×3=21."]
        },
        {
          title: "Inecuación con coeficiente negativo",
          q: "Resolver: −2x + 6 > 10",
          options: ["x > −2", "x < −2", "x > 2", "x < 2"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Inecuación: −2x + 6 > 10." },
            { t: "plantea", label: "Plantea", text: "Aísla el término con x: resta 6 de ambos lados → −2x > 4." },
            { t: "resuelve", label: "Desarrolla", text: "Divide entre −2. Como divides entre un número NEGATIVO, el signo de la desigualdad se INVIERTE." },
            { t: "resultado", label: "Resultado", text: "x < −2." }
          ],
          quick: ["Regla de oro de inecuaciones: si divides o multiplicas por un número negativo, voltea el signo — aquí de \">\" pasa a \"<\"."]
        },
        {
          title: "Sistema de ecuaciones por sustitución",
          q: "Resolver el sistema: x = 2y;  x + y = 27. ¿Cuál es el valor de x?",
          options: ["16", "18", "20", "22"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "x = 2y (ya despejada). x + y = 27." },
            { t: "plantea", label: "Plantea", text: "Sustituye x = 2y directamente en la segunda ecuación." },
            { t: "resuelve", label: "Desarrolla", text: "2y + y = 27 → 3y = 27 → y = 9. Entonces x = 2×9." },
            { t: "resultado", label: "Resultado", text: "x = 18." }
          ],
          quick: ["Cuando una variable ya está despejada, sustitúyela directo en la otra ecuación — es el método más rápido."]
        },
        {
          title: "Ecuación cuadrática por factorización",
          q: "Resolver: x² − 5x + 6 = 0. ¿Cuáles son sus soluciones?",
          options: ["x = 1 y x = 6", "x = 2 y x = 3", "x = −2 y x = −3", "x = 2 y x = −3"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Ecuación cuadrática: x² − 5x + 6 = 0." },
            { t: "plantea", label: "Plantea", text: "Busca dos números que multiplicados den 6 y sumados den 5 (los coeficientes con signo cambiado)." },
            { t: "resuelve", label: "Desarrolla", text: "2 × 3 = 6 y 2 + 3 = 5. Factoriza: (x−2)(x−3) = 0." },
            { t: "resultado", label: "Resultado", text: "x = 2 o x = 3." }
          ],
          quick: ["Busca dos números cuyo producto sea el término independiente (6) y cuya suma sea el coeficiente de x con signo opuesto (5): 2 y 3."]
        },
        {
          title: "Pendiente de una recta",
          q: "Hallar la pendiente de la recta que pasa por los puntos (2, 3) y (6, 11).",
          options: ["1", "1.5", "2", "2.5"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Puntos: (2,3) y (6,11)." },
            { t: "plantea", label: "Plantea", text: "Fórmula de pendiente: m = (y₂−y₁)/(x₂−x₁)." },
            { t: "resuelve", label: "Desarrolla", text: "m = (11−3)/(6−2) = 8/4." },
            { t: "resultado", label: "Resultado", text: "m = 2." }
          ],
          quick: ["Resta las 'y' entre las 'x' en el mismo orden: (11−3)/(6−2)=8/4=2."]
        },
        {
          title: "Evaluar una función",
          q: "Si f(x) = 2x² − 3, ¿cuál es el valor de f(4)?",
          options: ["25", "27", "29", "31"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "f(x) = 2x² − 3. Se pide f(4)." },
            { t: "plantea", label: "Plantea", text: "Sustituye x = 4 en la fórmula." },
            { t: "resuelve", label: "Desarrolla", text: "f(4) = 2×(4²) − 3 = 2×16 − 3 = 32 − 3." },
            { t: "resultado", label: "Resultado", text: "f(4) = 29." }
          ],
          quick: ["Sustituye con cuidado el orden de operaciones: primero eleva al cuadrado, luego multiplica, luego resta."]
        },
        {
          title: "Área de un triángulo",
          q: "Hallar el área de un triángulo de base 12 cm y altura 7 cm.",
          options: ["36 cm²", "40 cm²", "42 cm²", "48 cm²"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Base = 12 cm, altura = 7 cm." },
            { t: "plantea", label: "Plantea", text: "Área del triángulo = (base × altura) / 2." },
            { t: "resuelve", label: "Desarrolla", text: "Área = (12 × 7) / 2 = 84/2." },
            { t: "resultado", label: "Resultado", text: "Área = 42 cm²." }
          ],
          quick: ["Multiplica base × altura y divide entre 2: (12×7)/2=42."]
        },
        {
          title: "Área de un círculo",
          q: "Hallar el área de un círculo de radio 14 cm (usar π ≈ 22/7).",
          options: ["588 cm²", "600 cm²", "616 cm²", "620 cm²"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Radio = 14 cm." },
            { t: "plantea", label: "Plantea", text: "Área = π × radio². Usa π≈22/7 porque 14 es múltiplo de 7 (simplifica cálculos)." },
            { t: "resuelve", label: "Desarrolla", text: "Área = (22/7) × 14² = (22/7) × 196." },
            { t: "resultado", label: "Resultado", text: "196/7=28; 28×22=616 cm²." }
          ],
          quick: ["Cuando el radio es múltiplo de 7, usa π=22/7: simplifica el 7 con el radio antes de multiplicar."]
        },
        {
          title: "Volumen de un cubo",
          q: "Hallar el volumen de un cubo cuya arista mide 5 cm.",
          options: ["100 cm³", "110 cm³", "120 cm³", "125 cm³"], correct: 3,
          full: [
            { t: "dato", label: "Datos", text: "Arista = 5 cm." },
            { t: "plantea", label: "Plantea", text: "Volumen del cubo = arista³ (arista × arista × arista)." },
            { t: "resuelve", label: "Desarrolla", text: "V = 5³ = 5×5×5." },
            { t: "resultado", label: "Resultado", text: "V = 125 cm³." }
          ],
          quick: ["Fórmula directa: arista al cubo. 5³=125."]
        },
        {
          title: "Progresión aritmética: término n-ésimo directo",
          q: "En la progresión 6, 11, 16, 21, ..., ¿cuál es el término número 15?",
          options: ["71", "74", "76", "79"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "a₁=6, diferencia d=5, se pide n=15." },
            { t: "plantea", label: "Plantea", text: "Fórmula: aₙ = a₁ + (n−1)d." },
            { t: "resuelve", label: "Desarrolla", text: "a₁₅ = 6 + 14×5 = 6+70." },
            { t: "resultado", label: "Resultado", text: "a₁₅ = 76." }
          ],
          quick: ["Aplica la fórmula directa sin listar todos los términos: 6+14×5=76."]
        },
        {
          title: "Razones trigonométricas básicas",
          q: "En un triángulo rectángulo con catetos de 6 y 8 (hipotenusa 10), ¿cuál es el seno del ángulo opuesto al cateto de 6?",
          options: ["0.5", "0.6", "0.7", "0.8"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Catetos: 6 y 8. Hipotenusa: 10 (terna pitagórica 6-8-10)." },
            { t: "plantea", label: "Plantea", text: "seno del ángulo = cateto opuesto / hipotenusa." },
            { t: "resuelve", label: "Desarrolla", text: "sen(θ) = 6/10." },
            { t: "resultado", label: "Resultado", text: "sen(θ) = 0.6." }
          ],
          quick: ["SOH-CAH-TOA: Seno = Opuesto/Hipotenusa. Aquí: 6/10=0.6."]
        },
        {
          title: "Ecuación con porcentaje",
          q: "El 15% de un número es 45. ¿Cuál es el número?",
          options: ["280", "290", "300", "310"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "15% de x = 45, es decir, 0.15 × x = 45." },
            { t: "plantea", label: "Plantea", text: "Despeja x dividiendo entre 0.15." },
            { t: "resuelve", label: "Desarrolla", text: "x = 45 / 0.15." },
            { t: "resultado", label: "Resultado", text: "x = 300." }
          ],
          quick: ["Convierte el % a decimal y divide: 45/0.15=300."]
        },
        {
          title: "Operaciones con conjuntos",
          q: "Sea A = {1,2,3,4,5} y B = {3,4,5,6,7}. ¿Cuántos elementos tiene A ∩ B?",
          options: ["2", "3", "4", "5"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "A = {1,2,3,4,5}. B = {3,4,5,6,7}." },
            { t: "plantea", label: "Plantea", text: "La intersección A∩B contiene solo los elementos que están en AMBOS conjuntos." },
            { t: "resuelve", label: "Desarrolla", text: "Elementos comunes: 3, 4, 5." },
            { t: "resultado", label: "Resultado", text: "A ∩ B tiene 3 elementos." }
          ],
          quick: ["Busca solo los números que aparecen en las DOS listas a la vez."]
        },
        {
          title: "Notación científica",
          q: "Expresa el número 45,000,000 en notación científica.",
          options: ["4.5 × 10⁵", "4.5 × 10⁶", "4.5 × 10⁷", "45 × 10⁶"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Número: 45,000,000." },
            { t: "plantea", label: "Plantea", text: "En notación científica, se escribe como un número entre 1 y 10, multiplicado por una potencia de 10." },
            { t: "resuelve", label: "Desarrolla", text: "45,000,000 = 4.5 × 10,000,000. Cuenta los ceros de 10,000,000: son 7." },
            { t: "resultado", label: "Resultado", text: "45,000,000 = 4.5 × 10⁷." }
          ],
          quick: ["Cuenta cuántos lugares se mueve el punto decimal desde 4.5 hasta 45,000,000: 7 lugares → exponente 7."]
        },
        {
          title: "Simplificar exponentes",
          q: "Simplificar: 2³ × 2⁴",
          options: ["2⁷ = 128", "2¹² = 4096", "4⁷ = 16384", "8⁷ = 2097152"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Expresión: 2³ × 2⁴ (misma base)." },
            { t: "plantea", label: "Plantea", text: "Regla de exponentes: al multiplicar potencias de igual base, se SUMAN los exponentes." },
            { t: "resuelve", label: "Desarrolla", text: "2³ × 2⁴ = 2^(3+4) = 2⁷." },
            { t: "resultado", label: "Resultado", text: "2⁷ = 128." }
          ],
          quick: ["Misma base, se multiplican → suma los exponentes: 3+4=7. 2⁷=128."]
        },
        {
          title: "Simplificar raíces",
          q: "Calcular: √144 + √25",
          options: ["13", "15", "17", "19"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Expresión: √144 + √25." },
            { t: "plantea", label: "Plantea", text: "Calcula cada raíz cuadrada por separado antes de sumar." },
            { t: "resuelve", label: "Desarrolla", text: "√144 = 12. √25 = 5." },
            { t: "resultado", label: "Resultado", text: "12 + 5 = 17." }
          ],
          quick: ["Memoriza raíces exactas comunes: √144=12, √25=5, √100=10, √81=9."]
        },
        {
          title: "Ecuación con valor absoluto",
          q: "Resolver: |x − 5| = 8. ¿Cuál es el mayor valor posible de x?",
          options: ["8", "10", "13", "15"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Ecuación: |x − 5| = 8." },
            { t: "plantea", label: "Plantea", text: "El valor absoluto tiene dos soluciones: x−5=8 ó x−5=−8." },
            { t: "resuelve", label: "Desarrolla", text: "Caso 1: x = 8+5 = 13. Caso 2: x = −8+5 = −3." },
            { t: "resultado", label: "Resultado", text: "El mayor valor posible es x = 13." }
          ],
          quick: ["El valor absoluto siempre da 2 soluciones: (número) y −(número), sumadas al otro lado."]
        },
        {
          title: "Suma de ángulos internos de un polígono",
          q: "¿Cuánto suman los ángulos internos de un hexágono (polígono de 6 lados)?",
          options: ["540°", "630°", "720°", "900°"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Polígono de n=6 lados." },
            { t: "plantea", label: "Plantea", text: "Fórmula: suma de ángulos internos = (n−2) × 180°." },
            { t: "resuelve", label: "Desarrolla", text: "(6−2) × 180 = 4 × 180." },
            { t: "resultado", label: "Resultado", text: "720°." }
          ],
          quick: ["Memoriza (n−2)×180°. Para hexágono: (6−2)=4, 4×180=720°."]
        },
        {
          title: "Media, mediana y moda combinadas",
          q: "Dado el conjunto de datos: 4, 6, 6, 8, 10, 6, 12, ¿cuál es la MODA?",
          options: ["4", "6", "8", "10"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Datos: 4, 6, 6, 8, 10, 6, 12." },
            { t: "plantea", label: "Plantea", text: "La moda es el valor que se repite con mayor frecuencia." },
            { t: "resuelve", label: "Desarrolla", text: "El número 6 aparece 3 veces; ningún otro valor se repite tanto." },
            { t: "resultado", label: "Resultado", text: "La moda es 6." }
          ],
          quick: ["Cuenta cuántas veces se repite cada número; el que más se repite es la moda."]
        }
      ]
    },

    // ======================= FÍSICA (20 extra) =======================
    {
      key: "fisica",
      problems: [
        {
          title: "MRUV: velocidad final",
          q: "Un auto parte del reposo y acelera a 4 m/s² durante 5 segundos. ¿Qué velocidad alcanza?",
          options: ["16 m/s", "18 m/s", "20 m/s", "22 m/s"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Velocidad inicial = 0 (parte del reposo). Aceleración = 4 m/s². Tiempo = 5 s." },
            { t: "plantea", label: "Plantea", text: "Fórmula: v = v₀ + a×t." },
            { t: "resuelve", label: "Desarrolla", text: "v = 0 + 4×5." },
            { t: "resultado", label: "Resultado", text: "v = 20 m/s." }
          ],
          quick: ["Si parte del reposo: v=a×t directo. 4×5=20 m/s."]
        },
        {
          title: "MRUV: distancia recorrida",
          q: "El mismo auto (parte del reposo, a=4 m/s²) ¿qué distancia recorre en los primeros 5 segundos?",
          options: ["40 m", "45 m", "50 m", "55 m"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "v₀=0, a=4 m/s², t=5 s." },
            { t: "plantea", label: "Plantea", text: "Fórmula (parte del reposo): d = ½ × a × t²." },
            { t: "resuelve", label: "Desarrolla", text: "d = ½ × 4 × 5² = ½ × 4 × 25." },
            { t: "resultado", label: "Resultado", text: "d = 50 m." }
          ],
          quick: ["d=½at² con v₀=0: ½×4×25=50."]
        },
        {
          title: "Alcance de un móvil (mismo sentido)",
          q: "Un auto A viaja a 80 km/h y sale 1 hora antes que un auto B, que viaja a 100 km/h en la misma dirección. ¿En cuánto tiempo (desde que sale B) lo alcanza?",
          options: ["3 h", "4 h", "5 h", "6 h"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "A tiene 1 hora de ventaja a 80 km/h → ventaja = 80 km cuando B arranca." },
            { t: "plantea", label: "Plantea", text: "Como van en el mismo sentido y B persigue a A, la velocidad relativa es la RESTA de velocidades." },
            { t: "resuelve", label: "Desarrolla", text: "Velocidad relativa = 100−80 = 20 km/h. Tiempo = 80/20." },
            { t: "resultado", label: "Resultado", text: "B alcanza a A en 4 horas." }
          ],
          quick: ["Calcula primero la distancia de ventaja (velocidad × tiempo de la delantera), luego divide entre la diferencia de velocidades."]
        },
        {
          title: "Peso de un objeto",
          q: "¿Cuál es el peso de un objeto de 10 kg de masa en la Tierra (g = 10 m/s²)?",
          options: ["10 N", "50 N", "100 N", "1000 N"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Masa = 10 kg. g = 10 m/s²." },
            { t: "plantea", label: "Plantea", text: "El peso es una fuerza: W = m × g." },
            { t: "resuelve", label: "Desarrolla", text: "W = 10 × 10." },
            { t: "resultado", label: "Resultado", text: "W = 100 N." }
          ],
          quick: ["Peso = masa × gravedad. No confundas masa (kg) con peso (Newtons)."]
        },
        {
          title: "Palanca (máquina simple)",
          q: "Una palanca tiene un brazo de potencia de 4 m y un brazo de resistencia de 1 m. Si se aplica una fuerza de 50 N, ¿qué resistencia máxima puede levantar?",
          options: ["100 N", "150 N", "200 N", "250 N"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Brazo de potencia = 4 m. Brazo de resistencia = 1 m. Fuerza aplicada = 50 N." },
            { t: "plantea", label: "Plantea", text: "Ley de la palanca (equilibrio de torques): Fuerza × brazo potencia = Resistencia × brazo resistencia." },
            { t: "resuelve", label: "Desarrolla", text: "50 × 4 = R × 1 → 200 = R." },
            { t: "resultado", label: "Resultado", text: "Puede levantar una resistencia de 200 N." }
          ],
          quick: ["F×bp = R×br. Si el brazo de potencia es más largo, la palanca amplifica la fuerza: 50×4/1=200 N."]
        },
        {
          title: "Plano inclinado: ventaja mecánica",
          q: "Un plano inclinado tiene una altura de 3 m y una longitud de 5 m. ¿Cuál es su ventaja mecánica ideal?",
          options: ["1.2", "1.5", "1.67", "2"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Altura = 3 m. Longitud de la rampa = 5 m." },
            { t: "plantea", label: "Plantea", text: "Ventaja mecánica ideal del plano inclinado = longitud / altura." },
            { t: "resuelve", label: "Desarrolla", text: "VM = 5/3." },
            { t: "resultado", label: "Resultado", text: "VM ≈ 1.67." }
          ],
          quick: ["VM = longitud de la rampa dividida entre la altura: 5/3≈1.67."]
        },
        {
          title: "Potencia mecánica",
          q: "Un motor realiza un trabajo de 600 Joules en 3 segundos. ¿Cuál es su potencia?",
          options: ["150 W", "180 W", "200 W", "220 W"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Trabajo = 600 J. Tiempo = 3 s." },
            { t: "plantea", label: "Plantea", text: "Fórmula: Potencia = Trabajo / tiempo." },
            { t: "resuelve", label: "Desarrolla", text: "P = 600/3." },
            { t: "resultado", label: "Resultado", text: "P = 200 Watts." }
          ],
          quick: ["División directa: 600/3=200 W."]
        },
        {
          title: "Calor específico",
          q: "¿Cuánto calor se necesita para elevar la temperatura de 2 kg de agua (c ≈ 4000 J/kg°C) en 10°C?",
          options: ["60 000 J", "70 000 J", "80 000 J", "90 000 J"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Masa = 2 kg. Calor específico del agua ≈ 4000 J/kg°C. ΔT = 10°C." },
            { t: "plantea", label: "Plantea", text: "Fórmula: Q = masa × calor específico × ΔT." },
            { t: "resuelve", label: "Desarrolla", text: "Q = 2 × 4000 × 10." },
            { t: "resultado", label: "Resultado", text: "Q = 80 000 J (80 kJ)." }
          ],
          quick: ["Multiplica los tres datos en orden: 2×4000×10=80 000 J."]
        },
        {
          title: "Dilatación térmica (conceptual)",
          q: "¿Qué le sucede generalmente a los materiales sólidos cuando se calientan?",
          options: ["Se contraen (disminuyen de tamaño)", "Se dilatan (aumentan de tamaño)", "No cambian de tamaño", "Cambian de color únicamente"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Concepto: efecto del calor sobre los materiales." },
            { t: "plantea", label: "Plantea", text: "Al aumentar la temperatura, las partículas del material vibran más y se alejan entre sí." },
            { t: "resuelve", label: "Desarrolla", text: "Este mayor espacio entre partículas provoca un aumento del volumen del material." },
            { t: "resultado", label: "Resultado", text: "Los materiales se dilatan (aumentan de tamaño) al calentarse." }
          ],
          quick: ["Regla general: calor → dilatación (aumenta tamaño). Frío → contracción (disminuye tamaño)."]
        },
        {
          title: "Potencia eléctrica",
          q: "Un electrodoméstico funciona a 120 V y consume una corriente de 5 A. ¿Cuál es su potencia?",
          options: ["500 W", "550 W", "600 W", "650 W"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Voltaje = 120 V. Corriente = 5 A." },
            { t: "plantea", label: "Plantea", text: "Fórmula de potencia eléctrica: P = V × I." },
            { t: "resuelve", label: "Desarrolla", text: "P = 120 × 5." },
            { t: "resultado", label: "Resultado", text: "P = 600 Watts." }
          ],
          quick: ["Multiplicación directa: 120×5=600 W."]
        },
        {
          title: "Resistencias en serie",
          q: "Dos resistencias de 6 Ω y 4 Ω están conectadas en serie. ¿Cuál es la resistencia total?",
          options: ["2.4 Ω", "8 Ω", "10 Ω", "24 Ω"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "R1 = 6 Ω, R2 = 4 Ω, conectadas en SERIE." },
            { t: "plantea", label: "Plantea", text: "En serie, las resistencias se SUMAN directamente." },
            { t: "resuelve", label: "Desarrolla", text: "R total = 6 + 4." },
            { t: "resultado", label: "Resultado", text: "R total = 10 Ω." }
          ],
          quick: ["En serie: simplemente suma. R1+R2=10Ω."]
        },
        {
          title: "Resistencias en paralelo",
          q: "Dos resistencias de 6 Ω y 3 Ω están conectadas en paralelo. ¿Cuál es la resistencia equivalente?",
          options: ["1 Ω", "1.5 Ω", "2 Ω", "4.5 Ω"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "R1 = 6 Ω, R2 = 3 Ω, conectadas en PARALELO." },
            { t: "plantea", label: "Plantea", text: "En paralelo: 1/R_eq = 1/R1 + 1/R2." },
            { t: "resuelve", label: "Desarrolla", text: "1/R_eq = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2." },
            { t: "resultado", label: "Resultado", text: "R_eq = 2 Ω." }
          ],
          quick: ["Truco para 2 resistencias en paralelo: R_eq = (R1×R2)/(R1+R2) = (6×3)/(6+3) = 18/9 = 2 Ω."]
        },
        {
          title: "Principio de Arquímedes",
          q: "Un objeto sumergido desplaza 2000 cm³ de agua (densidad del agua = 1000 kg/m³). ¿Cuál es la fuerza de empuje que recibe (g = 10 m/s²)?",
          options: ["10 N", "15 N", "20 N", "25 N"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Volumen desplazado = 2000 cm³ = 0.002 m³. Densidad del agua = 1000 kg/m³." },
            { t: "plantea", label: "Plantea", text: "Principio de Arquímedes: Empuje = peso del líquido desplazado = densidad × volumen × g." },
            { t: "resuelve", label: "Desarrolla", text: "Masa desplazada = 1000 × 0.002 = 2 kg. Empuje = 2 × 10." },
            { t: "resultado", label: "Resultado", text: "Empuje = 20 N." }
          ],
          quick: ["Convierte cm³ a m³ dividiendo entre 1,000,000. Luego Empuje=ρ×V×g: 1000×0.002×10=20N."]
        },
        {
          title: "Velocidad de una onda",
          q: "Una onda tiene una longitud de onda de 2 m y una frecuencia de 50 Hz. ¿Cuál es su velocidad de propagación?",
          options: ["25 m/s", "52 m/s", "100 m/s", "150 m/s"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Longitud de onda (λ) = 2 m. Frecuencia (f) = 50 Hz." },
            { t: "plantea", label: "Plantea", text: "Fórmula: velocidad = longitud de onda × frecuencia (v = λ×f)." },
            { t: "resuelve", label: "Desarrolla", text: "v = 2 × 50." },
            { t: "resultado", label: "Resultado", text: "v = 100 m/s." }
          ],
          quick: ["Multiplicación directa: v=λ×f = 2×50=100 m/s."]
        },
        {
          title: "Ley de reflexión (óptica, conceptual)",
          q: "Según la ley de la reflexión, si un rayo de luz incide sobre un espejo con un ángulo de 30° respecto a la normal, ¿cuál es el ángulo de reflexión?",
          options: ["15°", "30°", "60°", "90°"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Ángulo de incidencia = 30° (medido desde la normal, la línea perpendicular a la superficie)." },
            { t: "plantea", label: "Plantea", text: "Ley de reflexión: el ángulo de incidencia es SIEMPRE igual al ángulo de reflexión." },
            { t: "resuelve", label: "Desarrolla", text: "No requiere cálculo: ambos ángulos son iguales por definición de la ley." },
            { t: "resultado", label: "Resultado", text: "El ángulo de reflexión también es 30°." }
          ],
          quick: ["Regla fija: ángulo de incidencia = ángulo de reflexión, siempre medidos desde la normal (nunca desde la superficie)."]
        },
        {
          title: "Movimiento circular: frecuencia",
          q: "Un objeto da 4 vueltas completas en 2 segundos. ¿Cuál es su frecuencia?",
          options: ["1 Hz", "2 Hz", "4 Hz", "8 Hz"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "4 vueltas en 2 segundos." },
            { t: "plantea", label: "Plantea", text: "Frecuencia = número de vueltas / tiempo." },
            { t: "resuelve", label: "Desarrolla", text: "f = 4/2." },
            { t: "resultado", label: "Resultado", text: "f = 2 Hz (2 vueltas por segundo)." }
          ],
          quick: ["División directa vueltas/tiempo: 4/2=2 Hz."]
        },
        {
          title: "Energía potencial gravitatoria",
          q: "Un objeto de 2 kg está a 5 m de altura (g = 10 m/s²). ¿Cuál es su energía potencial?",
          options: ["50 J", "80 J", "100 J", "120 J"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Masa = 2 kg. Altura = 5 m. g = 10 m/s²." },
            { t: "plantea", label: "Plantea", text: "Fórmula: Ep = m × g × h." },
            { t: "resuelve", label: "Desarrolla", text: "Ep = 2 × 10 × 5." },
            { t: "resultado", label: "Resultado", text: "Ep = 100 J." }
          ],
          quick: ["Multiplica los tres datos: 2×10×5=100 J."]
        },
        {
          title: "Conservación de la energía (Ep → Ec)",
          q: "El mismo objeto (2 kg, Ep=100 J) cae libremente. ¿Con qué velocidad llega al suelo, asumiendo que toda la energía potencial se transforma en cinética?",
          options: ["8 m/s", "9 m/s", "10 m/s", "12 m/s"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Energía potencial inicial = 100 J = energía cinética final (se conserva)." },
            { t: "plantea", label: "Plantea", text: "Ec = ½ × m × v². Iguala Ec = 100 J y despeja v." },
            { t: "resuelve", label: "Desarrolla", text: "100 = ½ × 2 × v² → 100 = v² → v = √100." },
            { t: "resultado", label: "Resultado", text: "v = 10 m/s." }
          ],
          quick: ["Iguala Ep=Ec, despeja v²=2×Ep/m, luego saca raíz: v²=2×100/2=100, v=10 m/s."]
        },
        {
          title: "Presión ejercida por una fuerza",
          q: "Se aplica una fuerza de 300 N sobre una superficie de 0.5 m². ¿Cuál es la presión ejercida?",
          options: ["150 Pa", "300 Pa", "600 Pa", "900 Pa"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Fuerza = 300 N. Área = 0.5 m²." },
            { t: "plantea", label: "Plantea", text: "Fórmula: Presión = Fuerza / Área." },
            { t: "resuelve", label: "Desarrolla", text: "P = 300 / 0.5." },
            { t: "resultado", label: "Resultado", text: "P = 600 Pascales." }
          ],
          quick: ["Dividir entre 0.5 equivale a multiplicar por 2: 300×2=600 Pa."]
        },
        {
          title: "Conversión de temperatura a Kelvin",
          q: "Convertir 27°C a la escala Kelvin.",
          options: ["273 K", "290 K", "300 K", "310 K"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Temperatura = 27°C." },
            { t: "plantea", label: "Plantea", text: "Fórmula: K = °C + 273." },
            { t: "resuelve", label: "Desarrolla", text: "K = 27 + 273." },
            { t: "resultado", label: "Resultado", text: "K = 300 K." }
          ],
          quick: ["Suma directa: siempre °C+273=Kelvin."]
        }
      ]
    },

    // ======================= LENGUA Y LITERATURA (20 extra) =======================
    {
      key: "lengua",
      problems: [
        {
          title: "Figura literaria: hipérbole",
          q: "\"Te lo he dicho un millón de veces, pero nunca escuchas.\" ¿Qué figura literaria se usa?",
          options: ["Metáfora", "Símil", "Hipérbole", "Personificación"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Frase: \"un millón de veces\" (exageración claramente imposible)." },
            { t: "plantea", label: "Plantea", text: "Identifica si hay una exageración deliberada e intencional." },
            { t: "resuelve", label: "Desarrolla", text: "Nadie repite algo literalmente un millón de veces; es una exageración retórica." },
            { t: "resultado", label: "Resultado", text: "Es una hipérbole." }
          ],
          quick: ["Si la frase exagera al punto de ser físicamente imposible o absurda, es hipérbole."]
        },
        {
          title: "Figura literaria: anáfora",
          q: "\"Nada me detiene. Nada me asusta. Nada me hará retroceder.\" ¿Qué figura literaria se usa?",
          options: ["Anáfora", "Hipérbole", "Metáfora", "Onomatopeya"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "La palabra \"Nada\" se repite al inicio de tres oraciones consecutivas." },
            { t: "plantea", label: "Plantea", text: "Identifica si hay repetición de una palabra al INICIO de varias frases o versos." },
            { t: "resuelve", label: "Desarrolla", text: "\"Nada\" se repite exactamente al comienzo de cada oración, creando énfasis rítmico." },
            { t: "resultado", label: "Resultado", text: "Es una anáfora." }
          ],
          quick: ["Anáfora = repetición de una palabra AL INICIO de frases o versos consecutivos."]
        },
        {
          title: "Figura literaria: antítesis",
          q: "\"Eres mi luz y también mi oscuridad.\" ¿Qué figura literaria se usa?",
          options: ["Antítesis", "Símil", "Hipérbole", "Aliteración"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Se contraponen dos ideas opuestas: \"luz\" y \"oscuridad\"." },
            { t: "plantea", label: "Plantea", text: "Identifica si hay una contraposición deliberada de ideas contrarias en la misma frase." },
            { t: "resuelve", label: "Desarrolla", text: "Luz y oscuridad son conceptos opuestos, colocados juntos intencionalmente." },
            { t: "resultado", label: "Resultado", text: "Es una antítesis." }
          ],
          quick: ["Antítesis = contraposición de ideas opuestas en la misma oración (\"luz\" vs \"oscuridad\")."]
        },
        {
          title: "Figura literaria: onomatopeya",
          q: "\"El reloj hacía tic-tac sin parar en la habitación silenciosa.\" ¿Qué figura literaria se usa?",
          options: ["Onomatopeya", "Metáfora", "Hipérbole", "Antítesis"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "\"Tic-tac\" imita el sonido real que hace un reloj." },
            { t: "plantea", label: "Plantea", text: "Identifica si una palabra imita un sonido de la realidad." },
            { t: "resuelve", label: "Desarrolla", text: "\"Tic-tac\" reproduce fonéticamente el sonido del reloj." },
            { t: "resultado", label: "Resultado", text: "Es una onomatopeya." }
          ],
          quick: ["Onomatopeya = palabra que imita un sonido (tic-tac, splash, boom, cuac)."]
        },
        {
          title: "Gramática: complemento directo",
          q: "Identifica el complemento directo en: \"María compró un libro nuevo en la librería.\"",
          options: ["María", "Un libro nuevo", "En la librería", "Compró"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Oración: \"María compró un libro nuevo en la librería\"." },
            { t: "plantea", label: "Plantea", text: "El complemento directo responde a la pregunta \"¿qué compró?\" (recibe la acción del verbo directamente)." },
            { t: "resuelve", label: "Desarrolla", text: "¿Qué compró María? Un libro nuevo." },
            { t: "resultado", label: "Resultado", text: "El complemento directo es \"un libro nuevo\"." }
          ],
          quick: ["Pregunta \"¿qué + verbo?\" para hallar el complemento directo (puedes reemplazarlo por \"lo/la/los/las\")."]
        },
        {
          title: "Gramática: concordancia",
          q: "Selecciona la oración con concordancia gramatical correcta.",
          options: ["Los estudiante llegaron temprano", "La estudiante llegó temprano", "Los estudiantes llegó temprano", "La estudiantes llegaron temprano"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Debe existir concordancia de género y número entre artículo, sustantivo y verbo." },
            { t: "plantea", label: "Plantea", text: "Revisa que el artículo, el sustantivo y el verbo coincidan en género (masculino/femenino) y número (singular/plural)." },
            { t: "resuelve", label: "Desarrolla", text: "\"La estudiante\" (femenino singular) + \"llegó\" (singular) concuerdan correctamente." },
            { t: "resultado", label: "Resultado", text: "\"La estudiante llegó temprano\" es la oración correcta." }
          ],
          quick: ["Revisa artículo-sustantivo-verbo: los tres deben coincidir en género y número."]
        },
        {
          title: "Uso de conectores causales",
          q: "Completa: \"No pudo asistir a la reunión, ______ estaba enfermo.\"",
          options: ["ya que", "sin embargo", "además", "por lo tanto"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Segunda idea (estar enfermo) explica la CAUSA de la primera (no asistir)." },
            { t: "plantea", label: "Plantea", text: "Necesitas un conector causal, que introduzca el motivo o razón." },
            { t: "resuelve", label: "Desarrolla", text: "\"Ya que\", \"porque\" y \"puesto que\" son conectores causales típicos." },
            { t: "resultado", label: "Resultado", text: "\"Ya que\" es la opción correcta entre las disponibles." }
          ],
          quick: ["Conectores causales típicos: porque, ya que, puesto que, debido a que."]
        },
        {
          title: "Uso correcto de \"a ver\" / \"haber\"",
          q: "Selecciona la oración con el uso correcto.",
          options: ["Vamos haber qué pasa con el resultado", "Debe a ver otra manera de resolverlo", "Vamos a ver qué pasa con el resultado", "Tiene que a ver una solución"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "\"A ver\" (dos palabras) invita a observar algo. \"Haber\" es el verbo (existir, o auxiliar de tiempos compuestos)." },
            { t: "plantea", label: "Plantea", text: "Reemplaza mentalmente por \"mirar\" o \"observar\": si tiene sentido, es \"a ver\"." },
            { t: "resuelve", label: "Desarrolla", text: "\"Vamos a ver qué pasa\" = \"vamos a observar qué pasa\" — tiene sentido con \"a ver\"." },
            { t: "resultado", label: "Resultado", text: "\"Vamos a ver qué pasa con el resultado\" es la oración correcta." }
          ],
          quick: ["Si puedes reemplazar por \"observar/mirar\", usa \"a ver\". Si es el verbo existir/auxiliar, usa \"haber\"."]
        },
        {
          title: "Ortografía: palabras homófonas (cocer/coser)",
          q: "Selecciona la oración con el uso correcto de \"cocer\" y \"coser\".",
          options: ["Voy a coser las papas para el almuerzo", "Voy a cocer un botón en la camisa", "Voy a cocer las papas para el almuerzo", "Voy a coser el arroz en la olla"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "\"Cocer\" = preparar alimentos con calor. \"Coser\" = unir con hilo y aguja." },
            { t: "plantea", label: "Plantea", text: "Identifica si la acción es de cocina (cocer) o de costura (coser)." },
            { t: "resuelve", label: "Desarrolla", text: "Preparar papas para el almuerzo es una acción de cocina." },
            { t: "resultado", label: "Resultado", text: "\"Voy a cocer las papas para el almuerzo\" es la oración correcta." }
          ],
          quick: ["\"Cocer\" con alimentos/cocina (con Z de \"cocina\"). \"Coser\" con hilo y aguja (con S de \"costura\")."]
        },
        {
          title: "Tipo de texto: descriptivo",
          q: "¿Qué tipo de texto predomina en: \"La casa tenía paredes blancas, un jardín lleno de flores rojas y un techo de tejas oscuras\"?",
          options: ["Narrativo", "Instructivo", "Descriptivo", "Argumentativo"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "El texto detalla características físicas (colores, elementos) sin acción ni proceso." },
            { t: "plantea", label: "Plantea", text: "Identifica si el texto CUENTA algo (narrativo), da pasos (instructivo), CONVENCE (argumentativo) o DESCRIBE (descriptivo)." },
            { t: "resuelve", label: "Desarrolla", text: "El texto se limita a presentar cualidades y características de un lugar, sin acción." },
            { t: "resultado", label: "Resultado", text: "Es un texto descriptivo." }
          ],
          quick: ["Si el texto detalla CÓMO ES algo (colores, formas, tamaños) sin contar una acción → descriptivo."]
        },
        {
          title: "Tipo de texto: argumentativo",
          q: "¿Qué tipo de texto predomina en: \"Debemos reducir el uso de plásticos porque contaminan los océanos y dañan la vida marina\"?",
          options: ["Narrativo", "Descriptivo", "Argumentativo", "Instructivo"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "El texto propone una postura (\"debemos reducir\") y la respalda con una razón (\"porque contaminan...\")." },
            { t: "plantea", label: "Plantea", text: "Identifica si el texto busca CONVENCER al lector de una idea, apoyándose en razones." },
            { t: "resuelve", label: "Desarrolla", text: "Presenta una tesis y un argumento que la sostiene — estructura típica argumentativa." },
            { t: "resultado", label: "Resultado", text: "Es un texto argumentativo." }
          ],
          quick: ["Si el texto defiende una postura con razones (\"debemos... porque...\") → argumentativo."]
        },
        {
          title: "Género literario",
          q: "Un texto escrito en verso, que expresa sentimientos personales del autor de forma subjetiva, pertenece al género:",
          options: ["Narrativo", "Lírico", "Dramático", "Ensayístico"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Características: verso, expresión de sentimientos, subjetividad." },
            { t: "plantea", label: "Plantea", text: "Cada género literario tiene rasgos propios: narrativo (cuenta historias), lírico (expresa emociones en verso), dramático (diálogos para teatro)." },
            { t: "resuelve", label: "Desarrolla", text: "La expresión subjetiva de sentimientos en verso es la marca distintiva del género lírico (ej. la poesía)." },
            { t: "resultado", label: "Resultado", text: "Pertenece al género lírico." }
          ],
          quick: ["Lírico = poesía/sentimientos. Narrativo = cuenta historias. Dramático = diálogos de teatro."]
        },
        {
          title: "Movimientos literarios",
          q: "Un movimiento literario caracterizado por exaltar la razón, el orden y el equilibrio, siguiendo modelos grecolatinos, se llama:",
          options: ["Romanticismo", "Neoclasicismo", "Realismo", "Barroco"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Características: razón, orden, equilibrio, modelos grecolatinos." },
            { t: "plantea", label: "Plantea", text: "El Romanticismo exalta la emoción; el Realismo describe la vida cotidiana con objetividad; el Barroco es recargado y complejo." },
            { t: "resuelve", label: "Desarrolla", text: "La exaltación de la razón, el orden y el retorno a modelos clásicos grecolatinos es propia del Neoclasicismo." },
            { t: "resultado", label: "Resultado", text: "Es el Neoclasicismo." }
          ],
          quick: ["Palabras clave \"razón\", \"orden\", \"modelos clásicos\" → Neoclasicismo. \"Emoción\", \"pasión\", \"naturaleza\" → Romanticismo."]
        },
        {
          title: "Metáfora vs. comparación (símil)",
          q: "\"Tus palabras son veneno\" vs. \"Tus palabras son como veneno\": ¿qué figuras literarias son, respectivamente?",
          options: ["Metáfora y símil", "Símil y metáfora", "Hipérbole y metáfora", "Ambas son símiles"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Frase 1: \"son veneno\" (identificación directa). Frase 2: \"son COMO veneno\" (comparación explícita)." },
            { t: "plantea", label: "Plantea", text: "La presencia o ausencia de \"como\" distingue metáfora de símil." },
            { t: "resuelve", label: "Desarrolla", text: "Sin \"como\" = identificación directa = metáfora. Con \"como\" = comparación = símil." },
            { t: "resultado", label: "Resultado", text: "La primera es metáfora, la segunda es símil." }
          ],
          quick: ["La palabra \"como\" es la clave: su ausencia indica metáfora, su presencia indica símil."]
        },
        {
          title: "Comprensión lectora: propósito comunicativo",
          q: "Un anuncio que dice \"¡Compra ya y obtén 50% de descuento solo por hoy!\" tiene como propósito principal:",
          options: ["Informar de manera neutral", "Persuadir al lector para que actúe (comprar)", "Narrar una historia", "Describir un producto sin intención comercial"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "El anuncio usa un llamado a la acción (\"compra ya\") y urgencia (\"solo por hoy\")." },
            { t: "plantea", label: "Plantea", text: "Identifica si el texto solo informa o busca provocar una acción concreta en el lector." },
            { t: "resuelve", label: "Desarrolla", text: "El uso de imperativos y urgencia es característico de textos persuasivos/publicitarios." },
            { t: "resultado", label: "Resultado", text: "El propósito principal es persuadir al lector para que compre." }
          ],
          quick: ["Imperativos + urgencia (\"ya\", \"solo hoy\", \"no te lo pierdas\") = propósito persuasivo/publicitario."]
        },
        {
          title: "Vocabulario contextual: palabra polisémica",
          q: "En la oración \"Fue al banco a depositar su cheque\", ¿qué significado tiene la palabra \"banco\"?",
          options: ["Asiento para sentarse", "Institución financiera", "Conjunto de peces", "Mueble de carpintería"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Contexto: \"depositar su cheque\"." },
            { t: "plantea", label: "Plantea", text: "\"Banco\" es una palabra polisémica (tiene varios significados); el contexto determina cuál aplica." },
            { t: "resuelve", label: "Desarrolla", text: "\"Depositar un cheque\" solo tiene sentido en una institución financiera." },
            { t: "resultado", label: "Resultado", text: "\"Banco\" se refiere aquí a una institución financiera." }
          ],
          quick: ["En palabras polisémicas, siempre usa el contexto (verbos y objetos cercanos) para decidir el significado correcto."]
        },
        {
          title: "Sinónimo de palabra literaria (lánguido)",
          q: "Selecciona el sinónimo de \"lánguido\" en: \"Tras la enfermedad, quedó con un aspecto lánguido y débil.\"",
          options: ["Vigoroso", "Decaído", "Enérgico", "Robusto"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Contexto: \"tras la enfermedad\", junto a \"débil\"." },
            { t: "plantea", label: "Plantea", text: "\"Lánguido\" significa falto de fuerza o energía, decaído." },
            { t: "resuelve", label: "Desarrolla", text: "Vigoroso, enérgico y robusto son opuestos (indican fuerza)." },
            { t: "resultado", label: "Resultado", text: "El sinónimo correcto es \"decaído\"." }
          ],
          quick: ["El contexto (\"enfermedad\", \"débil\") ya apunta a un significado de falta de energía."]
        },
        {
          title: "Estructura textual: introducción, desarrollo y conclusión",
          q: "En un ensayo, la parte donde se presenta la tesis principal y se anticipa lo que se va a argumentar se llama:",
          options: ["Desarrollo", "Introducción", "Conclusión", "Anexo"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Un texto expositivo/argumentativo típico se estructura en 3 partes: introducción, desarrollo y conclusión." },
            { t: "plantea", label: "Plantea", text: "Identifica en cuál de esas partes se presenta la idea central y se anticipa el contenido." },
            { t: "resuelve", label: "Desarrolla", text: "El desarrollo profundiza los argumentos; la conclusión cierra el texto. Presentar la tesis y anticipar el contenido es función de la introducción." },
            { t: "resultado", label: "Resultado", text: "Es la introducción." }
          ],
          quick: ["Introducción = presenta la idea y anticipa. Desarrollo = argumenta en profundidad. Conclusión = cierra y sintetiza."]
        },
        {
          title: "Uso de mayúsculas",
          q: "Selecciona la oración con el uso correcto de mayúsculas.",
          options: ["mi amigo Carlos vive en quito, ecuador.", "Mi amigo Carlos vive en Quito, Ecuador.", "Mi amigo carlos vive en Quito, ecuador.", "Mi Amigo Carlos Vive en Quito, Ecuador."], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Reglas: mayúscula al inicio de oración y en nombres propios (personas, ciudades, países)." },
            { t: "plantea", label: "Plantea", text: "Revisa que la primera palabra de la oración y todos los nombres propios (Carlos, Quito, Ecuador) lleven mayúscula, y el resto de palabras comunes no." },
            { t: "resuelve", label: "Desarrolla", text: "\"Mi amigo Carlos vive en Quito, Ecuador\" cumple ambas reglas correctamente." },
            { t: "resultado", label: "Resultado", text: "Es la única oración con el uso correcto de mayúsculas." }
          ],
          quick: ["Mayúscula siempre en: inicio de oración + nombres propios (personas, lugares). El resto de palabras van en minúscula."]
        },
        {
          title: "Figura literaria: metonimia",
          q: "\"Todo el estadio celebró el gol con euforia.\" ¿Qué figura literaria se usa al decir \"el estadio\" para referirse a las personas que estaban en él?",
          options: ["Metáfora", "Metonímia", "Hipérbole", "Símil"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "\"El estadio celebró\" — en realidad no celebra el edificio, sino las personas dentro de él." },
            { t: "plantea", label: "Plantea", text: "La metonímia nombra algo usando un término relacionado (el continente por el contenido, el lugar por sus habitantes, etc.)." },
            { t: "resuelve", label: "Desarrolla", text: "Se usa \"el estadio\" (el lugar) para referirse a \"la gente en el estadio\" (los habitantes/ocupantes)." },
            { t: "resultado", label: "Resultado", text: "Es una metonímia." }
          ],
          quick: ["Metonímia típica: el lugar por sus habitantes (\"el estadio celebró\", \"todo el país lloró\")."]
        }
      ]
    }

  ]
};

// Fusiona automáticamente los problemas extra dentro de window.STUDY_BANK
(function mergeStudyBank() {
  if (!window.STUDY_BANK || !window.STUDY_BANK_EXTRA) return;
  window.STUDY_BANK_EXTRA.topics.forEach(function (extraTopic) {
    var target = window.STUDY_BANK.topics.find(function (t) { return t.key === extraTopic.key; });
    if (target) {
      target.problems = target.problems.concat(extraTopic.problems);
    }
  });
})();
