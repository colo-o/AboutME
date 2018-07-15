'use strict'

$().ready(function () {
  $('#secret').click(function () {
    let $currentSlide = $('#trg').attr('current-pos')
    let $currentCard = $(`section.c-container.c-${$currentSlide}`)

    $currentCard.toggleClass('is-visible')
  })

  $('#tg-card-des').click(function () {
    let $currentCard = $('section.c-container.c-design')

    $currentCard.toggleClass('is-visible')
  })

  $('#tg-card-dev').click(function () {
    let $currentCard = $('section.c-container.c-develop')

    $currentCard.toggleClass('is-visible')
  })

  $('#tg-card-gam').click(function () {
    let $currentCard = $('section.c-container.c-gaming')

    $currentCard.toggleClass('is-visible')
  })
})
