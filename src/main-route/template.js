'use strict'

const yo = require('yo-yo')
const header = require('./header/template')
const footer = require('./footer/template')
const sideButtons = require('./side-buttons/template')
const content = require('./content/template')

module.exports = yo`
<div>
  ${header}
  ${sideButtons}
  ${content}
  ${footer}
</div>
`
