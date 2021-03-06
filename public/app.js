'use strict';

var learnjs = {}

learnjs.appOnReady = function() {
	window.onhashchange = function() {
		learnjs.showView(window.location.hash);
	};
	learnjs.showView(window.location.hash);
}

learnjs.problemView = function(problemNumber) {
	var title = 'Problem #' + problemNumber + ' Coming Soon!';
	var view = $('.templates .problem-view').clone();
	view.find('.title').text(title);

	return view;
}

learnjs.showView = function(hash) {
	var routes = {
		'#problem': learnjs.problemView
	};

	var hashParts = hash.split('-');
	var viewFn = routes[hashParts[0]];
	if (viewFn) {
		$('.view-container').empty().append(viewFn(hashParts[1]));
	}
	
}
