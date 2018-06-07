'use strict'

const yo = require('yo-yo')
const leftButton = require('../../../yo-svgs/left-button')
const rightButton = require('../../../yo-svgs/right-button')

module.exports = yo`
<section id="trg" class="sb-container bord" current-pos="home">
  <div id="backward" class="sb-left l-margin bord">
    ${leftButton}
  </div>
  <div id="forward" class="sb-right r-margin bord">
      ${rightButton}
  </div>
</section>`
