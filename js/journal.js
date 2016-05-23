exports.Entry = function(heading, entryText){
  this.heading = heading;
  this.entryText = entryText;
}

exports.Entry.prototype.makeEntry = function(){
  return this.heading + ": Dear diary, " + '<br>' + this.entryText;
}
