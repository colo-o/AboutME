'use strict'

function opacity (currentPosition, targetPosition) {
  if (currentPosition === "home") {
    let log = $(`article.main-content-panel.${currentPosition} div:last-child`)
    console.log(log)
  }
}

module.exports = opacity
