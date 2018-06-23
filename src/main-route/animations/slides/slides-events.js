'use strict'

let $currentSlide
import pipeSlide from './slides-methods/pipe-slide'
import buttonAnimation from './slides-methods/button-animation'

$().ready(function () {
  // previous button function animation
  $('#backward').click(function () {
    $currentSlide = $('.sb-container').attr('current-pos')
    pipeSlide($currentSlide, false)
    buttonAnimation(false)
  })
  // next button function animation
  $('#forward').click(function () {
    $currentSlide = $('.sb-container').attr('current-pos')
    pipeSlide($currentSlide, true)
    buttonAnimation(true)
  })
})
