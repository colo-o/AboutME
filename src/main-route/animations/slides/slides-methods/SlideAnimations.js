'use strict'

let slides 
// let 

export default class {
  constructor () {
    slides = ['home', 'design', 'develop', 'gaming']
  }

  singleMoveTargets (currentPosition, isForward) {
    let target = this.findPosition(currentPosition, isForward, true)
    if (isForward) {
      
    }
  }

  multipleMoveTargets () {

  }

  findPosition (currentPosition, isForward, comeFrom, targetNav) {
    let currentIndex
    let targetString

    if (comeFrom) {
      currentIndex = slides.findIndex((slide) => {
        if (slide === currentPosition) return slide
      })
    console.log(currentIndex)
    }
  }
}
