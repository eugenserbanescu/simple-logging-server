const http = require('http')
const PORT = Number.parseInt(process.env.PORT) || 1337

const server = http.createServer((req, res) => {
  console.log(`Got a ${req.method} request to ${req.url}`);
  console.log(JSON.stringify(req.rawHeaders));
  if (req.method == 'POST') {
    req.on('data', function(chunk) {
      console.log(chunk.toString());
    });
    res.end("YAY!")
  } else {
    res.end("YAY!")
  }
});

server.listen(PORT, '0.0.0.0', () => {console.log(`Started listening on ${PORT}`)})
