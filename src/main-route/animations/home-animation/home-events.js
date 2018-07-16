'use strict'

$().ready(function() {
		setTimeout(() => {
		$('.c-f').addClass('c-f-off')
		$('.c-s').addClass('c-s-off')
		$('.mc-home .mc-container-title').addClass('mc-title-af')

		$('#h').addClass('h-on')
		$('#trg').addClass('sb-on')
		$('#fo').addClass('f-on')
		$('#secret').addClass('cb-on')
	}, 2000);
})
