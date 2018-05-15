'use strict'

let movePercent
let $currentSlide
const moveSlide = require('./slides-methods/move-slide')

$().ready(function () {
  // previous button function animation
  $('#backward').click(function (ev) {
    $currentSlide = $('.slide-buttons').attr('current-pos')
    moveSlide($currentSlide, false)
  })
  // next button function animation
  $('#forward').click(function (ev) {
    $currentSlide = $('.slide-buttons').attr('current-pos')
    moveSlide($currentSlide, true)
  })
})
