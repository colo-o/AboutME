'use strict'

import menuPipe from './menu-animation/menu-pipe'

$().ready(function () {
  // attaching all li items with just 1 event
  $('.o-items li').click(function (ev) {
    let currentPosition = $('#trg').attr('current-pos')
    let navPos = ev.currentTarget.attributes[0].value
    menuPipe(currentPosition, navPos)
  })
})
