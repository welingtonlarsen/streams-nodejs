const fs = require('fs');

process.title = "streamsnodejs";

// 1 - Reading the whole file
fs.readFile('./big-file.txt', (err, data) => {
  if (err) throw err;
  // 2 - Working with the file or making some manipulation
  console.log('\x1b[33m%s\x1b[0m', 'whole file received:')
  console.log(data.toString());
  console.log('\x1b[33m%s\x1b[0m', 'whole file logged')
})
