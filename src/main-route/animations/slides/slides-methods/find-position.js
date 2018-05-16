'use strict'

const slides = ['home', 'design', 'develop', 'gaming']
let targetString
let targetIndex

function calcPosition (currentPosition, isForward) {
  let currentSlideIndex = findPositionIndex(currentPosition)
  targetString = isForward ? slides[currentSlideIndex + 1] : slides[currentSlideIndex - 1]
  targetIndex = isForward ? currentSlideIndex + 1 : currentSlideIndex - 1
  return { targetIndex, targetString }
}

function findPositionIndex (position) {
  return slides.findIndex((slide) => { return slide === position })
}

module.exports = calcPosition
