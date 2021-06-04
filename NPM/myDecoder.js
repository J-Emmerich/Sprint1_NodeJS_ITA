const fs = require('fs');

//Nivel 3
//Ejercicio 1 y 2

function encodeFile(filePath, newFilePath, encodingTo){
    let contentOfFile = fs.readFileSync(filePath);
    let bufferFromFile = Buffer.from(contentOfFile, 'utf8');
    let str = bufferFromFile.toString(encodingTo);
    fs.writeFileSync(newFilePath,str)
}

function decodeToUTF8(filePath,newFilePath,encoding){
    let buff = fs.readFileSync(filePath,'utf8');
    let buffBase = Buffer.from(buff,encoding);
    const str = buffBase.toString('utf8');
    fs.writeFileSync(newFilePath,str);
}

function encodeToBase64andHex(filePath){
    encodeFile(filePath, `base64${filePath}`, 'base64');
    encodeFile(filePath,`hex${filePath}`,'hex');

}


module.exports = {
    decodeToUTF8, encodeFile,encodeToBase64andHex
}