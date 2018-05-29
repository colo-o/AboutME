'use strict'

const calcPercent = require('./calc-percent/calc-percent')

function moveCard (args) {
  let { ev, currentTarget } = args
  calcPercent(ev.currentTarget.children[1].offsetTop, currentTarget)
}

module.exports = moveCard
