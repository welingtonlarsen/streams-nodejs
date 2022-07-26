const fs = require('fs');

process.title = "streamsnodejs";
const LOREN_SENTENCE = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n'

for (let index = 0; index <= 1e6; index++) {
  console.log(`index: ${index}`)
  fs.writeFile('big-file-async.txt', LOREN_SENTENCE, { flag: 'a+' }, err => {
    if (err) throw err;
  })
}
