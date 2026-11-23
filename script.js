// Conecto mi botón y los espacios donde mostraré los valores de b y c
const boton = document.querySelector("#btn-gen");
const spanB = document.querySelector("#valor-b");
const spanC = document.querySelector("#valor-c");

// Conecto cada recuadro y su contenedor de texto desde el HTML
const cajaLineal = document.querySelector("#caja-lineal");
const textoLineal = document.querySelector("#texto-lineal");

const cajaAfin = document.querySelector("#caja-afin");
const textoAfin = document.querySelector("#texto-afin");

const cajaConstante = document.querySelector("#caja-constante");
const textoConstante = document.querySelector("#texto-constante");

const cajaNula = document.querySelector("#caja-nula");
const textoNula = document.querySelector("#texto-nula");

// Hago que todo esto pase cuando le doy clic a mi botón
boton.addEventListener("click", function() {
    
    // Genero dos números aleatorios entre -3 y 3 para b y c
    let b = Math.floor(Math.random() * 7) - 3;
    let c = Math.floor(Math.random() * 7) - 3;

    // Muestro los números que salieron en la pantalla
    spanB.innerText = b;
    spanC.innerText = c;

    // Caso 1: Si ambos son 0, activo "No hay función" y apago los demás
    if (b === 0 && c === 0) {
        cajaNula.className = "recuadro activo";
        cajaConstante.className = "recuadro inactivo";
        cajaLineal.className = "recuadro inactivo";
        cajaAfin.className = "recuadro inactivo";

        textoNula.innerHTML = "<strong>No hay función: f(x) = 0</strong><br>" +
            "<ul>" +
            "<li>Pendiente: b = 0.</li>" +
            "<li>Coeficiente de posición: c = 0.</li>" +
            "<li>Gráfica: Coincide con el eje X.</li>" +
            "</ul>";
        textoConstante.innerHTML = "<p>Muestra la lista de propiedades de la Función Constante si cumple la condición (b = 0 y c ≠ 0).</p>";
        textoLineal.innerHTML = "<p>Muestra la lista de propiedades de la Función Lineal si cumple la condición (c = 0).</p>";
        textoAfin.innerHTML = "<p>Muestra la lista de propiedades de la Función Afín si cumple la condición (c ≠ 0).</p>";

    // Caso 2: Si b es 0 y c no es 0, activo la Función Constante
    } else if (b === 0 && c !== 0) {
        cajaConstante.className = "recuadro activo";
        cajaNula.className = "recuadro inactivo";
        cajaLineal.className = "recuadro inactivo";
        cajaAfin.className = "recuadro inactivo";

        textoConstante.innerHTML = "<strong>Función Constante: f(x) = " + c + "</strong><br>" +
            "<ul>" +
            "<li>Gráfica: Línea recta horizontal paralela al eje X.</li>" +
            "<li>Corte Eje Y: Interseca en el punto (0, " + c + ").</li>" +
            "<li>Pendiente: b = 0</li>" +
            "</ul>";
        textoNula.innerHTML = "<p>Muestra el mensaje si cumple la condición (b = 0 y c = 0).</p>";
        textoLineal.innerHTML = "<p>Muestra la lista de propiedades de la Función Lineal si cumple la condición (c = 0).</p>";
        textoAfin.innerHTML = "<p>Muestra la lista de propiedades de la Función Afín si cumple la condición (c ≠ 0).</p>";

    // Caso 3: Si c es 0 (y b no es 0), activo la Función Lineal
    } else if (c === 0) {
        cajaLineal.className = "recuadro activo";
        cajaAfin.className = "recuadro inactivo";
        cajaConstante.className = "recuadro inactivo";
        cajaNula.className = "recuadro inactivo";

        textoLineal.innerHTML = "<strong>Función Lineal: f(x) = " + b + "x</strong><br>" +
            "<ul>" +
            "<li>Gráfica: Línea recta continua.</li>" +
            "<li>Paso obligatorio: Pasa por el origen (0, 0).</li>" +
            "<li>Pendiente: b = " + b + "</li>" +
            "</ul>";
        textoAfin.innerHTML = "<p>Muestra la lista de propiedades de la Función Afín si cumple la condición (c ≠ 0).</p>";
        textoConstante.innerHTML = "<p>Muestra la lista de propiedades de la Función Constante si cumple la condición (b = 0 y c ≠ 0).</p>";
        textoNula.innerHTML = "<p>Muestra el mensaje si cumple la condición (b = 0 y c = 0).</p>";

    // Caso 4: Si ninguno es 0, activo la Función Afín
    } else {
        cajaAfin.className = "recuadro activo";
        cajaLineal.className = "recuadro inactivo";
        cajaConstante.className = "recuadro inactivo";
        cajaNula.className = "recuadro inactivo";

        textoAfin.innerHTML = "<strong>Función Afín: f(x) = " + b + "x + " + c + "</strong><br>" +
            "<ul>" +
            "<li>Gráfica: Línea recta que no pasa por el origen.</li>" +
            "<li>Corte Eje Y: Interseca en el punto (0, " + c + ").</li>" +
            "<li>Pendiente: b = " + b + "</li>" +
            "</ul>";
        textoLineal.innerHTML = "<p>Muestra la lista de propiedades de la Función Lineal si cumple la condición (c = 0).</p>";
        textoConstante.innerHTML = "<p>Muestra la lista de propiedades de la Función Constante si cumple la condición (b = 0 y c ≠ 0).</p>";
        textoNula.innerHTML = "<p>Muestra el mensaje si cumple la condición (b = 0 y c = 0).</p>";
    }
});