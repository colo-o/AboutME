'use strict'

export default function isHideButton (currentSlide) {
  let $card = $('#secret')
  if (currentSlide !== 'home') {
    $card.hasClass('card-is-hide') ? $card.removeClass('card-is-hide') : false
  } else {
    !$card.hasClass('card-is-hide') ? $card.addClass('card-is-hide') : false
  }
}
