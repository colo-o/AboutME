'use strict'

import yo from 'yo-yo'
import githubIcon from '../../../yo-svgs/github-icon'
import facebookIcon from '../../../yo-svgs/facebook-icon'
import behanceIcon from '../../../yo-svgs/behance-icon'
import colombianFlag from '../../../yo-svgs/colombian-flag'
import americanFlag from '../../../yo-svgs/american-flag'

export default yo`
<footer id="fo" class="f-container bord">
  <div class="f-social l-margin">
    <a href="https://github.com/StevenAnaya" class="f-icon" target="_blank">${githubIcon}</a>
    <a href="https://www.facebook.com/Stvanaya" class="f-icon" target="_blank">${facebookIcon}</a>
    <a href="https://www.behance.net/stvanaya50fe" class="f-icon" target="_blank">${behanceIcon}</a>
  </div>
  <div class="f-langs r-margin">
    <a href="#" onclick=${lang.bind(null, 'es')} class="f-icon">${colombianFlag}</a>
    <a href="#" onclick=${lang.bind(null, 'en')} class="f-icon">${americanFlag}</a>
  </div>
</footer>`

function lang(locale) {
  // Vamos a guardar en el localStorage lo que pasemos por parametro que sera
  // el idioma seleccionado por el usuario
  localStorage.locale = locale;
  // Esto lo que hace es recargarnos la pagina en la que estemos cuando
  // seleccionemos el idioma que deseemos
  location.reload();
  // Aca quitamos el # que nos agrega la ancla cuando damos click en ella
  return false;
}
