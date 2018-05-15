'use strict'

const slides = ['home', 'design', 'develop', 'gaming']
let target
let movePercent

function findPosition (currentPosition) {
  let slidePosition = slides.findIndex((slide) => { return slide === currentPosition })
  
  isForward ? target = slides[slidePosition + 1] : target = slides[slidePosition - 1]

}

module.exports = findPosition
