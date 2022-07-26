const fs = require('fs');
const { Readable, Transform } = require('stream');

const myReadableStream = new Readable({
  read() {}
})

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    transformStream.push(`${chunk.toString().toUpperCase()}\n`)
    callback()
  }
})

const writableStream = fs.createWriteStream('./my-file.txt');

myReadableStream.push('HELLO');
myReadableStream.push('WORLD');
myReadableStream.push('AND');
myReadableStream.push('MY COLLEAGUES');

myReadableStream.pipe(transformStream).pipe(writableStream);
