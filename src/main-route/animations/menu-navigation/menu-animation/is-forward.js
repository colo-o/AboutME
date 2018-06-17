'use strict'

import findIndex from '../../slides/slides-methods/SlideAnimations'
let isForwardVar

export default function isForward (navPos) {
  let currentPosition = $('#trg').attr('current-pos')
  let { navCurrentPos, navIndex } = findIndex(currentPosition, false, true, navPos)
  // console.log(navCurrentPos, navIndex)
  if (navCurrentPos === navIndex) {
    return false
  }
  (navIndex > navCurrentPos) ? isForwardVar = true : isForwardVar = false
  return { isForwardVar, currentPosition }
}
