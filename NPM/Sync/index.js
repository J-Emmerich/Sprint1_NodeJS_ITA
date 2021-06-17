const fs = require('fs');
const miCrypto = require('./crypto.js');
const decoder = require('./myDecoder.js')
const {myWriteFileSync, myReadFromFileSync, imprimirRecursivaInfinita} = require('./Nivell1.js');
const {comprimirFichero} = require('./nivell2');
const {listUserDir} = require('./parent.js');
(async ()=>{
    try{
        listUserDir();
        imprimirRecursivaInfinita('Una frase recursiva infinita');
        myWriteFileSync('file.txt', 'Mi nombre es João');     
        myReadFromFileSync('file.txt');
        await comprimirFichero('file.txt');
        decoder.encodeToBase64andHex('file.txt');
        
        fs.unlinkSync('file.txt');
        console.log("Deleted file.txt");
        miCrypto.encryptAndDelete('base64file.txt','secretBase64.txt');
       
        miCrypto.encryptAndDelete('hexfile.txt','secretHex.txt');
        miCrypto.decryptAndDecode('secretHex.txt','yoFuiHex.txt','hex');
        miCrypto.decryptAndDecode('secretBase64.txt','yoFuiBase64.txt','base64');
       }
    catch(err){
        console.log(err.message);
    }   
})();




