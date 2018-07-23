'use strict'
// Saphari support require
if(!window.Intl){
  window.Intl = require('intl');
  require = ('intl/locale-data/jsonp/en-US.js');
  require = ('intl/locale-data/jsonp/es.js');
}

import IntlMessageFormat from 'intl-messageformat'

import es from './es'
import en from './en'

let MESSAGES = {}

MESSAGES.es = es
MESSAGES['en'] = en

let locale = localStorage.locale || 'es'

export default {
  message: function (text, opts) {
    // De esta manera tambien podemos setear un objeto vacio
    opts = opts || {}
    // Le pasammos el lenguaje, luego el mensaje que queremos que traduzca pero se lo pasamos
    // [] y luego el idioma al que queremos convertir
    let msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null)
    return msg.format(opts)
  }
}
