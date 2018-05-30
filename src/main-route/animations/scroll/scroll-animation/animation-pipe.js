'use strict'

const scrollDirection = require('./scroll-direction')
const animationMove = require('./animation-move')

function animationPipe (args) {
  let { ev, scrollValue, currentTarget } = args
  let direction = scrollDirection(scrollValue, currentTarget)
  animationMove(direction, currentTarget)
  console.log(direction)
}

module.exports = animationPipe
