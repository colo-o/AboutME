'use strict'

import footerAnimation from './footer-animation'
import buttonAnimation from './button-animation'
let $offCanvas
let $header
let $offCanvasItems

export default function burgerAnimation () {
  $offCanvas = $('#o-m')
  $offCanvas.toggleClass('is-v-active')
  $header = $('#h')
  $header.toggleClass('h-clicked')
  $offCanvasItems = $('#o-m .o-items')
  $offCanvasItems.toggleClass('show-items')
  buttonAnimation()
  $('.h-items div').toggleClass('h-item-clicked')
  footerAnimation()
}
