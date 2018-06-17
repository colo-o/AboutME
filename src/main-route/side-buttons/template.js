'use strict'

import yo from 'yo-yo'
import leftButton from '../../../yo-svgs/left-button'
import rightButton from '../../../yo-svgs/right-button'

export default yo`
    <section id="trg" class="sb-container bord" current-pos="home">
      <div id="backward" class="sb l-margin bord">
        ${leftButton}
      </div>
      <div id="forward" class="sb r-margin bord">
          ${rightButton}
      </div>
    </section>`
