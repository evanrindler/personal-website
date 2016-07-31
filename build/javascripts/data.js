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
var media, stories;
function readData(data, tabletop) { 
    media = data.Media.elements;
    stories = data.Stories.elements;
    showMediaItems();
    // showStoriesList();
}

function showMediaItems() {
    for (i=0; i < media.length; i++) {
        $('.multimedia-entries').append('<div class="sound"><div class="sound-description"><h3><span>' + media[i].title + '</span></h3><p>' + media[i].description + '</p></div>' + media[i].embed + '</div>');
    }
}

function showStoriesList() {
    for (i=0; i < stories.length; i++) {
        var preview = stories[i].text;
        var story_preview = preview.slice(0, 300);
        $('.story-list').append('<div class="story-entry"><h2>' + stories[i].title + '</h2><p class="story-date">' + stories[i].date + '</p><div class="story-preview">' + story_preview +'...</div><p class="read-more">Read more...</p></div>');
    }
}

$(document).ready(function() {
    init();
});
