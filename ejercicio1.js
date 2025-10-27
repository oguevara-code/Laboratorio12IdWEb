let numero = parseInt(prompt("Ingrese un numero:"));

function esPar(numero) {
    if (numero%2 == 0){
        return true;
    }
    else
        return false;
}

console.log(esPar(numero));