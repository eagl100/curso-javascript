let nota1 = parseFloat(prompt("Ingrese la primera nota (40%):"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota (30%):"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota (30%):"));

let promedioFinal = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3);

if(nota1>7 || nota1<1 || nota2>7 || nota2<1 || nota3>7 || nota3<1){
    alert(`Error, ingrese un número valido`);
} else{
    alert(`El promedio final del alumno es de: ${promedioFinal}`);
    if (promedioFinal < 3.95) {
        alert("El alumno ha reprobado.");
    } else if (promedioFinal >= 3.95 && promedioFinal < 4.95) {
        alert("El estudiante debe ir a examen.");
    } else {
        alert("El estudiante ha aprobado");
    }
}
