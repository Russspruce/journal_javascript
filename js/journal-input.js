var Entry = require('./../js/journal.js');

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var headingField = $('#heading').val();
    var entryField = $('#entryText').val();
    $('#journal_submit').hide();
    var newEntry = new Entry(headingField, entryField);
    $(".display").append(newEntry.makeEntry());
  });
});
