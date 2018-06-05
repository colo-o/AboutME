'use strict'

const yo = require('yo-yo')
const cardDesign = require('./design/template')
const cardDevelop = require('./develop/template')
const cardGaming = require('./gaming/template')

module.exports = yo`
  <section class="card-wrap">
    ${cardDesign}
    ${cardDevelop}
    ${cardGaming}
  </section>
`
