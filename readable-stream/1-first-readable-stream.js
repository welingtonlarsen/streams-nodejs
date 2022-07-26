const { Readable } = require('stream');

// Creating a readable stream
const stream = new Readable({
  read() {}
})

// Pushing data into stream
stream.push('Hello\n')
stream.push('WORLD\n')

/*
  Flowing mode or push mode
  -Data is continuously pushed
 */
stream.on('data', (chunk) => {
  console.log(chunk.toString())
  // Whe can pause the stream to do some manipulation, like a sync database insert
  stream.pause()
  setTimeout(() => stream.resume(), 5000)
})

/*
  Paused mode or pull mode
  -Rather than pause and resume a stream, we can use a readable event
 */
stream.on('readable', () => {
  while (chunk = stream.read()) {
    console.log(chunk.toString())
    setTimeout(() => {}, 5000)
  }
})
