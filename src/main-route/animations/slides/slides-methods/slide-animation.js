'use strict'

let movePercent
let target

function slideAnimation ( isForward, targetString, currentPosition) {
  if (isForward) {
    $(`.mc-panel.mc-${targetString}`).toggleClass('is-s-visible')
    $(`.mc-panel.mc-${currentPosition}`).toggleClass('is-s-backward')
  } else {
    $(`.mc-panel.mc-${currentPosition}`).toggleClass('is-s-visible')
    $(`.mc-panel.mc-${targetString}`).toggleClass('is-s-backward')
  }
  $('.sb-container').attr('current-pos', `${targetString}`)
}

module.exports = slideAnimation
