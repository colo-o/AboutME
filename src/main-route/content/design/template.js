'use strict'

import yo from 'yo-yo'
import translate from '../../translate/translate'

export default yo`
    <article class="mc-panel mc-design">
      <div class="mc-overlay"></div>
      <section class="mc-container-title">
        <h1 class="mc-title">${translate.message('titleDesign')}</h1>
      </section>
      <div class="mc-visibility"></div>
    </article>`
