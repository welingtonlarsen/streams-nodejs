const fs = require('fs');

process.title = "streamsnodejs";

const server = require('http').createServer();

server.on('request', (req, res) => {
  const stream = fs.createReadStream('./big-file.txt');
  stream.pipe(res);
});

server.listen(8000);
