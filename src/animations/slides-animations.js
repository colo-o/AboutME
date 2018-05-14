'use strict'

let direction
let movePercent

$().ready(function () {

  $('#backward').click(function (ev) {
    let $currentSlide = $('.slide-buttons').attr('current-pos')
    direction = false
    switch ($currentSlide) {
      case 'home':
        break;
      case 'design':
        moveSlide("design", direction)
        break;
      case 'develop':
        moveSlide("develop", direction)
        break;
      case 'gaming':
        moveSlide("gaming", direction)
        break;
    }
  })

  $('#forward').click(function (ev) {
    let $currentSlide = $('.slide-buttons').attr('current-pos')
    direction = true
    switch ($currentSlide) {
      case 'home':
        moveSlide("design", direction)
        break;
      case 'design':
        moveSlide("develop", direction)
        break;
      case 'develop':
        moveSlide("gaming", direction)
        break;
      case 'gaming':
        break;
    }
  })

  function moveSlide (target, direction) {
    $('.slide-buttons').attr('current-pos', `${target}`)
    direction ? movePercent = "0" : movePercent = "100%"
    $(`.main-content-panel.${target}`).css({
      transition: "1.5s",
      transitionTimingFunction: "cubic-bezier(.23,.61,.66,.98)",
      left: `${movePercent}`
    })
    direction = null
  }

})
