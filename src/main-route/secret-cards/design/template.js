'use strict'

import yo from 'yo-yo'
import translate from '../../translate/translate'

export default yo`
    <section class="c-container c-design is-hidden bord">
      <div id="tg-card-des" class="c-close bord">
        <div class="c-close-f"></div>
        <div class="c-close-s"></div>
      </div>
      <div class="c-title-container bord">
        <h1 class="c-title blue">${translate.message('designCardTitle')}</h1>
      </div>
      <div class="c-left-f c-left-mrgn bord">
        <h4 class="red">${translate.message('abilities')}</h4>
        <p class="black">Branding</p>
        <p class="black">${translate.message('cardHabIllustration')}</p>
        <p class="black">${translate.message('cardHabUX')}</p>
      </div>
      <div class="c-left-s c-left-mrgn bord">
        <h3 class="black">${translate.message('cardCreative')}</h3>
        <h3 class="black">${translate.message('cardEffective')}</h3>
        <h3 class="black">${translate.message('cardAgil')}</h3>
        <h3 class="black">${translate.message('cardExpressive')}</h3>
      </div>
      <div class="c-right-f c-right-mrgn">
        <h5 class="black">${translate.message('cardDesBran')}</h5>
        <p class="black">${translate.message('cardDesBranTextF')}</p>
        <p class="black">${translate.message('cardDesBranTextS')}</p>
        <q><i>${translate.message('cardDesBranPhra')}</i></q>
      </div>
      <div class="c-right-s c-right-mrgn">
        <h5 class="black">${translate.message('cardDesUI')}</h5>
        <p class="black">${translate.message('cardDesUITextF')}</p>
        <p class="black">${translate.message('cardDesUITextS')}</p>
        <p class="black">${translate.message('cardDesUITextT')}</p>
        <q><i>${translate.message('cardDesUIPhra')}</i></q>
      </div>
    </section>`
