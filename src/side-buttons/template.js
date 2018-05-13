'use strict'

let yo = require('yo-yo')
let leftButton = require('../../yo-svgs/left-button')
let rightButton = require('../../yo-svgs/right-button')

module.exports = yo`
<section class="slide-buttons bord">
  <div class="slide-buttons-left bord">
    ${leftButton}
  </div>
  <div id="next" class="slide-buttons-right bord">
    ${rightButton}
  </div>
</section>`
