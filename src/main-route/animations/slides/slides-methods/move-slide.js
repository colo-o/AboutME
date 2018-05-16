'use strict'

const findPosition = require('./find-position')
const hideButton = require('../../hide-buttons/hide')

function moveSlide (currentPosition, isForward) {
  let movePercent
  isForward ? movePercent = "0" : movePercent = "100%"
  let { targetString, targetIndex } = findPosition(currentPosition, isForward)
  if (targetIndex = 3) { hideButton(targetIndex) }
  $('.slide-buttons').attr('current-pos', `${targetString}`)
  $(`.main-content-panel.${isForward ? targetString : currentPosition}`).css({
      transition: "1s",
      transitionTimingFunction: "cubic-bezier(.75,0,.25,1)",
      left: `${movePercent}`
  })
}

module.exports = moveSlide
