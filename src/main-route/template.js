'use strict'

const yo = require('yo-yo')
const header = require('./header/template')
const offCanvas = require('./off-canvas-menu/template')
const footer = require('./footer/template')
const sideButtons = require('./side-buttons/template')
const content = require('./content/template')
const buttonCard = require('./card-button/template')
const cardContent = require('./secret-cards/template')

module.exports = yo`
  <div class="y-wrap">
    ${header}
    ${offCanvas}
    ${sideButtons}
    ${content}
    ${buttonCard}
    ${cardContent}
    ${footer}
  </div>
`
