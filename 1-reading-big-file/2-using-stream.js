const fs = require('fs')

process.title = "streamsnodejs";

// 1 - Create a stream
const stream = fs.createReadStream(`${__dirname}/big-file.txt`, 'utf-8');

// 2 - Reading and manipulating each chunk
stream.on('data', (chunk) => {
  console.log('\x1b[33m%s\x1b[0m', 'new chunk received:')
  console.log(chunk)
  console.log('\x1b[33m%s\x1b[0m', 'chunk logged')
})
