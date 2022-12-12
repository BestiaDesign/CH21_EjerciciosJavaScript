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
let numeroMenor = arrayMenores[0];
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
    /* let array1 = [1, 22, 5, 17, 10, 5, 40, 5];
    let array2 = [7, 41, 5, 7, 10, 13, 2];
    let array3 = [1, 22, 5, 14, 24, 31, 27, 15, 105];
    let coincidencia = document.getElementById("coincidencia");

    let arrayX = array1.sort();
     
    for (let i = 0; i < arrayX.length; i++) {
      if (arrayX[i + 1] === arrayX[i]) {
        coincidencia.innerHTML += 'El '+ arrayX[i] + ' se encuentra más de una vez' ; 
        break;
      }
    } */

    // Solución 2
    let array1 = [1, 22, 5, 17, 10, 5, 40, 5];
    let array2 = [7, 41, 5, 7, 10, 13, 2];
    let array3 = [1, 22, 5, 14, 24, 31, 27, 15, 105];
    let coincidencia = document.getElementById("coincidencia");

    function repetidos(array){
        let bandera = 0; // La bandera para saber si hay las coincidencias en array
        let arrayX = array.sort(); // sort sirve para ordenar arrays
        for (let i = 0; i < arrayX.length; i++) {
            if (arrayX[i + 1] === arrayX[i]) {
              coincidencia.innerHTML += 'El '+ arrayX[i] + ' se encuentra más de una vez en ' + array + '<br>' ; 
              bandera = 1;
              break; // Para parar el ciclo de la función
            }
          }
        if (bandera == 0) {
            coincidencia.innerHTML += 'No hay números repetidos en ' + array + '<br>' ;         
        }
    } 
    
     repetidos(array1);
     repetidos(array2);
     repetidos(array3);
     
    // EJERCICIO 4:
        // Solución 1

    let desorden = document.getElementById("desorden");
    let lista =  [1, 2, 5, 14, 24, 31, 50, 105];

    lista.sort(function() { return Math.random() - 0.5 });
    desorden.innerHTML += 'Los números aleatorios del array [1, 2, 5, 14, 24, 31, 50, 105] son: ' + lista + '<br>' ;    
