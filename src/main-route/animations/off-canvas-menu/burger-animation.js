'use strict'

let $footer
let footerAttr

function burgerAnimation () {
  $('#o-m').toggleClass('is-v-active')
  $('#h').toggleClass('h-clicked')
  $('.h-items p').toggleClass('h-item-clicked')
  $footer = $('.f-container')
  $footer.toggleClass('f-active')

  footerAttr = $footer.attr('o-s')

  if (footerAttr === "off") {
    $footer.attr('o-s', 'on')
  } else {
    $footer.attr('o-s', 'off')
  }
}

module.exports = burgerAnimation
