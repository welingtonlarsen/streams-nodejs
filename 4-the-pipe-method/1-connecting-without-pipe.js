const fs = require('fs');
const { Readable } = require('stream');

const myReadableStream = new Readable({
  read() {}
})
const writableStream = fs.createWriteStream('./my-file.txt');

myReadableStream.push('HELLO');
myReadableStream.push('WORLD');
myReadableStream.push('AND');
myReadableStream.push('MY COLLEAGUES');

myReadableStream.on('data', (chunk) => {
  writableStream.write(`${chunk}\n`)
})
