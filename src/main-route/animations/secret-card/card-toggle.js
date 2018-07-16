'use strict'

export default function toggleCard (currentPosition) {
  let $currentCard = $(`section.c-container.c-${currentPosition}`)
  let hasClass = $currentCard.hasClass('is-visible')

  if (hasClass) {
    $currentCard.removeClass('is-visible')
  }
}
