'use strict'

let moveValue = 90

function animationMove (isDown, currentTarget) {
  let $slideWillMove = $(`section.main-content-scroll.${currentTarget}-scroll`)
  if (isDown) {
    $slideWillMove.css({
      "background": "black"
    })
  } else {
    $slideWillMove.css({
      "background": "green"
    })
  }
}

module.exports = animationMove
