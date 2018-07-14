'use strict'

import SlideWillMove from '../../slides/slides-methods/SlideAnimations'
import isHideButton from '../../secret-card/is-hide-button'
import toggleCard from '../../secret-card/card-toggle'

let SlideAnimIns = new SlideWillMove()

export default function menuPipe (currentPosition, navPos) {
  let { targets, isForward } = SlideAnimIns.multipleMoveTargets(currentPosition, navPos)
  if (targets) {
    SlideAnimIns.animationMove(targets, currentPosition, isForward, navPos)
    SlideAnimIns.animateContent(navPos, isForward)
    isHideButton(navPos)
    toggleCard(currentPosition)
  }
}
