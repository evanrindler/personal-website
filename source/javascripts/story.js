// tabletop
var spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1so67UnvjZS-XMfnZFaOAVfXp2-jYuW0XEGREtJk2rFg/pubhtml';
function init() {
        Tabletop.init({ 
            key: spreadsheet_url,
            callback: readData,
            simpleSheet: false 
        });
    }

// read data
var stories;
function readData(data, tabletop) { 
    stories = data.Stories.elements;
    showStory();
}

function showStory() {
    var title = stories[0].title;
    var date = stories[0].date;
    var text = stories[0].text;

    $('.story-title').text(title);
    $('.publish-date').text(date);
    $('.entry-body').append(text);
}

$(document).ready(function() {
    init();
});