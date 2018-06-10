'use strict'

let yo = require('yo-yo')
let githubIcon = require('../../../yo-svgs/github-icon')
let facebookIcon = require('../../../yo-svgs/facebook-icon')
let behanceIcon = require('../../../yo-svgs/behance-icon')
let colombianFlag = require('../../../yo-svgs/colombian-flag')
let americanFlag = require('../../../yo-svgs/american-flag')

module.exports = yo`
<footer class="f-container bord" o-s="off">
  <div class="f-social l-margin">
    <a href="https://github.com/StevenAnaya" class="f-icon" target="_blank">${githubIcon}</a>
    <a href="https://www.behance.net/stvanaya50fe" class="f-icon" target="_blank">${facebookIcon}</a>
    <a href="https://www.facebook.com/Stvanaya" class="f-icon" target="_blank">${behanceIcon}</a>
  </div>
  <div class="f-langs r-margin">
    <a href="#" class="f-icon">${colombianFlag}</a>
    <a href="#" class="f-icon">${americanFlag}</a>
  </div>
</footer>`
