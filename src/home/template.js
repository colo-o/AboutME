'use strict'

let yo = require('yo-yo')
let header = require('../header/template')
let footer = require('../footer/template')
let sideButtons = require('../side-buttons/template')
let logo = require('../../yo-svgs/logo')

module.exports = yo`
<div id="super-container">
  ${header}
  ${sideButtons}
  <div class="main-content bord">
    <article class="main-content-panel home">
        ${logo}
    </article>
    <article class="main-content-panel design">

    </article>
    <article class="main-content-panel develop">

    </article>
    <article class="main-content-panel gaming">

    </article>
  </div>
  ${footer}
</div>
`
