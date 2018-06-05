'use strict'

function toggleCard (currentPosition) {
  if (currentPosition === "home") {
    return false
  }

  let $currentCard = $(`section.card-container.${currentPosition}-card`)
  let hasClass = $currentCard.hasClass('is-visible')

  if (hasClass) {
    $currentCard.removeClass('is-visible')
    $currentCard.addClass('is-hidden')
  }
}

module.exports = toggleCard
