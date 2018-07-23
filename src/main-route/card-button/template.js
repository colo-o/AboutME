'use strict'

import yo from 'yo-yo'
import translate from '../translate/translate'

export default yo`
    <section id="secret" class="c-button-container">
      <div id="btn-trigger" class="c-button-wrap">
        <div class="c-button-a"></div>
      </div>
      <div class="c-button-advice"><p>${translate.message('adviceText')}</p></div>
    </section>`
