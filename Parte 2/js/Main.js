// Ejercicio 1

let resAlto = document.getElementById("resAlto");
let alertResultado = document.getElementById("alertResultado");

resAlto.addEventListener("click", function (event){
    event.preventDefault();
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let input3 = parseInt(document.getElementById("input3").value);
    let array = [input1, input2, input3];
    let numMayor = 0;

for(let i=0; i<array.length;i++){
    if(array [i] > numMayor){
        numMayor = array [i];
    }
}
    alertResultado.innerHTML = 'El número mayor de: ' + array + ' es: ' + numMayor ; 
}); 

// Ejercicio 2
let resBajo = document.getElementById("resBajo");
let alertResultado1 = document.getElementById("alertResultado1");

resBajo.addEventListener("click", function (event){
    event.preventDefault();
    let input4 = parseInt(document.getElementById("input4").value);
    let input5 = parseInt(document.getElementById("input5").value);
    let input6 = parseInt(document.getElementById("input6").value);
    let array = [input4, input5, input6];
    let numMenor = array[0];

for(let i=0; i<array.length;i++){
    if(array [i] < numMenor){
        numMenor = array [i];
    }
}
alertResultado1.innerHTML = 'El número menor de: ' + array + ' es: ' + numMenor ; 
}); 

// Ejercicio 3


// Ejercicio 4
let multiplo = document.getElementById("multiplo");
let alertResultado2 = document.getElementById("alertResultado2");

multiplo.addEventListener("click", function (event){
    event.preventDefault();
    let inputMultiplo = parseInt(document.getElementById("inputMultiplo").value);
    let residuo = inputMultiplo % 3;

    if (residuo != 0) {
        alertResultado2.innerHTML = 'El número : ' + inputMultiplo + ' no es multiplo de 3 '; 
    }
    else {
        alertResultado2.innerHTML = 'El número : ' + inputMultiplo + ' sí es multiplo de 3 ';  
    }
});

// Ejercicio 5
let resSuma = document.getElementById("resSuma");
let alertResultado3 = document.getElementById("alertResultado3");

resSuma.addEventListener("click", function (event){
    event.preventDefault();
    let primerInput = parseInt(document.getElementById("primerInput").value);
    let segundoInput = parseInt(document.getElementById("segundoInput").value);
    let tercerInput = parseInt(document.getElementById("tercerInput").value);
    let array = [primerInput, segundoInput, tercerInput];

    // let numMenor = array[0];

    if (primerInput == segundoInput + tercerInput) {
    alertResultado3.innerHTML = primerInput + ' es la suma de: ' + segundoInput + ' y ' + tercerInput ;   
    }

    else if (segundoInput == primerInput + tercerInput) {
    alertResultado3.innerHTML = segundoInput + ' es la suma de: ' + primerInput + ' y ' + tercerInput ;   
    }

    else if (tercerInput == primerInput + segundoInput) {
    alertResultado3.innerHTML = tercerInput + ' es la suma de: ' + primerInput + ' y ' + segundoInput ;   
    }
    else{
        alertResultado3.innerHTML = 'En ' + array + ' ningun número es la suma de los otros dos ';
    }
}); 

// Ejercicio 6

