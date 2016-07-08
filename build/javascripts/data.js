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
var media;
function readData(data, tabletop) { 
    media = data.Media.elements;
    showMediaItems();
}

function showMediaItems() {
    for (i=0; i < media.length; i++) {
        $('.multimedia-entries').append('<div class="sound"><div class="sound-description"><h3><span>' + media[i].title + '</span></h3><p>' + media[i].description + '</p></div>' + media[i].embed + '</div>');
    }
}

$(document).ready(function() {
    init();
});
