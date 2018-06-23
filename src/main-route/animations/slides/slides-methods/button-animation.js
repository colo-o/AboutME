'use strict'

export default function buttonAnimation (isForward) {
	let $btnObj
		isForward ? $btnObj = $('#forward') : $btnObj = $('#backward')
		// $btnObj.hasClass('sb-button-is-clicked') ? $btnObj.toggleClass('sb-button-is-clicked') : false;
		if ($btnObj.hasClass(`${isForward ? 'sb-button-is-clicked-f' : 'sb-button-is-clicked-b'}`)) {
			$btnObj.toggleClass(`${isForward ? 'sb-button-is-clicked-f' : 'sb-button-is-clicked-b'}`)
		}
		setTimeout(() => {
			$btnObj.toggleClass(`${isForward ? 'sb-button-is-clicked-f' : 'sb-button-is-clicked-b'}`)
		}, 0);
}
