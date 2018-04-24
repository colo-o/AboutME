'use strict'

let express = require('express');
let server = express();
let port = 8080

server.get('/', (req, res) => {
  res.send('Hello World');
})

server.get('*', (req, res) => {
  res.send(404, 'No Encontramos lo que estas buscando');
})

server.listen(port, () => {
  console.log('Server is running');
})