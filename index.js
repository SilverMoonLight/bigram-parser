const fs = require('fs');
const path = require('path');
const parser = require('./parser');

let input = fs.readFileSync(path.resolve(__dirname, 'inputText.txt'), 'utf8');
const results = parser(input);

const writeStream = fs.createWriteStream('output.txt');
results.forEach(result => writeStream.write(`${result}\n`));
writeStream.end();