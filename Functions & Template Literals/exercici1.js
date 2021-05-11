
//Nivell 1
let miNombre = "João";
printName(miNombre);


function printName(name){
    console.log(name);
}
//Nivel 2
//exercici 1


function printNameLiterals(nombre, apellido){
    console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}`);
}

let miApellido = "Emmerich";
printNameLiterals(miNombre, miApellido);

//Exercici 2
function invocacion(){
    return "Si lees esto, he sido invocada."
}
let frase = `Estoy invocando una función con literales. ${invocacion()}`;
console.log(frase);

//Nivel 3
//Exercici 1

let compte9 = function(){

    for(let i = 0; i<10; i++){
        console.log(i);
    }
}

let compte9repeat = function(){
    for(let i = 0; i<10; i++){
        console.log(i);
    }
}
let functions = [];
functions.push(compte9);
functions.push(compte9repeat);

for(let i = 0; i<functions.length; i++){
    functions[i]();
}

//Exercici 2

let imprimirNombre = function(nombre){
    console.log(nombre);
}("João");
