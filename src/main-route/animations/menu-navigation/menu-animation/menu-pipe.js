'use strict'

import SlideWillMove  from '../../slides/slides-methods/SlideAnimations'

let SlideAnimIns = new SlideWillMove()

export default function menuPipe (currentPosition, navPos) {
  let { targets, isForward } = SlideAnimIns.multipleMoveTargets(currentPosition, navPos)
  SlideAnimIns.multipleAnimationMove(targets, navPos, currentPosition, isForward)
}
