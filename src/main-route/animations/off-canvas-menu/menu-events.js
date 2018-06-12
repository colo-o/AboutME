'use strict'

const burgerAnimation = require('./burger-animation/burger-animation')
let $burgerMenu

$().ready(function () {
  $burgerMenu = $('#tg-m')
  $burgerMenu.click(function () {
    burgerAnimation()
  })
})
