'use strict'

let yo = require('yo-yo')
let behanceIcon = require('../../yo-svgs/behance-icon')
let facebookIcon = require('../../yo-svgs/facebook-icon')
let githubIcon = require('../../yo-svgs/github-icon')
let colombianFlag = require('../../yo-svgs/colombian-flag')
let americanFlag = require('../../yo-svgs/american-flag')


module.exports = yo`<div id="super-container">
  <header class="header bord">
    <div class="header-menu">Menu</div>
  </header>
  <section class="slide-buttons bord">
    <div class="slide-buttons-left bord">
      left
    </div>
    <div class="slide-buttons-right bord">
      right
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
      <a href="#">${githubIcon}</a>
      <a href="#">${facebookIcon}</a>
      <a href="#">${behanceIcon}</a>
    </div>
    <div class="footer-langs">
      <a href="#">${colombianFlag}</a>
      ${americanFlag}
    </div>
  </footer>
</div>
`
