'use strict'

let yo = require('yo-yo')
let behanceIcon = require('../../yo-svgs/behance-icon')
let facebookIcon = require('../../yo-svgs/facebook-icon')
let githubIcon = require('../../yo-svgs/github-icon')
let colombianFlag = require('../../yo-svgs/colombian-flag')
let americanFlag = require('../../yo-svgs/american-flag')
let leftButton = require('../../yo-svgs/left-button')
let rightButton = require('../../yo-svgs/right-button')


module.exports = yo`<div id="super-container">
  <header class="header bord">
    <div class="header-menu">
      <div class="header-menu-toggle">
        <p class="header-menu-burger"></p>
        <p class="header-menu-burger"></p>
        <p class="header-menu-burger"></p>
      </div>
    </div>
  </header>
  <section class="slide-buttons bord">
    <div class="slide-buttons-left bord">
      ${leftButton}
    </div>
    <div class="slide-buttons-right bord">
      ${rightButton}
    </div>
  </section>
  <section class="main-content bord">
    <div class="main-content-home">
      <div class="main-content-scroll">
        <h3>Graphic Design</h3>
        <p>UI/UX.El proceso de user research, usabilidad y disenio de experiencias son las areas que mas me encanta explorar y con las que amo trabajar.</p>
      </div>
    </div>
  </section>
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
  </footer>
</div>
`
