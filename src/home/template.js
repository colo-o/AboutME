'use strict'

const yo = require('yo-yo')
const header = require('../header/template')
const footer = require('../footer/template')
const sideButtons = require('../side-buttons/template')
const logo = require('../../yo-svgs/logo')

module.exports = yo`
<div id="super-container">
  ${header}
  ${sideButtons}
  <div class="main-content bord">
    <article class="main-content-panel home">
        ${logo}
    </article>
    <article class="main-content-panel design">
      <h1>Graphic design</h1>
    </article>
    <article class="main-content-panel develop">
      <h1>Web Develop</h1>
    </article>
    <article class="main-content-panel gaming">
      <h1>Gaming</h1>
    </article>
  </div>
  ${footer}
</div>
`
