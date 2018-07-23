'use strict'

import yo from 'yo-yo'
import translate from '../../translate/translate'

export default yo`
<section class="c-container c-home is-hidden bord">
  <div id="tg-card-home" class="c-close bord">
    <div class="c-close-f"></div>
    <div class="c-close-s"></div>
  </div>
  <div class="c-title-container">
    <h1 class="c-title black">Steven Anaya</h1>
  </div>
  <div class="c-left-f c-left-mrgn bord">
    <h4 class="red">${translate.message('cardPrinciples')}</h4>
    <p class="black">${translate.message('cardLeader')}</p>
    <p class="black">${translate.message('cardRespect')}</p>
    <p class="black">${translate.message('cardRespon')}</p>
    <p class="black">${translate.message('cardPerse')}</p>
  </div>
  <div class="c-left-s c-left-mrgn bord">
    <h3 class="black">${translate.message('cardSelf')}</h3>
    <h3 class="black">${translate.message('cardSelfC')}</h3>
    <h3 class="black">${translate.message('cardReal')}</h3>
  </div>
  <div class="c-right-f c-right-mrgn">
    <h5 class="black">${translate.message('cardAbout')}</h5>
		<p class="black">${translate.message('cardAboutTextF')}</p>
		<p class="black">${translate.message('cardAboutTextS')}</p>
  </div>
  <div class="c-right-s c-right-mrgn">
    <h5 class="black">${translate.message('cardTools')}</h5>
		<p class="black">${translate.message('cardToolsText')}</p>
  </div>
</section>`
