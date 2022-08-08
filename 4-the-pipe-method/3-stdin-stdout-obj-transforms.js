const { Transform } = require('stream');

//https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/

const commaSplitter = new Transform({
  readableObjectMode: true,

  transform(chunk, encoding, callback) {
    console.log(chunk.toString())
    this.push(chunk.toString().trim().split(','));
    callback();
  }
})

const arrayToObject = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,

  transform(chunk, encoding, callback) {
    const obj = {};
    for(let i=0; i < chunk.length; i+=2) {
      obj[chunk[i]] = chunk[i+1];
    }
    this.push(obj);
    callback();
  }
});

const objectToString = new Transform({
  writableObjectMode: true,

  transform(chunk, encoding, callback) {
    this.push(JSON.stringify(chunk) + '\n');
    callback();
  }
});

process.stdin
    .pipe(commaSplitter)
    .pipe(arrayToObject)
    .pipe(objectToString)
    .pipe(process.stdout)
