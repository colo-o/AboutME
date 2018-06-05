'use strict'

$().ready(function () {
  $('#btn-trigger').click(function () {
    let $currentSlide = $('#trg').attr('current-pos')
    let $currentCard = $(`section.card-container.${$currentSlide}-card`)

    $currentCard.toggleClass('is-hidden')
    $currentCard.toggleClass('is-visible')
  })
})
