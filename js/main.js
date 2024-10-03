let nombre = prompt("digite su Nombre");
let nota = parseFloat(prompt("digite su nota"));

if(nota >= 4){
    document.write( nombre + " Ha aprobado su materia con una nota de " + nota);
} else {
    document.write( nombre + " Ha Reprobado su materia con una nota de " + nota);
}

