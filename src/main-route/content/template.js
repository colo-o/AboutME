'use strict'

import yo from 'yo-yo'
import home from './home/template'
import design from './design/template'
import develop from './develop/template'
import gaming from './gaming/template'


export default yo`
    <section class="mc-container bord">
      ${home}
      ${design}
      ${develop}
      ${gaming}
    </section>`
