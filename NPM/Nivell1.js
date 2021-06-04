const fs = require('fs');
// Primer ejercicio
function imprimirRecursiva(frase, nImpresions){
    if(nImpresions == 0){
        return frase;
    }else{
        setTimeout(()=>{
            imprimirRecursiva(frase, nImpresions -1);
        console.log(frase);
        },1000);
    }
    }
    
    
    //La misma infinitamente
    function imprimirRecursivaInfinita(frase) {
        
       setTimeout(()=>{
           imprimirRecursivaInfinita(frase);
           console.log(frase);
       },1000)
      
    }
    //  Sacar comentario para llamar función recursiva sin base case("infinita--limite del stack")
    //  imprimirRecursivaInfinita("Soy infinita");
    //  
    
//Ejercicio 2  
    
function myWriteFileSync(filePath, fileContent){
    fs.writeFileSync(filePath, fileContent);
}

//Ejercicio 3

function myReadFromFileSync(filePath){
    let content = fs.readFileSync(filePath,'utf8');
    console.log(content);

}

module.exports = {
    myWriteFileSync, myReadFromFileSync, imprimirRecursiva
}