'use strict'

import SlideWillMove  from '../../slides/slides-methods/SlideAnimations'

let SlideAnimIns = new SlideWillMove()

export default function menuPipe (currentPosition, navPos) {
  SlideAnimIns.multipleMoveTargets(currentPosition, navPos)
}
