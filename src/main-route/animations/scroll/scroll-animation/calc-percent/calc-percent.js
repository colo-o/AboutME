'use strict'

let offsetPercent
let rtrnObj = {}

function calcPercent (offsetValue, isDown) {
  let $availHeight = $(window).height()
  offsetPercent = Math.round((offsetValue / $availHeight) * 100)
  if (!isDown && offsetPercent === 21) {
    console.log(offsetPercent)
    return false
  }

  if (isDown === 100) {
    console.log(offsetPercent)
    return false
  }
  console.log(offsetPercent)
  rtrnObj = {
    canBeAnimated: true,
    offsetPercent
  }
  return rtrnObj
}

module.exports = calcPercent
