'use strict'

let slides = ['home', 'design', 'develop', 'gaming']

export default class {
  constructor () {
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

  multipleMoveTargets (currentPosition, targetNav) {
    let targets = []
    let arrayIndexPos = []
    let arrayStringPos = [ currentPosition, targetNav ]
    let isForward

    arrayStringPos.map((string) => {
      let index = slides.findIndex((slide) => {
        if (string === slide) return slide
      })
      arrayIndexPos.push(index)
    })

    let targetIndex = arrayIndexPos[1]
    let currentIndex = arrayIndexPos[0]

    if (currentIndex === targetIndex) return false;

    currentIndex > targetIndex ? isForward = false : isForward = true

    for (let index = 0; index < slides.length; index++) {
      if (isForward) {
        if (index < targetIndex) {
          index < currentIndex ? false : targets.push(slides[index])
        }
      } else {
        if (index > targetIndex) {
          index > currentIndex ? false : targets.unshift(slides[index])
        }
      }
    }
    console.log(targets, targetNav)

    return { targets, isForward }
  }

  singleAnimationMove (targetString, currentPosition, isForward) {
    if (isForward) {
      $(`.mc-panel.mc-${targetString}`).toggleClass('is-s-visible')
      $(`.mc-panel.mc-${currentPosition}`).toggleClass('is-s-backward')
    } else {
      $(`.mc-panel.mc-${currentPosition}`).toggleClass('is-s-visible')
      $(`.mc-panel.mc-${targetString}`).toggleClass('is-s-backward')
    }
    $('.sb-container').attr('current-pos', `${targetString}`)
  }

  multipleAnimationMove (targets, targetNav, currentPosition, isForward) {
    targets.map((target) => {
      if (isForward) {
        $(`.mc-panel.mc-${target}`).addClass('is-s-backward')
        // $(`.mc-panel.mc-${target}`).removeClass('is-s-visible')
      } else {
        $(`.mc-panel.mc-${target}`).removeClass('is-s-backward')
        $(`.mc-panel.mc-${target}`).removeClass('is-s-visible')
      }
    })
    $(`.mc-panel.mc-${targetNav}`).addClass('is-s-visible')
    $('.sb-container').attr('current-pos', `${targetNav}`)

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
