// BANCO USECIPOL 2026 — 4 componentes × 20 preguntas por intento.
// Cada componente tiene un POOL amplio: en cada intento se sortean 20, así que
// las preguntas cambian en cada recarga. Todas las respuestas numéricas son
// enteros (o radicales exactos) obtenidos de datos simplificables sin calculadora.
//
// Origen [D] = ejercicio del documento del usuario. [V] = variante con datos nuevos.
// Notación: [[a/b]] fracción · ^(n) exponente · _(n) subíndice · sqrt(x) raíz
window.BANCO_USECIPOL = {
  meta: {
    title: "Examen de Admisión USECIPOL 2026",
    subtitle: "Evaluación de Capacidades y Competencias · 80 preguntas",
    totalMinutes: 120,
    perSection: 20
  },
  sections: [

    // ==================== RAZONAMIENTO NUMÉRICO ====================
    {
      key: "numerico", title: "Razonamiento Numérico",
      focus: "Combinatoria, regla de tres compuesta, porcentajes, razones, edades, conjuntos, geometría y planteo de ecuaciones.",
      pool: [
        { q: "¿Cuántas formas hay de elegir 2 estudiantes de un grupo de 6?", options: ["15", "12", "20", "30"], correct: 0,
          hint: "El orden no importa: elegir a Ana y Luis es lo mismo que Luis y Ana.",
          steps: [
            { t: "dato", label: "Datos", text: "Se eligen 2 de un total de 6, y el orden NO importa." },
            { t: "plantea", label: "Plantea", text: "Es una combinación: C(n,2) = [[n(n−1)/2]]" },
            { t: "resuelve", label: "Calcula", text: "C(6,2) = (6 × 5) ÷ 2 = 30 ÷ 2" },
            { t: "resultado", label: "Respuesta", text: "15 formas." }
          ],
          quick: ["Fórmula exprés para parejas: n(n−1)÷2.", "6 × 5 ÷ 2 = 15."] },

        { q: "¿Cuántas formas hay de elegir 2 delegados de un grupo de 8?", options: ["28", "16", "56", "64"], correct: 0,
          hint: "Mismo caso de parejas: aplica n(n−1)÷2.",
          steps: [
            { t: "dato", label: "Datos", text: "Se eligen 2 de 8; el orden no importa." },
            { t: "plantea", label: "Plantea", text: "C(8,2) = [[8×7/2]]" },
            { t: "resuelve", label: "Calcula", text: "56 ÷ 2 = 28" },
            { t: "resultado", label: "Respuesta", text: "28 formas." }
          ],
          quick: ["n(n−1)÷2 = 8×7÷2 = 28."] },

        { q: "¿De cuántas maneras se puede formar un comité de 3 personas entre 7 candidatos?", options: ["35", "21", "42", "210"], correct: 0,
          hint: "Para grupos de 3 se divide entre 6, no entre 2.",
          steps: [
            { t: "dato", label: "Datos", text: "Se eligen 3 de 7, sin importar el orden." },
            { t: "plantea", label: "Plantea", text: "C(7,3) = [[7×6×5/3×2×1]]" },
            { t: "resuelve", label: "Calcula", text: "Numerador: 7 × 6 × 5 = 210. Denominador: 3! = 6. Entonces 210 ÷ 6" },
            { t: "resultado", label: "Respuesta", text: "35 maneras." }
          ],
          quick: ["C(n,3) = n(n−1)(n−2) ÷ 6.", "210 ÷ 6 = 35."] },

        { q: "Una construcción la pueden realizar 32 obreros en cierto tiempo. ¿Cuántos obreros se necesitan para construir el 25 % de esa obra en el 80 % del tiempo anterior, trabajando el 50 % de horas diarias?", options: ["20 obreros", "15 obreros", "16 obreros", "13 obreros"], correct: 0,
          hint: "La obra se reduce (menos obreros), pero el tiempo y las horas también (más obreros).",
          steps: [
            { t: "dato", label: "Datos", text: "Base: 32 obreros. Obra = 25 % (0,25). Tiempo = 80 % (0,8). Horas diarias = 50 % (0,5)." },
            { t: "plantea", label: "Plantea", text: "Obreros = 32 × [[obra/tiempo × horas]] — la obra va arriba porque es directamente proporcional; tiempo y horas van abajo porque son inversas." },
            { t: "resuelve", label: "Sustituye", text: "Obreros = 32 × [[0,25/0,8 × 0,5]] = 32 × [[0,25/0,4]]" },
            { t: "resuelve", label: "Calcula", text: "32 × 0,25 = 8; luego 8 ÷ 0,4 = 20" },
            { t: "resultado", label: "Respuesta", text: "Se necesitan 20 obreros." }
          ],
          quick: ["Obra ARRIBA (directa); tiempo y horas ABAJO (inversas).", "32 × 0,25 ÷ (0,8 × 0,5) = 8 ÷ 0,4 = 20."] },

        { q: "Una obra la realizan 40 obreros en cierto tiempo. ¿Cuántos obreros se requieren para hacer el 50 % de la obra en el 80 % del tiempo, trabajando el 50 % de horas diarias?", options: ["50 obreros", "40 obreros", "25 obreros", "32 obreros"], correct: 0,
          hint: "Aunque la obra baja a la mitad, el tiempo y las horas se reducen más aún.",
          steps: [
            { t: "dato", label: "Datos", text: "Base: 40 obreros. Obra = 0,5. Tiempo = 0,8. Horas = 0,5." },
            { t: "plantea", label: "Plantea", text: "Obreros = 40 × [[0,5/0,8 × 0,5]]" },
            { t: "resuelve", label: "Calcula", text: "Denominador: 0,8 × 0,5 = 0,4. Numerador: 40 × 0,5 = 20. Entonces 20 ÷ 0,4" },
            { t: "resultado", label: "Respuesta", text: "50 obreros." }
          ],
          quick: ["40 × 0,5 ÷ 0,4 = 20 ÷ 0,4 = 50.", "Se necesitan MÁS obreros porque el tiempo disponible cayó mucho."] },

        { q: "¿Qué porcentaje representa la cantidad 6 con respecto a un total de 50 unidades?", options: ["12 %", "15 %", "10 %", "6 %"], correct: 0,
          hint: "Parte sobre total, y el resultado por 100.",
          steps: [
            { t: "dato", label: "Datos", text: "Parte = 6; total = 50." },
            { t: "plantea", label: "Plantea", text: "Porcentaje = [[parte/total]] × 100" },
            { t: "resuelve", label: "Calcula", text: "[[6/50]] × 100. Atajo: 6 ÷ 50 = 0,12" },
            { t: "resultado", label: "Respuesta", text: "12 %." }
          ],
          quick: ["Con total 50, duplica la parte: 6 × 2 = 12 %.", "Funciona porque 50 es la mitad de 100."] },

        { q: "¿Qué porcentaje representa 9 respecto de un total de 60 unidades?", options: ["15 %", "12 %", "9 %", "18 %"], correct: 0,
          hint: "Simplifica la fracción antes de multiplicar por 100.",
          steps: [
            { t: "dato", label: "Datos", text: "Parte = 9; total = 60." },
            { t: "plantea", label: "Plantea", text: "Porcentaje = [[9/60]] × 100" },
            { t: "resuelve", label: "Simplifica", text: "[[9/60]] se simplifica dividiendo entre 3: [[3/20]]. Y [[3/20]] × 100 = 3 × 5" },
            { t: "resultado", label: "Respuesta", text: "15 %." }
          ],
          quick: ["Simplifica primero: 9/60 = 3/20.", "3/20 × 100 = 15 %."] },

        { q: "En una evaluación de 72 preguntas, un aspirante falló 18. ¿Qué porcentaje falló?", options: ["25 %", "20 %", "18 %", "30 %"], correct: 0,
          hint: "18 sobre 72 es una fracción muy simplificable.",
          steps: [
            { t: "dato", label: "Datos", text: "Falladas = 18; total = 72." },
            { t: "plantea", label: "Plantea", text: "Porcentaje = [[18/72]] × 100" },
            { t: "resuelve", label: "Simplifica", text: "18 y 72 se dividen entre 18: [[1/4]]. Y [[1/4]] × 100 = 25" },
            { t: "resultado", label: "Respuesta", text: "25 %." }
          ],
          quick: ["Reconoce 18/72 = 1/4 al instante.", "1/4 = 25 %. Memoriza: 1/2=50 %, 1/4=25 %, 1/5=20 %, 1/8=12,5 %."] },

        { q: "Camila ocupó el noveno lugar tanto en la lista de mejores promedios como en la de peores promedios de su grupo. ¿Cuántos estudiantes rindieron la prueba?", options: ["17", "15", "18", "20"], correct: 0,
          hint: "Camila se cuenta en ambas listas, así que no la sumes dos veces.",
          steps: [
            { t: "dato", label: "Datos", text: "Camila es 9.ª contando desde el mejor y también 9.ª contando desde el peor." },
            { t: "plantea", label: "Plantea", text: "Delante de ella hay 8 estudiantes y detrás otros 8. Total = 8 + 1 (Camila) + 8" },
            { t: "resuelve", label: "Calcula", text: "Fórmula directa: total = 9 + 9 − 1 = 17. Se resta 1 porque Camila queda contada en las dos listas." },
            { t: "trampa", label: "Cuidado", text: "Sumar 9 + 9 = 18 es el error típico: contaría a Camila dos veces." },
            { t: "resultado", label: "Respuesta", text: "17 estudiantes." }
          ],
          quick: ["Fórmula: posición desde arriba + posición desde abajo − 1.", "9 + 9 − 1 = 17."] },

        { q: "En una fila, Andrés ocupa el lugar 12 contando desde el frente y también el lugar 12 contando desde atrás. ¿Cuántas personas hay en la fila?", options: ["23", "24", "22", "25"], correct: 0,
          hint: "Aplica la misma resta: la persona se cuenta una sola vez.",
          steps: [
            { t: "dato", label: "Datos", text: "Andrés es el 12.º desde el frente y el 12.º desde atrás." },
            { t: "plantea", label: "Plantea", text: "Total = 12 + 12 − 1" },
            { t: "resuelve", label: "Calcula", text: "24 − 1 = 23. Delante hay 11 personas, detrás 11, más Andrés: 11 + 1 + 11 = 23." },
            { t: "resultado", label: "Respuesta", text: "23 personas." }
          ],
          quick: ["Siempre resta 1 al sumar las dos posiciones: 12 + 12 − 1 = 23."] },

        { q: "La edad de dos personas está en relación de 3 a 5. Si la suma de las dos edades es 72 años, ¿qué edad tiene la de menos años?", options: ["27", "18", "36", "21"], correct: 0,
          hint: "Suma las partes de la razón y reparte el total entre ellas.",
          steps: [
            { t: "dato", label: "Datos", text: "Razón 3 : 5; suma de edades = 72." },
            { t: "plantea", label: "Plantea", text: "Las edades son 3k y 5k. Entonces 3k + 5k = 72, es decir 8k = 72." },
            { t: "resuelve", label: "Halla k", text: "k = 72 ÷ 8 = 9 (el valor de una parte)." },
            { t: "resuelve", label: "Calcula la menor", text: "Edad menor = 3k = 3 × 9 = 27. Comprobación: la mayor es 5 × 9 = 45, y 27 + 45 = 72 ✓" },
            { t: "resultado", label: "Respuesta", text: "27 años." }
          ],
          quick: ["Suma las partes (3+5=8) y divide el total: 72 ÷ 8 = 9.", "Multiplica por la parte pedida: 3 × 9 = 27."] },

        { q: "Las edades de dos hermanos están en relación de 2 a 7. Si suman 81 años, ¿qué edad tiene el menor?", options: ["18", "27", "21", "24"], correct: 0,
          hint: "El total se reparte en 2 + 7 partes iguales.",
          steps: [
            { t: "dato", label: "Datos", text: "Razón 2 : 7; suma = 81." },
            { t: "plantea", label: "Plantea", text: "2k + 7k = 81 ⟹ 9k = 81" },
            { t: "resuelve", label: "Calcula", text: "k = 9. Edad menor = 2 × 9 = 18. Verificación: 7 × 9 = 63, y 18 + 63 = 81 ✓" },
            { t: "resultado", label: "Respuesta", text: "18 años." }
          ],
          quick: ["81 ÷ (2+7) = 9; luego 2 × 9 = 18."] },

        { q: "Dos cantidades están en relación de 4 a 5 y suman 108. ¿Cuál es la menor?", options: ["48", "60", "54", "45"], correct: 0,
          hint: "Nueve partes en total, igual que en el caso anterior.",
          steps: [
            { t: "dato", label: "Datos", text: "Razón 4 : 5; suma = 108." },
            { t: "plantea", label: "Plantea", text: "4k + 5k = 108 ⟹ 9k = 108" },
            { t: "resuelve", label: "Calcula", text: "k = 12. Menor = 4 × 12 = 48. Verificación: 5 × 12 = 60, y 48 + 60 = 108 ✓" },
            { t: "resultado", label: "Respuesta", text: "48." }
          ],
          quick: ["108 ÷ 9 = 12; luego 4 × 12 = 48."] },

        { q: "Una cancha rectangular mide de ancho 6 m menos que de largo y su perímetro alcanza 44 m. ¿Cuáles son sus medidas?", options: ["14 m y 8 m", "13 m y 7 m", "15 m y 9 m", "12 m y 6 m"], correct: 0,
          hint: "Expresa el ancho en función del largo y usa la fórmula del perímetro.",
          steps: [
            { t: "dato", label: "Datos", text: "Ancho = largo − 6; perímetro = 44 m." },
            { t: "plantea", label: "Plantea", text: "Si el largo es L, el ancho es L − 6. Perímetro = 2(L + ancho) = 44" },
            { t: "resuelve", label: "Desarrolla", text: "2(L + L − 6) = 44 ⟹ 2(2L − 6) = 44 ⟹ 4L − 12 = 44" },
            { t: "resuelve", label: "Despeja L", text: "4L = 56 ⟹ L = 14. Entonces el ancho = 14 − 6 = 8." },
            { t: "verifica", label: "Verifica", text: "Perímetro = 2(14 + 8) = 2 × 22 = 44 ✓" },
            { t: "resultado", label: "Respuesta", text: "14 m de largo y 8 m de ancho." }
          ],
          quick: ["Divide el perímetro entre 2: 44 ÷ 2 = 22 = largo + ancho.", "Con suma 22 y diferencia 6: mayor = (22+6)÷2 = 14; menor = (22−6)÷2 = 8."] },

        { q: "Un terreno rectangular tiene 4 m más de largo que de ancho y su perímetro es de 52 m. ¿Cuáles son sus medidas?", options: ["15 m y 11 m", "16 m y 12 m", "14 m y 10 m", "18 m y 14 m"], correct: 0,
          hint: "Usa el truco de semiperímetro con suma y diferencia.",
          steps: [
            { t: "dato", label: "Datos", text: "Largo = ancho + 4; perímetro = 52 m." },
            { t: "plantea", label: "Plantea", text: "Semiperímetro: largo + ancho = 52 ÷ 2 = 26. Y su diferencia es 4." },
            { t: "resuelve", label: "Aplica suma y diferencia", text: "Mayor = (26 + 4) ÷ 2 = 15. Menor = (26 − 4) ÷ 2 = 11." },
            { t: "verifica", label: "Verifica", text: "2(15 + 11) = 2 × 26 = 52 ✓ y 15 − 11 = 4 ✓" },
            { t: "resultado", label: "Respuesta", text: "15 m y 11 m." }
          ],
          quick: ["Método suma-diferencia: mayor = (S+D)÷2, menor = (S−D)÷2.", "S = 52÷2 = 26, D = 4 ⟹ 15 y 11."] },

        { q: "Una persona parte del punto A y recorre 4 km al norte, 12 km al este y 12 km al norte hasta el punto B. ¿Cuál es la distancia en línea recta de A a B?", options: ["20 km", "22 km", "24 km", "28 km"], correct: 0,
          hint: "Suma los desplazamientos en la misma dirección y aplica Pitágoras.",
          steps: [
            { t: "dato", label: "Datos", text: "Recorridos: 4 km norte, 12 km este, 12 km norte." },
            { t: "plantea", label: "Suma por dirección", text: "Norte total = 4 + 12 = 16 km. Este total = 12 km. Ambos desplazamientos son perpendiculares." },
            { t: "resuelve", label: "Aplica Pitágoras", text: "d = sqrt(16^(2) + 12^(2)) = sqrt(256 + 144) = sqrt(400)" },
            { t: "resultado", label: "Respuesta", text: "20 km." }
          ],
          quick: ["Agrupa por dirección: 16 norte y 12 este.", "Reconoce la terna 12-16-20 (es 3-4-5 multiplicada por 4)."] },

        { q: "Un ciclista sale de A, avanza 2 km al norte, luego 12 km al este y finalmente 3 km al norte hasta B. ¿Cuál es la distancia de A a B en línea recta?", options: ["13 km", "15 km", "17 km", "12 km"], correct: 0,
          hint: "Otra terna pitagórica clásica aparece al agrupar las direcciones.",
          steps: [
            { t: "dato", label: "Datos", text: "2 km norte, 12 km este, 3 km norte." },
            { t: "plantea", label: "Suma por dirección", text: "Norte = 2 + 3 = 5 km. Este = 12 km." },
            { t: "resuelve", label: "Aplica Pitágoras", text: "d = sqrt(5^(2) + 12^(2)) = sqrt(25 + 144) = sqrt(169)" },
            { t: "resultado", label: "Respuesta", text: "13 km." }
          ],
          quick: ["Ternas que debes reconocer: 3-4-5, 5-12-13, 8-15-17, 7-24-25.", "5 y 12 ⟹ 13, sin calcular raíces."] },

        { q: "Un excursionista camina 3 km al sur, 15 km al oeste y 5 km al sur. ¿A qué distancia está de su punto de partida?", options: ["17 km", "19 km", "18 km", "23 km"], correct: 0,
          hint: "Agrupa, y busca la terna 8-15-17.",
          steps: [
            { t: "dato", label: "Datos", text: "3 km sur, 15 km oeste, 5 km sur." },
            { t: "plantea", label: "Suma por dirección", text: "Sur = 3 + 5 = 8 km. Oeste = 15 km." },
            { t: "resuelve", label: "Aplica Pitágoras", text: "d = sqrt(8^(2) + 15^(2)) = sqrt(64 + 225) = sqrt(289)" },
            { t: "resultado", label: "Respuesta", text: "17 km." }
          ],
          quick: ["8 y 15 forman la terna 8-15-17.", "No importa si es norte o sur: lo que cuenta es el desplazamiento neto."] },

        { q: "Dos cintas de 36 m y 48 m se quieren dividir en pedazos iguales y de la mayor longitud posible. ¿Cuál será la longitud de cada pedazo?", options: ["12 m", "6 m", "8 m", "16 m"], correct: 0,
          hint: "«Pedazos iguales lo más grandes posible» siempre indica máximo común divisor.",
          steps: [
            { t: "dato", label: "Datos", text: "Longitudes: 36 m y 48 m. Se piden trozos iguales, de longitud máxima y sin desperdicio." },
            { t: "plantea", label: "Plantea", text: "La medida buscada debe dividir exactamente a ambos números y ser la mayor posible: es el MCD." },
            { t: "resuelve", label: "Calcula el MCD", text: "36 = 2² × 3² y 48 = 2⁴ × 3. Factores comunes con menor exponente: 2² × 3 = 12." },
            { t: "verifica", label: "Verifica", text: "36 ÷ 12 = 3 trozos y 48 ÷ 12 = 4 trozos, ambos exactos ✓" },
            { t: "resultado", label: "Respuesta", text: "12 metros." }
          ],
          quick: ["Trozos iguales y máximos ⟹ MCD. Coincidencias o encuentros ⟹ MCM.", "MCD(36,48) = 12."] },

        { q: "Se desean cortar dos sogas de 48 m y 72 m en tramos iguales y del mayor tamaño posible. ¿Cuánto medirá cada tramo?", options: ["24 m", "12 m", "16 m", "36 m"], correct: 0,
          hint: "Mismo criterio: el mayor divisor común a ambos.",
          steps: [
            { t: "dato", label: "Datos", text: "48 m y 72 m, en tramos iguales y máximos." },
            { t: "plantea", label: "Plantea", text: "Se busca el MCD(48, 72)." },
            { t: "resuelve", label: "Calcula", text: "48 = 2⁴ × 3 y 72 = 2³ × 3². Comunes con menor exponente: 2³ × 3 = 24." },
            { t: "verifica", label: "Verifica", text: "48 ÷ 24 = 2 y 72 ÷ 24 = 3, ambos exactos ✓" },
            { t: "resultado", label: "Respuesta", text: "24 metros." }
          ],
          quick: ["MCD(48,72) = 24.", "Comprueba siempre que ambas divisiones den entero."] },

        { q: "¿Cuántos segundos hay en m minutos y s segundos?", options: ["60m + s", "m/60 + s", "3600m + s", "60m × s"], correct: 0,
          hint: "Convierte solo los minutos y luego suma los segundos que ya lo son.",
          steps: [
            { t: "dato", label: "Datos", text: "Se tienen m minutos más s segundos, y se pide el total en segundos." },
            { t: "plantea", label: "Plantea", text: "Cada minuto equivale a 60 segundos, así que m minutos son 60m segundos." },
            { t: "resuelve", label: "Suma", text: "Los s segundos ya están en la unidad pedida, así que solo se suman: 60m + s" },
            { t: "trampa", label: "Cuidado", text: "3600m sería para convertir HORAS a segundos, no minutos. Y dividir entre 60 haría lo contrario: pasar de segundos a minutos." },
            { t: "resultado", label: "Respuesta", text: "60m + s" }
          ],
          quick: ["Al pasar a una unidad MENOR se multiplica; a una MAYOR se divide.", "1 min = 60 s; 1 h = 3600 s."] },

        { q: "¿Cuántos minutos hay en h horas y m minutos?", options: ["60h + m", "h/60 + m", "3600h + m", "60h × m"], correct: 0,
          hint: "Solo hay que convertir las horas; los minutos ya están en la unidad pedida.",
          steps: [
            { t: "dato", label: "Datos", text: "h horas más m minutos, expresado todo en minutos." },
            { t: "plantea", label: "Plantea", text: "1 hora = 60 minutos, entonces h horas = 60h minutos." },
            { t: "resuelve", label: "Suma", text: "Total = 60h + m" },
            { t: "resultado", label: "Respuesta", text: "60h + m" }
          ],
          quick: ["Multiplica la unidad mayor por el factor de conversión y suma la menor tal cual."] },

        { q: "Un automóvil recorre un circuito triangular equilátero: el primer lado a 12 km/h, el segundo a 18 km/h y el tercero a 36 km/h. ¿Cuál es su velocidad media en todo el recorrido?", options: ["18 km/h", "20 km/h", "22 km/h", "21 km/h"], correct: 0,
          hint: "La velocidad media NO es el promedio de las velocidades cuando las distancias son iguales.",
          steps: [
            { t: "dato", label: "Datos", text: "Tres tramos de IGUAL longitud (triángulo equilátero), recorridos a 12, 18 y 36 km/h." },
            { t: "trampa", label: "Cuidado", text: "El promedio simple (12+18+36)÷3 = 22 es incorrecto: en cada tramo se invierte un tiempo distinto." },
            { t: "plantea", label: "Plantea", text: "Con distancias iguales se usa la media ARMÓNICA: v = [[3/1/12 + 1/18 + 1/36]]" },
            { t: "resuelve", label: "Suma las fracciones", text: "Denominador común 36: [[1/12]] = [[3/36]], [[1/18]] = [[2/36]], [[1/36]] = [[1/36]]. Suma = [[6/36]] = [[1/6]]" },
            { t: "resuelve", label: "Divide", text: "v = 3 ÷ [[1/6]] = 3 × 6 = 18" },
            { t: "resultado", label: "Respuesta", text: "18 km/h." }
          ],
          quick: ["Distancias iguales ⟹ media armónica: n ÷ (suma de los recíprocos).", "Suma 1/12+1/18+1/36 = 1/6; luego 3 × 6 = 18."] },

        { q: "Un ciclista recorre tres tramos de igual longitud a 10 km/h, 15 km/h y 30 km/h. ¿Cuál es su velocidad media?", options: ["15 km/h", "18 km/h", "20 km/h", "12 km/h"], correct: 0,
          hint: "Mismo caso: tramos iguales, así que media armónica.",
          steps: [
            { t: "dato", label: "Datos", text: "Tres tramos iguales a 10, 15 y 30 km/h." },
            { t: "plantea", label: "Plantea", text: "v = [[3/1/10 + 1/15 + 1/30]]" },
            { t: "resuelve", label: "Suma los recíprocos", text: "Con denominador 30: [[3/30]] + [[2/30]] + [[1/30]] = [[6/30]] = [[1/5]]" },
            { t: "resuelve", label: "Divide", text: "v = 3 × 5 = 15" },
            { t: "resultado", label: "Respuesta", text: "15 km/h." }
          ],
          quick: ["El promedio simple daría 18,3 y es incorrecto.", "3 ÷ (1/5) = 15 km/h."] },

        { q: "En una oficina de 53 empleados hay 7 hombres más que mujeres. ¿Cuántos hombres y mujeres trabajan allí?", options: ["30 y 23", "35 y 18", "32 y 21", "28 y 25"], correct: 0,
          hint: "Conoces la suma y la diferencia: hay una fórmula directa.",
          steps: [
            { t: "dato", label: "Datos", text: "Suma = 53; diferencia (hombres − mujeres) = 7." },
            { t: "plantea", label: "Plantea", text: "Mayor = [[S + D/2]] y menor = [[S − D/2]]" },
            { t: "resuelve", label: "Calcula", text: "Hombres = (53 + 7) ÷ 2 = 60 ÷ 2 = 30. Mujeres = (53 − 7) ÷ 2 = 46 ÷ 2 = 23." },
            { t: "verifica", label: "Verifica", text: "30 + 23 = 53 ✓ y 30 − 23 = 7 ✓" },
            { t: "resultado", label: "Respuesta", text: "30 hombres y 23 mujeres." }
          ],
          quick: ["Suma y diferencia: mayor = (S+D)÷2, menor = (S−D)÷2.", "(53+7)÷2 = 30 y (53−7)÷2 = 23."] },

        { q: "En un curso de 65 estudiantes hay 9 mujeres más que hombres. ¿Cuántas mujeres y hombres hay?", options: ["37 y 28", "36 y 29", "38 y 27", "35 y 30"], correct: 0,
          hint: "Aplica la fórmula de suma y diferencia.",
          steps: [
            { t: "dato", label: "Datos", text: "Suma = 65; diferencia = 9 (a favor de las mujeres)." },
            { t: "resuelve", label: "Calcula", text: "Mujeres = (65 + 9) ÷ 2 = 74 ÷ 2 = 37. Hombres = (65 − 9) ÷ 2 = 56 ÷ 2 = 28." },
            { t: "verifica", label: "Verifica", text: "37 + 28 = 65 ✓ y 37 − 28 = 9 ✓" },
            { t: "resultado", label: "Respuesta", text: "37 mujeres y 28 hombres." }
          ],
          quick: ["(65+9)÷2 = 37 y (65−9)÷2 = 28.", "La suma y la diferencia deben tener la misma paridad para dar enteros."] },

        { q: "En un teatro trabajan 32 artistas. De estos, 16 bailan, 25 cantan y 12 cantan y bailan. ¿Cuántos artistas no cantan ni bailan?", options: ["3", "7", "9", "1"], correct: 0,
          hint: "Los que hacen ambas cosas están contados dos veces al sumar.",
          steps: [
            { t: "dato", label: "Datos", text: "Total = 32; bailan = 16; cantan = 25; ambos = 12." },
            { t: "plantea", label: "Plantea", text: "Fórmula de la unión: |A ∪ B| = |A| + |B| − |A ∩ B|" },
            { t: "resuelve", label: "Calcula la unión", text: "Hacen al menos una actividad: 16 + 25 − 12 = 29" },
            { t: "resuelve", label: "Halla el complemento", text: "No hacen ninguna: 32 − 29 = 3" },
            { t: "resultado", label: "Respuesta", text: "3 artistas." }
          ],
          quick: ["Unión = A + B − ambos (siempre resta la intersección).", "32 − (16+25−12) = 32 − 29 = 3."] },

        { q: "En un grupo de 40 deportistas, 22 practican fútbol, 28 básquet y 15 ambos deportes. ¿Cuántos no practican ninguno?", options: ["5", "3", "7", "10"], correct: 0,
          hint: "Primero calcula cuántos practican al menos uno.",
          steps: [
            { t: "dato", label: "Datos", text: "Total = 40; fútbol = 22; básquet = 28; ambos = 15." },
            { t: "resuelve", label: "Calcula la unión", text: "22 + 28 − 15 = 35 practican al menos un deporte." },
            { t: "resuelve", label: "Complemento", text: "40 − 35 = 5" },
            { t: "resultado", label: "Respuesta", text: "5 deportistas." }
          ],
          quick: ["Total − (A + B − ambos) = 40 − 35 = 5."] },

        { q: "En un cuadrado ABCD se inscribe una matriz de 3 × 3 círculos iguales, cada uno de radio 2 m, tangentes entre sí. ¿Cuál es el área del cuadrado?", options: ["144 m²", "100 m²", "64 m²", "81 m²"], correct: 0,
          hint: "El lado del cuadrado se compone de los diámetros alineados.",
          steps: [
            { t: "dato", label: "Datos", text: "Matriz de 3 × 3 círculos tangentes, radio r = 2 m cada uno." },
            { t: "plantea", label: "Halla el diámetro", text: "Diámetro = 2r = 2 × 2 = 4 m." },
            { t: "resuelve", label: "Halla el lado", text: "En cada fila caben 3 círculos, así que el lado mide 3 diámetros: 3 × 4 = 12 m." },
            { t: "resuelve", label: "Calcula el área", text: "Área = lado² = 12² = 144" },
            { t: "resultado", label: "Respuesta", text: "144 m²." }
          ],
          quick: ["Lado = (número de círculos por fila) × 2r = 3 × 4 = 12.", "Área = 12² = 144 m²."] },

        { q: "En un cuadrado se inscribe una matriz de 3 × 3 círculos tangentes de radio 3 cm. ¿Cuál es el área del cuadrado?", options: ["324 cm²", "144 cm²", "256 cm²", "81 cm²"], correct: 0,
          hint: "Mismo razonamiento: tres diámetros por lado.",
          steps: [
            { t: "dato", label: "Datos", text: "3 × 3 círculos tangentes, radio 3 cm." },
            { t: "resuelve", label: "Halla el lado", text: "Diámetro = 6 cm; lado = 3 × 6 = 18 cm." },
            { t: "resuelve", label: "Calcula el área", text: "Área = 18² = 324" },
            { t: "resultado", label: "Respuesta", text: "324 cm²." }
          ],
          quick: ["Lado = 3 × 2r = 3 × 6 = 18; área = 324 cm²."] },

        { q: "Tres círculos están divididos en 4 partes con estos números: Círculo 1 (9, 0, 3, 8); Círculo 2 (4, 6, 5, 5); Círculo 3 (7, 5, 6, X). ¿Cuál es el valor de X?", options: ["2", "5", "4", "8"], correct: 0,
          hint: "Compara la suma total de cada círculo completo.",
          steps: [
            { t: "dato", label: "Datos", text: "Círculo 1: 9, 0, 3, 8. Círculo 2: 4, 6, 5, 5. Círculo 3: 7, 5, 6, X." },
            { t: "plantea", label: "Busca el patrón", text: "Suma el círculo 1: 9 + 0 + 3 + 8 = 20. Suma el círculo 2: 4 + 6 + 5 + 5 = 20. La suma es constante." },
            { t: "resuelve", label: "Despeja X", text: "7 + 5 + 6 + X = 20 ⟹ 18 + X = 20 ⟹ X = 2" },
            { t: "resultado", label: "Respuesta", text: "X = 2." }
          ],
          quick: ["En figuras con números, prueba primero la SUMA constante.", "Verifica el patrón en DOS figuras completas antes de aplicarlo."] },

        { q: "Tres cuadros divididos en 4 casillas contienen: Cuadro 1 (9, 5, 6, 4); Cuadro 2 (8, 7, 3, 6); Cuadro 3 (7, 5, 8, X). ¿Cuál es el valor de X?", options: ["4", "6", "3", "5"], correct: 0,
          hint: "Confirma primero cuál es la constante con los dos cuadros completos.",
          steps: [
            { t: "dato", label: "Datos", text: "Cuadro 1: 9, 5, 6, 4. Cuadro 2: 8, 7, 3, 6. Cuadro 3: 7, 5, 8, X." },
            { t: "plantea", label: "Halla la constante", text: "Cuadro 1: 9+5+6+4 = 24. Cuadro 2: 8+7+3+6 = 24. La suma constante es 24." },
            { t: "resuelve", label: "Despeja X", text: "7 + 5 + 8 + X = 24 ⟹ 20 + X = 24 ⟹ X = 4" },
            { t: "resultado", label: "Respuesta", text: "X = 4." }
          ],
          quick: ["Suma constante 24; resta lo conocido: 24 − 20 = 4."] },

        { q: "El promedio de las calificaciones 6, 6, 12, 16 y una nota x equivale exactamente a x. ¿Cuál es el valor de x?", options: ["10", "14", "12", "15"], correct: 0,
          hint: "Plantea la ecuación del promedio incluyendo x en ambos lados.",
          steps: [
            { t: "dato", label: "Datos", text: "Notas: 6, 6, 12, 16 y x. Son 5 notas en total, y el promedio debe ser igual a x." },
            { t: "plantea", label: "Plantea", text: "[[6 + 6 + 12 + 16 + x/5]] = x" },
            { t: "resuelve", label: "Simplifica", text: "La suma conocida es 6+6+12+16 = 40, así que [[40 + x/5]] = x" },
            { t: "resuelve", label: "Despeja x", text: "Multiplica por 5: 40 + x = 5x ⟹ 40 = 4x ⟹ x = 10" },
            { t: "verifica", label: "Verifica", text: "(6+6+12+16+10) ÷ 5 = 50 ÷ 5 = 10 ✓ coincide con x" },
            { t: "resultado", label: "Respuesta", text: "x = 10." }
          ],
          quick: ["Atajo: si el promedio de n notas es igual a la que falta, esa nota es el promedio de las OTRAS.", "40 ÷ 4 = 10."] },

        { q: "El promedio de las notas 8, 10, 14, 20 y una nota x resulta igual a x. ¿Cuál es el valor de x?", options: ["13", "12", "14", "15"], correct: 0,
          hint: "Usa el atajo: es el promedio de las notas conocidas.",
          steps: [
            { t: "dato", label: "Datos", text: "Notas conocidas: 8, 10, 14, 20 (cuatro notas) más x, y el promedio de las cinco es x." },
            { t: "plantea", label: "Plantea", text: "[[8 + 10 + 14 + 20 + x/5]] = x" },
            { t: "resuelve", label: "Despeja", text: "Suma conocida = 52. Entonces 52 + x = 5x ⟹ 52 = 4x ⟹ x = 13" },
            { t: "verifica", label: "Verifica", text: "(52 + 13) ÷ 5 = 65 ÷ 5 = 13 ✓" },
            { t: "resultado", label: "Respuesta", text: "x = 13." }
          ],
          quick: ["Divide la suma de las conocidas entre su cantidad: 52 ÷ 4 = 13."] },

        { q: "Los [[7/9]] del costo de una computadora representan 280 dólares. ¿Cuál es el precio total del equipo?", options: ["360 $", "320 $", "410 $", "290 $"], correct: 0,
          hint: "Halla primero el valor de una novena parte.",
          steps: [
            { t: "dato", label: "Datos", text: "[[7/9]] del total equivalen a 280 dólares." },
            { t: "plantea", label: "Plantea", text: "Si 7 novenos valen 280, entonces un noveno vale 280 ÷ 7." },
            { t: "resuelve", label: "Halla la parte unitaria", text: "280 ÷ 7 = 40 (valor de [[1/9]] del total)." },
            { t: "resuelve", label: "Reconstruye el total", text: "El total son 9 novenos: 40 × 9 = 360" },
            { t: "resultado", label: "Respuesta", text: "360 dólares." }
          ],
          quick: ["Divide entre el numerador y multiplica por el denominador: 280 ÷ 7 × 9 = 360.", "Equivale a 280 ÷ (7/9)."] },

        { q: "Los [[5/8]] del precio de una motocicleta equivalen a 250 dólares. ¿Cuál es el precio total?", options: ["400 $", "380 $", "450 $", "320 $"], correct: 0,
          hint: "Primero el valor de un octavo.",
          steps: [
            { t: "dato", label: "Datos", text: "[[5/8]] del precio = 250 dólares." },
            { t: "resuelve", label: "Parte unitaria", text: "250 ÷ 5 = 50, que es el valor de [[1/8]]." },
            { t: "resuelve", label: "Total", text: "50 × 8 = 400" },
            { t: "resultado", label: "Respuesta", text: "400 dólares." }
          ],
          quick: ["250 ÷ 5 × 8 = 400."] },

        { q: "Los [[3/7]] de un lote de camisetas son 216 unidades. ¿Cuántas camisetas tiene el lote completo?", options: ["504", "432", "560", "480"], correct: 0,
          hint: "El mismo procedimiento en dos pasos.",
          steps: [
            { t: "dato", label: "Datos", text: "[[3/7]] del lote = 216 camisetas." },
            { t: "resuelve", label: "Parte unitaria", text: "216 ÷ 3 = 72, valor de [[1/7]] del lote." },
            { t: "resuelve", label: "Total", text: "72 × 7 = 504" },
            { t: "resultado", label: "Respuesta", text: "504 camisetas." }
          ],
          quick: ["216 ÷ 3 × 7 = 504."] },

        { q: "El precio de 4 lapiceros equivale al de 1 cuaderno, y el precio de 2 cuadernos equivale al de 1 juego de escuadras. En lugar de comprar 6 juegos de escuadras, ¿cuántos lapiceros se podrían comprar?", options: ["48", "40", "50", "36"], correct: 0,
          hint: "Encadena las equivalencias hasta llegar a lapiceros por escuadra.",
          steps: [
            { t: "dato", label: "Datos", text: "4 lapiceros = 1 cuaderno. 2 cuadernos = 1 juego de escuadras." },
            { t: "plantea", label: "Encadena", text: "1 juego de escuadras = 2 cuadernos, y cada cuaderno vale 4 lapiceros." },
            { t: "resuelve", label: "Convierte", text: "1 juego de escuadras = 2 × 4 = 8 lapiceros." },
            { t: "resuelve", label: "Escala", text: "6 juegos de escuadras = 6 × 8 = 48 lapiceros." },
            { t: "resultado", label: "Respuesta", text: "48 lapiceros." }
          ],
          quick: ["Multiplica las equivalencias en cadena: 6 × 2 × 4 = 48.", "Avanza siempre hacia la unidad que preguntan."] },

        { q: "El precio de 5 lápices equivale al de 1 cuaderno, y 3 cuadernos equivalen a 1 mochila. En lugar de comprar 4 mochilas, ¿cuántos lápices se podrían comprar?", options: ["60", "45", "72", "50"], correct: 0,
          hint: "Convierte mochilas a cuadernos y luego a lápices.",
          steps: [
            { t: "dato", label: "Datos", text: "5 lápices = 1 cuaderno; 3 cuadernos = 1 mochila." },
            { t: "resuelve", label: "Encadena", text: "1 mochila = 3 cuadernos = 3 × 5 = 15 lápices." },
            { t: "resuelve", label: "Escala", text: "4 mochilas = 4 × 15 = 60 lápices." },
            { t: "resultado", label: "Respuesta", text: "60 lápices." }
          ],
          quick: ["4 × 3 × 5 = 60."] },

        { q: "Entre Juan y Pedro tenían 100 dólares. Juan duplicó su dinero, Pedro triplicó el suyo y ahora Pedro tiene 25 dólares más que Juan. ¿Cuánto tenía cada uno al inicio?", options: ["Juan 55 y Pedro 45", "Juan 30 y Pedro 70", "Juan 35 y Pedro 65", "Juan 80 y Pedro 20"], correct: 0,
          hint: "Plantea dos ecuaciones: el total inicial y la relación final.",
          steps: [
            { t: "dato", label: "Datos", text: "J + P = 100. Después: Juan tiene 2J, Pedro tiene 3P, y 3P = 2J + 25." },
            { t: "plantea", label: "Sustituye", text: "De la primera ecuación, P = 100 − J. Reemplaza en la segunda: 3(100 − J) = 2J + 25" },
            { t: "resuelve", label: "Desarrolla", text: "300 − 3J = 2J + 25 ⟹ 300 − 25 = 2J + 3J ⟹ 275 = 5J" },
            { t: "resuelve", label: "Despeja", text: "J = 55, entonces P = 100 − 55 = 45." },
            { t: "verifica", label: "Verifica", text: "Juan duplica: 110. Pedro triplica: 135. Y 135 − 110 = 25 ✓" },
            { t: "resultado", label: "Respuesta", text: "Juan 55 y Pedro 45." }
          ],
          quick: ["Escribe una sola incógnita: P = 100 − J y sustituye.", "Comprueba siempre con los valores finales, no con los iniciales."] },

        { q: "Entre Ana y Luis tenían 120 dólares. Ana duplicó su dinero, Luis lo triplicó y ahora Luis tiene 40 dólares más que Ana. ¿Cuánto tenía cada uno?", options: ["Ana 64 y Luis 56", "Ana 60 y Luis 60", "Ana 70 y Luis 50", "Ana 55 y Luis 65"], correct: 0,
          hint: "Misma estructura: expresa uno en función del otro.",
          steps: [
            { t: "dato", label: "Datos", text: "A + L = 120 y 3L = 2A + 40." },
            { t: "plantea", label: "Sustituye", text: "L = 120 − A ⟹ 3(120 − A) = 2A + 40" },
            { t: "resuelve", label: "Desarrolla", text: "360 − 3A = 2A + 40 ⟹ 320 = 5A ⟹ A = 64, y L = 56." },
            { t: "verifica", label: "Verifica", text: "Ana duplica: 128. Luis triplica: 168. Y 168 − 128 = 40 ✓" },
            { t: "resultado", label: "Respuesta", text: "Ana 64 y Luis 56." }
          ],
          quick: ["360 − 40 = 320; 320 ÷ 5 = 64."] },

        { q: "En un almacén, Mateo posee el triple de cuadernos que Bruno, y entre ambos juntan 48 cuadernos. ¿Cuántos tiene cada uno?", options: ["Bruno 12 y Mateo 36", "Bruno 10 y Mateo 38", "Bruno 15 y Mateo 33", "Bruno 16 y Mateo 32"], correct: 0,
          hint: "Expresa ambas cantidades con una sola letra.",
          steps: [
            { t: "dato", label: "Datos", text: "Mateo = 3 × Bruno; total = 48." },
            { t: "plantea", label: "Plantea", text: "Si Bruno tiene x, Mateo tiene 3x. Entonces x + 3x = 48 ⟹ 4x = 48" },
            { t: "resuelve", label: "Despeja", text: "x = 12, así que Bruno tiene 12 y Mateo 3 × 12 = 36." },
            { t: "verifica", label: "Verifica", text: "12 + 36 = 48 ✓ y 36 es el triple de 12 ✓" },
            { t: "resultado", label: "Respuesta", text: "Bruno 12 y Mateo 36." }
          ],
          quick: ["Suma los coeficientes: 1 + 3 = 4 partes; 48 ÷ 4 = 12.", "El «triple» siempre implica 4 partes en total."] },

        { q: "Sofía tiene el cuádruple de monedas que Iván, y entre ambos reúnen 60 monedas. ¿Cuántas tiene cada uno?", options: ["Iván 12 y Sofía 48", "Iván 15 y Sofía 45", "Iván 10 y Sofía 50", "Iván 20 y Sofía 40"], correct: 0,
          hint: "Con «cuádruple» son 5 partes en total.",
          steps: [
            { t: "dato", label: "Datos", text: "Sofía = 4 × Iván; total = 60." },
            { t: "plantea", label: "Plantea", text: "x + 4x = 60 ⟹ 5x = 60" },
            { t: "resuelve", label: "Despeja", text: "x = 12, entonces Sofía tiene 48." },
            { t: "verifica", label: "Verifica", text: "12 + 48 = 60 ✓ y 48 ÷ 12 = 4 ✓" },
            { t: "resultado", label: "Respuesta", text: "Iván 12 y Sofía 48." }
          ],
          quick: ["Cuádruple ⟹ 5 partes: 60 ÷ 5 = 12."] },

        { q: "Dos vehículos tienen 12 y 32 años de antigüedad operacional. ¿Dentro de cuántos años la antigüedad del mayor será el doble de la del menor?", options: ["8", "10", "6", "4"], correct: 0,
          hint: "El tiempo transcurrido se suma a AMBAS antigüedades.",
          steps: [
            { t: "dato", label: "Datos", text: "Antigüedades actuales: 12 y 32 años. Se busca x años más." },
            { t: "plantea", label: "Plantea", text: "Dentro de x años tendrán 12 + x y 32 + x. La condición es: 32 + x = 2(12 + x)" },
            { t: "resuelve", label: "Desarrolla", text: "32 + x = 24 + 2x ⟹ 32 − 24 = 2x − x ⟹ 8 = x" },
            { t: "verifica", label: "Verifica", text: "En 8 años tendrán 20 y 40 años. Y 40 es exactamente el doble de 20 ✓" },
            { t: "resultado", label: "Respuesta", text: "Dentro de 8 años." }
          ],
          quick: ["Suma x a las dos edades: es el error más común olvidarlo en una.", "32 + x = 2(12 + x) ⟹ x = 8."] },

        { q: "Dos máquinas tienen 10 y 26 años de uso. ¿En cuántos años la antigüedad de la mayor será el doble de la menor?", options: ["6", "8", "4", "10"], correct: 0,
          hint: "Plantea la ecuación con x sumado a ambas.",
          steps: [
            { t: "dato", label: "Datos", text: "Antigüedades: 10 y 26 años." },
            { t: "plantea", label: "Plantea", text: "26 + x = 2(10 + x)" },
            { t: "resuelve", label: "Desarrolla", text: "26 + x = 20 + 2x ⟹ 6 = x" },
            { t: "verifica", label: "Verifica", text: "En 6 años: 16 y 32 años. Y 32 = 2 × 16 ✓" },
            { t: "resultado", label: "Respuesta", text: "En 6 años." }
          ],
          quick: ["Atajo: x = mayor − 2 × menor = 26 − 20 = 6."] },

        { q: "El perímetro de un rectángulo es 160 m. Si su largo es el triple del ancho, ¿cuál es su área?", options: ["1 200 m²", "700 m²", "2 700 m²", "800 m²"], correct: 0,
          hint: "Halla primero las dimensiones y solo después el área.",
          steps: [
            { t: "dato", label: "Datos", text: "Perímetro = 160 m; largo = 3 × ancho." },
            { t: "plantea", label: "Plantea", text: "Si el ancho es a, el largo es 3a. Perímetro = 2(a + 3a) = 2(4a) = 8a = 160" },
            { t: "resuelve", label: "Halla las medidas", text: "a = 160 ÷ 8 = 20 m (ancho); largo = 3 × 20 = 60 m." },
            { t: "resuelve", label: "Calcula el área", text: "Área = 60 × 20 = 1 200" },
            { t: "verifica", label: "Verifica", text: "Perímetro = 2(60 + 20) = 160 ✓" },
            { t: "resultado", label: "Respuesta", text: "1 200 m²." }
          ],
          quick: ["Con largo triple del ancho, el perímetro son 8 anchos: 160 ÷ 8 = 20.", "Área = 20 × 60 = 1 200 m²."] },

        { q: "El perímetro de un rectángulo es 96 cm y su largo es el triple del ancho. ¿Cuál es su área?", options: ["432 cm²", "384 cm²", "288 cm²", "576 cm²"], correct: 0,
          hint: "Otra vez el perímetro equivale a 8 anchos.",
          steps: [
            { t: "dato", label: "Datos", text: "Perímetro = 96 cm; largo = 3 × ancho." },
            { t: "resuelve", label: "Halla las medidas", text: "8a = 96 ⟹ a = 12 cm; largo = 36 cm." },
            { t: "resuelve", label: "Calcula el área", text: "Área = 36 × 12 = 432" },
            { t: "resultado", label: "Respuesta", text: "432 cm²." }
          ],
          quick: ["96 ÷ 8 = 12; área = 12 × 36 = 432 cm²."] },

        { q: "Hallar un número positivo tal que su cuadrado excede a su triple en 108.", options: ["12", "16", "14", "10"], correct: 0,
          hint: "«Excede en» significa que la diferencia es exactamente esa cantidad.",
          steps: [
            { t: "dato", label: "Traduce el enunciado", text: "«Su cuadrado excede a su triple en 108» se escribe: x^(2) = 3x + 108" },
            { t: "plantea", label: "Ordena la ecuación", text: "x^(2) − 3x − 108 = 0" },
            { t: "resuelve", label: "Factoriza", text: "Busca dos números que multiplicados den −108 y sumados den −3: son −12 y +9. Entonces (x − 12)(x + 9) = 0" },
            { t: "resuelve", label: "Elige la raíz válida", text: "x = 12 o x = −9. Como el enunciado pide un número POSITIVO, se descarta −9." },
            { t: "verifica", label: "Verifica", text: "12² = 144 y 3 × 12 = 36. La diferencia es 144 − 36 = 108 ✓" },
            { t: "resultado", label: "Respuesta", text: "12." }
          ],
          quick: ["«A excede a B en C» ⟹ A − B = C.", "Factoriza buscando dos números de producto −108 y suma −3: −12 y 9."] },

        { q: "Hallar un número positivo cuyo cuadrado excede a dicho número en 56.", options: ["8", "7", "9", "6"], correct: 0,
          hint: "Traduce a x² = x + 56 y factoriza.",
          steps: [
            { t: "dato", label: "Traduce", text: "x^(2) = x + 56" },
            { t: "plantea", label: "Ordena", text: "x^(2) − x − 56 = 0" },
            { t: "resuelve", label: "Factoriza", text: "Dos números de producto −56 y suma −1: −8 y +7. Entonces (x − 8)(x + 7) = 0" },
            { t: "resuelve", label: "Elige la raíz", text: "x = 8 (se descarta −7 por ser negativo)." },
            { t: "verifica", label: "Verifica", text: "8² = 64 y 64 − 8 = 56 ✓" },
            { t: "resultado", label: "Respuesta", text: "8." }
          ],
          quick: ["Producto −56, suma −1 ⟹ −8 y 7.", "Descarta siempre la raíz negativa si piden un número positivo."] },

        { q: "Un cuadrado tiene un área de 196 cm². ¿Cuál es la longitud exacta de su diagonal?", options: ["14sqrt(2) cm", "14 cm", "28 cm", "12sqrt(2) cm"], correct: 0,
          hint: "Halla el lado y recuerda la relación entre lado y diagonal.",
          steps: [
            { t: "dato", label: "Datos", text: "Área del cuadrado = 196 cm²." },
            { t: "resuelve", label: "Halla el lado", text: "Lado = sqrt(196) = 14 cm." },
            { t: "plantea", label: "Relación de la diagonal", text: "La diagonal parte el cuadrado en dos triángulos rectángulos isósceles, así que d = lado × sqrt(2)" },
            { t: "resuelve", label: "Calcula", text: "d = 14sqrt(2) cm (aproximadamente 19,8 cm)." },
            { t: "resultado", label: "Respuesta", text: "14sqrt(2) cm." }
          ],
          quick: ["Diagonal del cuadrado = lado × sqrt(2), siempre.", "Lado = sqrt(196) = 14 ⟹ diagonal = 14sqrt(2)."] },

        { q: "Un cuadrado tiene 144 m² de área. ¿Cuál es la longitud exacta de su diagonal?", options: ["12sqrt(2) m", "12 m", "24 m", "14sqrt(2) m"], correct: 0,
          hint: "Mismo procedimiento: raíz del área y luego por sqrt(2).",
          steps: [
            { t: "dato", label: "Datos", text: "Área = 144 m²." },
            { t: "resuelve", label: "Halla el lado", text: "Lado = sqrt(144) = 12 m." },
            { t: "resuelve", label: "Calcula la diagonal", text: "d = 12sqrt(2) m." },
            { t: "resultado", label: "Respuesta", text: "12sqrt(2) m." }
          ],
          quick: ["Cuadrados perfectos útiles: 144→12, 196→14, 225→15, 256→16."] },

        { q: "Un equipo juega 24 partidos y gana 18. ¿Qué porcentaje de partidos ha perdido?", options: ["25 %", "40 %", "30 %", "15 %"], correct: 0,
          hint: "Calcula primero cuántos perdió, no cuántos ganó.",
          steps: [
            { t: "dato", label: "Datos", text: "Total de partidos = 24; ganados = 18." },
            { t: "plantea", label: "Halla los perdidos", text: "Perdidos = 24 − 18 = 6" },
            { t: "resuelve", label: "Calcula el porcentaje", text: "[[6/24]] × 100. Y [[6/24]] se simplifica a [[1/4]]" },
            { t: "resuelve", label: "Convierte", text: "[[1/4]] × 100 = 25" },
            { t: "trampa", label: "Cuidado", text: "El 75 % corresponde a los partidos GANADOS. La pregunta pide los perdidos." },
            { t: "resultado", label: "Respuesta", text: "25 %." }
          ],
          quick: ["Lee bien si piden ganados o perdidos: es la trampa habitual.", "6/24 = 1/4 = 25 %."] },

        { q: "Un equipo disputa 30 encuentros y gana 24. ¿Qué porcentaje ha perdido?", options: ["20 %", "25 %", "80 %", "15 %"], correct: 0,
          hint: "Perdidos sobre el total, y simplifica.",
          steps: [
            { t: "dato", label: "Datos", text: "Total = 30; ganados = 24." },
            { t: "resuelve", label: "Halla los perdidos", text: "30 − 24 = 6" },
            { t: "resuelve", label: "Calcula", text: "[[6/30]] = [[1/5]], y [[1/5]] × 100 = 20" },
            { t: "resultado", label: "Respuesta", text: "20 %." }
          ],
          quick: ["6/30 = 1/5 = 20 %.", "Fracciones a porcentaje: 1/2=50, 1/4=25, 1/5=20, 1/8=12,5."] }
      ]
    }
  ]
};
