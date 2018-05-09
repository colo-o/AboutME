'use strict'

let yo = require('yo-yo')
let logoTemplate = require('./assetsTemplates/logoTemplate')
let socialTemplate = require('./assetsTemplates/socialTemplate')
let langsTemplate = require('./assetsTemplates/langsTemplates')

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
      ${socialTemplate}
    </div>
    <div class="footer-langs">
      ${langsTemplate}
    </div>
  </footer>
</div>
`
