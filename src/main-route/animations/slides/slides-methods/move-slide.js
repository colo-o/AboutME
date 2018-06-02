'use strict'

const findPosition = require('./find-position')
const opacity = require('../opacity')
const isCardHide = require('../../secret-card/is-hide')

function moveSlide (currentPosition, isForward) {
  let movePercent
  isForward ? movePercent = "0" : movePercent = "100%"
  let { targetString } = findPosition(currentPosition, isForward)
  opacity(currentPosition, targetString)
  isCardHide(targetString)
  $('.slide-buttons').attr('current-pos', `${targetString}`)
  $(`.main-content-panel.${isForward ? targetString : currentPosition}`).css({
      "transition": "1.3s",
      "-webkit-transition": "1.3s",
      "-moz-transition": "1.3s",
      "-o-transition": "1.3s",
      "transition-timing-function": "cubic-bezier(.75,0,.54,.83)",
      "-webkit-transition-timing-function": "cubic-bezier(.75,0,.54,.83)",
      "-moz-transition-timing-function": "cubic-bezier(.75,0,.54,.83)",
      "-o-transition-timing-function": "cubic-bezier(.75,0,.54,.83)",
      "left": `${movePercent}`
  })
}

module.exports = moveSlide
