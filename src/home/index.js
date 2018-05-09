'use strict'

let page = require('page')
let template = require('./template')
let empty = require('empty-element')
let scene = require('./scrollAnimations')


page('/', function () {
  let main = document.getElementById('main-container')
  empty(main).appendChild(template)
  // scene()
})
