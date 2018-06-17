'use strict'

import page from 'page'
import template from './template'
import empty from 'empty-element'
import './animations/slides/slides-events'
import './animations/secret-card/card-events'
import './animations/menu-button/menu-events'
import './animations/menu-navigation/items-events'

page('/', function () {
  let main = document.getElementById('sz')
  main.insertBefore(template, main.childNodes[0])
})
