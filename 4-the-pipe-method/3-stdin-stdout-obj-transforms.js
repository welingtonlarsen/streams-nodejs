const { Transform } = require('stream');

const commaSplitter = new Transform({
  readableObjectMode: true,

  transform(chunk, encoding, callback) {
    this.push(chunk.toString().trim().split(','));
    callback();
  }
})

const arrayToObject = new Transform({
//https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/
})
