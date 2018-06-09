'use strict'

function burgerAnimation () {
  $('#o-m').toggleClass('is-v-active')
  $('#h').toggleClass('h-clicked')
  $('.h-items p').toggleClass('h-item-clicked')
  $('.f-container').toggleClass('f-active')
}

module.exports = burgerAnimation
