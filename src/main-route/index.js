'use strict'

import page from 'page'
import template from './template'
import './animations/home-animation/home-events'
import './animations/slides/slides-events'
import './animations/secret-card/card-events'
import './animations/menu-button/menu-events'
import './animations/menu-navigation/items-events'

page('/', () => {
  let main = document.getElementById('sz')
  main.insertBefore(template, main.childNodes[0])
})
