'use strict'

let $footer
let footerAttr

export default function footerAnimation () {
  $footer = $('.f-container')
  $footer.toggleClass('f-active')

  footerAttr = $footer.attr('o-s')

  if (footerAttr === 'off') {
    $footer.attr('o-s', 'on')
  } else {
    $footer.attr('o-s', 'off')
  }
}
