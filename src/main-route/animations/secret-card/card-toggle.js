'use strict'

export default function toggleCard (currentPosition) {
  if (currentPosition === "home") {
    return false
  }

  let $currentCard = $(`section.c-container.c-${currentPosition}`)
  let hasClass = $currentCard.hasClass('is-visible')

  if (hasClass) {
    $currentCard.removeClass('is-visible')
  }
}
