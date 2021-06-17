const crypto = require('crypto');
const fs = require('fs');
const decoder = require('./myDecoder.js');


//Nivel 3
// Ejercicio 2

function encrypt(buffer, endFilePath){
    let iv = crypto.randomBytes(16);
    let algorithm = 'aes-192-cbc';
    let key = "123456789123456789123456";
    let encrypt = crypto.createCipheriv(algorithm, key, iv);
    
    let result = Buffer.concat([iv, encrypt.update(buffer), encrypt.final()]);
    console.log('File encrypted: ' +endFilePath);
    fs.writeFileSync(endFilePath,result);
    console.log('Wrote file: ' + endFilePath);
}

function encryptAndDelete(filename, endFilePath){
    try{
        let buf = fs.readFileSync(filename);
        encrypt(buf, endFilePath);
        fs.unlinkSync(filename);
    }
catch(err){
    console.log(err.message);
}
}

// Ejercicio 3

function decrypt(buffer,endFilePath){
   
   try{
    const iv = buffer.slice(0, 16);
    const buf = buffer.slice(16);
    let algorithm = 'aes-192-cbc';
    let key = "123456789123456789123456";
    const decrypt = crypto.createDecipheriv(algorithm, key, iv);
    const result = Buffer.concat([decrypt.update(buf), decrypt.final()]);
    console.log('File decrypted: ' +endFilePath);
   fs.writeFileSync(endFilePath,result)
   console.log('Wrote file: ' +endFilePath);
   }
   catch(error){
       console.log(error.message);
   }
  
}
function decryptAndDecode(filename, endFilePath,encoding){
    let buf = fs.readFileSync(filename);
    decrypt(buf, endFilePath);
    decoder.decodeToUTF8(endFilePath,`decoded${endFilePath}`,encoding);
    fs.unlinkSync(endFilePath);
}

module.exports = {
    encrypt, decrypt, encryptAndDelete, decryptAndDecode
}