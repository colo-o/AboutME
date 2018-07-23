'use strict'

import yo from 'yo-yo'
import translate from '../../translate/translate'

export default yo`
<section class="c-container c-gaming is-hidden bord">
  <div id="tg-card-gam" class="c-close bord">
    <div class="c-close-f"></div>
    <div class="c-close-s"></div>
  </div>
  <div class="c-title-container">
    <h1 class="c-title black">${translate.message('gamingCardTitle')}</h1>
  </div>
  <div class="c-left-f c-left-mrgn bord">
    <h4 class="red">${translate.message('genre')}</h4>
    <p class="black">${translate.message('cardGenreAct')}</p>
    <p class="black">${translate.message('cardGenreAdv')}</p>
    <p class="black">FPS</p>
    <p class="black">${translate.message('cardGenreSpo')}</p>
    <p class="black">${translate.message('cardGenreHor')}</p>
  </div>
  <div class="c-left-s c-left-mrgn bord">
    <h3 class="black">${translate.message('cardAmazing')}</h3>
    <h3 class="black">${translate.message('cardMagic')}</h3>
    <h3 class="black">${translate.message('cardFunny')}</h3>
  </div>
  <div class="c-right-f c-right-mrgn">
    <h5 class="black">${translate.message('cardGamingInt')}</h5>
    <p class="black">${translate.message('cardGamingIntTextF')}</p>
    <p class="black">${translate.message('cardGamingIntTextS')}</p>
  </div>
  <div class="c-right-s c-right-mrgn">
    <h5 class="black">${translate.message('cardGamingLast')}</h5>
    <p class="black">${translate.message('cardGamingLastText')}</p>
  </div>
</section>`
