'use strict'

const slides = ['home', 'design', 'develop', 'gaming']
let targetString
let targetIndex
let currentSlideIndex
let navIndex
let navCurrentPos
let target

function calcPosition (currentPosition, isForward, fromNav, navPos) {
  // If method is called from nav module, this return only index of nav position and current slide
  if (fromNav) {
    navCurrentPos = findPositionIndex(currentPosition)
    navIndex = findPositionIndex(navPos)
    return { navCurrentPos, navIndex }
  }
  // // If method is called from slide module, this return only the targetString 
  let currentSlideIndex = findPositionIndex(currentPosition)
  targetString = isForward ? slides[currentSlideIndex + 1] : slides[currentSlideIndex - 1]
  return targetString
}
// This method find the right position of each one currentPosition
function findPositionIndex (position) {
  return slides.findIndex((slide) => { return slide === position })
}

module.exports = calcPosition, findPositionIndex
