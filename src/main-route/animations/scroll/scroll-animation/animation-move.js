'use strict'

const calcPercent = require('./calc-percent/calc-percent')
const animationStyle = require('./animation-style')
let calcResult

function animationMove (isDown, currentTarget) {
  let $slideWillMove = $(`section.main-content-scroll.${currentTarget}-scroll`)
  let offsetValue = $slideWillMove[0].offsetTop
  calcResult = calcPercent(offsetValue, isDown)

  if (!calcResult.canBeAnimated) {
    return false
  }
  animationStyle(calcResult.offsetPercent, $slideWillMove, isDown)
  console.log(offsetValue)
  console.log(calcResult)
}

module.exports = animationMove
