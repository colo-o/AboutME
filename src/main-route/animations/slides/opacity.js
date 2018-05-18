'use strict'

function opacity (currentPosition, targetPosition) {
  let currentSlide = $(`article.main-content-panel.${currentPosition} div:last-child`)
  if (currentPosition === "home") {
    currentSlide.toggleClass('active')
  }
  if (currentPosition != "home") {
    currentSlide.toggleClass('active')
  }
  let targetSlide = $(`article.main-content-panel.${targetPosition} div:last-child`)
  targetSlide.toggleClass('active')
}

module.exports = opacity
