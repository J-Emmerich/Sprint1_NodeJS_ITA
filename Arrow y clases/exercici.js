// Nivell 1
// Exercici 1
// Imprimir per pantalla el resultat d'una arrow function autoinvocable que sumi dos nombres.

//Versión Keep It Simple

((a,b)=>{
    nombres = +a + +b;    
})(9,6);

console.log(nombres);



/*
//Not simple
let add = ((x,y)=>{
    
    let nombres = +x + +y;
    return {
        answer : function(){
            return `El valor de la suma es ${nombres}`;}
        }
})(12,4);
console.log(add.answer());
*/



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

function Factory(){
    if(this.constructor === Factory){
        throw new Error ('No puedes instanciar una clase abstracta!');
    }
   
}

Factory.create = function(){
    throw new Error('Método abstracto!');
}

let Draw = function(){
    Object.create(Factory);}
    Draw.prototype.constructor = Draw;
    Draw.prototype.create = function(){
        console.log( `I'm a drawing`);
}

let Write = function(){
    Object.create(Factory);}
Write.prototype.constructor = Write;
Write.prototype.create = function(){
    console.log("I'm writing");
}


let miDiseño = new Draw();
miDiseño.create();
let otroDiseño = new Draw();
otroDiseño.create();

let unEscrito = new Write();
unEscrito.create();
let otroEscrito = new Write();
otroEscrito.create();
