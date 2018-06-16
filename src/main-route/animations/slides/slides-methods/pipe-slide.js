'use strict'

import SlideWillMove  from './SlideAnimations'
// const slideAnimations = require('./SlideAnimations')
const opacity = require('../opacity')
const isHideButton = require('../../secret-card/is-hide-button')
// const slideAnimation = require('./slide-animation')
const toggleCard = require('../../secret-card/card-toggle')

let slideAnimIns = new SlideWillMove()

module.exports = function pipeSlide (currentPosition, isForward) {
  slideAnimIns.singleMoveTargets(currentPosition, isForward)
  
  // let targetString = findPosition(currentPosition, isForward)
  // opacity(currentPosition, targetString)
  // isHideButton(targetString)
  // toggleCard(currentPosition)
  // slideAnimation(isForward, targetString, currentPosition)
}

module.exports = pipeSlide
