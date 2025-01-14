let numero1 = 8;
let numero2 = 6;

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

console.log("la suma de los numeros es: " + suma);
console.log("la resta de los numeros es: " + resta);
console.log("la multiplicacion de los numeros es: " + multiplicacion);
console.log("la division de los numeros es: " + division);



var angulo = Math.PI * 3;
console.log( 'seno(3PI) = ' + Math.sin(angulo) );

var potencia = Math.pow(6,3);
console.log( '6^3 = ' + potencia );

let calificacion = 4;
if(calificacion >= 4){
    console.log("Ha aprobado su materia con una nota de " + calificacion);
} else {
    console.log("Ha Reprobado su materia con una nota de " + calificacion);
}


const edad = 19;

if(edad >= 18){
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}


const cantidad = 5;
var suma = 0;

for (let i = 1; i <= cantidad; i++) {
    suma += i;
}
console.log(suma);