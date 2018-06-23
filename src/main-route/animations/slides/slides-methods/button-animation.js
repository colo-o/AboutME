'use strict'

export default function buttonAnimation (isForward) {
	let $btnObj
		isForward ? $btnObj = $('#forward') : $btnObj = $('#backward')
		if ($btnObj.hasClass(`${isForward ? 'sb-button-is-clicked-f' : 'sb-button-is-clicked-b'}`)) {
			$btnObj.toggleClass(`${isForward ? 'sb-button-is-clicked-f' : 'sb-button-is-clicked-b'}`)
		}
		setTimeout(() => {
			$btnObj.toggleClass(`${isForward ? 'sb-button-is-clicked-f' : 'sb-button-is-clicked-b'}`)
		}, 0);
}
