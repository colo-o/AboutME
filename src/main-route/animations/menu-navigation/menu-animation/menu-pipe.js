'use strict'

const pipeSlide = require('../../slides/slides-methods/pipe-slide')
const slideWillMove = require('./slide-will-move')
const isForward = require('./is-forward')

function menuPipe (navPos) {
  let { isForwardVar, currentPosition } = isForward(navPos)
  // console.log(isForwardVar, currentPosition)
  pipeSlide(currentPosition, isForwardVar)
  slideWillMove(currentPosition, isForwardVar, navPos)
}

module.exports = menuPipe
