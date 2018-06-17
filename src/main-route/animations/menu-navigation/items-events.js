'use strict'

import menuPipe from './menu-animation/menu-pipe'

$().ready(function () {
  // attaching all li items with just 1 event
  $('.o-items li').click(function (ev) {
    let navPos = ev.currentTarget.attributes[0].value
    menuPipe(navPos)
  })
})
