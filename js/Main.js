    // EJERCICIO 1:
        // Solución 1
    /* let numeros = document.getElementById("Mayores");
    let numMayor = Math.max(3, 5, 7, 1, 9, 15);
    numeros.innerHTML += '<li class="list-group-item">' + numMayor + '</li>';
*/

    // Solución 2
let numeros = document.getElementById("Mayores");
    let arrayNumeros  = [3, 2, 7, 1, 9, 15];
    numMayor = 0;

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
        // Solución 1

