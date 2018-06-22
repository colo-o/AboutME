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

    if (currentIndex === targetIndex) return false

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
    return { targets, isForward }
  }

  animationMove (target, currentPosition, isForward, targetNav) {
    let isArray = Array.isArray(target)
    if (isArray) {
      if (isForward) {
        target.map((target) => {
          let $currentSlide = $(`.mc-panel.mc-${target}`)
          $currentSlide.hasClass('is-s-visible') ? $currentSlide.removeClass('is-s-visible') : false
          $currentSlide.hasClass('is-s-backward') ? false : $currentSlide.addClass('is-s-backward')
        })
        let $target = $(`.mc-panel.mc-${targetNav}`)
        $target.hasClass('is-s-backward') ? $target.removeClass('is-s-backward') : false
        $target.hasClass('is-s-visible') ? false : $target.addClass('is-s-visible')
      } else {
        target.map((target) => {
          let $currentSlide = $(`.mc-panel.mc-${target}`)
          $currentSlide.hasClass('is-s-backward') ? $currentSlide.removeClass('is-s-backward') : false
          $currentSlide.hasClass('is-s-visible') ? $currentSlide.removeClass('is-s-visible') : false
        })
        let $target = $(`.mc-panel.mc-${targetNav}`)
        $target.hasClass('is-s-backward') ? $target.removeClass('is-s-backward') : false
        $target.hasClass('is-s-visible') ? false : $target.addClass('is-s-visible')
      }
    } else {
      let $targetSlide = $(`.mc-panel.mc-${target}`)
      let $currentSlide = $(`.mc-panel.mc-${currentPosition}`)
      if (isForward) {
        $currentSlide.hasClass('is-s-visible') ? $currentSlide.removeClass('is-s-visible') : false
        $currentSlide.hasClass('is-s-backward') ? false : $currentSlide.addClass('is-s-backward')
        $targetSlide.hasClass('is-s-visible') ? false : $targetSlide.addClass('is-s-visible')
      } else {
        $currentSlide.hasClass('is-s-visible') ? $currentSlide.removeClass('is-s-visible') : false
        $targetSlide.hasClass('is-s-backward') ? $targetSlide.removeClass('is-s-backward') : false
        $targetSlide.hasClass('is-s-visible') ? false : $targetSlide.addClass('is-s-visible')
      }
    }
    $('.sb-container').attr('current-pos', `${isArray ? targetNav : target}`)
    this.opacityToggle(isArray ? targetNav : target, currentPosition)
  }

  opacityToggle (targetString, currentPosition) {
    let currentSlide = $(`article.mc-panel.mc-${currentPosition} div:last-child`)
    if (currentPosition === 'home') {
      currentSlide.toggleClass('active')
    }
    if (currentPosition !== 'home') {
      currentSlide.toggleClass('active')
    }
    let targetSlide = $(`article.mc-panel.mc-${targetString} div:last-child`)
    targetSlide.toggleClass('active')
  }
}
