const fs = require('fs');

process.title = "streamsnodejs";

const server = require('http').createServer();

server.on('request', (req, res) => {
  fs.readFile('./big-file.txt', (err, data) => {
    if (err) throw err;
    res.end(data);
  })
})

server.listen(8000);
