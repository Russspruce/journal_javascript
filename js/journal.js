var moment = require('moment');

exports.JournalEntry = function(heading, entryText){
  this.heading = heading;
  this.entryText = entryText;
  this.time = moment().format("MMM Do YY");
}

exports.JournalEntry.prototype.makeEntry = function(){
  return this.time + " " + this.heading + " " + ": Dear diary, " + this.entryText;
}
