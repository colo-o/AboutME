'use strict'

import yo from 'yo-yo'
import leftButton from './buttons/left'
import rightButton from './buttons/right'

export default yo`
<section id="trg" class="sb-container bord" current-pos="home">
	${leftButton}
	${rightButton}
</section>`
