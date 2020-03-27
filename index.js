const http = require('http')
const PORT = process.env.PORT || 1337

const server = http.createServer((req, res) => {
  console.log(`Got a ${req.method} request to ${req.url}`);
  console.log(JSON.stringify(req.rawHeaders));
  res.end("YAY!")
});

server.listen(PORT)
console.log(`Started listening on ${PORT}`)
