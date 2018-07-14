'use strict'

$().ready(function() {
	// $('.y-wrap').css({
	// 	opacity: "1"
	// })
	setTimeout(() => {
		$('.c-f').addClass('c-f-off')
		$('.c-s').addClass('c-s-off')

		$('#h').addClass('h-on')
		$('#trg').addClass('sb-on')
		$('#fo').addClass('f-on')
	}, 1000);
})
