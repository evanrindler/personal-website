equalheight = function(container){

var currentTallest = 0,
	currentRowStart = 0,
	rowDivs = new Array(),
	$el,
	topPosition = 0;
	$(container).each(function() {
		$el = $(this);
		$($el).height('auto');
		topPostion = $el.position().top;

		if (currentRowStart != topPostion) {
		 for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
		   rowDivs[currentDiv].height(currentTallest);
		 }
		 rowDivs.length = 0; // empty the array
		 currentRowStart = topPostion;
		 currentTallest = $el.height();
		 rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}
$(document).ready(function() {
	equalheight('.grid-entry');

	$('.quiz').submit(function(event) {
		event.preventDefault();
		var checked = $('input[type="checkbox"]:checked').length;
		$('#quiz-description').hide();
		$('.quiz').hide();
		$('.entry-body').append('<p class="quiz-results">'+ checked + ' out of 30</p><p>You are very Northwestern.</p>');
	});
});

$(window).load(function() {
  equalheight('.grid-entry');
});

$(window).on('resize', function() {
	equalheight('.grid-entry');
});
