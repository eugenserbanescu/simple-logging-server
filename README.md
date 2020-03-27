# Simple logging server

It'll just log out the path, verb and headers that it was called with
Responds 200 :)

To run with node either `npm start` or `node index.js`
To run with Docker `docker build .`

## Port

By default it runs on port `1337` but can be changed via environment variable:
```bash
PORT=1234 node index.js
```
