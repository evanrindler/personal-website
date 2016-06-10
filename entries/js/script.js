$(document).ready(function() {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyD7Ruo7xhSTzAqBsyAaDkYB0Qj3sB6M63o",
		authDomain: "nbn-commencement.firebaseapp.com",
		databaseURL: "https://nbn-commencement.firebaseio.com",
		storageBucket: "nbn-commencement.appspot.com",
	};
	firebase.initializeApp(config);

	var db = firebase.database();
	var submissionsRef = db.ref().child('submissions');

	// text formatting
	$('#paragraph').on('click', function() {
		$('#entryText').selection('insert', {text:'<p>', mode: 'before'}).selection('insert', {text: '</p>', mode: 'after'});
        $('#entryText').focus();
	});

	$('#bold').on('click', function() {
		$('#entryText').selection('insert', {text:'<strong>', mode: 'before'}).selection('insert', {text: '</strong>', mode: 'after'});
        $('#entryText').focus();
	});

	$('#italic').on('click', function() {
		$('#entryText').selection('insert', {text:'<em>', mode: 'before'}).selection('insert', {text: '</em>', mode: 'after'});
        $('#entryText').focus();
	});

	$('#insert-link').on('click', function() {
		var link = $('#link').val();
		$('#entryText').selection('insert', {text:'<a href="' + link + '" target="_blank">', mode: 'before'}).selection('insert', {text: '</a>', mode: 'after'});
		$('#link').val("");
        $('#entryText').focus();
	});

	// save entry
	$('form').submit(function(event) {
		event.preventDefault();
		var headline = event.currentTarget.headline.value;
		var author = event.currentTarget.author.value;
		var twitter = event.currentTarget.twitter.value;
		var image = event.currentTarget.media.value;
		var bio = event.currentTarget.bio.value;
		var pullquote = event.currentTarget.pullquote.value;
		var entryText = event.currentTarget.entryText.value;

		var entryObj = {
            headline: headline,
            author: author,
            twitter_acct: twitter,
            img: image,
            author_bio: bio,
            pullquote: pullquote,
            text: entryText
        };

        submissionsRef.push(entryObj);

        $('form').find('input[type="text"], textarea').val("");
		$('.bg-success').remove();
		$('form').prepend('<p class="bg-success">Saved</p>');
	});

});