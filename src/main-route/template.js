'use strict'

import yo from 'yo-yo'
import header from './header/template'
import offCanvas from './off-canvas-menu/template'
import footer from './footer/template'
import sideButtons from './side-buttons/template'
import content from './content/template'
import buttonCard from './card-button/template'
import cardContent from './secret-cards/template'

export default yo`
  <div class="y-wrap">
    ${header}
    ${offCanvas}
    ${sideButtons}
    ${content}
    ${buttonCard}
    ${cardContent}
    ${footer}
  </div>`
