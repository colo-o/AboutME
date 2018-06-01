'use strict'

const page = require('page')
const template = require('./template')
const empty = require('empty-element')
require('./animations/slides/slides-animations')
require('./card-button/index')
// require('./tools/hide-scroll')

page('/', function () {
  let main = document.getElementById('sz')
  main.insertBefore(template, main.childNodes[0])
})
