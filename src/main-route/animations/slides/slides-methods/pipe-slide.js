'use strict'

import SlideWillMove from './SlideAnimations'
import toggleCard from '../../secret-card/card-toggle'

let slideAnimIns = new SlideWillMove()

export default function pipeSlide (currentPosition, isForward) {
  let targetString = slideAnimIns.singleMoveTargets(currentPosition, isForward)
  slideAnimIns.animationMove(targetString, currentPosition, isForward)
  slideAnimIns.animateContent(targetString, isForward)
  toggleCard(currentPosition)
}
