'use strict'

let movePercent
let $currentSlide
const pipeSlide = require('./slides-methods/pipe-slide')

$().ready(function () {
  // previous button function animation
  $('#backward').click(function (ev) {
    $currentSlide = $('.sb-container').attr('current-pos')
    pipeSlide($currentSlide, false)
  })
  // next button function animation
  $('#forward').click(function (ev) {
    $currentSlide = $('.sb-container').attr('current-pos')
    pipeSlide($currentSlide, true)
  })
})
