'use strict'

const yo = require('yo-yo')
const leftButton = require('../../../yo-svgs/left-button')
const rightButton = require('../../../yo-svgs/right-button')

module.exports = yo`
<section class="slide-buttons bord" current-pos="home">
  <div id="backward" class="slide-buttons-left bord">
    ${leftButton}
  </div>
  <div id="forward" class="slide-buttons-right bord">
      ${rightButton}
  </div>
</section>`
