'use strict'

import SlideWillMove  from './SlideAnimations'
import isHideButton from '../../secret-card/is-hide-button'
import toggleCard from '../../secret-card/card-toggle'

let slideAnimIns = new SlideWillMove()

export default function pipeSlide (currentPosition, isForward) {
  let targetString = slideAnimIns.singleMoveTargets(currentPosition, isForward)
  slideAnimIns.singleAnimationMove(targetString, currentPosition, isForward)
  slideAnimIns.opacityToggle(targetString, currentPosition)
  isHideButton(targetString)
  toggleCard(currentPosition)
}
