const fs = require('fs');

/*
To encode:
read from a  file and save as a variable. 


*/

function encodeAsync(filePath){
    let readable = fs.createReadStream(filePath);
    let writable = fs.createWriteStream(`${filePath}.enc`)
    readable.on('data', (chunk)=>{
        writable.write(chunk.toString('base64'));
    })
}

function decodeAsync(filePath){
    let readable = fs.createReadStream(filePath);
    readable.setEncoding('utf8');
    let writable = fs.createWriteStream('decoded.txt');
    readable.on('data', (chunk)=>{
        let buff = Buffer.from(chunk, 'base64');
        writable.write(buff.toString())
    })
}



decodeAsync('text.txt.enc');

function encodeFile(filePath, newFilePath, encodingTo){
    let contentOfFile = fs.readFileSync(filePath);
    let bufferFromFile = Buffer.from(contentOfFile, 'utf8');
    let str = bufferFromFile.toString(encodingTo);
    console.log('File encoded to: ' +encodingTo);
    fs.writeFileSync(newFilePath,str)
    console.log('Wrote file: ' +newFilePath);
}

function decodeToUTF8(filePath,newFilePath,encoding){
    let buff = fs.readFileSync(filePath,'utf8');
    let buffBase = Buffer.from(buff,encoding);
    const str = buffBase.toString('utf8');
    console.log('File decoded from: ' +encoding)
    fs.writeFileSync(newFilePath,str);
    console.log('Wrote file: ' +newFilePath);
}

function encodeToBase64andHex(filePath){
    encodeFile(filePath, `base64${filePath}`, 'base64');
    encodeFile(filePath,`hex${filePath}`,'hex');

}


module.exports = {
    decodeToUTF8, encodeFile,encodeToBase64andHex
}