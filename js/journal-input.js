var JournalEntry = require('./../js/journal.js').JournalEntry;


$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var headingField = $('#heading').val();
    var entryField = $('#entryText').val();
    var newEntry = new JournalEntry(headingField, entryField);
    $(".display").text(newEntry.makeEntry());
  });
});
