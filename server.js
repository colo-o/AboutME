'use strict'

let express = require('express')
let server = express()
let port = 8080

server.use(express.static('styles'))
server.set('views', './views')
server.set('view engine', 'pug')

server.get('/', (req, res) => {
  res.render('index', { title: 'Mi Aplicacion con PUG', message: 'Hola desde un motor de templates' })
})

server.get('*', (req, res) => {
  res.status(404).send('<h2 style="color: red;">No Encontramos lo que estas buscando</h2>')
})

server.listen(port, () => {
  console.log('Server is running')
})
