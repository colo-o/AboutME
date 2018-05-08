'use strict'

// ScrollAnimations Module, Beware, don't change any value at the animation object 

let controller = new ScrollMagic.Controller()

module.exports = function scene (){
  var wipeAnimation = new TimelineMax()
    .fromTo("section.slides.graphic", 10, { x: "100% "}, { x: "0%", ease: Linear.easeNone, delay: 3 })
    .fromTo("section.slides.develop", 10, { y: "-100% "}, { y: "0%", ease: Linear.easeNone, delay: 3 })
    .fromTo("section.slides.gaming", 10, { y: "100% "}, { y: "0%", ease: Linear.easeNone, delay: 3 })

  new ScrollMagic.Scene({
    triggerElement: "#scroll",
    triggerHook: "onLeave",
    duration: "300%"
  })
  .setPin("#scroll")
  .setTween(wipeAnimation)
  .addIndicators()
  .addTo(controller)

  // let next = document.querySelector("#next")
  // next.addEventListener('click', () => {
  //   let wipeAnimation2 = new TimelineMax()
  //   .fromTo("section.slides.graphic", 10, { x: "100% "}, { x: "0%", ease: Linear.easeNone, delay: 3 })
  //   .fromTo("section.slides.develop", 10, { y: "-100% "}, { y: "0%", ease: Linear.easeNone, delay: 3 })
  //   .fromTo("section.slides.gaming", 10, { y: "100% "}, { y: "0%", ease: Linear.easeNone, delay: 3 })
  //   .play()
  // })

}
