'use strict'

$().ready(function () {
  $('#btn-trigger').click(function () {
    let $currentSlide = $('#trg').attr('current-pos')
    $(`section.main-content-scroll.${$currentSlide}-scroll`).css({
      "background": "black"
    })
  })
})
