// Convierte un string con fracciones "a/b" y raíces "√(...)" o "√123" en
// una lista de segmentos para render bonito. Los exponentes/subíndices ya
// usan caracteres unicode (², ³, ₂, ₃...) que se ven elevados/bajados de forma
// nativa, así que no necesitan tratamiento especial aquí.
(function () {
  var TOKEN = "[0-9A-Za-zÁÉÍÓÚáéíóúÑñ²³¹⁰⁴⁵⁶⁷⁸⁹⁻⁺−\\.]+";
  var RE = new RegExp(
    "√\\(([^)]+)\\)" +
    "|√(" + TOKEN + ")" +
    "|(" + TOKEN + ")\\/(" + TOKEN + ")",
    "g"
  );

  function parseMathSegments(str) {
    if (str === null || str === undefined) return [];
    var segs = [];
    var last = 0;
    var m;
    RE.lastIndex = 0;
    while ((m = RE.exec(str)) !== null) {
      if (m.index > last) segs.push({ isText: true, value: str.slice(last, m.index) });
      if (m[1] !== undefined) segs.push({ isSqrt: true, value: m[1] });
      else if (m[2] !== undefined) segs.push({ isSqrt: true, value: m[2] });
      else segs.push({ isFrac: true, num: m[3], den: m[4] });
      last = RE.lastIndex;
      if (m.index === RE.lastIndex) RE.lastIndex++;
    }
    if (last < str.length) segs.push({ isText: true, value: str.slice(last) });
    if (segs.length === 0) segs.push({ isText: true, value: str });
    return segs;
  }

  window.parseMathSegments = parseMathSegments;
})();
