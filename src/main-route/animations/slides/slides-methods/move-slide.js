'use strict'

const findPosition = require('./find-position')
const opacity = require('../opacity')

function moveSlide (currentPosition, isForward) {
  let movePercent
  isForward ? movePercent = "0" : movePercent = "100%"
  let { targetString } = findPosition(currentPosition, isForward)
  opacity(currentPosition, targetString)
  $('.slide-buttons').attr('current-pos', `${targetString}`)
  $(`.main-content-panel.${isForward ? targetString : currentPosition}`).css({
      transition: "1s",
      transitionTimingFunction: "cubic-bezier(.75,0,.54,.83)",
      left: `${movePercent}`
  })
}

module.exports = moveSlide
