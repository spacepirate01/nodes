const fs = require('fs');
const files = fs.readFileSync('./tests/first.txt', 'utf8');
console.log(files);
fs.writeFileSync('./tests/second.txt', 'Hello there', {flag: 'a'});