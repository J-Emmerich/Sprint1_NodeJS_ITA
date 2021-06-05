const {fork} = require('child_process');


function listUserDir(){

    const forked = fork('child.js');
    forked.on('message', msg =>{
        console.log('Print user directory with child_process: ');
        console.log(msg);
    })
}

module.exports = {
    listUserDir
}