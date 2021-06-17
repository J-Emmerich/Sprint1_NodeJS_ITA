const fs = require('fs');


function writeAsync(filePath, fileContent){
    let writable = fs.createWriteStream(filePath); //output
try{
    writable.write(fileContent)
    writable.end(()=>{
        console.log("This is the End")
        });
}catch(err){
    console.log(err)
}
}

function readAsync(filePath){
    let readable = fs.createReadStream(filePath);
    readable.setEncoding();
    try{
        readable.on('data', (chunk)=>{
           console.log(chunk);

        })
    }    
    catch(err){
        console.log(err);
    }

}
let data = "This is my other data";


fs.writeFile('text.txt', data, (err)=>{
    if(err) throw err
   // readAsync("text.txt")
})






// writeAsync("text.txt", "Otra Cosita");
// readAsync("text.txt");