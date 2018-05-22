'use strict'

$().ready(function () {
  let viewportHeight = $(window).height()
  console.log(viewportHeight)

  $( window ).resize(function() {
    viewportHeight = $(window).height()
    console.log(viewportHeight);
  });

  let scroll = $('#scroll-des')
  scroll.scroll(function (ev) {
    let top = $('section.main-content-scroll.design-scroll').css("top")
    console.log(top)
  })
})
