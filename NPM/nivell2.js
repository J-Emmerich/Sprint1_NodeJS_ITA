
//Dependencies ejercicio 2
const {spawn, fork} = require('child_process');

//Dependencies Exercicio 1 nivel 2
const {createReadStream, createWriteStream} = require('fs');
const zlib = require('zlib');
const {promisify} = require('util');
const stream = require('stream');
const pipeline = promisify(stream.pipeline);

//Nivell 2
//Ejercicio 1
// Comprimir fichero 

async function comprimirFichero(rutaFichero){
try{
    await pipeline(
    createReadStream(rutaFichero),
    zlib.createGzip(),
    createWriteStream(rutaFichero+".gz")
    );
    console.log("Fichero comprimido correctamente.")

}
catch(error){
    console.log(error.message);
}
}


//Ejercicio 2
// Listar contenido del directorio con childprocess
function thisDirectoryItems(){
   let thisDirItems = spawn('ls');
thisDirItems.stdout.on('data', data=>{
  console.log('Este es el contenido del directorio en que estás: \n'+data);
})
thisDirItems.stderr.on('data', ()=>{
    console.log("Un error ocurrió: " +data);
})
}


module.exports = {
    comprimirFichero, thisDirectoryItems
}
