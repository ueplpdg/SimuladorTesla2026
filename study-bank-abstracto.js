// Razonamiento Abstracto — generador paramétrico con figuras SVG.
// Cada subtipo produce problemas con datos/figuras nuevas en cada recarga,
// manteniendo explicación paso a paso correcta y coherente con la figura.
(function () {
  const NAVY = "#132a44", GOLD = "#b08d3f", INK = "#1c2b3a";

  function ri(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  function svg(inner, size) {
    const s = size || 90;
    return '<svg viewBox="0 0 100 100" width="' + s + '" height="' + s + '" xmlns="http://www.w3.org/2000/svg">' + inner + '</svg>';
  }

  // Devuelve exactamente `count` distractores ENTEROS distintos del correcto
  // y entre sí, siempre dentro del rango [min,max]. Evita opciones duplicadas
  // o listas incompletas cuando la respuesta está cerca de un extremo.
  function distractors(answer, min, max, count) {
    const pool = [];
    for (let v = min; v <= max; v++) if (v !== answer) pool.push(v);
    // prioriza los valores más cercanos al correcto (distractores plausibles)
    pool.sort((a, b) => Math.abs(a - answer) - Math.abs(b - answer));
    const near = pool.slice(0, Math.max(count + 2, 5));
    return shuffle(near).slice(0, count);
  }

  // Igual que distractors pero sobre ángulos múltiplos de 45° (mod 360)
  function angleDistractors(answer, count) {
    const pool = [];
    for (let a = 0; a < 360; a += 45) if (a !== answer % 360) pool.push(a);
    return shuffle(pool).slice(0, count);
  }

  // ---------- primitivas de dibujo ----------
  function dots(n) {
    // hasta 9 puntos en retícula 3x3
    const pos = [[28,28],[50,28],[72,28],[28,50],[50,50],[72,50],[28,72],[50,72],[72,72]];
    let out = '<rect x="6" y="6" width="88" height="88" rx="8" fill="#ffffff" stroke="' + NAVY + '" stroke-width="3"/>';
    for (let i = 0; i < n; i++) out += '<circle cx="' + pos[i][0] + '" cy="' + pos[i][1] + '" r="8" fill="' + NAVY + '"/>';
    return svg(out);
  }

  function polygon(sides, fill) {
    const cx = 50, cy = 52, r = 34;
    let pts = [];
    for (let i = 0; i < sides; i++) {
      const a = (Math.PI * 2 * i) / sides - Math.PI / 2;
      pts.push((cx + r * Math.cos(a)).toFixed(1) + "," + (cy + r * Math.sin(a)).toFixed(1));
    }
    return svg('<polygon points="' + pts.join(" ") + '" fill="' + (fill || "none") + '" stroke="' + NAVY + '" stroke-width="4"/>');
  }

  function circleFig(fill) {
    return svg('<circle cx="50" cy="52" r="34" fill="' + (fill || "none") + '" stroke="' + NAVY + '" stroke-width="4"/>');
  }

  function arrow(deg) {
    return svg('<g transform="rotate(' + deg + ' 50 50)"><line x1="50" y1="82" x2="50" y2="20" stroke="' + NAVY + '" stroke-width="6"/><polygon points="50,10 40,28 60,28" fill="' + NAVY + '"/></g>');
  }

  function halfShaded(deg) {
    return svg('<g transform="rotate(' + deg + ' 50 50)"><circle cx="50" cy="50" r="34" fill="none" stroke="' + NAVY + '" stroke-width="4"/><path d="M50,16 A34,34 0 0,1 50,84 Z" fill="' + GOLD + '"/></g>');
  }

  function domino(top, bottom) {
    const pip = (cx, cy) => '<circle cx="' + cx + '" cy="' + cy + '" r="5.5" fill="' + NAVY + '"/>';
    const layouts = {
      0: [], 1: [[50,0]], 2: [[32,-12],[68,12]], 3: [[32,-12],[50,0],[68,12]],
      4: [[32,-12],[68,-12],[32,12],[68,12]], 5: [[32,-12],[68,-12],[50,0],[32,12],[68,12]],
      6: [[32,-14],[68,-14],[32,0],[68,0],[32,14],[68,14]]
    };
    function half(n, yc) {
      return (layouts[n] || []).map(p => pip(p[0], yc + p[1])).join("");
    }
    let out = '<rect x="14" y="6" width="72" height="88" rx="8" fill="#ffffff" stroke="' + NAVY + '" stroke-width="3"/>';
    out += '<line x1="14" y1="50" x2="86" y2="50" stroke="' + NAVY + '" stroke-width="3"/>';
    out += half(top, 28) + half(bottom, 72);
    return svg(out);
  }

  function sidesName(n) {
    return ({ 3: "triángulo (3 lados)", 4: "cuadrilátero (4 lados)", 5: "pentágono (5 lados)", 6: "hexágono (6 lados)", 7: "heptágono (7 lados)", 8: "octágono (8 lados)" })[n] || (n + " lados");
  }

  // ---------- subtipo 1: matriz gráfica (progresión de puntos) ----------
  function matrizPuntos() {
    const start = ri(1, 2), step = ri(1, 2);
    const seq = [];
    for (let i = 0; i < 9; i++) seq.push(start + step * i);
    if (seq[8] > 9) return matrizPuntos();
    const answer = seq[8];
    const opts = shuffle([answer].concat(distractors(answer, 0, 9, 3)));
    const stimulus = '<div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; width:300px;">' +
      seq.slice(0, 8).map(n => dots(n)).join("") +
      '<div style="display:flex; align-items:center; justify-content:center; border:3px dashed ' + GOLD + '; border-radius:8px; height:90px; font-size:34px; color:' + GOLD + '; font-weight:700;">?</div>' +
      '</div>';
    return {
      subtype: "Matriz gráfica",
      q: "Observa la matriz de 3×3. Cada casilla contiene una cantidad de puntos que sigue un patrón. ¿Qué figura completa la casilla faltante?",
      svgQ: stimulus,
      optionsSvg: opts.map(n => dots(n)),
      options: opts.map(n => n + " puntos"),
      correct: opts.indexOf(answer),
      full: [
        { t: "dato", label: "Datos", text: "La matriz se lee de izquierda a derecha y de arriba hacia abajo. Las cantidades de puntos son: " + seq.slice(0, 8).join(", ") + " y falta la última." },
        { t: "plantea", label: "Plantea", text: "Compara cada casilla con la anterior para hallar la regla de progresión: " + seq[1] + " − " + seq[0] + " = " + step + ", y se repite en todas las casillas." },
        { t: "resuelve", label: "Desarrolla", text: "La regla es sumar " + step + " punto(s) en cada casilla. La octava casilla tiene " + seq[7] + " puntos, entonces la novena tiene " + seq[7] + " + " + step + "." },
        { t: "resultado", label: "Resultado", text: "La casilla faltante debe tener " + answer + " puntos." }
      ],
      quick: [
        "Cuenta los puntos de las dos primeras casillas y resta: eso te da el paso (" + step + ").",
        "Suma ese paso a la última casilla visible (" + seq[7] + " + " + step + " = " + answer + ") sin recorrer toda la matriz."
      ]
    };
  }

  // ---------- subtipo 2: dominós ----------
  function dominoSerie() {
    const t0 = ri(0, 2), b0 = ri(4, 6);
    const tStep = 1, bStep = -1;
    const seq = [];
    for (let i = 0; i < 4; i++) seq.push([t0 + tStep * i, b0 + bStep * i]);
    if (seq[3][0] > 6 || seq[3][1] < 0) return dominoSerie();
    const ans = seq[3];
    const seen = {};
    seen[ans[0] + "," + ans[1]] = true;
    const wrongCands = [];
    [[1, 0], [0, 1], [-1, -1], [1, 1], [-1, 0], [0, -1], [2, 0], [0, 2]].forEach(function (d) {
      const p = [ans[0] + d[0], ans[1] + d[1]];
      const key = p[0] + "," + p[1];
      if (p[0] >= 0 && p[0] <= 6 && p[1] >= 0 && p[1] <= 6 && !seen[key]) { seen[key] = true; wrongCands.push(p); }
    });
    if (wrongCands.length < 3) return dominoSerie();
    const opts = shuffle([ans].concat(shuffle(wrongCands).slice(0, 3)));
    const stimulus = '<div style="display:flex; gap:10px; align-items:center;">' +
      seq.slice(0, 3).map(p => domino(p[0], p[1])).join("") +
      '<div style="display:flex; align-items:center; justify-content:center; border:3px dashed ' + GOLD + '; border-radius:8px; width:90px; height:90px; font-size:34px; color:' + GOLD + '; font-weight:700;">?</div>' +
      '</div>';
    return {
      subtype: "Dominós",
      q: "Observa la secuencia de dominós. ¿Cuál continúa la serie?",
      svgQ: stimulus,
      optionsSvg: opts.map(p => domino(p[0], p[1])),
      options: opts.map(p => p[0] + "|" + p[1]),
      correct: opts.findIndex(p => p[0] === ans[0] && p[1] === ans[1]),
      full: [
        { t: "dato", label: "Datos", text: "Los dominós visibles son: " + seq.slice(0, 3).map(p => p[0] + "|" + p[1]).join(", ") + "." },
        { t: "plantea", label: "Plantea", text: "Analiza la mitad SUPERIOR y la mitad INFERIOR por separado, como dos series independientes." },
        { t: "resuelve", label: "Desarrolla", text: "Arriba: " + seq.slice(0, 3).map(p => p[0]).join(", ") + " → aumenta de 1 en 1, sigue " + ans[0] + ". Abajo: " + seq.slice(0, 3).map(p => p[1]).join(", ") + " → disminuye de 1 en 1, sigue " + ans[1] + "." },
        { t: "resultado", label: "Resultado", text: "El dominó que continúa es " + ans[0] + "|" + ans[1] + "." }
      ],
      quick: [
        "Nunca leas el dominó como un número de dos cifras: son DOS series separadas (arriba y abajo).",
        "Arriba sube +1, abajo baja −1 → " + ans[0] + "|" + ans[1] + "."
      ]
    };
  }

  // ---------- subtipo 3: figura excluida ----------
  function figuraExcluida() {
    const base = ri(4, 6);
    const oddIsCircle = Math.random() < 0.5;
    let figs, labels, reason;
    if (oddIsCircle) {
      figs = [polygon(base), polygon(base), polygon(base), circleFig()];
      labels = [sidesName(base), sidesName(base), sidesName(base), "círculo (sin lados rectos)"];
      reason = "Tres figuras son polígonos con lados rectos y vértices; el círculo no tiene lados rectos ni vértices.";
    } else {
      const other = base === 4 ? 3 : base - 1;
      figs = [polygon(base), polygon(base), polygon(base), polygon(other)];
      labels = [sidesName(base), sidesName(base), sidesName(base), sidesName(other)];
      reason = "Tres figuras tienen " + base + " lados; la restante tiene " + other + " lados, distinto número de lados que las demás.";
    }
    const order = shuffle([0, 1, 2, 3]);
    const optsSvg = order.map(i => figs[i]);
    const optsLbl = order.map(i => labels[i]);
    const correct = order.indexOf(3);
    return {
      subtype: "Figura excluida",
      q: "Observa las cuatro figuras. ¿Cuál NO pertenece al grupo?",
      svgQ: "",
      optionsSvg: optsSvg,
      options: optsLbl,
      correct: correct,
      full: [
        { t: "dato", label: "Datos", text: "Se presentan cuatro figuras geométricas y hay que hallar la que rompe la regla común." },
        { t: "plantea", label: "Plantea", text: "Busca una propiedad que compartan TRES de ellas: número de lados, presencia de vértices, tipo de línea (recta o curva)." },
        { t: "resuelve", label: "Desarrolla", text: reason },
        { t: "resultado", label: "Resultado", text: "La figura excluida es la que no cumple esa propiedad común (" + optsLbl[correct] + ")." }
      ],
      quick: [
        "Cuenta lados y vértices de cada figura antes de mirar cualquier otro detalle.",
        "La regla la definen TRES figuras iguales; la cuarta es la respuesta."
      ]
    };
  }

  // ---------- subtipo 4: analogía de figuras (rotación) ----------
  function analogiaRotacion() {
    const start = pick([0, 45, 90, 135, 180]);
    const rot = pick([45, 90, 135, 180]);
    const a = start, b = (start + rot) % 360;
    const c = (start + 90) % 360, d = (c + rot) % 360;
    const opts = shuffle([d].concat(angleDistractors(d, 3)));
    const stimulus = '<div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">' +
      arrow(a) + '<span style="font-size:26px; color:' + INK + ';">→</span>' + arrow(b) +
      '<span style="font-size:26px; color:' + INK + '; margin:0 10px;">así como</span>' +
      arrow(c) + '<span style="font-size:26px; color:' + INK + ';">→</span>' +
      '<div style="display:flex; align-items:center; justify-content:center; border:3px dashed ' + GOLD + '; border-radius:8px; width:90px; height:90px; font-size:34px; color:' + GOLD + '; font-weight:700;">?</div>' +
      '</div>';
    return {
      subtype: "Analogía de figuras",
      q: "La primera flecha se transforma en la segunda mediante un giro. Aplica la MISMA transformación a la tercera flecha. ¿Cuál es el resultado?",
      svgQ: stimulus,
      optionsSvg: opts.map(deg => arrow(deg)),
      options: opts.map(deg => "flecha girada " + deg + "°"),
      correct: opts.indexOf(d),
      full: [
        { t: "dato", label: "Datos", text: "Primer par: la flecha pasa de una orientación a otra. Segundo par: se da la primera flecha y falta su transformada." },
        { t: "plantea", label: "Plantea", text: "Determina el ángulo de giro del primer par comparando la punta de la flecha antes y después." },
        { t: "resuelve", label: "Desarrolla", text: "El giro del primer par es de " + rot + "° en sentido horario. Aplicando ese mismo giro de " + rot + "° a la tercera flecha se obtiene la respuesta." },
        { t: "resultado", label: "Resultado", text: "La figura correcta es la flecha girada " + rot + "° respecto de la tercera." }
      ],
      quick: [
        "Fíjate solo en la PUNTA de la flecha para medir el giro; ignora el resto.",
        "Mide el giro en el primer par (" + rot + "°) y aplícalo idéntico al segundo par."
      ]
    };
  }

  // ---------- subtipo 5: serie de figuras (lados creciendo) ----------
  function serieLados() {
    const start = ri(3, 4), step = 1;
    const seq = [start, start + step, start + 2 * step, start + 3 * step];
    if (seq[3] > 8) return serieLados();
    const ans = seq[3];
    const opts = shuffle([ans].concat(distractors(ans, 3, 8, 3)));
    const stimulus = '<div style="display:flex; gap:10px; align-items:center;">' +
      seq.slice(0, 3).map(n => polygon(n)).join("") +
      '<div style="display:flex; align-items:center; justify-content:center; border:3px dashed ' + GOLD + '; border-radius:8px; width:90px; height:90px; font-size:34px; color:' + GOLD + '; font-weight:700;">?</div>' +
      '</div>';
    return {
      subtype: "Serie de figuras",
      q: "Observa la serie de polígonos. ¿Qué figura continúa la secuencia?",
      svgQ: stimulus,
      optionsSvg: opts.map(n => polygon(n)),
      options: opts.map(n => sidesName(n)),
      correct: opts.indexOf(ans),
      full: [
        { t: "dato", label: "Datos", text: "Los polígonos visibles tienen " + seq.slice(0, 3).join(", ") + " lados respectivamente." },
        { t: "plantea", label: "Plantea", text: "Cuenta los lados de cada figura y busca la regla numérica que las relaciona." },
        { t: "resuelve", label: "Desarrolla", text: "Cada figura tiene un lado más que la anterior (" + seq.slice(0, 3).join(" → ") + "). La siguiente debe tener " + seq[2] + " + 1 lados." },
        { t: "resultado", label: "Resultado", text: "La figura que continúa es el " + sidesName(ans) + "." }
      ],
      quick: [
        "Convierte las figuras en números contando lados: " + seq.slice(0, 3).join(", ") + ".",
        "Resuelve la serie numérica y vuelve a la figura: " + ans + " lados."
      ]
    };
  }

  // ---------- subtipo 6: conjuntos gráficos (sombreado rotando) ----------
  function conjuntoSombreado() {
    const start = pick([0, 90, 180, 270]);
    const rot = pick([90, 180]);
    const seq = [start, (start + rot) % 360, (start + 2 * rot) % 360];
    const ans = (start + 3 * rot) % 360;
    const quarterPool = [0, 90, 180, 270].filter(v => v !== ans);
    const opts = shuffle([ans].concat(shuffle(quarterPool).slice(0, 3)));
    const stimulus = '<div style="display:flex; gap:10px; align-items:center;">' +
      seq.map(d => halfShaded(d)).join("") +
      '<div style="display:flex; align-items:center; justify-content:center; border:3px dashed ' + GOLD + '; border-radius:8px; width:90px; height:90px; font-size:34px; color:' + GOLD + '; font-weight:700;">?</div>' +
      '</div>';
    return {
      subtype: "Conjuntos gráficos",
      q: "En cada círculo, la mitad sombreada va cambiando de posición siguiendo un patrón. ¿Qué figura continúa?",
      svgQ: stimulus,
      optionsSvg: opts.map(d => halfShaded(d)),
      options: opts.map(d => "sombreado a " + d + "°"),
      correct: opts.indexOf(ans),
      full: [
        { t: "dato", label: "Datos", text: "Tres círculos con la mitad sombreada en distintas posiciones, y falta el cuarto." },
        { t: "plantea", label: "Plantea", text: "Sigue el borde de la zona sombreada de una figura a la siguiente para medir cuánto gira cada vez." },
        { t: "resuelve", label: "Desarrolla", text: "La zona sombreada gira " + rot + "° en cada paso, siempre en el mismo sentido. Aplicando otro giro de " + rot + "° a la tercera figura se obtiene la cuarta." },
        { t: "resultado", label: "Resultado", text: "La figura correcta es la que continúa ese giro constante de " + rot + "°." }
      ],
      quick: [
        "Ignora el círculo: rastrea solo el BORDE de la parte sombreada.",
        "Giro constante de " + rot + "° por paso — aplícalo una vez más a la última figura."
      ]
    };
  }

  const BUILDERS = [matrizPuntos, dominoSerie, figuraExcluida, analogiaRotacion, serieLados, conjuntoSombreado];

  function generate(n) {
    const out = [];
    // reparte equitativamente entre los 6 subtipos y luego mezcla
    let i = 0;
    while (out.length < n) {
      const b = BUILDERS[i % BUILDERS.length];
      const p = b();
      out.push(Object.assign({ isVisual: true, title: p.subtype }, p));
      i++;
    }
    return shuffle(out);
  }

  window.ABSTRACTO_GENERATOR = generate;
})();
