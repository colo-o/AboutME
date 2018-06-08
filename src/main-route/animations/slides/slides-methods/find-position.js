'use strict'

const slides = ['home', 'design', 'develop', 'gaming']
let targetString
let targetIndex
let previousTarget

function calcPosition (currentPosition, isForward) {
  let currentSlideIndex = findPositionIndex(currentPosition)
  targetString = isForward ? slides[currentSlideIndex + 1] : slides[currentSlideIndex - 1]
  return targetString
}

function findPositionIndex (position) {
  return slides.findIndex((slide) => { return slide === position })
}

module.exports = calcPosition
