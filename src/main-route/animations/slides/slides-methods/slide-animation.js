'use strict'

let movePercent
let target

function slideAnimation ( isForward, targetString, currentPosition) {
  target = isForward ? targetString : currentPosition
  $('.sb-container').attr('current-pos', `${targetString}`)
  $(`.mc-panel.mc-${target}`).toggleClass('is-s-visible')
}

module.exports = slideAnimation
