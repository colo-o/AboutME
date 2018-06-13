'use strict'

const footerAnimation = require('./footer-animation')
const buttonAnimation = require('./button-animation')
let $offCanvas
let $header

function burgerAnimation () {
  $offCanvas = $('#o-m')
  $offCanvas.toggleClass('is-v-active')
  $header = $('#h')
  $header.toggleClass('h-clicked')
  buttonAnimation()
  $('.h-items div').toggleClass('h-item-clicked')
  footerAnimation()
}

module.exports = burgerAnimation
