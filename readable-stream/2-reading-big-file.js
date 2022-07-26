const fs = require('fs')

/*
  -If remove utf-8, the chunk will be a Buffer
 */
const stream = fs.createReadStream(`${__dirname}/big-file.txt`, 'utf-8')

// Flowing mode
stream.on('data', (chunk) => {
  console.log('\x1b[33m%s\x1b[0m', 'new chunk received:')
  console.log(chunk)
  console.log('\x1b[33m%s\x1b[0m', 'chunk logged')
  stream.pause()
  setTimeout(() => stream.resume(), 10000)
})
