'use strict'

const burgerAnimation = require('./burger-animation')
let $burgerMenu

$().ready(function () {
  $burgerMenu = $('#tg-m')
  $burgerMenu.click(function () {
    burgerAnimation()
  })
})
