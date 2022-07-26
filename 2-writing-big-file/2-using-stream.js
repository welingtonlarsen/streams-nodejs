const fs = require('fs');

process.title = "streamsnodejs";
const LOREN_SENTENCE = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n'

const stream = fs.createWriteStream('./big-file-stream.txt');

for(let i=0; i<= 1e6; i++) {
  stream.write(LOREN_SENTENCE);
}
stream.end('last line');

// We can put a timeout to be slower
// for (let index = 0; index <= 1e6; index++) {
//   setTimeout(function(){
//     console.log(`index: ${index}`)
//     stream.write(LOREN_SENTENCE)
//     if (index === 1000) stream.end('last line')
//   }, 3 * index)
// }
