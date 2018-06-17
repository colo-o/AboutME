'use strict'

let movePercent
let $currentSlide
import pipeSlide from './slides-methods/pipe-slide'

$().ready(function () {
  // previous button function animation
  $('#backward').click(function () {
    $currentSlide = $('.sb-container').attr('current-pos')
    pipeSlide($currentSlide, false)
  })
  // next button function animation
  $('#forward').click(function () {
    $currentSlide = $('.sb-container').attr('current-pos')
    pipeSlide($currentSlide, true)
  })
})
