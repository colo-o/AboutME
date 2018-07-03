'use strict'

import yo from 'yo-yo'
import githubIcon from '../../../yo-svgs/github-icon'
import facebookIcon from '../../../yo-svgs/facebook-icon'
import behanceIcon from '../../../yo-svgs/behance-icon'
import colombianFlag from '../../../yo-svgs/colombian-flag'
import americanFlag from '../../../yo-svgs/american-flag'

export default yo`
    <footer class="f-container bord">
      <div class="f-social l-margin">
        <a href="https://github.com/StevenAnaya" class="f-icon" target="_blank">${githubIcon}</a>
        <a href="https://www.behance.net/stvanaya50fe" class="f-icon" target="_blank">${facebookIcon}</a>
        <a href="https://www.facebook.com/Stvanaya" class="f-icon" target="_blank">${behanceIcon}</a>
      </div>
      <div class="f-langs r-margin">
        <a href="#" class="f-icon">${colombianFlag}</a>
        <a href="#" class="f-icon">${americanFlag}</a>
      </div>
    </footer>`
