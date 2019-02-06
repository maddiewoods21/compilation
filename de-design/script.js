$(function (){

	$(window).mousemove(function(event) {
		$('#mouse-pointer').css({
			'top' : event.pageY + 'px',
			'left' : event.pageX + 'px'
		});
	});

});
