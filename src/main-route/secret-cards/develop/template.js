'use strict'

import yo from 'yo-yo'
import translate from '../../translate/translate'

export default yo`
<section class="c-container c-develop is-hidden bord">
  <div id="tg-card-dev" class="c-close bord">
    <div class="c-close-f"></div>
    <div class="c-close-s"></div>
  </div>
  <div class="c-title-container">
    <h1 class="c-title red">${translate.message('developCardTitle')}</h1>
  </div>
  <div class="c-left-f c-left-mrgn bord">
    <h4 class="red">${translate.message('abilities')}</h4>
    <p class="black">${translate.message('cardHabJS')}</p>
    <p class="black">${translate.message('cardHabNode')}</p>
    <p class="black">Web Sockets</p>
    <p class="black">${translate.message('cardHabWebDes')}</p>
    <p class="black">${translate.message('cardHabAni')}</p>
    <p class="black">${translate.message('cardHabResp')}</p>
    <p class="black">${translate.message('cardHabApi')}</p>
  </div>
  <div class="c-left-s c-left-mrgn bord">
    <h3 class="black">${translate.message('cardClean')}</h3>
    <h3 class="black">${translate.message('cardReadable')}</h3>
    <h3 class="black">${translate.message('cardQuick')}</h3>
    <h3 class="black">${translate.message('cardFunctional')}</h3>
  </div>
  <div class="c-right-f c-right-mrgn">
    <h5 class="black">${translate.message('cardDevClean')}</h5>
    <p class="black">${translate.message('cardDevCleanText')}</p>
    <h5 class="black">${translate.message('cardDevConc')}</h5>
    <p class="black">${translate.message('cardDevConcText')}
    </p>
  </div>
  <div class="c-right-s c-right-mrgn">
    <h5 class="black">${translate.message('cardDevBoot')}</h5>
    <p class="black">${translate.message('cardDevBootText')}</p>
    <h5 class="black">${translate.message('cardDevAni')}</h5>
    <p class="black">${translate.message('cardDevAniText')}</p>
    <q><i>${translate.message('cardDevAniPhra')}</i></q>
  </div>
</section>`
