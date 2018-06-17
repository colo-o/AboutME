'use strict'

import yo from 'yo-yo'
import cardDesign from './design/template'
import cardDevelop from './develop/template'
import cardGaming from './gaming/template'

export default yo`
    <section class="c-wrap">
      ${cardDesign}
      ${cardDevelop}
      ${cardGaming}
    </section>`
