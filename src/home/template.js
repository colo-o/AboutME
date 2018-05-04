'use strict'

let yo = require('yo-yo')
let logoTemplate = require('./assetsTemplates/logoTemplate')

module.exports = yo`<div class="grid-container">
  <div class="menu grid">MENU HAMBURGUESA</div>
  <div class="slide-right grid">FLECHA DER</div>
  <div class="central-content grid">CONTENIDO CENTRAL</div>
  <div class="slide-left grid">FLECHA IZQ</div>
  <div class="footer grid">SOCIAL ICONO</div>
    <section class="home"></section>
    <section class="graphic"></section>
    <section class="develop"></section>
    <section class="gaming"></section>
</div>`
