'use strict'

const findPosition = require('./find-position')
const opacity = require('../opacity')
const isHideButton = require('../../secret-card/is-hide-button')
const slideAnimation = require('./slide-animation')
const toggleCard = require('../../secret-card/card-toggle') 

function pipeSlide (currentPosition, isForward) {
  let movePercent
  let { targetString } = findPosition(currentPosition, isForward)
  opacity(currentPosition, targetString)
  isHideButton(targetString)
  toggleCard(currentPosition)
  slideAnimation(isForward, targetString, currentPosition)
}

module.exports = pipeSlide
