'use strict'

import yo from 'yo-yo'
import translate from '../translate/translate'

export default yo`
<section id="o-m" class="o-container o-transition">
  <div class="o-items">
    <li class="underline" nav-pos="home">${translate.message('homeMenu')}</li>
    <li class="underline" nav-pos="design">${translate.message('designMenu')}</li>
    <li class="underline" nav-pos="develop">${translate.message('developMenu')}</li>
    <li class="underline" nav-pos="gaming">${translate.message('gamingMenu')}</li>
  </div>
</section>`
