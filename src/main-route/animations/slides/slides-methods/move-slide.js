'use strict'

const findPosition = require('./find-position')
const opacity = require('../opacity')

function moveSlide (currentPosition, isForward) {
  let movePercent
  // isForward ? movePercent = "0" : movePercent = "100%"
  let { targetString } = findPosition(currentPosition, isForward)
  // opacity(currentPosition, targetString)
  if (targetString === "design") { movePercent = "100%" }
  if (targetString === "develop") { movePercent = "200%"}
  if (targetString === "gaming") { movePercent = "300%" }
  $('.slide-buttons').attr('current-pos', `${targetString}`)
  $(`.main-content-panel.${isForward ? targetString : currentPosition}`).css({
      "transition": "1s",
      "-webkit-transition": "1s",
      "-moz-transition": "1s",
      "-o-transition": "1s",
      "transition-timing-function": "cubic-bezier(.75,0,.54,.83)",
      "-webkit-transition-timing-function": "cubic-bezier(.75,0,.54,.83)",
      "-moz-transition-timing-function": "cubic-bezier(.75,0,.54,.83)",
      "-o-transition-timing-function": "cubic-bezier(.75,0,.54,.83)",
      "left": `${movePercent}`
  })
}

module.exports = moveSlide
