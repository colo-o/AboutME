'use strict'

$().ready(function () {
  let viewportHeight = $(window).height()
  let offsetClient = 0
  let $scroll = $('#scroll-des')
  console.log(viewportHeight)

  $( window ).resize(function() {
    viewportHeight = $(window).height()
    console.log(viewportHeight);
  });

  $scroll.scroll(function (ev) {
    let $slide = $('.slide-buttons').attr('current-pos')
    let $top = $(`section.main-content-scroll.${$slide}-scroll`).css("top")
    console.log(`${$slide} este del scroll`)
    console.log($top)
  })
})
