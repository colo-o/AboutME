'use strict'

let yo = require('yo-yo')
let logoTemplate = require('./assetsTemplates/logoTemplate')

module.exports = yo`<div class="grid-container">
  <div class="menu grid">MENU HAMBURGUESA</div>
  <div class="slide-right grid">FLECHA DER</div>
  <div class="central-content grid">CONTENIDO CENTRAL</div>
  <div class="slide-left grid">FLECHA IZQ</div>
  <div class="social grid">SOCIAL ICONO</div>
  <div class="langs grid">BANDERAS ICONO</div>
    <section class="home"></section>
    <section class="graphic"></section>
    <section class="develop"></section>
    <section class="gaming"></section>
</div>`
