'use strict'

let moveMin = 90
let offsetDesign
let offsetDevelop
let offsetGaming

function calcPercent (offset, currentTarget) {
  let $availHeight = $(window).height()
  let offsetPercent = Math.round((offset / $availHeight) * 100)

  if (offsetPercent === 21) {
    return false
  }

  if (currentTarget === "design") { 
    offsetDesign = offset
    
  }

  if (currentTarget === "develop") {
    console.log('Estoy en develop')
  }

  if (currentTarget === "gaming") {
    console.log('Estoy en gaming')
  }

  console.log(`${offset}, ${$availHeight}, ${currentTarget}`)
}

module.exports = calcPercent
