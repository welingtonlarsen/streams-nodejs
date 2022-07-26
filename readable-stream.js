const { Readable } = require('stream');

// ODD WAY
const inStream = new Readable({
  read() {}
})

inStream.push('HELLO\n');
inStream.push('WORLD\n');

/*
inStream.on('data', (chunk) => {
  console.log(chunk.toString())
  inStream.pause();
  setTimeout(() => inStream.resume(), 5000)
})
*/
// FIRST IMPROVE
inStream.on('readable', () => {
  while (chunk = inStream.read()) {
    console.log(chunk.toString())
  }
})



//inStream.pipe(process.stdout);
