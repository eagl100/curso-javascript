let sumatoria = 0;
let num1 = 500;
let num2 = 456;

while (num1 <= 800 && num2 >= 400) {
    sumatoria += num1;
    sumatoria += num2;
    
    num1 += 10;
    num2 -= 2;
}

console.log(`El resultado de la sumatoria es: ${sumatoria}`);
