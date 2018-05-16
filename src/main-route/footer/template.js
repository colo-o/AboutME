'use strict'

let yo = require('yo-yo')
let githubIcon = require('../../../yo-svgs/github-icon')
let facebookIcon = require('../../../yo-svgs/facebook-icon')
let behanceIcon = require('../../../yo-svgs/behance-icon')
let colombianFlag = require('../../../yo-svgs/colombian-flag')
let americanFlag = require('../../../yo-svgs/american-flag')

module.exports = yo`
<footer class="footer bord">
  <div class="footer-social">
    <a href="https://github.com/StevenAnaya" class="footer-icon" target="_blank">${githubIcon}</a>
    <a href="https://www.behance.net/stvanaya50fe" class="footer-icon" target="_blank">${facebookIcon}</a>
    <a href="https://www.facebook.com/Stvanaya" class="footer-icon" target="_blank">${behanceIcon}</a>
  </div>
  <div class="footer-langs">
    <a href="#" class="footer-icon">${colombianFlag}</a>
    <a href="#" class="footer-icon">${americanFlag}</a>
  </div>
</footer>`
