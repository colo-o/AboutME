'use strict'

const page = require('page')
const template = require('./template')
const empty = require('empty-element')
require('./animations/slides/slides-events')
require('./animations/secret-card/card-events')
require('./animations/off-canvas-menu/menu-events')

page('/', function () {
  let main = document.getElementById('sz')
  main.insertBefore(template, main.childNodes[0])
})
