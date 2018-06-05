'use strict'

let movePercent
let target

function moveCard (isForward, targetString, currentPosition) {
  target = isForward ? targetString : currentPosition
  isForward ? movePercent = "0%" : movePercent = "100%"
  $(`section.card-container.${target}-card`).css({
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

module.exports = moveCard
