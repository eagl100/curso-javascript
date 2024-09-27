// Se pide ingreso de una palabra u oración
let texto = prompt("Ingrese una palabra u oración");
// Se convierte las mayusculas del texto a minusculas
texto = texto.toLowerCase();

// Se inicializan los contadores para cada carácter
let a = 0, b=0, c= 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, ñ = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;

// Bucle que va identificando los carácteres de la palabra u oración ingresada
for (let letra of texto){
    if (letra === 'a') a++;
    else if (letra === 'b') b++;
    else if (letra === 'c') c++;
    else if (letra === 'd') d++;
    else if (letra === 'e') e++;
    else if (letra === 'f') f++;
    else if (letra === 'g') g++;
    else if (letra === 'h') h++;
    else if (letra === 'i') i++;
    else if (letra === 'j') j++;
    else if (letra === 'k') k++;
    else if (letra === 'l') l++;
    else if (letra === 'm') m++;
    else if (letra === 'n') n++;
    else if (letra === 'ñ') ñ++;
    else if (letra === 'o') o++;
    else if (letra === 'p') p++;
    else if (letra === 'q') q++;
    else if (letra === 'r') r++;
    else if (letra === 's') s++;
    else if (letra === 't') t++;
    else if (letra === 'u') u++;
    else if (letra === 'v') v++;
    else if (letra === 'w') w++;
    else if (letra === 'x') x++;
    else if (letra === 'y') y++;
    else if (letra === 'z') z++;
}
// Se muestra la palabra o frase original en la consola
console.log(`La palabra o frase: ${texto} tiene los siguientes caracteres:`);
// Se muestra cuantas veces se repitió un carácter en la consola
console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}, e: ${e},f: ${f}, g: ${g}, h: ${h}, i: ${i}, j: ${j},k: ${k}, l: ${l}, m: ${m}, n: ${n}, ñ: ${ñ},o: ${o}, p: ${p}, q: ${q}, r: ${r}, s: ${s},t: ${t}, u: ${u}, v: ${v}, w: ${w}, x: ${x},y: ${y}, z: ${z}`);