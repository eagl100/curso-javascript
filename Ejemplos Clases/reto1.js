let texto = prompt("Ingresa una cadena de texto:");
texto = texto.toLowerCase();

let a = 0, e = 0, i = 0, o = 0, u = 0;

for (let letra of texto) {
    if (letra === 'a') a++;
    else if (letra === 'e') e++;
    else if (letra === 'i') i++;
    else if (letra === 'o') o++;
    else if (letra === 'u') u++;
}

console.log(`a: ${a}, e: ${e}, i: ${i}, o: ${o}, u: ${u}`);