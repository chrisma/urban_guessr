function animateCountTo(elem, count, duration) {
	$({countNum: elem.text()}).animate({countNum: count}, {
		duration: duration,
		easing:'linear',
		step: function() {
			elem.text(Math.floor(this.countNum));
		},
		complete: function() {
			elem.text(this.countNum);
		}
	});
}