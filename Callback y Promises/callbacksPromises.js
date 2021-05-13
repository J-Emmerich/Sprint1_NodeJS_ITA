// Nivell 1
// - Exercici 1
// Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject()
//  que rep. Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge diferent en cada cas.

function somarNumeros(x,y){
    return new Promise((resolve, reject)=>{
        if(typeof x === 'number' && typeof y === 'number'){
          resolve(x + y);
        }else reject("Esto no es un numero");
    })
}

somarNumeros("String", 3)
    .then((suma)=>{
        console.log(`El resultado de la suma es: ${suma}.`);
    })
    .catch((err)=>console.log(`Hay un error. ${err}.`));


somarNumeros(5,4)
    .then((suma) =>{
        let sumaPorTres = suma * 3;
        console.log(`El resultado de la suma es ${suma}.`)
        return sumaPorTres
    })
    .then((mult) => console.log(`El resultado de la multiplicación por 3 de esta suma es ${mult}.`))
    .catch((err)=>console.log(err));

// - Exercici 2
// Crear una arrow function que, rebent un paràmetre i una function callback, 
//li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre.

const miArrow = (param, callback)=>{
 
    if(param.length < 80){
        let regex = /a/ig;
       let letraA = callback(param,regex);
       console.log(`La frase es corta, y por lo tanto tiene solamente: ${letraA.length} letras A.`);
    }else
    {
        let regex = /b/ig
        letraB = callback(param, regex);
        console.log(`La frase es larga, puede ser que tenga muchas letra B. A ver...Hay un total de ${letraB.length} letras B.`)
    } 
}
function contarLetras(mensaje, regularExpresion){
let letra = mensaje.match(regularExpresion);
return letra
}

let string1 = "Successful weight loss takes programming, not willpower.";
let string2 = `After a while the whole system broke down.
Frankel wasn't paying any attention; he wasn't supervising anybody.
The system was going very, very slowly - while he was sitting in a room figuring out
how to make one tabulator automatically print arc-tangent X, and then it would start
and it would print columns and then bitsi, bitsi, bitsi, and calculate the 
arc-tangent automatically by integrating as it went along and make a whole
table in one operation.

Absolutely useless. We *had* tables of arc-tangents. 
But if you've ever worked with computers, you understand the disease - 
the *delight* in being able to see how much you can do. 
But he got the disease for the first time, the poor fellow who invented the thing.`;

miArrow(string1, contarLetras);
miArrow(string2, contarLetras);

//Nivell 2
//Donats els objectes employees i salaries,
// creu una arrow function getEmpleado que retorni una Promise efectuant la cerca en l'objecte pel seu id.
//


let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmpleado = (id, empleados)=>{
    return new Promise((resolve, reject)=>{
       let empleado = "Empleado no existe";
        for(let i = 0; i<empleados.length;i++){
            if(empleados[i].id == id){
                empleado = empleados[i];
            }
        }
        if(typeof empleado === "object"){
            resolve(empleado)
        }else{
            reject(empleado);
        }
        
    });
}

//Exercici 2
//Creu una altra arrow function getSalario que rebi com a paràmetre un objecte employee
// i retorni el seu salari

const getSalario = (empleado, salarios)=>{
    return new Promise((resolve, reject)=>
    {
    let salario = "No hay datos del salario de este empleado";
    
    for(let i = 0; i<salarios.length; i++){
        if(salarios[i].id == empleado.id){
            salario = salarios[i];
        }
    }
    
    if(typeof salario === "object"){
        empleado.salary = salario.salary;
        resolve(empleado);
    }else{
        reject(salario);
    }
    });
}

// Exercici 3
//Invoqui la primera Promise getEmpleado 
//i posteriorment getSalario, niant l'execució de les dues promises.
//Nivell 3
//- Exercici 1
//Fixi un element catch a la invocació de la fase anterior que capturi
// qualsevol error i l'imprimeixi per consola.

getEmpleado(3, employees)
    .then((empleado)=>getSalario(empleado, salaries))
    .then((empleado)=>{
        console.log(`El empleado ${empleado.name} tiene el id ${empleado.id}, su sueldo es de ${empleado.salary}.`)
    })
    .catch((err)=>console.log(err));   


//
