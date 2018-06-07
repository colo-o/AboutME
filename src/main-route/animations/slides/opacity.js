'use strict'

function opacity (currentPosition, targetPosition) {
  let currentSlide = $(`article.mc-panel.mc-${currentPosition} div:last-child`)
  if (currentPosition === "home") {
    currentSlide.toggleClass('active')
  }
  if (currentPosition != "home") {
    currentSlide.toggleClass('active')
  }
  let targetSlide = $(`article.mc-panel.mc-${targetPosition} div:last-child`)
  targetSlide.toggleClass('active')
}

module.exports = opacity
