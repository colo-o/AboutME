'use strict'

let yo = require('yo-yo')

module.exports = yo`
<article id="scroll-dev" class="main-content-panel develop">
  <section class="container-title">
    <h1 class="main-title">Desarrollo Web</h1>
  </section>
  <section class="main-content-scroll develop-scroll bord">
    <section class="main-content-text bord">
      <div class="title-size">
        <h1 class="text-title red">Desarrollo Web</h1>
      </div>
      <p class="black body-size">
        <strong>Frontend</strong>. Soy desarrollador Fullstack en JS. Trabajo con grandes Frameworks y 
        librerias como lo son React.JS, Page.JS, yo-yo.JS, entre otras. Desarrollo desde blogs personales
        con gran estilo hasta Single Page Applications (SPA).
      </p>
      <p class="black body-size">
       <strong>Backend</strong>. En el lado "Oscuro" de la programacion. Aprendi a manejar un runtime Backend
        nuevo y que toma gran importancia por su gran manejo de aplicaciones en tiempo real con gran concurrencia. 
        NodeJS me ha permitido crear aplicaciones rapidas y eficientes orientadas a eventos.
      </p>
    </section>
  </section>
  <div class="visibility-container"></div>
</article>
`
