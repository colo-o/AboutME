'use strict'

$().ready(function () {
	let canvas = document.getElementById('oc-scene')
	let ctx = canvas.getContext('2d')
	
	// Triángulo rellenado
	ctx.beginPath();
	ctx.moveTo(25,25);
	ctx.lineTo(105,25);
	ctx.lineTo(25,105);
	ctx.fill();

	// Triángulo contorneado
	ctx.beginPath();
	ctx.moveTo(125,125);
	ctx.lineTo(125,45);
	ctx.lineTo(45,125);
	ctx.closePath();
	ctx.stroke();
})
