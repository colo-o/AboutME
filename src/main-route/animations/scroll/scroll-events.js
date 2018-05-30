'use strict'

const animationPipe = require('./scroll-animation/animation-pipe')

$().ready(function () {
  let scrollValue
  let $scrollDesign = $('#scroll-des')
  let $scrollDevelop = $('#scroll-dev')
  let $scrollGaming = $('#scroll-gam')

  $scrollDesign.scroll(function (ev) {
    scrollValue = $scrollDesign.scrollTop()
    console.log(scrollValue)
    animationPipe({ ev, scrollValue, currentTarget: "design"})
  })

  $scrollDevelop.scroll(function (ev) {
    scrollValue = $scrollDevelop.scrollTop()
    console.log(scrollValue)
    animationPipe({ ev, scrollValue, currentTarget: "develop"})
  })

  $scrollGaming.scroll(function (ev) {
    scrollValue = $scrollGaming.scrollTop()
    console.log(scrollValue)
    animationPipe({ ev, scrollValue, currentTarget: "gaming"})
  })
})
