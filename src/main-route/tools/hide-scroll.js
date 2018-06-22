'use strict'
// Este codigo lo tome de un post de Stack Overflow y el codigo fue posteado por tomloprod, al cual
// agradezco su aporte.
$(function () {
  var $body = $(document)
  $body.bind('scroll', function () {
    // Desactivar el scroll horizontal
    if ($body.scrollLeft() !== 0) {
      $body.scrollLeft(0)
    }
  })
})
