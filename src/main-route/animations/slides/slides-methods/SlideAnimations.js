'use strict'

let slides 
// let 

export default class {
  constructor () {
    slides = ['home', 'design', 'develop', 'gaming']
  }

  singleMoveTargets (currentPosition, isForward) {
    let currentIndex
    let targetString

    currentIndex = slides.findIndex((slide) => {
      if (slide === currentPosition) return slide
    })

    isForward ? targetString = slides[currentIndex + 1] : targetString = slides[currentIndex - 1]
    return targetString
  }

  multipleMoveTargets (currentPosition, targetNav, isForward) {
    let arrayIndexPos = []
    let arrayStringPos = [ currentPosition, targetNav ]

    arrayStringPos.map((string) => {
      let index = slides.findIndex((slide) => {
        if (string === slide) return slide
      })
      arrayIndexPos.push(index)
    })

    console.log(arrayIndexPos)

  }

  animationMove (targetString, currentPosition, isForward) {
    if (isForward) {
      $(`.mc-panel.mc-${targetString}`).toggleClass('is-s-visible')
      $(`.mc-panel.mc-${currentPosition}`).toggleClass('is-s-backward')
    } else {
      $(`.mc-panel.mc-${currentPosition}`).toggleClass('is-s-visible')
      $(`.mc-panel.mc-${targetString}`).toggleClass('is-s-backward')
    }
    $('.sb-container').attr('current-pos', `${targetString}`)
  }

  opacityToggle (targetString, currentPosition) {
    let currentSlide = $(`article.mc-panel.mc-${currentPosition} div:last-child`)
    if (currentPosition === "home") {
      currentSlide.toggleClass('active')
    }
    if (currentPosition != "home") {
      currentSlide.toggleClass('active')
    }
    let targetSlide = $(`article.mc-panel.mc-${targetString} div:last-child`)
    targetSlide.toggleClass('active')
  }
}
