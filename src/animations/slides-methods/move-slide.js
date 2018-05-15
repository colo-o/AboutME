'use strict'

const findPosition = require('./find-position')

function moveSlide (currentPosition, isForward) {
  isForward ? movePercent = "0" : movePercent = "100%"
  $('.slide-buttons').attr('current-pos', `${slides[slidePosition]}`)
  $(`.main-content-panel.${target}`).css({
      transition: "1s",
      transitionTimingFunction: "cubic-bezier(.75,0,.25,1)",
      left: `${movePercent}`
  })
}

module.exports = moveSlide
