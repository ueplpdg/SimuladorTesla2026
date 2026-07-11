// Banco curado — Química, Biología y Ciencias Sociales (formato full/quick,
// mismo estándar que study-bank.js). Completa la cobertura de "Ciencias
// Naturales" (junto a Física, ya en study-bank.js) y "Ciencias Sociales"
// para el examen de la Universidad de Cuenca.
window.STUDY_BANK_CIENCIAS = {
  topics: [

    // ======================= QUÍMICA =======================
    {
      key: "quimica", title: "Química", color: "#132a44",
      description: "Nomenclatura inorgánica, enlaces, tabla periódica, pH y estequiometría básica.",
      problems: [
        {
          title: "Óxidos metálicos vs. anhídridos",
          q: "¿Qué tipo de compuesto se forma cuando un METAL se une con oxígeno?",
          options: ["Anhídrido (óxido ácido)", "Óxido metálico (óxido básico)", "Hidruro", "Ácido oxácido"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Reactivos: un metal + oxígeno." },
            { t: "plantea", label: "Plantea", text: "Regla de nomenclatura inorgánica: Metal + O₂ → óxido metálico (básico). No metal + O₂ → anhídrido (óxido ácido)." },
            { t: "resuelve", label: "Desarrolla", text: "Aquí el elemento que reacciona con oxígeno es un metal." },
            { t: "resultado", label: "Resultado", text: "Se forma un óxido metálico (óxido básico)." }
          ],
          quick: ["Memoriza la pareja fija: Metal+O₂=óxido metálico. No metal+O₂=anhídrido."]
        },
        {
          title: "Nomenclatura sistemática de hidruros",
          q: "¿Cuál es el nombre sistemático (con prefijos) de MgH₂?",
          options: ["Hidruro de manganeso", "Monohidruro de magnesio", "Dihidruro de magnesio", "Óxido de magnesio"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Fórmula: MgH₂ (1 átomo de Mg, 2 átomos de H)." },
            { t: "plantea", label: "Plantea", text: "La nomenclatura sistemática usa prefijos griegos según el número de átomos: mono-, di-, tri-, etc." },
            { t: "resuelve", label: "Desarrolla", text: "Hay 2 átomos de hidrógeno → prefijo \"di-\"." },
            { t: "resultado", label: "Resultado", text: "Dihidruro de magnesio." }
          ],
          quick: ["Cuenta los átomos del subíndice y aplica el prefijo: 2→di, 3→tri, 4→tetra."]
        },
        {
          title: "Hidrácidos (binarios)",
          q: "¿Cuál es la fórmula del ácido bromhídrico?",
          options: ["HBrO₂", "BrH₂", "HBr", "Br₂O"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "\"Bromhídrico\" indica un hidrácido: hidrógeno + halógeno (Br), sin oxígeno." },
            { t: "plantea", label: "Plantea", text: "Los hidrácidos son compuestos BINARIOS: H + no metal (halógenos o S, Se, Te)." },
            { t: "resuelve", label: "Desarrolla", text: "Se combina 1 H con 1 Br." },
            { t: "resultado", label: "Resultado", text: "HBr." }
          ],
          quick: ["Terminación \"-hídrico\" = hidrácido = H + no metal, SIN oxígeno. Fórmula: H + símbolo del no metal."]
        },
        {
          title: "Ácidos oxácidos",
          q: "Los ácidos oxácidos se forman a partir de:",
          options: ["Óxido metálico + H₂O₂", "Óxido metálico + H₂O", "Óxido no metálico (anhídrido) + H₂O", "Metal + Hidrógeno"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Un ácido oxácido contiene oxígeno en su fórmula (a diferencia del hidrácido)." },
            { t: "plantea", label: "Plantea", text: "Se forman al reaccionar un anhídrido (óxido de un no metal) con agua." },
            { t: "resuelve", label: "Desarrolla", text: "Anhídrido + H₂O → ácido oxácido." },
            { t: "resultado", label: "Resultado", text: "Óxido no metálico (anhídrido) + H₂O." }
          ],
          quick: ["Fórmula mental: Anhídrido + Agua = Ácido oxácido (siempre con oxígeno en la molécula)."]
        },
        {
          title: "Elemento característico de todo ácido",
          q: "Todo ácido (hidrácido u oxácido) se caracteriza por poseer siempre el elemento:",
          options: ["Oxígeno", "Cloro", "Hidrógeno", "Carbono"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Existen dos tipos de ácidos: hidrácidos (sin O) y oxácidos (con O)." },
            { t: "plantea", label: "Plantea", text: "Busca el elemento COMÚN a ambos tipos, no exclusivo de uno." },
            { t: "resuelve", label: "Desarrolla", text: "El oxígeno solo está en los oxácidos, no en los hidrácidos. El hidrógeno está en AMBOS, liberándose como H⁺ en disolución." },
            { t: "resultado", label: "Resultado", text: "Hidrógeno." }
          ],
          quick: ["Todo ácido libera H⁺ en agua — por eso el hidrógeno es el elemento constante en todos ellos."]
        },
        {
          title: "Escala de pH",
          q: "En la escala de pH, un valor de 3 indica que la sustancia es:",
          options: ["Fuertemente ácida", "Ligeramente básica", "Neutra", "Fuertemente básica"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Escala de pH: rango de 0 a 14." },
            { t: "plantea", label: "Plantea", text: "Valores menores a 7 = ácidos (más cerca de 0 = más fuerte). Mayores a 7 = básicos. 7 = neutro." },
            { t: "resuelve", label: "Desarrolla", text: "El valor 3 está muy por debajo de 7, cerca del extremo ácido." },
            { t: "resultado", label: "Resultado", text: "Es fuertemente ácida." }
          ],
          quick: ["Memoriza la recta: 0(ácido fuerte)...7(neutro)...14(básico fuerte). Entre más lejos de 7, más fuerte."]
        },
        {
          title: "Enlace iónico vs. covalente",
          q: "¿Cuál es la principal diferencia entre un enlace iónico y uno covalente?",
          options: ["El iónico transfiere electrones; el covalente los comparte", "El covalente transfiere electrones; el iónico los comparte", "Ambos comparten electrones por igual", "No existe diferencia real entre ambos"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Ambos son formas de unir átomos, pero mediante mecanismos distintos." },
            { t: "plantea", label: "Plantea", text: "El enlace iónico ocurre típicamente entre metal y no metal; el covalente entre no metales." },
            { t: "resuelve", label: "Desarrolla", text: "En el iónico, un átomo CEDE electrones y otro los GANA (se forman iones). En el covalente, los átomos COMPARTEN pares de electrones." },
            { t: "resultado", label: "Resultado", text: "Iónico = transferencia de electrones. Covalente = electrones compartidos." }
          ],
          quick: ["Metal+No metal = iónico (transferencia). No metal+No metal = covalente (compartido)."]
        },
        {
          title: "Grupos de la tabla periódica",
          q: "Los elementos de una misma COLUMNA (grupo) en la tabla periódica comparten principalmente:",
          options: ["El mismo número de protones", "Propiedades químicas similares, por el mismo número de electrones de valencia", "La misma masa atómica exacta", "El mismo estado físico siempre"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "La tabla periódica se organiza en filas (períodos) y columnas (grupos o familias)." },
            { t: "plantea", label: "Plantea", text: "Los elementos de un mismo grupo tienen igual número de electrones en su última capa (valencia)." },
            { t: "resuelve", label: "Desarrolla", text: "Ese número de electrones de valencia determina su comportamiento químico." },
            { t: "resultado", label: "Resultado", text: "Comparten propiedades químicas similares." }
          ],
          quick: ["Columna = mismo grupo = misma cantidad de electrones de valencia = propiedades químicas parecidas."]
        },
        {
          title: "Balanceo simple de ecuaciones",
          q: "Para balancear la ecuación: H₂ + O₂ → H₂O, ¿qué coeficientes son correctos?",
          options: ["1 H₂ + 1 O₂ → 1 H₂O", "2 H₂ + 1 O₂ → 2 H₂O", "1 H₂ + 2 O₂ → 1 H₂O", "2 H₂ + 2 O₂ → 2 H₂O"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Ecuación sin balancear: H₂ + O₂ → H₂O." },
            { t: "plantea", label: "Plantea", text: "La ley de conservación de la masa exige que haya el mismo número de átomos de cada elemento en ambos lados." },
            { t: "resuelve", label: "Desarrolla", text: "Con 2 H₂O hay 4 H y 2 O a la derecha. Para igualar: 2 H₂ (4 H) + 1 O₂ (2 O) → 2 H₂O." },
            { t: "resultado", label: "Resultado", text: "2 H₂ + 1 O₂ → 2 H₂O." }
          ],
          quick: ["Cuenta átomos de O primero (suele ser el más difícil de igualar) y ajusta los coeficientes en cadena."]
        },
        {
          title: "Estados de la materia: cambios de estado",
          q: "¿Qué cambio de estado ocurre cuando un líquido pasa a gaseoso en TODA su masa (no solo en la superficie)?",
          options: ["Sublimación", "Ebullición", "Condensación", "Fusión"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Existen varios cambios de estado: fusión, ebullición, condensación, sublimación." },
            { t: "plantea", label: "Plantea", text: "Distingue evaporación (solo superficie, a cualquier temperatura) de ebullición (toda la masa, a una temperatura específica)." },
            { t: "resuelve", label: "Desarrolla", text: "El cambio en TODA la masa del líquido a gas es la ebullición." },
            { t: "resultado", label: "Resultado", text: "Ebullición." }
          ],
          quick: ["Ebullición = toda la masa cambia a gas (punto de ebullición). Evaporación = solo la superficie, a cualquier temperatura."]
        },
        {
          title: "Metales, no metales y metaloides",
          q: "¿Cuál de las siguientes es una propiedad típica de los METALES?",
          options: ["Mala conductividad eléctrica", "Fragilidad extrema", "Buena conductividad eléctrica y térmica", "Ser gases a temperatura ambiente"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Los elementos se clasifican en metales, no metales y metaloides." },
            { t: "plantea", label: "Plantea", text: "Los metales tienen electrones libres que facilitan el paso de corriente y calor." },
            { t: "resuelve", label: "Desarrolla", text: "Esta movilidad de electrones les da buena conductividad eléctrica y térmica, además de brillo y maleabilidad." },
            { t: "resultado", label: "Resultado", text: "Buena conductividad eléctrica y térmica." }
          ],
          quick: ["Metales = brillantes, conductores, maleables y dúctiles (opuesto a no metales, generalmente frágiles y aislantes)."]
        },
        {
          title: "Reacciones exotérmicas y endotérmicas",
          q: "Una reacción que LIBERA calor hacia el entorno se llama:",
          options: ["Endotérmica", "Exotérmica", "Catalítica", "Reversible"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Las reacciones químicas intercambian energía (generalmente calor) con el entorno." },
            { t: "plantea", label: "Plantea", text: "Si LIBERA energía hacia el entorno (aumenta la temperatura alrededor), es exotérmica. Si ABSORBE energía (enfría el entorno), es endotérmica." },
            { t: "resuelve", label: "Desarrolla", text: "La pregunta especifica que libera calor." },
            { t: "resultado", label: "Resultado", text: "Es una reacción exotérmica." }
          ],
          quick: ["EXOtérmica = EXpulsa calor (libera). ENDOtérmica = absorbe (\"entra\" energía)."]
        },
        {
          title: "Número de oxidación en hidruros metálicos",
          q: "¿Cuál es el número de oxidación del hidrógeno en un hidruro metálico (ej. NaH)?",
          options: ["+1", "−1", "0", "+2"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "En un hidruro metálico, el hidrógeno se combina con un metal (más electropositivo que él)." },
            { t: "plantea", label: "Plantea", text: "El elemento MÁS electronegativo de la unión toma el número de oxidación negativo." },
            { t: "resuelve", label: "Desarrolla", text: "Frente a un metal, el hidrógeno actúa como el elemento más electronegativo del par, por lo que toma carga negativa." },
            { t: "resultado", label: "Resultado", text: "El hidrógeno tiene número de oxidación −1 en los hidruros metálicos (excepción a su +1 habitual)." }
          ],
          quick: ["Regla especial: H con metal = H(−1). H con no metal = H(+1). Es una de las pocas excepciones que vale memorizar."]
        },
        {
          title: "Mezclas homogéneas vs. heterogéneas",
          q: "Una mezcla de agua y sal completamente disuelta es un ejemplo de mezcla:",
          options: ["Heterogénea", "Homogénea", "Suspensión", "Coloide"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Agua + sal, totalmente disuelta (no se ven partículas de sal separadas)." },
            { t: "plantea", label: "Plantea", text: "Una mezcla homogénea tiene composición uniforme en toda su extensión (no se distinguen sus componentes a simple vista)." },
            { t: "resuelve", label: "Desarrolla", text: "El agua salada disuelta se ve uniforme, sin partículas visibles separadas." },
            { t: "resultado", label: "Resultado", text: "Es una mezcla homogénea (una disolución)." }
          ],
          quick: ["Si no puedes distinguir los componentes a simple vista → homogénea. Si sí se distinguen (arena+agua) → heterogénea."]
        },
        {
          title: "Concepto de mol",
          q: "¿A cuántas partículas (átomos o moléculas) equivale 1 mol de una sustancia (Número de Avogadro)?",
          options: ["6.022 × 10²³", "3.14 × 10²³", "1.000 × 10²³", "9.8 × 10²³"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "El \"mol\" es la unidad química de cantidad de sustancia." },
            { t: "plantea", label: "Plantea", text: "Un mol siempre contiene el mismo número de partículas, definido por la constante de Avogadro." },
            { t: "resuelve", label: "Desarrolla", text: "Este número es aproximadamente 6.022 × 10²³ partículas." },
            { t: "resultado", label: "Resultado", text: "6.022 × 10²³." }
          ],
          quick: ["Memoriza el número de Avogadro: 6.022 × 10²³ — aparece en casi todo cálculo de moles."]
        },
        {
          title: "Nomenclatura de sales binarias",
          q: "¿Cuál es el nombre del compuesto NaCl?",
          options: ["Óxido de sodio", "Cloruro de sodio", "Hidróxido de sodio", "Sulfuro de sodio"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Fórmula: NaCl (sodio + cloro)." },
            { t: "plantea", label: "Plantea", text: "Una sal binaria (metal + no metal, sin oxígeno) se nombra: \"[no metal]uro de [metal]\"." },
            { t: "resuelve", label: "Desarrolla", text: "Cloro → \"cloruro\". Sodio se mantiene igual." },
            { t: "resultado", label: "Resultado", text: "Cloruro de sodio." }
          ],
          quick: ["Sal binaria = no metal terminado en \"-uro\" + \"de\" + metal. Cl→cloruro, Br→bromuro, S→sulfuro."]
        },
        {
          title: "Nomenclatura de óxidos con números romanos",
          q: "¿Cómo se nombra Fe₂O₃ usando la nomenclatura de Stock (con número romano)?",
          options: ["Óxido de hierro (I)", "Óxido de hierro (II)", "Óxido de hierro (III)", "Óxido de hierro (VI)"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Fórmula: Fe₂O₃. El oxígeno tiene valencia fija −2." },
            { t: "plantea", label: "Plantea", text: "Para que la molécula sea neutra: 2×(carga del Fe) + 3×(−2) = 0." },
            { t: "resuelve", label: "Desarrolla", text: "2×(Fe) = 6 → Fe = +3." },
            { t: "resultado", label: "Resultado", text: "Óxido de hierro (III), ya que el hierro actúa con valencia +3." }
          ],
          quick: ["Iguala cargas totales a cero: (subíndice del metal)×(su valencia) = (subíndice del O)×2."]
        },
        {
          title: "pH de sustancias comunes",
          q: "El jugo de limón tiene un pH aproximado de 2. ¿Qué tipo de sustancia es?",
          options: ["Fuertemente básica", "Neutra", "Fuertemente ácida", "Ligeramente ácida"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "pH = 2 (muy por debajo de 7)." },
            { t: "plantea", label: "Plantea", text: "Cuanto más cerca de 0, más fuertemente ácida es la sustancia." },
            { t: "resuelve", label: "Desarrolla", text: "Un pH de 2 está muy cerca del extremo ácido de la escala." },
            { t: "resultado", label: "Resultado", text: "Es fuertemente ácida." }
          ],
          quick: ["pH cercano a 0-3 = ácido fuerte. 11-14 = básico fuerte. Cerca de 7 = neutro o ligero."]
        },
        {
          title: "Balanceo de ecuación con coeficientes",
          q: "Para balancear: N₂ + H₂ → NH₃, ¿qué coeficientes son correctos?",
          options: ["1 N₂ + 3 H₂ → 2 NH₃", "1 N₂ + 2 H₂ → 1 NH₃", "2 N₂ + 3 H₂ → 2 NH₃", "1 N₂ + 3 H₂ → 1 NH₃"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Ecuación sin balancear: N₂ + H₂ → NH₃." },
            { t: "plantea", label: "Plantea", text: "Debe haber igual número de átomos de N e H en ambos lados." },
            { t: "resuelve", label: "Desarrolla", text: "Con 2 NH₃ hay 2 N y 6 H a la derecha. Para igualar: 1 N₂ (2 N) + 3 H₂ (6 H) → 2 NH₃." },
            { t: "resultado", label: "Resultado", text: "1 N₂ + 3 H₂ → 2 NH₃." }
          ],
          quick: ["Fija el coeficiente del producto primero (2 NH₃) y ajusta los reactivos para igualar átomos."]
        },
        {
          title: "Mezclas heterogéneas",
          q: "Una mezcla de arena y agua, donde se distinguen claramente ambos componentes, es un ejemplo de mezcla:",
          options: ["Homogénea", "Heterogénea", "Disolución verdadera", "Aleación"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Arena + agua: se ven partículas de arena separadas del agua." },
            { t: "plantea", label: "Plantea", text: "Una mezcla heterogénea tiene componentes distinguibles a simple vista." },
            { t: "resuelve", label: "Desarrolla", text: "La arena no se disuelve; queda visible y separable del agua." },
            { t: "resultado", label: "Resultado", text: "Es una mezcla heterogénea." }
          ],
          quick: ["Si puedes ver/separar los componentes fácilmente (arena, aceite y agua) → heterogénea."]
        },
        {
          title: "Elementos y compuestos",
          q: "¿Cuál de las siguientes es una sustancia compuesta (no un elemento)?",
          options: ["Oxígeno (O₂)", "Hierro (Fe)", "Agua (H₂O)", "Oro (Au)"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Un elemento tiene un solo tipo de átomo; un compuesto combina dos o más elementos distintos." },
            { t: "plantea", label: "Plantea", text: "Revisa la fórmula de cada opción: ¿tiene un solo símbolo químico o varios distintos?" },
            { t: "resuelve", label: "Desarrolla", text: "O₂, Fe y Au tienen un solo tipo de átomo (son elementos). H₂O combina hidrógeno y oxígeno." },
            { t: "resultado", label: "Resultado", text: "Agua (H₂O) es el compuesto." }
          ],
          quick: ["Si la fórmula tiene 2+ símbolos químicos distintos, es un compuesto; si es solo uno (aunque tenga subíndice), es un elemento."]
        },
        {
          title: "Gases: relación presión-volumen (Ley de Boyle, conceptual)",
          q: "Según la Ley de Boyle, si la presión de un gas AUMENTA a temperatura constante, ¿qué sucede con su volumen?",
          options: ["Aumenta también", "Disminuye", "Permanece constante", "Se vuelve líquido"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Ley de Boyle: relación entre presión y volumen de un gas a temperatura constante." },
            { t: "plantea", label: "Plantea", text: "Presión y volumen son inversamente proporcionales (P×V = constante)." },
            { t: "resuelve", label: "Desarrolla", text: "Si la presión aumenta, el volumen debe disminuir para mantener el producto constante." },
            { t: "resultado", label: "Resultado", text: "El volumen disminuye." }
          ],
          quick: ["Ley de Boyle: P y V son inversos — uno sube, el otro baja (a temperatura constante)."]
        },
        {
          title: "Nomenclatura de ácidos oxácidos",
          q: "¿Cuál es el nombre del ácido H₂SO₄?",
          options: ["Ácido sulfhídrico", "Ácido sulfuroso", "Ácido sulfúrico", "Ácido persulfúrico"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Fórmula: H₂SO₄ (azufre con el mayor estado de oxidación común, +6)." },
            { t: "plantea", label: "Plantea", text: "Los ácidos oxácidos con el no metal en su valencia MÁS alta terminan en \"-ico\"." },
            { t: "resuelve", label: "Desarrolla", text: "El azufre en H₂SO₄ tiene valencia +6, la más alta de sus valencias comunes." },
            { t: "resultado", label: "Resultado", text: "Ácido sulfúrico." }
          ],
          quick: ["Valencia más alta del no metal → terminación \"-ico\". Valencia menor → terminación \"-oso\"."]
        },
        {
          title: "Configuración electrónica básica",
          q: "¿Cuántos electrones puede tener como máximo el primer nivel de energía (capa K) de un átomo?",
          options: ["2", "4", "6", "8"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Los niveles de energía tienen una capacidad máxima de electrones según la fórmula 2n²." },
            { t: "plantea", label: "Plantea", text: "Para el primer nivel (n=1): capacidad = 2×(1)²." },
            { t: "resuelve", label: "Desarrolla", text: "2×1 = 2." },
            { t: "resultado", label: "Resultado", text: "El primer nivel admite máximo 2 electrones." }
          ],
          quick: ["Fórmula 2n²: nivel 1→2 electrones, nivel 2→8, nivel 3→18 (los más usados en el examen)."]
        },
        {
          title: "Propiedades de los no metales",
          q: "¿Cuál de las siguientes es una propiedad típica de los NO METALES?",
          options: ["Buena conductividad eléctrica", "Brillo metálico intenso", "Mala conductividad eléctrica y térmica", "Alta maleabilidad"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Los no metales se ubican principalmente a la derecha de la tabla periódica." },
            { t: "plantea", label: "Plantea", text: "Sus electrones están más fuertemente unidos al núcleo, dificultando la conducción." },
            { t: "resuelve", label: "Desarrolla", text: "Por eso son, en general, malos conductores de electricidad y calor (excepto el grafito)." },
            { t: "resultado", label: "Resultado", text: "Mala conductividad eléctrica y térmica." }
          ],
          quick: ["No metales = opuestos a metales: opacos, frágiles, malos conductores (con pocas excepciones como el grafito)."]
        },
        {
          title: "Fórmula empírica vs. molecular (conceptual)",
          q: "Si la fórmula molecular de la glucosa es C₆H₁₂O₆, ¿cuál es su fórmula empírica (proporción más simple)?",
          options: ["C₆H₁₂O₆", "CH₂O", "C₃H₆O₃", "C₂H₄O₂"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Fórmula molecular: C₆H₁₂O₆ (6 C, 12 H, 6 O)." },
            { t: "plantea", label: "Plantea", text: "La fórmula empírica es la proporción más simple, dividiendo todos los subíndices entre su MCD." },
            { t: "resuelve", label: "Desarrolla", text: "MCD de 6,12,6 es 6. Dividiendo: C=1, H=2, O=1." },
            { t: "resultado", label: "Resultado", text: "CH₂O." }
          ],
          quick: ["Divide todos los subíndices entre su máximo común divisor para obtener la fórmula empírica."]
        },
        {
          title: "Reacciones de combustión",
          q: "¿Qué productos se obtienen típicamente al quemar completamente un hidrocarburo (combustión completa) en presencia de oxígeno?",
          options: ["Solo agua", "Dióxido de carbono y agua", "Monóxido de carbono únicamente", "Hidrógeno y oxígeno"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Combustión completa: hidrocarburo + O₂ suficiente." },
            { t: "plantea", label: "Plantea", text: "Cuando hay oxígeno suficiente, el carbono se oxida totalmente a CO₂ y el hidrógeno a H₂O." },
            { t: "resuelve", label: "Desarrolla", text: "Ejemplo: CH₄ + 2O₂ → CO₂ + 2H₂O." },
            { t: "resultado", label: "Resultado", text: "Se producen dióxido de carbono y agua." }
          ],
          quick: ["Combustión completa siempre da CO₂ + H₂O (si falta oxígeno, se produce CO, monóxido, más peligroso)."]
        },
        {
          title: "Radio atómico: tendencia periódica",
          q: "En un mismo período (fila) de la tabla periódica, ¿qué sucede con el radio atómico al avanzar de izquierda a derecha?",
          options: ["Aumenta progresivamente", "Disminuye progresivamente", "Se mantiene constante", "Varía sin ningún patrón"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Tendencia periódica del radio atómico." },
            { t: "plantea", label: "Plantea", text: "Al avanzar en un período, aumenta el número de protones (carga nuclear) sin agregar nuevas capas de electrones." },
            { t: "resuelve", label: "Desarrolla", text: "Esa mayor carga nuclear atrae con más fuerza a los electrones, reduciendo el tamaño del átomo." },
            { t: "resultado", label: "Resultado", text: "El radio atómico disminuye de izquierda a derecha en un período." }
          ],
          quick: ["Radio atómico: disminuye de izquierda a derecha (misma fila); aumenta de arriba hacia abajo (misma columna)."]
        },
        {
          title: "Electronegatividad (tendencia periódica)",
          q: "¿Qué elemento tiende a tener MAYOR electronegatividad en la tabla periódica?",
          options: ["Los metales alcalinos (columna 1)", "Los gases nobles (columna 18)", "Los halógenos, como el flúor (columna 17)", "Los metales de transición"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "La electronegatividad mide la tendencia de un átomo a atraer electrones en un enlace." },
            { t: "plantea", label: "Plantea", text: "Es mayor en elementos cercanos a la esquina superior derecha de la tabla (excluyendo gases nobles)." },
            { t: "resuelve", label: "Desarrolla", text: "Los halógenos (grupo 17), como el flúor, tienen la electronegatividad más alta de la tabla." },
            { t: "resultado", label: "Resultado", text: "Los halógenos, como el flúor." }
          ],
          quick: ["El flúor es el elemento MÁS electronegativo de toda la tabla periódica — dato memorizable directo."]
        },
        {
          title: "Isótopos (concepto)",
          q: "¿Qué son los isótopos de un elemento químico?",
          options: ["Átomos con distinto número de protones", "Átomos del mismo elemento con distinto número de neutrones", "Moléculas formadas por dos elementos distintos", "Iones con carga positiva"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Todo átomo se define por su número de protones (número atómico), fijo para cada elemento." },
            { t: "plantea", label: "Plantea", text: "Los isótopos comparten el mismo número de protones, pero difieren en su número de neutrones." },
            { t: "resuelve", label: "Desarrolla", text: "Esto cambia su masa atómica, aunque siguen siendo el mismo elemento químico." },
            { t: "resultado", label: "Resultado", text: "Átomos del mismo elemento con distinto número de neutrones." }
          ],
          quick: ["Isótopos = mismo elemento (mismos protones), distinta masa (distintos neutrones). Ej: carbono-12 y carbono-14."]
        },
        {
          title: "Soluciones: concentración (porcentaje masa/masa)",
          q: "Se disuelven 20 g de sal en 180 g de agua. ¿Cuál es la concentración de la solución en porcentaje masa/masa?",
          options: ["10%", "11%", "20%", "22%"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Soluto (sal) = 20 g. Solvente (agua) = 180 g. Masa total de la solución = 200 g." },
            { t: "plantea", label: "Plantea", text: "% m/m = (masa del soluto / masa total de la solución) × 100." },
            { t: "resuelve", label: "Desarrolla", text: "% = (20/200) × 100." },
            { t: "resultado", label: "Resultado", text: "10%." }
          ],
          quick: ["Suma soluto+solvente para el total, divide el soluto entre el total y multiplica por 100."]
        },
        {
          title: "Tipos de reacciones químicas: síntesis vs. descomposición",
          q: "En la reacción 2H₂O → 2H₂ + O₂, ¿qué tipo de reacción química ocurre?",
          options: ["Síntesis (combinación)", "Descomposición", "Sustitución simple", "Sustitución doble"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Reacción: una sustancia (agua) se transforma en dos sustancias más simples." },
            { t: "plantea", label: "Plantea", text: "En una reacción de descomposición, UN compuesto se separa en DOS o más sustancias." },
            { t: "resuelve", label: "Desarrolla", text: "Aquí el agua (H₂O) se descompone en hidrógeno y oxígeno." },
            { t: "resultado", label: "Resultado", text: "Es una reacción de descomposición." }
          ],
          quick: ["Descomposición: 1 compuesto → 2+ sustancias. Síntesis: 2+ sustancias → 1 compuesto (proceso inverso)."]
        },
        {
          title: "Catalizadores (concepto)",
          q: "¿Cuál es la función de un catalizador en una reacción química?",
          options: ["Aumentar la cantidad de producto final obtenido", "Acelerar la reacción sin consumirse en el proceso", "Cambiar los productos de la reacción", "Detener completamente la reacción"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Un catalizador participa en la reacción pero se regenera al final." },
            { t: "plantea", label: "Plantea", text: "Su función es reducir la energía de activación necesaria para que la reacción ocurra." },
            { t: "resuelve", label: "Desarrolla", text: "Esto hace que la reacción sea más rápida, sin modificar la cantidad final de producto ni consumirse él mismo." },
            { t: "resultado", label: "Resultado", text: "Acelerar la reacción sin consumirse en el proceso." }
          ],
          quick: ["Catalizador = acelera la reacción, no se consume, no cambia el producto final — solo la velocidad."]
        },
        {
          title: "Valencia y número de oxidación de metales alcalinos",
          q: "¿Cuál es el número de oxidación más común de los metales alcalinos (grupo 1), como el sodio o el potasio?",
          options: ["+1", "+2", "−1", "+3"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Grupo 1 de la tabla periódica: litio, sodio, potasio, etc." },
            { t: "plantea", label: "Plantea", text: "Estos elementos tienen un solo electrón en su última capa (valencia)." },
            { t: "resuelve", label: "Desarrolla", text: "Tienden a perder ese único electrón para alcanzar estabilidad, formando iones +1." },
            { t: "resultado", label: "Resultado", text: "+1." }
          ],
          quick: ["Grupo 1 (alcalinos) = siempre +1. Grupo 2 (alcalinotérreos) = siempre +2. Patrón directo del grupo."]
        },
        {
          title: "Densidad y estados de agregación",
          q: "En general, ¿cómo es la densidad de un sólido comparada con la de su fase líquida (caso típico, sin contar el agua)?",
          options: ["El sólido es menos denso que el líquido", "El sólido es generalmente más denso que el líquido", "Ambos tienen exactamente la misma densidad siempre", "No existe relación entre ambos estados"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Comparación general entre estado sólido y líquido de una misma sustancia." },
            { t: "plantea", label: "Plantea", text: "En la mayoría de sustancias, las partículas están más juntas en el estado sólido que en el líquido." },
            { t: "resuelve", label: "Desarrolla", text: "Esa mayor compactación generalmente resulta en mayor densidad del sólido." },
            { t: "resultado", label: "Resultado", text: "El sólido es generalmente más denso que el líquido." }
          ],
          quick: ["Excepción clásica de examen: el AGUA es la excepción — el hielo (sólido) es MENOS denso que el agua líquida, por eso flota."]
        },
        {
          title: "Ácidos y bases: reacción de neutralización",
          q: "¿Qué se produce típicamente cuando un ácido reacciona con una base (reacción de neutralización)?",
          options: ["Un gas y un metal", "Una sal y agua", "Solo un ácido más fuerte", "Un óxido metálico únicamente"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Reacción típica: Ácido + Base → ?" },
            { t: "plantea", label: "Plantea", text: "En una neutralización, el H⁺ del ácido se combina con el OH⁻ de la base." },
            { t: "resuelve", label: "Desarrolla", text: "Esto forma agua (H₂O), mientras que los demás iones forman una sal." },
            { t: "resultado", label: "Resultado", text: "Se produce una sal y agua." }
          ],
          quick: ["Fórmula mental: Ácido + Base → Sal + Agua (reacción de neutralización clásica)."]
        },
        {
          title: "Metales de transición (propiedad distintiva)",
          q: "¿Qué caracteriza a los metales de transición (bloque central de la tabla periódica)?",
          options: ["Tienen un solo estado de oxidación posible siempre", "Pueden formar iones con varios estados de oxidación distintos", "Nunca forman compuestos coloridos", "Son todos gases a temperatura ambiente"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Los metales de transición ocupan el bloque \"d\" central de la tabla periódica." },
            { t: "plantea", label: "Plantea", text: "Su configuración electrónica les permite perder distintas cantidades de electrones." },
            { t: "resuelve", label: "Desarrolla", text: "Por eso pueden formar iones con múltiples estados de oxidación (ej. Fe²⁺ y Fe³⁺), y suelen formar compuestos coloridos." },
            { t: "resultado", label: "Resultado", text: "Pueden formar iones con varios estados de oxidación distintos." }
          ],
          quick: ["Metales de transición = múltiples valencias posibles (ej. hierro: +2 o +3) y compuestos frecuentemente coloridos."]
        },
        {
          title: "Difusión de gases (conceptual)",
          q: "¿Por qué puedes oler un perfume esparcido en una esquina de la habitación desde el otro extremo, después de un tiempo?",
          options: ["Porque el perfume se convierte en líquido en el aire", "Porque las partículas del gas se difunden y se distribuyen por todo el espacio disponible", "Porque el aire se vuelve más denso", "Porque el olor viaja únicamente por conducción térmica"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Los gases no tienen forma ni volumen fijo; sus partículas se mueven libremente." },
            { t: "plantea", label: "Plantea", text: "Este movimiento aleatorio hace que las partículas de gas se dispersen desde zonas de mayor concentración a menor concentración." },
            { t: "resuelve", label: "Desarrolla", text: "Este fenómeno se llama difusión y explica cómo un olor se propaga por toda una habitación." },
            { t: "resultado", label: "Resultado", text: "Porque las partículas del gas se difunden y se distribuyen por todo el espacio disponible." }
          ],
          quick: ["Difusión = movimiento espontáneo de partículas de gas de mayor a menor concentración, hasta distribuirse uniformemente."]
        },
        {
          title: "Óxidos ácidos (anhídridos): ejemplo con azufre",
          q: "¿Qué tipo de compuesto es el SO₃ (trióxido de azufre)?",
          options: ["Óxido básico (metálico)", "Óxido ácido (anhídrido)", "Hidruro", "Ácido hidrácido"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Fórmula: SO₃ (azufre, un no metal, + oxígeno)." },
            { t: "plantea", label: "Plantea", text: "No metal + oxígeno → óxido ácido (anhídrido)." },
            { t: "resuelve", label: "Desarrolla", text: "El azufre es un no metal, por lo que su combinación con oxígeno forma un anhídrido." },
            { t: "resultado", label: "Resultado", text: "Es un óxido ácido (anhídrido)." }
          ],
          quick: ["Recordatorio: No metal + O₂ = anhídrido (óxido ácido). Este, al reaccionar con agua, formaría ácido sulfúrico."]
        }
      ]
    },

    // ======================= BIOLOGÍA =======================
    {
      key: "biologia", title: "Biología", color: "#132a44",
      description: "Célula, genética mendeliana, sistemas del cuerpo humano y ecología.",
      problems: [
        {
          title: "La célula como unidad de vida",
          q: "¿Cuál es la unidad básica estructural y funcional de todo ser vivo?",
          options: ["El tejido", "La célula", "El órgano", "El sistema"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Todos los seres vivos están compuestos por unidades organizativas: célula, tejido, órgano, sistema." },
            { t: "plantea", label: "Plantea", text: "La pregunta busca la unidad MÁS BÁSICA capaz de realizar funciones vitales por sí sola (organismos unicelulares lo demuestran)." },
            { t: "resuelve", label: "Desarrolla", text: "Tejidos, órganos y sistemas están formados por conjuntos de células, no al revés." },
            { t: "resultado", label: "Resultado", text: "La célula." }
          ],
          quick: ["Jerarquía biológica: célula → tejido → órgano → sistema → organismo. La célula es la base de todo."]
        },
        {
          title: "Primera ley de Mendel (Uniformidad)",
          q: "Al cruzar dos individuos homocigotos con caracteres distintos (AA × aa), ¿cómo es la primera generación (F1)?",
          options: ["Toda homocigota dominante", "Toda heterocigota, con fenotipo dominante", "Toda homocigota recesiva", "Una mezcla 50/50 de fenotipos"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Padres: AA (homocigoto dominante) × aa (homocigoto recesivo)." },
            { t: "plantea", label: "Plantea", text: "Cada padre solo puede aportar un tipo de alelo: el AA solo da \"A\", el aa solo da \"a\"." },
            { t: "resuelve", label: "Desarrolla", text: "Todos los descendientes reciben un alelo A y un alelo a → genotipo Aa en el 100% de los casos." },
            { t: "resultado", label: "Resultado", text: "Toda la F1 es heterocigota (Aa) y muestra el fenotipo DOMINANTE (Ley de la Uniformidad)." }
          ],
          quick: ["AA × aa siempre da 100% Aa en la F1 — no requiere cuadro de Punnett completo, es directo.", "El fenotipo de la F1 siempre es el dominante."]
        },
        {
          title: "Segunda ley de Mendel (Segregación) — cruce Aa × Aa",
          q: "Al cruzar dos individuos heterocigotos (Aa × Aa), ¿qué proporción fenotípica se espera en la descendencia?",
          options: ["100% dominante", "50% dominante, 50% recesivo", "75% dominante, 25% recesivo", "25% dominante, 75% recesivo"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Padres: Aa × Aa (ambos heterocigotos)." },
            { t: "plantea", label: "Plantea", text: "Cuadro de Punnett: combina los alelos A/a de un padre con A/a del otro." },
            { t: "resuelve", label: "Desarrolla", text: "Genotipos resultantes: AA, Aa, Aa, aa (1:2:1). AA y Aa muestran fenotipo dominante (3 de 4); solo aa es recesivo (1 de 4)." },
            { t: "resultado", label: "Resultado", text: "75% fenotipo dominante, 25% fenotipo recesivo (proporción clásica 3:1)." }
          ],
          quick: ["Memoriza la proporción clásica de Mendel para Aa×Aa: genotipos 1:2:1, fenotipos 3:1 (dominante:recesivo)."]
        },
        {
          title: "Función de los glóbulos rojos",
          q: "¿Qué función cumplen los glóbulos rojos (eritrocitos) en el cuerpo humano?",
          options: ["Producir anticuerpos", "Transportar oxígeno mediante la hemoglobina", "Coagular la sangre", "Combatir infecciones directamente"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Los eritrocitos son células sanguíneas especializadas, sin núcleo en su forma madura." },
            { t: "plantea", label: "Plantea", text: "Contienen hemoglobina, una proteína que se une reversiblemente al oxígeno." },
            { t: "resuelve", label: "Desarrolla", text: "Esta unión permite transportar oxígeno desde los pulmones hasta todos los tejidos del cuerpo." },
            { t: "resultado", label: "Resultado", text: "Transportar oxígeno mediante la hemoglobina." }
          ],
          quick: ["Glóbulos rojos = oxígeno (hemoglobina). Glóbulos blancos = defensa/infecciones. Plaquetas = coagulación."]
        },
        {
          title: "Productores en un ecosistema",
          q: "En un ecosistema, los organismos que producen su propio alimento mediante fotosíntesis se llaman:",
          options: ["Consumidores primarios", "Descomponedores", "Productores", "Consumidores secundarios"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Una cadena alimenticia tiene productores, consumidores (de distintos niveles) y descomponedores." },
            { t: "plantea", label: "Plantea", text: "Los productores generan su propia energía a partir de fuentes externas (luz solar), sin depender de otros seres vivos para alimentarse." },
            { t: "resuelve", label: "Desarrolla", text: "Plantas, algas y cianobacterias realizan fotosíntesis y son la base energética de la cadena." },
            { t: "resultado", label: "Resultado", text: "Se llaman productores." }
          ],
          quick: ["Productores = fotosíntesis (base de la cadena). Consumidores = se alimentan de otros. Descomponedores = degradan materia orgánica muerta."]
        },
        {
          title: "Función del sistema nervioso",
          q: "¿Cuál es la función principal del sistema nervioso?",
          options: ["Transportar nutrientes por el cuerpo", "Coordinar y controlar las funciones del organismo mediante impulsos eléctricos", "Producir hormonas exclusivamente", "Filtrar la sangre"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "El sistema nervioso está formado por el cerebro, la médula espinal y los nervios." },
            { t: "plantea", label: "Plantea", text: "Su función es recibir información del entorno, procesarla y generar una respuesta." },
            { t: "resuelve", label: "Desarrolla", text: "Esto se logra mediante impulsos eléctricos que viajan a través de las neuronas." },
            { t: "resultado", label: "Resultado", text: "Coordinar y controlar las funciones del organismo mediante impulsos eléctricos." }
          ],
          quick: ["Sistema nervioso = impulsos eléctricos/neuronas. Sistema endocrino = hormonas (más lento, vía sangre)."]
        },
        {
          title: "Fotosíntesis: reactivos y productos",
          q: "En la fotosíntesis, las plantas utilizan dióxido de carbono y agua, en presencia de luz, para producir:",
          options: ["Glucosa y oxígeno", "Nitrógeno y agua", "Dióxido de carbono y ATP únicamente", "Proteínas y grasas"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Reactivos de la fotosíntesis: CO₂ + H₂O + luz solar." },
            { t: "plantea", label: "Plantea", text: "La planta transforma esta materia prima usando la energía de la luz (proceso llevado a cabo en los cloroplastos)." },
            { t: "resuelve", label: "Desarrolla", text: "El resultado es una molécula de azúcar (energía química) y oxígeno como subproducto." },
            { t: "resultado", label: "Resultado", text: "Glucosa y oxígeno." }
          ],
          quick: ["Ecuación simplificada: CO₂ + H₂O + luz → Glucosa + O₂. Es la base de casi toda la vida en la Tierra."]
        },
        {
          title: "Función del ADN",
          q: "¿Cuál es la función principal del ADN en las células?",
          options: ["Producir energía celular", "Almacenar y transmitir la información genética", "Transportar oxígeno", "Digerir nutrientes"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "El ADN (ácido desoxirribonucleico) se encuentra en el núcleo de la célula." },
            { t: "plantea", label: "Plantea", text: "Contiene la secuencia de \"instrucciones\" (genes) que determinan las características del organismo." },
            { t: "resuelve", label: "Desarrolla", text: "Esta información se transmite de padres a hijos y dirige la síntesis de proteínas." },
            { t: "resultado", label: "Resultado", text: "Almacenar y transmitir la información genética." }
          ],
          quick: ["ADN = \"manual de instrucciones\" hereditario de la célula. Distinto de las mitocondrias (energía) o ribosomas (proteínas)."]
        },
        {
          title: "Comunidad ecológica",
          q: "En ecología, el conjunto de todas las poblaciones de distintas especies que interactúan en un mismo lugar se llama:",
          options: ["Población", "Comunidad (biocenosis)", "Bioma", "Nicho ecológico"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Jerarquía ecológica: individuo → población → comunidad → ecosistema → bioma → biosfera." },
            { t: "plantea", label: "Plantea", text: "Una población agrupa individuos de UNA misma especie; una comunidad agrupa VARIAS poblaciones de especies distintas." },
            { t: "resuelve", label: "Desarrolla", text: "El enunciado describe \"distintas especies\" que interactúan — eso corresponde a comunidad." },
            { t: "resultado", label: "Resultado", text: "Comunidad (biocenosis)." }
          ],
          quick: ["Población = 1 especie. Comunidad = varias especies interactuando. Ecosistema = comunidad + ambiente físico."]
        },
        {
          title: "Sistema circulatorio",
          q: "¿Cuál es la función principal del sistema circulatorio?",
          options: ["Producir hormonas exclusivamente", "Transportar sangre, oxígeno, nutrientes y desechos por todo el cuerpo", "Filtrar el aire inhalado", "Sintetizar vitaminas"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Compuesto por corazón, arterias, venas y capilares." },
            { t: "plantea", label: "Plantea", text: "Su función es de TRANSPORTE: distribuir sustancias vitales por todo el organismo." },
            { t: "resuelve", label: "Desarrolla", text: "La sangre lleva oxígeno, nutrientes, hormonas y recoge desechos de las células." },
            { t: "resultado", label: "Resultado", text: "Transportar sangre, oxígeno, nutrientes y desechos por todo el cuerpo." }
          ],
          quick: ["Sistema circulatorio = transporte (bomba: corazón; tuberías: vasos sanguíneos)."]
        },
        {
          title: "Herencia: genotipo vs. fenotipo",
          q: "Si el genotipo de un individuo es Aa (heterocigoto) para un gen con A dominante, ¿cuál es su fenotipo?",
          options: ["Muestra el fenotipo recesivo", "Muestra el fenotipo dominante", "Muestra una mezcla de ambos siempre", "No tiene fenotipo definido"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Genotipo: Aa. A es dominante sobre a." },
            { t: "plantea", label: "Plantea", text: "En dominancia completa, basta UN alelo dominante para que se exprese ese fenotipo." },
            { t: "resuelve", label: "Desarrolla", text: "Aunque tiene también el alelo recesivo \"a\", este queda \"enmascarado\" por el dominante." },
            { t: "resultado", label: "Resultado", text: "Muestra el fenotipo dominante." }
          ],
          quick: ["Regla de dominancia completa: basta 1 alelo dominante (AA o Aa) para expresar el fenotipo dominante. Solo aa muestra el recesivo."]
        },
        {
          title: "Niveles tróficos y flujo de energía",
          q: "En una cadena alimenticia, ¿qué ocurre con la cantidad de energía disponible a medida que se avanza de un nivel trófico al siguiente?",
          options: ["Aumenta en cada nivel", "Se mantiene exactamente igual", "Disminuye en cada nivel (se pierde como calor)", "Se duplica en cada nivel"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Niveles tróficos: productores → consumidores primarios → secundarios → terciarios." },
            { t: "plantea", label: "Plantea", text: "En cada transferencia de energía entre niveles, parte de ella se pierde como calor por procesos metabólicos (regla del 10%)." },
            { t: "resuelve", label: "Desarrolla", text: "Por eso las cadenas alimenticias rara vez superan 4-5 niveles: la energía disponible se reduce mucho en cada paso." },
            { t: "resultado", label: "Resultado", text: "Disminuye en cada nivel trófico." }
          ],
          quick: ["Regla del 10%: solo ~10% de la energía pasa de un nivel trófico al siguiente; el resto se disipa como calor."]
        },
        {
          title: "Función de la respiración celular",
          q: "¿Cuál es el propósito principal de la respiración celular?",
          options: ["Producir dióxido de carbono como fin último", "Obtener energía (ATP) a partir de la glucosa", "Sintetizar ADN", "Eliminar oxígeno del cuerpo"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "La respiración celular ocurre principalmente en las mitocondrias." },
            { t: "plantea", label: "Plantea", text: "Es el proceso inverso (en cierto sentido) a la fotosíntesis: usa glucosa y oxígeno para liberar energía." },
            { t: "resuelve", label: "Desarrolla", text: "Esa energía se almacena en forma de ATP, la \"moneda energética\" de la célula." },
            { t: "resultado", label: "Resultado", text: "Obtener energía (ATP) a partir de la glucosa." }
          ],
          quick: ["Fotosíntesis: luz+CO₂+H₂O→glucosa+O₂. Respiración celular: glucosa+O₂→energía(ATP)+CO₂+H₂O (proceso inverso)."]
        },
        {
          title: "Sistemas de defensa: el sistema inmune",
          q: "¿Qué función cumplen los glóbulos blancos (leucocitos) en el cuerpo humano?",
          options: ["Transportar oxígeno", "Coagular heridas", "Defender al organismo contra infecciones", "Producir bilis"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Los leucocitos forman parte del sistema inmunológico." },
            { t: "plantea", label: "Plantea", text: "Su función es identificar y destruir agentes externos (bacterias, virus) que invaden el cuerpo." },
            { t: "resuelve", label: "Desarrolla", text: "Existen varios tipos de glóbulos blancos, cada uno con un rol específico en la defensa inmunológica." },
            { t: "resultado", label: "Resultado", text: "Defender al organismo contra infecciones." }
          ],
          quick: ["Glóbulos blancos = defensa/inmunidad. (Rojos=oxígeno, plaquetas=coagulación, blancos=defensa)."]
        },
        {
          title: "Organelos celulares: la mitocondria",
          q: "¿Cuál es la función principal de la mitocondria dentro de la célula?",
          options: ["Almacenar información genética", "Producir energía (ATP) mediante la respiración celular", "Sintetizar proteínas", "Digerir desechos celulares"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "La mitocondria es un organelo presente en células eucariotas." },
            { t: "plantea", label: "Plantea", text: "Se le conoce como la \"central energética\" de la célula." },
            { t: "resuelve", label: "Desarrolla", text: "Ahí ocurre la respiración celular, que transforma glucosa y oxígeno en energía utilizable (ATP)." },
            { t: "resultado", label: "Resultado", text: "Producir energía (ATP) mediante la respiración celular." }
          ],
          quick: ["Mitocondria = \"fábrica de energía\" (ATP). Núcleo = ADN. Ribosomas = proteínas."]
        },
        {
          title: "Organelos celulares: el núcleo",
          q: "¿Cuál es la función principal del núcleo celular?",
          options: ["Producir energía", "Contener y proteger el material genético (ADN)", "Sintetizar lípidos", "Eliminar desechos"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "El núcleo es la estructura más prominente en las células eucariotas." },
            { t: "plantea", label: "Plantea", text: "Actúa como el \"centro de control\" de la célula." },
            { t: "resuelve", label: "Desarrolla", text: "Contiene el ADN organizado en cromosomas y dirige todas las actividades celulares." },
            { t: "resultado", label: "Resultado", text: "Contener y proteger el material genético (ADN)." }
          ],
          quick: ["Núcleo = \"centro de mando\" con el ADN. Es la estructura que distingue a las células eucariotas."]
        },
        {
          title: "Grupos sanguíneos: herencia básica",
          q: "Si ambos padres son de grupo sanguíneo O (genotipo OO), ¿qué grupo sanguíneo tendrán todos sus hijos?",
          options: ["A", "B", "AB", "O"], correct: 3,
          full: [
            { t: "dato", label: "Datos", text: "Ambos padres: genotipo OO (homocigotos recesivos para el grupo sanguíneo)." },
            { t: "plantea", label: "Plantea", text: "Cada padre solo puede aportar el alelo O, ya que no tienen otro alelo." },
            { t: "resuelve", label: "Desarrolla", text: "Todos los hijos recibirán O de cada padre → genotipo OO." },
            { t: "resultado", label: "Resultado", text: "Todos los hijos serán de grupo sanguíneo O." }
          ],
          quick: ["Si ambos padres son homocigotos para el mismo alelo recesivo, el 100% de los hijos hereda ese mismo genotipo."]
        },
        {
          title: "Sistema digestivo: función del estómago",
          q: "¿Cuál es la función principal del estómago en el proceso digestivo?",
          options: ["Absorber la mayoría de los nutrientes", "Descomponer los alimentos mediante ácidos y enzimas", "Producir insulina", "Filtrar la sangre"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "El estómago es un órgano muscular que recibe el alimento desde el esófago." },
            { t: "plantea", label: "Plantea", text: "Secreta ácido clorhídrico y enzimas (como la pepsina) para descomponer los alimentos." },
            { t: "resuelve", label: "Desarrolla", text: "Este proceso mecánico y químico prepara el alimento para su posterior absorción en el intestino." },
            { t: "resultado", label: "Resultado", text: "Descomponer los alimentos mediante ácidos y enzimas." }
          ],
          quick: ["Estómago = descomposición química (ácidos+enzimas). La absorción de nutrientes ocurre principalmente en el intestino delgado."]
        },
        {
          title: "Sistema respiratorio: intercambio gaseoso",
          q: "¿Dónde ocurre principalmente el intercambio de oxígeno y dióxido de carbono en el sistema respiratorio?",
          options: ["En la tráquea", "En los alvéolos pulmonares", "En la laringe", "En los bronquios principales"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "El aire recorre: nariz → tráquea → bronquios → bronquiolos → alvéolos." },
            { t: "plantea", label: "Plantea", text: "El intercambio gaseoso requiere una superficie muy delgada y con mucho contacto con capilares sanguíneos." },
            { t: "resuelve", label: "Desarrolla", text: "Los alvéolos son pequeños sacos rodeados de capilares, ideales para este intercambio." },
            { t: "resultado", label: "Resultado", text: "En los alvéolos pulmonares." }
          ],
          quick: ["Alvéolos = punto exacto del intercambio gaseoso (O₂ entra, CO₂ sale) — están rodeados de capilares."]
        },
        {
          title: "Sistema óseo: función del esqueleto",
          q: "¿Cuál de las siguientes NO es una función del sistema óseo?",
          options: ["Dar soporte y forma al cuerpo", "Proteger órganos vitales", "Producir células sanguíneas en la médula ósea", "Producir insulina"], correct: 3,
          full: [
            { t: "dato", label: "Datos", text: "El sistema óseo cumple funciones estructurales, protectoras y hematopoyéticas." },
            { t: "plantea", label: "Plantea", text: "Busca la opción que NO corresponde al sistema óseo, sino a otro sistema (endocrino)." },
            { t: "resuelve", label: "Desarrolla", text: "Producir insulina es función del páncreas (sistema endocrino), no del sistema óseo." },
            { t: "resultado", label: "Resultado", text: "Producir insulina NO es función del sistema óseo." }
          ],
          quick: ["Sistema óseo = soporte + protección + producción de células sanguíneas (médula ósea). No produce hormonas digestivas."]
        },
        {
          title: "Evolución: selección natural",
          q: "Según la teoría de la selección natural de Darwin, ¿qué determina que ciertos individuos sobrevivan y se reproduzcan más que otros?",
          options: ["La suerte, de manera completamente aleatoria", "Poseer características que los hacen más aptos para su ambiente", "Ser los más grandes en tamaño, sin excepción", "La intervención humana directa"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Teoría de la evolución por selección natural (Charles Darwin)." },
            { t: "plantea", label: "Plantea", text: "Los individuos con características más adaptadas a su ambiente tienen mayor probabilidad de sobrevivir y reproducirse." },
            { t: "resuelve", label: "Desarrolla", text: "Esas características ventajosas se transmiten con más frecuencia a la siguiente generación." },
            { t: "resultado", label: "Resultado", text: "Poseer características que los hacen más aptos para su ambiente ('supervivencia del más apto')." }
          ],
          quick: ["Selección natural = \"supervivencia del más apto\" (mejor adaptado al ambiente, no necesariamente el más fuerte o grande)."]
        },
        {
          title: "Taxonomía: los reinos biológicos",
          q: "¿A qué reino biológico pertenecen los hongos (como los champiñones)?",
          options: ["Reino Animal", "Reino Plantae (vegetal)", "Reino Fungi", "Reino Monera (bacterias)"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Clasificación biológica en reinos: Animal, Plantae, Fungi, Protista, Monera." },
            { t: "plantea", label: "Plantea", text: "Los hongos tienen características propias (no hacen fotosíntesis, se alimentan por absorción) que los diferencian de plantas y animales." },
            { t: "resuelve", label: "Desarrolla", text: "Por eso se clasifican en un reino aparte." },
            { t: "resultado", label: "Resultado", text: "Reino Fungi." }
          ],
          quick: ["Los hongos NO son plantas (no hacen fotosíntesis) ni animales — tienen su propio reino: Fungi."]
        },
        {
          title: "Reproducción celular: mitosis",
          q: "¿Cuál es el resultado de la mitosis (división celular)?",
          options: ["Cuatro células con la mitad de cromosomas", "Dos células genéticamente idénticas a la original", "Una sola célula sin cambios", "Dos células con el doble de cromosomas"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "La mitosis es el proceso de división celular para crecimiento y reparación de tejidos." },
            { t: "plantea", label: "Plantea", text: "A diferencia de la meiosis (células reproductivas), la mitosis mantiene el número de cromosomas." },
            { t: "resuelve", label: "Desarrolla", text: "Produce dos células hijas con la misma información genética que la célula original." },
            { t: "resultado", label: "Resultado", text: "Dos células genéticamente idénticas a la original." }
          ],
          quick: ["Mitosis = 2 células idénticas (crecimiento/reparación). Meiosis = 4 células con la mitad de cromosomas (reproducción)."]
        },
        {
          title: "Reproducción celular: meiosis",
          q: "¿Cuál es el propósito principal de la meiosis?",
          options: ["Producir células somáticas para crecimiento", "Producir células sexuales (gametos) con la mitad de cromosomas", "Reparar tejidos dañados", "Producir energía celular"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "La meiosis ocurre en las células que producen óvulos y espermatozoides." },
            { t: "plantea", label: "Plantea", text: "Su objetivo es reducir el número de cromosomas a la mitad, para que al unirse óvulo y espermatozoide se restaure el número normal." },
            { t: "resuelve", label: "Desarrolla", text: "Produce 4 células (gametos) con la mitad de la información genética." },
            { t: "resultado", label: "Resultado", text: "Producir células sexuales (gametos) con la mitad de cromosomas." }
          ],
          quick: ["Meiosis = reproducción sexual (gametos, mitad de cromosomas). Mitosis = crecimiento (células idénticas)."]
        },
        {
          title: "Ciclo del agua (ciclo hidrológico)",
          q: "¿Qué proceso del ciclo del agua ocurre cuando el vapor de agua se enfría y forma nubes?",
          options: ["Evaporación", "Condensación", "Precipitación", "Infiltración"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Ciclo del agua: evaporación → condensación → precipitación → escorrentía/infiltración." },
            { t: "plantea", label: "Plantea", text: "Busca el proceso específico donde el vapor pasa de gas a pequeñas gotas (nubes)." },
            { t: "resuelve", label: "Desarrolla", text: "Cuando el vapor se enfría en la atmósfera, se condensa formando gotas que constituyen las nubes." },
            { t: "resultado", label: "Resultado", text: "Condensación." }
          ],
          quick: ["Evaporación=agua→vapor (sube). Condensación=vapor→nubes (se enfría). Precipitación=nubes→lluvia (cae)."]
        },
        {
          title: "Ciclo del carbono (conceptual)",
          q: "¿Qué proceso realizado por las plantas ayuda a REDUCIR el CO₂ de la atmósfera?",
          options: ["Respiración celular", "Fotosíntesis", "Transpiración", "Descomposición"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "El ciclo del carbono involucra la captura y liberación de CO₂ por distintos procesos." },
            { t: "plantea", label: "Plantea", text: "Busca el proceso que CONSUME CO₂ de la atmósfera (no el que lo libera)." },
            { t: "resuelve", label: "Desarrolla", text: "La fotosíntesis usa CO₂ como materia prima para producir glucosa, retirándolo del aire." },
            { t: "resultado", label: "Resultado", text: "Fotosíntesis." }
          ],
          quick: ["Fotosíntesis = CONSUME CO₂ (lo retira del aire). Respiración = LIBERA CO₂ (lo devuelve al aire). Son procesos opuestos."]
        },
        {
          title: "Sistema muscular: tipos de músculo",
          q: "¿Qué tipo de músculo forma la pared del corazón y funciona de manera involuntaria?",
          options: ["Músculo esquelético", "Músculo liso", "Músculo cardíaco", "Músculo estriado voluntario"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Existen 3 tipos de tejido muscular: esquelético, liso y cardíaco." },
            { t: "plantea", label: "Plantea", text: "Busca el tipo específico de la pared del corazón, que se contrae sin control consciente." },
            { t: "resuelve", label: "Desarrolla", text: "El músculo cardíaco es estriado (como el esquelético) pero de contracción involuntaria (como el liso)." },
            { t: "resultado", label: "Resultado", text: "Músculo cardíaco." }
          ],
          quick: ["Esquelético=voluntario (mover brazos). Liso=involuntario (intestinos). Cardíaco=involuntario, solo en el corazón."]
        },
        {
          title: "Sistema endocrino: la insulina",
          q: "¿Qué función cumple la insulina, hormona producida por el páncreas?",
          options: ["Regular la presión arterial", "Reducir el nivel de glucosa en sangre", "Producir glóbulos rojos", "Controlar la temperatura corporal"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "La insulina es producida por las células beta del páncreas." },
            { t: "plantea", label: "Plantea", text: "Su función principal está relacionada con el metabolismo de la glucosa." },
            { t: "resuelve", label: "Desarrolla", text: "Permite que las células absorban glucosa de la sangre, reduciendo su concentración." },
            { t: "resultado", label: "Resultado", text: "Reducir el nivel de glucosa en sangre." }
          ],
          quick: ["Insulina = BAJA la glucosa en sangre (su falta o mal funcionamiento causa diabetes)."]
        },
        {
          title: "Biomas: características del desierto",
          q: "¿Cuál es una característica típica del bioma desértico?",
          options: ["Precipitaciones muy altas todo el año", "Escasa precipitación y gran variación de temperatura entre día y noche", "Vegetación exclusivamente de árboles altos", "Temperatura constante y húmeda"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "El desierto es un bioma caracterizado por su aridez." },
            { t: "plantea", label: "Plantea", text: "Identifica el rasgo climático definitorio de este bioma." },
            { t: "resuelve", label: "Desarrolla", text: "Se caracteriza por muy poca lluvia y grandes diferencias de temperatura entre el día (caluroso) y la noche (frío)." },
            { t: "resultado", label: "Resultado", text: "Escasa precipitación y gran variación de temperatura entre día y noche." }
          ],
          quick: ["Desierto = poca agua + cambios extremos de temperatura día/noche (no necesariamente siempre caliente)."]
        },
        {
          title: "Adaptaciones biológicas",
          q: "El pelaje blanco de algunos animales árticos (como el zorro polar) en invierno es un ejemplo de:",
          options: ["Mutación aleatoria sin función", "Adaptación (camuflaje) para sobrevivir en su ambiente", "Un error genético perjudicial", "Una característica sin relación con la supervivencia"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "El pelaje blanco coincide con el color de la nieve en su hábitat." },
            { t: "plantea", label: "Plantea", text: "Una adaptación es una característica que aumenta las posibilidades de supervivencia en un ambiente específico." },
            { t: "resuelve", label: "Desarrolla", text: "El camuflaje ayuda al animal a esconderse de depredadores o presas." },
            { t: "resultado", label: "Resultado", text: "Es una adaptación (camuflaje) para sobrevivir en su ambiente." }
          ],
          quick: ["Camuflaje, migración, hibernación = ejemplos clásicos de adaptaciones biológicas favorecidas por selección natural."]
        },
        {
          title: "Nutrición: macronutrientes",
          q: "¿Cuál de los siguientes es un MACRONUTRIENTE (necesario en grandes cantidades) para el cuerpo humano?",
          options: ["Vitamina C", "Hierro", "Carbohidratos", "Yodo"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Los nutrientes se dividen en macronutrientes (necesarios en gran cantidad) y micronutrientes (en pequeñas cantidades)." },
            { t: "plantea", label: "Plantea", text: "Carbohidratos, proteínas y grasas son macronutrientes; vitaminas y minerales son micronutrientes." },
            { t: "resuelve", label: "Desarrolla", text: "De las opciones, solo los carbohidratos corresponden a un macronutriente." },
            { t: "resultado", label: "Resultado", text: "Carbohidratos." }
          ],
          quick: ["Macronutrientes = carbohidratos, proteínas, grasas (mucha cantidad). Micronutrientes = vitaminas y minerales (poca cantidad)."]
        },
        {
          title: "Virus vs. células (conceptual)",
          q: "¿Por qué los virus NO se consideran organismos vivos según la mayoría de biólogos?",
          options: ["Porque son demasiado pequeños para verse", "Porque no pueden reproducirse por sí solos sin una célula huésped", "Porque no contienen ningún material genético", "Porque no pueden causar enfermedades"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Los virus son estructuras compuestas de material genético (ADN o ARN) y una cápsula proteica." },
            { t: "plantea", label: "Plantea", text: "Un criterio clave de vida es la capacidad de reproducirse de forma autónoma." },
            { t: "resuelve", label: "Desarrolla", text: "Los virus necesitan invadir una célula huésped y usar su maquinaria para replicarse; no pueden hacerlo solos." },
            { t: "resultado", label: "Resultado", text: "Porque no pueden reproducirse por sí solos, sin una célula huésped." }
          ],
          quick: ["Virus = no tienen metabolismo propio ni pueden reproducirse solos — por eso su estatus de \"ser vivo\" es debatido."]
        },
        {
          title: "Homeostasis (conceptual)",
          q: "¿Qué se entiende por \"homeostasis\" en un organismo?",
          options: ["El crecimiento acelerado de un organismo", "La capacidad de mantener un equilibrio interno estable pese a los cambios externos", "La reproducción sexual", "La extinción de una especie"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Concepto fisiológico fundamental de los seres vivos." },
            { t: "plantea", label: "Plantea", text: "Se refiere a mecanismos internos de autorregulación (temperatura corporal, pH, glucosa, etc.)." },
            { t: "resuelve", label: "Desarrolla", text: "El cuerpo ajusta constantemente sus procesos internos para mantenerse estable frente a cambios del ambiente." },
            { t: "resultado", label: "Resultado", text: "La capacidad de mantener un equilibrio interno estable pese a los cambios externos." }
          ],
          quick: ["Homeostasis = \"equilibrio interno\" — ejemplo clásico: regulación de la temperatura corporal humana (~37°C)."]
        },
        {
          title: "Sistema excretor: función del riñón",
          q: "¿Cuál es la función principal de los riñones en el cuerpo humano?",
          options: ["Producir glóbulos rojos", "Filtrar la sangre y eliminar desechos en forma de orina", "Digerir las grasas", "Producir hormonas del crecimiento"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Los riñones forman parte del sistema excretor/urinario." },
            { t: "plantea", label: "Plantea", text: "Su función es depurar la sangre de sustancias de desecho y exceso de agua." },
            { t: "resuelve", label: "Desarrolla", text: "Estos desechos se eliminan del cuerpo en forma de orina." },
            { t: "resultado", label: "Resultado", text: "Filtrar la sangre y eliminar desechos en forma de orina." }
          ],
          quick: ["Riñones = filtro de la sangre (producen orina como desecho líquido)."]
        },
        {
          title: "Genética: alelos dominantes y recesivos (definición)",
          q: "En genética, ¿qué significa que un alelo sea \"recesivo\"?",
          options: ["Que se expresa siempre, sin importar el otro alelo", "Que solo se expresa en el fenotipo si está en dosis doble (homocigoto)", "Que desaparece tras una generación", "Que produce siempre una enfermedad"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "En un organismo diploide hay dos alelos por gen (uno de cada padre)." },
            { t: "plantea", label: "Plantea", text: "Un alelo recesivo queda \"oculto\" si está junto a uno dominante." },
            { t: "resuelve", label: "Desarrolla", text: "Solo se manifiesta en el fenotipo cuando el individuo tiene dos copias del alelo recesivo (homocigoto recesivo)." },
            { t: "resultado", label: "Resultado", text: "Que solo se expresa en el fenotipo si está en dosis doble (homocigoto)." }
          ],
          quick: ["Recesivo = necesita las DOS copias (aa) para expresarse. Dominante = con UNA copia ya se expresa (Aa o AA)."]
        },
        {
          title: "Bioma: la selva tropical (Amazonía)",
          q: "¿Cuál es una característica distintiva del bioma de selva tropical (como la Amazonía)?",
          options: ["Muy baja biodiversidad y clima seco", "Alta biodiversidad, temperaturas cálidas y lluvias abundantes todo el año", "Ausencia total de vegetación", "Temperaturas bajo cero constantes"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "La selva tropical es uno de los biomas con mayor riqueza biológica del planeta." },
            { t: "plantea", label: "Plantea", text: "Se caracteriza por condiciones cálidas y húmedas constantes durante todo el año." },
            { t: "resuelve", label: "Desarrolla", text: "Estas condiciones favorecen una enorme diversidad de especies vegetales y animales." },
            { t: "resultado", label: "Resultado", text: "Alta biodiversidad, temperaturas cálidas y lluvias abundantes todo el año." }
          ],
          quick: ["Selva tropical = máxima biodiversidad del planeta + calor y humedad constantes (opuesto al desierto)."]
        },
        {
          title: "Vacunas (concepto inmunológico)",
          q: "¿Cómo funcionan las vacunas para proteger contra enfermedades?",
          options: ["Curan la enfermedad una vez que ya se tiene", "Estimulan al sistema inmune a generar defensas (anticuerpos) antes de una infección real", "Eliminan directamente al patógeno sin participación del cuerpo", "Aumentan la temperatura corporal permanentemente"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Una vacuna contiene una versión debilitada, inactivada o parte de un patógeno." },
            { t: "plantea", label: "Plantea", text: "Al introducirla, el sistema inmune la reconoce como una amenaza y genera una respuesta defensiva." },
            { t: "resuelve", label: "Desarrolla", text: "Esto entrena al cuerpo para reaccionar más rápido y eficazmente si se encuentra con el patógeno real en el futuro." },
            { t: "resultado", label: "Resultado", text: "Estimulan al sistema inmune a generar defensas (anticuerpos) antes de una infección real." }
          ],
          quick: ["Vacuna = \"entrenamiento\" preventivo del sistema inmune, no una cura para una enfermedad ya presente."]
        },
        {
          title: "Nutrición autótrofa vs. heterótrofa",
          q: "¿Cuál es la diferencia principal entre nutrición autótrofa y heterótrofa?",
          options: ["Los autótrofos producen su propio alimento; los heterótrofos deben consumir otros organismos", "Los heterótrofos hacen fotosíntesis y los autótrofos no", "No existe ninguna diferencia real entre ambos", "Los autótrofos solo existen en el mar"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Clasificación de los seres vivos según cómo obtienen su energía/alimento." },
            { t: "plantea", label: "Plantea", text: "Los autótrofos (plantas, algas) sintetizan su propio alimento a partir de materia inorgánica y energía (luz)." },
            { t: "resuelve", label: "Desarrolla", text: "Los heterótrofos (animales, hongos) no pueden hacerlo y dependen de consumir otros organismos." },
            { t: "resultado", label: "Resultado", text: "Los autótrofos producen su propio alimento; los heterótrofos deben consumir otros organismos." }
          ],
          quick: ["Autótrofo = se auto-alimenta (plantas, vía fotosíntesis). Heterótrofo = depende de otros (animales, hongos)."]
        },
        {
          title: "Sistema linfático (función básica)",
          q: "¿Cuál es una función principal del sistema linfático?",
          options: ["Producir bilis para la digestión", "Ayudar en la defensa inmunológica y drenar el exceso de líquido de los tejidos", "Bombear sangre por todo el cuerpo", "Producir insulina"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "El sistema linfático incluye ganglios linfáticos, vasos linfáticos y órganos como el bazo." },
            { t: "plantea", label: "Plantea", text: "Trabaja en conjunto con el sistema inmunológico y el circulatorio." },
            { t: "resuelve", label: "Desarrolla", text: "Transporta linfa, ayuda a combatir infecciones (a través de los linfocitos) y recoge líquido sobrante de los tejidos." },
            { t: "resultado", label: "Resultado", text: "Ayudar en la defensa inmunológica y drenar el exceso de líquido de los tejidos." }
          ],
          quick: ["Sistema linfático = defensa (linfocitos) + drenaje de líquidos — complementa al circulatorio, no lo reemplaza."]
        }
      ]
    },

    // ======================= CIENCIAS SOCIALES =======================
    {
      key: "sociales", title: "Ciencias Sociales", color: "#132a44",
      description: "Historia universal, historia del Ecuador, cívica, geografía y organización del Estado.",
      problems: [
        {
          title: "Causas económicas de la Revolución Francesa",
          q: "¿Cuál fue una de las principales causas económicas de la Revolución Francesa (1789)?",
          options: ["La abundancia de alimentos en Francia", "La crisis fiscal del Estado y la desigualdad en el pago de impuestos", "La expansión colonial exitosa de Francia", "El auge industrial sostenido"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Francia, finales del s. XVIII, dividida en tres estamentos (clero, nobleza, Tercer Estado)." },
            { t: "plantea", label: "Plantea", text: "El Tercer Estado (pueblo llano y burguesía) pagaba la mayoría de los impuestos; nobleza y clero tenían privilegios fiscales." },
            { t: "resuelve", label: "Desarrolla", text: "Esta desigualdad, sumada al derroche de la corte y las guerras costosas, provocó una crisis financiera profunda del Estado." },
            { t: "resultado", label: "Resultado", text: "La crisis fiscal y la desigualdad en el pago de impuestos." }
          ],
          quick: ["Palabras clave del examen: \"estamentos\", \"privilegios fiscales\", \"Tercer Estado\" → apuntan a desigualdad económica como causa."]
        },
        {
          title: "Guerra Fría: enfrentamiento indirecto",
          q: "¿Quiénes se enfrentaron indirectamente, a través de terceros países, durante la Guerra Fría (1947–1991)?",
          options: ["Ucrania y Rusia", "Inglaterra y Alemania", "Estados Unidos y la URSS", "China y Japón"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Período posterior a la Segunda Guerra Mundial: rivalidad ideológica capitalismo vs. comunismo." },
            { t: "plantea", label: "Plantea", text: "Ninguna de las dos superpotencias se enfrentó militarmente de forma directa entre sí." },
            { t: "resuelve", label: "Desarrolla", text: "En su lugar, apoyaron bandos opuestos en conflictos de terceros países (guerras \"proxy\": Corea, Vietnam, etc.)." },
            { t: "resultado", label: "Resultado", text: "Estados Unidos y la URSS." }
          ],
          quick: ["\"Guerra Fría\" = EE. UU. vs URSS, casi siempre la respuesta directa sin necesidad de más análisis."]
        },
        {
          title: "División territorial del Ecuador",
          q: "¿Qué división política y administrativa constituye la unidad territorial MÁS PEQUEÑA en la organización del Estado ecuatoriano?",
          options: ["La provincia", "El cantón", "La parroquia", "La región"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "Organización territorial del Ecuador según la Constitución." },
            { t: "plantea", label: "Plantea", text: "Jerarquía de mayor a menor: Regiones → Provincias → Cantones → Parroquias." },
            { t: "resuelve", label: "Desarrolla", text: "La última categoría de esta jerarquía, la más pequeña, es la parroquia." },
            { t: "resultado", label: "Resultado", text: "La parroquia." }
          ],
          quick: ["Memoriza el orden de mayor a menor: Región > Provincia > Cantón > Parroquia."]
        },
        {
          title: "Independencia de Quito",
          q: "¿Qué batalla selló la independencia de Quito, el 24 de mayo de 1822?",
          options: ["Batalla de Ayacucho", "Batalla de Pichincha", "Batalla de Boyacá", "Batalla de Carabobo"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Año: 1822. Territorio: Real Audiencia de Quito." },
            { t: "plantea", label: "Plantea", text: "Cada batalla independentista está asociada a un territorio específico de Sudamérica." },
            { t: "resuelve", label: "Desarrolla", text: "La Batalla de Pichincha se libró en las faldas del volcán del mismo nombre, cerca de Quito." },
            { t: "resultado", label: "Resultado", text: "Batalla de Pichincha." }
          ],
          quick: ["Asocia cada batalla a su país: Pichincha→Ecuador, Ayacucho→Perú, Boyacá→Colombia, Carabobo→Venezuela."]
        },
        {
          title: "Constitución 2008: Estado plurinacional",
          q: "La Constitución del Ecuador de 2008 reconoce al país como un Estado:",
          options: ["Unitario y monocultural", "Intercultural y plurinacional", "Federal y confesional", "Centralista y homogéneo"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Constitución de la República del Ecuador, aprobada en 2008 (Montecristi)." },
            { t: "plantea", label: "Plantea", text: "El texto constitucional reconoce explícitamente la diversidad de pueblos y nacionalidades del país." },
            { t: "resuelve", label: "Desarrolla", text: "Se define a Ecuador como un Estado constitucional de derechos, intercultural y plurinacional." },
            { t: "resultado", label: "Resultado", text: "Intercultural y plurinacional." }
          ],
          quick: ["Palabra clave 2008: \"plurinacional\" — asócialo siempre a esa Constitución."]
        },
        {
          title: "Sistema laico del Estado",
          q: "¿Qué caracteriza a un Estado laico?",
          options: ["El Estado impone una religión oficial", "El Estado es independiente de cualquier religión y garantiza la libertad de culto", "El Estado prohíbe toda práctica religiosa", "El Estado es gobernado por líderes religiosos"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Concepto de laicidad estatal." },
            { t: "plantea", label: "Plantea", text: "Un Estado laico no se identifica con ninguna religión en particular." },
            { t: "resuelve", label: "Desarrolla", text: "Se mantiene neutral, sin imponer ni prohibir religión alguna, permitiendo la libertad de culto de sus ciudadanos." },
            { t: "resultado", label: "Resultado", text: "Es independiente de cualquier religión y garantiza la libertad de culto." }
          ],
          quick: ["Laico = neutralidad religiosa del Estado, no ausencia de religión en la sociedad."]
        },
        {
          title: "División de poderes",
          q: "¿Qué se entiende por \"división de poderes\" en un Estado democrático?",
          options: ["Que un solo poder controla todas las funciones del Estado", "La separación del poder en funciones Ejecutiva, Legislativa y Judicial, independientes entre sí", "La repartición del territorio entre distintos gobiernos", "La alternancia obligatoria de partidos políticos"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Concepto clásico de la teoría política (Montesquieu)." },
            { t: "plantea", label: "Plantea", text: "El objetivo es evitar la concentración excesiva de poder en un solo órgano." },
            { t: "resuelve", label: "Desarrolla", text: "Se distribuye el poder en distintas funciones que se controlan mutuamente (frenos y contrapesos)." },
            { t: "resultado", label: "Resultado", text: "Separación del poder en funciones Ejecutiva, Legislativa y Judicial, independientes entre sí." }
          ],
          quick: ["Palabra clave: \"frenos y contrapesos\" (checks and balances) — evita que un solo poder domine al resto."]
        },
        {
          title: "Deberes ciudadanos",
          q: "¿Qué deber ciudadano se relaciona con el respeto a las leyes y decisiones de las autoridades legítimas?",
          options: ["Acatar y cumplir la Constitución y la ley", "Emigrar si no se está de acuerdo con una ley", "Ignorar las decisiones judiciales que no convienen", "Formar un partido político propio obligatoriamente"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "La Constitución establece derechos Y deberes de los ciudadanos." },
            { t: "plantea", label: "Plantea", text: "Entre los deberes fundamentales está el respeto al ordenamiento jurídico vigente." },
            { t: "resuelve", label: "Desarrolla", text: "Esto incluye cumplir la Constitución, las leyes y las decisiones legítimas de las autoridades." },
            { t: "resultado", label: "Resultado", text: "Acatar y cumplir la Constitución y la ley." }
          ],
          quick: ["Distingue siempre DERECHOS (lo que el Estado te garantiza) de DEBERES (lo que tú debes cumplir como ciudadano)."]
        },
        {
          title: "Causas de la independencia latinoamericana",
          q: "¿Qué proceso histórico impulsó directamente la independencia de la mayoría de países latinoamericanos a inicios del s. XIX?",
          options: ["Las Guerras Napoleónicas y la crisis de la monarquía española", "La Revolución Industrial", "La Guerra Fría", "El Concilio de Trento"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Contexto: invasión napoleónica a España (1808) y captura del rey Fernando VII." },
            { t: "plantea", label: "Plantea", text: "Al quedar sin rey legítimo, América debía decidir a quién obedecer, generando un vacío de poder." },
            { t: "resuelve", label: "Desarrolla", text: "Esto motivó la formación de juntas de gobierno americanas, que luego iniciaron los procesos independentistas." },
            { t: "resultado", label: "Resultado", text: "Las Guerras Napoleónicas y la crisis de la monarquía española." }
          ],
          quick: ["Cadena causal clave: Napoleón invade España → cae el rey → juntas de gobierno en América → independencia."]
        },
        {
          title: "Migración: concepto",
          q: "¿A qué fenómeno social se refiere el concepto de \"migración\"?",
          options: ["El desplazamiento de personas de un lugar a otro por diversas causas (económicas, políticas, etc.)", "El crecimiento natural de la población", "La distribución de recursos naturales en un territorio", "El cambio climático global"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Concepto demográfico y social clave en geografía humana." },
            { t: "plantea", label: "Plantea", text: "Se refiere al MOVIMIENTO de personas, no al crecimiento poblacional ni a recursos naturales." },
            { t: "resuelve", label: "Desarrolla", text: "Puede ser interna (dentro de un país) o internacional, motivada por razones económicas, políticas, sociales o ambientales." },
            { t: "resultado", label: "Resultado", text: "El desplazamiento de personas de un lugar a otro por diversas causas." }
          ],
          quick: ["Migración = movimiento de PERSONAS (no confundir con crecimiento poblacional natural)."]
        },
        {
          title: "Modo de producción feudal",
          q: "¿Qué caracteriza al modo de producción feudal (Edad Media)?",
          options: ["El uso exclusivo de máquinas industriales", "La relación entre señores feudales y siervos ligados a la tierra", "La propiedad colectiva de todos los medios de producción", "La ausencia total de jerarquías sociales"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Sistema económico-social predominante en la Europa medieval." },
            { t: "plantea", label: "Plantea", text: "Se basa en relaciones de dependencia entre distintos grupos sociales, ligados a la tierra." },
            { t: "resuelve", label: "Desarrolla", text: "Los siervos trabajaban la tierra del señor feudal, a cambio de protección y el derecho a habitarla." },
            { t: "resultado", label: "Resultado", text: "La relación entre señores feudales y siervos ligados a la tierra." }
          ],
          quick: ["Feudalismo = tierra + jerarquía (señor-siervo) + protección a cambio de trabajo. Muy distinto del capitalismo industrial."]
        },
        {
          title: "Función de la Constitución",
          q: "¿Cuál es una función principal de la Constitución de un país?",
          options: ["Establecer los precios de los productos", "Ser la norma suprema que organiza el Estado y garantiza los derechos de los ciudadanos", "Definir los horarios laborales de las empresas privadas", "Regular exclusivamente el comercio internacional"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "La Constitución es la ley fundamental (o \"carta magna\") de un país." },
            { t: "plantea", label: "Plantea", text: "Está por encima de todas las demás leyes (principio de supremacía constitucional)." },
            { t: "resuelve", label: "Desarrolla", text: "Organiza la estructura del Estado (sus poderes/funciones) y reconoce los derechos fundamentales de las personas." },
            { t: "resultado", label: "Resultado", text: "Ser la norma suprema que organiza el Estado y garantiza los derechos de los ciudadanos." }
          ],
          quick: ["Constitución = ley MÁS ALTA de un país; ninguna otra ley puede contradecirla."]
        },
        {
          title: "Interculturalidad en Ecuador",
          q: "¿Qué se entiende por interculturalidad en el contexto ecuatoriano?",
          options: ["La imposición de una cultura sobre las demás", "El reconocimiento y la interacción respetuosa entre las diversas culturas y nacionalidades del país", "La eliminación de las lenguas indígenas", "La separación territorial de cada etnia"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Concepto reconocido en la Constitución de 2008, junto a la plurinacionalidad." },
            { t: "plantea", label: "Plantea", text: "Se trata de un principio de convivencia entre culturas distintas, no de imposición ni separación." },
            { t: "resuelve", label: "Desarrolla", text: "Promueve el diálogo, el respeto mutuo y el intercambio equitativo entre las diferentes culturas y pueblos del territorio." },
            { t: "resultado", label: "Resultado", text: "El reconocimiento y la interacción respetuosa entre las diversas culturas y nacionalidades del país." }
          ],
          quick: ["Interculturalidad = DIÁLOGO entre culturas (no separación ni imposición). Descarta siempre opciones excluyentes."]
        },
        {
          title: "Consecuencias de la Primera Guerra Mundial",
          q: "¿Cuál fue una consecuencia directa de la Primera Guerra Mundial (1914-1918) en Europa?",
          options: ["La consolidación del Imperio Austrohúngaro", "La caída de varios imperios (Otomano, Austrohúngaro, Ruso, Alemán) y el redibujo de fronteras", "El fortalecimiento inmediato de la Liga de las Naciones", "La ausencia de crisis económicas posteriores"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "La Primera Guerra Mundial involucró a los grandes imperios europeos de la época." },
            { t: "plantea", label: "Plantea", text: "El desgaste bélico y las derrotas debilitaron las estructuras imperiales tradicionales." },
            { t: "resuelve", label: "Desarrolla", text: "Los imperios Otomano, Austrohúngaro, Ruso y Alemán colapsaron, dando paso a nuevos Estados-nación y fronteras." },
            { t: "resultado", label: "Resultado", text: "La caída de varios imperios y el redibujo de fronteras en Europa." }
          ],
          quick: ["Después de la Primera Guerra Mundial: colapsan 4 grandes imperios (Otomano, Austrohúngaro, Ruso, Alemán) — mapa de Europa cambia radicalmente."]
        },
        {
          title: "Funciones del Estado según la Constitución de 2008",
          q: "Según la Constitución de 2008, ¿cuántas Funciones del Estado tiene el Ecuador?",
          options: ["Tres: Ejecutiva, Legislativa y Judicial", "Cuatro: las tres clásicas más la Electoral", "Cinco: Ejecutiva, Legislativa, Judicial, Electoral, y de Transparencia y Control Social", "Dos: Ejecutiva y Legislativa"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "La división de poderes clásica (Montesquieu) tiene 3 funciones." },
            { t: "plantea", label: "Plantea", text: "La Constitución ecuatoriana de 2008 amplió ese esquema tradicional." },
            { t: "resuelve", label: "Desarrolla", text: "Se añadieron la Función Electoral y la Función de Transparencia y Control Social a las tres clásicas." },
            { t: "resultado", label: "Resultado", text: "Cinco funciones del Estado en total." }
          ],
          quick: ["Ecuador (2008) = 5 funciones, no 3: Ejecutiva, Legislativa, Judicial, Electoral, Transparencia y Control Social."]
        },
        {
          title: "Regiones naturales del Ecuador",
          q: "¿Cuáles son las regiones naturales continentales del Ecuador?",
          options: ["Costa, Sierra y Amazonía", "Norte, Centro y Sur", "Andina, Pacífica y Atlántica", "Tropical, Templada y Fría"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Geografía física del Ecuador continental (sin contar la región Insular/Galápagos)." },
            { t: "plantea", label: "Plantea", text: "Cada región tiene características geográficas y climáticas distintas, determinadas por la Cordillera de los Andes." },
            { t: "resuelve", label: "Desarrolla", text: "Al oeste de los Andes está la Costa; en medio, la Sierra (zona andina); al este, la Amazonía." },
            { t: "resultado", label: "Resultado", text: "Costa, Sierra y Amazonía (más la región Insular si se incluye Galápagos)." }
          ],
          quick: ["Ecuador continental = 3 regiones naturales: Costa, Sierra, Amazonía. + Insular (Galápagos) si se cuenta aparte."]
        },
        {
          title: "El Renacimiento",
          q: "¿Cuál es una característica principal del Renacimiento (s. XIV-XVI)?",
          options: ["El rechazo total al conocimiento clásico grecorromano", "El resurgimiento del interés por el arte, la ciencia y el pensamiento clásico, centrado en el ser humano", "El predominio absoluto de la religión sobre el arte", "La ausencia de avances científicos"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Movimiento cultural e intelectual surgido en Italia, extendido por Europa." },
            { t: "plantea", label: "Plantea", text: "Se caracteriza por el \"renacer\" del interés en la cultura grecorromana clásica." },
            { t: "resuelve", label: "Desarrolla", text: "Puso al ser humano (humanismo) en el centro del pensamiento, el arte y la ciencia, en lugar de solo lo religioso." },
            { t: "resultado", label: "Resultado", text: "El resurgimiento del interés por el arte, la ciencia y el pensamiento clásico, centrado en el ser humano." }
          ],
          quick: ["Palabra clave: \"humanismo\" — el ser humano (no solo Dios) al centro del pensamiento renacentista."]
        },
        {
          title: "La Ilustración",
          q: "¿Qué ideas centrales defendía el movimiento filosófico de la Ilustración (s. XVIII)?",
          options: ["La superioridad absoluta de la monarquía sobre la razón", "El uso de la razón, la ciencia y la crítica frente al dogmatismo y el absolutismo", "El regreso a las estructuras feudales medievales", "El rechazo total a cualquier forma de gobierno"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Movimiento intelectual europeo del s. XVIII (Voltaire, Rousseau, Montesquieu, entre otros)." },
            { t: "plantea", label: "Plantea", text: "Se le llama \"Siglo de las Luces\" por defender la razón como guía frente a la tradición y el dogma." },
            { t: "resuelve", label: "Desarrolla", text: "Cuestionó el poder absoluto de los monarcas y sentó bases ideológicas para revoluciones como la francesa." },
            { t: "resultado", label: "Resultado", text: "El uso de la razón, la ciencia y la crítica frente al dogmatismo y el absolutismo." }
          ],
          quick: ["Ilustración = \"Siglo de las Luces\" = razón + ciencia, y es la base ideológica de la Revolución Francesa."]
        },
        {
          title: "Consecuencias de la Revolución Industrial",
          q: "¿Cuál fue una consecuencia social directa de la Revolución Industrial (s. XVIII-XIX)?",
          options: ["La desaparición completa de las ciudades", "El surgimiento de la clase obrera y el crecimiento de las ciudades industriales", "El regreso a una economía totalmente agrícola", "La eliminación de toda desigualdad social"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Proceso de mecanización de la producción, iniciado en Inglaterra." },
            { t: "plantea", label: "Plantea", text: "La producción en fábricas atrajo a gran cantidad de trabajadores del campo a las ciudades." },
            { t: "resuelve", label: "Desarrolla", text: "Esto generó una nueva clase social (el proletariado) y un crecimiento acelerado de las ciudades industriales." },
            { t: "resultado", label: "Resultado", text: "El surgimiento de la clase obrera y el crecimiento de las ciudades industriales." }
          ],
          quick: ["Revolución Industrial → migración campo-ciudad + nueva clase obrera (proletariado)."]
        },
        {
          title: "Globalización (concepto)",
          q: "¿Qué caracteriza al proceso de globalización?",
          options: ["El aislamiento económico y cultural entre países", "La creciente interconexión económica, cultural y tecnológica entre países del mundo", "La eliminación total del comercio internacional", "La desaparición de las diferencias culturales"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Fenómeno acelerado especialmente desde fines del s. XX." },
            { t: "plantea", label: "Plantea", text: "Implica mayor interdependencia entre países en distintos ámbitos." },
            { t: "resuelve", label: "Desarrolla", text: "Esto incluye comercio internacional, flujo de información, tecnología y migración." },
            { t: "resultado", label: "Resultado", text: "La creciente interconexión económica, cultural y tecnológica entre países del mundo." }
          ],
          quick: ["Globalización = INTERCONEXIÓN, no aislamiento — descarta siempre opciones de \"aislamiento\" o \"eliminación de contacto\"."]
        },
        {
          title: "La encomienda colonial",
          q: "¿Qué fue la \"encomienda\" durante la colonización española en América?",
          options: ["Un impuesto pagado por los colonizadores a la Corona", "Un sistema que otorgaba a un español el derecho a la mano de obra indígena a cambio de \"protección\" y evangelización", "Una institución educativa para indígenas", "Un tipo de moneda colonial"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Institución colonial establecida por la Corona española en América." },
            { t: "plantea", label: "Plantea", text: "Un encomendero recibía un grupo de indígenas asignados." },
            { t: "resuelve", label: "Desarrolla", text: "A cambio de una supuesta \"protección\" y catequización, el encomendero se beneficiaba de su trabajo forzado." },
            { t: "resultado", label: "Resultado", text: "Un sistema que otorgaba a un español el derecho a la mano de obra indígena a cambio de \"protección\" y evangelización." }
          ],
          quick: ["Encomienda = trabajo indígena forzado a cambio de \"protección\"/evangelización — en la práctica, explotación."]
        },
        {
          title: "Causas de la Segunda Guerra Mundial",
          q: "¿Cuál fue una de las principales causas de la Segunda Guerra Mundial?",
          options: ["El auge del comercio internacional pacífico", "El ascenso de regímenes totalitarios (nazismo, fascismo) y el resentimiento por el Tratado de Versalles", "La firma exitosa de tratados de desarme", "La estabilidad económica mundial de los años 1930"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Contexto: crisis económica de 1929 y condiciones impuestas a Alemania tras la Primera Guerra Mundial." },
            { t: "plantea", label: "Plantea", text: "El Tratado de Versalles impuso duras condiciones a Alemania, generando resentimiento nacionalista." },
            { t: "resuelve", label: "Desarrolla", text: "Esto, sumado a la crisis económica, favoreció el ascenso de regímenes totalitarios como el nazismo y el fascismo." },
            { t: "resultado", label: "Resultado", text: "El ascenso de regímenes totalitarios y el resentimiento por el Tratado de Versalles." }
          ],
          quick: ["Cadena causal: Versalles (condiciones duras) → resentimiento → ascenso de totalitarismos → Segunda Guerra Mundial."]
        },
        {
          title: "Sufragio femenino en Ecuador",
          q: "¿En qué año Ecuador se convirtió en uno de los primeros países de Sudamérica en reconocer el voto de la mujer?",
          options: ["1929", "1945", "1960", "1979"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Matilde Hidalgo fue la primera mujer en votar en Ecuador." },
            { t: "plantea", label: "Plantea", text: "Ecuador destacó regionalmente por ser pionero en este derecho." },
            { t: "resuelve", label: "Desarrolla", text: "El reconocimiento del sufragio femenino se dio en 1929, antes que en muchos otros países de la región." },
            { t: "resultado", label: "Resultado", text: "1929." }
          ],
          quick: ["Dato histórico clave: Ecuador (1929) fue pionero en Sudamérica en el voto femenino — Matilde Hidalgo, primera votante."]
        },
        {
          title: "Desarrollo sostenible (concepto)",
          q: "¿Qué se entiende por \"desarrollo sostenible\"?",
          options: ["El crecimiento económico sin ninguna restricción ambiental", "Satisfacer las necesidades del presente sin comprometer la capacidad de las generaciones futuras de satisfacer las suyas", "El desarrollo exclusivo de la industria pesada", "La explotación acelerada de recursos naturales no renovables"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Concepto popularizado por el Informe Brundtland (1987, ONU)." },
            { t: "plantea", label: "Plantea", text: "Busca equilibrar tres dimensiones: económica, social y ambiental." },
            { t: "resuelve", label: "Desarrolla", text: "El crecimiento actual no debe agotar los recursos ni dañar el ambiente al punto de perjudicar a futuras generaciones." },
            { t: "resultado", label: "Resultado", text: "Satisfacer las necesidades del presente sin comprometer la capacidad de las generaciones futuras de satisfacer las suyas." }
          ],
          quick: ["Desarrollo sostenible = equilibrio entre presente y futuro (económico + social + ambiental)."]
        },
        {
          title: "Cinco Funciones del Estado (repaso)",
          q: "Según la Constitución de 2008, ¿cuántas Funciones del Estado tiene el Ecuador?",
          options: ["Tres: Ejecutiva, Legislativa y Judicial", "Cuatro: las tres clásicas más la Electoral", "Cinco: Ejecutiva, Legislativa, Judicial, Electoral, y de Transparencia y Control Social", "Dos: Ejecutiva y Legislativa"], correct: 2,
          full: [
            { t: "dato", label: "Datos", text: "La división de poderes clásica (Montesquieu) tiene 3 funciones." },
            { t: "plantea", label: "Plantea", text: "La Constitución ecuatoriana de 2008 amplió ese esquema tradicional." },
            { t: "resuelve", label: "Desarrolla", text: "Se añadieron la Función Electoral y la Función de Transparencia y Control Social a las tres clásicas." },
            { t: "resultado", label: "Resultado", text: "Cinco funciones del Estado en total." }
          ],
          quick: ["Ecuador (2008) = 5 funciones, no 3: Ejecutiva, Legislativa, Judicial, Electoral, Transparencia y Control Social."]
        },
        {
          title: "Independencias latinoamericanas: causa detonante",
          q: "¿Qué proceso histórico impulsó directamente la independencia de la mayoría de países latinoamericanos a inicios del s. XIX?",
          options: ["Las Guerras Napoleónicas y la crisis de la monarquía española", "La Revolución Industrial", "La Guerra Fría", "El Concilio de Trento"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Contexto: invasión napoleónica a España (1808) y captura del rey Fernando VII." },
            { t: "plantea", label: "Plantea", text: "Al quedar sin rey legítimo, América debía decidir a quién obedecer, generando un vacío de poder." },
            { t: "resuelve", label: "Desarrolla", text: "Esto motivó la formación de juntas de gobierno americanas, que luego iniciaron los procesos independentistas." },
            { t: "resultado", label: "Resultado", text: "Las Guerras Napoleónicas y la crisis de la monarquía española." }
          ],
          quick: ["Cadena causal clave: Napoleón invade España → cae el rey → juntas de gobierno en América → independencia."]
        },
        {
          title: "Migración (concepto)",
          q: "¿A qué fenómeno social se refiere el concepto de \"migración\"?",
          options: ["El desplazamiento de personas de un lugar a otro por diversas causas (económicas, políticas, etc.)", "El crecimiento natural de la población", "La distribución de recursos naturales en un territorio", "El cambio climático global"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Concepto demográfico y social clave en geografía humana." },
            { t: "plantea", label: "Plantea", text: "Se refiere al MOVIMIENTO de personas, no al crecimiento poblacional ni a recursos naturales." },
            { t: "resuelve", label: "Desarrolla", text: "Puede ser interna (dentro de un país) o internacional, motivada por razones económicas, políticas, sociales o ambientales." },
            { t: "resultado", label: "Resultado", text: "El desplazamiento de personas de un lugar a otro por diversas causas." }
          ],
          quick: ["Migración = movimiento de PERSONAS (no confundir con crecimiento poblacional natural)."]
        },
        {
          title: "Modo de producción feudal",
          q: "¿Qué caracteriza al modo de producción feudal (Edad Media)?",
          options: ["El uso exclusivo de máquinas industriales", "La relación entre señores feudales y siervos ligados a la tierra", "La propiedad colectiva de todos los medios de producción", "La ausencia total de jerarquías sociales"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Sistema económico-social predominante en la Europa medieval." },
            { t: "plantea", label: "Plantea", text: "Se basa en relaciones de dependencia entre distintos grupos sociales, ligados a la tierra." },
            { t: "resuelve", label: "Desarrolla", text: "Los siervos trabajaban la tierra del señor feudal, a cambio de protección y el derecho a habitarla." },
            { t: "resultado", label: "Resultado", text: "La relación entre señores feudales y siervos ligados a la tierra." }
          ],
          quick: ["Feudalismo = tierra + jerarquía (señor-siervo) + protección a cambio de trabajo. Muy distinto del capitalismo industrial."]
        },
        {
          title: "Función de la Constitución (repaso)",
          q: "¿Cuál es una función principal de la Constitución de un país?",
          options: ["Establecer los precios de los productos", "Ser la norma suprema que organiza el Estado y garantiza los derechos de los ciudadanos", "Definir los horarios laborales de las empresas privadas", "Regular exclusivamente el comercio internacional"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "La Constitución es la ley fundamental (o \"carta magna\") de un país." },
            { t: "plantea", label: "Plantea", text: "Está por encima de todas las demás leyes (principio de supremacía constitucional)." },
            { t: "resuelve", label: "Desarrolla", text: "Organiza la estructura del Estado (sus poderes/funciones) y reconoce los derechos fundamentales de las personas." },
            { t: "resultado", label: "Resultado", text: "Ser la norma suprema que organiza el Estado y garantiza los derechos de los ciudadanos." }
          ],
          quick: ["Constitución = ley MÁS ALTA de un país; ninguna otra ley puede contradecirla."]
        },
        {
          title: "Interculturalidad ecuatoriana (repaso)",
          q: "¿Qué se entiende por interculturalidad en el contexto ecuatoriano?",
          options: ["La imposición de una cultura sobre las demás", "El reconocimiento y la interacción respetuosa entre las diversas culturas y nacionalidades del país", "La eliminación de las lenguas indígenas", "La separación territorial de cada etnia"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Concepto reconocido en la Constitución de 2008, junto a la plurinacionalidad." },
            { t: "plantea", label: "Plantea", text: "Se trata de un principio de convivencia entre culturas distintas, no de imposición ni separación." },
            { t: "resuelve", label: "Desarrolla", text: "Promueve el diálogo, el respeto mutuo y el intercambio equitativo entre las diferentes culturas y pueblos del territorio." },
            { t: "resultado", label: "Resultado", text: "El reconocimiento y la interacción respetuosa entre las diversas culturas y nacionalidades del país." }
          ],
          quick: ["Interculturalidad = DIÁLOGO entre culturas (no separación ni imposición). Descarta siempre opciones excluyentes."]
        },
        {
          title: "Consecuencias de la Primera Guerra Mundial (repaso)",
          q: "¿Cuál fue una consecuencia directa de la Primera Guerra Mundial (1914-1918) en Europa?",
          options: ["La consolidación del Imperio Austrohúngaro", "La caída de varios imperios (Otomano, Austrohúngaro, Ruso, Alemán) y el redibujo de fronteras", "El fortalecimiento inmediato de la Liga de las Naciones", "La ausencia de crisis económicas posteriores"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "La Primera Guerra Mundial involucró a los grandes imperios europeos de la época." },
            { t: "plantea", label: "Plantea", text: "El desgaste bélico y las derrotas debilitaron las estructuras imperiales tradicionales." },
            { t: "resuelve", label: "Desarrolla", text: "Los imperios Otomano, Austrohúngaro, Ruso y Alemán colapsaron, dando paso a nuevos Estados-nación y fronteras." },
            { t: "resultado", label: "Resultado", text: "La caída de varios imperios y el redibujo de fronteras en Europa." }
          ],
          quick: ["Después de la Primera Guerra Mundial: colapsan 4 grandes imperios (Otomano, Austrohúngaro, Ruso, Alemán) — mapa de Europa cambia radicalmente."]
        },
        {
          title: "Organismos internacionales: la ONU",
          q: "¿Qué organismo internacional fue creado en 1945 para promover la paz y la cooperación entre naciones tras la Segunda Guerra Mundial?",
          options: ["La Liga de las Naciones", "La Organización de las Naciones Unidas (ONU)", "La OTAN", "La Unión Europea"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Contexto: fin de la Segunda Guerra Mundial, fracaso de la Liga de las Naciones en evitar el conflicto." },
            { t: "plantea", label: "Plantea", text: "Se buscó crear un organismo más fuerte para mantener la paz mundial." },
            { t: "resuelve", label: "Desarrolla", text: "La ONU se fundó en 1945, reemplazando a la Liga de las Naciones." },
            { t: "resultado", label: "Resultado", text: "La Organización de las Naciones Unidas (ONU)." }
          ],
          quick: ["ONU (1945) reemplaza a la fallida Liga de las Naciones (creada tras la Primera Guerra Mundial)."]
        },
        {
          title: "Democracia representativa (concepto)",
          q: "¿Qué caracteriza a la democracia representativa?",
          options: ["El pueblo vota directamente cada ley del país", "El pueblo elige representantes que toman decisiones en su nombre", "Un solo líder gobierna sin elecciones", "Las decisiones las toma un consejo de ancianos hereditario"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Sistema político predominante en la mayoría de países modernos, incluido Ecuador." },
            { t: "plantea", label: "Plantea", text: "Se distingue de la democracia directa (donde el pueblo vota cada decisión)." },
            { t: "resuelve", label: "Desarrolla", text: "Los ciudadanos eligen periódicamente representantes (asambleístas, presidente) para que gobiernen en su nombre." },
            { t: "resultado", label: "Resultado", text: "El pueblo elige representantes que toman decisiones en su nombre." }
          ],
          quick: ["Democracia representativa = votas por representantes (no cada ley directamente, como en la democracia directa)."]
        },
        {
          title: "Economía: oferta y demanda (concepto básico)",
          q: "Si la oferta de un producto se mantiene igual pero la demanda aumenta considerablemente, ¿qué suele ocurrir con su precio?",
          options: ["El precio tiende a bajar", "El precio tiende a subir", "El precio no se ve afectado en absoluto", "El producto desaparece del mercado"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Ley básica de oferta y demanda en economía de mercado." },
            { t: "plantea", label: "Plantea", text: "Si más personas quieren comprar el mismo producto (misma cantidad disponible), compiten por adquirirlo." },
            { t: "resuelve", label: "Desarrolla", text: "Esta mayor competencia por un bien escaso presiona el precio hacia arriba." },
            { t: "resultado", label: "Resultado", text: "El precio tiende a subir." }
          ],
          quick: ["Más demanda + misma oferta = precio sube. Más oferta + misma demanda = precio baja (ley básica de mercado)."]
        },
        {
          title: "Derechos Humanos: generaciones de derechos",
          q: "Los derechos civiles y políticos (como la libertad de expresión y el voto) pertenecen a la:",
          options: ["Primera generación de derechos humanos", "Segunda generación de derechos humanos", "Tercera generación de derechos humanos", "No pertenecen a ninguna clasificación"], correct: 0,
          full: [
            { t: "dato", label: "Datos", text: "Los derechos humanos se agrupan en generaciones según su naturaleza histórica." },
            { t: "plantea", label: "Plantea", text: "La primera generación corresponde a derechos civiles y políticos (libertad, participación)." },
            { t: "resuelve", label: "Desarrolla", text: "La segunda generación son derechos económicos, sociales y culturales; la tercera, derechos colectivos (medio ambiente, paz)." },
            { t: "resultado", label: "Resultado", text: "Primera generación de derechos humanos." }
          ],
          quick: ["1ª gen = civiles/políticos (libertad, voto). 2ª gen = sociales/económicos (salud, educación). 3ª gen = colectivos (ambiente, paz)."]
        },
        {
          title: "Historia del Ecuador: la Revolución Liberal",
          q: "¿Qué líder encabezó la Revolución Liberal de 1895 en Ecuador?",
          options: ["Gabriel García Moreno", "Eloy Alfaro", "Vicente Rocafuerte", "José María Velasco Ibarra"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Año: 1895. Movimiento que buscaba modernizar el Estado ecuatoriano y separarlo de la fuerte influencia de la Iglesia." },
            { t: "plantea", label: "Plantea", text: "Identifica al líder histórico asociado a este proceso liberal." },
            { t: "resuelve", label: "Desarrolla", text: "Eloy Alfaro lideró esta revolución, impulsando reformas como la separación Iglesia-Estado y el matrimonio civil." },
            { t: "resultado", label: "Resultado", text: "Eloy Alfaro." }
          ],
          quick: ["Revolución Liberal (1895) = Eloy Alfaro. García Moreno fue de tendencia conservadora/católica, opuesta a Alfaro."]
        },
        {
          title: "Geografía: recursos naturales renovables y no renovables",
          q: "¿Cuál de los siguientes es un recurso natural NO RENOVABLE?",
          options: ["Energía solar", "Petróleo", "Viento (energía eólica)", "Agua de lluvia"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Los recursos se clasifican según si se regeneran o no en una escala de tiempo humana." },
            { t: "plantea", label: "Plantea", text: "El petróleo tarda millones de años en formarse geológicamente." },
            { t: "resuelve", label: "Desarrolla", text: "Por eso, una vez consumido, no se puede reemplazar en un tiempo razonable para la humanidad." },
            { t: "resultado", label: "Resultado", text: "Petróleo." }
          ],
          quick: ["No renovables = combustibles fósiles (petróleo, carbón, gas). Renovables = sol, viento, agua (se regeneran naturalmente)."]
        },
        {
          title: "Cívica: requisitos para ser ciudadano elector en Ecuador",
          q: "Según la legislación ecuatoriana, ¿a partir de qué edad el voto es obligatorio para los ciudadanos (con algunas excepciones por edad)?",
          options: ["16 años", "18 años", "21 años", "25 años"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "En Ecuador, el voto es facultativo para jóvenes de 16 y 17 años, y para personas mayores de 65." },
            { t: "plantea", label: "Plantea", text: "Busca la edad en la que el voto pasa a ser obligatorio para la mayoría de la ciudadanía." },
            { t: "resuelve", label: "Desarrolla", text: "A partir de los 18 años, el voto es obligatorio (hasta los 65)." },
            { t: "resultado", label: "Resultado", text: "18 años." }
          ],
          quick: ["Voto facultativo: 16-17 años y mayores de 65. Voto obligatorio: 18-65 años."]
        },
        {
          title: "Colonización española: el mestizaje",
          q: "¿Qué proceso social ocurrió como consecuencia de la unión entre españoles e indígenas durante la Colonia?",
          options: ["La segregación racial absoluta", "El mestizaje, dando origen a una nueva identidad cultural y étnica", "La desaparición total de la población indígena", "La prohibición completa de cualquier contacto entre ambos grupos"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Durante la Colonia, hubo interacción (a menudo forzada) entre españoles, indígenas y, más tarde, población afrodescendiente." },
            { t: "plantea", label: "Plantea", text: "Esto dio lugar a un nuevo grupo social." },
            { t: "resuelve", label: "Desarrolla", text: "El mestizaje se convirtió en la base demográfica de gran parte de la población actual de Latinoamérica." },
            { t: "resultado", label: "Resultado", text: "El mestizaje, dando origen a una nueva identidad cultural y étnica." }
          ],
          quick: ["Mestizaje = fusión biológica y cultural entre españoles e indígenas (y luego afrodescendientes) — base de la identidad latinoamericana actual."]
        },
        {
          title: "Concepto de ciudadanía",
          q: "¿Qué se entiende por \"ciudadanía\" en un Estado democrático?",
          options: ["Ser propietario de bienes inmuebles", "La condición de pertenecer a un Estado, con derechos y deberes reconocidos por la ley", "Tener más de 65 años", "Ser funcionario público"], correct: 1,
          full: [
            { t: "dato", label: "Datos", text: "Concepto jurídico y político fundamental." },
            { t: "plantea", label: "Plantea", text: "La ciudadanía vincula a una persona con un Estado, otorgándole un estatus legal particular." },
            { t: "resuelve", label: "Desarrolla", text: "Este estatus conlleva derechos (votar, participar) y deberes (cumplir leyes, pagar impuestos)." },
            { t: "resultado", label: "Resultado", text: "La condición de pertenecer a un Estado, con derechos y deberes reconocidos por la ley." }
          ],
          quick: ["Ciudadanía = vínculo legal persona-Estado, con derechos Y deberes recíprocos — no depende de la edad ni de la propiedad."]
        }
      ]
    }
  ]
};
