'use strict'

import pipeSlide from '../../slides/slides-methods/pipe-slide'
import slideWillMove from './slide-will-move'
import isForward from './is-forward'

export default function menuPipe (navPos) {
  let { isForwardVar, currentPosition } = isForward(navPos)
  // console.log(isForwardVar, currentPosition)
  pipeSlide(currentPosition, isForwardVar)
  slideWillMove(currentPosition, isForwardVar, navPos)
}
