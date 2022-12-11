    // EJERCICIO 1:
        // Solución 1
    /* let numeros = document.getElementById("mayores");
    let numMayor = Math.max(3, 5, 7, 1, 9, 15);
    numeros.innerHTML += '<li class="list-group-item">' + numMayor + '</li>';
*/

    // Solución 2
let numeros = document.getElementById("mayores");
    let arrayNumeros  = [3, 2, 7, 1, 9, 15];
    let numMayor = 0;

for(let i=0; i<arrayNumeros.length;i++){
    if(arrayNumeros [i] > numMayor){
        numMayor = arrayNumeros [i];
    }
}
numeros.innerHTML += 'El número mayor de 3, 2, 7, 1, 9, 15 es: ' + numMayor ; 

    // Solución 3
/* let numeros  = [3, 2, 7, 1, 9, 15];
numMayor = 0;

for(let i=0; i<numeros.length;i++){
if(numeros [i] > numMayor){
    numMayor = numeros [i];
}
}
document.write(numMayor); */



    // EJERCICIO 2:
        // Solución
let arrayMenores = [-1, 3, 4, 2, 7, 25];
let menores = document.getElementById("menores");
let numeroMenor = 0;
let i = 0;

while (i<arrayNumeros.length) {
    if(arrayNumeros [i] < numeroMenor){
        numeroMenor = arrayNumeros [i];
    }
    i++;
}
menores.innerHTML += 'El número menor de -1, 3, 4, 2, 7, 25 es: ' + numeroMenor ; 

    // EJERCICIO 3:
        // Solución 1