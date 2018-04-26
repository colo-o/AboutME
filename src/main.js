'use strict'

let saludar = require('./Home/index')
let page = require('page')

alert('Hola perros')

page('/', saludar)
// page('*', NotFound)

function NotFound () {
  alert('NO ENCONTRAMOS LO QUE BUSCAS')
}

page()
