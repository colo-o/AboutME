'use strict'

const yo = require('yo-yo')
const home = require('./home/template')
const design = require('./design/template')
const develop = require('./develop/template')
const gaming = require('./gaming/template')


module.exports = yo`
  <section class="main-content bord">
    ${home}
    ${design}
    ${develop}
    ${gaming}
  </section>
`
