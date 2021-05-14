//Ejercicio 1

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


const getSalario = (empleado)=>{
    return new Promise((resolve, reject)=>
    {
    let salario = "No hay datos del salario de este empleado";
    
    for(let i = 0; i<salaries.length; i++){
        if(salaries[i].id == empleado.id){
            salario = salaries[i];
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


getEmpleado(3, employees)
    .then((empleado)=>getSalario(empleado))
    .then((empleado)=>{
        console.log(`El empleado ${empleado.name} tiene el id ${empleado.id}, su sueldo es de ${empleado.salary}.`)
    })
    .catch((err)=>console.log(err));   


//Ejercicio 2

async function getNombreYSalario(id){
try{
    let empleado = await getEmpleado(id, employees);
    let salario = await getSalario(empleado);
    console.log(`Esta es una funcion async el nombre del empleado es ${empleado.name} y 
    su suldo es de ${salario.salary}`);
}
catch(error){
    console.log(`Oops, hubo un error en la función async: ${error}`);
}
}
getNombreYSalario(5);

//Nivell 2 y Nivell 3



function functionRetornaPromise(objecto,nombre){
    return new Promise((resolve, reject)=>{
    if(objecto.nombre == nombre){
        setTimeout(()=>{
            resolve(`Correcto, el nombre es ${objecto.nombre}`);
                },2000);
            
    }
       else{

           reject(new Error(`Error en el nombre del objecto ${objecto.nombre} no es igual a ${nombre}`));
       }

});
}


async function llamaPromise(nombreVerificar){
    let objectoConPropriedades = {
        'nombre' : 'Ginger',
        'telefono' : '333-999-555',
        'email' : 'Ginger@gingy.com'
    }

    try {
        let nombre = await functionRetornaPromise(objectoConPropriedades,nombreVerificar);
        console.log(nombre)
    }
    catch(error){
console.log(error.message);
    }

}

llamaPromise('Ginger');
llamaPromise('Otro Nombre');
llamaPromise();

