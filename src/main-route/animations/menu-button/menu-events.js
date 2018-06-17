'use strict'

import burgerAnimation from './burger-animation/burger-animation'
let $burgerMenu

$().ready(function () {
  $burgerMenu = $('#tg-m')
  $burgerMenu.click(function () {
    burgerAnimation()
  })
})
