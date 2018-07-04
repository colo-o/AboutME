'use strict'

import yo from 'yo-yo';
import ocBackground from '../../../yo-svgs/oc-background'

export default yo`
<section id="o-m" class="o-container o-transition">
  <div class="o-background">
    ${ocBackground}
  </div>
  <div class="o-items">
    <li class="underline" nav-pos="home">inicio</li>
    <li class="underline" nav-pos="design">diseño grafico</li>
    <li class="underline" nav-pos="develop">desarrollo web</li>
    <li class="underline" nav-pos="gaming">video juegos</li>
  </div>
</section>`
