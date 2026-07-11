// Generadores de preguntas numéricas — producen ejercicios distintos cada vez
// que se abre un simulador, garantizando datos "limpios" (enteros, fracciones
// simples o como máximo un decimal).
(function () {
  function ri(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function gcdNum(a, b) { return b === 0 ? a : gcdNum(b, a % b); }
  function fmt(n) {
    if (Number.isInteger(n)) return String(n);
    return (Math.round(n * 10) / 10).toString();
  }

  // Construye options+correct a partir de un valor correcto y candidatos de distractor.
  function buildOptions(correctVal, distractorFns) {
    var values = [correctVal];
    var guard = 0;
    while (values.length < 4 && guard < 40) {
      guard++;
      var fn = distractorFns[values.length - 1] || distractorFns[distractorFns.length - 1];
      var v = fn();
      var exists = values.some(function (x) { return Math.abs(x - v) < 1e-9; });
      if (!exists) values.push(v);
    }
    while (values.length < 4) { values.push(values[values.length - 1] + ri(1, 5)); }
    // shuffle
    for (var i = values.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = values[i]; values[i] = values[j]; values[j] = tmp;
    }
    var correctIdx = values.findIndex(function (x) { return Math.abs(x - correctVal) < 1e-9; });
    return { options: values.map(fmt), correct: correctIdx };
  }

  // ---------- NUMÉRICO ----------
  var numericoFamilies = [
    function descuento() {
      var price = ri(5, 45) * 20; // múltiplo de 20
      var pct = pick([10, 20, 25, 50]);
      var discount = price * pct / 100;
      var final = price - discount;
      var item = pick(["una laptop", "un celular", "una bicicleta", "un televisor", "unos audífonos", "una consola de videojuegos", "un par de zapatos", "una maleta de viaje"]);
      var o = buildOptions(final, [
        function () { return price; },
        function () { return price - discount / 2; },
        function () { return final + ri(1, 3) * 10; },
        function () { return final - ri(1, 3) * 10; }
      ]);
      return {
        q: "Un artículo (" + item + ") cuesta $" + price + " y tiene un descuento del " + pct + "%. ¿Cuánto se paga por él?",
        options: o.options.map(function (v) { return "$" + v; }), correct: o.correct,
        explain: "Descuento = " + price + " × " + pct + "/100 = $" + discount + ". Precio final = " + price + " − " + discount + " = $" + final + "."
      };
    },
    function razonProporcion() {
      var pares = [[2, 3], [3, 4], [4, 5], [5, 3], [7, 5], [3, 2], [5, 2], [4, 3]];
      var par = pick(pares);
      var k = ri(3, 12);
      var a = par[0] * k, b = par[1] * k;
      var grupos = pick([
        { g1: "hombres", g2: "mujeres", q2: "cuántas" },
        { g1: "niños", g2: "niñas", q2: "cuántas" },
        { g1: "perros", g2: "gatos", q2: "cuántos" },
        { g1: "libros de ciencia", g2: "libros de arte", q2: "cuántos" }
      ]);
      var o = buildOptions(b, [
        function () { return b + ri(1, 3) * par[1]; },
        function () { return b - ri(1, 3) * par[1]; },
        function () { return a; }
      ]);
      return {
        q: "La razón entre " + grupos.g1 + " y " + grupos.g2 + " es " + par[0] + ":" + par[1] + ". Si hay " + a + " " + grupos.g1 + ", ¿" + grupos.q2 + " " + grupos.g2 + " hay?",
        options: o.options, correct: o.correct,
        explain: grupos.g1 + "/" + grupos.g2 + " = " + par[0] + "/" + par[1] + ". Con " + a + " " + grupos.g1 + ": " + a + "/N = " + par[0] + "/" + par[1] + " → N = (" + a + "×" + par[1] + ")/" + par[0] + " = " + b + "."
      };
    },
    function sucesionAritmetica() {
      var a1 = ri(1, 9), d = ri(2, 9) * pick([1, 1, -1]);
      var terms = [a1, a1 + d, a1 + 2 * d, a1 + 3 * d, a1 + 4 * d];
      var next = a1 + 5 * d;
      var o = buildOptions(next, [
        function () { return next + d; },
        function () { return next - d; },
        function () { return next + 2; }
      ]);
      return {
        q: "¿Qué número continúa la sucesión: " + terms.join(", ") + ", ...?",
        options: o.options, correct: o.correct,
        explain: "Cada término aumenta " + d + " respecto al anterior (diferencia constante). El siguiente término es " + terms[4] + " + (" + d + ") = " + next + "."
      };
    },
    function sucesionGeometrica() {
      var a1 = pick([2, 3, 4, 5]), r = pick([2, 3]);
      var terms = [a1, a1 * r, a1 * r * r, a1 * r * r * r, a1 * Math.pow(r, 4)];
      var next = a1 * Math.pow(r, 5);
      var o = buildOptions(next, [
        function () { return next / r * (r - 1); },
        function () { return next + terms[4]; },
        function () { return terms[4] * (r + 1); }
      ]);
      return {
        q: "¿Qué número continúa la sucesión: " + terms.join(", ") + ", ...?",
        options: o.options, correct: o.correct,
        explain: "Cada término se multiplica por " + r + ". El siguiente es " + terms[4] + " × " + r + " = " + next + "."
      };
    },
    function ecuacionLineal() {
      var tipo = pick(["doble_mas", "mitad_mas", "triple_menos"]);
      var x, texto, M;
      if (tipo === "doble_mas") {
        x = ri(3, 30); var N = ri(1, 20); M = 2 * x + N;
        texto = "El doble de un número más " + N + " es igual a " + M + ". ¿Cuál es el número?";
      } else if (tipo === "mitad_mas") {
        x = ri(2, 20) * 2; var N2 = ri(1, 15); M = x / 2 + N2;
        texto = "La mitad de un número más " + N2 + " es igual a " + M + ". ¿Cuál es el número?";
      } else {
        x = ri(3, 30); var N3 = ri(1, 20); M = 3 * x - N3;
        texto = "El triple de un número menos " + N3 + " es igual a " + M + ". ¿Cuál es el número?";
      }
      var o = buildOptions(x, [
        function () { return x + 1; }, function () { return x - 1; }, function () { return x + 2; }
      ]);
      return { q: texto, options: o.options, correct: o.correct,
        explain: "Se plantea la ecuación según el enunciado y se despeja la incógnita paso a paso hasta obtener x = " + x + "." };
    },
    function reglaDeTresSimple() {
      var w1 = ri(3, 12), d1 = ri(3, 20);
      var total = w1 * d1;
      var divisors = []; for (var i = 1; i <= total; i++) if (total % i === 0 && i !== w1 && i <= 30) divisors.push(i);
      var w2 = divisors.length ? pick(divisors) : w1 * 2;
      var d2 = total / w2;
      var inversa = w2 > w1;
      var o = buildOptions(d2, [
        function () { return d2 + ri(1, 3); }, function () { return Math.max(1, d2 - ri(1, 3)); }, function () { return d1; }
      ]);
      return {
        q: "Si " + w1 + " obreros construyen un muro en " + d1 + " días, ¿cuántos días tardarán " + w2 + " obreros trabajando al mismo ritmo?",
        options: o.options.map(function (v) { return v + " días"; }), correct: o.correct,
        explain: "Trabajo total = " + w1 + "×" + d1 + " = " + total + " obrero-días. Con " + w2 + " obreros: " + total + "/" + w2 + " = " + d2 + " días (regla de tres " + (inversa ? "inversa" : "inversa") + ": a más obreros, menos días)."
      };
    },
    function porcentajeDePorcentaje() {
      var p1 = pick([10, 20, 50]), p2 = pick([10, 20, 50]);
      var B = ri(2, 9), base = 100 * B;
      var result = base * p1 * p2 / 10000;
      var o = buildOptions(result, [
        function () { return result * 2; }, function () { return result / 2; }, function () { return base * p1 / 100; }
      ]);
      return {
        q: "¿Cuánto es el " + p1 + "% del " + p2 + "% de " + base + "?",
        options: o.options, correct: o.correct,
        explain: "(" + p1 + "/100) × (" + p2 + "/100) × " + base + " = " + result + "."
      };
    },
    function promedioPonderado() {
      var w1 = pick([20, 30, 40, 50, 60, 70, 80]);
      var w2 = 100 - w1;
      var g1 = ri(5, 10), g2 = ri(4, 9);
      var result = (g1 * w1 + g2 * w2) / 100;
      var o = buildOptions(result, [
        function () { return (g1 + g2) / 2; }, function () { return result + 0.4; }, function () { return result - 0.4; }
      ]);
      return {
        q: "Un estudiante obtiene " + g1 + "/10 en un examen que pesa " + w1 + "% de la nota y " + g2 + "/10 en otro que pesa " + w2 + "%. ¿Cuál es su nota final ponderada?",
        options: o.options, correct: o.correct,
        explain: "Nota = " + g1 + "×" + (w1 / 100) + " + " + g2 + "×" + (w2 / 100) + " = " + fmt(result) + "."
      };
    },
    function combinatoria() {
      var n = ri(3, 6);
      var fact = 1; for (var i = 2; i <= n; i++) fact *= i;
      var o = buildOptions(fact, [
        function () { return fact / n; }, function () { return fact + n; }, function () { return fact - n; }
      ]);
      return {
        q: "¿De cuántas formas distintas se pueden ordenar " + n + " libros diferentes en un estante?",
        options: o.options, correct: o.correct,
        explain: "Son permutaciones de " + n + " elementos: " + n + "! = " + fact + "."
      };
    },
    function relacionSumaDifProducto() {
      // Basado en preguntas reales tipo Senescyt: dos números cuya suma, diferencia
      // y (una razón) se comparan. Aquí usamos una versión con datos limpios.
      var menor = ri(3, 12);
      var mayor = menor + ri(2, 10);
      var suma = mayor + menor, dif = mayor - menor;
      var o = buildOptions(mayor, [
        function () { return menor; }, function () { return suma; }, function () { return dif; }
      ]);
      return {
        q: "La suma de dos números es " + suma + " y su diferencia es " + dif + ". ¿Cuál es el número mayor?",
        options: o.options, correct: o.correct,
        explain: "x + y = " + suma + ", x − y = " + dif + ". Sumando ambas ecuaciones: 2x = " + (suma + dif) + " → x = " + mayor + "."
      };
    },
    function aumentoYDescuentoSucesivo() {
      var price = ri(4, 40) * 10;
      var pctUp = pick([10, 20, 25, 50]);
      var pctDown = pick([10, 20, 25, 50]);
      var afterUp = price * (1 + pctUp / 100);
      var final = afterUp * (1 - pctDown / 100);
      if (!Number.isInteger(final)) return null;
      var o = buildOptions(final, [
        function () { return price; }, function () { return afterUp; }, function () { return price * (1 + (pctUp - pctDown) / 100); }
      ]);
      return {
        q: "Un producto de $" + price + " sube " + pctUp + "% y luego baja " + pctDown + "% sobre el nuevo precio. ¿Cuál es el precio final?",
        options: o.options.map(function (v) { return "$" + v; }), correct: o.correct,
        explain: "Tras subir " + pctUp + "%: $" + price + " × " + (1 + pctUp / 100) + " = $" + afterUp + ". Tras bajar " + pctDown + "%: $" + afterUp + " × " + (1 - pctDown / 100) + " = $" + final + "."
      };
    },
    function trabajoConjunto() {
      var da = pick([4, 6, 8, 10, 12]);
      var db = pick([4, 6, 8, 10, 12]);
      // tasa conjunta = 1/da + 1/db ; tiempo conjunto = 1/(1/da+1/db) — forzamos resultado limpio
      var lcm = (da * db) / gcdNum(da, db);
      var rateA = lcm / da, rateB = lcm / db;
      var combined = lcm / (rateA + rateB);
      if (!Number.isInteger(combined)) return null;
      var o = buildOptions(combined, [
        function () { return da + db; }, function () { return Math.min(da, db); }, function () { return (da + db) / 2; }
      ]);
      return {
        q: "Ana hace un trabajo sola en " + da + " días y Beto lo hace solo en " + db + " días. ¿En cuántos días lo terminan trabajando juntos?",
        options: o.options.map(function (v) { return v + " días"; }), correct: o.correct,
        explain: "Tasa de Ana = 1/" + da + ", tasa de Beto = 1/" + db + " del trabajo por día. Juntas suman 1/" + da + " + 1/" + db + ", y el tiempo conjunto es el inverso de esa suma: " + combined + " días."
      };
    },
    function edadesFuturoPasado() {
      var xNow = ri(10, 40);
      var k = ri(2, 8);
      var factor = pick([2, 3]);
      var yFuture = factor * (xNow + k) - k; // edad de otra persona ahora, tal que en k años sea factor× la edad de x en k años... simplificado
      // Construimos: dentro de k años, edad de B será 'factor' veces la de A
      var aFuture = xNow + k;
      var bFuture = factor * aFuture;
      var bNow = bFuture - k;
      if (bNow < 1) return null;
      var o = buildOptions(bNow, [
        function () { return bFuture; }, function () { return xNow; }, function () { return bNow + k; }
      ]);
      return {
        q: "Dentro de " + k + " años, la edad de Beto será " + factor + " veces la edad de Ana. Si Ana tiene " + xNow + " años, ¿qué edad tiene Beto actualmente?",
        options: o.options.map(function (v) { return v + " años"; }), correct: o.correct,
        explain: "En " + k + " años Ana tendrá " + aFuture + ". Beto tendrá " + factor + "×" + aFuture + " = " + bFuture + ". Edad actual de Beto = " + bFuture + " − " + k + " = " + bNow + " años."
      };
    },
    function trenesEncuentro() {
      var v1 = pick([40, 50, 60, 80]), v2 = pick([40, 50, 60, 80]);
      var t = ri(2, 5);
      var dist = (v1 + v2) * t;
      var o = buildOptions(dist, [
        function () { return (v1 + v2) * (t + 1); }, function () { return v1 * t; }, function () { return v2 * t; }
      ]);
      return {
        q: "Dos trenes parten al mismo tiempo desde dos ciudades y viajan uno hacia el otro a " + v1 + " km/h y " + v2 + " km/h. Si se cruzan después de " + t + " horas, ¿qué distancia los separaba inicialmente?",
        options: o.options.map(function (v) { return v + " km"; }), correct: o.correct,
        explain: "Velocidad de acercamiento = " + v1 + " + " + v2 + " = " + (v1 + v2) + " km/h. Distancia = " + (v1 + v2) + " × " + t + " = " + dist + " km."
      };
    },
    function mezclaPrecio() {
      var kg1 = ri(2, 8), precio1 = ri(2, 6);
      var kg2 = ri(2, 8), precio2 = ri(2, 6);
      var totalKg = kg1 + kg2;
      var totalCost = kg1 * precio1 + kg2 * precio2;
      if (totalCost % totalKg !== 0) return null;
      var precioMezcla = totalCost / totalKg;
      var o = buildOptions(precioMezcla, [
        function () { return precio1; }, function () { return precio2; }, function () { return (precio1 + precio2) / 2; }
      ]);
      return {
        q: "Se mezclan " + kg1 + " kg de café a $" + precio1 + " el kg con " + kg2 + " kg de café a $" + precio2 + " el kg. ¿Cuál es el precio por kg de la mezcla?",
        options: o.options.map(function (v) { return "$" + v; }), correct: o.correct,
        explain: "Costo total = " + kg1 + "×" + precio1 + " + " + kg2 + "×" + precio2 + " = $" + totalCost + ". Precio por kg = " + totalCost + "/" + totalKg + " = $" + precioMezcla + "."
      };
    },
    function interesSimple() {
      var capital = ri(2, 20) * 100;
      var tasa = pick([4, 5, 6, 8, 10]);
      var tiempo = ri(1, 5);
      var interes = capital * tasa * tiempo / 100;
      var o = buildOptions(interes, [
        function () { return interes + capital * tasa / 100; }, function () { return interes - tasa; }, function () { return capital * tasa / 100; }
      ]);
      return {
        q: "Un capital de $" + capital + " se invierte al " + tasa + "% de interés simple anual. ¿Cuánto interés genera en " + tiempo + " años?",
        options: o.options.map(function (v) { return "$" + v; }), correct: o.correct,
        explain: "Interés simple = Capital × tasa × tiempo = " + capital + " × " + (tasa / 100) + " × " + tiempo + " = $" + interes + "."
      };
    }
  ];

  function reduceFrac(n, d) {
    function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
    var g = gcd(n, d);
    return [n / g, d / g];
  }

  function shuffleFracOptions(fav, total) {
    var r = reduceFrac(fav, total);
    var correctStr = r[0] + "/" + r[1];
    var candidates = ["1/6", "1/3", "1/2", "2/3", "1/2", "5/6"];
    var set = [correctStr];
    candidates.forEach(function (c) { if (set.indexOf(c) === -1 && set.length < 4) set.push(c); });
    for (var i = set.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = set[i]; set[i] = set[j]; set[j] = t; }
    return { list: set, idx: set.indexOf(correctStr) };
  }

  function makeProbabilidad() {
    var kind = pick(["mayor", "par", "impar"]);
    var favorable, texto;
    if (kind === "mayor") { var N = ri(2, 4); favorable = 6 - N; texto = "un número mayor a " + N; }
    else if (kind === "par") { favorable = 3; texto = "un número par"; }
    else { favorable = 3; texto = "un número impar"; }
    var res = shuffleFracOptions(favorable, 6);
    return {
      q: "Al lanzar un dado de 6 caras, ¿cuál es la probabilidad de obtener " + texto + "?",
      options: res.list, correct: res.idx,
      explain: "Hay " + favorable + " casos favorables de 6 posibles → P = " + reduceFrac(favorable, 6).join("/") + "."
    };
  }

  function generateNumerico(count) {
    var out = [];
    var seen = {};
    var guard = 0;
    while (out.length < count && guard < count * 8) {
      guard++;
      var fam = pick(numericoFamilies);
      var item = (Math.random() < 0.1) ? makeProbabilidad() : fam();
      if (!item || !item.options || item.correct === undefined) continue;
      if (seen[item.q]) continue;
      seen[item.q] = true;
      out.push(item);
    }
    return out;
  }

  // ---------- MATEMÁTICAS ----------
  var matematicasFamilies = [
    function progresionAritmetica() {
      var a1 = ri(1, 10), d = ri(2, 6);
      var n = ri(10, 20);
      var suma = n / 2 * (2 * a1 + (n - 1) * d);
      var o = buildOptions(suma, [
        function () { return suma + d; }, function () { return suma - d; }, function () { return suma + n; }
      ]);
      return {
        q: "En la progresión aritmética " + a1 + ", " + (a1 + d) + ", " + (a1 + 2 * d) + ", " + (a1 + 3 * d) + ", ..., ¿cuánto suman los primeros " + n + " términos?",
        options: o.options, correct: o.correct,
        explain: "Sₙ = n/2 × [2a₁ + (n−1)d] = " + n + "/2 × [2×" + a1 + " + " + (n - 1) + "×" + d + "] = " + suma + "."
      };
    },
    function estadisticaMediana() {
      var n = pick([5, 7, 9]);
      var arr = []; for (var i = 0; i < n; i++) arr.push(ri(5, 40));
      var sorted = arr.slice().sort(function (a, b) { return a - b; });
      var mediana = sorted[Math.floor(n / 2)];
      var o = buildOptions(mediana, [
        function () { return sorted[Math.floor(n / 2) - 1]; },
        function () { return sorted[Math.floor(n / 2) + 1] || mediana + 1; },
        function () { return Math.round(arr.reduce(function (a, b) { return a + b; }, 0) / n); }
      ]);
      return {
        q: "Hallar la mediana del siguiente grupo de datos: " + arr.join(", "),
        options: o.options, correct: o.correct,
        explain: "Se ordenan los datos: " + sorted.join(", ") + ". Con " + n + " datos, la mediana es el valor central: " + mediana + "."
      };
    },
    function estadisticaPromedio() {
      var n = pick([4, 5, 6]);
      var arr = []; for (var i = 0; i < n; i++) arr.push(ri(10, 30));
      var sum = arr.reduce(function (a, b) { return a + b; }, 0);
      var prom = sum / n;
      var o = buildOptions(prom, [
        function () { return prom + 1; }, function () { return prom - 1; }, function () { return Math.max.apply(null, arr); }
      ]);
      return {
        q: "Calcular el promedio del siguiente grupo de datos: " + arr.join(", "),
        options: o.options, correct: o.correct,
        explain: "Promedio = suma de los datos / cantidad de datos = " + sum + "/" + n + " = " + fmt(prom) + "."
      };
    },
    function inecuacionSimple() {
      var a = ri(2, 6), b = ri(1, 15), c = ri(1, 15), sol = ri(-5, 10);
      // a x + b > c  -> resolver x > (c-b)/a  (ajustamos c para que salga entero)
      var rhs = a * sol + b + 1; // aseguramos entero exacto en el punto de corte: a*sol + b = c
      c = a * sol + b;
      var op = pick([">", "<"]);
      return {
        q: "Resolver la inecuación: " + a + "x + " + b + " " + op + " " + c,
        options: ["x " + op + " " + sol, "x " + (op === ">" ? "<" : ">") + " " + sol, "x " + op + " " + (sol + 1), "x " + op + " " + (sol - 1)],
        correct: 0,
        explain: "Se resta " + b + " a ambos lados: " + a + "x " + op + " " + (c - b) + ". Se divide entre " + a + " (positivo, no cambia el sentido): x " + op + " " + sol + "."
      };
    },
    function simplificarFraccion() {
      var factor = ri(2, 6);
      var nRed = ri(1, 8), dRed = ri(nRed + 1, nRed + 8);
      function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
      var g = gcd(nRed, dRed);
      nRed = nRed / g; dRed = dRed / g; // asegurar ya simplificada antes de amplificar
      var n = nRed * factor, d = dRed * factor;
      return {
        q: "Simplificar la fracción: " + n + "/" + d,
        options: [nRed + "/" + dRed, n + "/" + d, (nRed + 1) + "/" + dRed, nRed + "/" + (dRed + 1)],
        correct: 0,
        explain: "Se divide numerador y denominador entre su máximo común divisor (" + factor + "): " + n + "/" + factor + " = " + nRed + ", " + d + "/" + factor + " = " + dRed + ". Fracción simplificada: " + nRed + "/" + dRed + "."
      };
    },
    function operacionesNegativos() {
      var a = ri(-15, -2), b = ri(2, 15), c = ri(-10, -1);
      var result = a + b + c;
      // a - b + c style variety
      var expr = a + " + (" + b + ") + (" + c + ")";
      var o = buildOptions(result, [
        function () { return result + 2; }, function () { return result - 2; }, function () { return a - b + c; }
      ]);
      return {
        q: "Calcular: " + expr,
        options: o.options, correct: o.correct,
        explain: "Sumando en orden: " + a + " + " + b + " = " + (a + b) + "; luego " + (a + b) + " + (" + c + ") = " + result + "."
      };
    },
    function geometriaBasica() {
      var tipo = pick(["rectangulo", "triangulo", "circulo"]);
      if (tipo === "rectangulo") {
        var base = ri(4, 20), altura = ri(3, 15);
        var area = base * altura;
        var o = buildOptions(area, [function () { return area + base; }, function () { return area - altura; }, function () { return 2 * (base + altura); }]);
        return { q: "Hallar el área de un rectángulo de base " + base + " cm y altura " + altura + " cm.",
          options: o.options.map(function (v) { return v + " cm²"; }), correct: o.correct,
          explain: "Área del rectángulo = base × altura = " + base + " × " + altura + " = " + area + " cm²." };
      } else if (tipo === "triangulo") {
        var b2 = ri(4, 20) * 2, h2 = ri(3, 15);
        var area2 = b2 * h2 / 2;
        var o2 = buildOptions(area2, [function () { return b2 * h2; }, function () { return area2 + h2; }, function () { return area2 - b2; }]);
        return { q: "Hallar el área de un triángulo de base " + b2 + " cm y altura " + h2 + " cm.",
          options: o2.options.map(function (v) { return v + " cm²"; }), correct: o2.correct,
          explain: "Área del triángulo = (base × altura)/2 = (" + b2 + " × " + h2 + ")/2 = " + area2 + " cm²." };
      } else {
        var radios = [7, 14, 21];
        var r = pick(radios);
        var area3 = Math.round((22 / 7) * r * r);
        var o3 = buildOptions(area3, [function () { return area3 + r; }, function () { return 2 * (22 / 7) * r; }, function () { return area3 - 2 * r; }]);
        return { q: "Hallar el área de un círculo de radio " + r + " cm (usar π ≈ 22/7).",
          options: o3.options.map(function (v) { return v + " cm²"; }), correct: o3.correct,
          explain: "Área = π×r² = (22/7)×" + r + "² = " + area3 + " cm²." };
      }
    },
    function despejeVariable() {
      // Px + Qy + R = 0 tipo, o ecuaciones lineales para despejar x
      var a = ri(2, 9), b = ri(1, 20), c = ri(1, 40);
      // a*x - b = c  -> x = (c+b)/a ; aseguremos entero: elegir x entero primero
      var x = ri(2, 15);
      c = a * x - b;
      return {
        q: "Despejar x en la ecuación: " + a + "x − " + b + " = " + c,
        options: [String(x), String(x + 1), String(x - 1), String(x + 2)],
        correct: 0,
        explain: "Se suma " + b + " a ambos lados: " + a + "x = " + (c + b) + ". Se divide entre " + a + ": x = " + (c + b) + "/" + a + " = " + x + "."
      };
    },
    function sistemaEcuacionesGen() {
      var x = ri(2, 15), y = ri(2, 15);
      var c1 = x + y, c2 = x - y;
      var o = buildOptions(x * y, [
        function () { return x + y; }, function () { return x - y; }, function () { return (x + y) * 2; }
      ]);
      return {
        q: "Resolviendo el sistema x + y = " + c1 + ", x − y = " + c2 + ", ¿cuál es el producto x·y?",
        options: o.options, correct: o.correct,
        explain: "Sumando ambas ecuaciones: 2x = " + (c1 + c2) + " → x = " + x + ". Entonces y = " + y + ". Producto = " + x + "×" + y + " = " + (x * y) + "."
      };
    }
  ];

  function generateMatematicas(count) {
    var out = [];
    var seen = {};
    var guard = 0;
    while (out.length < count && guard < count * 8) {
      guard++;
      var fam = pick(matematicasFamilies);
      var item = fam();
      if (!item || seen[item.q]) continue;
      seen[item.q] = true;
      out.push(item);
    }
    return out;
  }

  // ---------- FUNDAMENTOS (refuerzo) ----------
  var fundamentosFamilies = [
    function despejeBasico() {
      var a = ri(2, 9), b = ri(1, 20);
      var x = ri(2, 15);
      var c = a * x + b;
      return {
        q: "Despejar x: " + a + "x + " + b + " = " + c,
        options: [String(x), String(x + 1), String(x - 1), String(Math.round(c / a))].filter(function (v, i, arr) { return arr.indexOf(v) === i; }).concat([String(x + 2)]).slice(0, 4),
        correct: 0,
        explain: "Paso 1: se resta " + b + " en ambos lados → " + a + "x = " + (c - b) + ". Paso 2: se divide entre " + a + " → x = " + (c - b) + "/" + a + " = " + x + "."
      };
    },
    function inecuacionBasica() {
      var a = ri(2, 6), b = ri(1, 15), sol = ri(-5, 10);
      var c = a * sol + b;
      var op = pick([">", "<", "≥", "≤"]);
      return {
        q: "Resolver: " + a + "x + " + b + " " + op + " " + c,
        options: ["x " + op + " " + sol, "x " + (op === ">" || op === "≥" ? "<" : ">") + " " + sol, "x " + op + " " + (sol + 2), "x = " + sol],
        correct: 0,
        explain: "Paso 1: se resta " + b + " → " + a + "x " + op + " " + (c - b) + ". Paso 2: se divide entre " + a + " (positivo, el sentido no cambia) → x " + op + " " + sol + "."
      };
    },
    function fraccionSimplificar() {
      var factor = ri(2, 7);
      var nRed = ri(1, 7), dRed = ri(nRed + 1, nRed + 7);
      function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
      var g = gcd(nRed, dRed); nRed /= g; dRed /= g;
      var n = nRed * factor, d = dRed * factor;
      return {
        q: "Simplificar: " + n + "/" + d,
        options: [nRed + "/" + dRed, n + "/" + d, (nRed + 1) + "/" + dRed, nRed + "/" + (dRed - 1 > 0 ? dRed - 1 : dRed + 1)],
        correct: 0,
        explain: "Paso 1: buscar el máximo común divisor de " + n + " y " + d + " → es " + factor + ". Paso 2: dividir ambos términos entre " + factor + " → " + nRed + "/" + dRed + "."
      };
    },
    function negativosSuma() {
      var a = ri(-20, -1), b = ri(1, 20), c = ri(-15, -1);
      var result = a + b + c;
      return {
        q: "Calcular: " + a + " + (" + b + ") + (" + c + ")",
        options: [String(result), String(result + 2), String(result - 2), String(-result)],
        correct: 0,
        explain: "Paso 1: " + a + " + " + b + " = " + (a + b) + ". Paso 2: " + (a + b) + " + (" + c + ") = " + result + ". Recuerda: sumar un negativo equivale a restar su valor absoluto."
      };
    },
    function negativosResta() {
      var a = ri(-15, 15), b = ri(-15, 15);
      var result = a - b;
      return {
        q: "Calcular: (" + a + ") − (" + b + ")",
        options: [String(result), String(a + b), String(-result), String(result + 2)],
        correct: 0,
        explain: "Restar un número es sumar su opuesto: (" + a + ") − (" + b + ") = (" + a + ") + (" + (-b) + ") = " + result + "."
      };
    },
    function geometriaPerimetro() {
      var base = ri(3, 20), altura = ri(3, 20);
      var perimetro = 2 * (base + altura);
      return {
        q: "Hallar el perímetro de un rectángulo de lados " + base + " cm y " + altura + " cm.",
        options: [perimetro + " cm", (perimetro + 2) + " cm", (base * altura) + " cm", (perimetro - 2) + " cm"],
        correct: 0,
        explain: "Perímetro del rectángulo = 2 × (base + altura) = 2 × (" + base + " + " + altura + ") = " + perimetro + " cm."
      };
    },
    function geometriaPitagoras() {
      var ternas = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17]];
      var t = pick(ternas);
      return {
        q: "Un triángulo rectángulo tiene catetos de " + t[0] + " cm y " + t[1] + " cm. ¿Cuánto mide la hipotenusa?",
        options: [t[2] + " cm", (t[2] + 1) + " cm", (t[0] + t[1]) + " cm", (t[2] - 1) + " cm"],
        correct: 0,
        explain: "Por el teorema de Pitágoras: c² = " + t[0] + "² + " + t[1] + "² = " + (t[0] * t[0]) + " + " + (t[1] * t[1]) + " = " + (t[2] * t[2]) + " → c = √" + (t[2] * t[2]) + " = " + t[2] + " cm."
      };
    }
  ];

  function generateFundamentos(count) {
    var out = [];
    var seen = {};
    var guard = 0;
    while (out.length < count && guard < count * 8) {
      guard++;
      var fam = pick(fundamentosFamilies);
      var item = fam();
      if (!item || seen[item.q]) continue;
      seen[item.q] = true;
      out.push(item);
    }
    return out;
  }

  window.QUESTION_GENERATORS = {
    numerico: generateNumerico,
    matematicas: generateMatematicas,
    fundamentos: generateFundamentos,
    logico: generateLogico,
    verbal: generateVerbal
  };

  window.FUNDAMENTOS_EXAMPLES = [
    { title: "Despejar una variable en una ecuación",
      steps: [
        "Ejemplo: resolver 3x + 5 = 20",
        "Paso 1 — Aislar el término con x: se resta 5 a ambos lados de la igualdad: 3x = 20 − 5 = 15",
        "Paso 2 — Despejar x: se divide ambos lados entre el coeficiente de x (3): x = 15/3 = 5",
        "Comprobación: 3×5 + 5 = 15+5 = 20 ✓" ] },
    { title: "Resolver una inecuación",
      steps: [
        "Ejemplo: resolver 2x − 4 > 6",
        "Paso 1 — Sumar 4 a ambos lados: 2x > 10",
        "Paso 2 — Dividir entre 2 (positivo, el sentido de la desigualdad NO cambia): x > 5",
        "Regla clave: si divides o multiplicas ambos lados por un número NEGATIVO, el signo de la desigualdad se invierte." ] },
    { title: "Simplificar una fracción",
      steps: [
        "Ejemplo: simplificar 18/24",
        "Paso 1 — Hallar el máximo común divisor (MCD) de 18 y 24: MCD(18,24) = 6",
        "Paso 2 — Dividir numerador y denominador entre el MCD: 18/6 = 3, 24/6 = 4",
        "Resultado: 18/24 = 3/4" ] },
    { title: "Sumar y restar números negativos",
      steps: [
        "Ejemplo: calcular −8 + 3 − (−5)",
        "Paso 1 — Restar un negativo equivale a sumar su opuesto: −(−5) = +5",
        "Paso 2 — La expresión queda: −8 + 3 + 5",
        "Paso 3 — Sumar en orden: −8 + 3 = −5; luego −5 + 5 = 0",
        "Resultado: 0" ] },
    { title: "Área y perímetro básicos",
      steps: [
        "Rectángulo: Área = base × altura; Perímetro = 2 × (base + altura)",
        "Triángulo: Área = (base × altura) / 2",
        "Círculo: Área = π × radio²; Circunferencia = 2 × π × radio",
        "Ejemplo: un rectángulo de 6 cm × 4 cm tiene área = 24 cm² y perímetro = 20 cm." ] },
    { title: "Teorema de Pitágoras",
      steps: [
        "En todo triángulo rectángulo: (hipotenusa)² = (cateto 1)² + (cateto 2)²",
        "Ejemplo: catetos de 6 y 8 → hipotenusa² = 6² + 8² = 36 + 64 = 100",
        "Hipotenusa = √100 = 10" ] }
  ];

  // ---------- RAZONAMIENTO LÓGICO (generador paramétrico) ----------
  function shuffleArr(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  var categoryTriples = [
    ["ingenieros", "profesionales", "personas responsables"],
    ["gatos", "felinos", "mamíferos"],
    ["rosas", "flores", "plantas"],
    ["triángulos", "polígonos", "figuras geométricas"],
    ["médicos", "científicos", "personas cultas"],
    ["perros", "animales domésticos", "seres vivos"],
    ["poetas", "artistas", "personas sensibles"],
    ["abogados", "profesionales", "ciudadanos"],
    ["manzanas", "frutas", "alimentos"],
    ["pinos", "árboles", "plantas"],
    ["violinistas", "músicos", "artistas"],
    ["rectángulos", "cuadriláteros", "polígonos"],
    ["delfines", "mamíferos", "seres vivos"],
    ["profesores", "educadores", "profesionales"],
    ["tulipanes", "flores", "plantas"]
  ];

  function silogismoTransitivo() {
    var t = pick(categoryTriples);
    var opts = shuffleArr(["Todo " + t[0] + " es " + t[2], "Todo " + t[2] + " es " + t[0], "Ningún " + t[0] + " es " + t[2], "Algunos " + t[0] + " no son " + t[2]]);
    return {
      q: "Premisa 1: Todo " + t[0] + " es " + t[1] + ". Premisa 2: Todo " + t[1] + " es " + t[2] + ". ¿Qué se concluye?",
      options: opts, correct: opts.indexOf("Todo " + t[0] + " es " + t[2]),
      explain: "Por transitividad de la inclusión de conjuntos: " + t[0] + " ⊆ " + t[1] + " ⊆ " + t[2] + ". Por lo tanto, todo " + t[0] + " es " + t[2] + "."
    };
  }

  var negationPairs = [
    ["estudiantes", "aprobaron el examen"], ["empleados", "llegaron tarde"],
    ["científicos", "publicaron un artículo"], ["atletas", "ganaron una medalla"],
    ["turistas", "visitaron el museo"], ["invitados", "confirmaron su asistencia"],
    ["pacientes", "recibieron el tratamiento"], ["vendedores", "cumplieron la meta"],
    ["actores", "memorizaron el guion"], ["agricultores", "perdieron la cosecha"],
    ["programadores", "resolvieron el error"], ["jueces", "firmaron el fallo"]
  ];

  function negacionTodos() {
    var p = pick(negationPairs);
    var opts = shuffleArr(["Ninguno de los " + p[0] + " " + p[1], "Algunos de los " + p[0] + " no " + p[1], "Todos los " + p[0] + " no " + p[1], "Alguno de los " + p[0] + " " + p[1]]);
    return {
      q: "¿Cuál es la negación de \"Todos los " + p[0] + " " + p[1] + "\"?",
      options: opts, correct: opts.indexOf("Algunos de los " + p[0] + " no " + p[1]),
      explain: "La negación de \"Todos son A\" es \"Algunos no son A\": al menos uno de los " + p[0] + " no " + p[1] + "."
    };
  }

  function negacionNinguno() {
    var p = pick(negationPairs);
    var opts = shuffleArr(["Todos los " + p[0] + " " + p[1], "Algunos de los " + p[0] + " " + p[1], "Ninguno de los " + p[0] + " no " + p[1], "Todos los " + p[0] + " no " + p[1]]);
    return {
      q: "¿Cuál es la negación de \"Ninguno de los " + p[0] + " " + p[1] + "\"?",
      options: opts, correct: opts.indexOf("Algunos de los " + p[0] + " " + p[1]),
      explain: "La negación de \"Ninguno es A\" es \"Algunos son A\": al menos uno de los " + p[0] + " " + p[1] + "."
    };
  }

  var namesPool = ["Ana", "Beto", "Carla", "Diego", "Elena", "Fabio", "Gina", "Hugo", "Iris", "Julio"];

  function ordenPosicionGen() {
    var names = shuffleArr(namesPool).slice(0, 4);
    var verbo = pick(["es más alto que", "tiene más experiencia que", "llegó antes que", "vive más arriba que", "obtuvo mejor puntaje que"]);
    var clues = names[0] + " " + verbo + " " + names[1] + ". " + names[1] + " " + verbo + " " + names[2] + ". " + names[2] + " " + verbo + " " + names[3] + ".";
    var opts = shuffleArr(names.slice());
    return {
      q: clues + " ¿Quién ocupa el primer lugar en esa comparación?",
      options: opts, correct: opts.indexOf(names[0]),
      explain: "Ordenando las comparaciones se obtiene: " + names.join(" > ") + ". Por lo tanto, " + names[0] + " ocupa el primer lugar."
    };
  }

  function edadesTripleLogico() {
    var y = ri(5, 20);
    var factor = pick([2, 3]);
    var x = factor * y;
    var suma = x + y;
    var nombreMayor = pick(["Marco", "Iván", "Rodrigo", "Esteban"]);
    var nombreMenor = pick(["Sofía", "Lucía", "Camila", "Valeria"]);
    var o = buildOptions(y, [
      function () { return x; }, function () { return suma; }, function () { return y + ri(1, 3); }
    ]);
    return {
      q: "La edad de " + nombreMayor + " es el " + (factor === 2 ? "doble" : "triple") + " de la edad de " + nombreMenor + ". Si la suma de ambas edades es " + suma + ", ¿qué edad tiene " + nombreMenor + "?",
      options: o.options.map(function (v) { return v + " años"; }), correct: o.correct,
      explain: "Sea " + nombreMenor + " = y, " + nombreMayor + " = " + factor + "y. y + " + factor + "y = " + suma + " → " + (factor + 1) + "y = " + suma + " → y = " + y + " años."
    };
  }

  function serieLetrasGen() {
    var startCode = ri(65, 70);
    var step = ri(1, 4);
    var letters = [];
    for (var i = 0; i < 5; i++) letters.push(String.fromCharCode(startCode + step * i));
    var nextCode = startCode + step * 5;
    if (nextCode > 90) return null;
    var next = String.fromCharCode(nextCode);
    var distractorCodes = [nextCode - 2, nextCode - 1, nextCode + 1, nextCode + 2].filter(function (c) { return c >= 65 && c <= 90 && c !== nextCode; });
    var distractors = shuffleArr(distractorCodes).slice(0, 3).map(function (c) { return String.fromCharCode(c); });
    while (distractors.length < 3) distractors.push(String.fromCharCode(70 + distractors.length));
    var opts = shuffleArr([next].concat(distractors));
    return {
      q: "¿Qué letra continúa la serie: " + letters.join(", ") + ", ...?",
      options: opts, correct: opts.indexOf(next),
      explain: "Cada letra avanza " + step + " posiciones en el abecedario. Desde " + letters[4] + " avanzar " + step + " posiciones da " + next + "."
    };
  }

  var logicoFamilies = [silogismoTransitivo, negacionTodos, negacionNinguno, ordenPosicionGen, edadesTripleLogico, serieLetrasGen];

  function generateLogico(count) {
    var out = [];
    var seen = {};
    var guard = 0;
    while (out.length < count && guard < count * 8) {
      guard++;
      var fam = pick(logicoFamilies);
      var item = fam();
      if (!item || !item.options || item.correct === undefined || item.correct < 0) continue;
      if (seen[item.q]) continue;
      seen[item.q] = true;
      out.push(item);
    }
    return out;
  }

  // ---------- RAZONAMIENTO VERBAL (generador paramétrico) ----------
  var analogyPool = [
    ["Médico", "hospital"], ["Maestro", "escuela"], ["Piloto", "avión"], ["Juez", "tribunal"],
    ["Cocinero", "cocina"], ["Pintor", "lienzo"], ["Escultor", "mármol"], ["Termómetro", "temperatura"],
    ["Balanza", "peso"], ["Reloj", "tiempo"], ["Brújula", "dirección"], ["Oído", "escuchar"],
    ["Ojo", "ver"], ["Autor", "libro"], ["Compositor", "canción"], ["Rueda", "coche"],
    ["Ala", "avión"], ["Abeja", "panal"], ["Pez", "agua"], ["Ave", "nido"],
    ["Granjero", "campo"], ["Bibliotecario", "biblioteca"], ["Sastre", "traje"], ["Carpintero", "madera"]
  ];

  function analogiaGen() {
    var pairs = shuffleArr(analogyPool);
    var stem = pairs[0], answer = pairs[1];
    var distract = [pairs[2][1], pairs[3][1], pairs[4][1]];
    var opts = shuffleArr([answer[1]].concat(distract));
    return {
      q: stem[0] + " es a " + stem[1] + " como " + answer[0] + " es a...",
      options: opts, correct: opts.indexOf(answer[1]),
      explain: "La relación entre " + stem[0] + " y " + stem[1] + " es la misma que entre " + answer[0] + " y " + answer[1] + "."
    };
  }

  var wordBank = [
    { word: "intrépido", syn: "audaz", opp: "cobarde" }, { word: "parco", syn: "sobrio", opp: "exagerado" },
    { word: "efímero", syn: "pasajero", opp: "duradero" }, { word: "elocuente", syn: "persuasivo", opp: "confuso" },
    { word: "magnánimo", syn: "generoso", opp: "mezquino" }, { word: "austero", syn: "moderado", opp: "lujoso" },
    { word: "ínfimo", syn: "mínimo", opp: "enorme" }, { word: "vulnerable", syn: "frágil", opp: "resistente" },
    { word: "prolijo", syn: "detallado", opp: "conciso" }, { word: "veraz", syn: "sincero", opp: "mendaz" },
    { word: "tenaz", syn: "perseverante", opp: "desistido" }, { word: "gregario", syn: "sociable", opp: "solitario" },
    { word: "lúcido", syn: "claro", opp: "confuso" }, { word: "pródigo", syn: "generoso", opp: "tacaño" },
    { word: "taciturno", syn: "callado", opp: "locuaz" }, { word: "ecuánime", syn: "imparcial", opp: "parcial" },
    { word: "insigne", syn: "ilustre", opp: "desconocido" }, { word: "sagaz", syn: "astuto", opp: "ingenuo" },
    { word: "opulento", syn: "rico", opp: "pobre" }, { word: "lánguido", syn: "débil", opp: "vigoroso" }
  ];

  function sinonimoGen() {
    var e = pick(wordBank);
    var distract = shuffleArr(wordBank.filter(function (x) { return x.word !== e.word; })).slice(0, 3).map(function (x) { return x.syn; });
    var opts = shuffleArr([e.syn].concat(distract));
    return {
      q: "Selecciona el sinónimo de \"" + e.word + "\".",
      options: opts, correct: opts.indexOf(e.syn),
      explain: "\"" + e.word + "\" significa algo muy cercano a \"" + e.syn + "\"."
    };
  }

  function antonimoGen() {
    var e = pick(wordBank);
    var distract = shuffleArr(wordBank.filter(function (x) { return x.word !== e.word; })).slice(0, 3).map(function (x) { return x.opp; });
    var opts = shuffleArr([e.opp].concat(distract));
    return {
      q: "Selecciona el antónimo de \"" + e.word + "\".",
      options: opts, correct: opts.indexOf(e.opp),
      explain: "\"" + e.word + "\" es lo opuesto de \"" + e.opp + "\"."
    };
  }

  var verbalFamilies = [analogiaGen, analogiaGen, sinonimoGen, antonimoGen];

  function generateVerbal(count) {
    var out = [];
    var seen = {};
    var guard = 0;
    while (out.length < count && guard < count * 8) {
      guard++;
      var fam = pick(verbalFamilies);
      var item = fam();
      if (!item || !item.options || item.correct === undefined || item.correct < 0) continue;
      if (seen[item.q]) continue;
      seen[item.q] = true;
      out.push(item);
    }
    return out;
  }
})();
