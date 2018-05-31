'use strict'

let resultPercent

function animationStyle (offsetPercent, slideObj, isDown) {
  if (isDown) {
    resultPercent = offsetPercent - 1
  } else {
    resultPercent = offsetPercent + 1
  }
  slideObj.css({
    "top": `${resultPercent}%`
  })
}

module.exports = animationStyle