const os = require('os');
const fs = require('fs');

process.send(fs.readdirSync(os.homedir()));

