// Nivell 1
// Exercici 1
// Imprimir per pantalla el resultat d'una arrow function autoinvocable que sumi dos nombres.

((x,y)=>{ 
    console.log(+x + +y);
})(7,2);


// Nivell 2
// - Exercici 1
// Crear una arrow function que, rebent un paràmetre, retorni un objecte
//  amb un atribut que tingui com a valor el paràmetre rebut.
let objectFunction = (value) =>{
return {'Atribute' : value}
}

let miObjecto = objectFunction("Mi valor");
console.log(miObjecto.Atribute);
// - Exercici 2
// Crear una classe Persona que rebi un paràmetre 'nom' a l'ésser creat.
//  La classe inclourà un mètode decirNombre que imprimeixi per consola el paràmetre 'Nom'.
// Invocar el mètode decirNombre des de fora de la classe.

class Persona{
    constructor(nom){
        this._nom = nom;
    }
get nom(){
    return this._nom;
}
    decirNombre(){
console.log(this.nom)
    }
}
let unaPersona = new Persona("Fred");
unaPersona.decirNombre();

// Nivell 3
// - Exercici 1
// Crear una function creadora d'objectes, abstraient la definició de les classes. 
// Invocar-amb diferents definicions.

function makeObjects(newClass){
    return new newClass();
}

let math = makeObjects(class{
addNumbers(x,y){
    return +x + +y;
}
multiplyNumbers(x,y){
    return +x * +y;
}

});
console.log(math.addNumbers(3,5));
console.log(math.multiplyNumbers(5,8));
console.log(typeof math);
