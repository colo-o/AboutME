'use strict'

let initScrDes = 0
let initScrDev = 0
let initScrGam = 0
let isDown

function pipeDirection (scrollValue, currentTarget) {
  if (currentTarget === "design") {
    return isDownDesign(scrollValue)
  }
  if (currentTarget === "develop") {
    return isDownDevelop(scrollValue)
  }
  if (currentTarget === "gaming") {
    return isDownGaming(scrollValue)
  }
}

function isDownDesign (scrollValue) {
  if (scrollValue > initScrDes) {
    isDown = true
  } else {
    isDown = false
  }
  initScrDes = scrollValue
  return isDown
}

function isDownDevelop (scrollValue) {
  if (scrollValue > initScrDev) {
    isDown = true
  } else {
    isDown = false
  }
  initScrDev = scrollValue
  return isDown
}

function isDownGaming (scrollValue) {
  if (scrollValue > initScrGam) {
    isDown = true
  } else {
    isDown = false
  }
  initScrGam = scrollValue
  return isDown
}

module.exports = pipeDirection
