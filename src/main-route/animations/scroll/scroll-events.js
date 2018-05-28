'use strict'

const moveCard = require('./scroll-animation/animation')

$().ready(function () {
  let $scrollDesign = $('#scroll-des')
  let $scrollDevelop = $('#scroll-dev')
  let $scrollGaming = $('#scroll-gam')

  $scrollDesign.scroll(function (ev) {
    $(`section.main-content-scroll.design-scroll`).css({ "background": "black" })
    moveCard(ev)
  })

  $scrollDevelop.scroll(function (ev) {
    $(`section.main-content-scroll.develop-scroll`).css({ "background": "black" })
    moveCard(ev)
  })

  $scrollGaming.scroll(function (ev) {
    $(`section.main-content-scroll.gaming-scroll`).css({ "background": "black" })
    moveCard(ev)
  })
})
