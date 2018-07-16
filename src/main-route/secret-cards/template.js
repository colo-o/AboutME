'use strict'

import yo from 'yo-yo'
import cardDesign from './design/template'
import cardDevelop from './develop/template'
import cardGaming from './gaming/template'
import cardHome from './home/template'

export default yo`
    <section class="c-wrap">
      ${cardHome}
      ${cardDesign}
      ${cardDevelop}
      ${cardGaming}
    </section>`
