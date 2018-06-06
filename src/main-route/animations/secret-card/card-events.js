'use strict'

$().ready(function () {
  $('#btn-trigger').click(function () {
    let $currentSlide = $('#trg').attr('current-pos')
    let $currentCard = $(`section.card-container.${$currentSlide}-card`)

    $currentCard.toggleClass('is-visible')
  })

  $('#tg-card-des').click(function () {
    let $currentCard = $("section.card-container.design-card")

    $currentCard.toggleClass('is-visible')
  })

  $('#tg-card-dev').click(function () {
    let $currentCard = $("section.card-container.develop-card")

    $currentCard.toggleClass('is-visible')
  })

  $('#tg-card-gam').click(function () {
    let $currentCard = $("section.card-container.gaming-card")

    $currentCard.toggleClass('is-visible')
  })
})
