const fs = require('fs');
const miCrypto = require('./crypto.js');
const decoder = require('./myDecoder.js')
const {myWriteFileSync, myReadFromFileSync, imprimirRecursiva} = require('./Nivell1.js');
const {comprimirFichero, thisDirectoryItems} = require('./nivell2');

(async ()=>{
    try{
        setTimeout(()=>thisDirectoryItems(),3500);
        imprimirRecursiva('Una frase recursiva 3 veces', 3);
        myWriteFileSync('file.txt', 'Mi nombre es João');
        console.log('Wrote file.txt');
        console.log('The content of the file is: ');
        myReadFromFileSync('file.txt');
        await comprimirFichero('file.txt');
        decoder.encodeToBase64andHex('file.txt');
        console.log('Encoded to Base64 and Hex');
        fs.unlinkSync('file.txt');
        console.log("Deleted file.txt");
        miCrypto.encryptAndDelete('base64file.txt','secretBase64.txt');
        console.log('Encrypted and deleted base64file.txt');
        miCrypto.encryptAndDelete('hexfile.txt','secretHex.txt');
        console.log('Encrypted and deleted hexfile.txt');
        miCrypto.decryptAndDecode('secretHex.txt','yoFuiHex.txt','hex');
        console.log('Decrypted and decoded secretHex');
        miCrypto.decryptAndDecode('secretBase64.txt','yoFuiBase64.txt','base64');
        console.log('Decrypted and decoded secretBase64');
    }
    catch(err){
        console.log(err.message);
    }   
})();


