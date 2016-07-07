$(document).ready(function() {
	resizeDiv();
});

$(window).resize(function(){
	resizeDiv();
});

function resizeDiv() {
	if ($(window).width() <= 768) {
		var windowHeight = $(window).height() - $('footer').height() - $('nav').height();
	  	$('#animation').css('min-height', windowHeight );
	} else {
		$('#animation').css('min-height', '100%' );
	}
}
