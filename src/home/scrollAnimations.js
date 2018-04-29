'use strict'

let controller = new ScrollMagic.Controller()

module.exports = function scene (){
  var wipeAnimation = new TimelineMax()
    .fromTo("section.slides.graphic", 2, { x: "100% "}, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.slides.develop", 2, { x: "-100% "}, { x: "0%", ease: Linear.easeNone })

  new ScrollMagic.Scene({
    triggerElement: "#scroll-container",
    triggerHook: "onLeave",
    duration: "300%"
  })
  .setPin("#scroll-container")
  .setTween(wipeAnimation)
  .addIndicators()
  .addTo(controller)
}
