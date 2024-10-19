function areaCirculo() {
    let radio = parseFloat(prompt("Ingresa el radio del círculo:"));
    const PI = Math.PI;
    let area = PI * Math.pow(radio, 2);
    alert("El área del círculo es: " + area);
}

function areaTriangulo() {
    let base = parseFloat(prompt("Ingresa la base del triángulo:"));
    let altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
    let area = (base * altura) / 2;
    alert("El área del triángulo es: " + area);
}

function areaRectangulo() {
    let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
    let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
    let area = base * altura;
    alert("El área del rectángulo es: " + area);
}

areaCirculo();
areaTriangulo();
areaRectangulo();
