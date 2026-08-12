// Banco unificado — combina el banco curado (full/quick, hecho a mano) con
// los generadores paramétricos (datos nuevos cada vez) en un solo registro
// por tema, y define la composición de cada examen institucional.
(function () {
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // Envuelve un ítem generado/estático (solo {q,options,correct,explain}) al
  // mismo formato {full,quick} que usa el banco curado, para poder mostrarlo
  // con el mismo diseño de solución paso a paso.
  function normalizeGenerated(item) {
    if (item.full && item.quick) return item;
    return {
      q: item.q,
      options: item.options,
      correct: item.correct,
      full: [{ t: "resuelve", label: "Desarrollo", text: item.explain || "" }],
      quick: ["Aplica directamente el mismo procedimiento del desarrollo, sin pasos intermedios, para ganar tiempo el día del examen."]
    };
  }

  var TOPIC_META = {
    numerico: { title: "Razonamiento Numérico", color: "#132a44", description: "Porcentajes, razones, regla de tres simple y compuesta, interés, trabajo conjunto y probabilidad." },
    logico: { title: "Razonamiento Lógico", color: "#132a44", description: "Silogismos, negaciones lógicas, series, edades, orden/posición y verdades/mentiras." },
    verbal: { title: "Razonamiento Verbal", color: "#132a44", description: "Sinónimos, antónimos, analogías, refranes, oraciones incompletas y plan de redacción." },
    matematicas: { title: "Matemáticas", color: "#132a44", description: "Álgebra, inecuaciones, fracciones, progresiones, geometría, sistemas de ecuaciones y estadística." },
    fisica: { title: "Física", color: "#132a44", description: "Cinemática, dinámica (leyes de Newton), trabajo y energía, densidad, electricidad y presión." },
    quimica: { title: "Química", color: "#132a44", description: "Nomenclatura inorgánica, enlaces, tabla periódica, pH y estequiometría básica." },
    biologia: { title: "Biología", color: "#132a44", description: "Célula, genética mendeliana, sistemas del cuerpo humano y ecología." },
    lengua: { title: "Lengua y Literatura", color: "#132a44", description: "Figuras literarias, gramática, vocabulario en contexto, tipos de texto y comprensión lectora." },
    sociales: { title: "Ciencias Sociales", color: "#132a44", description: "Historia universal, historia del Ecuador, cívica, geografía y organización del Estado." },
    abstracto: { title: "Razonamiento Abstracto", color: "#132a44", description: "Matrices gráficas, dominós, analogías de figuras, figuras excluidas, series y conjuntos gráficos." },
    generales: { title: "Conocimientos Generales", color: "#132a44", description: "Geografía, historia, ciencia y naturaleza, arte y mitología, literatura — nacional e internacional." }
  };

  function buildRegistry() {
    var registry = {};
    Object.keys(TOPIC_META).forEach(function (key) {
      registry[key] = { curated: [], generatorKey: null };
    });

    function ingest(bank) {
      if (!bank || !bank.topics) return;
      bank.topics.forEach(function (t) {
        if (!registry[t.key]) return;
        registry[t.key].curated = registry[t.key].curated.concat(t.problems);
      });
    }
    ingest(window.STUDY_BANK);
    ingest(window.STUDY_BANK_CIENCIAS);
    ingest(window.STUDY_BANK_GENERALES);

    // Los temas con generador paramétrico producen datos nuevos cada vez.
    ["numerico", "logico", "verbal", "matematicas"].forEach(function (key) {
      if (window.QUESTION_GENERATORS && window.QUESTION_GENERATORS[key]) {
        registry[key].generatorKey = key;
      }
    });
    return registry;
  }

  var REGISTRY = buildRegistry();

  // Devuelve un pool "fresco": todos los curados + una nueva tanda generada
  // (si existe generador para ese tema), listos para mostrar/mezclar.
  function getFreshPool(topicKey) {
    // Abstracto es 100% generado: figuras SVG nuevas en cada recarga.
    if (topicKey === "abstracto") {
      if (!window.ABSTRACTO_GENERATOR) return [];
      return window.ABSTRACTO_GENERATOR(50).map(function (p) {
        return Object.assign({ topic: "abstracto" }, p);
      });
    }
    var entry = REGISTRY[topicKey];
    if (!entry) return [];
    var curated = entry.curated.map(function (p) { return Object.assign({ topic: topicKey }, p); });
    var generated = [];
    if (entry.generatorKey && window.QUESTION_GENERATORS[entry.generatorKey]) {
      generated = window.QUESTION_GENERATORS[entry.generatorKey](20)
        .map(normalizeGenerated)
        .map(function (p) { return Object.assign({ topic: topicKey }, p); });
    }
    return curated.concat(generated);
  }

  function pickN(pool, n) {
    var shuffled = shuffle(pool);
    var out = [];
    for (var i = 0; i < n; i++) out.push(shuffled[i % shuffled.length]);
    return out;
  }

  // ---------- Composición de cada examen institucional ----------
  var EXAMS = {
    senescyt: {
      id: "senescyt", title: "Senescyt (Transformar)",
      description: "Examen de puro razonamiento — Numérico, Lógico y Verbal — como en la prueba Transformar/Ser Bachiller.",
      totalMinutes: 90,
      topics: ["numerico", "logico", "verbal"],
      composition: [
        { topic: "numerico", count: 30 },
        { topic: "logico", count: 30 },
        { topic: "verbal", count: 30 }
      ]
    },
    unae: {
      id: "unae", title: "UNAE",
      description: "Competencias generales de UNAE: Matemática/Razonamiento y Lengua/Razonamiento Verbal.",
      totalMinutes: 70,
      topics: ["matematicas", "numerico", "logico", "lengua", "verbal"],
      composition: [
        { topic: "matematicas", count: 15 },
        { topic: "numerico", count: 10 },
        { topic: "logico", count: 5 },
        { topic: "lengua", count: 15 },
        { topic: "verbal", count: 15 }
      ]
    },
    ucuenca: {
      id: "ucuenca", title: "Universidad de Cuenca",
      description: "5 campos de conocimiento del examen oficial: Matemáticas, Lengua, C. Sociales, C. Naturales (Física/Química/Biología) y Razonamiento.",
      totalMinutes: 70,
      topics: ["matematicas", "lengua", "sociales", "fisica", "quimica", "biologia", "numerico", "logico", "verbal"],
      composition: [
        { topic: "matematicas", count: 12 },
        { topic: "lengua", count: 12 },
        { topic: "sociales", count: 12 },
        { topic: "fisica", count: 4 },
        { topic: "quimica", count: 4 },
        { topic: "biologia", count: 4 },
        { topic: "numerico", count: 4 },
        { topic: "logico", count: 4 },
        { topic: "verbal", count: 4 }
      ]
    },
    usecipol: {
      id: "usecipol", title: "Universidad de la Policía",
      description: "Evaluación de Capacidades y Competencias: 4 componentes de 20 preguntas cada uno — Numérico, Abstracto, Verbal y Conocimientos Generales.",
      totalMinutes: 120,
      scoreOutOf1000: true,
      passingScore: 800,
      topics: ["numerico", "abstracto", "verbal", "generales"],
      composition: [
        { topic: "numerico", count: 20 },
        { topic: "abstracto", count: 20 },
        { topic: "verbal", count: 20 },
        { topic: "generales", count: 20 }
      ]
    }
  };

  function buildExamPool(examId) {
    var cfg = EXAMS[examId];
    if (!cfg) return [];
    var pool = [];
    cfg.composition.forEach(function (part) {
      var fresh = getFreshPool(part.topic);
      var picked = pickN(fresh, part.count);
      pool = pool.concat(picked);
    });
    return shuffle(pool);
  }

  window.UNIFIED_BANK = {
    TOPIC_META: TOPIC_META,
    EXAMS: EXAMS,
    getFreshPool: getFreshPool,
    pickN: pickN,
    buildExamPool: buildExamPool,
    shuffle: shuffle
  };
})();
