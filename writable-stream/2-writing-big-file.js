const fs = require('fs')

const stream = fs.createWriteStream('big-file.txt', {flags: 'w', encoding: 'utf-8'})

for (let index = 0; index <= 1e6; index++) {
  setTimeout(function(){
    console.log(`index: ${index}`)
    stream.write(`line ${index}\n`)
    if (index === 1000) stream.end('last line')
  }, 5000 * index)
}
